# accountUserProfiles

### Available Operations

* [dfareportingAccountUserProfilesGet](#dfareportingaccountuserprofilesget) - Gets one account user profile by ID.
* [dfareportingAccountUserProfilesInsert](#dfareportingaccountuserprofilesinsert) - Inserts a new account user profile.
* [dfareportingAccountUserProfilesList](#dfareportingaccountuserprofileslist) - Retrieves a list of account user profiles, possibly filtered. This method supports paging.
* [dfareportingAccountUserProfilesPatch](#dfareportingaccountuserprofilespatch) - Updates an existing account user profile. This method supports patch semantics.
* [dfareportingAccountUserProfilesUpdate](#dfareportingaccountuserprofilesupdate) - Updates an existing account user profile.

## dfareportingAccountUserProfilesGet

Gets one account user profile by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountUserProfilesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountUserProfilesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountUserProfilesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->fields = 'quasi';
    $request->id = '9da1ffe7-8f09-47b0-874f-15471b5e6e13';
    $request->key = 'quidem';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->profileId = 'excepturi';
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new DfareportingAccountUserProfilesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountUserProfiles->dfareportingAccountUserProfilesGet($request, $requestSecurity);

    if ($response->accountUserProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAccountUserProfilesInsert

Inserts a new account user profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountUserProfilesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountUserProfile;
use \OpenAPI\OpenAPI\Models\Shared\ObjectFilter;
use \OpenAPI\OpenAPI\Models\Shared\ObjectFilterStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountUserProfileTraffickerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountUserProfileUserAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountUserProfilesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountUserProfilesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accountUserProfile = new AccountUserProfile();
    $request->accountUserProfile->accountId = 'voluptates';
    $request->accountUserProfile->active = false;
    $request->accountUserProfile->advertiserFilter = new ObjectFilter();
    $request->accountUserProfile->advertiserFilter->kind = 'quasi';
    $request->accountUserProfile->advertiserFilter->objectIds = [
        'sint',
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->accountUserProfile->advertiserFilter->status = ObjectFilterStatusEnum::NONE;
    $request->accountUserProfile->campaignFilter = new ObjectFilter();
    $request->accountUserProfile->campaignFilter->kind = 'consequatur';
    $request->accountUserProfile->campaignFilter->objectIds = [
        'quibusdam',
        'explicabo',
        'deserunt',
    ];
    $request->accountUserProfile->campaignFilter->status = ObjectFilterStatusEnum::ALL;
    $request->accountUserProfile->comments = 'quibusdam';
    $request->accountUserProfile->email = 'Dillan_Deckow@gmail.com';
    $request->accountUserProfile->id = 'quos';
    $request->accountUserProfile->kind = 'perferendis';
    $request->accountUserProfile->locale = 'magni';
    $request->accountUserProfile->name = 'Vernon Abshire';
    $request->accountUserProfile->siteFilter = new ObjectFilter();
    $request->accountUserProfile->siteFilter->kind = 'excepturi';
    $request->accountUserProfile->siteFilter->objectIds = [
        'facilis',
        'tempore',
    ];
    $request->accountUserProfile->siteFilter->status = ObjectFilterStatusEnum::NONE;
    $request->accountUserProfile->subaccountId = 'delectus';
    $request->accountUserProfile->traffickerType = AccountUserProfileTraffickerTypeEnum::INTERNAL_TRAFFICKER;
    $request->accountUserProfile->userAccessType = AccountUserProfileUserAccessTypeEnum::NORMAL_USER;
    $request->accountUserProfile->userRoleFilter = new ObjectFilter();
    $request->accountUserProfile->userRoleFilter->kind = 'eligendi';
    $request->accountUserProfile->userRoleFilter->objectIds = [
        'aliquid',
        'provident',
        'necessitatibus',
    ];
    $request->accountUserProfile->userRoleFilter->status = ObjectFilterStatusEnum::ASSIGNED;
    $request->accountUserProfile->userRoleId = 'officia';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'dolorum';
    $request->key = 'in';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->profileId = 'illum';
    $request->quotaUser = 'maiores';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DfareportingAccountUserProfilesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountUserProfiles->dfareportingAccountUserProfilesInsert($request, $requestSecurity);

    if ($response->accountUserProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAccountUserProfilesList

Retrieves a list of account user profiles, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountUserProfilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountUserProfilesListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountUserProfilesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountUserProfilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountUserProfilesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cumque';
    $request->active = false;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'aliquid';
    $request->ids = [
        'accusamus',
        'non',
        'occaecati',
    ];
    $request->key = 'enim';
    $request->maxResults = 881736;
    $request->oauthToken = 'delectus';
    $request->pageToken = 'quidem';
    $request->prettyPrint = false;
    $request->profileId = 'provident';
    $request->quotaUser = 'nam';
    $request->searchString = 'id';
    $request->sortField = DfareportingAccountUserProfilesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingAccountUserProfilesListSortOrderEnum::DESCENDING;
    $request->subaccountId = 'sapiente';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'deserunt';
    $request->userRoleId = 'nisi';

    $requestSecurity = new DfareportingAccountUserProfilesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountUserProfiles->dfareportingAccountUserProfilesList($request, $requestSecurity);

    if ($response->accountUserProfilesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAccountUserProfilesPatch

Updates an existing account user profile. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountUserProfilesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountUserProfile;
use \OpenAPI\OpenAPI\Models\Shared\ObjectFilter;
use \OpenAPI\OpenAPI\Models\Shared\ObjectFilterStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountUserProfileTraffickerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountUserProfileUserAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountUserProfilesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountUserProfilesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accountUserProfile = new AccountUserProfile();
    $request->accountUserProfile->accountId = 'natus';
    $request->accountUserProfile->active = false;
    $request->accountUserProfile->advertiserFilter = new ObjectFilter();
    $request->accountUserProfile->advertiserFilter->kind = 'omnis';
    $request->accountUserProfile->advertiserFilter->objectIds = [
        'perferendis',
        'nihil',
    ];
    $request->accountUserProfile->advertiserFilter->status = ObjectFilterStatusEnum::NONE;
    $request->accountUserProfile->campaignFilter = new ObjectFilter();
    $request->accountUserProfile->campaignFilter->kind = 'distinctio';
    $request->accountUserProfile->campaignFilter->objectIds = [
        'labore',
        'labore',
        'suscipit',
    ];
    $request->accountUserProfile->campaignFilter->status = ObjectFilterStatusEnum::ASSIGNED;
    $request->accountUserProfile->comments = 'nobis';
    $request->accountUserProfile->email = 'Shaina29@yahoo.com';
    $request->accountUserProfile->id = 'et';
    $request->accountUserProfile->kind = 'excepturi';
    $request->accountUserProfile->locale = 'ullam';
    $request->accountUserProfile->name = 'Miss Julian Marvin';
    $request->accountUserProfile->siteFilter = new ObjectFilter();
    $request->accountUserProfile->siteFilter->kind = 'mollitia';
    $request->accountUserProfile->siteFilter->objectIds = [
        'eum',
        'dolor',
    ];
    $request->accountUserProfile->siteFilter->status = ObjectFilterStatusEnum::ALL;
    $request->accountUserProfile->subaccountId = 'odit';
    $request->accountUserProfile->traffickerType = AccountUserProfileTraffickerTypeEnum::INTERNAL_TRAFFICKER;
    $request->accountUserProfile->userAccessType = AccountUserProfileUserAccessTypeEnum::NORMAL_USER;
    $request->accountUserProfile->userRoleFilter = new ObjectFilter();
    $request->accountUserProfile->userRoleFilter->kind = 'iure';
    $request->accountUserProfile->userRoleFilter->objectIds = [
        'debitis',
        'eius',
        'maxime',
        'deleniti',
    ];
    $request->accountUserProfile->userRoleFilter->status = ObjectFilterStatusEnum::ALL;
    $request->accountUserProfile->userRoleId = 'in';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'ullam';
    $request->id = 'b7fd2ed0-2892-41cd-9c69-2601fb576b0d';
    $request->key = 'nemo';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->profileId = 'perferendis';
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new DfareportingAccountUserProfilesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountUserProfiles->dfareportingAccountUserProfilesPatch($request, $requestSecurity);

    if ($response->accountUserProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAccountUserProfilesUpdate

Updates an existing account user profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountUserProfilesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountUserProfile;
use \OpenAPI\OpenAPI\Models\Shared\ObjectFilter;
use \OpenAPI\OpenAPI\Models\Shared\ObjectFilterStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountUserProfileTraffickerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountUserProfileUserAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountUserProfilesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountUserProfilesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accountUserProfile = new AccountUserProfile();
    $request->accountUserProfile->accountId = 'corporis';
    $request->accountUserProfile->active = false;
    $request->accountUserProfile->advertiserFilter = new ObjectFilter();
    $request->accountUserProfile->advertiserFilter->kind = 'hic';
    $request->accountUserProfile->advertiserFilter->objectIds = [
        'nobis',
        'dolores',
        'quis',
    ];
    $request->accountUserProfile->advertiserFilter->status = ObjectFilterStatusEnum::ASSIGNED;
    $request->accountUserProfile->campaignFilter = new ObjectFilter();
    $request->accountUserProfile->campaignFilter->kind = 'dignissimos';
    $request->accountUserProfile->campaignFilter->objectIds = [
        'quis',
    ];
    $request->accountUserProfile->campaignFilter->status = ObjectFilterStatusEnum::NONE;
    $request->accountUserProfile->comments = 'eos';
    $request->accountUserProfile->email = 'Cecilia.Schimmel@gmail.com';
    $request->accountUserProfile->id = 'vero';
    $request->accountUserProfile->kind = 'nostrum';
    $request->accountUserProfile->locale = 'hic';
    $request->accountUserProfile->name = 'Alejandro Purdy DDS';
    $request->accountUserProfile->siteFilter = new ObjectFilter();
    $request->accountUserProfile->siteFilter->kind = 'consequuntur';
    $request->accountUserProfile->siteFilter->objectIds = [
        'error',
        'eaque',
        'occaecati',
    ];
    $request->accountUserProfile->siteFilter->status = ObjectFilterStatusEnum::ALL;
    $request->accountUserProfile->subaccountId = 'adipisci';
    $request->accountUserProfile->traffickerType = AccountUserProfileTraffickerTypeEnum::EXTERNAL_TRAFFICKER;
    $request->accountUserProfile->userAccessType = AccountUserProfileUserAccessTypeEnum::READ_ONLY_SUPER_USER;
    $request->accountUserProfile->userRoleFilter = new ObjectFilter();
    $request->accountUserProfile->userRoleFilter->kind = 'modi';
    $request->accountUserProfile->userRoleFilter->objectIds = [
        'dolorum',
        'deleniti',
        'pariatur',
    ];
    $request->accountUserProfile->userRoleFilter->status = ObjectFilterStatusEnum::ASSIGNED;
    $request->accountUserProfile->userRoleId = 'nobis';
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'quos';
    $request->key = 'aliquid';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->profileId = 'dolorem';
    $request->quotaUser = 'dolor';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new DfareportingAccountUserProfilesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountUserProfiles->dfareportingAccountUserProfilesUpdate($request, $requestSecurity);

    if ($response->accountUserProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
