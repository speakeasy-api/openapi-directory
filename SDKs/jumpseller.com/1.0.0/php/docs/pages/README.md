# pages

### Available Operations

* [deletePagesIdJson](#deletepagesidjson) - Delete an existing Page.
* [getPagesJson](#getpagesjson) - Retrieve all Pages.
* [getPagesCountJson](#getpagescountjson) - Count all Pages.
* [getPagesIdJson](#getpagesidjson) - Retrieve a single Page by id.
* [postPagesJson](#postpagesjson) - Create a new Page.
* [putPagesIdJson](#putpagesidjson) - Update a Page.

## deletePagesIdJson

Delete an existing Page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePagesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePagesIdJsonRequest();
    $request->authtoken = 'temporibus';
    $request->id = 183280;
    $request->login = 'neque';

    $response = $sdk->pages->deletePagesIdJson($request);

    if ($response->deletePagesIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPagesJson

Retrieve all Pages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPagesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPagesJsonRequest();
    $request->authtoken = 'fugit';
    $request->limit = 164959;
    $request->login = 'odio';
    $request->page = 124833;

    $response = $sdk->pages->getPagesJson($request);

    if ($response->pages !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPagesCountJson

Count all Pages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPagesCountJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPagesCountJsonRequest();
    $request->authtoken = 'ullam';
    $request->login = 'nam';

    $response = $sdk->pages->getPagesCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPagesIdJson

Retrieve a single Page by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPagesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPagesIdJsonRequest();
    $request->authtoken = 'hic';
    $request->id = 30452;
    $request->login = 'cumque';

    $response = $sdk->pages->getPagesIdJson($request);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPagesJson

Create a new Page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPagesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PageModify;
use \OpenAPI\OpenAPI\Models\Shared\PageModifyFields;
use \OpenAPI\OpenAPI\Models\Shared\PageCategory;
use \OpenAPI\OpenAPI\Models\Shared\PageModifyFieldsImage;
use \OpenAPI\OpenAPI\Models\Shared\PageModifyFieldsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPagesJsonRequest();
    $request->pageModify = new PageModify();
    $request->pageModify->page = new PageModifyFields();
    $request->pageModify->page->body = 'soluta';
    $request->pageModify->page->categories = [
        new PageCategory(),
        new PageCategory(),
        new PageCategory(),
    ];
    $request->pageModify->page->image = new PageModifyFieldsImage();
    $request->pageModify->page->image->id = 92596;
    $request->pageModify->page->image->url = 'saepe';
    $request->pageModify->page->metaDescription = 'ipsum';
    $request->pageModify->page->pageTitle = 'veritatis';
    $request->pageModify->page->permalink = 'nobis';
    $request->pageModify->page->status = PageModifyFieldsStatusEnum::DRAFT;
    $request->pageModify->page->template = 731694;
    $request->pageModify->page->title = 'Ms.';
    $request->authtoken = 'aperiam';
    $request->login = 'delectus';

    $response = $sdk->pages->postPagesJson($request);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPagesIdJson

Update a Page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutPagesIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PageModify;
use \OpenAPI\OpenAPI\Models\Shared\PageModifyFields;
use \OpenAPI\OpenAPI\Models\Shared\PageCategory;
use \OpenAPI\OpenAPI\Models\Shared\PageModifyFieldsImage;
use \OpenAPI\OpenAPI\Models\Shared\PageModifyFieldsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPagesIdJsonRequest();
    $request->pageModify = new PageModify();
    $request->pageModify->page = new PageModifyFields();
    $request->pageModify->page->body = 'dolorem';
    $request->pageModify->page->categories = [
        new PageCategory(),
        new PageCategory(),
    ];
    $request->pageModify->page->image = new PageModifyFieldsImage();
    $request->pageModify->page->image->id = 286915;
    $request->pageModify->page->image->url = 'adipisci';
    $request->pageModify->page->metaDescription = 'dolorum';
    $request->pageModify->page->pageTitle = 'architecto';
    $request->pageModify->page->permalink = 'quae';
    $request->pageModify->page->status = PageModifyFieldsStatusEnum::PUBLIC;
    $request->pageModify->page->template = 555649;
    $request->pageModify->page->title = 'Dr.';
    $request->authtoken = 'consequatur';
    $request->id = 669917;
    $request->login = 'repellendus';

    $response = $sdk->pages->putPagesIdJson($request);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
