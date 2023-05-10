# rootFilesetTemplate

## Overview

File system fileset templates.

### Available Operations

* [createFilesetTemplate](#createfilesettemplate) - Create a fileset template
* [deleteFilesetTemplate](#deletefilesettemplate) - Delete a fileset template
* [getFilesetTemplate](#getfilesettemplate) - Get information for a fileset template
* [queryFilesetTemplate](#queryfilesettemplate) - Get summary information for all fileset templates
* [updateFilesetTemplate](#updatefilesettemplate) - Modify a fileset template

## createFilesetTemplate

Create a fileset template. The template is applied to the host.  Each template is a set of paths on the host.

A template uses full paths and wildcards to define the objects to include, exclude, and exempt from exclusion.

The **_exceptions_** value specifies paths that should not be excluded from the fileset by the **_exclude_** value.

Specify an array of full path descriptions for each property **_include_**, **_exclude_**, and **_exceptions_**.

Acceptable wildcard characters are.
+ **_\*_** Single asterisk matches zero or more characters up to a path deliminator.
+ **_\*\*_** Double asterisk matches zero or more characters.

The following rules apply to path descriptions.
+ Accepts UTF-8 characters.
+ Case sensitive.
+ Forward slash character **_/_** is the path deliminator.
+ Symbolic links must point to a subset of a non symbolic link path.
+ Paths that do not start with **_/_** are modified to start with **_\*\*/_**.
+ Paths that do not end with **_\*_** are modified to end with **_/\*\*_**.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\FilesetTemplateCreate;
use \OpenAPI\OpenAPI\Models\Shared\FilesetTemplateCreateOperatingSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilesetTemplateCreateShareTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilesetTemplateCreate();
    $request->allowBackupHiddenFoldersInNetworkMounts = false;
    $request->allowBackupNetworkMounts = false;
    $request->backupScriptErrorHandling = 'alias';
    $request->backupScriptTimeout = 771931;
    $request->exceptions = [
        'commodi',
    ];
    $request->excludes = [
        'expedita',
        'in',
    ];
    $request->includes = [
        'sunt',
        'enim',
        'nulla',
        'maiores',
    ];
    $request->isArrayEnabled = false;
    $request->name = 'Hubert Russel V';
    $request->operatingSystemType = FilesetTemplateCreateOperatingSystemTypeEnum::WINDOWS;
    $request->postBackupScript = 'cum';
    $request->preBackupScript = 'dicta';
    $request->shareType = FilesetTemplateCreateShareTypeEnum::SMB;
    $request->useWindowsVss = false;

    $response = $sdk->rootFilesetTemplate->createFilesetTemplate($request);

    if ($response->filesetTemplateDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFilesetTemplate

Deletes the specfied fileset template. All associated filesets are deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFilesetTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFilesetTemplateRequest();
    $request->id = '4ee2c8c6-ce61-41fe-ab1c-7cbdb6eec743';
    $request->preserveSnapshots = false;

    $response = $sdk->rootFilesetTemplate->deleteFilesetTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilesetTemplate

Retrieve summary information for a specified fileset template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetFilesetTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilesetTemplateRequest();
    $request->id = '78ba2531-7747-4dc9-95ad-2caf5dd6723d';

    $response = $sdk->rootFilesetTemplate->getFilesetTemplate($request);

    if ($response->filesetTemplateDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryFilesetTemplate

Retrieve summary information for all fileset templates, including: ID and name of the fileset template, fileset template creation timestamp, array of the included filepaths, array of the excluded filepaths.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryFilesetTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryFilesetTemplateOperatingSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryFilesetTemplateShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryFilesetTemplateSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryFilesetTemplateSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryFilesetTemplateRequest();
    $request->name = 'Jeffrey Wolff';
    $request->operatingSystemType = QueryFilesetTemplateOperatingSystemTypeEnum::NONE;
    $request->primaryClusterId = 'aspernatur';
    $request->shareType = QueryFilesetTemplateShareTypeEnum::NONE;
    $request->sortBy = QueryFilesetTemplateSortByEnum::HOST_COUNT;
    $request->sortOrder = QueryFilesetTemplateSortOrderEnum::DESC;

    $response = $sdk->rootFilesetTemplate->queryFilesetTemplate($request);

    if ($response->filesetTemplateDetailListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFilesetTemplate

Modify the values of specified fileset template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFilesetTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilesetTemplatePatch;
use \OpenAPI\OpenAPI\Models\Shared\FilesetTemplatePatchOperatingSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilesetTemplatePatchShareTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFilesetTemplateRequest();
    $request->filesetTemplatePatch = new FilesetTemplatePatch();
    $request->filesetTemplatePatch->allowBackupHiddenFoldersInNetworkMounts = false;
    $request->filesetTemplatePatch->allowBackupNetworkMounts = false;
    $request->filesetTemplatePatch->backupScriptErrorHandling = 'suscipit';
    $request->filesetTemplatePatch->backupScriptTimeout = 688649;
    $request->filesetTemplatePatch->exceptions = [
        'doloremque',
        'perferendis',
    ];
    $request->filesetTemplatePatch->excludes = [
        'iusto',
        'corrupti',
        'molestiae',
    ];
    $request->filesetTemplatePatch->id = '56143f5a-6c98-4b55-9540-80d40bcacc6c';
    $request->filesetTemplatePatch->includes = [
        'fugiat',
        'laboriosam',
        'nam',
    ];
    $request->filesetTemplatePatch->name = 'Shawna Feil';
    $request->filesetTemplatePatch->operatingSystemType = FilesetTemplatePatchOperatingSystemTypeEnum::WINDOWS;
    $request->filesetTemplatePatch->postBackupScript = 'voluptatem';
    $request->filesetTemplatePatch->preBackupScript = 'provident';
    $request->filesetTemplatePatch->shareType = FilesetTemplatePatchShareTypeEnum::NFS;
    $request->filesetTemplatePatch->useWindowsVss = false;
    $request->id = '04f926ba-d255-4381-9b47-4b0ed20e5624';

    $response = $sdk->rootFilesetTemplate->updateFilesetTemplate($request);

    if ($response->filesetTemplateDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
