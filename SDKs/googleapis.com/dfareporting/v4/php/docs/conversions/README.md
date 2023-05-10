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
use \OpenAPI\OpenAPI\Models\Shared\UserIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\OfflineUserAddressInfo;
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
        new Conversion(),
        new Conversion(),
    ];
    $request->conversionsBatchInsertRequest->encryptionInfo = new EncryptionInfo();
    $request->conversionsBatchInsertRequest->encryptionInfo->encryptionEntityId = 'odio';
    $request->conversionsBatchInsertRequest->encryptionInfo->encryptionEntityType = EncryptionInfoEncryptionEntityTypeEnum::DBM_ADVERTISER;
    $request->conversionsBatchInsertRequest->encryptionInfo->encryptionSource = EncryptionInfoEncryptionSourceEnum::DATA_TRANSFER;
    $request->conversionsBatchInsertRequest->encryptionInfo->kind = 'aperiam';
    $request->conversionsBatchInsertRequest->kind = 'similique';
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ex';
    $request->fields = 'repellendus';
    $request->key = 'unde';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->profileId = 'impedit';
    $request->quotaUser = 'sequi';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'labore';

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
use \OpenAPI\OpenAPI\Models\Shared\UserIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\OfflineUserAddressInfo;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionInfo;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionInfoEncryptionEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionInfoEncryptionSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchupdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingConversionsBatchupdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->conversionsBatchUpdateRequest = new ConversionsBatchUpdateRequest();
    $request->conversionsBatchUpdateRequest->conversions = [
        new Conversion(),
        new Conversion(),
    ];
    $request->conversionsBatchUpdateRequest->encryptionInfo = new EncryptionInfo();
    $request->conversionsBatchUpdateRequest->encryptionInfo->encryptionEntityId = 'quisquam';
    $request->conversionsBatchUpdateRequest->encryptionInfo->encryptionEntityType = EncryptionInfoEncryptionEntityTypeEnum::ENCRYPTION_ENTITY_TYPE_UNKNOWN;
    $request->conversionsBatchUpdateRequest->encryptionInfo->encryptionSource = EncryptionInfoEncryptionSourceEnum::ENCRYPTION_SCOPE_UNKNOWN;
    $request->conversionsBatchUpdateRequest->encryptionInfo->kind = 'nulla';
    $request->conversionsBatchUpdateRequest->kind = 'maiores';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'impedit';
    $request->fields = 'accusamus';
    $request->key = 'et';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->profileId = 'blanditiis';
    $request->quotaUser = 'cum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'impedit';

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
