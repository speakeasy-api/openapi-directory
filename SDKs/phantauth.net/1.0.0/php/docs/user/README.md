# user

## Overview

The *user* resource contains the [Standard Claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) defined in the [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) specifications. It also includes some PhantAuth-specific property.

To use PhantAuth as an OpenID Connect provider, you don't need to carry out the user-related operations described here.
You don't need to generate users in advance. If PhantAuth requires a piece of data that belongs to a specific user, it will be generated in runtime.
The deterministic nature of the generators guarantee that the same user object will be generated to the same user name.
The only exception is selfie token generation, when the provided user data are used to create a so-called selfie token, which can later be used as a login name.

### Available Operations

* [getUserUsername](#getuserusername) - Get a User
* [getUserUsernameTokenKind](#getuserusernametokenkind) - Get a User Token
* [postUser](#postuser) - Create a User Selfie

## getUserUsername

Use this endpoint to generate a random user. The user is generated in a deterministic way, on the bases of the user name given as a path parameter.
In the case of identical user names, the endpoint will generate the same user object. The properties of the generated user object are randomly generated on the basis of the user name.
In lack of a user name, all calls generate a different user object to the randomly generated user name.

By providing an email address as the `username` parameter, you can customize the user picture by the use of the gravatar associated with the email address.

If the `username` parameter contains at least one dot (`.`) or space (` `) character, the whole name is produced from the parameter, rather than being generated.
In this case, these cahracters play the role of separator between the units of the full name (family name, given name).`

The result is always a user object. If you want to generate multiple users in one single step, you can do it by the use of *Team* generation.
The members of a team are users randomly generated from the team name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserUsernameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserUsernameRequest();
    $request->username = 'Sarah_Wolff';

    $response = $sdk->user->getUserUsername($request);

    if ($response->getUserUsername200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserUsernameTokenKind

It is used to generate OpenID Connect tokens as path parameters to a user of a given name.

This method is mainly used in the testing process, when, for example, the token received from the normal authenticaton flow is not available to the test code.
Generating an access token, for example, will let you avoid authentication, and immediately call an operation requiring the access token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserUsernameTokenKindRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserUsernameTokenKindKindEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserUsernameTokenKindRequest();
    $request->kind = GetUserUsernameTokenKindKindEnum::SELFIE;
    $request->scope = 'esse';
    $request->username = 'Jovan.Sauer72';

    $response = $sdk->user->getUserUsernameTokenKind($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUser

To create a selfie token from the user data, you need an opaqe string token, which contains the encoded user properties sent in the request.
Later, the selfie token can be used as a login name. In this case, the user data is included in the selfie token, that is, the user properties are taken from the token.
By the use of a selfie token, you can use your own user objects during the authentication process.

Its use, however, is limited by its relatively large size (more than 100 characters), which exceeds the maximum size of the user name in several systems.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostUserRequestBodyAddress;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUserRequestBody();
    $request->atId = 'officia';
    $request->address = new PostUserRequestBodyAddress();
    $request->address->country = 'Monaco';
    $request->address->formatted = 'fugit';
    $request->address->locality = 'deleniti';
    $request->address->postalCode = '75144-2177';
    $request->address->region = 'esse';
    $request->address->streetAddress = 'ipsum';
    $request->birthdate = 'excepturi';
    $request->email = 'Aiden.Hane@gmail.com';
    $request->emailVerified = false;
    $request->familyName = 'iste';
    $request->gender = 'female';
    $request->givenName = 'natus';
    $request->locale = 'laboriosam';
    $request->me = 'hic';
    $request->middleName = 'saepe';
    $request->name = 'Harvey Hessel';
    $request->nickname = 'saepe';
    $request->password = 'quidem';
    $request->phoneNumber = 'architecto';
    $request->phoneNumberVerified = false;
    $request->picture = 'ipsa';
    $request->preferredUsername = 'reiciendis';
    $request->profile = 'est';
    $request->sub = 'mollitia';
    $request->uid = 'laborum';
    $request->updatedAt = 1709.09;
    $request->webmail = 'dolorem';
    $request->website = 'corporis';
    $request->zoneinfo = 'explicabo';

    $response = $sdk->user->postUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
