# personal

## Overview

Personal names (anthroponyms) : gender, country origin/ethnicity, diaspora, US 'race'/ethniciy

### Available Operations

* [corridor](#corridor) - [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
* [corridorBatch](#corridorbatch) - [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
* [country](#country) - [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
* [countryBatch](#countrybatch) - [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
* [diaspora](#diaspora) - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* [diasporaBatch](#diasporabatch) - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* [gender](#gender) - Infer the likely gender of a name.
* [genderBatch](#genderbatch) - Infer the likely gender of up to 100 names, detecting automatically the cultural context.
* [genderFull](#genderfull) - Infer the likely gender of a full name, ex. John H. Smith
* [genderFullBatch](#genderfullbatch) - Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
* [genderFullGeo](#genderfullgeo) - Infer the likely gender of a full name, given a local context (ISO2 country code).
* [genderFullGeoBatch](#genderfullgeobatch) - Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
* [genderGeo](#gendergeo) - Infer the likely gender of a name, given a local context (ISO2 country code).
* [genderGeoBatch](#gendergeobatch) - Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
* [gender1](#gender1) - Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.
* [origin](#origin) - [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
* [originBatch](#originbatch) - [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
* [parseName](#parsename) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 
* [parseNameBatch](#parsenamebatch) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
* [parseNameGeo](#parsenamegeo) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
* [parseNameGeoBatch](#parsenamegeobatch) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 
* [religionFull](#religionfull) - [USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).
* [religionFullBatch](#religionfullbatch) - [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.
* [subclassification](#subclassification) - [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [subclassificationBatch](#subclassificationbatch) - [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [subclassificationFull](#subclassificationfull) - [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [subclassificationFullBatch](#subclassificationfullbatch) - [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [usRaceEthnicity](#usraceethnicity) - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [usRaceEthnicityBatch](#usraceethnicitybatch) - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [usRaceEthnicityZip5](#usraceethnicityzip5) - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [usZipRaceEthnicityBatch](#uszipraceethnicitybatch) - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

## corridor

[USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CorridorRequest;
use \OpenAPI\OpenAPI\Models\Operations\CorridorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CorridorRequest();
    $request->countryIso2From = 'reiciendis';
    $request->countryIso2To = 'est';
    $request->firstNameFrom = 'mollitia';
    $request->firstNameTo = 'laborum';
    $request->lastNameFrom = 'dolores';
    $request->lastNameTo = 'dolorem';

    $requestSecurity = new CorridorSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->corridor($request, $requestSecurity);

    if ($response->corridorOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## corridorBatch

[USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchCorridorIn;
use \OpenAPI\OpenAPI\Models\Shared\CorridorIn;
use \OpenAPI\OpenAPI\Models\Shared\FirstLastNameGeoIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Operations\CorridorBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchCorridorIn();
    $request->corridorFromTo = [
        new CorridorIn(),
        new CorridorIn(),
    ];
    $request->facts = [
        new FactIn(),
    ];

    $requestSecurity = new CorridorBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->corridorBatch($request, $requestSecurity);

    if ($response->batchCorridorOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## country

[USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\CountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CountryRequest();
    $request->personalNameFull = 'nobis';

    $requestSecurity = new CountrySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->country($request, $requestSecurity);

    if ($response->personalNameGeoOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## countryBatch

[USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchPersonalNameIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\PersonalNameIn;
use \OpenAPI\OpenAPI\Models\Operations\CountryBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPersonalNameIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new PersonalNameIn(),
        new PersonalNameIn(),
        new PersonalNameIn(),
    ];

    $requestSecurity = new CountryBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->countryBatch($request, $requestSecurity);

    if ($response->batchPersonalNameGeoOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaspora

[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DiasporaRequest;
use \OpenAPI\OpenAPI\Models\Operations\DiasporaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiasporaRequest();
    $request->countryIso2 = 'nemo';
    $request->firstName = 'Era';
    $request->lastName = 'Marks';

    $requestSecurity = new DiasporaSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->diaspora($request, $requestSecurity);

    if ($response->firstLastNameDiasporaedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diasporaBatch

[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchFirstLastNameGeoIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\FirstLastNameGeoIn;
use \OpenAPI\OpenAPI\Models\Operations\DiasporaBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchFirstLastNameGeoIn();
    $request->facts = [
        new FactIn(),
    ];
    $request->personalNames = [
        new FirstLastNameGeoIn(),
        new FirstLastNameGeoIn(),
    ];

    $requestSecurity = new DiasporaBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->diasporaBatch($request, $requestSecurity);

    if ($response->batchFirstLastNameDiasporaedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gender

Infer the likely gender of a name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GenderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenderRequest();
    $request->firstName = 'Lorenza';
    $request->lastName = 'Yundt';

    $requestSecurity = new GenderSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->gender($request, $requestSecurity);

    if ($response->firstLastNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderBatch

Infer the likely gender of up to 100 names, detecting automatically the cultural context.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchFirstLastNameIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\FirstLastNameIn;
use \OpenAPI\OpenAPI\Models\Operations\GenderBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchFirstLastNameIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new FirstLastNameIn(),
    ];

    $requestSecurity = new GenderBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->genderBatch($request, $requestSecurity);

    if ($response->batchFirstLastNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderFull

Infer the likely gender of a full name, ex. John H. Smith

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenderFullRequest;
use \OpenAPI\OpenAPI\Models\Operations\GenderFullSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenderFullRequest();
    $request->fullName = 'mollitia';

    $requestSecurity = new GenderFullSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->genderFull($request, $requestSecurity);

    if ($response->personalNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderFullBatch

Infer the likely gender of up to 100 full names, detecting automatically the cultural context.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchPersonalNameIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\PersonalNameIn;
use \OpenAPI\OpenAPI\Models\Operations\GenderFullBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPersonalNameIn();
    $request->facts = [
        new FactIn(),
    ];
    $request->personalNames = [
        new PersonalNameIn(),
        new PersonalNameIn(),
        new PersonalNameIn(),
    ];

    $requestSecurity = new GenderFullBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->genderFullBatch($request, $requestSecurity);

    if ($response->batchPersonalNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderFullGeo

Infer the likely gender of a full name, given a local context (ISO2 country code).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenderFullGeoRequest;
use \OpenAPI\OpenAPI\Models\Operations\GenderFullGeoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenderFullGeoRequest();
    $request->countryIso2 = 'consequuntur';
    $request->fullName = 'repellat';

    $requestSecurity = new GenderFullGeoSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->genderFullGeo($request, $requestSecurity);

    if ($response->personalNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderFullGeoBatch

Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchPersonalNameGeoIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\PersonalNameGeoIn;
use \OpenAPI\OpenAPI\Models\Operations\GenderFullGeoBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPersonalNameGeoIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new PersonalNameGeoIn(),
        new PersonalNameGeoIn(),
        new PersonalNameGeoIn(),
    ];

    $requestSecurity = new GenderFullGeoBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->genderFullGeoBatch($request, $requestSecurity);

    if ($response->batchPersonalNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderGeo

Infer the likely gender of a name, given a local context (ISO2 country code).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenderGeoRequest;
use \OpenAPI\OpenAPI\Models\Operations\GenderGeoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenderGeoRequest();
    $request->countryIso2 = 'numquam';
    $request->firstName = 'Harvey';
    $request->lastName = 'Konopelski';

    $requestSecurity = new GenderGeoSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->genderGeo($request, $requestSecurity);

    if ($response->firstLastNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderGeoBatch

Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchFirstLastNameGeoIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\FirstLastNameGeoIn;
use \OpenAPI\OpenAPI\Models\Operations\GenderGeoBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchFirstLastNameGeoIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new FirstLastNameGeoIn(),
    ];

    $requestSecurity = new GenderGeoBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->genderGeoBatch($request, $requestSecurity);

    if ($response->batchFirstLastNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gender1

Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Gender1Request;
use \OpenAPI\OpenAPI\Models\Operations\Gender1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Gender1Request();
    $request->firstName = 'Linda';

    $requestSecurity = new Gender1Security();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->gender1($request, $requestSecurity);

    if ($response->firstLastNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## origin

[USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OriginRequest;
use \OpenAPI\OpenAPI\Models\Operations\OriginSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OriginRequest();
    $request->firstName = 'Carmelo';
    $request->lastName = 'Hauck';

    $requestSecurity = new OriginSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->origin($request, $requestSecurity);

    if ($response->firstLastNameOriginedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## originBatch

[USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchFirstLastNameIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\FirstLastNameIn;
use \OpenAPI\OpenAPI\Models\Operations\OriginBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchFirstLastNameIn();
    $request->facts = [
        new FactIn(),
    ];
    $request->personalNames = [
        new FirstLastNameIn(),
        new FirstLastNameIn(),
        new FirstLastNameIn(),
    ];

    $requestSecurity = new OriginBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->originBatch($request, $requestSecurity);

    if ($response->batchFirstLastNameOriginedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## parseName

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ParseNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\ParseNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ParseNameRequest();
    $request->nameFull = 'animi';

    $requestSecurity = new ParseNameSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->parseName($request, $requestSecurity);

    if ($response->personalNameParsedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## parseNameBatch

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchPersonalNameIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\PersonalNameIn;
use \OpenAPI\OpenAPI\Models\Operations\ParseNameBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPersonalNameIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new PersonalNameIn(),
    ];

    $requestSecurity = new ParseNameBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->parseNameBatch($request, $requestSecurity);

    if ($response->batchPersonalNameParsedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## parseNameGeo

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ParseNameGeoRequest;
use \OpenAPI\OpenAPI\Models\Operations\ParseNameGeoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ParseNameGeoRequest();
    $request->countryIso2 = 'quo';
    $request->nameFull = 'sequi';

    $requestSecurity = new ParseNameGeoSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->parseNameGeo($request, $requestSecurity);

    if ($response->personalNameParsedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## parseNameGeoBatch

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchPersonalNameGeoIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\PersonalNameGeoIn;
use \OpenAPI\OpenAPI\Models\Operations\ParseNameGeoBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPersonalNameGeoIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new PersonalNameGeoIn(),
        new PersonalNameGeoIn(),
    ];

    $requestSecurity = new ParseNameGeoBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->parseNameGeoBatch($request, $requestSecurity);

    if ($response->batchPersonalNameParsedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## religionFull

[USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReligionFullRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReligionFullSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReligionFullRequest();
    $request->countryIso2 = 'id';
    $request->personalNameFull = 'possimus';
    $request->subDivisionIso31662 = 'aut';

    $requestSecurity = new ReligionFullSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->religionFull($request, $requestSecurity);

    if ($response->personalNameReligionedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## religionFullBatch

[USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchPersonalNameGeoSubdivisionIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\PersonalNameGeoSubdivisionIn;
use \OpenAPI\OpenAPI\Models\Operations\ReligionFullBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPersonalNameGeoSubdivisionIn();
    $request->facts = [
        new FactIn(),
    ];
    $request->personalNames = [
        new PersonalNameGeoSubdivisionIn(),
        new PersonalNameGeoSubdivisionIn(),
        new PersonalNameGeoSubdivisionIn(),
    ];

    $requestSecurity = new ReligionFullBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->religionFullBatch($request, $requestSecurity);

    if ($response->batchPersonalNameReligionedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subclassification

[USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubclassificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\SubclassificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubclassificationRequest();
    $request->countryIso2 = 'temporibus';
    $request->firstName = 'Margie';
    $request->lastName = 'Boyer';

    $requestSecurity = new SubclassificationSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->subclassification($request, $requestSecurity);

    if ($response->firstLastNameGeoSubclassificationOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subclassificationBatch

[USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchFirstLastNameGeoIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\FirstLastNameGeoIn;
use \OpenAPI\OpenAPI\Models\Operations\SubclassificationBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchFirstLastNameGeoIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new FirstLastNameGeoIn(),
        new FirstLastNameGeoIn(),
        new FirstLastNameGeoIn(),
        new FirstLastNameGeoIn(),
    ];

    $requestSecurity = new SubclassificationBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->subclassificationBatch($request, $requestSecurity);

    if ($response->batchFirstLastNameGeoSubclassificationOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subclassificationFull

[USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubclassificationFullRequest;
use \OpenAPI\OpenAPI\Models\Operations\SubclassificationFullSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubclassificationFullRequest();
    $request->countryIso2 = 'vero';
    $request->fullName = 'nihil';

    $requestSecurity = new SubclassificationFullSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->subclassificationFull($request, $requestSecurity);

    if ($response->firstLastNameGeoSubclassificationOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subclassificationFullBatch

[USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchPersonalNameGeoIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\PersonalNameGeoIn;
use \OpenAPI\OpenAPI\Models\Operations\SubclassificationFullBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPersonalNameGeoIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new PersonalNameGeoIn(),
        new PersonalNameGeoIn(),
        new PersonalNameGeoIn(),
        new PersonalNameGeoIn(),
    ];

    $requestSecurity = new SubclassificationFullBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->subclassificationFullBatch($request, $requestSecurity);

    if ($response->batchPersonalNameGeoSubclassificationOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usRaceEthnicity

[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UsRaceEthnicityRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsRaceEthnicitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsRaceEthnicityRequest();
    $request->firstName = 'Ana';
    $request->lastName = 'Moen';

    $requestSecurity = new UsRaceEthnicitySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->usRaceEthnicity($request, $requestSecurity);

    if ($response->firstLastNameUSRaceEthnicityOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usRaceEthnicityBatch

[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchFirstLastNameGeoIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\FirstLastNameGeoIn;
use \OpenAPI\OpenAPI\Models\Operations\UsRaceEthnicityBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchFirstLastNameGeoIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new FirstLastNameGeoIn(),
        new FirstLastNameGeoIn(),
        new FirstLastNameGeoIn(),
    ];

    $requestSecurity = new UsRaceEthnicityBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->usRaceEthnicityBatch($request, $requestSecurity);

    if ($response->batchFirstLastNameUSRaceEthnicityOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usRaceEthnicityZip5

[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UsRaceEthnicityZip5Request;
use \OpenAPI\OpenAPI\Models\Operations\UsRaceEthnicityZip5Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsRaceEthnicityZip5Request();
    $request->firstName = 'Aiyana';
    $request->lastName = 'Batz';
    $request->zip5Code = 'reprehenderit';

    $requestSecurity = new UsRaceEthnicityZip5Security();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->usRaceEthnicityZip5($request, $requestSecurity);

    if ($response->firstLastNameUSRaceEthnicityOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usZipRaceEthnicityBatch

[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchFirstLastNameGeoZippedIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\FirstLastNameGeoZippedIn;
use \OpenAPI\OpenAPI\Models\Operations\UsZipRaceEthnicityBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchFirstLastNameGeoZippedIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new FirstLastNameGeoZippedIn(),
        new FirstLastNameGeoZippedIn(),
        new FirstLastNameGeoZippedIn(),
        new FirstLastNameGeoZippedIn(),
    ];

    $requestSecurity = new UsZipRaceEthnicityBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->personal->usZipRaceEthnicityBatch($request, $requestSecurity);

    if ($response->batchFirstLastNameUSRaceEthnicityOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
