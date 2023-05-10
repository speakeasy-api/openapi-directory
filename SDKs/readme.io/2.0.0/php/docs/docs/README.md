# docs

### Available Operations

* [createDoc](#createdoc) - Create doc
* [deleteDoc](#deletedoc) - Delete doc
* [getDoc](#getdoc) - Get doc
* [searchDocs](#searchdocs) - Search docs
* [updateDoc](#updatedoc) - Update doc

## createDoc

Create a new doc inside of this project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDocRequest;
use \OpenAPI\OpenAPI\Models\Shared\Doc;
use \OpenAPI\OpenAPI\Models\Shared\DocTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDocSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDocRequest();
    $request->doc = new Doc();
    $request->doc->body = 'quo';
    $request->doc->category = 'sequi';
    $request->doc->hidden = false;
    $request->doc->parentDoc = 'tenetur';
    $request->doc->title = 'Mrs.';
    $request->doc->type = DocTypeEnum::ERROR;
    $request->xReadmeVersion = 'possimus';

    $requestSecurity = new CreateDocSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->docs->createDoc($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDoc

Delete the doc with this slug

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDocRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDocSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDocRequest();
    $request->slug = 'aut';
    $request->xReadmeVersion = 'quasi';

    $requestSecurity = new DeleteDocSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->docs->deleteDoc($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDoc

Returns the doc with this slug

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDocRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDocSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocRequest();
    $request->slug = 'error';
    $request->xReadmeVersion = 'temporibus';

    $requestSecurity = new GetDocSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->docs->getDoc($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchDocs

Returns all docs that match the search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchDocsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchDocsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchDocsRequest();
    $request->search = 'laborum';
    $request->xReadmeVersion = 'quasi';

    $requestSecurity = new SearchDocsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->docs->searchDocs($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDoc

Update a doc with this slug

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocRequest;
use \OpenAPI\OpenAPI\Models\Shared\Doc;
use \OpenAPI\OpenAPI\Models\Shared\DocTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDocRequest();
    $request->doc = new Doc();
    $request->doc->body = 'reiciendis';
    $request->doc->category = 'voluptatibus';
    $request->doc->hidden = false;
    $request->doc->parentDoc = 'vero';
    $request->doc->title = 'Ms.';
    $request->doc->type = DocTypeEnum::ERROR;
    $request->slug = 'voluptatibus';
    $request->xReadmeVersion = 'ipsa';

    $requestSecurity = new UpdateDocSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->docs->updateDoc($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
