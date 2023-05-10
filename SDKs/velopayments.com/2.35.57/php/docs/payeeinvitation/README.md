# payeeInvitation

## Overview

Payee invitation is a process of inviting individual payees to the Velo platform. In this sction you will find APIs for working with Payee Invitations.

### Available Operations

* [~~createPayeeV3Json~~](#createpayeev3json) - Initiate Payee Creation :warning: **Deprecated**
* [~~createPayeeV3Multipart~~](#createpayeev3multipart) - Initiate Payee Creation :warning: **Deprecated**
* [~~getPayeesInvitationStatusV3~~](#getpayeesinvitationstatusv3) - Get Payee Invitation Status :warning: **Deprecated**
* [getPayeesInvitationStatusV4](#getpayeesinvitationstatusv4) - Get Payee Invitation Status
* [~~queryBatchStatusV3~~](#querybatchstatusv3) - Query Batch Status :warning: **Deprecated**
* [queryBatchStatusV4](#querybatchstatusv4) - Query Batch Status
* [~~resendPayeeInviteV3~~](#resendpayeeinvitev3) - Resend Payee Invite :warning: **Deprecated**
* [resendPayeeInviteV4](#resendpayeeinvitev4) - Resend Payee Invite
* [v4CreatePayeeJson](#v4createpayeejson) - Initiate Payee Creation
* [v4CreatePayeeMultipart](#v4createpayeemultipart) - Initiate Payee Creation

## ~~createPayeeV3Json~~

<p>Use v4 instead</p>
Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
that provided for another payee within the same batch). The validation at this stage is intra-batch only.
Validation against payees who have already been invited occurs subsequently during processing of the batch.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreatePayeesRequestV3Input;
use \OpenAPI\OpenAPI\Models\Shared\CreatePayeeV3Input;
use \OpenAPI\OpenAPI\Models\Shared\CreatePayeeAddressV3;
use \OpenAPI\OpenAPI\Models\Shared\ChallengeV3;
use \OpenAPI\OpenAPI\Models\Shared\CompanyV3;
use \OpenAPI\OpenAPI\Models\Shared\CreateIndividualV3;
use \OpenAPI\OpenAPI\Models\Shared\CreateIndividualV3Name;
use \OpenAPI\OpenAPI\Models\Shared\CreatePaymentChannelV3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePayeesRequestV3Input();
    $request->payees = [
        new CreatePayeeV3Input(),
    ];
    $request->payorId = '9ac75325-5dcd-42d5-b992-175d7e0a035e';

    $response = $sdk->payeeInvitation->createPayeeV3Json($request);

    if ($response->createPayeesCSVResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~createPayeeV3Multipart~~

<p>Use v4 instead</p>
Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
that provided for another payee within the same batch). The validation at this stage is intra-batch only.
Validation against payees who have already been invited occurs subsequently during processing of the batch.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePayeeV3MultipartFormData;
use \OpenAPI\OpenAPI\Models\Shared\CreatePayeesCSVRequestV3;
use \OpenAPI\OpenAPI\Models\Shared\PayeeTypeEnumEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePayeeV3MultipartFormData();
    $request->file = [
        new CreatePayeesCSVRequestV3(),
        new CreatePayeesCSVRequestV3(),
        new CreatePayeesCSVRequestV3(),
    ];
    $request->payorId = '921cddc6-9260-41fb-976b-0d5f0d30c5fb';

    $response = $sdk->payeeInvitation->createPayeeV3Multipart($request);

    if ($response->createPayeesCSVResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getPayeesInvitationStatusV3~~

<p>Use v4 instead</p>
<p>Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayeesInvitationStatusV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayeesInvitationStatusV3Request();
    $request->invitationStatus = 'nobis';
    $request->page = 1;
    $request->pageSize = 25;
    $request->payeeId = '2aa5d7e0-2ecb-403f-8494-1865ed0454e9';
    $request->payorId = '9ac75325-5dcd-42d5-b992-175d7e0a035e';

    $response = $sdk->payeeInvitation->getPayeesInvitationStatusV3($request);

    if ($response->pagedPayeeInvitationStatusResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayeesInvitationStatusV4

Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayeesInvitationStatusV4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayeesInvitationStatusV4Request();
    $request->invitationStatus = 'dolores';
    $request->page = 1;
    $request->pageSize = 25;
    $request->payeeId = '2aa5d7e0-2ecb-403f-8494-1865ed0454e9';
    $request->payorId = '9ac75325-5dcd-42d5-b992-175d7e0a035e';

    $response = $sdk->payeeInvitation->getPayeesInvitationStatusV4($request);

    if ($response->pagedPayeeInvitationStatusResponseV4 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~queryBatchStatusV3~~

<p>Use v4 instead</p>
Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryBatchStatusV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryBatchStatusV3Request();
    $request->batchId = '58705320-2c73-4d5f-a9b9-0c28909b3fe4';

    $response = $sdk->payeeInvitation->queryBatchStatusV3($request);

    if ($response->queryBatchResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryBatchStatusV4

Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryBatchStatusV4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryBatchStatusV4Request();
    $request->batchId = '9a8d9cbf-4863-4332-bf9b-77f3a4100674';

    $response = $sdk->payeeInvitation->queryBatchStatusV4($request);

    if ($response->queryBatchResponseV4 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~resendPayeeInviteV3~~

<p>Use v4 instead</p>
<p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
<p>Any previous invites to the payee by this Payor will be invalidated</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResendPayeeInviteV3Request;
use \OpenAPI\OpenAPI\Models\Shared\InvitePayeeRequestV3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResendPayeeInviteV3Request();
    $request->invitePayeeRequestV3 = new InvitePayeeRequestV3();
    $request->invitePayeeRequestV3->payorId = '9ac75325-5dcd-42d5-b992-175d7e0a035e';
    $request->payeeId = '2aa5d7e0-2ecb-403f-8494-1865ed0454e9';

    $response = $sdk->payeeInvitation->resendPayeeInviteV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendPayeeInviteV4

<p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
<p>Any previous invites to the payee by this Payor will be invalidated</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResendPayeeInviteV4Request;
use \OpenAPI\OpenAPI\Models\Shared\InvitePayeeRequestV4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResendPayeeInviteV4Request();
    $request->invitePayeeRequestV4 = new InvitePayeeRequestV4();
    $request->invitePayeeRequestV4->payorId = '9ac75325-5dcd-42d5-b992-175d7e0a035e';
    $request->payeeId = '2aa5d7e0-2ecb-403f-8494-1865ed0454e9';

    $response = $sdk->payeeInvitation->resendPayeeInviteV4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## v4CreatePayeeJson

<p>Initiate the process of creating 1 to 2000 payees in a batch</p>
<p>Use the batchId in the response to query for status.</p>
<p>In addition to standard semantic validations, a 400 will also result if: </p>
<ul>
<li>there is a duplicate remote id within the batch</li>
<li>there is a duplicate email within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
that provided for another payee within the same batch).</li>
</ul>
<p>The validation at this stage is intra-batch only.</p>
<p>Validation against payees who have already been invited occurs subsequently during processing of the batch.</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreatePayeesRequestV4;
use \OpenAPI\OpenAPI\Models\Shared\CreatePayeeV4;
use \OpenAPI\OpenAPI\Models\Shared\CreatePayeeAddressV4;
use \OpenAPI\OpenAPI\Models\Shared\ChallengeV4;
use \OpenAPI\OpenAPI\Models\Shared\CompanyV4;
use \OpenAPI\OpenAPI\Models\Shared\CreateIndividualV4;
use \OpenAPI\OpenAPI\Models\Shared\CreateIndividualV3Name;
use \OpenAPI\OpenAPI\Models\Shared\CreatePaymentChannelV4;
use \OpenAPI\OpenAPI\Models\Shared\PayeeTypeEnumEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePayeesRequestV4();
    $request->payees = [
        new CreatePayeeV4(),
        new CreatePayeeV4(),
        new CreatePayeeV4(),
        new CreatePayeeV4(),
    ];
    $request->payorId = '9ac75325-5dcd-42d5-b992-175d7e0a035e';

    $response = $sdk->payeeInvitation->v4CreatePayeeJson($request);

    if ($response->createPayeesCSVResponseV4 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## v4CreatePayeeMultipart

<p>Initiate the process of creating 1 to 2000 payees in a batch</p>
<p>Use the batchId in the response to query for status.</p>
<p>In addition to standard semantic validations, a 400 will also result if: </p>
<ul>
<li>there is a duplicate remote id within the batch</li>
<li>there is a duplicate email within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
that provided for another payee within the same batch).</li>
</ul>
<p>The validation at this stage is intra-batch only.</p>
<p>Validation against payees who have already been invited occurs subsequently during processing of the batch.</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\V4CreatePayeeMultipartFormData;
use \OpenAPI\OpenAPI\Models\Shared\CreatePayeesCSVRequestV4;
use \OpenAPI\OpenAPI\Models\Shared\PayeeTypeEnumEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new V4CreatePayeeMultipartFormData();
    $request->file = [
        new CreatePayeesCSVRequestV4(),
        new CreatePayeesCSVRequestV4(),
        new CreatePayeesCSVRequestV4(),
    ];
    $request->payorId = 'f69280d1-ba77-4a89-abf7-37ae4203ce5e';

    $response = $sdk->payeeInvitation->v4CreatePayeeMultipart($request);

    if ($response->createPayeesCSVResponseV4 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
