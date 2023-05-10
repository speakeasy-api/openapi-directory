# filters

## Overview

differents requests to filter cards

### Available Operations

* [getCategories](#getcategories)
* [getCategoriesCategory](#getcategoriescategory)
* [getDexIds](#getdexids)
* [getDexIdsDexId](#getdexidsdexid)
* [getEnergyTypes](#getenergytypes)
* [getEnergyTypesEnergyType](#getenergytypesenergytype)
* [getHp](#gethp)
* [getHpHp](#gethphp)
* [getIllustrators](#getillustrators)
* [getIllustratorsIllustrator](#getillustratorsillustrator)
* [getRarities](#getrarities)
* [getRaritiesRarity](#getraritiesrarity)
* [getRegulationMarks](#getregulationmarks)
* [getRegulationMarksRegulationMark](#getregulationmarksregulationmark)
* [getRetreats](#getretreats)
* [getRetreatsRetreat](#getretreatsretreat)
* [getSeries](#getseries)
* [getSeriesSerie](#getseriesserie)
* [getSets](#getsets)
* [getSetsSet](#getsetsset)
* [getStages](#getstages)
* [getStagesStage](#getstagesstage)
* [getSuffixes](#getsuffixes)
* [getSuffixesSuffix](#getsuffixessuffix)
* [getTrainerTypes](#gettrainertypes)
* [getTrainerTypesTrainerType](#gettrainertypestrainertype)
* [getTypes](#gettypes)
* [getTypesType](#gettypestype)
* [getVariants](#getvariants)
* [getVariantsVariant](#getvariantsvariant)

## getCategories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getCategories();

    if ($response->getCategories200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCategoriesCategory

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoriesCategoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCategoriesCategoryRequest();
    $request->category = 'quibusdam';

    $response = $sdk->filters->getCategoriesCategory($request);

    if ($response->stringEndpoint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDexIds

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getDexIds();

    if ($response->getDexIds200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDexIdsDexId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDexIdsDexIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDexIdsDexIdRequest();
    $request->dexId = 'unde';

    $response = $sdk->filters->getDexIdsDexId($request);

    if ($response->cardResumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnergyTypes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getEnergyTypes();

    if ($response->getEnergyTypes200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnergyTypesEnergyType

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEnergyTypesEnergyTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnergyTypesEnergyTypeRequest();
    $request->energyType = 'nulla';

    $response = $sdk->filters->getEnergyTypesEnergyType($request);

    if ($response->cardResumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHp

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getHp();

    if ($response->getHp200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHpHp

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHpHpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHpHpRequest();
    $request->hp = 'corrupti';

    $response = $sdk->filters->getHpHp($request);

    if ($response->stringEndpoint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIllustrators

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getIllustrators();

    if ($response->getIllustrators200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIllustratorsIllustrator

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIllustratorsIllustratorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIllustratorsIllustratorRequest();
    $request->illustrator = 'illum';

    $response = $sdk->filters->getIllustratorsIllustrator($request);

    if ($response->stringEndpoint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRarities

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getRarities();

    if ($response->getRarities200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRaritiesRarity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRaritiesRarityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRaritiesRarityRequest();
    $request->rarity = 'vel';

    $response = $sdk->filters->getRaritiesRarity($request);

    if ($response->stringEndpoint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegulationMarks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getRegulationMarks();

    if ($response->getRegulationMarks200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegulationMarksRegulationMark

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRegulationMarksRegulationMarkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRegulationMarksRegulationMarkRequest();
    $request->regulationMark = 'error';

    $response = $sdk->filters->getRegulationMarksRegulationMark($request);

    if ($response->cardResumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRetreats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getRetreats();

    if ($response->getRetreats200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRetreatsRetreat

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRetreatsRetreatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRetreatsRetreatRequest();
    $request->retreat = 'deserunt';

    $response = $sdk->filters->getRetreatsRetreat($request);

    if ($response->stringEndpoint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSeries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getSeries();

    if ($response->serieResumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSeriesSerie

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSeriesSerieRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSeriesSerieRequest();
    $request->serie = 'suscipit';

    $response = $sdk->filters->getSeriesSerie($request);

    if ($response->serie !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getSets();

    if ($response->setResumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetsSet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSetsSetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetsSetRequest();
    $request->set = 'iure';

    $response = $sdk->filters->getSetsSet($request);

    if ($response->set !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStages

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getStages();

    if ($response->getStages200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStagesStage

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStagesStageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStagesStageRequest();
    $request->stage = 'magnam';

    $response = $sdk->filters->getStagesStage($request);

    if ($response->cardResumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSuffixes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getSuffixes();

    if ($response->getSuffixes200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSuffixesSuffix

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSuffixesSuffixRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSuffixesSuffixRequest();
    $request->suffix = 'debitis';

    $response = $sdk->filters->getSuffixesSuffix($request);

    if ($response->cardResumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrainerTypes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getTrainerTypes();

    if ($response->getTrainerTypes200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrainerTypesTrainerType

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainerTypesTrainerTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrainerTypesTrainerTypeRequest();
    $request->trainerType = 'ipsa';

    $response = $sdk->filters->getTrainerTypesTrainerType($request);

    if ($response->cardResumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTypes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getTypes();

    if ($response->getTypes200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTypesType

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTypesTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTypesTypeRequest();
    $request->type = 'delectus';

    $response = $sdk->filters->getTypesType($request);

    if ($response->cardResumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariants

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->filters->getVariants();

    if ($response->getVariants200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantsVariant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantsVariantRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariantsVariantRequest();
    $request->variant = 'tempora';

    $response = $sdk->filters->getVariantsVariant($request);

    if ($response->cardResumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
