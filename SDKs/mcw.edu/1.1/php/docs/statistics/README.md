# statistics

## Overview

Stats Web Service

### Available Operations

* [getActiveObjectCountUsingGET](#getactiveobjectcountusingget) - Count of active objects by type, for specified species and date
* [getActiveObjectDiffUsingGET](#getactiveobjectdiffusingget) - Count difference of active objects, by type, for specified species and date range
* [getGeneTypeCountUsingGET](#getgenetypecountusingget) - Count of gene types, for specified species and date
* [getGeneTypeDiffUsingGET](#getgenetypediffusingget) - Count difference of gene types, for specified species and date range
* [getObjectStatusCountUsingGET](#getobjectstatuscountusingget) - Count of objects with given status, for specified species and date
* [getObjectStatusDiffUsingGET](#getobjectstatusdiffusingget) - Count difference of objects with given status, for specified species and date range
* [getObjectsWithRefSeqCountUsingGET](#getobjectswithrefseqcountusingget) - Count of objects with reference sequence(s), by object type, for specified species and date
* [getObjectsWithRefSeqDiffUsingGET](#getobjectswithrefseqdiffusingget) - Count difference of objects with reference sequence(s), by object type, for specified species and date range
* [getObjectsWithReferenceCountUsingGET](#getobjectswithreferencecountusingget) - Count of objects with reference, by object type, for specified species and date
* [getObjectsWithReferenceDiffUsingGET](#getobjectswithreferencediffusingget) - Count difference of objects with reference, by object type, for specified species and date range
* [getObjectsWithXDBsCountUsingGET](#getobjectswithxdbscountusingget) - Count of objects with external database ids, by database id, for specified species, object type and date
* [getObjectsWithXDBsDiffUsingGET](#getobjectswithxdbsdiffusingget) - Count difference of objects with external database ids, by database id, for specified species, object type and date range
* [getProteinInteractionCountUsingGET](#getproteininteractioncountusingget) - Count of protein interactions, for specified species and date
* [getProteinInteractionDiffUsingGET](#getproteininteractiondiffusingget) - Count difference of protein interactions, for specified species and date range
* [getQtlInheritanceTypeCountUsingGET](#getqtlinheritancetypecountusingget) - Count of strains, by qtl inheritance type, for specified species and date
* [getQtlInheritanceTypeDiffUsingGET](#getqtlinheritancetypediffusingget) - Count difference of strains, by qtl inheritance type, for specified species and date range
* [getRetiredObjectCountUsingGET](#getretiredobjectcountusingget) - Count of retired objects by type, for specified species and date
* [getRetiredObjectDiffUsingGET](#getretiredobjectdiffusingget) - Count difference of retired objects, by type, for specified species and date range
* [getStrainTypeCountUsingGET](#getstraintypecountusingget) - Count of strain types, for specified species and date
* [getStrainTypeDiffUsingGET](#getstraintypediffusingget) - Count difference of strain types, for specified species and date range
* [getTermStatsUsingGET](#gettermstatsusingget) - getTermStats
* [getWithdrawnObjectCountUsingGET](#getwithdrawnobjectcountusingget) - Count of withdrawn objects by type, for specified species and date
* [getWithdrawnObjectDiffUsingGET](#getwithdrawnobjectdiffusingget) - Count difference of withdrawn objects, by type, for specified species and date range
* [getXdbsCountUsingGET](#getxdbscountusingget) - Count of external database ids, for specied species and date
* [getXdbsDiffUsingGET](#getxdbsdiffusingget) - Count difference of external database ids, for specified species and date range

## getActiveObjectCountUsingGET

Count of active objects by type, for specified species and date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETActiveObjectCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETActiveObjectCountUsingGETRequest();
    $request->dateYYYYMMDD = 'enim';
    $request->speciesTypeKey = 880476;

    $response = $sdk->statistics->getActiveObjectCountUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActiveObjectDiffUsingGET

Count difference of active objects, by type, for specified species and date range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETActiveObjectDiffUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETActiveObjectDiffUsingGETRequest();
    $request->dateFromYYYYMMDD = 'commodi';
    $request->dateToYYYYMMDD = 'repudiandae';
    $request->speciesTypeKey = 64147;

    $response = $sdk->statistics->getActiveObjectDiffUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneTypeCountUsingGET

Count of gene types, for specified species and date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGeneTypeCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGeneTypeCountUsingGETRequest();
    $request->dateYYYYMMDD = 'ipsum';
    $request->speciesTypeKey = 692472;

    $response = $sdk->statistics->getGeneTypeCountUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneTypeDiffUsingGET

Count difference of gene types, for specified species and date range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGeneTypeDiffUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGeneTypeDiffUsingGETRequest();
    $request->dateFromYYYYMMDD = 'molestias';
    $request->dateToYYYYMMDD = 'excepturi';
    $request->speciesTypeKey = 865103;

    $response = $sdk->statistics->getGeneTypeDiffUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getObjectStatusCountUsingGET

Count of objects with given status, for specified species and date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETObjectStatusCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETObjectStatusCountUsingGETRequest();
    $request->dateYYYYMMDD = 'modi';
    $request->speciesTypeKey = 508969;

    $response = $sdk->statistics->getObjectStatusCountUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getObjectStatusDiffUsingGET

Count difference of objects with given status, for specified species and date range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETObjectStatusDiffUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETObjectStatusDiffUsingGETRequest();
    $request->dateFromYYYYMMDD = 'rem';
    $request->dateToYYYYMMDD = 'voluptates';
    $request->speciesTypeKey = 93940;

    $response = $sdk->statistics->getObjectStatusDiffUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getObjectsWithRefSeqCountUsingGET

Count of objects with reference sequence(s), by object type, for specified species and date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETObjectsWithRefSeqCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETObjectsWithRefSeqCountUsingGETRequest();
    $request->dateYYYYMMDD = 'repudiandae';
    $request->speciesTypeKey = 575947;

    $response = $sdk->statistics->getObjectsWithRefSeqCountUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getObjectsWithRefSeqDiffUsingGET

Count difference of objects with reference sequence(s), by object type, for specified species and date range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETObjectsWithRefSeqDiffUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETObjectsWithRefSeqDiffUsingGETRequest();
    $request->dateFromYYYYMMDD = 'veritatis';
    $request->dateToYYYYMMDD = 'itaque';
    $request->speciesTypeKey = 277718;

    $response = $sdk->statistics->getObjectsWithRefSeqDiffUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getObjectsWithReferenceCountUsingGET

Count of objects with reference, by object type, for specified species and date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETObjectsWithReferenceCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETObjectsWithReferenceCountUsingGETRequest();
    $request->dateYYYYMMDD = 'enim';
    $request->speciesTypeKey = 9356;

    $response = $sdk->statistics->getObjectsWithReferenceCountUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getObjectsWithReferenceDiffUsingGET

Count difference of objects with reference, by object type, for specified species and date range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETObjectsWithReferenceDiffUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETObjectsWithReferenceDiffUsingGETRequest();
    $request->dateFromYYYYMMDD = 'est';
    $request->dateToYYYYMMDD = 'quibusdam';
    $request->speciesTypeKey = 131797;

    $response = $sdk->statistics->getObjectsWithReferenceDiffUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getObjectsWithXDBsCountUsingGET

Count of objects with external database ids, by database id, for specified species, object type and date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETObjectsWithXDBsCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETObjectsWithXDBsCountUsingGETRequest();
    $request->dateYYYYMMDD = 'deserunt';
    $request->objectKey = 716327;
    $request->speciesTypeKey = 841386;

    $response = $sdk->statistics->getObjectsWithXDBsCountUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getObjectsWithXDBsDiffUsingGET

Count difference of objects with external database ids, by database id, for specified species, object type and date range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETObjectsWithXDBsDiffUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETObjectsWithXDBsDiffUsingGETRequest();
    $request->dateFromYYYYMMDD = 'labore';
    $request->dateToYYYYMMDD = 'modi';
    $request->objectKey = 183191;
    $request->speciesTypeKey = 397821;

    $response = $sdk->statistics->getObjectsWithXDBsDiffUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProteinInteractionCountUsingGET

Count of protein interactions, for specified species and date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETProteinInteractionCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETProteinInteractionCountUsingGETRequest();
    $request->dateYYYYMMDD = 'cupiditate';
    $request->speciesTypeKey = 552822;

    $response = $sdk->statistics->getProteinInteractionCountUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProteinInteractionDiffUsingGET

Count difference of protein interactions, for specified species and date range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETProteinInteractionDiffUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETProteinInteractionDiffUsingGETRequest();
    $request->dateFromYYYYMMDD = 'perferendis';
    $request->dateToYYYYMMDD = 'magni';
    $request->speciesTypeKey = 828940;

    $response = $sdk->statistics->getProteinInteractionDiffUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQtlInheritanceTypeCountUsingGET

Count of strains, by qtl inheritance type, for specified species and date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETQtlInheritanceTypeCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETQtlInheritanceTypeCountUsingGETRequest();
    $request->dateYYYYMMDD = 'ipsam';
    $request->speciesTypeKey = 4695;

    $response = $sdk->statistics->getQtlInheritanceTypeCountUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQtlInheritanceTypeDiffUsingGET

Count difference of strains, by qtl inheritance type, for specified species and date range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETQtlInheritanceTypeDiffUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETQtlInheritanceTypeDiffUsingGETRequest();
    $request->dateFromYYYYMMDD = 'fugit';
    $request->dateToYYYYMMDD = 'dolorum';
    $request->speciesTypeKey = 569618;

    $response = $sdk->statistics->getQtlInheritanceTypeDiffUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRetiredObjectCountUsingGET

Count of retired objects by type, for specified species and date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETRetiredObjectCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRetiredObjectCountUsingGETRequest();
    $request->dateYYYYMMDD = 'tempora';
    $request->speciesTypeKey = 703737;

    $response = $sdk->statistics->getRetiredObjectCountUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRetiredObjectDiffUsingGET

Count difference of retired objects, by type, for specified species and date range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETRetiredObjectDiffUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRetiredObjectDiffUsingGETRequest();
    $request->dateFromYYYYMMDD = 'tempore';
    $request->dateToYYYYMMDD = 'labore';
    $request->speciesTypeKey = 962189;

    $response = $sdk->statistics->getRetiredObjectDiffUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStrainTypeCountUsingGET

Count of strain types, for specified species and date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETStrainTypeCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStrainTypeCountUsingGETRequest();
    $request->dateYYYYMMDD = 'eum';
    $request->speciesTypeKey = 248753;

    $response = $sdk->statistics->getStrainTypeCountUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStrainTypeDiffUsingGET

Count difference of strain types, for specified species and date range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETStrainTypeDiffUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStrainTypeDiffUsingGETRequest();
    $request->dateFromYYYYMMDD = 'eligendi';
    $request->dateToYYYYMMDD = 'sint';
    $request->speciesTypeKey = 396098;

    $response = $sdk->statistics->getStrainTypeDiffUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTermStatsUsingGET

getTermStats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETTermStatsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETTermStatsUsingGETRequest();
    $request->accId = 'provident';
    $request->filterAccId = 'necessitatibus';

    $response = $sdk->statistics->getTermStatsUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWithdrawnObjectCountUsingGET

Count of withdrawn objects by type, for specified species and date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETWithdrawnObjectCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETWithdrawnObjectCountUsingGETRequest();
    $request->dateYYYYMMDD = 'sint';
    $request->speciesTypeKey = 638921;

    $response = $sdk->statistics->getWithdrawnObjectCountUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWithdrawnObjectDiffUsingGET

Count difference of withdrawn objects, by type, for specified species and date range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETWithdrawnObjectDiffUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETWithdrawnObjectDiffUsingGETRequest();
    $request->dateFromYYYYMMDD = 'dolor';
    $request->dateToYYYYMMDD = 'debitis';
    $request->speciesTypeKey = 952749;

    $response = $sdk->statistics->getWithdrawnObjectDiffUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getXdbsCountUsingGET

Count of external database ids, for specied species and date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETXdbsCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETXdbsCountUsingGETRequest();
    $request->dateYYYYMMDD = 'dolorum';
    $request->speciesTypeKey = 447125;

    $response = $sdk->statistics->getXdbsCountUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getXdbsDiffUsingGET

Count difference of external database ids, for specified species and date range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETXdbsDiffUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETXdbsDiffUsingGETRequest();
    $request->dateFromYYYYMMDD = 'in';
    $request->dateToYYYYMMDD = 'illum';
    $request->speciesTypeKey = 978571;

    $response = $sdk->statistics->getXdbsDiffUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
