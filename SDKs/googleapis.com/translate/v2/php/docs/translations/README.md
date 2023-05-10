# translations

### Available Operations

* [languageTranslationsList](#languagetranslationslist) - Translates input text, returning translated text.
* [languageTranslationsTranslate](#languagetranslationstranslate) - Translates input text, returning translated text.

## languageTranslationsList

Translates input text, returning translated text.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LanguageTranslationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LanguageTranslationsListFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\LanguageTranslationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\LanguageTranslationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\LanguageTranslationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LanguageTranslationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->bearerToken = 'cum';
    $request->callback = 'esse';
    $request->cid = [
        'excepturi',
    ];
    $request->fields = 'aspernatur';
    $request->format = LanguageTranslationsListFormatEnum::HTML;
    $request->key = 'ad';
    $request->model = 'natus';
    $request->oauthToken = 'sed';
    $request->pp = false;
    $request->prettyPrint = false;
    $request->q = [
        'dolor',
        'natus',
        'laboriosam',
    ];
    $request->quotaUser = 'hic';
    $request->source = 'saepe';
    $request->target = 'fuga';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new LanguageTranslationsListSecurity();
    $requestSecurity->option1 = new LanguageTranslationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->translations->languageTranslationsList($request, $requestSecurity);

    if ($response->translationsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## languageTranslationsTranslate

Translates input text, returning translated text.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LanguageTranslationsTranslateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TranslateTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LanguageTranslationsTranslateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\LanguageTranslationsTranslateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\LanguageTranslationsTranslateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LanguageTranslationsTranslateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->translateTextRequest = new TranslateTextRequest();
    $request->translateTextRequest->format = 'iure';
    $request->translateTextRequest->model = 'saepe';
    $request->translateTextRequest->q = [
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->translateTextRequest->source = 'est';
    $request->translateTextRequest->target = 'mollitia';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->bearerToken = 'dolorem';
    $request->callback = 'corporis';
    $request->fields = 'explicabo';
    $request->key = 'nobis';
    $request->oauthToken = 'enim';
    $request->pp = false;
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new LanguageTranslationsTranslateSecurity();
    $requestSecurity->option1 = new LanguageTranslationsTranslateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->translations->languageTranslationsTranslate($request, $requestSecurity);

    if ($response->translationsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
