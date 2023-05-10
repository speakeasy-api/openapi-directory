# personUpsert

## Overview

Person Upsert

### Available Operations

* [postV2PersonUpsertsJson](#postv2personupsertsjson) - Upsert a person

## postV2PersonUpsertsJson

Upserts a person record. The upsert_key dictates how the upsert will be performed. The create and update behavior
is exactly the same as the individual create and update endpoints.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2PersonUpsertsJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2PersonUpsertsJsonRequestBody();
    $request->accountId = 181476;
    $request->city = 'East Dovie';
    $request->contactRestrictions = [
        'praesentium',
    ];
    $request->country = 'Cuba';
    $request->crmId = 'exercitationem';
    $request->crmIdType = 'expedita';
    $request->customFields = [
        'impedit' => 'sit',
        'nemo' => 'culpa',
        'consequuntur' => 'amet',
    ];
    $request->doNotContact = false;
    $request->emailAddress = 'deserunt';
    $request->firstName = 'Domenick';
    $request->homePhone = 'veniam';
    $request->id = 800256;
    $request->importId = 932250;
    $request->jobSeniority = 'a';
    $request->lastName = 'Schamberger';
    $request->linkedinUrl = 'enim';
    $request->locale = 'doloribus';
    $request->mobilePhone = 'assumenda';
    $request->ownerId = 887363;
    $request->personCompanyIndustry = 'architecto';
    $request->personCompanyName = 'alias';
    $request->personCompanyWebsite = 'culpa';
    $request->personStageId = 60335;
    $request->personalEmailAddress = 'nobis';
    $request->personalWebsite = 'necessitatibus';
    $request->phone = '1-245-931-0005';
    $request->phoneExtension = 'cumque';
    $request->secondaryEmailAddress = 'iure';
    $request->state = 'quibusdam';
    $request->tags = [
        'nemo',
        'recusandae',
        'velit',
        'magnam',
    ];
    $request->title = 'Ms.';
    $request->twitterHandle = 'laboriosam';
    $request->upsertKey = 'sed';
    $request->workCity = 'odio';
    $request->workCountry = 'natus';
    $request->workState = 'provident';

    $response = $sdk->personUpsert->postV2PersonUpsertsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
