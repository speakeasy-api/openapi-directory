# languageModelDirectAccess

## Overview

Methods to retrieve and inspect entries from the language models

### Available Operations

* [getFamilyDetails](#getfamilydetails) - Get family details
* [listFeatureValues](#listfeaturevalues) - List feature values
* [listHypernyms](#listhypernyms) - List hypernyms
* [listHyponyms](#listhyponyms) - List hyponyms
* [listInflectedForms](#listinflectedforms) - List inflected forms
* [listWordSenses](#listwordsenses) - List word senses

## getFamilyDetails

Fetches and outputs metadata for a family from the Tisane language models.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFamilyDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFamilyDetailsRequest();
    $request->ocpApimSubscriptionKey = '{{apiKey}}';
    $request->id = '{family_id}';

    $response = $sdk->languageModelDirectAccess->getFamilyDetails($request);

    if ($response->getFamilyDetails200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFeatureValues

Lists feature values for a particular category of features. This allows obtaining all the values such as entity types, subtypes, abuse types and tags, and more.

Returns the values as a JSON array of strings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFeatureValuesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFeatureValuesRequest();
    $request->ocpApimSubscriptionKey = '{{apiKey}}';
    $request->description = '{feature_list_name}';
    $request->language = '{language_code}';
    $request->type = '{Grammar/Style/Semantics}';

    $response = $sdk->languageModelDirectAccess->listFeatureValues($request);

    if ($response->listFeatureValues200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHypernyms

Lists all hypernyms related to a family. A hypernym is a parent concent. E.g. "vehicle" is a hypernym of "truck".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListHypernymsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHypernymsRequest();
    $request->ocpApimSubscriptionKey = '{{apiKey}}';
    $request->family = '{family_id}';
    $request->maxLevel = '{max_number_of_levels}';

    $response = $sdk->languageModelDirectAccess->listHypernyms($request);

    if ($response->listHypernyms200ApplicationJSONArrays !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHyponyms

Lists all hyponyms related to a family. A hyponym is a child concent. E.g. "truck" is a hypernym of "vehicle".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListHyponymsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHyponymsRequest();
    $request->ocpApimSubscriptionKey = '{{apiKey}}';
    $request->family = '{family_id}';
    $request->maxLevel = '{max_number_of_levels}';

    $response = $sdk->languageModelDirectAccess->listHyponyms($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInflectedForms

List inflected forms

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInflectedFormsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInflectedFormsRequest();
    $request->ocpApimSubscriptionKey = '{{apiKey}}';
    $request->family = '{family_id}';
    $request->language = '{language_code}';
    $request->lexeme = '{lexeme_id}';

    $response = $sdk->languageModelDirectAccess->listInflectedForms($request);

    if ($response->listInflectedForms200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWordSenses

Fetches and outputs all senses related to a word.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListWordSensesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWordSensesRequest();
    $request->ocpApimSubscriptionKey = '{{apiKey}}';
    $request->language = '{language_code}';
    $request->word = '{word}';

    $response = $sdk->languageModelDirectAccess->listWordSenses($request);

    if ($response->listWordSenses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
