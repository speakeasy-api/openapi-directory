# chinese

## Overview

CHINESE special features

### Available Operations

* [chineseNameCandidates](#chinesenamecandidates) - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
* [chineseNameCandidatesBatch](#chinesenamecandidatesbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* [chineseNameCandidatesGenderBatch](#chinesenamecandidatesgenderbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.
* [chineseNameGenderCandidates](#chinesenamegendercandidates) - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
* [chineseNameMatch](#chinesenamematch) - Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
* [chineseNameMatchBatch](#chinesenamematchbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* [genderChineseName](#genderchinesename) - Infer the likely gender of a Chinese full name ex. 王晓明
* [genderChineseNameBatch](#genderchinesenamebatch) - Infer the likely gender of up to 100 full names ex. 王晓明
* [genderChineseNamePinyin](#genderchinesenamepinyin) - Infer the likely gender of a Chinese name in LATIN (Pinyin).
* [genderChineseNamePinyinBatch](#genderchinesenamepinyinbatch) - Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
* [parseChineseName](#parsechinesename) - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)
* [parseChineseNameBatch](#parsechinesenamebatch) - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).
* [pinyinChineseName](#pinyinchinesename) - Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)
* [pinyinChineseNameBatch](#pinyinchinesenamebatch) - Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).

## chineseNameCandidates

Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ChineseNameCandidatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChineseNameCandidatesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChineseNameCandidatesRequest();
    $request->chineseGivenNameLatin = 'illum';
    $request->chineseSurnameLatin = 'vel';

    $requestSecurity = new ChineseNameCandidatesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->chinese->chineseNameCandidates($request, $requestSecurity);

    if ($response->nameMatchCandidatesOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chineseNameCandidatesBatch

Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming

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
use \OpenAPI\OpenAPI\Models\Operations\ChineseNameCandidatesBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchFirstLastNameIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new FirstLastNameIn(),
        new FirstLastNameIn(),
        new FirstLastNameIn(),
    ];

    $requestSecurity = new ChineseNameCandidatesBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->chinese->chineseNameCandidatesBatch($request, $requestSecurity);

    if ($response->batchNameMatchCandidatesOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chineseNameCandidatesGenderBatch

Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchFirstLastNameGenderIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\FirstLastNameGenderIn;
use \OpenAPI\OpenAPI\Models\Operations\ChineseNameCandidatesGenderBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchFirstLastNameGenderIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new FirstLastNameGenderIn(),
        new FirstLastNameGenderIn(),
    ];

    $requestSecurity = new ChineseNameCandidatesGenderBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->chinese->chineseNameCandidatesGenderBatch($request, $requestSecurity);

    if ($response->batchNameMatchCandidatesOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chineseNameGenderCandidates

Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ChineseNameGenderCandidatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChineseNameGenderCandidatesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChineseNameGenderCandidatesRequest();
    $request->chineseGivenNameLatin = 'magnam';
    $request->chineseSurnameLatin = 'debitis';
    $request->knownGender = 'ipsa';

    $requestSecurity = new ChineseNameGenderCandidatesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->chinese->chineseNameGenderCandidates($request, $requestSecurity);

    if ($response->nameMatchCandidatesOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chineseNameMatch

Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ChineseNameMatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChineseNameMatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChineseNameMatchRequest();
    $request->chineseGivenNameLatin = 'delectus';
    $request->chineseName = 'tempora';
    $request->chineseSurnameLatin = 'suscipit';

    $requestSecurity = new ChineseNameMatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->chinese->chineseNameMatch($request, $requestSecurity);

    if ($response->nameMatchedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chineseNameMatchBatch

Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchMatchPersonalFirstLastNameIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\MatchPersonalFirstLastNameIn;
use \OpenAPI\OpenAPI\Models\Shared\FirstLastNameIn;
use \OpenAPI\OpenAPI\Models\Shared\PersonalNameIn;
use \OpenAPI\OpenAPI\Models\Operations\ChineseNameMatchBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchMatchPersonalFirstLastNameIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new MatchPersonalFirstLastNameIn(),
        new MatchPersonalFirstLastNameIn(),
        new MatchPersonalFirstLastNameIn(),
        new MatchPersonalFirstLastNameIn(),
    ];

    $requestSecurity = new ChineseNameMatchBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->chinese->chineseNameMatchBatch($request, $requestSecurity);

    if ($response->batchNameMatchedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderChineseName

Infer the likely gender of a Chinese full name ex. 王晓明

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenderChineseNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GenderChineseNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenderChineseNameRequest();
    $request->chineseName = 'placeat';

    $requestSecurity = new GenderChineseNameSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->chinese->genderChineseName($request, $requestSecurity);

    if ($response->personalNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderChineseNameBatch

Infer the likely gender of up to 100 full names ex. 王晓明

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
use \OpenAPI\OpenAPI\Models\Operations\GenderChineseNameBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPersonalNameIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new PersonalNameIn(),
        new PersonalNameIn(),
    ];

    $requestSecurity = new GenderChineseNameBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->chinese->genderChineseNameBatch($request, $requestSecurity);

    if ($response->batchPersonalNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderChineseNamePinyin

Infer the likely gender of a Chinese name in LATIN (Pinyin).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenderChineseNamePinyinRequest;
use \OpenAPI\OpenAPI\Models\Operations\GenderChineseNamePinyinSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenderChineseNamePinyinRequest();
    $request->chineseGivenNameLatin = 'excepturi';
    $request->chineseSurnameLatin = 'nisi';

    $requestSecurity = new GenderChineseNamePinyinSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->chinese->genderChineseNamePinyin($request, $requestSecurity);

    if ($response->firstLastNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderChineseNamePinyinBatch

Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).

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
use \OpenAPI\OpenAPI\Models\Operations\GenderChineseNamePinyinBatchSecurity;

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
        new FirstLastNameIn(),
        new FirstLastNameIn(),
        new FirstLastNameIn(),
    ];

    $requestSecurity = new GenderChineseNamePinyinBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->chinese->genderChineseNamePinyinBatch($request, $requestSecurity);

    if ($response->batchFirstLastNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## parseChineseName

Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ParseChineseNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\ParseChineseNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ParseChineseNameRequest();
    $request->chineseName = 'ab';

    $requestSecurity = new ParseChineseNameSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->chinese->parseChineseName($request, $requestSecurity);

    if ($response->personalNameParsedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## parseChineseNameBatch

Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).

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
use \OpenAPI\OpenAPI\Models\Operations\ParseChineseNameBatchSecurity;

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

    $requestSecurity = new ParseChineseNameBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->chinese->parseChineseNameBatch($request, $requestSecurity);

    if ($response->batchPersonalNameParsedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pinyinChineseName

Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PinyinChineseNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\PinyinChineseNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PinyinChineseNameRequest();
    $request->chineseName = 'deserunt';

    $requestSecurity = new PinyinChineseNameSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->chinese->pinyinChineseName($request, $requestSecurity);

    if ($response->personalNameParsedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pinyinChineseNameBatch

Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).

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
use \OpenAPI\OpenAPI\Models\Operations\PinyinChineseNameBatchSecurity;

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
    ];

    $requestSecurity = new PinyinChineseNameBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->chinese->pinyinChineseNameBatch($request, $requestSecurity);

    if ($response->batchPersonalNameParsedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
