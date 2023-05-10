# people

## Overview

Person Management

### Available Operations

* [deleteV2PeopleIdJson](#deletev2peopleidjson) - Delete a person
* [getV2PeopleJson](#getv2peoplejson) - List people
* [getV2PeopleIdJson](#getv2peopleidjson) - Fetch a person
* [postV2PeopleJson](#postv2peoplejson) - Create a person
* [putV2PeopleIdJson](#putv2peopleidjson) - Update a person

## deleteV2PeopleIdJson

Deletes a person. This operation is not reversible without contacting support.
This operation can be called multiple times successfully.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteV2PeopleIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteV2PeopleIdJsonRequest();
    $request->id = 'd3513bb6-f48b-4656-bcdb-35ff2e4b2753';

    $response = $sdk->people->deleteV2PeopleIdJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2PeopleJson

Fetches multiple person records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2PeopleJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2PeopleJsonRequest();
    $request->query = 'iusto';
    $request->accountId = [
        522176,
        753890,
        853606,
    ];
    $request->bounced = false;
    $request->cadenceId = [
        889448,
        495617,
        220104,
    ];
    $request->canCall = false;
    $request->canEmail = false;
    $request->canText = false;
    $request->city = [
        'error',
    ];
    $request->country = [
        'vitae',
        'dignissimos',
        'esse',
        'fugiat',
    ];
    $request->createdAt = [
        'aspernatur' => 'enim',
        'delectus' => 'iusto',
    ];
    $request->crmId = [
        'libero',
        'illo',
    ];
    $request->customFields = [
        'incidunt' => 'accusamus',
    ];
    $request->doNotContact = false;
    $request->emailAddresses = [
        'tempore',
        'veniam',
        'eos',
        'reiciendis',
    ];
    $request->euResident = false;
    $request->ids = [
        444121,
        506312,
        367046,
        999809,
    ];
    $request->importId = [
        197259,
        467119,
        534908,
        75566,
    ];
    $request->includePagingCounts = false;
    $request->jobSeniority = [
        'assumenda',
        'aliquam',
    ];
    $request->lastContacted = [
        'provident' => 'laudantium',
        'repudiandae' => 'consequatur',
        'maxime' => 'aspernatur',
        'nam' => 'expedita',
    ];
    $request->limitPagingCounts = false;
    $request->locales = [
        'provident',
        'repudiandae',
        'rerum',
    ];
    $request->new = false;
    $request->ownedByGuid = [
        'corporis',
        'vero',
    ];
    $request->ownerCrmId = [
        'repellendus',
        'iure',
        'dolorem',
    ];
    $request->ownerId = [
        771226,
        415033,
    ];
    $request->ownerIsActive = false;
    $request->page = 12171;
    $request->perPage = 32055;
    $request->personStageId = [
        60995,
        229567,
    ];
    $request->phoneNumber = false;
    $request->replied = false;
    $request->sortBy = 'illum';
    $request->sortDirection = 'praesentium';
    $request->starredByGuid = [
        'cum',
        'amet',
        'quasi',
    ];
    $request->state = [
        'laudantium',
    ];
    $request->success = false;
    $request->tagId = [
        938412,
    ];
    $request->title = [
        'amet',
        'provident',
    ];
    $request->updatedAt = [
        'necessitatibus',
        'provident',
        'repudiandae',
    ];

    $response = $sdk->people->getV2PeopleJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2PeopleIdJson

Fetches a person, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2PeopleIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2PeopleIdJsonRequest();
    $request->id = '057eb809-e281-4033-9f39-81d4c700b607';

    $response = $sdk->people->getV2PeopleIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2PeopleJson

Creates a person. Either email_address or phone/last_name must be provided as a unique lookup
on the team.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2PeopleJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2PeopleJsonRequestBody();
    $request->accountId = 998026;
    $request->autotagDate = false;
    $request->city = 'Port Lafayette';
    $request->contactRestrictions = [
        'eligendi',
    ];
    $request->country = 'Lebanon';
    $request->crmId = 'consectetur';
    $request->crmIdType = 'soluta';
    $request->customFields = [
        'temporibus' => 'officia',
        'amet' => 'tenetur',
        'aspernatur' => 'quo',
    ];
    $request->doNotContact = false;
    $request->emailAddress = 'itaque';
    $request->firstName = 'Rosetta';
    $request->homePhone = 'laborum';
    $request->importId = 490420;
    $request->jobSeniority = 'vero';
    $request->lastName = 'Denesik';
    $request->linkedinUrl = 'consectetur';
    $request->locale = 'repellat';
    $request->mobilePhone = 'explicabo';
    $request->ownerId = 129355;
    $request->personCompanyIndustry = 'exercitationem';
    $request->personCompanyName = 'nihil';
    $request->personCompanyWebsite = 'non';
    $request->personStageId = 68093;
    $request->personalEmailAddress = 'illo';
    $request->personalWebsite = 'hic';
    $request->phone = '1-927-532-2924 x1850';
    $request->phoneExtension = 'odit';
    $request->secondaryEmailAddress = 'deleniti';
    $request->state = 'enim';
    $request->tags = [
        'similique',
        'minima',
    ];
    $request->title = 'Miss';
    $request->twitterHandle = 'magnam';
    $request->workCity = 'sit';
    $request->workCountry = 'modi';
    $request->workState = 'eum';

    $response = $sdk->people->postV2PeopleJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2PeopleIdJson

Updates a person.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2PeopleIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2PeopleIdJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2PeopleIdJsonRequest();
    $request->requestBody = new PutV2PeopleIdJsonRequestBody();
    $request->requestBody->accountId = 199529;
    $request->requestBody->city = 'Kundehaven';
    $request->requestBody->contactRestrictions = [
        'molestiae',
        'veniam',
    ];
    $request->requestBody->country = 'Vietnam';
    $request->requestBody->crmId = 'ab';
    $request->requestBody->crmIdType = 'modi';
    $request->requestBody->customFields = [
        'aut' => 'eveniet',
    ];
    $request->requestBody->doNotContact = false;
    $request->requestBody->emailAddress = 'odio';
    $request->requestBody->firstName = 'Harrison';
    $request->requestBody->homePhone = 'numquam';
    $request->requestBody->importId = 677045;
    $request->requestBody->jobSeniority = 'possimus';
    $request->requestBody->lastName = 'Klein';
    $request->requestBody->linkedinUrl = 'consectetur';
    $request->requestBody->locale = 'nesciunt';
    $request->requestBody->mobilePhone = 'quaerat';
    $request->requestBody->ownerId = 929476;
    $request->requestBody->personCompanyIndustry = 'minus';
    $request->requestBody->personCompanyName = 'sunt';
    $request->requestBody->personCompanyWebsite = 'distinctio';
    $request->requestBody->personStageId = 481375;
    $request->requestBody->personalEmailAddress = 'quas';
    $request->requestBody->personalWebsite = 'et';
    $request->requestBody->phone = '346.250.5580 x0099';
    $request->requestBody->phoneExtension = 'mollitia';
    $request->requestBody->secondaryEmailAddress = 'nulla';
    $request->requestBody->state = 'officia';
    $request->requestBody->tags = [
        'voluptatem',
    ];
    $request->requestBody->title = 'Mr.';
    $request->requestBody->twitterHandle = 'eveniet';
    $request->requestBody->workCity = 'hic';
    $request->requestBody->workCountry = 'voluptatem';
    $request->requestBody->workState = 'incidunt';
    $request->id = '22eb2164-cf9a-4b83-a6c7-23ffda9e06be';

    $response = $sdk->people->putV2PeopleIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
