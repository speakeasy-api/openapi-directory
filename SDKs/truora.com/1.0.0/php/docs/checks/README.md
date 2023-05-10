# checks

## Overview

Allows you to create and retrieve background checks. Consults multiple databases and delivers a comprehensive set of information to help assess the reliability of a person, vehicle, or company.

### Available Operations

* [getHealthDashboard](#gethealthdashboard) - Get Health Dashboard
* [createCheck](#createcheck) - Create a background check
* [getCheck](#getcheck) - Get Background Check
* [listCheckDetails](#listcheckdetails) - List Check Details
* [listChecks](#listchecks) - List Checks

## getHealthDashboard

Get the status of a database

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetHealthDashboardRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetHealthDashboardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHealthDashboardRequest();
    $request->country = 'Andorra';
    $request->unixTimestampSeconds = 'ipsam';
    $request->unixtimezoneOffsetSeconds = 'repellendus';

    $requestSecurity = new GetHealthDashboardSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->checks->getHealthDashboard($request, $requestSecurity);

    if ($response->databases !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCheck

Creates a background check and queues it to start collecting information. The full details of background checks can be retrieved with their respective Check IDs using getCheck endpoint. Keep in mind that, depending on the check type, input document, and country of a search, certain inputs are required. You should always provide as many inputs as possible in order to get the highest accuracy.

If your check type is not referenced in the following table, please reach out to find out the fields that apply for you.

| Country | Person-National | PersonForeigner | Company | Vehicle-National | Vehicle-Foreigner |
|:-------:|:---------------:|:---------------:|:-------:|:----------------:|:-----------------:|
| Chile<br>CL | national_id*<br>date_of_birth<br>phone_number | foreign_id*<br>date_of_birth*<br>phone_number<br>first_name*<br>last_name*<br>native_country* | N/A | national_id*<br>license_plate*<br>payment_date (Santiago only)<br>driver_license (Santiago only) | foreign_id*<br>first_name*<br>last_name*<br>date_of_birth*<br>native_country*<br>license_plate*<br>payment_date (Santiago only)<br>driver_license (Santiago only) |
| Colombia<br>CO | national_id*<br>date_of_birth<br>issue_date<br>phone_number | foreign_id* or PEP*<br>date_of_birth<br>phone_number<br>issue_date* | tax_id*<br>national_id | national_id*<br>date_of_birth<br>phone_number<br>license_plate*<br>owner_document_type<br>owner_document_id | foreign_id*<br>date_of_birth<br>phone_number<br>license_plate*<br>issue_date* |
| Mexico<br>MX | national_id*<br>phone_number | foreign_id* | tax_id* | license_plate*<br>national_id<br>vehicle_id<br>driver_license(Estado de Mexico only) | N/A |
| Brazil<br>BR | national_id*<br>date_of_birth*<br>region*<br>phone_number | N/A | tax_id* | license_plate* | N/A |
| Costa Rica<br>CR | national_id*<br>phone_number | foreign_id* | N/A | license_plate* | N/A |
| Ecuador<br>EC | national_id*<br>phone_number | foreign_id* | tax_id* | license_plate* | N/A |
| Peru<br>PE | national_id*<br>date_of_birth<br>phone_number | foreign_id*<br>ptp<br>date_of_birth*<br>phone_number | N/A | national_id*<br>date_of_birth<br>license_plate* | foreign_id*<br>ptp<br>date_of_birth*<br>license_plate* |
| Argentina<br>AR | national_id* | N/A | N/A | national_id* | N/A |
| International<br>ALL | name* | name* | company_name* | N/A | N/A |

(*) Required field

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCheckInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateCheckInputCountryEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateCheckInputRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateCheckInputTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCheckTruoraPriorityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCheckSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCheckRequest();
    $request->createCheckInput = new CreateCheckInput();
    $request->createCheckInput->birthCertificate = 'sapiente';
    $request->createCheckInput->companyName = 'quo';
    $request->createCheckInput->country = CreateCheckInputCountryEnum::BR;
    $request->createCheckInput->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2020-05-23');
    $request->createCheckInput->diplomaticId = 'maiores';
    $request->createCheckInput->driverLicense = 'molestiae';
    $request->createCheckInput->escrow = 'quod';
    $request->createCheckInput->firstName = 'Presley';
    $request->createCheckInput->forceCreation = false;
    $request->createCheckInput->foreignId = 'esse';
    $request->createCheckInput->issueDate = DateTime::createFromFormat('Y-m-d', '2021-06-10');
    $request->createCheckInput->lastName = 'Parisian';
    $request->createCheckInput->licensePlate = 'dicta';
    $request->createCheckInput->nationalId = 'nam';
    $request->createCheckInput->nativeCountry = 'officia';
    $request->createCheckInput->ownerDocumentId = 'occaecati';
    $request->createCheckInput->ownerDocumentType = 'fugit';
    $request->createCheckInput->passport = 'deleniti';
    $request->createCheckInput->paymentDate = DateTime::createFromFormat('Y-m-d', '2020-09-22');
    $request->createCheckInput->pep = 'totam';
    $request->createCheckInput->phoneNumber = 'beatae';
    $request->createCheckInput->professionalCard = 'commodi';
    $request->createCheckInput->ptp = 'molestiae';
    $request->createCheckInput->region = CreateCheckInputRegionEnum::ES;
    $request->createCheckInput->reportId = 'qui';
    $request->createCheckInput->stateId = 'impedit';
    $request->createCheckInput->taxId = 'cum';
    $request->createCheckInput->type = CreateCheckInputTypeEnum::VEHICLE;
    $request->createCheckInput->userAuthorized = false;
    $request->createCheckInput->vehicleId = 'ipsum';
    $request->createCheckInput->verificationCode = 'excepturi';
    $request->createCheckInput->watch = 'aspernatur';
    $request->truoraPriority = CreateCheckTruoraPriorityEnum::LOW;

    $requestSecurity = new CreateCheckSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->checks->createCheck($request, $requestSecurity);

    if ($response->checkOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCheck

Returns the results of the check that matches the ID provided, complete with a set of scores explained below.

### Scores:


- **Global Score**: Average risk associated with a person, company or vehicle, according to  the background check results. The global score considers results that are validated with the  ID number provided. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.


- **ID Score**: Average risk associated with a person according to the background check  results. The ID score considers the results that are validated with a person identity  document. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk. 


- **Homonym Score**: Average risk associated with a person according to the background check  results. The homonym score considers results that are validated against the name of a person and could not be validated with their ID number. These results might have homonyms associated with them. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.


In order to calculate these scores, a weighted average is considered with different weights allocated to each dataset. Scores can be customized using the config endpoints by assigning a weight to each dataset according to its relevance.

Keep in mind that results from the API vary depending on the country, check type and the inputs entered on check creation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCheckRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCheckSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCheckRequest();
    $request->checkId = 'ad';

    $requestSecurity = new GetCheckSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->checks->getCheck($request, $requestSecurity);

    if ($response->checkOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCheckDetails

Lists all details associated with a Check. It can be paginated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCheckDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCheckDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCheckDetailsRequest();
    $request->checkId = 'natus';
    $request->lang = 'sed';
    $request->startKey = 'iste';

    $requestSecurity = new ListCheckDetailsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->checks->listCheckDetails($request, $requestSecurity);

    if ($response->checkDetailsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listChecks

Lists the existing checks in the account or in a specified report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListChecksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListChecksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListChecksRequest();
    $request->reportId = 'dolor';
    $request->startKey = 'natus';

    $requestSecurity = new ListChecksSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->checks->listChecks($request, $requestSecurity);

    if ($response->checksOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
