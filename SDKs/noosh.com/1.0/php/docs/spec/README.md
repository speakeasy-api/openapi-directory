# spec

### Available Operations

* [getProductTypeListOfWorkgroup](#getproducttypelistofworkgroup) - Get product type of workgroup level
* [getSpec](#getspec) - List a specific spec of project Level
* [getSpecList](#getspeclist) - List specs of project Level
* [getSpecProductTypeListOfWorkgroup](#getspecproducttypelistofworkgroup) - Get product type of spec level by workgroupId
* [getSpecTypeFields](#getspectypefields) - Get Spec Type Fields
* [getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId](#getv1workgroupsworkgroupidprojectsprojectidspecsspecid) - List a specific spec of project Level
* [getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields](#getv1workgroupsworkgroupidspectypesspectypeidspectypefields) - Get Spec Type Fields
* [postSpecProductTypeListOfWorkgroupJson](#postspecproducttypelistofworkgroupjson) - Register product types for spec types
* [postSpecProductTypeListOfWorkgroupRaw](#postspecproducttypelistofworkgroupraw) - Register product types for spec types
* [postSpecJson](#postspecjson) - Create a Spec
* [postSpecRaw](#postspecraw) - Create a Spec
* [putSpecJson](#putspecjson) - Update a specific Spec
* [putSpecRaw](#putspecraw) - Update a specific Spec
* [putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJson](#putv1workgroupsworkgroupidprojectsprojectidspecsspecidjson) - Update a specific Spec
* [putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRaw](#putv1workgroupsworkgroupidprojectsprojectidspecsspecidraw) - Update a specific Spec

## getProductTypeListOfWorkgroup

Get product type of workgroup level

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductTypeListOfWorkgroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductTypeListOfWorkgroupRequest();
    $request->workgroupId = 'eligendi';

    $response = $sdk->spec->getProductTypeListOfWorkgroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpec

List a specific spec of project Level

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSpecRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpecRequest();
    $request->projectId = 'sint';
    $request->specId = 'aliquid';
    $request->workgroupId = 'provident';

    $response = $sdk->spec->getSpec($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpecList

List specs of project Level

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSpecListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpecListRequest();
    $request->projectId = 'necessitatibus';
    $request->workgroupId = 'sint';

    $response = $sdk->spec->getSpecList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpecProductTypeListOfWorkgroup

Get product type of spec level by workgroupId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSpecProductTypeListOfWorkgroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpecProductTypeListOfWorkgroupRequest();
    $request->workgroupId = 'officia';

    $response = $sdk->spec->getSpecProductTypeListOfWorkgroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpecTypeFields

Get Spec Type Fields

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSpecTypeFieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpecTypeFieldsRequest();
    $request->specTypeId = 'dolor';
    $request->workgroupId = 'debitis';

    $response = $sdk->spec->getSpecTypeFields($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId

List a specific spec of project Level

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest();
    $request->projectId = 'a';
    $request->specId = 'dolorum';
    $request->workgroupId = 'in';

    $response = $sdk->spec->getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields

Get Spec Type Fields

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest();
    $request->specTypeId = 'in';
    $request->workgroupId = 'illum';

    $response = $sdk->spec->getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSpecProductTypeListOfWorkgroupJson

Register product types for spec types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostSpecProductTypeListOfWorkgroupJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\WgSpecPrdTypeRegPersistVO;
use \OpenAPI\OpenAPI\Models\Shared\SpecTypePersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSpecProductTypeListOfWorkgroupJsonRequest();
    $request->wgSpecPrdTypeRegPersistVO = new WgSpecPrdTypeRegPersistVO();
    $request->wgSpecPrdTypeRegPersistVO->enableDifferentiatePrdTypePreference = true;
    $request->wgSpecPrdTypeRegPersistVO->specPrdTypeList = [
        new SpecTypePersistVO(),
        new SpecTypePersistVO(),
        new SpecTypePersistVO(),
        new SpecTypePersistVO(),
    ];
    $request->workgroupId = 'rerum';

    $response = $sdk->spec->postSpecProductTypeListOfWorkgroupJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSpecProductTypeListOfWorkgroupRaw

Register product types for spec types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostSpecProductTypeListOfWorkgroupRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSpecProductTypeListOfWorkgroupRawRequest();
    $request->requestBody = 'dicta';
    $request->workgroupId = 'magnam';

    $response = $sdk->spec->postSpecProductTypeListOfWorkgroupRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSpecJson

Create a Spec

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostSpecJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\SpecPersistVO;
use \OpenAPI\OpenAPI\Models\Shared\SpecVersionPersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSpecJsonRequest();
    $request->specPersistVO = new SpecPersistVO();
    $request->specPersistVO->jsonBody = true;
    $request->specPersistVO->productTypeId = 1;
    $request->specPersistVO->quantity1 = 1;
    $request->specPersistVO->quantity2 = 1;
    $request->specPersistVO->quantity3 = 1;
    $request->specPersistVO->quantity4 = 1;
    $request->specPersistVO->quantity5 = 1;
    $request->specPersistVO->sku = 'sample sku';
    $request->specPersistVO->specName = 'sample spec_name';
    $request->specPersistVO->specTemplateId = 1;
    $request->specPersistVO->specTypeId = 1;
    $request->specPersistVO->versions = [
        new SpecVersionPersistVO(),
        new SpecVersionPersistVO(),
        new SpecVersionPersistVO(),
        new SpecVersionPersistVO(),
    ];
    $request->projectId = 'facere';
    $request->workgroupId = 'ea';

    $response = $sdk->spec->postSpecJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSpecRaw

Create a Spec

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostSpecRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSpecRawRequest();
    $request->requestBody = 'aliquid';
    $request->projectId = 'laborum';
    $request->workgroupId = 'accusamus';

    $response = $sdk->spec->postSpecRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSpecJson

Update a specific Spec

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutSpecJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\V1X1SpecUpdatingPO;
use \OpenAPI\OpenAPI\Models\Shared\V1x1ProperyPO;
use \OpenAPI\OpenAPI\Models\Shared\V1x1SpecPamAndAttPO;
use \OpenAPI\OpenAPI\Models\Shared\SpecVersionPersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSpecJsonRequest();
    $request->v1X1SpecUpdatingPO = new V1X1SpecUpdatingPO();
    $request->v1X1SpecUpdatingPO->firstLevelCustomFields = new V1x1ProperyPO();
    $request->v1X1SpecUpdatingPO->firstLevelCustomFields->propertyAttributes = [
        new V1x1SpecPamAndAttPO(),
    ];
    $request->v1X1SpecUpdatingPO->firstLevelCustomFields->propertyId = 1;
    $request->v1X1SpecUpdatingPO->firstLevelCustomFields->propertyName = 'sample property_name';
    $request->v1X1SpecUpdatingPO->headerCustomFields = new V1x1ProperyPO();
    $request->v1X1SpecUpdatingPO->headerCustomFields->propertyAttributes = [
        new V1x1SpecPamAndAttPO(),
        new V1x1SpecPamAndAttPO(),
        new V1x1SpecPamAndAttPO(),
    ];
    $request->v1X1SpecUpdatingPO->headerCustomFields->propertyId = 1;
    $request->v1X1SpecUpdatingPO->headerCustomFields->propertyName = 'sample property_name';
    $request->v1X1SpecUpdatingPO->productTypeId = 1;
    $request->v1X1SpecUpdatingPO->quantity1 = 1;
    $request->v1X1SpecUpdatingPO->quantity2 = 1;
    $request->v1X1SpecUpdatingPO->quantity3 = 1;
    $request->v1X1SpecUpdatingPO->quantity4 = 1;
    $request->v1X1SpecUpdatingPO->quantity5 = 1;
    $request->v1X1SpecUpdatingPO->secondLevelCustomFields = [
        new V1x1ProperyPO(),
        new V1x1ProperyPO(),
    ];
    $request->v1X1SpecUpdatingPO->sku = 'sample sku';
    $request->v1X1SpecUpdatingPO->specName = 'sample spec_name';
    $request->v1X1SpecUpdatingPO->specTypeId = 1;
    $request->v1X1SpecUpdatingPO->versions = [
        new SpecVersionPersistVO(),
        new SpecVersionPersistVO(),
        new SpecVersionPersistVO(),
        new SpecVersionPersistVO(),
    ];
    $request->projectId = 'delectus';
    $request->specId = 'quidem';
    $request->workgroupId = 'provident';

    $response = $sdk->spec->putSpecJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSpecRaw

Update a specific Spec

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutSpecRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSpecRawRequest();
    $request->requestBody = 'nam';
    $request->projectId = 'id';
    $request->specId = 'blanditiis';
    $request->workgroupId = 'deleniti';

    $response = $sdk->spec->putSpecRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJson

Update a specific Spec

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\SpecUpdatePersistVO;
use \OpenAPI\OpenAPI\Models\Shared\PropertyPersistVO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldPersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJsonRequest();
    $request->specUpdatePersistVO = new SpecUpdatePersistVO();
    $request->specUpdatePersistVO->inksAndPaper = [
        new PropertyPersistVO(),
        new PropertyPersistVO(),
        new PropertyPersistVO(),
        new PropertyPersistVO(),
    ];
    $request->specUpdatePersistVO->productTypeId = 1;
    $request->specUpdatePersistVO->quantity1 = 1;
    $request->specUpdatePersistVO->quantity2 = 1;
    $request->specUpdatePersistVO->quantity3 = 1;
    $request->specUpdatePersistVO->quantity4 = 1;
    $request->specUpdatePersistVO->quantity5 = 1;
    $request->specUpdatePersistVO->sku = 'sample sku';
    $request->specUpdatePersistVO->specName = 'sample spec_name';
    $request->projectId = 'amet';
    $request->specId = 'deserunt';
    $request->workgroupId = 'nisi';

    $response = $sdk->spec->putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRaw

Update a specific Spec

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRawRequest();
    $request->requestBody = 'vel';
    $request->projectId = 'natus';
    $request->specId = 'omnis';
    $request->workgroupId = 'molestiae';

    $response = $sdk->spec->putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
