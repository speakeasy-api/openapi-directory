# folderMenu

### Available Operations

* [folderMenuGet](#foldermenuget) - Gets the folder menu items (each item might contain child items)
* [folderMenuPostForm](#foldermenupostform) - Creates and updates the folder menu items
* [folderMenuPostJson](#foldermenupostjson) - Creates and updates the folder menu items
* [folderMenuPostRaw](#foldermenupostraw) - Creates and updates the folder menu items

## folderMenuGet

Gets the folder menu items (each item might contain child items)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FolderMenuGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FolderMenuGetRequest();
    $request->filter = 'similique';

    $response = $sdk->folderMenu->folderMenuGet($request);

    if ($response->folderMenuConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## folderMenuPostForm

Creates and updates the folder menu items

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\FolderMenuConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FolderMenuItem;
use \OpenAPI\OpenAPI\Models\Shared\AutoExportSettings;
use \OpenAPI\OpenAPI\Models\Shared\AutoExportSettingsExportIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\FolderMenuItemFolderTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FolderMenuConfiguration();
    $request->browserTimeZoneName = 'alias';
    $request->browserUtcTime = 'at';
    $request->items = [
        new FolderMenuItem(),
        new FolderMenuItem(),
    ];

    $response = $sdk->folderMenu->folderMenuPostForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## folderMenuPostJson

Creates and updates the folder menu items

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\FolderMenuConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FolderMenuItem;
use \OpenAPI\OpenAPI\Models\Shared\AutoExportSettings;
use \OpenAPI\OpenAPI\Models\Shared\AutoExportSettingsExportIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\FolderMenuItemFolderTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FolderMenuConfiguration();
    $request->browserTimeZoneName = 'tempora';
    $request->browserUtcTime = 'vel';
    $request->items = [
        new FolderMenuItem(),
        new FolderMenuItem(),
        new FolderMenuItem(),
        new FolderMenuItem(),
    ];

    $response = $sdk->folderMenu->folderMenuPostJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## folderMenuPostRaw

Creates and updates the folder menu items

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'officiis'

    $response = $sdk->folderMenu->folderMenuPostRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
