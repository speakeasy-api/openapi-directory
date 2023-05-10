# conversions

### Available Operations

* [dfareportingConversionsBatchinsert](#dfareportingconversionsbatchinsert) - Inserts conversions.
* [dfareportingConversionsBatchupdate](#dfareportingconversionsbatchupdate) - Updates existing conversions.

## dfareportingConversionsBatchinsert

Inserts conversions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchinsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConversionsBatchInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Conversion;
use \OpenAPI\OpenAPI\Models\Shared\CustomFloodlightVariable;
use \OpenAPI\OpenAPI\Models\Shared\CustomFloodlightVariableTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionInfo;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionInfoEncryptionEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionInfoEncryptionSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchinsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingConversionsBatchinsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->conversionsBatchInsertRequest = new ConversionsBatchInsertRequest();
    $request->conversionsBatchInsertRequest->conversions = [
        new Conversion(),
        new Conversion(),
    ];
    $request->conversionsBatchInsertRequest->encryptionInfo = new EncryptionInfo();
    $request->conversionsBatchInsertRequest->encryptionInfo->encryptionEntityId = 'optio';
    $request->conversionsBatchInsertRequest->encryptionInfo->encryptionEntityType = EncryptionInfoEncryptionEntityTypeEnum::ADWORDS_CUSTOMER;
    $request->conversionsBatchInsertRequest->encryptionInfo->encryptionSource = EncryptionInfoEncryptionSourceEnum::AD_SERVING;
    $request->conversionsBatchInsertRequest->encryptionInfo->kind = 'repellat';
    $request->conversionsBatchInsertRequest->kind = 'quae';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'hic';
    $request->fields = 'excepturi';
    $request->key = 'aliquid';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->profileId = 'beatae';
    $request->quotaUser = 'similique';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'animi';

    $requestSecurity = new DfareportingConversionsBatchinsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversions->dfareportingConversionsBatchinsert($request, $requestSecurity);

    if ($response->conversionsBatchInsertResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingConversionsBatchupdate

Updates existing conversions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchupdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConversionsBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Conversion;
use \OpenAPI\OpenAPI\Models\Shared\CustomFloodlightVariable;
use \OpenAPI\OpenAPI\Models\Shared\CustomFloodlightVariableTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionInfo;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionInfoEncryptionEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionInfoEncryptionSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchupdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingConversionsBatchupdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->conversionsBatchUpdateRequest = new ConversionsBatchUpdateRequest();
    $request->conversionsBatchUpdateRequest->conversions = [
        new Conversion(),
        new Conversion(),
        new Conversion(),
        new Conversion(),
    ];
    $request->conversionsBatchUpdateRequest->encryptionInfo = new EncryptionInfo();
    $request->conversionsBatchUpdateRequest->encryptionInfo->encryptionEntityId = 'dignissimos';
    $request->conversionsBatchUpdateRequest->encryptionInfo->encryptionEntityType = EncryptionInfoEncryptionEntityTypeEnum::DBM_PARTNER;
    $request->conversionsBatchUpdateRequest->encryptionInfo->encryptionSource = EncryptionInfoEncryptionSourceEnum::AD_SERVING;
    $request->conversionsBatchUpdateRequest->encryptionInfo->kind = 'laudantium';
    $request->conversionsBatchUpdateRequest->kind = 'esse';
    $request->accessToken = 'eveniet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'velit';
    $request->fields = 'officiis';
    $request->key = 'eius';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->profileId = 'itaque';
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new DfareportingConversionsBatchupdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversions->dfareportingConversionsBatchupdate($request, $requestSecurity);

    if ($response->conversionsBatchUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
