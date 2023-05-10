# japanese

## Overview

JAPANESE special features

### Available Operations

* [genderJapaneseNameFull](#genderjapanesenamefull) - Infer the likely gender of a Japanese full name ex. 王晓明
* [genderJapaneseNameFullBatch](#genderjapanesenamefullbatch) - Infer the likely gender of up to 100 full names
* [genderJapaneseNamePinyin](#genderjapanesenamepinyin) - Infer the likely gender of a Japanese name in LATIN (Pinyin).
* [genderJapaneseNamePinyinBatch](#genderjapanesenamepinyinbatch) - Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
* [japaneseNameGenderKanjiCandidatesBatch](#japanesenamegenderkanjicandidatesbatch) - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
* [japaneseNameKanjiCandidates](#japanesenamekanjicandidates) - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
* [japaneseNameKanjiCandidatesBatch](#japanesenamekanjicandidatesbatch) - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae
* [japaneseNameKanjiCandidates1](#japanesenamekanjicandidates1) - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
* [japaneseNameLatinCandidates](#japanesenamelatincandidates) - Romanize japanese name, based on the name in Kanji.
* [japaneseNameLatinCandidatesBatch](#japanesenamelatincandidatesbatch) - Romanize japanese names, based on the name in KANJI
* [japaneseNameMatch](#japanesenamematch) - Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* [japaneseNameMatchBatch](#japanesenamematchbatch) - Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
* [japaneseNameMatchFeedbackLoop](#japanesenamematchfeedbackloop) - [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* [parseJapaneseName](#parsejapanesename) - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
* [parseJapaneseNameBatch](#parsejapanesenamebatch) - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 

## genderJapaneseNameFull

Infer the likely gender of a Japanese full name ex. 王晓明

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenderJapaneseNameFullRequest;
use \OpenAPI\OpenAPI\Models\Operations\GenderJapaneseNameFullSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenderJapaneseNameFullRequest();
    $request->japaneseName = 'totam';

    $requestSecurity = new GenderJapaneseNameFullSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->genderJapaneseNameFull($request, $requestSecurity);

    if ($response->personalNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderJapaneseNameFullBatch

Infer the likely gender of up to 100 full names

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
use \OpenAPI\OpenAPI\Models\Operations\GenderJapaneseNameFullBatchSecurity;

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

    $requestSecurity = new GenderJapaneseNameFullBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->genderJapaneseNameFullBatch($request, $requestSecurity);

    if ($response->batchPersonalNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderJapaneseNamePinyin

Infer the likely gender of a Japanese name in LATIN (Pinyin).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenderJapaneseNamePinyinRequest;
use \OpenAPI\OpenAPI\Models\Operations\GenderJapaneseNamePinyinSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenderJapaneseNamePinyinRequest();
    $request->japaneseGivenName = 'molestiae';
    $request->japaneseSurname = 'modi';

    $requestSecurity = new GenderJapaneseNamePinyinSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->genderJapaneseNamePinyin($request, $requestSecurity);

    if ($response->firstLastNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderJapaneseNamePinyinBatch

Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).

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
use \OpenAPI\OpenAPI\Models\Operations\GenderJapaneseNamePinyinBatchSecurity;

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
        new FirstLastNameIn(),
    ];

    $requestSecurity = new GenderJapaneseNamePinyinBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->genderJapaneseNamePinyinBatch($request, $requestSecurity);

    if ($response->batchFirstLastNameGenderedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## japaneseNameGenderKanjiCandidatesBatch

Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae

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
use \OpenAPI\OpenAPI\Models\Operations\JapaneseNameGenderKanjiCandidatesBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchFirstLastNameGenderIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new FirstLastNameGenderIn(),
        new FirstLastNameGenderIn(),
    ];

    $requestSecurity = new JapaneseNameGenderKanjiCandidatesBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->japaneseNameGenderKanjiCandidatesBatch($request, $requestSecurity);

    if ($response->batchNameMatchCandidatesOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## japaneseNameKanjiCandidates

Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\JapaneseNameKanjiCandidatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\JapaneseNameKanjiCandidatesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JapaneseNameKanjiCandidatesRequest();
    $request->japaneseGivenNameLatin = 'ipsum';
    $request->japaneseSurnameLatin = 'excepturi';
    $request->knownGender = 'aspernatur';

    $requestSecurity = new JapaneseNameKanjiCandidatesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->japaneseNameKanjiCandidates($request, $requestSecurity);

    if ($response->nameMatchCandidatesOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## japaneseNameKanjiCandidatesBatch

Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae

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
use \OpenAPI\OpenAPI\Models\Operations\JapaneseNameKanjiCandidatesBatchSecurity;

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
    ];

    $requestSecurity = new JapaneseNameKanjiCandidatesBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->japaneseNameKanjiCandidatesBatch($request, $requestSecurity);

    if ($response->batchNameMatchCandidatesOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## japaneseNameKanjiCandidates1

Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\JapaneseNameKanjiCandidates1Request;
use \OpenAPI\OpenAPI\Models\Operations\JapaneseNameKanjiCandidates1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JapaneseNameKanjiCandidates1Request();
    $request->japaneseGivenNameLatin = 'natus';
    $request->japaneseSurnameLatin = 'sed';

    $requestSecurity = new JapaneseNameKanjiCandidates1Security();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->japaneseNameKanjiCandidates1($request, $requestSecurity);

    if ($response->nameMatchCandidatesOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## japaneseNameLatinCandidates

Romanize japanese name, based on the name in Kanji.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\JapaneseNameLatinCandidatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\JapaneseNameLatinCandidatesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JapaneseNameLatinCandidatesRequest();
    $request->japaneseGivenNameKanji = 'iste';
    $request->japaneseSurnameKanji = 'dolor';

    $requestSecurity = new JapaneseNameLatinCandidatesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->japaneseNameLatinCandidates($request, $requestSecurity);

    if ($response->nameMatchCandidatesOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## japaneseNameLatinCandidatesBatch

Romanize japanese names, based on the name in KANJI

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
use \OpenAPI\OpenAPI\Models\Operations\JapaneseNameLatinCandidatesBatchSecurity;

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
    ];

    $requestSecurity = new JapaneseNameLatinCandidatesBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->japaneseNameLatinCandidatesBatch($request, $requestSecurity);

    if ($response->batchNameMatchCandidatesOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## japaneseNameMatch

Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\JapaneseNameMatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\JapaneseNameMatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JapaneseNameMatchRequest();
    $request->japaneseGivenNameLatin = 'hic';
    $request->japaneseName = 'saepe';
    $request->japaneseSurnameLatin = 'fuga';

    $requestSecurity = new JapaneseNameMatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->japaneseNameMatch($request, $requestSecurity);

    if ($response->nameMatchedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## japaneseNameMatchBatch

Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae

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
use \OpenAPI\OpenAPI\Models\Operations\JapaneseNameMatchBatchSecurity;

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
    ];

    $requestSecurity = new JapaneseNameMatchBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->japaneseNameMatchBatch($request, $requestSecurity);

    if ($response->batchNameMatchedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## japaneseNameMatchFeedbackLoop

[CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\JapaneseNameMatchFeedbackLoopRequest;
use \OpenAPI\OpenAPI\Models\Operations\JapaneseNameMatchFeedbackLoopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JapaneseNameMatchFeedbackLoopRequest();
    $request->japaneseGivenNameLatin = 'iste';
    $request->japaneseName = 'iure';
    $request->japaneseSurnameLatin = 'saepe';

    $requestSecurity = new JapaneseNameMatchFeedbackLoopSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->japaneseNameMatchFeedbackLoop($request, $requestSecurity);

    if ($response->feedbackLoopOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## parseJapaneseName

Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ParseJapaneseNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\ParseJapaneseNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ParseJapaneseNameRequest();
    $request->japaneseName = 'quidem';

    $requestSecurity = new ParseJapaneseNameSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->parseJapaneseName($request, $requestSecurity);

    if ($response->personalNameParsedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## parseJapaneseNameBatch

Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 

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
use \OpenAPI\OpenAPI\Models\Operations\ParseJapaneseNameBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPersonalNameIn();
    $request->facts = [
        new FactIn(),
    ];
    $request->personalNames = [
        new PersonalNameIn(),
    ];

    $requestSecurity = new ParseJapaneseNameBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->japanese->parseJapaneseNameBatch($request, $requestSecurity);

    if ($response->batchPersonalNameParsedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
