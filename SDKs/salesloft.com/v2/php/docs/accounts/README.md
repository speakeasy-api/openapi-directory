# accounts

## Overview

Account Management

### Available Operations

* [deleteV2AccountsIdJson](#deletev2accountsidjson) - Delete an account
* [getV2AccountsJson](#getv2accountsjson) - List accounts
* [getV2AccountsIdJson](#getv2accountsidjson) - Fetch an account
* [postV2AccountsJson](#postv2accountsjson) - Create an account
* [putV2AccountsIdJson](#putv2accountsidjson) - Update an existing Account

## deleteV2AccountsIdJson

Deletes an account. This operation is not reversible without contacting support.
This operation can be called multiple times successfully.

Deleting an account will remove all connected people from that account.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteV2AccountsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteV2AccountsIdJsonRequest();
    $request->id = '450ad2ab-d442-4698-82d5-02a94bb4f63c';

    $response = $sdk->accounts->deleteV2AccountsIdJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2AccountsJson

Fetches multiple account records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2AccountsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2AccountsJsonRequest();
    $request->accountStageId = [
        396098,
        592042,
        896039,
    ];
    $request->accountTierId = [
        638921,
        223081,
        891555,
    ];
    $request->archived = false;
    $request->city = [
        'dolorum',
        'in',
        'in',
        'illum',
    ];
    $request->country = [
        'rerum',
        'dicta',
        'magnam',
        'cumque',
    ];
    $request->createdAt = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];
    $request->crmId = [
        'occaecati',
    ];
    $request->customFields = [
        'accusamus' => 'delectus',
        'quidem' => 'provident',
    ];
    $request->domain = 'nam';
    $request->ids = [
        501324,
        533206,
        956084,
    ];
    $request->includePagingCounts = false;
    $request->industry = [
        'deserunt',
    ];
    $request->lastContacted = [
        'vel' => 'natus',
        'omnis' => 'molestiae',
    ];
    $request->limitPagingCounts = false;
    $request->locales = [
        'nihil',
    ];
    $request->name = [
        'distinctio',
        'id',
    ];
    $request->ownerCrmId = [
        'labore',
        'suscipit',
    ];
    $request->ownerId = [
        'nobis',
        'eum',
        'vero',
    ];
    $request->ownerIsActive = false;
    $request->page = 135474;
    $request->perPage = 102863;
    $request->sortBy = 'magnam';
    $request->sortDirection = 'et';
    $request->state = [
        'ullam',
        'provident',
        'quos',
    ];
    $request->tag = [
        'accusantium',
        'mollitia',
        'reiciendis',
    ];
    $request->tagId = [
        320997,
        431418,
        221262,
    ];
    $request->updatedAt = [
        'odit',
        'nemo',
        'quasi',
        'iure',
    ];
    $request->userRelationships = [
        'debitis' => 'eius',
        'maxime' => 'deleniti',
        'facilis' => 'in',
        'architecto' => 'architecto',
    ];
    $request->website = [
        'ullam',
        'expedita',
        'nihil',
        'repellat',
    ];

    $response = $sdk->accounts->getV2AccountsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2AccountsIdJson

Fetches an account, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2AccountsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2AccountsIdJsonRequest();
    $request->id = 'd2ed0289-21cd-4dc6-9260-1fb576b0d5f0';

    $response = $sdk->accounts->getV2AccountsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2AccountsJson

Creates an account.

"domain" must be unique on the current team.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2AccountsJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2AccountsJsonRequestBody();
    $request->accountTierId = 855804;
    $request->city = 'North Norwood';
    $request->companyStageId = 359978;
    $request->companyType = 'hic';
    $request->conversationalName = 'libero';
    $request->country = 'Saint Helena';
    $request->crmId = 'dolores';
    $request->crmIdType = 'quis';
    $request->customFields = [
        [
            'eaque' => 'quis',
            'nesciunt' => 'eos',
        ],
        [
            'dolores' => 'minus',
        ],
        [
            'dolor' => 'vero',
            'nostrum' => 'hic',
        ],
    ];
    $request->description = 'recusandae';
    $request->doNotContact = false;
    $request->domain = 'omnis';
    $request->founded = 'facilis';
    $request->industry = 'perspiciatis';
    $request->linkedinUrl = 'voluptatem';
    $request->locale = 'porro';
    $request->name = 'Ms. Vickie Mraz';
    $request->ownerId = 237893;
    $request->phone = '926.758.5779 x35322';
    $request->postalCode = '12957';
    $request->revenueRange = 'voluptate';
    $request->size = 'dignissimos';
    $request->state = 'reiciendis';
    $request->street = '62000 Jeff Garden';
    $request->tags = [
        'quidem',
        'voluptatibus',
        'voluptas',
        'natus',
    ];
    $request->twitterHandle = 'eos';
    $request->website = 'atque';

    $response = $sdk->accounts->postV2AccountsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2AccountsIdJson

Updates an account.

"domain" must be unique on the current team.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2AccountsIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2AccountsIdJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2AccountsIdJsonRequest();
    $request->requestBody = new PutV2AccountsIdJsonRequestBody();
    $request->requestBody->accountTierId = 24678;
    $request->requestBody->archived = false;
    $request->requestBody->city = 'Bedford';
    $request->requestBody->companyStageId = 743835;
    $request->requestBody->companyType = 'dolorum';
    $request->requestBody->conversationalName = 'iusto';
    $request->requestBody->country = 'Kazakhstan';
    $request->requestBody->crmId = 'dolorum';
    $request->requestBody->crmIdType = 'deleniti';
    $request->requestBody->customFields = [
        [
            'distinctio' => 'asperiores',
            'nihil' => 'ipsum',
            'voluptate' => 'id',
            'saepe' => 'eius',
        ],
        [
            'perferendis' => 'amet',
        ],
        [
            'accusamus' => 'ad',
            'saepe' => 'suscipit',
            'deserunt' => 'provident',
            'minima' => 'repellendus',
        ],
    ];
    $request->requestBody->description = 'totam';
    $request->requestBody->doNotContact = false;
    $request->requestBody->domain = 'similique';
    $request->requestBody->founded = 'alias';
    $request->requestBody->industry = 'at';
    $request->requestBody->linkedinUrl = 'quaerat';
    $request->requestBody->locale = 'tempora';
    $request->requestBody->name = 'Bernadette Torp';
    $request->requestBody->ownerId = 952792;
    $request->requestBody->phone = '742.892.7823 x295';
    $request->requestBody->postalCode = '07214';
    $request->requestBody->revenueRange = 'libero';
    $request->requestBody->size = 'voluptas';
    $request->requestBody->state = 'deserunt';
    $request->requestBody->street = '2215 Stracke Roads';
    $request->requestBody->tags = [
        'laborum',
    ];
    $request->requestBody->twitterHandle = 'totam';
    $request->requestBody->website = 'incidunt';
    $request->id = '22bb679d-2322-4715-bf0c-bb1e31b8b90f';

    $response = $sdk->accounts->putV2AccountsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
