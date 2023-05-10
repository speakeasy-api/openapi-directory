# association

## Overview

Retrieve associations between entities or entity and descriptors

### Available Operations

* [getAssociationBySubjectAndAssocType](#getassociationbysubjectandassoctype) - Returns list of matching associations of a given type
* [getAssociationBySubjectAndObjectCategorySearch](#getassociationbysubjectandobjectcategorysearch) - Returns list of matching associations between a given subject and object category
* [getAssociationBySubjectCategorySearch](#getassociationbysubjectcategorysearch) - Returns list of matching associations for a given subject category
* [getAssociationObject](#getassociationobject) - Returns the association with a given identifier
* [getAssociationsBetween](#getassociationsbetween) - Returns associations connecting two entities
* [getAssociationsFrom](#getassociationsfrom) - Returns list of matching associations starting from a given subject (source)
* [getAssociationsTo](#getassociationsto) - Returns list of matching associations pointing to a given object (target)

## getAssociationBySubjectAndAssocType

Returns list of matching associations of a given type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationBySubjectAndAssocTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociationBySubjectAndAssocTypeRequest();
    $request->associationType = 'corrupti';
    $request->evidence = 'illum';
    $request->excludeAutomaticAssertions = false;
    $request->object = 'vel';
    $request->rows = 623564;
    $request->start = 645894;
    $request->subject = 'suscipit';
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->association->getAssociationBySubjectAndAssocType($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssociationBySubjectAndObjectCategorySearch

Returns list of matching associations between a given subject and object category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationBySubjectAndObjectCategorySearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociationBySubjectAndObjectCategorySearchRequest();
    $request->evidence = 'iure';
    $request->excludeAutomaticAssertions = false;
    $request->object = 'magnam';
    $request->objectCategory = 'debitis';
    $request->objectTaxon = 'ipsa';
    $request->relation = 'delectus';
    $request->rows = 272656;
    $request->start = 383441;
    $request->subject = 'molestiae';
    $request->subjectCategory = 'minus';
    $request->subjectTaxon = 'placeat';
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->association->getAssociationBySubjectAndObjectCategorySearch($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssociationBySubjectCategorySearch

Returns list of matching associations for a given subject category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationBySubjectCategorySearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociationBySubjectCategorySearchRequest();
    $request->evidence = 'voluptatum';
    $request->excludeAutomaticAssertions = false;
    $request->objectTaxon = 'iusto';
    $request->relation = 'excepturi';
    $request->rows = 392785;
    $request->start = 925597;
    $request->subjectCategory = 'temporibus';
    $request->subjectTaxon = 'ab';
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->association->getAssociationBySubjectCategorySearch($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssociationObject

An association connects, at a minimum, two things, designated subject and object,
via some relationship. Associations also include evidence, provenance etc.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociationObjectRequest();
    $request->id = '51a05dfc-2ddf-47cc-b8ca-1ba928fc8167';

    $response = $sdk->association->getAssociationObject($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssociationsBetween

Given two entities (e.g. a particular gene and a particular disease), if these two entities
are connected (directly or indirectly), then return the association objects describing
the connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationsBetweenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociationsBetweenRequest();
    $request->evidence = 'modi';
    $request->excludeAutomaticAssertions = false;
    $request->object = 'qui';
    $request->rows = 774234;
    $request->start = 736918;
    $request->subject = 'esse';
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->association->getAssociationsBetween($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssociationsFrom

Returns list of matching associations starting from a given subject (source)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationsFromRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociationsFromRequest();
    $request->evidence = 'ipsum';
    $request->excludeAutomaticAssertions = false;
    $request->objectTaxon = 'excepturi';
    $request->relation = 'aspernatur';
    $request->rows = 18789;
    $request->start = 324141;
    $request->subject = 'natus';
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->association->getAssociationsFrom($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssociationsTo

Returns list of matching associations pointing to a given object (target)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationsToRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociationsToRequest();
    $request->evidence = 'sed';
    $request->excludeAutomaticAssertions = false;
    $request->object = 'iste';
    $request->rows = 222321;
    $request->start = 616934;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->association->getAssociationsTo($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
