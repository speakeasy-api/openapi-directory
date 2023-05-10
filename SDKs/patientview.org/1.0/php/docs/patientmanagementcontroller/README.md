# patientManagementController

## Overview

Patient Management Controller

### Available Operations

* [getPatientManagement](#getpatientmanagement) - getPatientManagement
* [getPatientManagementDiagnoses](#getpatientmanagementdiagnoses) - getPatientManagementDiagnoses
* [getPatientManagementLookupTypes](#getpatientmanagementlookuptypes) - getPatientManagementLookupTypes
* [savePatientManagement](#savepatientmanagement) - savePatientManagement
* [savePatientManagementSurgeries](#savepatientmanagementsurgeries) - savePatientManagementSurgeries
* [validatePatientManagement](#validatepatientmanagement) - validatePatientManagement

## getPatientManagement

getPatientManagement

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPatientManagementRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPatientManagementRequest();
    $request->groupId = 479977;
    $request->identifierId = 568045;
    $request->userId = 392785;

    $response = $sdk->patientManagementController->getPatientManagement($request);

    if ($response->patientManagement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPatientManagementDiagnoses

getPatientManagementDiagnoses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->patientManagementController->getPatientManagementDiagnoses();

    if ($response->codes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPatientManagementLookupTypes

getPatientManagementLookupTypes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->patientManagementController->getPatientManagementLookupTypes();

    if ($response->lookupTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## savePatientManagement

savePatientManagement

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SavePatientManagementRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientManagement;
use \OpenAPI\OpenAPI\Models\Shared\FhirCondition;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\ContactPoint;
use \OpenAPI\OpenAPI\Models\Shared\ContactPointType;
use \OpenAPI\OpenAPI\Models\Shared\LookupType;
use \OpenAPI\OpenAPI\Models\Shared\LookupTypeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactPointTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupFeature;
use \OpenAPI\OpenAPI\Models\Shared\Feature;
use \OpenAPI\OpenAPI\Models\Shared\Lookup;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\FhirEncounter;
use \OpenAPI\OpenAPI\Models\Shared\FhirObservation;
use \OpenAPI\OpenAPI\Models\Shared\FhirProcedure;
use \OpenAPI\OpenAPI\Models\Shared\FhirPatient;
use \OpenAPI\OpenAPI\Models\Shared\FhirContact;
use \OpenAPI\OpenAPI\Models\Shared\FhirIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\FhirPractitioner;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SavePatientManagementRequest();
    $request->patientManagement = new PatientManagement();
    $request->patientManagement->condition = new FhirCondition();
    $request->patientManagement->condition->asserter = 'recusandae';
    $request->patientManagement->condition->category = 'temporibus';
    $request->patientManagement->condition->code = 'ab';
    $request->patientManagement->condition->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T04:44:49.578Z');
    $request->patientManagement->condition->description = 'deserunt';
    $request->patientManagement->condition->fullDescription = 'perferendis';
    $request->patientManagement->condition->group = new Group();
    $request->patientManagement->condition->group->address1 = 'ipsam';
    $request->patientManagement->condition->group->address2 = 'repellendus';
    $request->patientManagement->condition->group->address3 = 'sapiente';
    $request->patientManagement->condition->group->childGroups = [
        new Group(),
        new Group(),
        new Group(),
        new Group(),
    ];
    $request->patientManagement->condition->group->code = 'odit';
    $request->patientManagement->condition->group->contactPoints = [
        new ContactPoint(),
        new ContactPoint(),
        new ContactPoint(),
        new ContactPoint(),
    ];
    $request->patientManagement->condition->group->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-25T09:54:35.794Z');
    $request->patientManagement->condition->group->fhirResourceId = '7cc78ca1-ba92-48fc-8167-42cb73920592';
    $request->patientManagement->condition->group->groupFeatures = [
        new GroupFeature(),
        new GroupFeature(),
        new GroupFeature(),
    ];
    $request->patientManagement->condition->group->groupType = new Lookup();
    $request->patientManagement->condition->group->groupType->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T19:39:29.035Z');
    $request->patientManagement->condition->group->groupType->description = 'laboriosam';
    $request->patientManagement->condition->group->groupType->descriptionFriendly = 'hic';
    $request->patientManagement->condition->group->groupType->displayOrder = 902599;
    $request->patientManagement->condition->group->groupType->id = 681820;
    $request->patientManagement->condition->group->groupType->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T18:42:38.160Z');
    $request->patientManagement->condition->group->groupType->lookupType = new LookupType();
    $request->patientManagement->condition->group->groupType->lookupType->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-15T23:12:00.119Z');
    $request->patientManagement->condition->group->groupType->lookupType->description = 'saepe';
    $request->patientManagement->condition->group->groupType->lookupType->id = 697631;
    $request->patientManagement->condition->group->groupType->lookupType->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-10T00:25:28.749Z');
    $request->patientManagement->condition->group->groupType->lookupType->type = LookupTypeTypeEnum::LINK_TYPE;
    $request->patientManagement->condition->group->groupType->value = 'est';
    $request->patientManagement->condition->group->id = 653140;
    $request->patientManagement->condition->group->lastImportDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-29T05:39:49.755Z');
    $request->patientManagement->condition->group->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-23T06:35:12.519Z');
    $request->patientManagement->condition->group->links = [
        new Link(),
    ];
    $request->patientManagement->condition->group->locations = [
        new Location(),
        new Location(),
        new Location(),
        new Location(),
    ];
    $request->patientManagement->condition->group->name = 'Guadalupe Hickle';
    $request->patientManagement->condition->group->parentGroups = [
        new Group(),
    ];
    $request->patientManagement->condition->group->postcode = '69916';
    $request->patientManagement->condition->group->sftpUser = 'dolorem';
    $request->patientManagement->condition->group->shortName = 'culpa';
    $request->patientManagement->condition->group->visible = false;
    $request->patientManagement->condition->group->visibleToJoin = false;
    $request->patientManagement->condition->id = 161309;
    $request->patientManagement->condition->identifier = 'repellat';
    $request->patientManagement->condition->links = [
        new Link(),
        new Link(),
        new Link(),
    ];
    $request->patientManagement->condition->notes = 'occaecati';
    $request->patientManagement->condition->severity = 'numquam';
    $request->patientManagement->condition->status = 'commodi';
    $request->patientManagement->encounters = [
        new FhirEncounter(),
        new FhirEncounter(),
    ];
    $request->patientManagement->groupCode = 'molestiae';
    $request->patientManagement->identifier = 'velit';
    $request->patientManagement->observations = [
        new FhirObservation(),
        new FhirObservation(),
        new FhirObservation(),
    ];
    $request->patientManagement->patient = new FhirPatient();
    $request->patientManagement->patient->address1 = 'quia';
    $request->patientManagement->patient->address2 = 'quis';
    $request->patientManagement->patient->address3 = 'vitae';
    $request->patientManagement->patient->address4 = 'laborum';
    $request->patientManagement->patient->contacts = [
        new FhirContact(),
        new FhirContact(),
        new FhirContact(),
    ];
    $request->patientManagement->patient->dateOfBirth = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-11T13:31:01.643Z');
    $request->patientManagement->patient->dateOfBirthNoTime = 'quo';
    $request->patientManagement->patient->forename = 'sequi';
    $request->patientManagement->patient->gender = 'male';
    $request->patientManagement->patient->group = new Group();
    $request->patientManagement->patient->group->address1 = 'ipsam';
    $request->patientManagement->patient->group->address2 = 'id';
    $request->patientManagement->patient->group->address3 = 'possimus';
    $request->patientManagement->patient->group->childGroups = [
        new Group(),
    ];
    $request->patientManagement->patient->group->code = 'quasi';
    $request->patientManagement->patient->group->contactPoints = [
        new ContactPoint(),
        new ContactPoint(),
        new ContactPoint(),
    ];
    $request->patientManagement->patient->group->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-24T08:13:29.299Z');
    $request->patientManagement->patient->group->fhirResourceId = '1ffe78f0-97b0-4074-b154-71b5e6e13b99';
    $request->patientManagement->patient->group->groupFeatures = [
        new GroupFeature(),
        new GroupFeature(),
        new GroupFeature(),
        new GroupFeature(),
    ];
    $request->patientManagement->patient->group->groupType = new Lookup();
    $request->patientManagement->patient->group->groupType->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T05:25:54.356Z');
    $request->patientManagement->patient->group->groupType->description = 'rem';
    $request->patientManagement->patient->group->groupType->descriptionFriendly = 'voluptates';
    $request->patientManagement->patient->group->groupType->displayOrder = 93940;
    $request->patientManagement->patient->group->groupType->id = 921158;
    $request->patientManagement->patient->group->groupType->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-01T07:52:08.326Z');
    $request->patientManagement->patient->group->groupType->lookupType = new LookupType();
    $request->patientManagement->patient->group->groupType->lookupType->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-02T21:33:21.372Z');
    $request->patientManagement->patient->group->groupType->lookupType->description = 'enim';
    $request->patientManagement->patient->group->groupType->lookupType->id = 9356;
    $request->patientManagement->patient->group->groupType->lookupType->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-26T02:10:00.226Z');
    $request->patientManagement->patient->group->groupType->lookupType->type = LookupTypeTypeEnum::ROLE;
    $request->patientManagement->patient->group->groupType->value = 'deserunt';
    $request->patientManagement->patient->group->id = 716327;
    $request->patientManagement->patient->group->lastImportDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-18T02:24:27.835Z');
    $request->patientManagement->patient->group->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-26T03:14:36.345Z');
    $request->patientManagement->patient->group->links = [
        new Link(),
        new Link(),
    ];
    $request->patientManagement->patient->group->locations = [
        new Location(),
        new Location(),
        new Location(),
    ];
    $request->patientManagement->patient->group->name = 'Christopher Cummerata';
    $request->patientManagement->patient->group->parentGroups = [
        new Group(),
    ];
    $request->patientManagement->patient->group->postcode = '65277';
    $request->patientManagement->patient->group->sftpUser = 'labore';
    $request->patientManagement->patient->group->shortName = 'delectus';
    $request->patientManagement->patient->group->visible = false;
    $request->patientManagement->patient->group->visibleToJoin = false;
    $request->patientManagement->patient->groupCode = 'eum';
    $request->patientManagement->patient->identifier = 'non';
    $request->patientManagement->patient->identifiers = [
        new FhirIdentifier(),
        new FhirIdentifier(),
        new FhirIdentifier(),
        new FhirIdentifier(),
    ];
    $request->patientManagement->patient->postcode = '35856-2896';
    $request->patientManagement->patient->practitioners = [
        new FhirPractitioner(),
        new FhirPractitioner(),
    ];
    $request->patientManagement->patient->surname = 'in';
    $request->patientManagement->practitioners = [
        new FhirPractitioner(),
        new FhirPractitioner(),
        new FhirPractitioner(),
        new FhirPractitioner(),
    ];
    $request->groupId = 978571;
    $request->identifierId = 699479;
    $request->userId = 116202;

    $response = $sdk->patientManagementController->savePatientManagement($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## savePatientManagementSurgeries

savePatientManagementSurgeries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SavePatientManagementSurgeriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientManagement;
use \OpenAPI\OpenAPI\Models\Shared\FhirCondition;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\ContactPoint;
use \OpenAPI\OpenAPI\Models\Shared\ContactPointType;
use \OpenAPI\OpenAPI\Models\Shared\LookupType;
use \OpenAPI\OpenAPI\Models\Shared\LookupTypeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactPointTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupFeature;
use \OpenAPI\OpenAPI\Models\Shared\Feature;
use \OpenAPI\OpenAPI\Models\Shared\Lookup;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\FhirEncounter;
use \OpenAPI\OpenAPI\Models\Shared\FhirObservation;
use \OpenAPI\OpenAPI\Models\Shared\FhirProcedure;
use \OpenAPI\OpenAPI\Models\Shared\FhirPatient;
use \OpenAPI\OpenAPI\Models\Shared\FhirContact;
use \OpenAPI\OpenAPI\Models\Shared\FhirIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\FhirPractitioner;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SavePatientManagementSurgeriesRequest();
    $request->patientManagement = new PatientManagement();
    $request->patientManagement->condition = new FhirCondition();
    $request->patientManagement->condition->asserter = 'magnam';
    $request->patientManagement->condition->category = 'cumque';
    $request->patientManagement->condition->code = 'facere';
    $request->patientManagement->condition->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T06:36:34.417Z');
    $request->patientManagement->condition->description = 'laborum';
    $request->patientManagement->condition->fullDescription = 'accusamus';
    $request->patientManagement->condition->group = new Group();
    $request->patientManagement->condition->group->address1 = 'non';
    $request->patientManagement->condition->group->address2 = 'occaecati';
    $request->patientManagement->condition->group->address3 = 'enim';
    $request->patientManagement->condition->group->childGroups = [
        new Group(),
        new Group(),
        new Group(),
        new Group(),
    ];
    $request->patientManagement->condition->group->code = 'delectus';
    $request->patientManagement->condition->group->contactPoints = [
        new ContactPoint(),
        new ContactPoint(),
        new ContactPoint(),
    ];
    $request->patientManagement->condition->group->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-20T13:32:41.687Z');
    $request->patientManagement->condition->group->fhirResourceId = 'a88f3a66-9970-474b-a446-9b6e21419598';
    $request->patientManagement->condition->group->groupFeatures = [
        new GroupFeature(),
        new GroupFeature(),
        new GroupFeature(),
    ];
    $request->patientManagement->condition->group->groupType = new Lookup();
    $request->patientManagement->condition->group->groupType->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-07T13:57:38.738Z');
    $request->patientManagement->condition->group->groupType->description = 'reiciendis';
    $request->patientManagement->condition->group->groupType->descriptionFriendly = 'mollitia';
    $request->patientManagement->condition->group->groupType->displayOrder = 320997;
    $request->patientManagement->condition->group->groupType->id = 431418;
    $request->patientManagement->condition->group->groupType->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-07T18:15:06.372Z');
    $request->patientManagement->condition->group->groupType->lookupType = new LookupType();
    $request->patientManagement->condition->group->groupType->lookupType->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-19T20:09:28.183Z');
    $request->patientManagement->condition->group->groupType->lookupType->description = 'quasi';
    $request->patientManagement->condition->group->groupType->lookupType->id = 435865;
    $request->patientManagement->condition->group->groupType->lookupType->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-29T08:15:14.819Z');
    $request->patientManagement->condition->group->groupType->lookupType->type = LookupTypeTypeEnum::FEATURE_TYPE;
    $request->patientManagement->condition->group->groupType->value = 'maxime';
    $request->patientManagement->condition->group->id = 537023;
    $request->patientManagement->condition->group->lastImportDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-08T00:19:59.821Z');
    $request->patientManagement->condition->group->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T15:46:28.441Z');
    $request->patientManagement->condition->group->links = [
        new Link(),
        new Link(),
        new Link(),
        new Link(),
    ];
    $request->patientManagement->condition->group->locations = [
        new Location(),
        new Location(),
    ];
    $request->patientManagement->condition->group->name = 'Jessie Zulauf';
    $request->patientManagement->condition->group->parentGroups = [
        new Group(),
        new Group(),
        new Group(),
        new Group(),
    ];
    $request->patientManagement->condition->group->postcode = '01561-1788';
    $request->patientManagement->condition->group->sftpUser = 'maxime';
    $request->patientManagement->condition->group->shortName = 'ea';
    $request->patientManagement->condition->group->visible = false;
    $request->patientManagement->condition->group->visibleToJoin = false;
    $request->patientManagement->condition->id = 569101;
    $request->patientManagement->condition->identifier = 'odit';
    $request->patientManagement->condition->links = [
        new Link(),
        new Link(),
    ];
    $request->patientManagement->condition->notes = 'accusantium';
    $request->patientManagement->condition->severity = 'ab';
    $request->patientManagement->condition->status = 'maiores';
    $request->patientManagement->encounters = [
        new FhirEncounter(),
        new FhirEncounter(),
        new FhirEncounter(),
    ];
    $request->patientManagement->groupCode = 'ipsam';
    $request->patientManagement->identifier = 'voluptate';
    $request->patientManagement->observations = [
        new FhirObservation(),
        new FhirObservation(),
    ];
    $request->patientManagement->patient = new FhirPatient();
    $request->patientManagement->patient->address1 = 'nam';
    $request->patientManagement->patient->address2 = 'eaque';
    $request->patientManagement->patient->address3 = 'pariatur';
    $request->patientManagement->patient->address4 = 'nemo';
    $request->patientManagement->patient->contacts = [
        new FhirContact(),
        new FhirContact(),
        new FhirContact(),
        new FhirContact(),
    ];
    $request->patientManagement->patient->dateOfBirth = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-22T15:09:45.631Z');
    $request->patientManagement->patient->dateOfBirthNoTime = 'amet';
    $request->patientManagement->patient->forename = 'aut';
    $request->patientManagement->patient->gender = 'male';
    $request->patientManagement->patient->group = new Group();
    $request->patientManagement->patient->group->address1 = 'corporis';
    $request->patientManagement->patient->group->address2 = 'hic';
    $request->patientManagement->patient->group->address3 = 'libero';
    $request->patientManagement->patient->group->childGroups = [
        new Group(),
        new Group(),
        new Group(),
    ];
    $request->patientManagement->patient->group->code = 'dolores';
    $request->patientManagement->patient->group->contactPoints = [
        new ContactPoint(),
        new ContactPoint(),
    ];
    $request->patientManagement->patient->group->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-08T15:06:08.615Z');
    $request->patientManagement->patient->group->fhirResourceId = '053202c7-3d5f-4e9b-90c2-8909b3fe49a8';
    $request->patientManagement->patient->group->groupFeatures = [
        new GroupFeature(),
        new GroupFeature(),
        new GroupFeature(),
        new GroupFeature(),
    ];
    $request->patientManagement->patient->group->groupType = new Lookup();
    $request->patientManagement->patient->group->groupType->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-01T21:12:31.408Z');
    $request->patientManagement->patient->group->groupType->description = 'libero';
    $request->patientManagement->patient->group->groupType->descriptionFriendly = 'delectus';
    $request->patientManagement->patient->group->groupType->displayOrder = 311945;
    $request->patientManagement->patient->group->groupType->id = 554242;
    $request->patientManagement->patient->group->groupType->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-15T11:27:32.342Z');
    $request->patientManagement->patient->group->groupType->lookupType = new LookupType();
    $request->patientManagement->patient->group->groupType->lookupType->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-11T19:23:49.728Z');
    $request->patientManagement->patient->group->groupType->lookupType->description = 'qui';
    $request->patientManagement->patient->group->groupType->lookupType->id = 218749;
    $request->patientManagement->patient->group->groupType->lookupType->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-17T07:36:26.867Z');
    $request->patientManagement->patient->group->groupType->lookupType->type = LookupTypeTypeEnum::IBD_UCEXTENT;
    $request->patientManagement->patient->group->groupType->value = 'voluptate';
    $request->patientManagement->patient->group->id = 490459;
    $request->patientManagement->patient->group->lastImportDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-26T23:32:35.989Z');
    $request->patientManagement->patient->group->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T07:40:27.174Z');
    $request->patientManagement->patient->group->links = [
        new Link(),
    ];
    $request->patientManagement->patient->group->locations = [
        new Location(),
    ];
    $request->patientManagement->patient->group->name = 'Vera Kuhlman';
    $request->patientManagement->patient->group->parentGroups = [
        new Group(),
        new Group(),
        new Group(),
    ];
    $request->patientManagement->patient->group->postcode = '36150-8076';
    $request->patientManagement->patient->group->sftpUser = 'iusto';
    $request->patientManagement->patient->group->shortName = 'voluptate';
    $request->patientManagement->patient->group->visible = false;
    $request->patientManagement->patient->group->visibleToJoin = false;
    $request->patientManagement->patient->groupCode = 'dolorum';
    $request->patientManagement->patient->identifier = 'deleniti';
    $request->patientManagement->patient->identifiers = [
        new FhirIdentifier(),
        new FhirIdentifier(),
        new FhirIdentifier(),
    ];
    $request->patientManagement->patient->postcode = '79424-6921';
    $request->patientManagement->patient->practitioners = [
        new FhirPractitioner(),
    ];
    $request->patientManagement->patient->surname = 'amet';
    $request->patientManagement->practitioners = [
        new FhirPractitioner(),
        new FhirPractitioner(),
        new FhirPractitioner(),
        new FhirPractitioner(),
    ];
    $request->groupId = 881586;
    $request->identifierId = 320017;
    $request->userId = 904425;

    $response = $sdk->patientManagementController->savePatientManagementSurgeries($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validatePatientManagement

validatePatientManagement

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PatientManagement;
use \OpenAPI\OpenAPI\Models\Shared\FhirCondition;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\ContactPoint;
use \OpenAPI\OpenAPI\Models\Shared\ContactPointType;
use \OpenAPI\OpenAPI\Models\Shared\LookupType;
use \OpenAPI\OpenAPI\Models\Shared\LookupTypeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactPointTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupFeature;
use \OpenAPI\OpenAPI\Models\Shared\Feature;
use \OpenAPI\OpenAPI\Models\Shared\Lookup;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\FhirEncounter;
use \OpenAPI\OpenAPI\Models\Shared\FhirObservation;
use \OpenAPI\OpenAPI\Models\Shared\FhirProcedure;
use \OpenAPI\OpenAPI\Models\Shared\FhirPatient;
use \OpenAPI\OpenAPI\Models\Shared\FhirContact;
use \OpenAPI\OpenAPI\Models\Shared\FhirIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\FhirPractitioner;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientManagement();
    $request->condition = new FhirCondition();
    $request->condition->asserter = 'suscipit';
    $request->condition->category = 'deserunt';
    $request->condition->code = 'provident';
    $request->condition->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-03T16:00:55.670Z');
    $request->condition->description = 'totam';
    $request->condition->fullDescription = 'similique';
    $request->condition->group = new Group();
    $request->condition->group->address1 = 'alias';
    $request->condition->group->address2 = 'at';
    $request->condition->group->address3 = 'quaerat';
    $request->condition->group->childGroups = [
        new Group(),
        new Group(),
    ];
    $request->condition->group->code = 'vel';
    $request->condition->group->contactPoints = [
        new ContactPoint(),
        new ContactPoint(),
        new ContactPoint(),
        new ContactPoint(),
    ];
    $request->condition->group->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-11T17:29:13.872Z');
    $request->condition->group->fhirResourceId = 'af7a73cf-3be4-453f-870b-326b5a73429c';
    $request->condition->group->groupFeatures = [
        new GroupFeature(),
        new GroupFeature(),
        new GroupFeature(),
        new GroupFeature(),
    ];
    $request->condition->group->groupType = new Lookup();
    $request->condition->group->groupType->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-07T04:50:29.805Z');
    $request->condition->group->groupType->description = 'laborum';
    $request->condition->group->groupType->descriptionFriendly = 'totam';
    $request->condition->group->groupType->displayOrder = 276894;
    $request->condition->group->groupType->id = 132068;
    $request->condition->group->groupType->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-14T08:18:32.851Z');
    $request->condition->group->groupType->lookupType = new LookupType();
    $request->condition->group->groupType->lookupType->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-17T21:02:01.759Z');
    $request->condition->group->groupType->lookupType->description = 'quam';
    $request->condition->group->groupType->lookupType->id = 565421;
    $request->condition->group->groupType->lookupType->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-14T07:24:20.121Z');
    $request->condition->group->groupType->lookupType->type = LookupTypeTypeEnum::CODE_TYPE;
    $request->condition->group->groupType->value = 'fugit';
    $request->condition->group->id = 164959;
    $request->condition->group->lastImportDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-16T10:27:43.717Z');
    $request->condition->group->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-12T10:34:24.004Z');
    $request->condition->group->links = [
        new Link(),
        new Link(),
        new Link(),
        new Link(),
    ];
    $request->condition->group->locations = [
        new Location(),
    ];
    $request->condition->group->name = 'Dr. Dominic Rohan';
    $request->condition->group->parentGroups = [
        new Group(),
    ];
    $request->condition->group->postcode = '57509-2222';
    $request->condition->group->sftpUser = 'dolorum';
    $request->condition->group->shortName = 'architecto';
    $request->condition->group->visible = false;
    $request->condition->group->visibleToJoin = false;
    $request->condition->id = 63038;
    $request->condition->identifier = 'aut';
    $request->condition->links = [
        new Link(),
        new Link(),
        new Link(),
    ];
    $request->condition->notes = 'itaque';
    $request->condition->severity = 'consequatur';
    $request->condition->status = 'est';
    $request->encounters = [
        new FhirEncounter(),
        new FhirEncounter(),
        new FhirEncounter(),
        new FhirEncounter(),
    ];
    $request->groupCode = 'porro';
    $request->identifier = 'doloribus';
    $request->observations = [
        new FhirObservation(),
        new FhirObservation(),
    ];
    $request->patient = new FhirPatient();
    $request->patient->address1 = 'facilis';
    $request->patient->address2 = 'cupiditate';
    $request->patient->address3 = 'qui';
    $request->patient->address4 = 'quae';
    $request->patient->contacts = [
        new FhirContact(),
        new FhirContact(),
        new FhirContact(),
    ];
    $request->patient->dateOfBirth = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-03T03:16:58.870Z');
    $request->patient->dateOfBirthNoTime = 'voluptatibus';
    $request->patient->forename = 'quisquam';
    $request->patient->gender = 'male';
    $request->patient->group = new Group();
    $request->patient->group->address1 = 'omnis';
    $request->patient->group->address2 = 'quis';
    $request->patient->group->address3 = 'ipsum';
    $request->patient->group->childGroups = [
        new Group(),
        new Group(),
        new Group(),
        new Group(),
    ];
    $request->patient->group->code = 'voluptate';
    $request->patient->group->contactPoints = [
        new ContactPoint(),
    ];
    $request->patient->group->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-26T11:54:04.858Z');
    $request->patient->group->fhirResourceId = '7fbc7abd-74dd-439c-8f5d-2cff7c70a456';
    $request->patient->group->groupFeatures = [
        new GroupFeature(),
    ];
    $request->patient->group->groupType = new Lookup();
    $request->patient->group->groupType->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-06T22:14:54.933Z');
    $request->patient->group->groupType->description = 'magnam';
    $request->patient->group->groupType->descriptionFriendly = 'ratione';
    $request->patient->group->groupType->displayOrder = 401132;
    $request->patient->group->groupType->id = 511319;
    $request->patient->group->groupType->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-11T02:58:57.556Z');
    $request->patient->group->groupType->lookupType = new LookupType();
    $request->patient->group->groupType->lookupType->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-15T20:38:47.955Z');
    $request->patient->group->groupType->lookupType->description = 'ex';
    $request->patient->group->groupType->lookupType->id = 862192;
    $request->patient->group->groupType->lookupType->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-20T18:27:01.887Z');
    $request->patient->group->groupType->lookupType->type = LookupTypeTypeEnum::IDENTIFIER;
    $request->patient->group->groupType->value = 'sapiente';
    $request->patient->group->id = 788873;
    $request->patient->group->lastImportDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-07T13:07:57.949Z');
    $request->patient->group->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-03T14:20:49.127Z');
    $request->patient->group->links = [
        new Link(),
        new Link(),
    ];
    $request->patient->group->locations = [
        new Location(),
        new Location(),
    ];
    $request->patient->group->name = 'Megan Jaskolski';
    $request->patient->group->parentGroups = [
        new Group(),
        new Group(),
        new Group(),
        new Group(),
    ];
    $request->patient->group->postcode = '30970';
    $request->patient->group->sftpUser = 'aut';
    $request->patient->group->shortName = 'deleniti';
    $request->patient->group->visible = false;
    $request->patient->group->visibleToJoin = false;
    $request->patient->groupCode = 'impedit';
    $request->patient->identifier = 'aliquam';
    $request->patient->identifiers = [
        new FhirIdentifier(),
    ];
    $request->patient->postcode = '02066-8244';
    $request->patient->practitioners = [
        new FhirPractitioner(),
        new FhirPractitioner(),
        new FhirPractitioner(),
        new FhirPractitioner(),
    ];
    $request->patient->surname = 'quas';
    $request->practitioners = [
        new FhirPractitioner(),
        new FhirPractitioner(),
        new FhirPractitioner(),
        new FhirPractitioner(),
    ];

    $response = $sdk->patientManagementController->validatePatientManagement($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
