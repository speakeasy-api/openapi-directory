# folderSettings

### Available Operations

* [folderSettingsDelete](#foldersettingsdelete) - Deletes a folder
* [folderSettingsGet](#foldersettingsget) - Gets the settings of a folder or meter
* [folderSettingsPostForm](#foldersettingspostform) - Add or edit a folder or a meter. To add a new folder use and empty ID
* [folderSettingsPostJson](#foldersettingspostjson) - Add or edit a folder or a meter. To add a new folder use and empty ID
* [folderSettingsPostRaw](#foldersettingspostraw) - Add or edit a folder or a meter. To add a new folder use and empty ID

## folderSettingsDelete

Deletes a folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FolderSettingsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FolderSettingsDeleteRequest();
    $request->id = '2af7a73c-f3be-4453-b870-b326b5a73429';

    $response = $sdk->folderSettings->folderSettingsDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## folderSettingsGet

Gets the settings of a folder or meter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FolderSettingsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FolderSettingsGetRequest();
    $request->id = 'cdb1a842-2bb6-479d-a322-715bf0cbb1e3';

    $response = $sdk->folderSettings->folderSettingsGet($request);

    if ($response->folderSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## folderSettingsPostForm

Add or edit a folder or a meter. To add a new folder use and empty ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FolderSettingsPostFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\FolderSettings;
use \OpenAPI\OpenAPI\Models\Shared\FolderSettingsFolderTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FolderSettingsPostFormRequest();
    $request->folderSettings = new FolderSettings();
    $request->folderSettings->description = 'veritatis';
    $request->folderSettings->enable = false;
    $request->folderSettings->folderType = FolderSettingsFolderTypeEnum::COFFEE;
    $request->folderSettings->name = 'Dr. Randolph McDermott';
    $request->folderSettings->parentFolderId = 'dolore';
    $request->folderSettings->serialNumber = 286915;
    $request->folderSettings->useableForVirtualBillingMeters = false;
    $request->folderSettings->valueCorrection = 2408.29;
    $request->folderSettings->valueCorrectionParentFolder = 6772.63;
    $request->folderSettings->visualizationName = 'architecto';
    $request->id = '108e0adc-f4b9-4218-b9fc-e953f73ef7fb';

    $response = $sdk->folderSettings->folderSettingsPostForm($request);

    if ($response->folderMenuItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## folderSettingsPostJson

Add or edit a folder or a meter. To add a new folder use and empty ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FolderSettingsPostJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\FolderSettings;
use \OpenAPI\OpenAPI\Models\Shared\FolderSettingsFolderTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FolderSettingsPostJsonRequest();
    $request->folderSettings = new FolderSettings();
    $request->folderSettings->description = 'quod';
    $request->folderSettings->enable = false;
    $request->folderSettings->folderType = FolderSettingsFolderTypeEnum::TEMPERATURE_FOLDER;
    $request->folderSettings->name = 'Malcolm Swift';
    $request->folderSettings->parentFolderId = 'quibusdam';
    $request->folderSettings->serialNumber = 848944;
    $request->folderSettings->useableForVirtualBillingMeters = false;
    $request->folderSettings->valueCorrection = 1943.42;
    $request->folderSettings->valueCorrectionParentFolder = 6178.77;
    $request->folderSettings->visualizationName = 'impedit';
    $request->id = '0f5d2cff-7c70-4a45-a26d-436813f16d9f';

    $response = $sdk->folderSettings->folderSettingsPostJson($request);

    if ($response->folderMenuItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## folderSettingsPostRaw

Add or edit a folder or a meter. To add a new folder use and empty ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FolderSettingsPostRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FolderSettingsPostRawRequest();
    $request->requestBody = 'nostrum';
    $request->id = 'fce6c556-146c-43e2-90fb-008c42e141aa';

    $response = $sdk->folderSettings->folderSettingsPostRaw($request);

    if ($response->folderMenuItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
