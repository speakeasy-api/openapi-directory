# patient

## Overview

A patient is the core user of Fitbit Plus.

### Available Operations

* [createPatient](#createpatient) - Create a patient
* [fetchPatient](#fetchpatient) - Get a patient
* [fetchPatientCoaches](#fetchpatientcoaches) - List coaches for a patient
* [fetchPatientGroups](#fetchpatientgroups) - List groups for a patient
* [fetchPatients](#fetchpatients) - List patients
* [updatePatient](#updatepatient) - Update a patient
* [upsertPatient](#upsertpatient) - Upsert patient

## createPatient

Create a patient record.

Example for creating a patient with a group specified using `meta.query` instead of `id`:

```JSON
{
  "data": {
    "type": "patient",
    "attributes": {
      "first_name": "Andrew",
      "last_name": "Smith"
    },
    "relationships": {
      "groups": {
        "data": [
          {
            "type": "group",
            "meta": {
              "query": {
                "organization": "58c88de7c93eb96357a87033",
                "name": "Patients Lead"
              }
            }
          }
        ]
      }
    }
  }
}
```


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreatePatientRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientCreateResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientCreateResourceAttributesInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\ArchiveHistory;
use \OpenAPI\OpenAPI\Models\Shared\PatientCreateResourceAttributesGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientCreateResourceRelationshipsInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientCreateResourceRelationshipsCoachesInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientCreateResourceRelationshipsCoachesData;
use \OpenAPI\OpenAPI\Models\Shared\PatientCreateResourceRelationshipsCoachesDataMeta;
use \OpenAPI\OpenAPI\Models\Shared\PatientCreateResourceRelationshipsCoachesDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientCreateResourceRelationshipsGroups;
use \OpenAPI\OpenAPI\Models\Shared\PatientCreateResourceRelationshipsGroupsData;
use \OpenAPI\OpenAPI\Models\Shared\PatientCreateResourceRelationshipsGroupsDataMeta;
use \OpenAPI\OpenAPI\Models\Shared\PatientCreateResourceRelationshipsGroupsDataMetaQuery;
use \OpenAPI\OpenAPI\Models\Shared\PatientCreateResourceRelationshipsGroupsDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientCreateResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreatePatientRequestMeta;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePatientRequestInput();
    $request->data = new PatientCreateResourceInput();
    $request->data->attributes = new PatientCreateResourceAttributesInput();
    $request->data->attributes->addresses = [
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->data->attributes->archiveHistory = [
        new ArchiveHistory(),
        new ArchiveHistory(),
        new ArchiveHistory(),
    ];
    $request->data->attributes->birthDate = DateTime::createFromFormat('Y-m-d', '1944-03-06');
    $request->data->attributes->emailAddress = 'fiona@example.com';
    $request->data->attributes->firstName = 'Fiona';
    $request->data->attributes->gender = PatientCreateResourceAttributesGenderEnum::FEMALE;
    $request->data->attributes->identifiers = [
        new PatientIdentifier(),
        new PatientIdentifier(),
    ];
    $request->data->attributes->lastName = 'Reeves';
    $request->data->attributes->note = 'Relies on daughter to get around';
    $request->data->attributes->phoneNumbers = [
        new PhoneNumber(),
    ];
    $request->data->id = '57b36ef304ad8c2224f2af3a';
    $request->data->relationships = new PatientCreateResourceRelationshipsInput();
    $request->data->relationships->coaches = new PatientCreateResourceRelationshipsCoachesInput();
    $request->data->relationships->coaches->data = [
        new PatientCreateResourceRelationshipsCoachesData(),
        new PatientCreateResourceRelationshipsCoachesData(),
        new PatientCreateResourceRelationshipsCoachesData(),
    ];
    $request->data->relationships->groups = new PatientCreateResourceRelationshipsGroups();
    $request->data->relationships->groups->data = [
        new PatientCreateResourceRelationshipsGroupsData(),
        new PatientCreateResourceRelationshipsGroupsData(),
        new PatientCreateResourceRelationshipsGroupsData(),
    ];
    $request->data->type = PatientCreateResourceTypeEnum::PATIENT;
    $request->meta = new CreatePatientRequestMeta();
    $request->meta->ignoreDuplicates = false;

    $response = $sdk->patient->createPatient($request);

    if ($response->createPatientResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPatient

Gets a patient record by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPatientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPatientRequest();
    $request->id = '1baa0fe1-ade0-408e-af8c-5f350d8cdb5a';

    $response = $sdk->patient->fetchPatient($request);

    if ($response->fetchPatientResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPatientCoaches

Get the list of coaches for a patient.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPatientCoachesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPatientCoachesRequest();
    $request->id = '34181430-1042-4181-bd52-08ece7e253b6';

    $response = $sdk->patient->fetchPatientCoaches($request);

    if ($response->fetchCoachesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPatientGroups

Get the list of groups for a patient.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPatientGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPatientGroupsRequest();
    $request->id = '68451c6c-6e20-45e1-adea-b3fec9578a64';

    $response = $sdk->patient->fetchPatientGroups($request);

    if ($response->fetchGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPatients

Get a list of patients.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPatientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPatientsRequest();
    $request->filterArchived = false;
    $request->filterCreatedAt = 'nemo';
    $request->filterGroups = 'quos';
    $request->filterIdentifierSystem = 'eius';
    $request->filterIdentifierValue = 'aspernatur';
    $request->filterOrganization = 'ducimus';
    $request->filterUpdatedAt = 'nesciunt';
    $request->pageCursor = 'fuga';
    $request->pageLimit = 514054;
    $request->pageNumber = 277340;
    $request->pageSize = 97493;

    $response = $sdk->patient->fetchPatients($request);

    if ($response->fetchPatientsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePatient

Update a patient record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePatientRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePatientRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceAttributesInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\ArchiveHistory;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceAttributesGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsCoachesInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsCoachesData;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsCoachesDataMeta;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsCoachesDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsGroups;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsGroupsData;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsGroupsDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePatientRequest();
    $request->updatePatientRequestInput = new UpdatePatientRequestInput();
    $request->updatePatientRequestInput->data = new PatientResourceInput();
    $request->updatePatientRequestInput->data->attributes = new PatientResourceAttributesInput();
    $request->updatePatientRequestInput->data->attributes->addresses = [
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->updatePatientRequestInput->data->attributes->archiveHistory = [
        new ArchiveHistory(),
        new ArchiveHistory(),
        new ArchiveHistory(),
        new ArchiveHistory(),
    ];
    $request->updatePatientRequestInput->data->attributes->birthDate = DateTime::createFromFormat('Y-m-d', '1944-03-06');
    $request->updatePatientRequestInput->data->attributes->emailAddress = 'fiona@example.com';
    $request->updatePatientRequestInput->data->attributes->firstName = 'Fiona';
    $request->updatePatientRequestInput->data->attributes->gender = PatientResourceAttributesGenderEnum::FEMALE;
    $request->updatePatientRequestInput->data->attributes->identifiers = [
        new PatientIdentifier(),
    ];
    $request->updatePatientRequestInput->data->attributes->lastName = 'Reeves';
    $request->updatePatientRequestInput->data->attributes->note = 'Relies on daughter to get around';
    $request->updatePatientRequestInput->data->attributes->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->updatePatientRequestInput->data->id = '57b36ef304ad8c2224f2af3a';
    $request->updatePatientRequestInput->data->relationships = new PatientResourceRelationshipsInput();
    $request->updatePatientRequestInput->data->relationships->coaches = new PatientResourceRelationshipsCoachesInput();
    $request->updatePatientRequestInput->data->relationships->coaches->data = [
        new PatientResourceRelationshipsCoachesData(),
    ];
    $request->updatePatientRequestInput->data->relationships->groups = new PatientResourceRelationshipsGroups();
    $request->updatePatientRequestInput->data->relationships->groups->data = [
        new PatientResourceRelationshipsGroupsData(),
    ];
    $request->updatePatientRequestInput->data->type = PatientResourceTypeEnum::PATIENT;
    $request->id = '09fb0929-921a-4efb-9f58-c4d86e68e4be';

    $response = $sdk->patient->updatePatient($request);

    if ($response->updatePatientResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upsertPatient

Create a new patient or update an existing patient

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UpsertPatientRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceAttributesInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\ArchiveHistory;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceAttributesGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsCoachesInput;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsCoachesData;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsCoachesDataMeta;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsCoachesDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsGroups;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsGroupsData;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsGroupsDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpsertPatientRequestMeta;
use \OpenAPI\OpenAPI\Models\Shared\UpsertPatientRequestMetaQuery;
use \OpenAPI\OpenAPI\Models\Shared\UpsertPatientRequestMetaQueryIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpsertPatientRequestInput();
    $request->data = new PatientResourceInput();
    $request->data->attributes = new PatientResourceAttributesInput();
    $request->data->attributes->addresses = [
        new Address(),
    ];
    $request->data->attributes->archiveHistory = [
        new ArchiveHistory(),
        new ArchiveHistory(),
    ];
    $request->data->attributes->birthDate = DateTime::createFromFormat('Y-m-d', '1944-03-06');
    $request->data->attributes->emailAddress = 'fiona@example.com';
    $request->data->attributes->firstName = 'Fiona';
    $request->data->attributes->gender = PatientResourceAttributesGenderEnum::FEMALE;
    $request->data->attributes->identifiers = [
        new PatientIdentifier(),
        new PatientIdentifier(),
    ];
    $request->data->attributes->lastName = 'Reeves';
    $request->data->attributes->note = 'Relies on daughter to get around';
    $request->data->attributes->phoneNumbers = [
        new PhoneNumber(),
    ];
    $request->data->id = '57b36ef304ad8c2224f2af3a';
    $request->data->relationships = new PatientResourceRelationshipsInput();
    $request->data->relationships->coaches = new PatientResourceRelationshipsCoachesInput();
    $request->data->relationships->coaches->data = [
        new PatientResourceRelationshipsCoachesData(),
    ];
    $request->data->relationships->groups = new PatientResourceRelationshipsGroups();
    $request->data->relationships->groups->data = [
        new PatientResourceRelationshipsGroupsData(),
    ];
    $request->data->type = PatientResourceTypeEnum::PATIENT;
    $request->meta = new UpsertPatientRequestMeta();
    $request->meta->query = new UpsertPatientRequestMetaQuery();
    $request->meta->query->groups = [
        'enim',
        'sint',
        'nulla',
        'deserunt',
    ];
    $request->meta->query->identifier = new UpsertPatientRequestMetaQueryIdentifier();
    $request->meta->query->identifier->system = 'esse';
    $request->meta->query->identifier->value = 'nemo';

    $response = $sdk->patient->upsertPatient($request);

    if ($response->createPatientResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
