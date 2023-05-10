# public

## Overview

Publicly supported stable API.

### Available Operations

* [getAssociationById](#getassociationbyid) - Get association by id
* [getAssociationFilter](#getassociationfilter) - Filter available associations
* [getDataMetrics](#getdatametrics) - Get metrics about the current data release
* [getDataStats](#getdatastats) - Get statistics about the current data release
* [getEvidenceById](#getevidencebyid) - Get evidence by ID
* [getEvidenceFilter](#getevidencefilter) - Filter available evidence
* [getPing](#getping) - Ping service
* [getSearch](#getsearch) - Search for a disease or a target
* [getTherapeuticAreas](#gettherapeuticareas) - Get the list of therapeutic areas about the current data release
* [getVersion](#getversion) - Get API version
* [postAssociationFilter](#postassociationfilter) - Batch query available associations
* [postEvidenceById](#postevidencebyid) - Get evidence for a list of IDs
* [postEvidenceFilter](#postevidencefilter) - Batch filter available evidence

## getAssociationById

Once we integrate all evidence connecting a target to a specific disease, we
 compute an association score by the means of an harmonic sum. This *association score* provides
 an indication of how strong the evidence behind each connection is and can be
 used to rank genes in order of likelihood as drug targets.
 The association ID is constructed by using the Ensembl ID of the gene and the
 EFO ID for the disease (e.g. ENSG00000073756-EFO_0003767).
 The method returns an association object, which contains the data and summary
 on each evidence type included in the calculation of the score, as well as the score itself.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociationByIdRequest();
    $request->id = 'b7392059-2939-46fe-a759-6eb10faaa235';

    $response = $sdk->public->getAssociationById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->datasource = 'explicabo';
    $request->datastructure = 'nobis';
    $request->datatype = 'enim';
    $request->direct = false;
    $request->disease = 'omnis';
    $request->facets = false;
    $request->fields = 'nemo';
    $request->format = 'minima';
    $request->from = 5701.97;
    $request->pathway = 'accusantium';
    $request->scorevalueMax = 4386.01;
    $request->scorevalueMin = 6342.74;
    $request->scorevalueTypes = 'doloribus';
    $request->search = 'sapiente';
    $request->size = 1020.44;
    $request->sort = 'mollitia';
    $request->target = 'dolorem';
    $request->targetClass = 'culpa';
    $request->therapeuticArea = 'consequuntur';
    $request->uniprotkw = 'repellat';

    $response = $sdk->public->getAssociationFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataMetrics

Returns the metrics about associations and evidences, divided by datasource, genes and so on.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->public->getDataMetrics();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataStats

Returns the number of associations and evidences, divided by datasource.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->public->getDataStats();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvidenceById

We call **evidence** a unit of data that support a connection between a target and a disease.
The Open Targets Platform integrates multiple types of evidence including genetic associations,
somatic mutations, RNA expression and target-disease associations mined from the literature.
This method allows you to retrieve a single evidence item or a list of pieces of evidence by using their
targetvalidation.org ID.

Evidence IDs are unique within each data release (e.g. `8ed3d7568a8c6cac9c95cfb869bac762` for release 1.2).
You can obtain a list of evidence and their IDs from other API calls such as [/public/evidence/filter](#!/public/get_public_evidence_filter).

**Please note** that a specific evidence ID may change between data releases. We can not guarantee that a specific evidence ID will refer to the same piece of evidence connecting a target and its diseases.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEvidenceByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEvidenceByIdRequest();
    $request->id = 'a9467739-251a-4a52-83f5-ad019da1ffe7';

    $response = $sdk->public->getEvidenceById($request);

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
    $request->dataSource = 'praesentium';
    $request->datastructure = 'voluptatibus';
    $request->datatype = 'ipsa';
    $request->disease = 'omnis';
    $request->fields = 'voluptate';
    $request->format = 'cum';
    $request->from = 199.87;
    $request->pathway = 'doloremque';
    $request->scorevalueMax = 4417.11;
    $request->scorevalueMin = 2828.07;
    $request->size = 9795.87;
    $request->sort = 'dicta';
    $request->target = 'corporis';
    $request->uniprotkw = 'dolore';

    $response = $sdk->public->getEvidenceFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPing

Check if the API is up


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->public->getPing();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearch

This method allows you to look for gene or diseases of interest using a free text search,
replicating the functionality of the search box on our homepage. It should be used to identify
the best match for a disease or target of interest, rather than gathering a specific set of evidence.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchRequest();
    $request->filter = 'iusto';
    $request->from = 'dicta';
    $request->q = 'harum';
    $request->size = 'enim';

    $response = $sdk->public->getSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTherapeuticAreas

Returns the list of therapeutic areas for the current data release


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->public->getTherapeuticAreas();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVersion

Returns current API version.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->public->getVersion();

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

    $response = $sdk->public->postAssociationFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEvidenceById

This is the POST version of [/public/evidence](#!/public/get_public_evidence).
It allows to query for a list of evidence strings encoded in a `json` object to be passed in the body.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'{"id":["id1", "id2"]}
'

    $response = $sdk->public->postEvidenceById($request);

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

    $response = $sdk->public->postEvidenceFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
