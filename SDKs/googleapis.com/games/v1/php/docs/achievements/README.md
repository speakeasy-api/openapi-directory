# achievements

### Available Operations

* [gamesAchievementsIncrement](#gamesachievementsincrement) - Increments the steps of the achievement with the given ID for the currently authenticated player.
* [gamesAchievementsList](#gamesachievementslist) - Lists the progress for all your application's achievements for the currently authenticated player.
* [gamesAchievementsReveal](#gamesachievementsreveal) - Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
* [gamesAchievementsSetStepsAtLeast](#gamesachievementssetstepsatleast) - Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
* [gamesAchievementsUnlock](#gamesachievementsunlock) - Unlocks this achievement for the currently authenticated player.
* [gamesAchievementsUpdateMultiple](#gamesachievementsupdatemultiple) - Updates multiple achievements for the currently authenticated player.

## gamesAchievementsIncrement

Increments the steps of the achievement with the given ID for the currently authenticated player.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementsIncrementRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementsIncrementSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesAchievementsIncrementRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->achievementId = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->requestId = 'sapiente';
    $request->stepsToIncrement = 778157;
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';

    $requestSecurity = new GamesAchievementsIncrementSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->achievements->gamesAchievementsIncrement($request, $requestSecurity);

    if ($response->achievementIncrementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesAchievementsList

Lists the progress for all your application's achievements for the currently authenticated player.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementsListStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesAchievementsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->language = 'totam';
    $request->maxResults = 780529;
    $request->oauthToken = 'dolorum';
    $request->pageToken = 'dicta';
    $request->playerId = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->state = GamesAchievementsListStateEnum::REVEALED;
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new GamesAchievementsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->achievements->gamesAchievementsList($request, $requestSecurity);

    if ($response->playerAchievementListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesAchievementsReveal

Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementsRevealRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementsRevealSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesAchievementsRevealRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'optio';
    $request->achievementId = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new GamesAchievementsRevealSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->achievements->gamesAchievementsReveal($request, $requestSecurity);

    if ($response->achievementRevealResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesAchievementsSetStepsAtLeast

Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementsSetStepsAtLeastRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementsSetStepsAtLeastSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesAchievementsSetStepsAtLeastRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->achievementId = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'natus';
    $request->key = 'sed';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->steps = 616934;
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new GamesAchievementsSetStepsAtLeastSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->achievements->gamesAchievementsSetStepsAtLeast($request, $requestSecurity);

    if ($response->achievementSetStepsAtLeastResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesAchievementsUnlock

Unlocks this achievement for the currently authenticated player.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementsUnlockRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementsUnlockSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesAchievementsUnlockRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fuga';
    $request->achievementId = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'iure';
    $request->key = 'saepe';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new GamesAchievementsUnlockSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->achievements->gamesAchievementsUnlock($request, $requestSecurity);

    if ($response->achievementUnlockResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesAchievementsUpdateMultiple

Updates multiple achievements for the currently authenticated player.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementsUpdateMultipleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AchievementUpdateMultipleRequest;
use \OpenAPI\OpenAPI\Models\Shared\AchievementUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GamesAchievementIncrement;
use \OpenAPI\OpenAPI\Models\Shared\GamesAchievementSetStepsAtLeast;
use \OpenAPI\OpenAPI\Models\Shared\AchievementUpdateRequestUpdateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementsUpdateMultipleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesAchievementsUpdateMultipleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->achievementUpdateMultipleRequest = new AchievementUpdateMultipleRequest();
    $request->achievementUpdateMultipleRequest->kind = 'mollitia';
    $request->achievementUpdateMultipleRequest->updates = [
        new AchievementUpdateRequest(),
        new AchievementUpdateRequest(),
        new AchievementUpdateRequest(),
    ];
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'explicabo';
    $request->key = 'nobis';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new GamesAchievementsUpdateMultipleSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->achievements->gamesAchievementsUpdateMultiple($request, $requestSecurity);

    if ($response->achievementUpdateMultipleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
