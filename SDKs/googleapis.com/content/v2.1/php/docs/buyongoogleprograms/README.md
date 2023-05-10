# buyongoogleprograms

### Available Operations

* [contentBuyongoogleprogramsActivate](#contentbuyongoogleprogramsactivate) - Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.
* [contentBuyongoogleprogramsGet](#contentbuyongoogleprogramsget) - Retrieves a status of the BoG program for your Merchant Center account.
* [contentBuyongoogleprogramsOnboard](#contentbuyongoogleprogramsonboard) - Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.
* [contentBuyongoogleprogramsPatch](#contentbuyongoogleprogramspatch) - Updates the status of the BoG program for your Merchant Center account.
* [contentBuyongoogleprogramsPause](#contentbuyongoogleprogramspause) - Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.
* [contentBuyongoogleprogramsRequestreview](#contentbuyongoogleprogramsrequestreview) - Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.

## contentBuyongoogleprogramsActivate

Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentBuyongoogleprogramsActivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentBuyongoogleprogramsActivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentBuyongoogleprogramsActivateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'adipisci' => 'dolorum',
        'architecto' => 'quae',
    ];
    $request->accessToken = 'aut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'itaque';
    $request->fields = 'consequatur';
    $request->key = 'est';
    $request->merchantId = 'repellendus';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->regionCode = 'ut';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new ContentBuyongoogleprogramsActivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyongoogleprograms->contentBuyongoogleprogramsActivate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentBuyongoogleprogramsGet

Retrieves a status of the BoG program for your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentBuyongoogleprogramsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentBuyongoogleprogramsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentBuyongoogleprogramsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odio';
    $request->fields = 'occaecati';
    $request->key = 'voluptatibus';
    $request->merchantId = 'quisquam';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->regionCode = 'quis';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new ContentBuyongoogleprogramsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyongoogleprograms->contentBuyongoogleprogramsGet($request, $requestSecurity);

    if ($response->buyOnGoogleProgramStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentBuyongoogleprogramsOnboard

Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentBuyongoogleprogramsOnboardRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnboardBuyOnGoogleProgramRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentBuyongoogleprogramsOnboardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentBuyongoogleprogramsOnboardRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->onboardBuyOnGoogleProgramRequest = new OnboardBuyOnGoogleProgramRequest();
    $request->onboardBuyOnGoogleProgramRequest->customerServiceEmail = 'consectetur';
    $request->accessToken = 'vero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'hic';
    $request->key = 'distinctio';
    $request->merchantId = 'quod';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->regionCode = 'facilis';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'ducimus';

    $requestSecurity = new ContentBuyongoogleprogramsOnboardSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyongoogleprograms->contentBuyongoogleprogramsOnboard($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentBuyongoogleprogramsPatch

Updates the status of the BoG program for your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentBuyongoogleprogramsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BuyOnGoogleProgramStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\BuyOnGoogleProgramStatusBusinessModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\BuyOnGoogleProgramStatusOnlineSalesChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentBuyongoogleprogramsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentBuyongoogleprogramsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->buyOnGoogleProgramStatusInput = new BuyOnGoogleProgramStatusInput();
    $request->buyOnGoogleProgramStatusInput->businessModel = [
        BuyOnGoogleProgramStatusBusinessModelEnum::OTHER,
        BuyOnGoogleProgramStatusBusinessModelEnum::BUSINESS_MODEL_UNSPECIFIED,
        BuyOnGoogleProgramStatusBusinessModelEnum::RESELLER,
        BuyOnGoogleProgramStatusBusinessModelEnum::RESELLER,
    ];
    $request->buyOnGoogleProgramStatusInput->customerServicePendingEmail = 'aut';
    $request->buyOnGoogleProgramStatusInput->customerServicePendingPhoneNumber = 'voluptatibus';
    $request->buyOnGoogleProgramStatusInput->customerServicePendingPhoneRegionCode = 'exercitationem';
    $request->buyOnGoogleProgramStatusInput->onlineSalesChannel = BuyOnGoogleProgramStatusOnlineSalesChannelEnum::GOOGLE_AND_OTHER_WEBSITES;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'doloribus';
    $request->key = 'iusto';
    $request->merchantId = 'eligendi';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->regionCode = 'officia';
    $request->updateMask = 'tempora';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new ContentBuyongoogleprogramsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyongoogleprograms->contentBuyongoogleprogramsPatch($request, $requestSecurity);

    if ($response->buyOnGoogleProgramStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentBuyongoogleprogramsPause

Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentBuyongoogleprogramsPauseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentBuyongoogleprogramsPauseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentBuyongoogleprogramsPauseRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'possimus' => 'magnam',
        'ratione' => 'ex',
    ];
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'maiores';
    $request->key = 'quasi';
    $request->merchantId = 'ex';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->regionCode = 'voluptatibus';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new ContentBuyongoogleprogramsPauseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyongoogleprograms->contentBuyongoogleprogramsPause($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentBuyongoogleprogramsRequestreview

Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentBuyongoogleprogramsRequestreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentBuyongoogleprogramsRequestreviewSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentBuyongoogleprogramsRequestreviewRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'ea' => 'impedit',
        'corporis' => 'veniam',
        'aliquid' => 'inventore',
        'magnam' => 'ea',
    ];
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'recusandae';
    $request->fields = 'aspernatur';
    $request->key = 'minima';
    $request->merchantId = 'eaque';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->regionCode = 'aut';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new ContentBuyongoogleprogramsRequestreviewSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyongoogleprograms->contentBuyongoogleprogramsRequestreview($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
