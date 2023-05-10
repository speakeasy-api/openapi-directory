# employer

### Available Operations

* [deleteEmployer](#deleteemployer) - Delete an Employer
* [deleteEmployerRevision](#deleteemployerrevision) - Delete an Employer revision matching the specified revision date.
* [deleteEmployerRevisionByNumber](#deleteemployerrevisionbynumber) - Delete an Employer revision matching the specified revision number.
* [deleteEmployerSecret](#deleteemployersecret) - Deletes employer secret
* [getAllEmployerTags](#getallemployertags) - Get all employer tags
* [getEmployer](#getemployer) - Gets the employer
* [getEmployerByEffectiveDate](#getemployerbyeffectivedate) - Gets the employer at the specified effective
* [getEmployerRevisionByNumber](#getemployerrevisionbynumber) - Gets the employer by revision number
* [getEmployerRevisionSummaries](#getemployerrevisionsummaries) - Get all employer revision summaries
* [getEmployerRevisionSummaryByNumber](#getemployerrevisionsummarybynumber) - Gets the employer summary by revision number
* [getEmployerRevisions](#getemployerrevisions) - Gets the employer revisions
* [getEmployerSecret](#getemployersecret) - Get employer secret
* [getEmployerSecrets](#getemployersecrets) - Get all employer secret links
* [getEmployerSummaries](#getemployersummaries) - Get employer summaries.
* [getEmployerSummariesByEffectiveDate](#getemployersummariesbyeffectivedate) - Get employer summaries at a given effective date.
* [getEmployerSummary](#getemployersummary) - Get employer summary
* [getEmployerSummaryByEffectiveDate](#getemployersummarybyeffectivedate) - Get employer summary by effective date.
* [getEmployers](#getemployers) - Gets all employers
* [getEmployersByEffectiveDate](#getemployersbyeffectivedate) - Gets all employers at the specified effective date
* [getEmployersWithTag](#getemployerswithtag) - Get employers with tag
* [patchEmployer](#patchemployer) - Patches the employer
* [postEmployer](#postemployer) - Create a new Employer
* [postEmployerSecret](#postemployersecret) - Create a new employer secret
* [putEmployer](#putemployer) - Updates the Employer
* [putEmployerSecret](#putemployersecret) - Create a new employer secret

## deleteEmployer

Delete the specified employer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEmployerRequest();
    $request->apiVersion = 'sapiente';
    $request->authorization = 'consequuntur';
    $request->employerId = 'ratione';

    $response = $sdk->employer->deleteEmployer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEmployerRevision

Deletes the specified employer revision for the matching revision date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEmployerRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEmployerRevisionRequest();
    $request->apiVersion = 'explicabo';
    $request->authorization = 'saepe';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2021-11-30');
    $request->employerId = 'et';

    $response = $sdk->employer->deleteEmployerRevision($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEmployerRevisionByNumber

Deletes the specified employer revision for the matching revision number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEmployerRevisionByNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEmployerRevisionByNumberRequest();
    $request->apiVersion = 'esse';
    $request->authorization = 'eveniet';
    $request->employerId = 'accusamus';
    $request->revisionNumber = 'veritatis';

    $response = $sdk->employer->deleteEmployerRevisionByNumber($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEmployerSecret

Deletes an employer secret from the given resource location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEmployerSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEmployerSecretRequest();
    $request->apiVersion = 'esse';
    $request->authorization = 'quod';
    $request->employerId = 'nam';
    $request->secretId = 'vero';

    $response = $sdk->employer->deleteEmployerSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllEmployerTags

Gets all the employer tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllEmployerTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllEmployerTagsRequest();
    $request->apiVersion = 'aliquid';
    $request->authorization = 'quasi';

    $response = $sdk->employer->getAllEmployerTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployer

Get the specified employer object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployerRequest();
    $request->apiVersion = 'saepe';
    $request->authorization = 'vel';
    $request->employerId = 'harum';

    $response = $sdk->employer->getEmployer($request);

    if ($response->employer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployerByEffectiveDate

Returns the employer's state at the specified effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployerByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployerByEffectiveDateRequest();
    $request->apiVersion = 'molestiae';
    $request->authorization = 'rerum';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-05-06');
    $request->employerId = 'distinctio';

    $response = $sdk->employer->getEmployerByEffectiveDate($request);

    if ($response->employer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployerRevisionByNumber

Get the employer revision matching the specified revision number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployerRevisionByNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployerRevisionByNumberRequest();
    $request->apiVersion = 'eligendi';
    $request->authorization = 'sit';
    $request->employerId = 'culpa';
    $request->revisionNumber = 'tempore';

    $response = $sdk->employer->getEmployerRevisionByNumber($request);

    if ($response->employer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployerRevisionSummaries

Gets links to all employer revision summaries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployerRevisionSummariesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployerRevisionSummariesRequest();
    $request->apiVersion = 'adipisci';
    $request->authorization = 'cumque';
    $request->employerId = 'consequuntur';

    $response = $sdk->employer->getEmployerRevisionSummaries($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployerRevisionSummaryByNumber

Get the employer revision summary matching the specified revision number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployerRevisionSummaryByNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployerRevisionSummaryByNumberRequest();
    $request->apiVersion = 'consequatur';
    $request->authorization = 'minus';
    $request->employerId = 'quaerat';
    $request->revisionNumber = 'sapiente';

    $response = $sdk->employer->getEmployerRevisionSummaryByNumber($request);

    if ($response->employerSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployerRevisions

Gets links to all the employer revisions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployerRevisionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployerRevisionsRequest();
    $request->apiVersion = 'consectetur';
    $request->authorization = 'esse';
    $request->employerId = 'blanditiis';

    $response = $sdk->employer->getEmployerRevisions($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployerSecret

Get the public visible employer secret object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployerSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployerSecretRequest();
    $request->apiVersion = 'provident';
    $request->authorization = 'a';
    $request->employerId = 'nulla';
    $request->secretId = 'quas';

    $response = $sdk->employer->getEmployerSecret($request);

    if ($response->employerSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployerSecrets

Get all the employer secret links

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployerSecretsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployerSecretsRequest();
    $request->apiVersion = 'esse';
    $request->authorization = 'quasi';
    $request->employerId = 'a';

    $response = $sdk->employer->getEmployerSecrets($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployerSummaries

Get links to all employer summaries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployerSummariesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployerSummariesRequest();
    $request->apiVersion = 'error';
    $request->authorization = 'sint';

    $response = $sdk->employer->getEmployerSummaries($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployerSummariesByEffectiveDate

Get links to all employer summaries on specified effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployerSummariesByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployerSummariesByEffectiveDateRequest();
    $request->apiVersion = 'pariatur';
    $request->authorization = 'possimus';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-02-03');

    $response = $sdk->employer->getEmployerSummariesByEffectiveDate($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployerSummary

Gets the specified employer summary data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployerSummaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployerSummaryRequest();
    $request->apiVersion = 'asperiores';
    $request->authorization = 'facere';
    $request->employerId = 'veritatis';

    $response = $sdk->employer->getEmployerSummary($request);

    if ($response->employerSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployerSummaryByEffectiveDate

Gets the employer summary for the specified effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployerSummaryByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployerSummaryByEffectiveDateRequest();
    $request->apiVersion = 'consequuntur';
    $request->authorization = 'quasi';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2021-09-25');
    $request->employerId = 'aliquid';

    $response = $sdk->employer->getEmployerSummaryByEffectiveDate($request);

    if ($response->employerSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployers

Gets links to all employers contained under the authorised application scope

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployersRequest();
    $request->apiVersion = 'tenetur';
    $request->authorization = 'quae';

    $response = $sdk->employer->getEmployers($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployersByEffectiveDate

Gets links to all employers contained under the authorised application scope for the specified effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployersByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployersByEffectiveDateRequest();
    $request->apiVersion = 'earum';
    $request->authorization = 'vel';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-09-28');

    $response = $sdk->employer->getEmployersByEffectiveDate($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployersWithTag

Gets the employers with the tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployersWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployersWithTagRequest();
    $request->apiVersion = 'libero';
    $request->authorization = 'illum';
    $request->tagId = 'soluta';

    $response = $sdk->employer->getEmployersWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchEmployer

Patches the specified employer with the supplied values

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchEmployerRequest;
use \OpenAPI\OpenAPI\Models\Shared\Employer;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployer;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAutoEnrolment;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAutoEnrolmentPension;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAutoEnrolmentPrimaryAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAutoEnrolmentSecondaryAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerBankAccount;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerHmrcSettings;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerHmrcSettingsSenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerHmrcSettingsStateAidSectorEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerRuleExclusionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerTerritoryEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchEmployerRequest();
    $request->apiVersion = 'accusantium';
    $request->authorization = 'aliquam';
    $request->employer = new Employer();
    $request->employer->employer = new EmployerEmployer();
    $request->employer->employer->address = new EmployerEmployerAddress();
    $request->employer->employer->address->address1 = 'sapiente';
    $request->employer->employer->address->address2 = 'dicta';
    $request->employer->employer->address->address3 = 'ullam';
    $request->employer->employer->address->address4 = 'reprehenderit';
    $request->employer->employer->address->country = 'Guernsey';
    $request->employer->employer->address->postcode = '05184';
    $request->employer->employer->apprenticeshipLevyAllowance = 5362.75;
    $request->employer->employer->autoEnrolment = new EmployerEmployerAutoEnrolment();
    $request->employer->employer->autoEnrolment->pension = new EmployerEmployerAutoEnrolmentPension();
    $request->employer->employer->autoEnrolment->pension->atHref = 'itaque';
    $request->employer->employer->autoEnrolment->pension->atRel = 'dolorum';
    $request->employer->employer->autoEnrolment->pension->atTitle = 'architecto';
    $request->employer->employer->autoEnrolment->postponementDate = DateTime::createFromFormat('Y-m-d', '2021-02-09');
    $request->employer->employer->autoEnrolment->primaryAddress = new EmployerEmployerAutoEnrolmentPrimaryAddress();
    $request->employer->employer->autoEnrolment->primaryAddress->address1 = 'quasi';
    $request->employer->employer->autoEnrolment->primaryAddress->address2 = 'at';
    $request->employer->employer->autoEnrolment->primaryAddress->address3 = 'et';
    $request->employer->employer->autoEnrolment->primaryAddress->address4 = 'voluptate';
    $request->employer->employer->autoEnrolment->primaryAddress->country = 'Austria';
    $request->employer->employer->autoEnrolment->primaryAddress->postcode = '02268';
    $request->employer->employer->autoEnrolment->primaryEmail = 'accusantium';
    $request->employer->employer->autoEnrolment->primaryFirstName = 'rem';
    $request->employer->employer->autoEnrolment->primaryJobTitle = 'aut';
    $request->employer->employer->autoEnrolment->primaryLastName = 'laudantium';
    $request->employer->employer->autoEnrolment->primaryTelephone = 'eum';
    $request->employer->employer->autoEnrolment->reEnrolmentDayOffset = 649832;
    $request->employer->employer->autoEnrolment->reEnrolmentMonthOffset = 68074;
    $request->employer->employer->autoEnrolment->recentOptOutReEnrolmentExcluded = false;
    $request->employer->employer->autoEnrolment->secondaryAddress = new EmployerEmployerAutoEnrolmentSecondaryAddress();
    $request->employer->employer->autoEnrolment->secondaryAddress->address1 = 'corrupti';
    $request->employer->employer->autoEnrolment->secondaryAddress->address2 = 'non';
    $request->employer->employer->autoEnrolment->secondaryAddress->address3 = 'voluptatem';
    $request->employer->employer->autoEnrolment->secondaryAddress->address4 = 'dolor';
    $request->employer->employer->autoEnrolment->secondaryAddress->country = 'Moldova';
    $request->employer->employer->autoEnrolment->secondaryAddress->postcode = '71304';
    $request->employer->employer->autoEnrolment->secondaryEmail = 'dicta';
    $request->employer->employer->autoEnrolment->secondaryFirstName = 'maiores';
    $request->employer->employer->autoEnrolment->secondaryJobTitle = 'natus';
    $request->employer->employer->autoEnrolment->secondaryLastName = 'velit';
    $request->employer->employer->autoEnrolment->secondaryTelephone = 'voluptatibus';
    $request->employer->employer->autoEnrolment->stagingDate = DateTime::createFromFormat('Y-m-d', '2022-01-04');
    $request->employer->employer->bacsServiceUserNumber = 'aperiam';
    $request->employer->employer->bankAccount = new EmployerEmployerBankAccount();
    $request->employer->employer->bankAccount->accountName = 'ea';
    $request->employer->employer->bankAccount->accountNumber = 'quaerat';
    $request->employer->employer->bankAccount->branchName = 'consequuntur';
    $request->employer->employer->bankAccount->reference = 'repellendus';
    $request->employer->employer->bankAccount->sortCode = 'officia';
    $request->employer->employer->calculateApprenticeshipLevy = false;
    $request->employer->employer->claimEmploymentAllowance = false;
    $request->employer->employer->claimSmallEmployerRelief = false;
    $request->employer->employer->effectiveDate = DateTime::createFromFormat('Y-m-d', '2021-07-13');
    $request->employer->employer->hmrcSettings = new EmployerEmployerHmrcSettings();
    $request->employer->employer->hmrcSettings->accountingOfficeRef = 'officia';
    $request->employer->employer->hmrcSettings->cotaxRef = 'asperiores';
    $request->employer->employer->hmrcSettings->contactEmail = 'nemo';
    $request->employer->employer->hmrcSettings->contactFax = 'quae';
    $request->employer->employer->hmrcSettings->contactFirstName = 'quaerat';
    $request->employer->employer->hmrcSettings->contactLastName = 'porro';
    $request->employer->employer->hmrcSettings->contactTelephone = 'quod';
    $request->employer->employer->hmrcSettings->employmentAllowanceOverride = 2883.98;
    $request->employer->employer->hmrcSettings->password = 'ab';
    $request->employer->employer->hmrcSettings->sautr = 'adipisci';
    $request->employer->employer->hmrcSettings->sender = EmployerEmployerHmrcSettingsSenderEnum::TRUST;
    $request->employer->employer->hmrcSettings->senderId = 'id';
    $request->employer->employer->hmrcSettings->stateAidSector = EmployerEmployerHmrcSettingsStateAidSectorEnum::FISHERIES_AQUACULTURE;
    $request->employer->employer->hmrcSettings->taxOfficeNumber = 'velit';
    $request->employer->employer->hmrcSettings->taxOfficeReference = 'culpa';
    $request->employer->employer->metaData = [
        'recusandae' => 'totam',
        'fugiat' => 'vel',
        'ducimus' => 'quos',
    ];
    $request->employer->employer->name = 'Clara Senger';
    $request->employer->employer->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2022-07-21');
    $request->employer->employer->region = EmployerEmployerRegionEnum::ENGLAND;
    $request->employer->employer->revision = 968904;
    $request->employer->employer->ruleExclusions = EmployerEmployerRuleExclusionsEnum::TAX_CODE_REGION_CHANGE_RULE;
    $request->employer->employer->territory = EmployerEmployerTerritoryEnum::UNITED_KINGDOM;
    $request->employerId = 'nemo';

    $response = $sdk->employer->patchEmployer($request);

    if ($response->employer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEmployer

Create a new employer object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostEmployerRequest;
use \OpenAPI\OpenAPI\Models\Shared\Employer;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployer;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAutoEnrolment;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAutoEnrolmentPension;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAutoEnrolmentPrimaryAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAutoEnrolmentSecondaryAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerBankAccount;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerHmrcSettings;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerHmrcSettingsSenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerHmrcSettingsStateAidSectorEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerRuleExclusionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerTerritoryEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostEmployerRequest();
    $request->apiVersion = 'recusandae';
    $request->authorization = 'aliquid';
    $request->employer = new Employer();
    $request->employer->employer = new EmployerEmployer();
    $request->employer->employer->address = new EmployerEmployerAddress();
    $request->employer->employer->address->address1 = 'aperiam';
    $request->employer->employer->address->address2 = 'cum';
    $request->employer->employer->address->address3 = 'consectetur';
    $request->employer->employer->address->address4 = 'in';
    $request->employer->employer->address->country = 'Guam';
    $request->employer->employer->address->postcode = '82939-6982';
    $request->employer->employer->apprenticeshipLevyAllowance = 1210.59;
    $request->employer->employer->autoEnrolment = new EmployerEmployerAutoEnrolment();
    $request->employer->employer->autoEnrolment->pension = new EmployerEmployerAutoEnrolmentPension();
    $request->employer->employer->autoEnrolment->pension->atHref = 'asperiores';
    $request->employer->employer->autoEnrolment->pension->atRel = 'adipisci';
    $request->employer->employer->autoEnrolment->pension->atTitle = 'non';
    $request->employer->employer->autoEnrolment->postponementDate = DateTime::createFromFormat('Y-m-d', '2022-11-23');
    $request->employer->employer->autoEnrolment->primaryAddress = new EmployerEmployerAutoEnrolmentPrimaryAddress();
    $request->employer->employer->autoEnrolment->primaryAddress->address1 = 'dignissimos';
    $request->employer->employer->autoEnrolment->primaryAddress->address2 = 'a';
    $request->employer->employer->autoEnrolment->primaryAddress->address3 = 'debitis';
    $request->employer->employer->autoEnrolment->primaryAddress->address4 = 'consectetur';
    $request->employer->employer->autoEnrolment->primaryAddress->country = 'Guernsey';
    $request->employer->employer->autoEnrolment->primaryAddress->postcode = '30971-8621';
    $request->employer->employer->autoEnrolment->primaryEmail = 'voluptas';
    $request->employer->employer->autoEnrolment->primaryFirstName = 'voluptas';
    $request->employer->employer->autoEnrolment->primaryJobTitle = 'voluptas';
    $request->employer->employer->autoEnrolment->primaryLastName = 'minima';
    $request->employer->employer->autoEnrolment->primaryTelephone = 'nobis';
    $request->employer->employer->autoEnrolment->reEnrolmentDayOffset = 680116;
    $request->employer->employer->autoEnrolment->reEnrolmentMonthOffset = 237807;
    $request->employer->employer->autoEnrolment->recentOptOutReEnrolmentExcluded = false;
    $request->employer->employer->autoEnrolment->secondaryAddress = new EmployerEmployerAutoEnrolmentSecondaryAddress();
    $request->employer->employer->autoEnrolment->secondaryAddress->address1 = 'minus';
    $request->employer->employer->autoEnrolment->secondaryAddress->address2 = 'dolores';
    $request->employer->employer->autoEnrolment->secondaryAddress->address3 = 'blanditiis';
    $request->employer->employer->autoEnrolment->secondaryAddress->address4 = 'in';
    $request->employer->employer->autoEnrolment->secondaryAddress->country = 'French Guiana';
    $request->employer->employer->autoEnrolment->secondaryAddress->postcode = '88327';
    $request->employer->employer->autoEnrolment->secondaryEmail = 'blanditiis';
    $request->employer->employer->autoEnrolment->secondaryFirstName = 'quas';
    $request->employer->employer->autoEnrolment->secondaryJobTitle = 'hic';
    $request->employer->employer->autoEnrolment->secondaryLastName = 'nesciunt';
    $request->employer->employer->autoEnrolment->secondaryTelephone = 'culpa';
    $request->employer->employer->autoEnrolment->stagingDate = DateTime::createFromFormat('Y-m-d', '2021-04-07');
    $request->employer->employer->bacsServiceUserNumber = 'totam';
    $request->employer->employer->bankAccount = new EmployerEmployerBankAccount();
    $request->employer->employer->bankAccount->accountName = 'hic';
    $request->employer->employer->bankAccount->accountNumber = 'exercitationem';
    $request->employer->employer->bankAccount->branchName = 'nobis';
    $request->employer->employer->bankAccount->reference = 'sit';
    $request->employer->employer->bankAccount->sortCode = 'rerum';
    $request->employer->employer->calculateApprenticeshipLevy = false;
    $request->employer->employer->claimEmploymentAllowance = false;
    $request->employer->employer->claimSmallEmployerRelief = false;
    $request->employer->employer->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-01-12');
    $request->employer->employer->hmrcSettings = new EmployerEmployerHmrcSettings();
    $request->employer->employer->hmrcSettings->accountingOfficeRef = 'explicabo';
    $request->employer->employer->hmrcSettings->cotaxRef = 'asperiores';
    $request->employer->employer->hmrcSettings->contactEmail = 'facilis';
    $request->employer->employer->hmrcSettings->contactFax = 'voluptate';
    $request->employer->employer->hmrcSettings->contactFirstName = 'expedita';
    $request->employer->employer->hmrcSettings->contactLastName = 'ab';
    $request->employer->employer->hmrcSettings->contactTelephone = 'iste';
    $request->employer->employer->hmrcSettings->employmentAllowanceOverride = 2927.94;
    $request->employer->employer->hmrcSettings->password = 'laborum';
    $request->employer->employer->hmrcSettings->sautr = 'sed';
    $request->employer->employer->hmrcSettings->sender = EmployerEmployerHmrcSettingsSenderEnum::BUREAU;
    $request->employer->employer->hmrcSettings->senderId = 'commodi';
    $request->employer->employer->hmrcSettings->stateAidSector = EmployerEmployerHmrcSettingsStateAidSectorEnum::INDUSTRIAL;
    $request->employer->employer->hmrcSettings->taxOfficeNumber = 'explicabo';
    $request->employer->employer->hmrcSettings->taxOfficeReference = 'voluptas';
    $request->employer->employer->metaData = [
        'architecto' => 'suscipit',
        'sapiente' => 'debitis',
        'illo' => 'reiciendis',
    ];
    $request->employer->employer->name = 'Naomi Wuckert';
    $request->employer->employer->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2022-06-26');
    $request->employer->employer->region = EmployerEmployerRegionEnum::WALES;
    $request->employer->employer->revision = 215529;
    $request->employer->employer->ruleExclusions = EmployerEmployerRuleExclusionsEnum::NI_END_CONTRACTED_OUT_TRANSFER_RULE;
    $request->employer->employer->territory = EmployerEmployerTerritoryEnum::UNITED_KINGDOM;

    $response = $sdk->employer->postEmployer($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEmployerSecret

Create new employer secret using auto generated resource location key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostEmployerSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostEmployerSecretRequest();
    $request->apiVersion = 'occaecati';
    $request->authorization = 'quos';
    $request->employerId = 'voluptatibus';

    $response = $sdk->employer->postEmployerSecret($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEmployer

Updates the existing specified employer object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutEmployerRequest;
use \OpenAPI\OpenAPI\Models\Shared\Employer;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployer;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAutoEnrolment;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAutoEnrolmentPension;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAutoEnrolmentPrimaryAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerAutoEnrolmentSecondaryAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerBankAccount;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerHmrcSettings;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerHmrcSettingsSenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerHmrcSettingsStateAidSectorEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerRuleExclusionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployerEmployerTerritoryEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEmployerRequest();
    $request->apiVersion = 'tempora';
    $request->authorization = 'tempora';
    $request->employer = new Employer();
    $request->employer->employer = new EmployerEmployer();
    $request->employer->employer->address = new EmployerEmployerAddress();
    $request->employer->employer->address->address1 = 'voluptate';
    $request->employer->employer->address->address2 = 'reiciendis';
    $request->employer->employer->address->address3 = 'ex';
    $request->employer->employer->address->address4 = 'sit';
    $request->employer->employer->address->country = 'Ecuador';
    $request->employer->employer->address->postcode = '57323-8507';
    $request->employer->employer->apprenticeshipLevyAllowance = 6256.37;
    $request->employer->employer->autoEnrolment = new EmployerEmployerAutoEnrolment();
    $request->employer->employer->autoEnrolment->pension = new EmployerEmployerAutoEnrolmentPension();
    $request->employer->employer->autoEnrolment->pension->atHref = 'veniam';
    $request->employer->employer->autoEnrolment->pension->atRel = 'minima';
    $request->employer->employer->autoEnrolment->pension->atTitle = 'recusandae';
    $request->employer->employer->autoEnrolment->postponementDate = DateTime::createFromFormat('Y-m-d', '2020-05-31');
    $request->employer->employer->autoEnrolment->primaryAddress = new EmployerEmployerAutoEnrolmentPrimaryAddress();
    $request->employer->employer->autoEnrolment->primaryAddress->address1 = 'magni';
    $request->employer->employer->autoEnrolment->primaryAddress->address2 = 'aperiam';
    $request->employer->employer->autoEnrolment->primaryAddress->address3 = 'saepe';
    $request->employer->employer->autoEnrolment->primaryAddress->address4 = 'numquam';
    $request->employer->employer->autoEnrolment->primaryAddress->country = 'Gibraltar';
    $request->employer->employer->autoEnrolment->primaryAddress->postcode = '81535';
    $request->employer->employer->autoEnrolment->primaryEmail = 'cum';
    $request->employer->employer->autoEnrolment->primaryFirstName = 'laboriosam';
    $request->employer->employer->autoEnrolment->primaryJobTitle = 'dolorum';
    $request->employer->employer->autoEnrolment->primaryLastName = 'voluptatum';
    $request->employer->employer->autoEnrolment->primaryTelephone = 'error';
    $request->employer->employer->autoEnrolment->reEnrolmentDayOffset = 944708;
    $request->employer->employer->autoEnrolment->reEnrolmentMonthOffset = 710529;
    $request->employer->employer->autoEnrolment->recentOptOutReEnrolmentExcluded = false;
    $request->employer->employer->autoEnrolment->secondaryAddress = new EmployerEmployerAutoEnrolmentSecondaryAddress();
    $request->employer->employer->autoEnrolment->secondaryAddress->address1 = 'debitis';
    $request->employer->employer->autoEnrolment->secondaryAddress->address2 = 'neque';
    $request->employer->employer->autoEnrolment->secondaryAddress->address3 = 'dolorum';
    $request->employer->employer->autoEnrolment->secondaryAddress->address4 = 'nostrum';
    $request->employer->employer->autoEnrolment->secondaryAddress->country = 'New Zealand';
    $request->employer->employer->autoEnrolment->secondaryAddress->postcode = '58251-2806';
    $request->employer->employer->autoEnrolment->secondaryEmail = 'expedita';
    $request->employer->employer->autoEnrolment->secondaryFirstName = 'magnam';
    $request->employer->employer->autoEnrolment->secondaryJobTitle = 'consequatur';
    $request->employer->employer->autoEnrolment->secondaryLastName = 'esse';
    $request->employer->employer->autoEnrolment->secondaryTelephone = 'ipsam';
    $request->employer->employer->autoEnrolment->stagingDate = DateTime::createFromFormat('Y-m-d', '2022-06-21');
    $request->employer->employer->bacsServiceUserNumber = 'quas';
    $request->employer->employer->bankAccount = new EmployerEmployerBankAccount();
    $request->employer->employer->bankAccount->accountName = 'repudiandae';
    $request->employer->employer->bankAccount->accountNumber = 'corporis';
    $request->employer->employer->bankAccount->branchName = 'et';
    $request->employer->employer->bankAccount->reference = 'blanditiis';
    $request->employer->employer->bankAccount->sortCode = 'ex';
    $request->employer->employer->calculateApprenticeshipLevy = false;
    $request->employer->employer->claimEmploymentAllowance = false;
    $request->employer->employer->claimSmallEmployerRelief = false;
    $request->employer->employer->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-12-23');
    $request->employer->employer->hmrcSettings = new EmployerEmployerHmrcSettings();
    $request->employer->employer->hmrcSettings->accountingOfficeRef = 'vel';
    $request->employer->employer->hmrcSettings->cotaxRef = 'nostrum';
    $request->employer->employer->hmrcSettings->contactEmail = 'saepe';
    $request->employer->employer->hmrcSettings->contactFax = 'error';
    $request->employer->employer->hmrcSettings->contactFirstName = 'consequatur';
    $request->employer->employer->hmrcSettings->contactLastName = 'incidunt';
    $request->employer->employer->hmrcSettings->contactTelephone = 'reiciendis';
    $request->employer->employer->hmrcSettings->employmentAllowanceOverride = 2097.5;
    $request->employer->employer->hmrcSettings->password = 'harum';
    $request->employer->employer->hmrcSettings->sautr = 'dicta';
    $request->employer->employer->hmrcSettings->sender = EmployerEmployerHmrcSettingsSenderEnum::EMPLOYER;
    $request->employer->employer->hmrcSettings->senderId = 'occaecati';
    $request->employer->employer->hmrcSettings->stateAidSector = EmployerEmployerHmrcSettingsStateAidSectorEnum::FISHERIES_AQUACULTURE;
    $request->employer->employer->hmrcSettings->taxOfficeNumber = 'quidem';
    $request->employer->employer->hmrcSettings->taxOfficeReference = 'atque';
    $request->employer->employer->metaData = [
        'nam' => 'tenetur',
        'laboriosam' => 'alias',
        'amet' => 'deserunt',
    ];
    $request->employer->employer->name = 'Lindsey Witting';
    $request->employer->employer->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2020-04-04');
    $request->employer->employer->region = EmployerEmployerRegionEnum::NOT_SET;
    $request->employer->employer->revision = 667285;
    $request->employer->employer->ruleExclusions = EmployerEmployerRuleExclusionsEnum::P45_YTD_TAX_RULE;
    $request->employer->employer->territory = EmployerEmployerTerritoryEnum::UNITED_KINGDOM;
    $request->employerId = 'reprehenderit';

    $response = $sdk->employer->putEmployer($request);

    if ($response->employer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEmployerSecret

Create / update an employer secret at the given resource location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutEmployerSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEmployerSecretRequest();
    $request->apiVersion = 'facere';
    $request->authorization = 'fuga';
    $request->employerId = 'praesentium';
    $request->secretId = 'mollitia';

    $response = $sdk->employer->putEmployerSecret($request);

    if ($response->employerSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
