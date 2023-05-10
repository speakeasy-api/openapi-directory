# accountUpsert

## Overview

Account Upsert

### Available Operations

* [postV2AccountUpsertsJson](#postv2accountupsertsjson) - Upsert an account

## postV2AccountUpsertsJson

Upserts an account record. The upsert_key dictates how the upsert will be performed. The create and update behavior
is exactly the same as the individual create and update endpoints.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2AccountUpsertsJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2AccountUpsertsJsonRequestBody();
    $request->accountTierId = 128926;
    $request->city = 'Halvorsonstead';
    $request->companyStageId = 363711;
    $request->companyType = 'minima';
    $request->conversationalName = 'excepturi';
    $request->country = 'Argentina';
    $request->crmId = 'iure';
    $request->crmIdType = 'culpa';
    $request->customFields = [
        [
            'architecto' => 'mollitia',
            'dolorem' => 'culpa',
            'consequuntur' => 'repellat',
            'mollitia' => 'occaecati',
        ],
        [
            'commodi' => 'quam',
            'molestiae' => 'velit',
        ],
        [
            'quia' => 'quis',
            'vitae' => 'laborum',
            'animi' => 'enim',
        ],
        [
            'quo' => 'sequi',
        ],
    ];
    $request->description = 'tenetur';
    $request->doNotContact = false;
    $request->domain = 'ipsam';
    $request->founded = 'id';
    $request->id = 820994;
    $request->industry = 'aut';
    $request->linkedinUrl = 'quasi';
    $request->locale = 'error';
    $request->name = 'Neal Boyer';
    $request->ownerId = 878194;
    $request->phone = '690.647.0042 x913';
    $request->postalCode = '41638';
    $request->revenueRange = 'commodi';
    $request->size = 'repudiandae';
    $request->state = 'quae';
    $request->street = '65582 Ledner Valley';
    $request->tags = [
        'repudiandae',
    ];
    $request->twitterHandle = 'sint';
    $request->upsertKey = 'veritatis';
    $request->website = 'itaque';

    $response = $sdk->accountUpsert->postV2AccountUpsertsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
