# landlordController

### Available Operations

* [landlordControllerCreateMaintenancePreference](#landlordcontrollercreatemaintenancepreference) - Post tenancy maintenance preferences:-
* [landlordControllerGetAccounts](#landlordcontrollergetaccounts) - Get the accounting details for the landlord.
* [landlordControllerGetDocument](#landlordcontrollergetdocument) - Download a Document
* [landlordControllerGetInvetoryReport](#landlordcontrollergetinvetoryreport) - Generate a Inventory PDF for a tenancy
* [landlordControllerGetInvoice](#landlordcontrollergetinvoice) - Get an invoice pdf belonging to the landlord.
* [landlordControllerGetLandlordCrmEntries](#landlordcontrollergetlandlordcrmentries) - Retrieve landlord's CRM ID
* [landlordControllerGetMaintenanceJobs](#landlordcontrollergetmaintenancejobs) - Get Active maintenance jobs.
* [landlordControllerGetProfitLossReport](#landlordcontrollergetprofitlossreport) - Generate a Profit and Loss Report
* [landlordControllerGetRentArrears](#landlordcontrollergetrentarrears) - Rent Arrears
* [landlordControllerGetSASReport](#landlordcontrollergetsasreport) - Generate a Self Assessment Tax Report
* [landlordControllerGetSettings](#landlordcontrollergetsettings) - Get contact details of all linked landlords.
* [landlordControllerGetSummaryDetails](#landlordcontrollergetsummarydetails) - Get the summary details for the landlord.
* [landlordControllerGetTenancy](#landlordcontrollergettenancy) - Get tenancy details.
* [landlordControllerGetTenancyAgreementReport](#landlordcontrollergettenancyagreementreport) - Generate a Tenancy Agreement Copy (PDF)

## landlordControllerCreateMaintenancePreference

Post tenancy maintenance preferences:-

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LandlordControllerCreateMaintenancePreferenceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LandlordControllerCreateMaintenancePreferenceRequest();
    $request->name = 'Sabrina Oberbrunner';
    $request->notes = 'magnam';
    $request->shortName = 'debitis';
    $request->tenancyID = 'ipsa';
    $request->token = 'delectus';

    $response = $sdk->landlordController->landlordControllerCreateMaintenancePreference($request);

    if ($response->landlordControllerCreateMaintenancePreference200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## landlordControllerGetAccounts

Get the accounting details for the landlord.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LandlordControllerGetAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LandlordControllerGetAccountsRequest();
    $request->shortName = 'tempora';
    $request->token = 'suscipit';

    $response = $sdk->landlordController->landlordControllerGetAccounts($request);

    if ($response->landlordAccountingModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## landlordControllerGetDocument

Download a Document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LandlordControllerGetDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LandlordControllerGetDocumentRequest();
    $request->id = '7cc8796e-d151-4a05-9fc2-ddf7cc78ca1b';
    $request->shortName = 'officia';
    $request->token = 'occaecati';

    $response = $sdk->landlordController->landlordControllerGetDocument($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## landlordControllerGetInvetoryReport

Generate a Inventory PDF for a tenancy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LandlordControllerGetInvetoryReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LandlordControllerGetInvetoryReportRequest();
    $request->shortName = 'fugit';
    $request->tenancyID = 'deleniti';
    $request->token = 'hic';

    $response = $sdk->landlordController->landlordControllerGetInvetoryReport($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## landlordControllerGetInvoice

Get an invoice pdf belonging to the landlord.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LandlordControllerGetInvoiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LandlordControllerGetInvoiceRequest();
    $request->invoiceID = 'optio';
    $request->shortName = 'totam';
    $request->token = 'beatae';

    $response = $sdk->landlordController->landlordControllerGetInvoice($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## landlordControllerGetLandlordCrmEntries

Retrieve landlord's CRM ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LandlordControllerGetLandlordCrmEntriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LandlordControllerGetLandlordCrmEntriesRequest();
    $request->shortName = 'commodi';
    $request->token = 'molestiae';

    $response = $sdk->landlordController->landlordControllerGetLandlordCrmEntries($request);

    if ($response->landlordCrmEntries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## landlordControllerGetMaintenanceJobs

Get Active maintenance jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LandlordControllerGetMaintenanceJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LandlordControllerGetMaintenanceJobsRequest();
    $request->shortName = 'modi';
    $request->token = 'qui';

    $response = $sdk->landlordController->landlordControllerGetMaintenanceJobs($request);

    if ($response->landlordMaintenanceModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## landlordControllerGetProfitLossReport

Generate a Profit and Loss Report

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LandlordControllerGetProfitLossReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LandlordControllerGetProfitLossReportRequest();
    $request->shortName = 'impedit';
    $request->token = 'cum';

    $response = $sdk->landlordController->landlordControllerGetProfitLossReport($request);

    if ($response->landlordProfitLossModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## landlordControllerGetRentArrears

Rent Arrears

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LandlordControllerGetRentArrearsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LandlordControllerGetRentArrearsRequest();
    $request->shortName = 'esse';
    $request->token = 'ipsum';

    $response = $sdk->landlordController->landlordControllerGetRentArrears($request);

    if ($response->landlordRentArrearsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## landlordControllerGetSASReport

Generate a Self Assessment Tax Report

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LandlordControllerGetSASReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LandlordControllerGetSASReportRequest();
    $request->shortName = 'excepturi';
    $request->token = 'aspernatur';
    $request->yearEnd = 18789;

    $response = $sdk->landlordController->landlordControllerGetSASReport($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## landlordControllerGetSettings

Get contact details of all linked landlords.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LandlordControllerGetSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LandlordControllerGetSettingsRequest();
    $request->shortName = 'ad';
    $request->token = 'natus';

    $response = $sdk->landlordController->landlordControllerGetSettings($request);

    if ($response->landlordSettingsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## landlordControllerGetSummaryDetails

Get the summary details for the landlord.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LandlordControllerGetSummaryDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LandlordControllerGetSummaryDetailsRequest();
    $request->shortName = 'sed';
    $request->token = 'iste';

    $response = $sdk->landlordController->landlordControllerGetSummaryDetails($request);

    if ($response->landlordSummaryModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## landlordControllerGetTenancy

Get tenancy details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LandlordControllerGetTenancyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LandlordControllerGetTenancyRequest();
    $request->shortName = 'dolor';
    $request->tenancyID = 'natus';
    $request->token = 'laboriosam';

    $response = $sdk->landlordController->landlordControllerGetTenancy($request);

    if ($response->landlordTenancyModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## landlordControllerGetTenancyAgreementReport

Generate a Tenancy Agreement Copy (PDF)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LandlordControllerGetTenancyAgreementReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LandlordControllerGetTenancyAgreementReportRequest();
    $request->shortName = 'hic';
    $request->tenancyID = 'saepe';
    $request->token = 'fuga';

    $response = $sdk->landlordController->landlordControllerGetTenancyAgreementReport($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
