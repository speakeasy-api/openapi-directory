# sets

## Overview

It can be useful to group items or Smartspots in a list. The `sets` resource can be used to create and manage such list sets.
Sets can be utilized in various Brain Management Console utilities and can also be useful in custom Brain applications.


<https://intellifi.zendesk.com/hc/en-us/articles/360007824993>
### Available Operations

* [addItemIdsList](#additemidslist) - Add items to an existing list
* [addItemIdsSpotList](#additemidsspotlist) - Add spots to an existing list
* [addItemList](#additemlist) - Create item list
* [addSpotList](#addspotlist) - Create spot list
* [deleteItemIdFromItemList](#deleteitemidfromitemlist) - Delete item from list
* [deleteItemIdFromSpotList](#deleteitemidfromspotlist) - Delete spot from list
* [deleteItemSet](#deleteitemset) - Delete item list
* [deleteSpotList](#deletespotlist) - Delete spot list
* [getItemListById](#getitemlistbyid) - Get item list
* [getItemListIdsById](#getitemlistidsbyid) - Get item ids for this list
* [getItemLists](#getitemlists) - Get all item lists
* [getSpotListById](#getspotlistbyid) - Info for a specific spot list
* [getSpotListIdsById](#getspotlistidsbyid) - Get spot ids for this list
* [getSpotLists](#getspotlists) - Get all spot lists
* [updateItemList](#updateitemlist) - Update existing item list
* [updateSpotList](#updatespotlist) - Update existing spot list

## addItemIdsList

Add items to an existing list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddItemIdsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddItemIdsListRequest();
    $request->requestBody = [
        '5b7d6cbd7503c445552a1664',
    ];
    $request->id = '6555ba3c-2874-44ed-93b8-8f3a8d8f5c0b';

    $response = $sdk->sets->addItemIdsList($request);

    if ($response->responseListResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addItemIdsSpotList

Add spots to an existing list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddItemIdsSpotListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddItemIdsSpotListRequest();
    $request->requestBody = [
        '5b7d6cbd7503c445552a1664',
    ];
    $request->id = 'f2fb7b19-4a27-46b2-a916-fe1f08f4294e';

    $response = $sdk->sets->addItemIdsSpotList($request);

    if ($response->responseListResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addItemList

Create item list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ItemListInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemListInput();
    $request->custom = 'ipsum';
    $request->label = 'Foo Bar';
    $request->metadata = [
        'occaecati' => 'quos',
        'voluptatibus' => 'tempora',
    ];

    $response = $sdk->sets->addItemList($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addSpotList

Create spot list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ItemListInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemListInput();
    $request->custom = 'tempora';
    $request->label = 'Foo Bar';
    $request->metadata = [
        'reiciendis' => 'ex',
        'sit' => 'non',
    ];

    $response = $sdk->sets->addSpotList($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteItemIdFromItemList

Delete item from list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItemIdFromItemListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteItemIdFromItemListRequest();
    $request->id = 'e8b445e8-0ca5-45ef-920e-457e1858b6a8';
    $request->itemId = 'error';

    $response = $sdk->sets->deleteItemIdFromItemList($request);

    if ($response->responseListResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteItemIdFromSpotList

Delete spot from list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItemIdFromSpotListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteItemIdFromSpotListRequest();
    $request->id = 'fbe3a5aa-8e48-424d-8ab4-075088e51862';
    $request->itemId = 'sit';

    $response = $sdk->sets->deleteItemIdFromSpotList($request);

    if ($response->responseListResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteItemSet

Delete item list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItemSetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteItemSetRequest();
    $request->id = '65e904f3-b119-44b8-abf6-03a79f9dfe0a';

    $response = $sdk->sets->deleteItemSet($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSpotList

Delete spot list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSpotListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSpotListRequest();
    $request->id = 'b7da8a50-ce18-47f8-abc1-73d689eee952';

    $response = $sdk->sets->deleteSpotList($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemListById

Get item list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetItemListByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemListByIdRequest();
    $request->id = '6f8d986e-881e-4ad4-b0e1-012563f94e29';

    $response = $sdk->sets->getItemListById($request);

    if ($response->itemList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemListIdsById

Get item ids for this list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetItemListIdsByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemListIdsByIdRequest();
    $request->id = 'e973e922-a57a-415b-a3e0-60807e2b6e3a';

    $response = $sdk->sets->getItemListIdsById($request);

    if ($response->listOfItemIds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemLists

Get all item lists

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetItemListsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemListsRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-10T20:58:20.380Z');
    $request->afterId = 'rem';
    $request->before = 'aliquam';
    $request->beforeId = 'ad';
    $request->from = 'repellat';
    $request->fromId = 'alias';
    $request->id = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->label = 'Foo Bar';
    $request->limit = 362189;
    $request->metadata = 'perspiciatis';
    $request->populate = 'nihil';
    $request->resultsOnly = false;
    $request->select = 'mollitia';
    $request->sha1 = 'voluptas';
    $request->sort = 'alias';
    $request->text = 'maiores';
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeUpdated = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 9702.22;
    $request->total = 174658;
    $request->until = 'id';
    $request->untilId = 'minima';

    $response = $sdk->sets->getItemLists($request);

    if ($response->getItemLists200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpotListById

Info for a specific spot list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSpotListByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpotListByIdRequest();
    $request->id = '4a31e947-64a3-4e86-9e79-56f9251a5a9d';

    $response = $sdk->sets->getSpotListById($request);

    if ($response->spotList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpotListIdsById

Get spot ids for this list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSpotListIdsByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpotListIdsByIdRequest();
    $request->id = 'a660ff57-bfaa-4d4f-9efc-1b4512c10326';

    $response = $sdk->sets->getSpotListIdsById($request);

    if ($response->listOfItemIds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpotLists

Get all spot lists

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSpotListsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpotListsRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-24T11:18:45.161Z');
    $request->afterId = 'at';
    $request->before = 'impedit';
    $request->beforeId = 'eos';
    $request->from = 'sapiente';
    $request->fromId = 'eum';
    $request->id = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->label = 'Foo Bar';
    $request->limit = 117320;
    $request->metadata = 'minima';
    $request->populate = 'beatae';
    $request->resultsOnly = false;
    $request->select = 'cupiditate';
    $request->sort = 'provident';
    $request->text = 'earum';
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeUpdated = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 7453.98;
    $request->total = 940782;
    $request->until = 'illum';
    $request->untilId = 'eaque';

    $response = $sdk->sets->getSpotLists($request);

    if ($response->getSpotLists200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateItemList

Update existing item list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateItemListRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItemListInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateItemListRequest();
    $request->itemListInput = new ItemListInput();
    $request->itemListInput->custom = 'earum';
    $request->itemListInput->label = 'Foo Bar';
    $request->itemListInput->metadata = [
        'maiores' => 'debitis',
        'aliquid' => 'porro',
        'suscipit' => 'dolorem',
    ];
    $request->id = '2ca3aed0-1179-4963-92fd-e04771778ff6';

    $response = $sdk->sets->updateItemList($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSpotList

Update existing spot list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSpotListRequest;
use \OpenAPI\OpenAPI\Models\Shared\SpotListInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSpotListRequest();
    $request->spotListInput = new SpotListInput();
    $request->spotListInput->custom = 'architecto';
    $request->spotListInput->label = 'Foo Bar';
    $request->spotListInput->metadata = [
        'doloremque' => 'dicta',
        'odio' => 'tempora',
        'esse' => 'ex',
        'consectetur' => 'aliquid',
    ];
    $request->id = '0a15db6a-6606-459a-9ade-aab5851d6c64';

    $response = $sdk->sets->updateSpotList($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
