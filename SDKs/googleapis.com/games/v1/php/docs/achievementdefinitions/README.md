# achievementDefinitions

### Available Operations

* [gamesAchievementDefinitionsList](#gamesachievementdefinitionslist) - Lists all the achievement definitions for your application.

## gamesAchievementDefinitionsList

Lists all the achievement definitions for your application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementDefinitionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementDefinitionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesAchievementDefinitionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->language = 'molestiae';
    $request->maxResults = 791725;
    $request->oauthToken = 'placeat';
    $request->pageToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new GamesAchievementDefinitionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->achievementDefinitions->gamesAchievementDefinitionsList($request, $requestSecurity);

    if ($response->achievementDefinitionsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
