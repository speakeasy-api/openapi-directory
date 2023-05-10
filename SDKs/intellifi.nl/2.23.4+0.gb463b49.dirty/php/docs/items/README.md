# items

## Overview

The `items` resource contains data about things that can be tracked using the Brain.
When an item is detected for the first time by a device connected to the Brain, it will be added to this resource.
It will then be updated with information about where the item currently is, or where it has been seen for the last time.


<https://intellifi.zendesk.com/hc/en-us/articles/360007502554>
### Available Operations

* [addItem](#additem) - Create item
* [deleteItem](#deleteitem) - Delete item
* [getItemById](#getitembyid) - Get item
* [getItems](#getitems) - Get all items
* [updateItem](#updateitem) - Update existing item

## addItem

Create item

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
    $request = new AddItemRequestBody1Input();
    $request->codeHex = 'deadbeef';
    $request->configRequest = [
        'cupiditate' => 'quos',
        'perferendis' => 'magni',
    ];
    $request->custom = 'assumenda';
    $request->label = 'Foo Bar';
    $request->locationRequest = '5b7d6cbd7503c445552a1664';
    $request->metadata = [
        'alias' => 'fugit',
        'dolorum' => 'excepturi',
    ];
    $request->protocol = ItemProtocolEnum::EPCGEN2;
    $request->technology = TechnologyEnum::RFID;
    $request->type = ItemTypeEnum::TAG;

    $response = $sdk->items->addItem($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteItem

Delete item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteItemRequest();
    $request->id = '4bb4f63c-969e-49a3-afa7-7dfb14cd66ae';

    $response = $sdk->items->deleteItem($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemById

Get item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetItemByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemByIdRequest();
    $request->id = '395efb9b-a88f-43a6-a997-074ba4469b6e';

    $response = $sdk->items->getItemById($request);

    if ($response->item !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItems

Get all items

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItemProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\TechnologyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemsRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-24T10:55:00.183Z');
    $request->afterCode = 'magnam';
    $request->afterId = 'et';
    $request->before = 'excepturi';
    $request->beforeCode = 'ullam';
    $request->beforeId = 'provident';
    $request->codeHex = 'deadbeef';
    $request->from = 'quos';
    $request->fromCode = 'sint';
    $request->fromId = 'accusantium';
    $request->id = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->isPresent = false;
    $request->label = 'Foo Bar';
    $request->limit = 653201;
    $request->location = '5b7d6cbd7503c445552a1664';
    $request->metadata = 'reiciendis';
    $request->moveCount = 4523;
    $request->populate = 'mollitia';
    $request->protocol = ItemProtocolEnum::EPCGEN2;
    $request->resultsOnly = false;
    $request->select = 'ad';
    $request->sets = '5b7d6cbd7503c445552a1664';
    $request->sort = 'eum';
    $request->technology = TechnologyEnum::RFID;
    $request->text = 'dolor';
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeLastPresent = 'necessitatibus';
    $request->timeMoved = '2018-08-30T09:51:59.737Z';
    $request->timeUpdated = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 1412.64;
    $request->type = ItemTypeEnum::TAG;
    $request->until = 'nemo';
    $request->untilCode = 'quasi';
    $request->untilId = 'iure';

    $response = $sdk->items->getItems($request);

    if ($response->getItems200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateItem

Update existing item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItemUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateItemRequest();
    $request->itemUpdate = new ItemUpdate();
    $request->itemUpdate->configRequest = [
        'debitis' => 'eius',
        'maxime' => 'deleniti',
        'facilis' => 'in',
        'architecto' => 'architecto',
    ];
    $request->itemUpdate->custom = 'repudiandae';
    $request->itemUpdate->label = 'Foo Bar';
    $request->itemUpdate->locationRequest = '5b7d6cbd7503c445552a1664';
    $request->itemUpdate->metadata = [
        'expedita' => 'nihil',
        'repellat' => 'quibusdam',
    ];
    $request->id = '2ed02892-1cdd-4c69-a601-fb576b0d5f0d';

    $response = $sdk->items->updateItem($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
