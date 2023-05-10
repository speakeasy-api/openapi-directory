# SDK

## Overview

The Semantic API complements the Articles API. With the Semantic API, you get access to the long list of people, places, organizations and other locations, entities and descriptors that make up the controlled vocabulary used as metadata by The New York Times (sometimes referred to as Times Tags and used for Times Topics pages).

The Semantic API uses concepts which are, by definition, terms in The New York Times controlled vocabulary. Like the way facets are used in the Articles API, concepts are a good way to uncover articles of interest in The New York Times archive, and at the same time, limit the scope and number of those articles. The Semantic API maps to external semantic data resources, in a fashion consistent with the idea of linked data. The Semantic API also provides combination and relationship information to other, similar concepts in The New York Times controlled vocabulary.


<http://developer.nytimes.com/>
### Available Operations

* [getNameConceptTypeSpecificConceptJson](#getnameconcepttypespecificconceptjson)
* [getSearchJson](#getsearchjson)

## getNameConceptTypeSpecificConceptJson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNameConceptTypeSpecificConceptJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNameConceptTypeSpecificConceptJsonConceptTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNameConceptTypeSpecificConceptJsonFieldsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNameConceptTypeSpecificConceptJsonRequest();
    $request->conceptType = GetNameConceptTypeSpecificConceptJsonConceptTypeEnum::NYTD_ORG;
    $request->fields = GetNameConceptTypeSpecificConceptJsonFieldsEnum::SCOPE_NOTES;
    $request->query = 'corrupti';
    $request->specificConcept = 'illum';

    $response = $sdk->sdk->getNameConceptTypeSpecificConceptJson($request);

    if ($response->getNameConceptTypeSpecificConceptJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchJson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchJsonFieldsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchJsonRequest();
    $request->fields = GetSearchJsonFieldsEnum::TAXONOMY;
    $request->offset = 623564;
    $request->query = 'deserunt';

    $response = $sdk->sdk->getSearchJson($request);

    if ($response->getSearchJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
