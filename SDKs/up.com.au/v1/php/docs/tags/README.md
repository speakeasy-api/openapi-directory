# tags

## Overview

Tags are custom labels that can be associated with transactions
on Up. Within the Up application, tags provide additional insight
into spending. For example, you could have a "Take Away" tag that
you apply to purchases from food delivery services. The Up API
allows you to manage the tags associated with transactions. Each
transaction may have up to 6 tags.

Tags are identified by their labels, which are unique strings,
so the tag "Holiday" has also the `id` `"Holiday"`.


### Available Operations

* [deleteTransactionsTransactionIdRelationshipsTags](#deletetransactionstransactionidrelationshipstags) - Remove tags from transaction
* [getTags](#gettags) - List tags
* [postTransactionsTransactionIdRelationshipsTags](#posttransactionstransactionidrelationshipstags) - Add tags to transaction

## deleteTransactionsTransactionIdRelationshipsTags

Disassociates one or more tags from a specific transaction. Tags that are
not associated are silently ignored. An HTTP `204` is returned on
success. The associated tags, along with this request URL, are also
exposed via the `tags` relationship on the transaction resource returned
from `/transactions/{id}`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTransactionsTransactionIdRelationshipsTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTransactionTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagInputResourceIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTransactionsTransactionIdRelationshipsTagsRequest();
    $request->updateTransactionTagsRequest = new UpdateTransactionTagsRequest();
    $request->updateTransactionTagsRequest->data = [
        new TagInputResourceIdentifier(),
        new TagInputResourceIdentifier(),
    ];
    $request->transactionId = 'culpa';

    $response = $sdk->tags->deleteTransactionsTransactionIdRelationshipsTags($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTags

Retrieve a list of all tags currently in use. The returned list is
[paginated](#pagination) and can be scrolled by following the `next`
and `prev` links where present. Results are ordered lexicographically.
The `transactions` relationship for each tag exposes a link
to get the transactions with the given tag.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsRequest();
    $request->pageSize = 988374;

    $response = $sdk->tags->getTags($request);

    if ($response->listTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTransactionsTransactionIdRelationshipsTags

Associates one or more tags with a specific transaction. No more than 6
tags may be present on any single transaction. Duplicate tags are
silently ignored. An HTTP `204` is returned on success. The associated
tags, along with this request URL, are also exposed via the `tags`
relationship on the transaction resource returned from
`/transactions/{id}`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostTransactionsTransactionIdRelationshipsTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTransactionTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagInputResourceIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTransactionsTransactionIdRelationshipsTagsRequest();
    $request->updateTransactionTagsRequest = new UpdateTransactionTagsRequest();
    $request->updateTransactionTagsRequest->data = [
        new TagInputResourceIdentifier(),
        new TagInputResourceIdentifier(),
        new TagInputResourceIdentifier(),
        new TagInputResourceIdentifier(),
    ];
    $request->transactionId = 'architecto';

    $response = $sdk->tags->postTransactionsTransactionIdRelationshipsTags($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
