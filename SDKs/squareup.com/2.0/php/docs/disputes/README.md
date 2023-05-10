# disputes

### Available Operations

* [acceptDispute](#acceptdispute) - AcceptDispute
* [createDisputeEvidenceText](#createdisputeevidencetext) - CreateDisputeEvidenceText
* [deleteDisputeEvidence](#deletedisputeevidence) - DeleteDisputeEvidence
* [listDisputeEvidence](#listdisputeevidence) - ListDisputeEvidence
* [listDisputes](#listdisputes) - ListDisputes
* [retrieveDispute](#retrievedispute) - RetrieveDispute
* [retrieveDisputeEvidence](#retrievedisputeevidence) - RetrieveDisputeEvidence
* [submitEvidence](#submitevidence) - SubmitEvidence

## acceptDispute

Accepts the loss on a dispute. Square returns the disputed amount to the cardholder and
updates the dispute state to ACCEPTED.

Square debits the disputed amount from the seller’s Square account. If the Square account
does not have sufficient funds, Square debits the associated bank account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AcceptDisputeRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptDisputeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptDisputeRequest();
    $request->disputeId = 'facilis';

    $requestSecurity = new AcceptDisputeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disputes->acceptDispute($request, $requestSecurity);

    if ($response->acceptDisputeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDisputeEvidenceText

Uploads text to use as evidence for a dispute challenge.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDisputeEvidenceTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDisputeEvidenceTextRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDisputeEvidenceTextSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDisputeEvidenceTextRequest();
    $request->createDisputeEvidenceTextRequest = new CreateDisputeEvidenceTextRequest();
    $request->createDisputeEvidenceTextRequest->evidenceText = 'voluptate';
    $request->createDisputeEvidenceTextRequest->evidenceType = 'expedita';
    $request->createDisputeEvidenceTextRequest->idempotencyKey = 'ab';
    $request->disputeId = 'iste';

    $requestSecurity = new CreateDisputeEvidenceTextSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disputes->createDisputeEvidenceText($request, $requestSecurity);

    if ($response->createDisputeEvidenceTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDisputeEvidence

Removes specified evidence from a dispute.

Square does not send the bank any evidence that is removed. Also, you cannot remove evidence after
submitting it to the bank using [SubmitEvidence](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/submit-evidence).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDisputeEvidenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDisputeEvidenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDisputeEvidenceRequest();
    $request->disputeId = 'dolore';
    $request->evidenceId = 'laborum';

    $requestSecurity = new DeleteDisputeEvidenceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disputes->deleteDisputeEvidence($request, $requestSecurity);

    if ($response->deleteDisputeEvidenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDisputeEvidence

Returns a list of evidence associated with a dispute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDisputeEvidenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDisputeEvidenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDisputeEvidenceRequest();
    $request->cursor = 'sed';
    $request->disputeId = 'in';

    $requestSecurity = new ListDisputeEvidenceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disputes->listDisputeEvidence($request, $requestSecurity);

    if ($response->listDisputeEvidenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDisputes

Returns a list of disputes associated with a particular account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDisputesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDisputesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDisputesRequest();
    $request->cursor = 'commodi';
    $request->locationId = 'quidem';
    $request->states = 'explicabo';

    $requestSecurity = new ListDisputesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disputes->listDisputes($request, $requestSecurity);

    if ($response->listDisputesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveDispute

Returns details about a specific dispute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveDisputeRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveDisputeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveDisputeRequest();
    $request->disputeId = 'voluptas';

    $requestSecurity = new RetrieveDisputeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disputes->retrieveDispute($request, $requestSecurity);

    if ($response->retrieveDisputeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveDisputeEvidence

Returns the evidence metadata specified by the evidence ID in the request URL path

You must maintain a copy of the evidence you upload if you want to reference it later. You cannot
download the evidence after you upload it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveDisputeEvidenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveDisputeEvidenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveDisputeEvidenceRequest();
    $request->disputeId = 'unde';
    $request->evidenceId = 'architecto';

    $requestSecurity = new RetrieveDisputeEvidenceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disputes->retrieveDisputeEvidence($request, $requestSecurity);

    if ($response->retrieveDisputeEvidenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitEvidence

Submits evidence to the cardholder's bank.

Before submitting evidence, Square compiles all available evidence. This includes evidence uploaded
using the [CreateDisputeEvidenceFile](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/create-dispute-evidence-file) and
[CreateDisputeEvidenceText](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/create-dispute-evidence-text) endpoints and
evidence automatically provided by Square, when available.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SubmitEvidenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\SubmitEvidenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitEvidenceRequest();
    $request->disputeId = 'suscipit';

    $requestSecurity = new SubmitEvidenceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disputes->submitEvidence($request, $requestSecurity);

    if ($response->submitEvidenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
