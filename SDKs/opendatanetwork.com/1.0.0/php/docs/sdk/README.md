# SDK

## Overview

The Socrata OpenDataNetwork (ODN) REST API exposes public data, often continuosly updated and enhanced, from many thousands of public
government and non profit agencies.

Much of this data originating from independent sources is fused together to create new, and often
powerful, entity level data. The API, in addition to search and autosuggest capabilities for finding datasets,
enables data based comparisons across geographical regions such as states, counties, metropolitan areas,
cities and zip codes using highly vetted data providers such as US Census, BEA, HUD and others. Comparison data
is preformatted for easy and efficient display on a chart, graph or interactive map.

The API also exposes data organized by narrative style questions a human might ask. The questions can
be rapidly found using an autosuggest style index, and then used to directly access all data needed to
thoroughly and authoritatively answer the question. Retrieved data includes time series (temporally aligned),
tabular, map heavy (includes spatial boundaries), and auto generated unstructured descriptive text.

The ODN API does not duplicate API endpoints or services provided by public sector agencies, but rather,
returns context relevant pre-populated REST URLs, when appropriate, so the caller can access data
directly from the source.

The [open source](http://github.com/socrata/odn-backend) API powers [OpenDataNetwork.com](http://OpenDataNetwork.com), an [open source](http://github.com/socrata/opendatanetwork.com)
site; the site highlights myriad uses and provides API badges with contextually relevant API example
REST endpoints and documentation pointers.

Finally, we continuously add new dat sources which appear automatically in the API, so if your favorite data
source is not available, check back soon. You can also join us [HERE](http://www.opendatanetwork.com/join-open-data-network)
and receive updates or let us know which data sources you are most interested in.

## App Tokens

Registering for and including a [Socrata application token](https://dev.socrata.com/docs/app-tokens.html)
is _required_ for the ODN API. They can be passed either using the `app_token` parameter
or the `X-App-Token` HTTP header.

### Available Operations

* [createAMap](#createamap) - Create a map
* [findAllAvailableDataForSomeEntities](#findallavailabledataforsomeentities) - Find all available data for some entities
* [findTheRelativesOfAnEntity](#findtherelativesofanentity) - Find the relatives of an entity
* [getEntities](#getentities) - Get Entities
* [getConstraintPermutationsForEntities](#getconstraintpermutationsforentities) - Get constraint permutations for entities
* [getDatasets](#getdatasets) - Get datasets
* [getQuestions](#getquestions) - Get questions
* [getSuggestions](#getsuggestions) - Get suggestions
* [getValuesForVariables](#getvaluesforvariables) - Get values for variables

## createAMap

Create a map

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAMapRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAMapRequest();
    $request->xAppToken = 'nulla';
    $request->appToken = 'corrupti';
    $request->constraint = 'illum';
    $request->entityId = 'vel';
    $request->variable = 'error';

    $response = $sdk->sdk->createAMap($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findAllAvailableDataForSomeEntities

Find all available data for some entities

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindAllAvailableDataForSomeEntitiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindAllAvailableDataForSomeEntitiesRequest();
    $request->xAppToken = 'deserunt';
    $request->appToken = 'suscipit';
    $request->entityId = 'iure';

    $response = $sdk->sdk->findAllAvailableDataForSomeEntities($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findTheRelativesOfAnEntity

Find the relatives of an entity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindTheRelativesOfAnEntityRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindTheRelativesOfAnEntityRelationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindTheRelativesOfAnEntityRequest();
    $request->xAppToken = 'magnam';
    $request->appToken = 'debitis';
    $request->entityId = 'ipsa';
    $request->limit = 9636.63;
    $request->relation = FindTheRelativesOfAnEntityRelationEnum::CHILD;
    $request->variableId = 'suscipit';

    $response = $sdk->sdk->findTheRelativesOfAnEntity($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEntities

Get Entities

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEntitiesRequest();
    $request->xAppToken = 'molestiae';
    $request->appToken = 'minus';
    $request->entityId = 'placeat';
    $request->entityName = 'voluptatum';
    $request->entityType = 'iusto';

    $response = $sdk->sdk->getEntities($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConstraintPermutationsForEntities

Get constraint permutations for entities

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConstraintPermutationsForEntitiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConstraintPermutationsForEntitiesRequest();
    $request->xAppToken = 'excepturi';
    $request->appToken = 'nisi';
    $request->constraint = 'recusandae';
    $request->entityId = 'temporibus';
    $request->variable = 'ab';

    $response = $sdk->sdk->getConstraintPermutationsForEntities($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatasets

Get datasets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDatasetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatasetsRequest();
    $request->xAppToken = 'quis';
    $request->appToken = 'veritatis';
    $request->datasetId = 'deserunt';
    $request->entityId = 'perferendis';
    $request->limit = 3682.41;
    $request->offset = 8326.2;

    $response = $sdk->sdk->getDatasets($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuestions

Get questions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuestionsRequest();
    $request->xAppToken = 'sapiente';
    $request->appToken = 'quo';
    $request->limit = 1403.5;
    $request->offset = 8700.13;
    $request->query = 'at';

    $response = $sdk->sdk->getQuestions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSuggestions

Get suggestions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSuggestionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSuggestionsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSuggestionsRequest();
    $request->xAppToken = 'maiores';
    $request->appToken = 'molestiae';
    $request->limit = 7991.59;
    $request->query = 'quod';
    $request->type = GetSuggestionsTypeEnum::PUBLISHER;
    $request->variableId = 'totam';

    $response = $sdk->sdk->getSuggestions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getValuesForVariables

Get values for variables

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetValuesForVariablesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetValuesForVariablesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetValuesForVariablesRequest();
    $request->xAppToken = 'porro';
    $request->appToken = 'dolorum';
    $request->describe = false;
    $request->entityId = 'dicta';
    $request->forecast = 7206.33;
    $request->format = GetValuesForVariablesFormatEnum::GOOGLE;
    $request->variable = 'officia';

    $response = $sdk->sdk->getValuesForVariables($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
