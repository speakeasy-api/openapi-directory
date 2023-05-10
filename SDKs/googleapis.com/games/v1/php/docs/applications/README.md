# applications

### Available Operations

* [gamesApplicationsGet](#gamesapplicationsget) - Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.
* [gamesApplicationsGetEndPoint](#gamesapplicationsgetendpoint) - Returns a URL for the requested end point type.
* [gamesApplicationsPlayed](#gamesapplicationsplayed) - Indicate that the currently authenticated user is playing your application.
* [gamesApplicationsVerify](#gamesapplicationsverify) - Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

## gamesApplicationsGet

Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesApplicationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesApplicationsGetPlatformTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesApplicationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesApplicationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->applicationId = 'culpa';
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->language = 'mollitia';
    $request->oauthToken = 'dolorem';
    $request->platformType = GamesApplicationsGetPlatformTypeEnum::IOS;
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new GamesApplicationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applications->gamesApplicationsGet($request, $requestSecurity);

    if ($response->application !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesApplicationsGetEndPoint

Returns a URL for the requested end point type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesApplicationsGetEndPointRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesApplicationsGetEndPointEndPointTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesApplicationsGetEndPointSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesApplicationsGetEndPointRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->applicationId = 'quam';
    $request->callback = 'molestiae';
    $request->endPointType = GamesApplicationsGetEndPointEndPointTypeEnum::END_POINT_TYPE_UNSPECIFIED;
    $request->fields = 'error';
    $request->key = 'quia';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'vitae';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'animi';

    $requestSecurity = new GamesApplicationsGetEndPointSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applications->gamesApplicationsGetEndPoint($request, $requestSecurity);

    if ($response->endPoint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesApplicationsPlayed

Indicate that the currently authenticated user is playing your application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesApplicationsPlayedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesApplicationsPlayedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesApplicationsPlayedRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->fields = 'tenetur';
    $request->key = 'ipsam';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new GamesApplicationsPlayedSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applications->gamesApplicationsPlayed($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesApplicationsVerify

Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesApplicationsVerifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesApplicationsVerifySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesApplicationsVerifyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->applicationId = 'quasi';
    $request->callback = 'reiciendis';
    $request->fields = 'voluptatibus';
    $request->key = 'vero';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new GamesApplicationsVerifySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applications->gamesApplicationsVerify($request, $requestSecurity);

    if ($response->applicationVerifyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
