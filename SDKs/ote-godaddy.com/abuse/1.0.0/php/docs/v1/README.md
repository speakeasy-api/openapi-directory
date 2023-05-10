# v1

### Available Operations

* [createTicket](#createticket) - Create a new abuse ticket
* [getTicketInfo](#getticketinfo) - Return the abuse ticket data for a given ticket id
* [getTickets](#gettickets) - List all abuse tickets ids that match user provided filters

## createTicket

Create a new abuse ticket

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AbuseTicketCreate;
use \OpenAPI\OpenAPI\Models\Shared\AbuseTicketCreateTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AbuseTicketCreate();
    $request->info = 'corrupti';
    $request->infoUrl = 'illum';
    $request->intentional = false;
    $request->proxy = 'vel';
    $request->source = 'error';
    $request->target = 'deserunt';
    $request->type = AbuseTicketCreateTypeEnum::FRAUD_WIRE;

    $response = $sdk->v1->createTicket($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTicketInfo

Return the abuse ticket data for a given ticket id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTicketInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTicketInfoRequest();
    $request->ticketId = 'iure';

    $response = $sdk->v1->getTicketInfo($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTickets

List all abuse tickets ids that match user provided filters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTicketsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTicketsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTicketsRequest();
    $request->closed = false;
    $request->createdEnd = 'magnam';
    $request->createdStart = 'debitis';
    $request->limit = 56713;
    $request->offset = 963663;
    $request->sourceDomainOrIp = 'tempora';
    $request->target = 'suscipit';
    $request->type = GetTicketsTypeEnum::IP_BLOCK;

    $response = $sdk->v1->getTickets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
