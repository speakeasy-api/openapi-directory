# returnpolicyonline

### Available Operations

* [contentReturnpolicyonlineCreate](#contentreturnpolicyonlinecreate) - Creates a new return policy.
* [contentReturnpolicyonlineDelete](#contentreturnpolicyonlinedelete) - Deletes an existing return policy.
* [contentReturnpolicyonlineGet](#contentreturnpolicyonlineget) - Gets an existing return policy.
* [contentReturnpolicyonlineList](#contentreturnpolicyonlinelist) - Lists all existing return policies.
* [contentReturnpolicyonlinePatch](#contentreturnpolicyonlinepatch) - Updates an existing return policy.

## contentReturnpolicyonlineCreate

Creates a new return policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyonlineCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineInput;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineItemConditionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlinePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlinePolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineRestockingFee;
use \OpenAPI\OpenAPI\Models\Shared\PriceAmount;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineReturnMethodsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineReturnReasonCategoryInfo;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineReturnShippingFee;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineReturnShippingFeeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyonlineCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnpolicyonlineCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->returnPolicyOnlineInput = new ReturnPolicyOnlineInput();
    $request->returnPolicyOnlineInput->countries = [
        'provident',
        'laudantium',
        'nam',
        'nemo',
    ];
    $request->returnPolicyOnlineInput->itemConditions = [
        ReturnPolicyOnlineItemConditionsEnum::NEW,
        ReturnPolicyOnlineItemConditionsEnum::ITEM_CONDITION_UNSPECIFIED,
    ];
    $request->returnPolicyOnlineInput->label = 'tempora';
    $request->returnPolicyOnlineInput->name = 'Naomi Bauch';
    $request->returnPolicyOnlineInput->policy = new ReturnPolicyOnlinePolicy();
    $request->returnPolicyOnlineInput->policy->days = 'doloremque';
    $request->returnPolicyOnlineInput->policy->type = ReturnPolicyOnlinePolicyTypeEnum::NO_RETURNS;
    $request->returnPolicyOnlineInput->restockingFee = new ReturnPolicyOnlineRestockingFee();
    $request->returnPolicyOnlineInput->restockingFee->fixedFee = new PriceAmount();
    $request->returnPolicyOnlineInput->restockingFee->fixedFee->currency = 'nobis';
    $request->returnPolicyOnlineInput->restockingFee->fixedFee->value = 'similique';
    $request->returnPolicyOnlineInput->restockingFee->microPercent = 783764;
    $request->returnPolicyOnlineInput->returnMethods = [
        ReturnPolicyOnlineReturnMethodsEnum::BY_MAIL,
        ReturnPolicyOnlineReturnMethodsEnum::AT_A_KIOSK,
        ReturnPolicyOnlineReturnMethodsEnum::IN_STORE,
        ReturnPolicyOnlineReturnMethodsEnum::AT_A_KIOSK,
    ];
    $request->returnPolicyOnlineInput->returnPolicyUri = 'laboriosam';
    $request->returnPolicyOnlineInput->returnReasonCategoryInfo = [
        new ReturnPolicyOnlineReturnReasonCategoryInfo(),
        new ReturnPolicyOnlineReturnReasonCategoryInfo(),
        new ReturnPolicyOnlineReturnReasonCategoryInfo(),
    ];
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consectetur';
    $request->fields = 'necessitatibus';
    $request->key = 'maxime';
    $request->merchantId = 'cupiditate';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new ContentReturnpolicyonlineCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnpolicyonline->contentReturnpolicyonlineCreate($request, $requestSecurity);

    if ($response->returnPolicyOnline !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentReturnpolicyonlineDelete

Deletes an existing return policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyonlineDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyonlineDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnpolicyonlineDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'vel';
    $request->key = 'cum';
    $request->merchantId = 'id';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->returnPolicyId = 'ipsam';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'sequi';

    $requestSecurity = new ContentReturnpolicyonlineDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnpolicyonline->contentReturnpolicyonlineDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentReturnpolicyonlineGet

Gets an existing return policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyonlineGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyonlineGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnpolicyonlineGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'tempora';
    $request->key = 'voluptate';
    $request->merchantId = 'eius';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->quotaUser = 'aperiam';
    $request->returnPolicyId = 'voluptates';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new ContentReturnpolicyonlineGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnpolicyonline->contentReturnpolicyonlineGet($request, $requestSecurity);

    if ($response->returnPolicyOnline !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentReturnpolicyonlineList

Lists all existing return policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyonlineListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyonlineListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnpolicyonlineListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ea';
    $request->fields = 'eos';
    $request->key = 'aliquam';
    $request->merchantId = 'blanditiis';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new ContentReturnpolicyonlineListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnpolicyonline->contentReturnpolicyonlineList($request, $requestSecurity);

    if ($response->listReturnPolicyOnlineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentReturnpolicyonlinePatch

Updates an existing return policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyonlinePatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineInput;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineItemConditionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlinePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlinePolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineRestockingFee;
use \OpenAPI\OpenAPI\Models\Shared\PriceAmount;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineReturnMethodsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineReturnReasonCategoryInfo;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineReturnShippingFee;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyOnlineReturnShippingFeeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyonlinePatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnpolicyonlinePatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->returnPolicyOnlineInput = new ReturnPolicyOnlineInput();
    $request->returnPolicyOnlineInput->countries = [
        'animi',
        'provident',
        'beatae',
    ];
    $request->returnPolicyOnlineInput->itemConditions = [
        ReturnPolicyOnlineItemConditionsEnum::NEW,
    ];
    $request->returnPolicyOnlineInput->label = 'nam';
    $request->returnPolicyOnlineInput->name = 'Salvatore Paucek';
    $request->returnPolicyOnlineInput->policy = new ReturnPolicyOnlinePolicy();
    $request->returnPolicyOnlineInput->policy->days = 'fugit';
    $request->returnPolicyOnlineInput->policy->type = ReturnPolicyOnlinePolicyTypeEnum::NUMBER_OF_DAYS_AFTER_DELIVERY;
    $request->returnPolicyOnlineInput->restockingFee = new ReturnPolicyOnlineRestockingFee();
    $request->returnPolicyOnlineInput->restockingFee->fixedFee = new PriceAmount();
    $request->returnPolicyOnlineInput->restockingFee->fixedFee->currency = 'voluptate';
    $request->returnPolicyOnlineInput->restockingFee->fixedFee->value = 'nisi';
    $request->returnPolicyOnlineInput->restockingFee->microPercent = 397160;
    $request->returnPolicyOnlineInput->returnMethods = [
        ReturnPolicyOnlineReturnMethodsEnum::BY_MAIL,
        ReturnPolicyOnlineReturnMethodsEnum::AT_A_KIOSK,
        ReturnPolicyOnlineReturnMethodsEnum::RETURN_METHOD_UNSPECIFIED,
    ];
    $request->returnPolicyOnlineInput->returnPolicyUri = 'itaque';
    $request->returnPolicyOnlineInput->returnReasonCategoryInfo = [
        new ReturnPolicyOnlineReturnReasonCategoryInfo(),
        new ReturnPolicyOnlineReturnReasonCategoryInfo(),
        new ReturnPolicyOnlineReturnReasonCategoryInfo(),
        new ReturnPolicyOnlineReturnReasonCategoryInfo(),
    ];
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'consequuntur';
    $request->key = 'vitae';
    $request->merchantId = 'quidem';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->returnPolicyId = 'exercitationem';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new ContentReturnpolicyonlinePatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnpolicyonline->contentReturnpolicyonlinePatch($request, $requestSecurity);

    if ($response->returnPolicyOnline !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
