# filter

## Overview

Methods to filter the available evidence.

### Available Operations

* [getAssociationFilter](#getassociationfilter) - Filter available associations
* [getEvidenceFilter](#getevidencefilter) - Filter available evidence
* [postAssociationFilter](#postassociationfilter) - Batch query available associations
* [postEvidenceFilter](#postevidencefilter) - Batch filter available evidence

## getAssociationFilter

More complex queries for associations scores and objects can be done using
this method, which allows to sort in different order, restrict to a specific class
of diseases or targets, as well as filtering results by score and associated pathways.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationFilterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociationFilterRequest();
    $request->datasource = 'suscipit';
    $request->datastructure = 'molestiae';
    $request->datatype = 'minus';
    $request->direct = false;
    $request->disease = 'placeat';
    $request->facets = false;
    $request->fields = 'voluptatum';
    $request->format = 'iusto';
    $request->from = 5680.45;
    $request->pathway = 'nisi';
    $request->scorevalueMax = 9255.97;
    $request->scorevalueMin = 8360.79;
    $request->scorevalueTypes = 'ab';
    $request->search = 'quis';
    $request->size = 871.29;
    $request->sort = 'deserunt';
    $request->target = 'perferendis';
    $request->targetClass = 'ipsam';
    $request->therapeuticArea = 'repellendus';
    $request->uniprotkw = 'sapiente';

    $response = $sdk->filter->getAssociationFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvidenceFilter

The filter method allows to retrieve the specific data that supports a connection between targets and diseases.
Filters can be used to restrict the results by source and type of data,
or limit results to targets which are part of a particular pathway.
Minimum and maximum scores can be specified as well as the type of evidence linking target and disease.
**Note** that multiple genes and diseases can be specified in the same request.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEvidenceFilterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEvidenceFilterRequest();
    $request->dataSource = 'quo';
    $request->datastructure = 'odit';
    $request->datatype = 'at';
    $request->disease = 'at';
    $request->fields = 'maiores';
    $request->format = 'molestiae';
    $request->from = 7991.59;
    $request->pathway = 'quod';
    $request->scorevalueMax = 4614.79;
    $request->scorevalueMin = 5204.78;
    $request->size = 7805.29;
    $request->sort = 'dolorum';
    $request->target = 'dicta';
    $request->uniprotkw = 'nam';

    $response = $sdk->filter->getEvidenceFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssociationFilter

Complex queries and filters for association objects can also be submitted using a JSON
object and the equivalent POST method.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'{"target":["target1", "target2"]}
'

    $response = $sdk->filter->postAssociationFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEvidenceFilter

POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).
Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'{"target":["ENSG00000094755", "ENSG00000167207"], "disease":["EFO_0003767"]}
'

    $response = $sdk->filter->postEvidenceFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
