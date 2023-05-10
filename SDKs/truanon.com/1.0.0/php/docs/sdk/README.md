# SDK

## Overview

Welcome to TruAnon!
Thank you for helping make the Internet a safer place to be.

Adopting TruAnon is simple. There is no setup or dependencies, nothing to store or process. Making identity part of your service is fun, and you’ll be up and running in a matter of minutes.

TruAnon Private Token is used anytime you request information from TruAnon and you must edit this into the Variables section for this collection.

This API contains two endpoints and both require these same two arguments, also found in the Variables section of this collection.

These two arguments are:

TruAnon Service Identifier

and

Your Member Name

Your TruAnon Service Identifier was provided by TruAnon and is likely the root domain of your site or service. Your Member Name is the unique member ID on your system that you would like to query.

Information is continuously updated for display purposes and aside from performance considerations, there should be no need to capture or save anything from TruAnon.

### Available Operations

* [getProfile](#getprofile) - Get Profile
* [getToken](#gettoken) - Get Token

## getProfile

get_profile Private API: Request confirmed profile data for your unique member ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProfileRequest();
    $request->id = '{{your-member-id}}';
    $request->service = '{{service-identifier}}';

    $response = $sdk->sdk->getProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getToken

request_token Private API: Request a Proof token to let the member confirm in a popup interface

        {"id":"qjgblv72bzzio","type":"Proof","active":true,"name":"New Proof"}

Step 2. Create a verifyProfile Public Web link: Use the Proof token id as the token argument in your public URL used to open a new target popup. This activity is where members may confirm immediately.
    
        https://staging.truanon.com/verifyProfile?id=john_doe&service=securecannabisalliance&token=qjgblv72bzzio

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTokenRequest();
    $request->id = '{{your-member-id}}';
    $request->service = '{{service-identifier}}';

    $response = $sdk->sdk->getToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
