# projects

### Available Operations

* [resourcesettingsProjectsSettingsGet](#resourcesettingsprojectssettingsget) - Returns a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist.
* [resourcesettingsProjectsSettingsList](#resourcesettingsprojectssettingslist) - Lists all the settings that are available on the Cloud resource `parent`.
* [resourcesettingsProjectsSettingsPatch](#resourcesettingsprojectssettingspatch) - Updates a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.FAILED_PRECONDITION` if the setting is flagged as read only. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the setting value. On success, the response will contain only `name`, `local_value` and `etag`. The `metadata` and `effective_value` cannot be updated through this API. Note: the supplied setting will perform a full overwrite of the `local_value` field.

## resourcesettingsProjectsSettingsGet

Returns a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResourcesettingsProjectsSettingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResourcesettingsProjectsSettingsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResourcesettingsProjectsSettingsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResourcesettingsProjectsSettingsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'minus';
    $request->key = 'placeat';
    $request->name = 'Ted Mante';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'veritatis';
    $request->view = ResourcesettingsProjectsSettingsGetViewEnum::SETTING_VIEW_EFFECTIVE_VALUE;

    $requestSecurity = new ResourcesettingsProjectsSettingsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->resourcesettingsProjectsSettingsGet($request, $requestSecurity);

    if ($response->googleCloudResourcesettingsV1Setting !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resourcesettingsProjectsSettingsList

Lists all the settings that are available on the Cloud resource `parent`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResourcesettingsProjectsSettingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResourcesettingsProjectsSettingsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResourcesettingsProjectsSettingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResourcesettingsProjectsSettingsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'quo';
    $request->key = 'odit';
    $request->oauthToken = 'at';
    $request->pageSize = 870088;
    $request->pageToken = 'maiores';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'esse';
    $request->view = ResourcesettingsProjectsSettingsListViewEnum::SETTING_VIEW_EFFECTIVE_VALUE;

    $requestSecurity = new ResourcesettingsProjectsSettingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->resourcesettingsProjectsSettingsList($request, $requestSecurity);

    if ($response->googleCloudResourcesettingsV1ListSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resourcesettingsProjectsSettingsPatch

Updates a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.FAILED_PRECONDITION` if the setting is flagged as read only. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the setting value. On success, the response will contain only `name`, `local_value` and `etag`. The `metadata` and `effective_value` cannot be updated through this API. Note: the supplied setting will perform a full overwrite of the `local_value` field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResourcesettingsProjectsSettingsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudResourcesettingsV1Setting;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudResourcesettingsV1Value;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudResourcesettingsV1ValueEnumValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudResourcesettingsV1ValueStringMap;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudResourcesettingsV1ValueStringSet;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudResourcesettingsV1SettingMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResourcesettingsProjectsSettingsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResourcesettingsProjectsSettingsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudResourcesettingsV1Setting = new GoogleCloudResourcesettingsV1Setting();
    $request->googleCloudResourcesettingsV1Setting->effectiveValue = new GoogleCloudResourcesettingsV1Value();
    $request->googleCloudResourcesettingsV1Setting->effectiveValue->booleanValue = false;
    $request->googleCloudResourcesettingsV1Setting->effectiveValue->durationValue = 'dolorum';
    $request->googleCloudResourcesettingsV1Setting->effectiveValue->enumValue = new GoogleCloudResourcesettingsV1ValueEnumValue();
    $request->googleCloudResourcesettingsV1Setting->effectiveValue->enumValue->value = 'dicta';
    $request->googleCloudResourcesettingsV1Setting->effectiveValue->stringMapValue = new GoogleCloudResourcesettingsV1ValueStringMap();
    $request->googleCloudResourcesettingsV1Setting->effectiveValue->stringMapValue->mappings = [
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
        'hic' => 'optio',
    ];
    $request->googleCloudResourcesettingsV1Setting->effectiveValue->stringSetValue = new GoogleCloudResourcesettingsV1ValueStringSet();
    $request->googleCloudResourcesettingsV1Setting->effectiveValue->stringSetValue->values = [
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->googleCloudResourcesettingsV1Setting->effectiveValue->stringValue = 'modi';
    $request->googleCloudResourcesettingsV1Setting->etag = 'qui';
    $request->googleCloudResourcesettingsV1Setting->localValue = new GoogleCloudResourcesettingsV1Value();
    $request->googleCloudResourcesettingsV1Setting->localValue->booleanValue = false;
    $request->googleCloudResourcesettingsV1Setting->localValue->durationValue = 'impedit';
    $request->googleCloudResourcesettingsV1Setting->localValue->enumValue = new GoogleCloudResourcesettingsV1ValueEnumValue();
    $request->googleCloudResourcesettingsV1Setting->localValue->enumValue->value = 'cum';
    $request->googleCloudResourcesettingsV1Setting->localValue->stringMapValue = new GoogleCloudResourcesettingsV1ValueStringMap();
    $request->googleCloudResourcesettingsV1Setting->localValue->stringMapValue->mappings = [
        'ipsum' => 'excepturi',
        'aspernatur' => 'perferendis',
    ];
    $request->googleCloudResourcesettingsV1Setting->localValue->stringSetValue = new GoogleCloudResourcesettingsV1ValueStringSet();
    $request->googleCloudResourcesettingsV1Setting->localValue->stringSetValue->values = [
        'natus',
        'sed',
    ];
    $request->googleCloudResourcesettingsV1Setting->localValue->stringValue = 'iste';
    $request->googleCloudResourcesettingsV1Setting->metadata = new GoogleCloudResourcesettingsV1SettingMetadata();
    $request->googleCloudResourcesettingsV1Setting->metadata->dataType = GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum::BOOLEAN;
    $request->googleCloudResourcesettingsV1Setting->metadata->defaultValue = new GoogleCloudResourcesettingsV1Value();
    $request->googleCloudResourcesettingsV1Setting->metadata->defaultValue->booleanValue = false;
    $request->googleCloudResourcesettingsV1Setting->metadata->defaultValue->durationValue = 'natus';
    $request->googleCloudResourcesettingsV1Setting->metadata->defaultValue->enumValue = new GoogleCloudResourcesettingsV1ValueEnumValue();
    $request->googleCloudResourcesettingsV1Setting->metadata->defaultValue->enumValue->value = 'laboriosam';
    $request->googleCloudResourcesettingsV1Setting->metadata->defaultValue->stringMapValue = new GoogleCloudResourcesettingsV1ValueStringMap();
    $request->googleCloudResourcesettingsV1Setting->metadata->defaultValue->stringMapValue->mappings = [
        'saepe' => 'fuga',
        'in' => 'corporis',
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];
    $request->googleCloudResourcesettingsV1Setting->metadata->defaultValue->stringSetValue = new GoogleCloudResourcesettingsV1ValueStringSet();
    $request->googleCloudResourcesettingsV1Setting->metadata->defaultValue->stringSetValue->values = [
        'ipsa',
    ];
    $request->googleCloudResourcesettingsV1Setting->metadata->defaultValue->stringValue = 'reiciendis';
    $request->googleCloudResourcesettingsV1Setting->metadata->description = 'est';
    $request->googleCloudResourcesettingsV1Setting->metadata->displayName = 'mollitia';
    $request->googleCloudResourcesettingsV1Setting->metadata->readOnly = false;
    $request->googleCloudResourcesettingsV1Setting->name = 'Ernest Ebert';
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'nemo';
    $request->key = 'minima';
    $request->name = 'Brian Kessler';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new ResourcesettingsProjectsSettingsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->resourcesettingsProjectsSettingsPatch($request, $requestSecurity);

    if ($response->googleCloudResourcesettingsV1Setting !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
