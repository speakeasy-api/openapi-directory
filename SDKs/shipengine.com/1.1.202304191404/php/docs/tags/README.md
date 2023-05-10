# tags

## Overview

tags


### Available Operations

* [createTag](#createtag) - Create a New Tag
* [deleteTag](#deletetag) - Delete Tag
* [listTags](#listtags) - Get Tags
* [renameTag](#renametag) - Update Tag Name

## createTag

Create a new Tag for customizing how you track your shipments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTagRequest();
    $request->tagName = 'Fragile';

    $response = $sdk->tags->createTag($request);

    if ($response->createTagResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTag

Delete a tag that is no longer needed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTagRequest();
    $request->tagName = 'Fragile';

    $response = $sdk->tags->deleteTag($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTags

Get a list of all tags associated with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->tags->listTags();

    if ($response->listTagsResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## renameTag

Change a tag name while still keeping the relevant shipments attached to it

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RenameTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenameTagRequest();
    $request->newTagName = 'Fragile';
    $request->tagName = 'Fragile';

    $response = $sdk->tags->renameTag($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
