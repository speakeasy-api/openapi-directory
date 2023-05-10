# strings

### Available Operations

* [clearTranslationCache](#cleartranslationcache) - Clear translation cache
* [getContinuousProjectFileStrings](#getcontinuousprojectfilestrings) - View strings their translations in a continuous document
* [getContinuousProjectStrings](#getcontinuousprojectstrings) - View strings and translations in continuous project
* [getDocumentTranslations](#getdocumenttranslations) - View strings and translations of a document
* [getDocumentTranslationsForLanguage](#getdocumenttranslationsforlanguage) - View strings and translations of a document for target language
* [getProjectStrings](#getprojectstrings) - View project strings and translations
* [getProjectStringsForLanguage](#getprojectstringsforlanguage) - View strings and translations for target language
* [~~getProjectTranslations~~](#getprojecttranslations) - Deprecated. Use /projects/{projectId}/strings instead. :warning: **Deprecated**
* [~~getProjectTranslationsForLanguage~~](#getprojecttranslationsforlanguage) - Deprecated. use /projects/{projectId}/strings/{language} instead. :warning: **Deprecated**
* [getStrings](#getstrings) - View account strings (translation memory)
* [getTranslationCache](#gettranslationcache) - View cached strings translations in continuous project
* [packageProjectTranslationMemory](#packageprojecttranslationmemory) - Download project translation memory
* [packageProjectTranslationMemoryForLanguage](#packageprojecttranslationmemoryforlanguage) - Download language-specific project translation memory
* [packageProjectTranslationMemoryForLanguageStatus](#packageprojecttranslationmemoryforlanguagestatus) - Check language-specific translation memory packaging status
* [packageProjectTranslationMemoryStatus](#packageprojecttranslationmemorystatus) - Check translation memory packaging status
* [packageUserTranslationMemory](#packageusertranslationmemory) - Download account translation memory
* [packageUserTranslationMemoryForLanguageStatus](#packageusertranslationmemoryforlanguagestatus) - Check account translation memory packaging status
* [postContinuousProjectFileStrings](#postcontinuousprojectfilestrings) - Get a list of strings and its translations in the project.
* [~~postStrings~~](#poststrings) - Translate Strings with MT :warning: **Deprecated**
* [recacheTranslations](#recachetranslations) - Recache translations
* [updateTranslationMemoryUnit](#updatetranslationmemoryunit) - Update string translation

## clearTranslationCache

Clear/delete continuous project translation cache.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClearTranslationCacheRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClearTranslationCacheRequest();
    $request->fileId = 724168;
    $request->locale = 'vero';
    $request->projectId = 399025;

    $response = $sdk->strings->clearTranslationCache($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContinuousProjectFileStrings

View the strings from a document and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContinuousProjectFileStringsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContinuousProjectFileStringsRequest();
    $request->documentId = 93459;
    $request->projectId = 904045;

    $response = $sdk->strings->getContinuousProjectFileStrings($request);

    if ($response->stringList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContinuousProjectStrings

View the strings and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContinuousProjectStringsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContinuousProjectStringsRequest();
    $request->projectId = 426306;

    $response = $sdk->strings->getContinuousProjectStrings($request);

    if ($response->stringList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocumentTranslations

View the strings and their translations in your translation project for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentTranslationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentTranslationsRequest();
    $request->documentId = 690025;
    $request->projectId = 473221;

    $response = $sdk->strings->getDocumentTranslations($request);

    if ($response->stringList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocumentTranslationsForLanguage

View the strings and their translations in the given target language for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentTranslationsForLanguageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentTranslationsForLanguageRequest();
    $request->documentId = 699622;
    $request->language = 'occaecati';
    $request->projectId = 327720;

    $response = $sdk->strings->getDocumentTranslationsForLanguage($request);

    if ($response->stringList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectStrings

View the strings and their translations in your translation project, for all target languages. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectStringsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectStringsRequest();
    $request->projectId = 716244;

    $response = $sdk->strings->getProjectStrings($request);

    if ($response->stringList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectStringsForLanguage

View the strings and their translations in your translation project for the specified target language. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectStringsForLanguageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectStringsForLanguageRequest();
    $request->language = 'eligendi';
    $request->projectId = 27069;

    $response = $sdk->strings->getProjectStringsForLanguage($request);

    if ($response->stringList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getProjectTranslations~~

Deprecated. Use /projects/{projectId}/strings instead.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectTranslationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectTranslationsRequest();
    $request->projectId = 636061;

    $response = $sdk->strings->getProjectTranslations($request);

    if ($response->stringList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getProjectTranslationsForLanguage~~

Deprecated. use /projects/{projectId}/strings/{language} instead.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectTranslationsForLanguageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectTranslationsForLanguageRequest();
    $request->language = 'tempore';
    $request->projectId = 240020;

    $response = $sdk->strings->getProjectTranslationsForLanguage($request);

    if ($response->stringList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStrings

Get a list of all strings and their translations under your account, from all projects. This is your MotaWord translation memory. If you have the related permission, this endpoint will also return strings from your company account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStringsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStringsRequest();
    $request->page = 766964;
    $request->sourceLanguage = 'consequuntur';

    $response = $sdk->strings->getStrings($request);

    if ($response->clientStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTranslationCache

MotaWord caches your account intensively (and in a smart way) in real-time translation environments. This endpoint will return the currently cached strings and translations in your continuous translation project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTranslationCacheRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTranslationCacheRequest();
    $request->flatten = false;
    $request->projectId = 9766;

    $response = $sdk->strings->getTranslationCache($request);

    if ($response->continuousProjectCache !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## packageProjectTranslationMemory

Package and download project translation memory in TMX format

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PackageProjectTranslationMemoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageProjectTranslationMemoryRequest();
    $request->async = 796392;
    $request->format = 'quaerat';
    $request->projectId = 959167;

    $response = $sdk->strings->packageProjectTranslationMemory($request);

    if ($response->asyncOperationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## packageProjectTranslationMemoryForLanguage

Package and download project translation memory in TMX format for a specific target language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PackageProjectTranslationMemoryForLanguageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageProjectTranslationMemoryForLanguageRequest();
    $request->async = 232865;
    $request->format = 'esse';
    $request->languageCode = 'blanditiis';
    $request->projectId = 590984;

    $response = $sdk->strings->packageProjectTranslationMemoryForLanguage($request);

    if ($response->asyncOperationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## packageProjectTranslationMemoryForLanguageStatus

Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PackageProjectTranslationMemoryForLanguageStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageProjectTranslationMemoryForLanguageStatusRequest();
    $request->asyncRequestKey = 'a';
    $request->languageCode = 'nulla';
    $request->projectId = 557811;

    $response = $sdk->strings->packageProjectTranslationMemoryForLanguageStatus($request);

    if ($response->asyncOperationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## packageProjectTranslationMemoryStatus

Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PackageProjectTranslationMemoryStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageProjectTranslationMemoryStatusRequest();
    $request->asyncRequestKey = 'esse';
    $request->projectId = 97468;

    $response = $sdk->strings->packageProjectTranslationMemoryStatus($request);

    if ($response->asyncOperationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## packageUserTranslationMemory

Package and download account translation memory in TMX format. If you have the related permission, this will also download your company translation memory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PackageUserTranslationMemoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageUserTranslationMemoryRequest();
    $request->async = 951875;
    $request->email = 621679;
    $request->languageCode = 'sint';

    $response = $sdk->strings->packageUserTranslationMemory($request);

    if ($response->asyncOperationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## packageUserTranslationMemoryForLanguageStatus

Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PackageUserTranslationMemoryForLanguageStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageUserTranslationMemoryForLanguageStatusRequest();
    $request->asyncRequestKey = 'pariatur';
    $request->languageCode = 'possimus';

    $response = $sdk->strings->packageUserTranslationMemoryForLanguageStatus($request);

    if ($response->asyncOperationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContinuousProjectFileStrings

Get a list of strings and its translations in the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostContinuousProjectFileStringsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContinuousProjectDocumentStringsBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContinuousProjectFileStringsRequest();
    $request->continuousProjectDocumentStringsBody = new ContinuousProjectDocumentStringsBody();
    $request->continuousProjectDocumentStringsBody->documentName = 'quia';
    $request->projectId = 908844;

    $response = $sdk->strings->postContinuousProjectFileStrings($request);

    if ($response->stringList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~postStrings~~

Deprecated, use instant translation mechanism for continuous projects.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\DeprecatedStringTranslationContent;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeprecatedStringTranslationContent();
    $request->contents = [
        'facere',
        'veritatis',
        'consequuntur',
        'quasi',
    ];
    $request->sourceLanguage = 'similique';
    $request->targetLanguages = [
        'aliquid',
        'tenetur',
        'quae',
    ];

    $response = $sdk->strings->postStrings($request);

    if ($response->machineTranslatedStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recacheTranslations

Recache translations for the continuous project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RecacheTranslationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecacheTranslationsRequest();
    $request->fileId = 936747;
    $request->locale = 'vel';
    $request->projectId = 447378;

    $response = $sdk->strings->recacheTranslations($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTranslationMemoryUnit

Update the translation of a string from your account strings/translation memory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TranslationMemoryUnit;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslationMemoryUnit();
    $request->sourceLanguage = 'eius';
    $request->sourceText = 'libero';
    $request->targetLanguage = 'illum';
    $request->targetText = 'soluta';

    $response = $sdk->strings->updateTranslationMemoryUnit($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
