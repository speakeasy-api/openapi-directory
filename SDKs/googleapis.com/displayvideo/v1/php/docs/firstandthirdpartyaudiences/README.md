# firstAndThirdPartyAudiences

### Available Operations

* [displayvideoFirstAndThirdPartyAudiencesCreate](#displayvideofirstandthirdpartyaudiencescreate) - Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
* [displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers](#displayvideofirstandthirdpartyaudienceseditcustomermatchmembers) - Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
* [displayvideoFirstAndThirdPartyAudiencesGet](#displayvideofirstandthirdpartyaudiencesget) - Gets a first and third party audience.
* [displayvideoFirstAndThirdPartyAudiencesList](#displayvideofirstandthirdpartyaudienceslist) - Lists first and third party audiences. The order is defined by the order_by parameter.
* [displayvideoFirstAndThirdPartyAudiencesPatch](#displayvideofirstandthirdpartyaudiencespatch) - Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

## displayvideoFirstAndThirdPartyAudiencesCreate

Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoFirstAndThirdPartyAudiencesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceInput;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceAudienceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactInfoList;
use \OpenAPI\OpenAPI\Models\Shared\ContactInfo;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MobileDeviceIdList;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoFirstAndThirdPartyAudiencesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoFirstAndThirdPartyAudiencesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firstAndThirdPartyAudienceInput = new FirstAndThirdPartyAudienceInput();
    $request->firstAndThirdPartyAudienceInput->appId = 'aliquam';
    $request->firstAndThirdPartyAudienceInput->audienceType = FirstAndThirdPartyAudienceAudienceTypeEnum::CUSTOMER_MATCH_USER_ID;
    $request->firstAndThirdPartyAudienceInput->contactInfoList = new ContactInfoList();
    $request->firstAndThirdPartyAudienceInput->contactInfoList->contactInfos = [
        new ContactInfo(),
        new ContactInfo(),
        new ContactInfo(),
        new ContactInfo(),
    ];
    $request->firstAndThirdPartyAudienceInput->description = 'eligendi';
    $request->firstAndThirdPartyAudienceInput->displayName = 'sint';
    $request->firstAndThirdPartyAudienceInput->firstAndThirdPartyAudienceType = FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum::FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED;
    $request->firstAndThirdPartyAudienceInput->membershipDurationDays = 'hic';
    $request->firstAndThirdPartyAudienceInput->mobileDeviceIdList = new MobileDeviceIdList();
    $request->firstAndThirdPartyAudienceInput->mobileDeviceIdList->mobileDeviceIds = [
        'quas',
        'totam',
        'molestias',
    ];
    $request->accessToken = 'odio';
    $request->advertiserId = 'eaque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'quos';
    $request->key = 'iste';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new DisplayvideoFirstAndThirdPartyAudiencesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firstAndThirdPartyAudiences->displayvideoFirstAndThirdPartyAudiencesCreate($request, $requestSecurity);

    if ($response->firstAndThirdPartyAudience !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers

Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EditCustomerMatchMembersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactInfoList;
use \OpenAPI\OpenAPI\Models\Shared\ContactInfo;
use \OpenAPI\OpenAPI\Models\Shared\MobileDeviceIdList;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->editCustomerMatchMembersRequest = new EditCustomerMatchMembersRequest();
    $request->editCustomerMatchMembersRequest->addedContactInfoList = new ContactInfoList();
    $request->editCustomerMatchMembersRequest->addedContactInfoList->contactInfos = [
        new ContactInfo(),
        new ContactInfo(),
        new ContactInfo(),
        new ContactInfo(),
    ];
    $request->editCustomerMatchMembersRequest->addedMobileDeviceIdList = new MobileDeviceIdList();
    $request->editCustomerMatchMembersRequest->addedMobileDeviceIdList->mobileDeviceIds = [
        'cum',
        'ipsum',
        'adipisci',
        'saepe',
    ];
    $request->editCustomerMatchMembersRequest->advertiserId = 'deserunt';
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'libero';
    $request->firstAndThirdPartyAudienceId = 'architecto';
    $request->key = 'cupiditate';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'non';

    $requestSecurity = new DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firstAndThirdPartyAudiences->displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers($request, $requestSecurity);

    if ($response->editCustomerMatchMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoFirstAndThirdPartyAudiencesGet

Gets a first and third party audience.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoFirstAndThirdPartyAudiencesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoFirstAndThirdPartyAudiencesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoFirstAndThirdPartyAudiencesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'itaque';
    $request->advertiserId = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veniam';
    $request->fields = 'consequuntur';
    $request->firstAndThirdPartyAudienceId = 'facere';
    $request->key = 'laudantium';
    $request->oauthToken = 'odit';
    $request->partnerId = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new DisplayvideoFirstAndThirdPartyAudiencesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firstAndThirdPartyAudiences->displayvideoFirstAndThirdPartyAudiencesGet($request, $requestSecurity);

    if ($response->firstAndThirdPartyAudience !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoFirstAndThirdPartyAudiencesList

Lists first and third party audiences. The order is defined by the order_by parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoFirstAndThirdPartyAudiencesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoFirstAndThirdPartyAudiencesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoFirstAndThirdPartyAudiencesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'facilis';
    $request->advertiserId = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'quaerat';
    $request->filter = 'blanditiis';
    $request->key = 'distinctio';
    $request->oauthToken = 'nisi';
    $request->orderBy = 'quis';
    $request->pageSize = 391933;
    $request->pageToken = 'libero';
    $request->partnerId = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new DisplayvideoFirstAndThirdPartyAudiencesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firstAndThirdPartyAudiences->displayvideoFirstAndThirdPartyAudiencesList($request, $requestSecurity);

    if ($response->listFirstAndThirdPartyAudiencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoFirstAndThirdPartyAudiencesPatch

Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoFirstAndThirdPartyAudiencesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceInput;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceAudienceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactInfoList;
use \OpenAPI\OpenAPI\Models\Shared\ContactInfo;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MobileDeviceIdList;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoFirstAndThirdPartyAudiencesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firstAndThirdPartyAudienceInput = new FirstAndThirdPartyAudienceInput();
    $request->firstAndThirdPartyAudienceInput->appId = 'voluptatibus';
    $request->firstAndThirdPartyAudienceInput->audienceType = FirstAndThirdPartyAudienceAudienceTypeEnum::LICENSED;
    $request->firstAndThirdPartyAudienceInput->contactInfoList = new ContactInfoList();
    $request->firstAndThirdPartyAudienceInput->contactInfoList->contactInfos = [
        new ContactInfo(),
    ];
    $request->firstAndThirdPartyAudienceInput->description = 'debitis';
    $request->firstAndThirdPartyAudienceInput->displayName = 'labore';
    $request->firstAndThirdPartyAudienceInput->firstAndThirdPartyAudienceType = FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum::FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_THIRD_PARTY;
    $request->firstAndThirdPartyAudienceInput->membershipDurationDays = 'eos';
    $request->firstAndThirdPartyAudienceInput->mobileDeviceIdList = new MobileDeviceIdList();
    $request->firstAndThirdPartyAudienceInput->mobileDeviceIdList->mobileDeviceIds = [
        'nostrum',
        'neque',
    ];
    $request->accessToken = 'iusto';
    $request->advertiserId = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'fugiat';
    $request->firstAndThirdPartyAudienceId = 'unde';
    $request->key = 'officiis';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->updateMask = 'dicta';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firstAndThirdPartyAudiences->displayvideoFirstAndThirdPartyAudiencesPatch($request, $requestSecurity);

    if ($response->firstAndThirdPartyAudience !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
