# i18nLanguages

### Available Operations

* [youtubeI18nLanguagesList](#youtubei18nlanguageslist) - Retrieves a list of resources, possibly filtered.

## youtubeI18nLanguagesList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeI18nLanguagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeI18nLanguagesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeI18nLanguagesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeI18nLanguagesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeI18nLanguagesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeI18nLanguagesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeI18nLanguagesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'ipsam';
    $request->hl = 'debitis';
    $request->key = 'rem';
    $request->oauthToken = 'sit';
    $request->part = [
        'error',
        'veniam',
        'minima',
        'recusandae',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new YoutubeI18nLanguagesListSecurity();
    $requestSecurity->option1 = new YoutubeI18nLanguagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->i18nLanguages->youtubeI18nLanguagesList($request, $requestSecurity);

    if ($response->i18nLanguageListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
