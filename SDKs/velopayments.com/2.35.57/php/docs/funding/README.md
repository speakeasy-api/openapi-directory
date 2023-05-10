# funding

## Overview

<p>APIs for initiating funding of source accounts from external sources and viewing balance updates</p>


### Available Operations

* [~~createFundingRequestV2~~](#createfundingrequestv2) - Create Funding Request :warning: **Deprecated**
* [createFundingRequestV3](#createfundingrequestv3) - Create Funding Request
* [getFundingAccountV2](#getfundingaccountv2) - Get Funding Account
* [getFundingAccountsV2](#getfundingaccountsv2) - Get Funding Accounts
* [getFundingByIdV1](#getfundingbyidv1) - Get Funding
* [listFundingAuditDeltas](#listfundingauditdeltas) - Get Funding Audit Delta

## ~~createFundingRequestV2~~

Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFundingRequestV2Request;
use \OpenAPI\OpenAPI\Models\Shared\FundingRequestV2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFundingRequestV2Request();
    $request->fundingRequestV2 = new FundingRequestV2();
    $request->fundingRequestV2->amount = 548814;
    $request->sourceAccountId = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';

    $response = $sdk->funding->createFundingRequestV2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFundingRequestV3

<p>Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFundingRequestV3Request;
use \OpenAPI\OpenAPI\Models\Shared\FundingRequestV3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFundingRequestV3Request();
    $request->fundingRequestV3 = new FundingRequestV3();
    $request->fundingRequestV3->amount = 20218;
    $request->fundingRequestV3->fundingAccountId = '5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb';
    $request->sourceAccountId = '73920592-9396-4fea-b596-eb10faaa2352';

    $response = $sdk->funding->createFundingRequestV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFundingAccountV2

Get Funding Account by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFundingAccountV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFundingAccountV2Request();
    $request->fundingAccountId = 'c5955907-aff1-4a3a-afa9-467739251aa5';
    $request->sensitive = false;

    $response = $sdk->funding->getFundingAccountV2($request);

    if ($response->fundingAccountResponseV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFundingAccountsV2

Get the funding accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFundingAccountsV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFundingAccountsV2Request();
    $request->country = 'US';
    $request->currency = 'USD';
    $request->name = 'Angelica Dietrich';
    $request->page = 662527;
    $request->pageSize = 820994;
    $request->payorId = '019da1ff-e78f-4097-b007-4f15471b5e6e';
    $request->sensitive = false;
    $request->sort = 'quae';
    $request->type = 'FBO';

    $response = $sdk->funding->getFundingAccountsV2($request);

    if ($response->listFundingAccountsResponseV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFundingByIdV1

Get Funding by Id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFundingByIdV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFundingByIdV1Request();
    $request->fundingId = '3b99d488-e1e9-41e4-90ad-2abd44269802';

    $response = $sdk->funding->getFundingByIdV1($request);

    if ($response->fundingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFundingAuditDeltas

Get funding audit deltas for a payor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFundingAuditDeltasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFundingAuditDeltasRequest();
    $request->page = 828940;
    $request->pageSize = 369808;
    $request->payorId = '02a94bb4-f63c-4969-a9a3-efa77dfb14cd';
    $request->updatedSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T06:36:34.417Z');

    $response = $sdk->funding->listFundingAuditDeltas($request);

    if ($response->pageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
