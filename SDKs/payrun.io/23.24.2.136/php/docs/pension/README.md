# pension

### Available Operations

* [deletePension](#deletepension) - Delete a Pension
* [deletePensionRevision](#deletepensionrevision) - Delete an Pension revision matching the specified revision date.
* [deletePensionRevisionByNumber](#deletepensionrevisionbynumber) - Delete an Pension revision matching the specified revision number.
* [getPensionByEffectiveDate](#getpensionbyeffectivedate) - Get pension by effective date.
* [getPensionFromEmployer](#getpensionfromemployer) - Get pension from employer
* [getPensionRevisionByNumber](#getpensionrevisionbynumber) - Gets the pension by revision number
* [getPensionRevisions](#getpensionrevisions) - Get all pension revisions
* [getPensionsByEffectiveDate](#getpensionsbyeffectivedate) - Get pensions from employer at a given effective date.
* [getPensionsFromEmployer](#getpensionsfromemployer) - Get pensions from employer.
* [patchPension](#patchpension) - Patches the pension
* [postPensionIntoEmployer](#postpensionintoemployer) - Create a new Pension
* [putPensionIntoEmployer](#putpensionintoemployer) - Updates the Pension

## deletePension

Delete the specified ppension

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePensionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePensionRequest();
    $request->apiVersion = 'molestias';
    $request->authorization = 'odio';
    $request->employerId = 'eaque';
    $request->pensionId = 'saepe';

    $response = $sdk->pension->deletePension($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePensionRevision

Deletes the specified pension revision for the matching revision date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePensionRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePensionRevisionRequest();
    $request->apiVersion = 'architecto';
    $request->authorization = 'quos';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2021-05-07');
    $request->employerId = 'tempore';
    $request->pensionId = 'libero';

    $response = $sdk->pension->deletePensionRevision($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePensionRevisionByNumber

Deletes the specified pension revision for the matching revision number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePensionRevisionByNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePensionRevisionByNumberRequest();
    $request->apiVersion = 'velit';
    $request->authorization = 'doloremque';
    $request->employerId = 'delectus';
    $request->pensionId = 'impedit';
    $request->revisionNumber = 'cum';

    $response = $sdk->pension->deletePensionRevisionByNumber($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPensionByEffectiveDate

Returns the penion's state at the specified effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPensionByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPensionByEffectiveDateRequest();
    $request->apiVersion = 'ipsum';
    $request->authorization = 'adipisci';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2021-01-25');
    $request->employerId = 'doloremque';
    $request->pensionId = 'quis';

    $response = $sdk->pension->getPensionByEffectiveDate($request);

    if ($response->pension !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPensionFromEmployer

Gets the specified pension from employer by pension code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPensionFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPensionFromEmployerRequest();
    $request->apiVersion = 'veniam';
    $request->authorization = 'libero';
    $request->employerId = 'architecto';
    $request->pensionId = 'cupiditate';

    $response = $sdk->pension->getPensionFromEmployer($request);

    if ($response->pension !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPensionRevisionByNumber

Get the pension revision matching the specified revision number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPensionRevisionByNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPensionRevisionByNumberRequest();
    $request->apiVersion = 'molestiae';
    $request->authorization = 'eligendi';
    $request->employerId = 'possimus';
    $request->pensionId = 'non';
    $request->revisionNumber = 'magnam';

    $response = $sdk->pension->getPensionRevisionByNumber($request);

    if ($response->pension !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPensionRevisions

Returns links to all revisions of the pension

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPensionRevisionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPensionRevisionsRequest();
    $request->apiVersion = 'itaque';
    $request->authorization = 'sed';
    $request->employerId = 'asperiores';
    $request->pensionId = 'veniam';

    $response = $sdk->pension->getPensionRevisions($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPensionsByEffectiveDate

Get links to all pensions for the employer on specified effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPensionsByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPensionsByEffectiveDateRequest();
    $request->apiVersion = 'consequuntur';
    $request->authorization = 'facere';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-09-20');
    $request->employerId = 'pariatur';

    $response = $sdk->pension->getPensionsByEffectiveDate($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPensionsFromEmployer

Get links to all pensions for the specified employer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPensionsFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPensionsFromEmployerRequest();
    $request->apiVersion = 'amet';
    $request->authorization = 'exercitationem';
    $request->employerId = 'ab';

    $response = $sdk->pension->getPensionsFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchPension

Patches the specified pension with the supplied values

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchPensionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Pension;
use \OpenAPI\OpenAPI\Models\Shared\PensionPension;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionCertificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionPensionablePayCodes;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionProRataMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionQualifyingPayCodes;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionRasRoundingOverrideEnum;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionRoundingOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionTaxationMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchPensionRequest();
    $request->apiVersion = 'velit';
    $request->authorization = 'facilis';
    $request->employerId = 'tempore';
    $request->pension = new Pension();
    $request->pension->pension = new PensionPension();
    $request->pension->pension->aeCompatible = false;
    $request->pension->pension->certification = PensionPensionCertificationEnum::SET1;
    $request->pension->pension->code = 'voluptatibus';
    $request->pension->pension->contributionDeductionDay = 310840;
    $request->pension->pension->effectiveDate = DateTime::createFromFormat('Y-m-d', '2021-07-25');
    $request->pension->pension->employeeContributionCash = 3924.3;
    $request->pension->pension->employeeContributionPercent = 3359.77;
    $request->pension->pension->employerContributionCash = 3919.33;
    $request->pension->pension->employerContributionPercent = 7277.71;
    $request->pension->pension->employerNiSaving = false;
    $request->pension->pension->employerNiSavingPercentage = 7945.07;
    $request->pension->pension->group = 'facere';
    $request->pension->pension->lowerThreshold = 7060.61;
    $request->pension->pension->metaData = [
        'ad' => 'voluptatibus',
    ];
    $request->pension->pension->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2022-07-07');
    $request->pension->pension->pensionablePayCodes = new PensionPensionPensionablePayCodes();
    $request->pension->pension->pensionablePayCodes->payCode = [
        'labore',
        'rerum',
        'eos',
        'reprehenderit',
    ];
    $request->pension->pension->proRataMethod = PensionPensionProRataMethodEnum::ANNUAL365_DAYS;
    $request->pension->pension->providerEmployerRef = 'neque';
    $request->pension->pension->providerName = 'iusto';
    $request->pension->pension->qualifyingPayCodes = new PensionPensionQualifyingPayCodes();
    $request->pension->pension->qualifyingPayCodes->payCode = [
        'rem',
        'eligendi',
        'fugiat',
    ];
    $request->pension->pension->rasRoundingOverride = PensionPensionRasRoundingOverrideEnum::FIVE_UP;
    $request->pension->pension->revision = 889448;
    $request->pension->pension->roundingOption = PensionPensionRoundingOptionEnum::BANKERS;
    $request->pension->pension->salarySacrifice = false;
    $request->pension->pension->schemeName = 'dolor';
    $request->pension->pension->subGroup = 'dicta';
    $request->pension->pension->taxationMethod = PensionPensionTaxationMethodEnum::RELIEF_AT_SOURCE;
    $request->pension->pension->upperThreshold = 7847.31;
    $request->pension->pension->useAEThresholds = false;
    $request->pensionId = 'vitae';

    $response = $sdk->pension->patchPension($request);

    if ($response->pension !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPensionIntoEmployer

Create a new pension object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPensionIntoEmployerRequest;
use \OpenAPI\OpenAPI\Models\Shared\Pension;
use \OpenAPI\OpenAPI\Models\Shared\PensionPension;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionCertificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionPensionablePayCodes;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionProRataMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionQualifyingPayCodes;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionRasRoundingOverrideEnum;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionRoundingOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionTaxationMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPensionIntoEmployerRequest();
    $request->apiVersion = 'dignissimos';
    $request->authorization = 'esse';
    $request->employerId = 'fugiat';
    $request->pension = new Pension();
    $request->pension->pension = new PensionPension();
    $request->pension->pension->aeCompatible = false;
    $request->pension->pension->certification = PensionPensionCertificationEnum::SET1;
    $request->pension->pension->code = 'aspernatur';
    $request->pension->pension->contributionDeductionDay = 316501;
    $request->pension->pension->effectiveDate = DateTime::createFromFormat('Y-m-d', '2021-07-21');
    $request->pension->pension->employeeContributionCash = 4912.01;
    $request->pension->pension->employeeContributionPercent = 7298.28;
    $request->pension->pension->employerContributionCash = 723.5;
    $request->pension->pension->employerContributionPercent = 691.82;
    $request->pension->pension->employerNiSaving = false;
    $request->pension->pension->employerNiSavingPercentage = 2801.14;
    $request->pension->pension->group = 'accusamus';
    $request->pension->pension->lowerThreshold = 9025.81;
    $request->pension->pension->metaData = [
        'veniam' => 'eos',
        'reiciendis' => 'earum',
        'reprehenderit' => 'praesentium',
    ];
    $request->pension->pension->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2022-01-01');
    $request->pension->pension->pensionablePayCodes = new PensionPensionPensionablePayCodes();
    $request->pension->pension->pensionablePayCodes->payCode = [
        'sequi',
        'nihil',
        'deleniti',
        'illo',
    ];
    $request->pension->pension->proRataMethod = PensionPensionProRataMethodEnum::ANNUAL365_DAYS;
    $request->pension->pension->providerEmployerRef = 'assumenda';
    $request->pension->pension->providerName = 'aliquam';
    $request->pension->pension->qualifyingPayCodes = new PensionPensionQualifyingPayCodes();
    $request->pension->pension->qualifyingPayCodes->payCode = [
        'provident',
        'laudantium',
        'repudiandae',
        'consequatur',
    ];
    $request->pension->pension->rasRoundingOverride = PensionPensionRasRoundingOverrideEnum::FLOOR;
    $request->pension->pension->revision = 136357;
    $request->pension->pension->roundingOption = PensionPensionRoundingOptionEnum::FIVE_DOWN;
    $request->pension->pension->salarySacrifice = false;
    $request->pension->pension->schemeName = 'expedita';
    $request->pension->pension->subGroup = 'quas';
    $request->pension->pension->taxationMethod = PensionPensionTaxationMethodEnum::RELIEF_AT_SOURCE;
    $request->pension->pension->upperThreshold = 9222.99;
    $request->pension->pension->useAEThresholds = false;

    $response = $sdk->pension->postPensionIntoEmployer($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPensionIntoEmployer

Updates existing or inserts the specified pension object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutPensionIntoEmployerRequest;
use \OpenAPI\OpenAPI\Models\Shared\Pension;
use \OpenAPI\OpenAPI\Models\Shared\PensionPension;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionCertificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionPensionablePayCodes;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionProRataMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionQualifyingPayCodes;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionRasRoundingOverrideEnum;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionRoundingOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PensionPensionTaxationMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPensionIntoEmployerRequest();
    $request->apiVersion = 'rerum';
    $request->authorization = 'dignissimos';
    $request->employerId = 'corporis';
    $request->pension = new Pension();
    $request->pension->pension = new PensionPension();
    $request->pension->pension->aeCompatible = false;
    $request->pension->pension->certification = PensionPensionCertificationEnum::SET3;
    $request->pension->pension->code = 'similique';
    $request->pension->pension->contributionDeductionDay = 833982;
    $request->pension->pension->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-10-14');
    $request->pension->pension->employeeContributionCash = 4138.01;
    $request->pension->pension->employeeContributionPercent = 7712.26;
    $request->pension->pension->employerContributionCash = 4150.33;
    $request->pension->pension->employerContributionPercent = 121.71;
    $request->pension->pension->employerNiSaving = false;
    $request->pension->pension->employerNiSavingPercentage = 320.55;
    $request->pension->pension->group = 'ad';
    $request->pension->pension->lowerThreshold = 609.95;
    $request->pension->pension->metaData = [
        'illum' => 'praesentium',
    ];
    $request->pension->pension->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2021-07-12');
    $request->pension->pension->pensionablePayCodes = new PensionPensionPensionablePayCodes();
    $request->pension->pension->pensionablePayCodes->payCode = [
        'quasi',
    ];
    $request->pension->pension->proRataMethod = PensionPensionProRataMethodEnum::NOT_SET;
    $request->pension->pension->providerEmployerRef = 'laudantium';
    $request->pension->pension->providerName = 'doloremque';
    $request->pension->pension->qualifyingPayCodes = new PensionPensionQualifyingPayCodes();
    $request->pension->pension->qualifyingPayCodes->payCode = [
        'iusto',
        'amet',
        'provident',
        'dolorum',
    ];
    $request->pension->pension->rasRoundingOverride = PensionPensionRasRoundingOverrideEnum::CEILING;
    $request->pension->pension->revision = 592880;
    $request->pension->pension->roundingOption = PensionPensionRoundingOptionEnum::CEILING;
    $request->pension->pension->salarySacrifice = false;
    $request->pension->pension->schemeName = 'consequatur';
    $request->pension->pension->subGroup = 'nemo';
    $request->pension->pension->taxationMethod = PensionPensionTaxationMethodEnum::NET_BASED;
    $request->pension->pension->upperThreshold = 9308.4;
    $request->pension->pension->useAEThresholds = false;
    $request->pensionId = 'facilis';

    $response = $sdk->pension->putPensionIntoEmployer($request);

    if ($response->pension !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
