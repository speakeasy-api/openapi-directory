# metagame

### Available Operations

* [gamesMetagameGetMetagameConfig](#gamesmetagamegetmetagameconfig) - Return the metagame configuration data for the calling application.
* [gamesMetagameListCategoriesByPlayer](#gamesmetagamelistcategoriesbyplayer) - List play data aggregated per category for the player corresponding to `playerId`.

## gamesMetagameGetMetagameConfig

Return the metagame configuration data for the calling application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesMetagameGetMetagameConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesMetagameGetMetagameConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesMetagameGetMetagameConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->fields = 'dolor';
    $request->key = 'debitis';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'in';

    $requestSecurity = new GamesMetagameGetMetagameConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->metagame->gamesMetagameGetMetagameConfig($request, $requestSecurity);

    if ($response->metagameConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesMetagameListCategoriesByPlayer

List play data aggregated per category for the player corresponding to `playerId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesMetagameListCategoriesByPlayerRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesMetagameListCategoriesByPlayerCollectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesMetagameListCategoriesByPlayerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesMetagameListCategoriesByPlayerRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->collection = GamesMetagameListCategoriesByPlayerCollectionEnum::COLLECTION_UNSPECIFIED;
    $request->fields = 'cumque';
    $request->key = 'facere';
    $request->language = 'ea';
    $request->maxResults = 396506;
    $request->oauthToken = 'laborum';
    $request->pageToken = 'accusamus';
    $request->playerId = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new GamesMetagameListCategoriesByPlayerSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->metagame->gamesMetagameListCategoriesByPlayer($request, $requestSecurity);

    if ($response->categoryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
