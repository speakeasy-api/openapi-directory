# journalLine

### Available Operations

* [deleteJournalLineTag](#deletejournallinetag) - Delete journal line tag
* [getAllJournalLineTags](#getalljournallinetags) - Get all journal line tags
* [getAllJournalLinesWithTag](#getalljournallineswithtag) - Get links to tagged journal lines
* [getTagFromJournalLine](#gettagfromjournalline) - Get journal line tag
* [getTagsFromJournalLine](#gettagsfromjournalline) - Get tags from journal line
* [putJournalLineTag](#putjournallinetag) - Insert journal line tag

## deleteJournalLineTag

Deletes a tag from the journal line

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJournalLineTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJournalLineTagRequest();
    $request->apiVersion = 'fugit';
    $request->authorization = 'ab';
    $request->employerId = 'laudantium';
    $request->journalLineId = 'quae';
    $request->tagId = 'dolor';

    $response = $sdk->journalLine->deleteJournalLineTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllJournalLineTags

Gets all the journal line tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllJournalLineTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllJournalLineTagsRequest();
    $request->apiVersion = 'fugiat';
    $request->authorization = 'ipsam';
    $request->employerId = 'consequuntur';

    $response = $sdk->journalLine->getAllJournalLineTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllJournalLinesWithTag

Gets the journal lines with the specified tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllJournalLinesWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllJournalLinesWithTagRequest();
    $request->apiVersion = 'ipsa';
    $request->authorization = 'quas';
    $request->employerId = 'eveniet';
    $request->tagId = 'impedit';

    $response = $sdk->journalLine->getAllJournalLinesWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagFromJournalLine

Gets a tag from the journal line

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagFromJournalLineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagFromJournalLineRequest();
    $request->apiVersion = 'officiis';
    $request->authorization = 'esse';
    $request->employerId = 'necessitatibus';
    $request->journalLineId = 'sed';
    $request->tagId = 'veniam';

    $response = $sdk->journalLine->getTagFromJournalLine($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsFromJournalLine

Gets all tags from the journal line

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsFromJournalLineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsFromJournalLineRequest();
    $request->apiVersion = 'nesciunt';
    $request->authorization = 'expedita';
    $request->employerId = 'eum';
    $request->journalLineId = 'vel';

    $response = $sdk->journalLine->getTagsFromJournalLine($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putJournalLineTag

Inserts a tag on the journal line

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutJournalLineTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutJournalLineTagRequest();
    $request->apiVersion = 'voluptatum';
    $request->authorization = 'magnam';
    $request->employerId = 'exercitationem';
    $request->journalLineId = 'ab';
    $request->tagId = 'porro';

    $response = $sdk->journalLine->putJournalLineTag($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
