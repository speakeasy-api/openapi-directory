# subContractor

### Available Operations

* [deleteSubContractor](#deletesubcontractor) - Delete an sub contractor
* [deleteSubContractorRevision](#deletesubcontractorrevision) - Delete an sub contractor revision matching the specified revision date.
* [deleteSubContractorRevisionByNumber](#deletesubcontractorrevisionbynumber) - Delete an SubContractor revision matching the specified revision number.
* [getSubContractorByEffectiveDate](#getsubcontractorbyeffectivedate) - Get sub contractor by effective date.
* [getSubContractorFromEmployer](#getsubcontractorfromemployer) - Get sub contractor from employer
* [getSubContractorRevisionByNumber](#getsubcontractorrevisionbynumber) - Gets the sub contractor by revision number
* [getSubContractorRevisions](#getsubcontractorrevisions) - Get all sub contractor revisions
* [getSubContractorsByEffectiveDate](#getsubcontractorsbyeffectivedate) - Get sub contractors from employer at a given effective date.
* [getSubContractorsFromEmployer](#getsubcontractorsfromemployer) - Get sub contractors from employer.
* [patchSubContractor](#patchsubcontractor) - Patches the sub contractor
* [postSubContractorIntoEmployer](#postsubcontractorintoemployer) - Create a new sub contractor
* [putSubContractorIntoEmployer](#putsubcontractorintoemployer) - Updates the sub contractor

## deleteSubContractor

Delete the specified sub contractor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubContractorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubContractorRequest();
    $request->apiVersion = 'velit';
    $request->authorization = 'magnam';
    $request->employerId = 'dignissimos';
    $request->subContractorId = 'laboriosam';

    $response = $sdk->subContractor->deleteSubContractor($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubContractorRevision

Deletes the specified sub contractor revision for the matching revision date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubContractorRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubContractorRevisionRequest();
    $request->apiVersion = 'sed';
    $request->authorization = 'odio';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2021-10-28');
    $request->employerId = 'cum';
    $request->subContractorId = 'doloribus';

    $response = $sdk->subContractor->deleteSubContractorRevision($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubContractorRevisionByNumber

Deletes the specified sub contractor revision for the matching revision number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubContractorRevisionByNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubContractorRevisionByNumberRequest();
    $request->apiVersion = 'facilis';
    $request->authorization = 'quidem';
    $request->employerId = 'itaque';
    $request->revisionNumber = 'laboriosam';
    $request->subContractorId = 'unde';

    $response = $sdk->subContractor->deleteSubContractorRevisionByNumber($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubContractorByEffectiveDate

Returns the sub contractor's state at the specified effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubContractorByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubContractorByEffectiveDateRequest();
    $request->apiVersion = 'modi';
    $request->authorization = 'perspiciatis';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2020-10-16');
    $request->employerId = 'aspernatur';
    $request->subContractorId = 'libero';

    $response = $sdk->subContractor->getSubContractorByEffectiveDate($request);

    if ($response->subContractor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubContractorFromEmployer

Gets the specified sub contractor from employer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubContractorFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubContractorFromEmployerRequest();
    $request->apiVersion = 'nam';
    $request->authorization = 'incidunt';
    $request->employerId = 'recusandae';
    $request->subContractorId = 'quod';

    $response = $sdk->subContractor->getSubContractorFromEmployer($request);

    if ($response->subContractor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubContractorRevisionByNumber

Get the sub contractor revision matching the specified revision number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubContractorRevisionByNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubContractorRevisionByNumberRequest();
    $request->apiVersion = 'id';
    $request->authorization = 'saepe';
    $request->employerId = 'autem';
    $request->revisionNumber = 'quo';
    $request->subContractorId = 'nesciunt';

    $response = $sdk->subContractor->getSubContractorRevisionByNumber($request);

    if ($response->subContractor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubContractorRevisions

Gets links to all the sub contractor revisions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubContractorRevisionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubContractorRevisionsRequest();
    $request->apiVersion = 'illum';
    $request->authorization = 'nemo';
    $request->employerId = 'illum';
    $request->subContractorId = 'facilis';

    $response = $sdk->subContractor->getSubContractorRevisions($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubContractorsByEffectiveDate

Get links to all sub contractors for the employer on specified effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubContractorsByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubContractorsByEffectiveDateRequest();
    $request->apiVersion = 'non';
    $request->authorization = 'mollitia';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2020-03-20');
    $request->employerId = 'distinctio';

    $response = $sdk->subContractor->getSubContractorsByEffectiveDate($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubContractorsFromEmployer

Get links to all sub contractors for the specified employer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubContractorsFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubContractorsFromEmployerRequest();
    $request->apiVersion = 'pariatur';
    $request->authorization = 'ad';
    $request->employerId = 'facere';

    $response = $sdk->subContractor->getSubContractorsFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchSubContractor

Patches the specified sub contractor with the supplied values

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchSubContractorRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubContractor;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractor;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorAddress;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorBankAccount;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorBusinessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorPayFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorPaymentMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorTaxationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorTerritoryEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchSubContractorRequest();
    $request->apiVersion = 'laborum';
    $request->authorization = 'eveniet';
    $request->employerId = 'laborum';
    $request->subContractor = new SubContractor();
    $request->subContractor->subContractor = new SubContractorSubContractor();
    $request->subContractor->subContractor->address = new SubContractorSubContractorAddress();
    $request->subContractor->subContractor->address->address1 = 'incidunt';
    $request->subContractor->subContractor->address->address2 = 'maxime';
    $request->subContractor->subContractor->address->address3 = 'ipsam';
    $request->subContractor->subContractor->address->address4 = 'alias';
    $request->subContractor->subContractor->address->country = 'Heard Island and McDonald Islands';
    $request->subContractor->subContractor->address->postcode = '56652-7013';
    $request->subContractor->subContractor->bankAccount = new SubContractorSubContractorBankAccount();
    $request->subContractor->subContractor->bankAccount->accountName = 'magnam';
    $request->subContractor->subContractor->bankAccount->accountNumber = 'quaerat';
    $request->subContractor->subContractor->bankAccount->branchName = 'eligendi';
    $request->subContractor->subContractor->bankAccount->reference = 'hic';
    $request->subContractor->subContractor->bankAccount->sortCode = 'nostrum';
    $request->subContractor->subContractor->businessType = SubContractorSubContractorBusinessTypeEnum::TRUST;
    $request->subContractor->subContractor->companyName = 'unde';
    $request->subContractor->subContractor->companyRegistrationNumber = 'nulla';
    $request->subContractor->subContractor->deactivated = false;
    $request->subContractor->subContractor->effectiveDate = DateTime::createFromFormat('Y-m-d', '2021-09-11');
    $request->subContractor->subContractor->firstName = 'Elias';
    $request->subContractor->subContractor->initials = 'nostrum';
    $request->subContractor->subContractor->lastName = 'Koepp';
    $request->subContractor->subContractor->metaData = [
        'fuga' => 'facere',
        'impedit' => 'quasi',
        'deserunt' => 'quod',
    ];
    $request->subContractor->subContractor->middleName = 'laboriosam';
    $request->subContractor->subContractor->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2022-12-20');
    $request->subContractor->subContractor->niNumber = 'facere';
    $request->subContractor->subContractor->partnershipName = 'necessitatibus';
    $request->subContractor->subContractor->partnershipUniqueTaxReference = 'maxime';
    $request->subContractor->subContractor->payFrequency = SubContractorSubContractorPayFrequencyEnum::MONTHLY;
    $request->subContractor->subContractor->paymentMethod = SubContractorSubContractorPaymentMethodEnum::NOT_SET;
    $request->subContractor->subContractor->region = SubContractorSubContractorRegionEnum::NOT_SET;
    $request->subContractor->subContractor->revision = 627161;
    $request->subContractor->subContractor->taxationStatus = SubContractorSubContractorTaxationStatusEnum::GROSS;
    $request->subContractor->subContractor->telephone = 'blanditiis';
    $request->subContractor->subContractor->territory = SubContractorSubContractorTerritoryEnum::UNITED_KINGDOM;
    $request->subContractor->subContractor->title = 'Mr.';
    $request->subContractor->subContractor->tradingName = 'magni';
    $request->subContractor->subContractor->uniqueTaxReference = 'officiis';
    $request->subContractor->subContractor->vatRegistered = false;
    $request->subContractor->subContractor->vatRegistrationNumber = 'sed';
    $request->subContractor->subContractor->verificationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-06T06:44:59.753Z');
    $request->subContractor->subContractor->verificationNumber = 'ipsa';
    $request->subContractor->subContractor->worksNumber = 'excepturi';
    $request->subContractorId = 'a';

    $response = $sdk->subContractor->patchSubContractor($request);

    if ($response->subContractor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSubContractorIntoEmployer

Create a new sub contractor object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostSubContractorIntoEmployerRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubContractor;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractor;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorAddress;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorBankAccount;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorBusinessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorPayFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorPaymentMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorTaxationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorTerritoryEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSubContractorIntoEmployerRequest();
    $request->apiVersion = 'maiores';
    $request->authorization = 'laudantium';
    $request->employerId = 'maiores';
    $request->subContractor = new SubContractor();
    $request->subContractor->subContractor = new SubContractorSubContractor();
    $request->subContractor->subContractor->address = new SubContractorSubContractorAddress();
    $request->subContractor->subContractor->address->address1 = 'alias';
    $request->subContractor->subContractor->address->address2 = 'asperiores';
    $request->subContractor->subContractor->address->address3 = 'rem';
    $request->subContractor->subContractor->address->address4 = 'dicta';
    $request->subContractor->subContractor->address->country = 'Heard Island and McDonald Islands';
    $request->subContractor->subContractor->address->postcode = '92244-7028';
    $request->subContractor->subContractor->bankAccount = new SubContractorSubContractorBankAccount();
    $request->subContractor->subContractor->bankAccount->accountName = 'excepturi';
    $request->subContractor->subContractor->bankAccount->accountNumber = 'accusantium';
    $request->subContractor->subContractor->bankAccount->branchName = 'qui';
    $request->subContractor->subContractor->bankAccount->reference = 'impedit';
    $request->subContractor->subContractor->bankAccount->sortCode = 'beatae';
    $request->subContractor->subContractor->businessType = SubContractorSubContractorBusinessTypeEnum::COMPANY;
    $request->subContractor->subContractor->companyName = 'dicta';
    $request->subContractor->subContractor->companyRegistrationNumber = 'odit';
    $request->subContractor->subContractor->deactivated = false;
    $request->subContractor->subContractor->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-04-19');
    $request->subContractor->subContractor->firstName = 'Abigail';
    $request->subContractor->subContractor->initials = 'error';
    $request->subContractor->subContractor->lastName = 'Kassulke';
    $request->subContractor->subContractor->metaData = [
        'id' => 'laboriosam',
    ];
    $request->subContractor->subContractor->middleName = 'ex';
    $request->subContractor->subContractor->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2022-10-30');
    $request->subContractor->subContractor->niNumber = 'ullam';
    $request->subContractor->subContractor->partnershipName = 'quae';
    $request->subContractor->subContractor->partnershipUniqueTaxReference = 'similique';
    $request->subContractor->subContractor->payFrequency = SubContractorSubContractorPayFrequencyEnum::MONTHLY;
    $request->subContractor->subContractor->paymentMethod = SubContractorSubContractorPaymentMethodEnum::CHEQUE;
    $request->subContractor->subContractor->region = SubContractorSubContractorRegionEnum::NOT_SET;
    $request->subContractor->subContractor->revision = 646329;
    $request->subContractor->subContractor->taxationStatus = SubContractorSubContractorTaxationStatusEnum::GROSS;
    $request->subContractor->subContractor->telephone = 'omnis';
    $request->subContractor->subContractor->territory = SubContractorSubContractorTerritoryEnum::UNITED_KINGDOM;
    $request->subContractor->subContractor->title = 'Mr.';
    $request->subContractor->subContractor->tradingName = 'nesciunt';
    $request->subContractor->subContractor->uniqueTaxReference = 'maxime';
    $request->subContractor->subContractor->vatRegistered = false;
    $request->subContractor->subContractor->vatRegistrationNumber = 'quis';
    $request->subContractor->subContractor->verificationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-24T15:00:37.621Z');
    $request->subContractor->subContractor->verificationNumber = 'excepturi';
    $request->subContractor->subContractor->worksNumber = 'maiores';

    $response = $sdk->subContractor->postSubContractorIntoEmployer($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSubContractorIntoEmployer

Updates the existing specified sub contractor object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutSubContractorIntoEmployerRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubContractor;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractor;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorAddress;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorBankAccount;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorBusinessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorPayFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorPaymentMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorTaxationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubContractorSubContractorTerritoryEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSubContractorIntoEmployerRequest();
    $request->apiVersion = 'laudantium';
    $request->authorization = 'velit';
    $request->employerId = 'reiciendis';
    $request->subContractor = new SubContractor();
    $request->subContractor->subContractor = new SubContractorSubContractor();
    $request->subContractor->subContractor->address = new SubContractorSubContractorAddress();
    $request->subContractor->subContractor->address->address1 = 'amet';
    $request->subContractor->subContractor->address->address2 = 'nemo';
    $request->subContractor->subContractor->address->address3 = 'ipsa';
    $request->subContractor->subContractor->address->address4 = 'quisquam';
    $request->subContractor->subContractor->address->country = 'United States Minor Outlying Islands';
    $request->subContractor->subContractor->address->postcode = '43997-5017';
    $request->subContractor->subContractor->bankAccount = new SubContractorSubContractorBankAccount();
    $request->subContractor->subContractor->bankAccount->accountName = 'commodi';
    $request->subContractor->subContractor->bankAccount->accountNumber = 'eveniet';
    $request->subContractor->subContractor->bankAccount->branchName = 'porro';
    $request->subContractor->subContractor->bankAccount->reference = 'tempore';
    $request->subContractor->subContractor->bankAccount->sortCode = 'quidem';
    $request->subContractor->subContractor->businessType = SubContractorSubContractorBusinessTypeEnum::COMPANY;
    $request->subContractor->subContractor->companyName = 'voluptates';
    $request->subContractor->subContractor->companyRegistrationNumber = 'fugit';
    $request->subContractor->subContractor->deactivated = false;
    $request->subContractor->subContractor->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-10-22');
    $request->subContractor->subContractor->firstName = 'Nils';
    $request->subContractor->subContractor->initials = 'asperiores';
    $request->subContractor->subContractor->lastName = 'Koelpin';
    $request->subContractor->subContractor->metaData = [
        'sint' => 'repellat',
        'a' => 'animi',
        'maiores' => 'itaque',
    ];
    $request->subContractor->subContractor->middleName = 'nulla';
    $request->subContractor->subContractor->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2022-04-13');
    $request->subContractor->subContractor->niNumber = 'velit';
    $request->subContractor->subContractor->partnershipName = 'officiis';
    $request->subContractor->subContractor->partnershipUniqueTaxReference = 'enim';
    $request->subContractor->subContractor->payFrequency = SubContractorSubContractorPayFrequencyEnum::WEEKLY;
    $request->subContractor->subContractor->paymentMethod = SubContractorSubContractorPaymentMethodEnum::OTHER;
    $request->subContractor->subContractor->region = SubContractorSubContractorRegionEnum::ENGLAND;
    $request->subContractor->subContractor->revision = 922094;
    $request->subContractor->subContractor->taxationStatus = SubContractorSubContractorTaxationStatusEnum::UNMATCHED;
    $request->subContractor->subContractor->telephone = 'officia';
    $request->subContractor->subContractor->territory = SubContractorSubContractorTerritoryEnum::UNITED_KINGDOM;
    $request->subContractor->subContractor->title = 'Miss';
    $request->subContractor->subContractor->tradingName = 'quasi';
    $request->subContractor->subContractor->uniqueTaxReference = 'blanditiis';
    $request->subContractor->subContractor->vatRegistered = false;
    $request->subContractor->subContractor->vatRegistrationNumber = 'eius';
    $request->subContractor->subContractor->verificationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-20T04:00:27.717Z');
    $request->subContractor->subContractor->verificationNumber = 'nobis';
    $request->subContractor->subContractor->worksNumber = 'natus';
    $request->subContractorId = 'minus';

    $response = $sdk->subContractor->putSubContractorIntoEmployer($request);

    if ($response->subContractor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
