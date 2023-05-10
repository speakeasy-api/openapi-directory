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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->conversionsBatchInsertRequest = new ConversionsBatchInsertRequest();
    $request->conversionsBatchInsertRequest->conversions = [
        new Conversion(),
        new Conversion(),
    ];
    $request->conversionsBatchInsertRequest->encryptionInfo = new EncryptionInfo();
    $request->conversionsBatchInsertRequest->encryptionInfo->encryptionEntityId = 'animi';
    $request->conversionsBatchInsertRequest->encryptionInfo->encryptionEntityType = EncryptionInfoEncryptionEntityTypeEnum::DBM_PARTNER;
    $request->conversionsBatchInsertRequest->encryptionInfo->encryptionSource = EncryptionInfoEncryptionSourceEnum::AD_SERVING;
    $request->conversionsBatchInsertRequest->encryptionInfo->kind = 'eveniet';
    $request->conversionsBatchInsertRequest->kind = 'earum';
    $request->accessToken = 'velit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'rerum';
    $request->key = 'itaque';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->profileId = 'ipsam';
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'aliquid';

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
    ];
    $request->conversionsBatchUpdateRequest->encryptionInfo = new EncryptionInfo();
    $request->conversionsBatchUpdateRequest->encryptionInfo->encryptionEntityId = 'ipsum';
    $request->conversionsBatchUpdateRequest->encryptionInfo->encryptionEntityType = EncryptionInfoEncryptionEntityTypeEnum::DCM_ACCOUNT;
    $request->conversionsBatchUpdateRequest->encryptionInfo->encryptionSource = EncryptionInfoEncryptionSourceEnum::ENCRYPTION_SCOPE_UNKNOWN;
    $request->conversionsBatchUpdateRequest->encryptionInfo->kind = 'architecto';
    $request->conversionsBatchUpdateRequest->kind = 'praesentium';
    $request->accessToken = 'eveniet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'expedita';
    $request->fields = 'libero';
    $request->key = 'iste';
    $request->oauthToken = 'illo';
    $request->prettyPrint = false;
    $request->profileId = 'minus';
    $request->quotaUser = 'quos';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'sint';

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
