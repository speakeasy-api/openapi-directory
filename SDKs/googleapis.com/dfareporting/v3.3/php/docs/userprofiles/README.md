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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'iusto';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->profileId = 'ex';
    $request->quotaUser = 'maxime';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'quidem';

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
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->fields = 'quidem';
    $request->key = 'soluta';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'labore';

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
