# languages

### Available Operations

* [languageLanguagesList](#languagelanguageslist) - Returns a list of supported languages for translation.

## languageLanguagesList

Returns a list of supported languages for translation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LanguageLanguagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LanguageLanguagesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\LanguageLanguagesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\LanguageLanguagesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LanguageLanguagesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->bearerToken = 'officia';
    $request->callback = 'occaecati';
    $request->fields = 'fugit';
    $request->key = 'deleniti';
    $request->model = 'hic';
    $request->oauthToken = 'optio';
    $request->pp = false;
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->target = 'beatae';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new LanguageLanguagesListSecurity();
    $requestSecurity->option1 = new LanguageLanguagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->languages->languageLanguagesList($request, $requestSecurity);

    if ($response->languagesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
