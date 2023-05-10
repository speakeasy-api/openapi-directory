# userProfiles

### Available Operations

* [dfareportingUserProfilesGet](#dfareportinguserprofilesget) - Gets one user profile by ID.
* [dfareportingUserProfilesList](#dfareportinguserprofileslist) - Retrieves list of user profiles for a user.

## dfareportingUserProfilesGet

Gets one user profile by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserProfilesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserProfilesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserProfilesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserProfilesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserProfilesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingUserProfilesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'dicta';
    $request->key = 'repellat';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->profileId = 'provident';
    $request->quotaUser = 'illum';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new DfareportingUserProfilesGetSecurity();
    $requestSecurity->option1 = new DfareportingUserProfilesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userProfiles->dfareportingUserProfilesGet($request, $requestSecurity);

    if ($response->userProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingUserProfilesList

Retrieves list of user profiles for a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserProfilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserProfilesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserProfilesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserProfilesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserProfilesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingUserProfilesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempore';
    $request->fields = 'praesentium';
    $request->key = 'excepturi';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'doloremque';

    $requestSecurity = new DfareportingUserProfilesListSecurity();
    $requestSecurity->option1 = new DfareportingUserProfilesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userProfiles->dfareportingUserProfilesList($request, $requestSecurity);

    if ($response->userProfileList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
