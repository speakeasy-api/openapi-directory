# rootHdfsTemplate

## Overview

HDFS templates.

### Available Operations

* [createHdfsTemplate](#createhdfstemplate) - Create a HDFS directory template
* [deleteHdfsTemplate](#deletehdfstemplate) - Delete a HDFS directory template
* [getHdfsTemplate](#gethdfstemplate) - Get information for a HDFS directory template
* [queryHdfsTemplate](#queryhdfstemplate) - Get summary information for all HDFS directory templates
* [updateHdfsTemplate](#updatehdfstemplate) - Modify a HDFS directory template

## createHdfsTemplate

Create a HDFS directory template. The template is applied to the host.  Each template is a set of paths on the host.
A template uses full paths and wildcards to define the objects to include, exclude, and exempt from exclusion.
The **_exceptions_** value specifies paths that should not be excluded from the HDFS directory by the **_exclude_** value.
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
use \OpenAPI\OpenAPI\Models\Shared\HdfsTemplateCreate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HdfsTemplateCreate();
    $request->exceptions = [
        'neque',
        'quis',
        'in',
        'sed',
    ];
    $request->excludes = [
        'porro',
        'fugiat',
    ];
    $request->includes = [
        'ipsa',
        'reiciendis',
        'labore',
    ];
    $request->name = 'Mr. Jesse Luettgen';

    $response = $sdk->rootHdfsTemplate->createHdfsTemplate($request);

    if ($response->hdfsTemplateDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHdfsTemplate

Deletes the specfied HDFS directory template. All associated HDFS directories are deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHdfsTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHdfsTemplateRequest();
    $request->id = '7d56844e-ded8-45a9-865e-628bdfc2032b';
    $request->preserveSnapshots = false;

    $response = $sdk->rootHdfsTemplate->deleteHdfsTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHdfsTemplate

Retrieve summary information for a specified HDFS directory template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetHdfsTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHdfsTemplateRequest();
    $request->id = '6c879923-b7e1-4358-8f7a-e12c6891f82c';

    $response = $sdk->rootHdfsTemplate->getHdfsTemplate($request);

    if ($response->hdfsTemplateDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryHdfsTemplate

Retrieve summary information for all HDFS directory templates, including: ID and name of the HDFS directory template, HDFS directory template creation timestamp, array of the included filepaths, array of the excluded filepaths.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryHdfsTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryHdfsTemplateSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryHdfsTemplateSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryHdfsTemplateRequest();
    $request->name = 'Keith Bode';
    $request->primaryClusterId = 'inventore';
    $request->sortBy = QueryHdfsTemplateSortByEnum::INCLUDES;
    $request->sortOrder = QueryHdfsTemplateSortOrderEnum::ASC;

    $response = $sdk->rootHdfsTemplate->queryHdfsTemplate($request);

    if ($response->hdfsTemplateDetailListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHdfsTemplate

Modify the values of specified HDFS directory template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHdfsTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\HdfsTemplatePatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHdfsTemplateRequest();
    $request->hdfsTemplatePatch = new HdfsTemplatePatch();
    $request->hdfsTemplatePatch->exceptions = [
        'eaque',
    ];
    $request->hdfsTemplatePatch->excludes = [
        'amet',
        'voluptate',
    ];
    $request->hdfsTemplatePatch->id = '7dcfa89d-f975-4e35-a686-092e9c3ddc5f';
    $request->hdfsTemplatePatch->includes = [
        'vitae',
    ];
    $request->hdfsTemplatePatch->name = 'Mable Wehner Jr.';
    $request->id = '26d541a4-d190-4feb-a178-0bccc0dbbddb';

    $response = $sdk->rootHdfsTemplate->updateHdfsTemplate($request);

    if ($response->hdfsTemplateDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
