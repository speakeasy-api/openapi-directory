# payees

## Overview

A payee is a person you wish to transfer money to. In this section you will find API opertions for working with Payees.


### Available Operations

* [~~deletePayeeByIdV3~~](#deletepayeebyidv3) - Delete Payee by Id :warning: **Deprecated**
* [deletePayeeByIdV4](#deletepayeebyidv4) - Delete Payee by Id
* [~~getPayeeByIdV3~~](#getpayeebyidv3) - Get Payee by Id :warning: **Deprecated**
* [getPayeeByIdV4](#getpayeebyidv4) - Get Payee by Id
* [~~listPayeeChangesV3~~](#listpayeechangesv3) - List Payee Changes :warning: **Deprecated**
* [listPayeeChangesV4](#listpayeechangesv4) - List Payee Changes
* [~~listPayeesV3~~](#listpayeesv3) - List Payees :warning: **Deprecated**
* [listPayeesV4](#listpayeesv4) - List Payees
* [~~payeeDetailsUpdateV3~~](#payeedetailsupdatev3) - Update Payee Details :warning: **Deprecated**
* [payeeDetailsUpdateV4](#payeedetailsupdatev4) - Update Payee Details
* [~~postV3PayeesPayeeIdRemoteIdUpdate~~](#postv3payeespayeeidremoteidupdate) - Update Payee Remote Id :warning: **Deprecated**
* [postV4PayeesPayeeIdRemoteIdUpdate](#postv4payeespayeeidremoteidupdate) - Update Payee Remote Id

## ~~deletePayeeByIdV3~~

<p>Use v4 instead</p>
<p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
<p>* Payee ID is not found</p>
<p>* If Payee has not been on-boarded</p>
<p>* If Payee is in grace period</p>
<p>* If Payee has existing payments</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePayeeByIdV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayeeByIdV3Request();
    $request->payeeId = '2aa5d7e0-2ecb-403f-8494-1865ed0454e9';

    $response = $sdk->payees->deletePayeeByIdV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePayeeByIdV4

<p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
<p>* Payee ID is not found</p>
<p>* If Payee has not been on-boarded</p>
<p>* If Payee is in grace period</p>
<p>* If Payee has existing payments</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePayeeByIdV4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayeeByIdV4Request();
    $request->payeeId = '2aa5d7e0-2ecb-403f-8494-1865ed0454e9';

    $response = $sdk->payees->deletePayeeByIdV4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getPayeeByIdV3~~

<p>Use v4 instead</p>
<p>Get Payee by Id</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayeeByIdV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayeeByIdV3Request();
    $request->payeeId = '2aa5d7e0-2ecb-403f-8494-1865ed0454e9';
    $request->sensitive = false;

    $response = $sdk->payees->getPayeeByIdV3($request);

    if ($response->payeeDetailResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayeeByIdV4

Get Payee by Id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayeeByIdV4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayeeByIdV4Request();
    $request->payeeId = '2aa5d7e0-2ecb-403f-8494-1865ed0454e9';
    $request->sensitive = false;

    $response = $sdk->payees->getPayeeByIdV4($request);

    if ($response->payeeDetailResponseV4 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listPayeeChangesV3~~

<p>Use v4 instead</p>
<p>Get a paginated response listing payee changes.</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPayeeChangesV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPayeeChangesV3Request();
    $request->page = 1;
    $request->pageSize = 100;
    $request->payorId = '6a95d8a0-d446-4ce2-af7a-73cf3be453f8';
    $request->updatedSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-22T15:11:39.695Z');

    $response = $sdk->payees->listPayeeChangesV3($request);

    if ($response->payeeDeltaResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPayeeChangesV4

Get a paginated response listing payee changes (updated since a particular time) to a limited set of fields:
- dbaName
- displayName
- email
- onboardedStatus
- payeeCountry
- payeeId
- remoteId


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPayeeChangesV4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPayeeChangesV4Request();
    $request->page = 1;
    $request->pageSize = 100;
    $request->payorId = 'b326b5a7-3429-4cdb-9a84-22bb679d2322';
    $request->updatedSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-16T10:27:43.717Z');

    $response = $sdk->payees->listPayeeChangesV4($request);

    if ($response->payeeDeltaResponseV4 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listPayeesV3~~

<p>Use v4 instead</p>
Get a paginated response listing the payees for a payor.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPayeesV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPayeesV3Request();
    $request->disabled = false;
    $request->displayName = 'Bob Smith';
    $request->email = 'bob@example.com';
    $request->onboardedStatus = 'ullam';
    $request->page = 1;
    $request->pageSize = 25;
    $request->payeeCountry = 'US';
    $request->payeeType = 'nam';
    $request->payorId = 'f0cbb1e3-1b8b-490f-b443-a1108e0adcf4';
    $request->remoteId = 'remoteId123';
    $request->sort = 'displayName:asc';
    $request->watchlistStatus = 'facilis';

    $response = $sdk->payees->listPayeesV3($request);

    if ($response->pagedPayeeResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPayeesV4

Get a paginated response listing the payees for a payor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPayeesV4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPayeesV4Request();
    $request->disabled = false;
    $request->displayName = 'Bob Smith';
    $request->email = 'bob@example.com';
    $request->ofacStatus = 'cupiditate';
    $request->onboardedStatus = 'qui';
    $request->page = 1;
    $request->pageSize = 25;
    $request->payeeCountry = 'US';
    $request->payeeType = 'quae';
    $request->payorId = '879fce95-3f73-4ef7-bbc7-abd74dd39c0f';
    $request->remoteId = 'remoteId123';
    $request->sort = 'displayName:asc';
    $request->watchlistStatus = 'exercitationem';

    $response = $sdk->payees->listPayeesV4($request);

    if ($response->pagedPayeeResponseV4 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~payeeDetailsUpdateV3~~

<p>Use v4 instead</p>
<p>Update payee details for the given Payee Id.<p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PayeeDetailsUpdateV3Request;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePayeeDetailsRequestV3Input;
use \OpenAPI\OpenAPI\Models\Shared\PayeeAddressV3;
use \OpenAPI\OpenAPI\Models\Shared\ChallengeV3;
use \OpenAPI\OpenAPI\Models\Shared\CompanyV3;
use \OpenAPI\OpenAPI\Models\Shared\IndividualV3Input;
use \OpenAPI\OpenAPI\Models\Shared\IndividualV3Name;
use \OpenAPI\OpenAPI\Models\Shared\PayeeTypeEnumEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PayeeDetailsUpdateV3Request();
    $request->updatePayeeDetailsRequestV3Input = new UpdatePayeeDetailsRequestV3Input();
    $request->updatePayeeDetailsRequestV3Input->address = new PayeeAddressV3();
    $request->updatePayeeDetailsRequestV3Input->address->city = 'Key West';
    $request->updatePayeeDetailsRequestV3Input->address->country = 'US';
    $request->updatePayeeDetailsRequestV3Input->address->countyOrProvince = 'FL';
    $request->updatePayeeDetailsRequestV3Input->address->line1 = '500 Duval St';
    $request->updatePayeeDetailsRequestV3Input->address->line2 = 'nulla';
    $request->updatePayeeDetailsRequestV3Input->address->line3 = 'fugit';
    $request->updatePayeeDetailsRequestV3Input->address->line4 = 'porro';
    $request->updatePayeeDetailsRequestV3Input->address->zipOrPostcode = '33945';
    $request->updatePayeeDetailsRequestV3Input->challenge = new ChallengeV3();
    $request->updatePayeeDetailsRequestV3Input->challenge->description = 'challenge description';
    $request->updatePayeeDetailsRequestV3Input->challenge->value = 'challenge test';
    $request->updatePayeeDetailsRequestV3Input->company = new CompanyV3();
    $request->updatePayeeDetailsRequestV3Input->company->name = 'ABC Group Plc';
    $request->updatePayeeDetailsRequestV3Input->company->operatingName = 'ABC Co';
    $request->updatePayeeDetailsRequestV3Input->company->taxId = '123123123';
    $request->updatePayeeDetailsRequestV3Input->email = 'bob@example.com';
    $request->updatePayeeDetailsRequestV3Input->individual = new IndividualV3Input();
    $request->updatePayeeDetailsRequestV3Input->individual->name = new IndividualV3Name();
    $request->updatePayeeDetailsRequestV3Input->individual->name->firstName = 'Bob';
    $request->updatePayeeDetailsRequestV3Input->individual->name->lastName = 'Smith';
    $request->updatePayeeDetailsRequestV3Input->individual->name->otherNames = 'A';
    $request->updatePayeeDetailsRequestV3Input->individual->name->title = 'Mr';
    $request->updatePayeeDetailsRequestV3Input->language = 'en-US';
    $request->updatePayeeDetailsRequestV3Input->payeeType = PayeeTypeEnumEnum::COMPANY;
    $request->payeeId = '2aa5d7e0-2ecb-403f-8494-1865ed0454e9';

    $response = $sdk->payees->payeeDetailsUpdateV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## payeeDetailsUpdateV4

<p>Update payee details for the given Payee Id.</p>
<p>Payors may only update the payee details if the payee has not yet onboarded</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PayeeDetailsUpdateV4Request;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePayeeDetailsRequestV4Input;
use \OpenAPI\OpenAPI\Models\Shared\PayeeAddressV4;
use \OpenAPI\OpenAPI\Models\Shared\ChallengeV4;
use \OpenAPI\OpenAPI\Models\Shared\CompanyV4;
use \OpenAPI\OpenAPI\Models\Shared\IndividualV4Input;
use \OpenAPI\OpenAPI\Models\Shared\IndividualV3Name;
use \OpenAPI\OpenAPI\Models\Shared\PayeeTypeEnumEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PayeeDetailsUpdateV4Request();
    $request->updatePayeeDetailsRequestV4Input = new UpdatePayeeDetailsRequestV4Input();
    $request->updatePayeeDetailsRequestV4Input->address = new PayeeAddressV4();
    $request->updatePayeeDetailsRequestV4Input->address->city = 'Key West';
    $request->updatePayeeDetailsRequestV4Input->address->country = 'US';
    $request->updatePayeeDetailsRequestV4Input->address->countyOrProvince = 'FL';
    $request->updatePayeeDetailsRequestV4Input->address->line1 = '500 Duval St';
    $request->updatePayeeDetailsRequestV4Input->address->line2 = 'doloribus';
    $request->updatePayeeDetailsRequestV4Input->address->line3 = 'iusto';
    $request->updatePayeeDetailsRequestV4Input->address->line4 = 'eligendi';
    $request->updatePayeeDetailsRequestV4Input->address->zipOrPostcode = '33945';
    $request->updatePayeeDetailsRequestV4Input->challenge = new ChallengeV4();
    $request->updatePayeeDetailsRequestV4Input->challenge->description = 'challenge description';
    $request->updatePayeeDetailsRequestV4Input->challenge->value = '11984567';
    $request->updatePayeeDetailsRequestV4Input->company = new CompanyV4();
    $request->updatePayeeDetailsRequestV4Input->company->name = 'ABC Group Plc';
    $request->updatePayeeDetailsRequestV4Input->company->operatingName = 'ABC Co';
    $request->updatePayeeDetailsRequestV4Input->company->taxId = '123123123';
    $request->updatePayeeDetailsRequestV4Input->contactSmsNumber = '11235555555';
    $request->updatePayeeDetailsRequestV4Input->email = 'bob@example.com';
    $request->updatePayeeDetailsRequestV4Input->individual = new IndividualV4Input();
    $request->updatePayeeDetailsRequestV4Input->individual->name = new IndividualV3Name();
    $request->updatePayeeDetailsRequestV4Input->individual->name->firstName = 'Bob';
    $request->updatePayeeDetailsRequestV4Input->individual->name->lastName = 'Smith';
    $request->updatePayeeDetailsRequestV4Input->individual->name->otherNames = 'A';
    $request->updatePayeeDetailsRequestV4Input->individual->name->title = 'Mr';
    $request->updatePayeeDetailsRequestV4Input->language = 'en-US';
    $request->updatePayeeDetailsRequestV4Input->payeeType = PayeeTypeEnumEnum::INDIVIDUAL;
    $request->payeeId = '2aa5d7e0-2ecb-403f-8494-1865ed0454e9';

    $response = $sdk->payees->payeeDetailsUpdateV4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~postV3PayeesPayeeIdRemoteIdUpdate~~

<p>Use v4 instead</p>
<p>Update the remote Id for the given Payee Id.</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostV3PayeesPayeeIdRemoteIdUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRemoteIdRequestV3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV3PayeesPayeeIdRemoteIdUpdateRequest();
    $request->updateRemoteIdRequestV3 = new UpdateRemoteIdRequestV3();
    $request->updateRemoteIdRequestV3->payorId = '9ac75325-5dcd-42d5-b992-175d7e0a035e';
    $request->updateRemoteIdRequestV3->remoteId = 'remoteId123';
    $request->payeeId = '2aa5d7e0-2ecb-403f-8494-1865ed0454e9';

    $response = $sdk->payees->postV3PayeesPayeeIdRemoteIdUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV4PayeesPayeeIdRemoteIdUpdate

<p>Update the remote Id for the given Payee Id.</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostV4PayeesPayeeIdRemoteIdUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRemoteIdRequestV4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV4PayeesPayeeIdRemoteIdUpdateRequest();
    $request->updateRemoteIdRequestV4 = new UpdateRemoteIdRequestV4();
    $request->updateRemoteIdRequestV4->payorId = '9ac75325-5dcd-42d5-b992-175d7e0a035e';
    $request->updateRemoteIdRequestV4->remoteId = 'remoteId123';
    $request->payeeId = '2aa5d7e0-2ecb-403f-8494-1865ed0454e9';

    $response = $sdk->payees->postV4PayeesPayeeIdRemoteIdUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
