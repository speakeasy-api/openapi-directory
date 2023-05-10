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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firstAndThirdPartyAudienceInput = new FirstAndThirdPartyAudienceInput();
    $request->firstAndThirdPartyAudienceInput->appId = 'eligendi';
    $request->firstAndThirdPartyAudienceInput->audienceType = FirstAndThirdPartyAudienceAudienceTypeEnum::AUDIENCE_TYPE_UNSPECIFIED;
    $request->firstAndThirdPartyAudienceInput->contactInfoList = new ContactInfoList();
    $request->firstAndThirdPartyAudienceInput->contactInfoList->contactInfos = [
        new ContactInfo(),
        new ContactInfo(),
        new ContactInfo(),
        new ContactInfo(),
    ];
    $request->firstAndThirdPartyAudienceInput->description = 'architecto';
    $request->firstAndThirdPartyAudienceInput->displayName = 'architecto';
    $request->firstAndThirdPartyAudienceInput->firstAndThirdPartyAudienceType = FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum::FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED;
    $request->firstAndThirdPartyAudienceInput->membershipDurationDays = 'optio';
    $request->firstAndThirdPartyAudienceInput->mobileDeviceIdList = new MobileDeviceIdList();
    $request->firstAndThirdPartyAudienceInput->mobileDeviceIdList->mobileDeviceIds = [
        'perferendis',
        'facilis',
        'reiciendis',
    ];
    $request->accessToken = 'a';
    $request->advertiserId = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'ullam';
    $request->key = 'dolore';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'modi';

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
        'doloribus',
        'impedit',
        'porro',
        'accusamus',
    ];
    $request->editCustomerMatchMembersRequest->advertiserId = 'totam';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sint';
    $request->fields = 'nihil';
    $request->firstAndThirdPartyAudienceId = 'esse';
    $request->key = 'iure';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'nesciunt';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'vel';

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
    $request->accessToken = 'corporis';
    $request->advertiserId = 'voluptas';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officia';
    $request->fields = 'reprehenderit';
    $request->firstAndThirdPartyAudienceId = 'distinctio';
    $request->key = 'eius';
    $request->oauthToken = 'ipsa';
    $request->partnerId = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'veniam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'neque';
    $request->advertiserId = 'facere';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'doloribus';
    $request->filter = 'fugiat';
    $request->key = 'est';
    $request->oauthToken = 'delectus';
    $request->orderBy = 'velit';
    $request->pageSize = 110522;
    $request->pageToken = 'nesciunt';
    $request->partnerId = 'similique';
    $request->prettyPrint = false;
    $request->quotaUser = 'illo';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'nemo';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firstAndThirdPartyAudienceInput = new FirstAndThirdPartyAudienceInput();
    $request->firstAndThirdPartyAudienceInput->appId = 'possimus';
    $request->firstAndThirdPartyAudienceInput->audienceType = FirstAndThirdPartyAudienceAudienceTypeEnum::FREQUENCY_CAP;
    $request->firstAndThirdPartyAudienceInput->contactInfoList = new ContactInfoList();
    $request->firstAndThirdPartyAudienceInput->contactInfoList->contactInfos = [
        new ContactInfo(),
        new ContactInfo(),
    ];
    $request->firstAndThirdPartyAudienceInput->description = 'explicabo';
    $request->firstAndThirdPartyAudienceInput->displayName = 'ipsam';
    $request->firstAndThirdPartyAudienceInput->firstAndThirdPartyAudienceType = FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum::FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY;
    $request->firstAndThirdPartyAudienceInput->membershipDurationDays = 'optio';
    $request->firstAndThirdPartyAudienceInput->mobileDeviceIdList = new MobileDeviceIdList();
    $request->firstAndThirdPartyAudienceInput->mobileDeviceIdList->mobileDeviceIds = [
        'quidem',
    ];
    $request->accessToken = 'nesciunt';
    $request->advertiserId = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequuntur';
    $request->fields = 'veniam';
    $request->firstAndThirdPartyAudienceId = 'debitis';
    $request->key = 'officia';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'ut';
    $request->updateMask = 'numquam';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'adipisci';

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
