# games

### Available Operations

* [gamesAchievementsRead](#gamesachievementsread) - Get a list of game achievements.
* [gamesAdditionsList](#gamesadditionslist) - Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
* [gamesDevelopmentTeamList](#gamesdevelopmentteamlist) - Get a list of individual creators that were part of the development team.
* [gamesGameSeriesList](#gamesgameserieslist) - Get a list of games that are part of the same series.
* [gamesList](#gameslist) - Get a list of games.
* [gamesMoviesRead](#gamesmoviesread) - Get a list of game trailers.
* [gamesParentGamesList](#gamesparentgameslist) - Get a list of parent games for DLC's and editions.
* [gamesRead](#gamesread) - Get details of the game.
* [gamesRedditRead](#gamesredditread) - Get a list of most recent posts from the game's subreddit.
* [gamesScreenshotsList](#gamesscreenshotslist) - Get screenshots for the game.
* [gamesStoresList](#gamesstoreslist) - Get links to the stores that sell the game.
* [gamesSuggestedRead](#gamessuggestedread) - Get a list of visually similar games, available only for business and enterprise API users.
* [gamesTwitchRead](#gamestwitchread) - Get streams on Twitch associated with the game, available only for business and enterprise API users.
* [gamesYoutubeRead](#gamesyoutuberead) - Get videos from YouTube associated with the game, available only for business and enterprise API users.

## gamesAchievementsRead

Get a list of game achievements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementsReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesAchievementsReadRequest();
    $request->id = 'f7cc78ca-1ba9-428f-8816-742cb7392059';

    $response = $sdk->games->gamesAchievementsRead($request);

    if ($response->parentAchievement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesAdditionsList

Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesAdditionsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesAdditionsListRequest();
    $request->gamePk = 'sed';
    $request->page = 612096;
    $request->pageSize = 222321;

    $response = $sdk->games->gamesAdditionsList($request);

    if ($response->gamesAdditionsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesDevelopmentTeamList

Get a list of individual creators that were part of the development team.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesDevelopmentTeamListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesDevelopmentTeamListRequest();
    $request->gamePk = 'natus';
    $request->ordering = 'laboriosam';
    $request->page = 943749;
    $request->pageSize = 902599;

    $response = $sdk->games->gamesDevelopmentTeamList($request);

    if ($response->gamesDevelopmentTeamList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesGameSeriesList

Get a list of games that are part of the same series.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesGameSeriesListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesGameSeriesListRequest();
    $request->gamePk = 'fuga';
    $request->page = 449950;
    $request->pageSize = 359508;

    $response = $sdk->games->gamesGameSeriesList($request);

    if ($response->gamesGameSeriesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesList

Get a list of games.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesListRequest();
    $request->creators = 'iste';
    $request->dates = 'iure';
    $request->developers = 'saepe';
    $request->excludeAdditions = false;
    $request->excludeCollection = 697631;
    $request->excludeGameSeries = false;
    $request->excludeParents = false;
    $request->excludeStores = 'architecto';
    $request->genres = 'ipsa';
    $request->metacritic = 'reiciendis';
    $request->ordering = 'est';
    $request->page = 653140;
    $request->pageSize = 670638;
    $request->parentPlatforms = 'dolores';
    $request->platforms = 'dolorem';
    $request->platformsCount = 358152;
    $request->publishers = 'explicabo';
    $request->search = 'nobis';
    $request->searchExact = false;
    $request->searchPrecise = false;
    $request->stores = 'enim';
    $request->tags = 'omnis';
    $request->updated = 'nemo';

    $response = $sdk->games->gamesList($request);

    if ($response->gamesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesMoviesRead

Get a list of game trailers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesMoviesReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesMoviesReadRequest();
    $request->id = '5907aff1-a3a2-4fa9-8677-39251aa52c3f';

    $response = $sdk->games->gamesMoviesRead($request);

    if ($response->movie !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesParentGamesList

Get a list of parent games for DLC's and editions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesParentGamesListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesParentGamesListRequest();
    $request->gamePk = 'ipsam';
    $request->page = 662527;
    $request->pageSize = 820994;

    $response = $sdk->games->gamesParentGamesList($request);

    if ($response->gamesParentGamesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesRead

Get details of the game.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesReadRequest();
    $request->id = '019da1ff-e78f-4097-b007-4f15471b5e6e';

    $response = $sdk->games->gamesRead($request);

    if ($response->gameSingle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesRedditRead

Get a list of most recent posts from the game's subreddit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesRedditReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesRedditReadRequest();
    $request->id = '13b99d48-8e1e-491e-850a-d2abd4426980';

    $response = $sdk->games->gamesRedditRead($request);

    if ($response->reddit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesScreenshotsList

Get screenshots for the game.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesScreenshotsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesScreenshotsListRequest();
    $request->gamePk = 'magni';
    $request->ordering = 'assumenda';
    $request->page = 369808;
    $request->pageSize = 4695;

    $response = $sdk->games->gamesScreenshotsList($request);

    if ($response->gamesScreenshotsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesStoresList

Get links to the stores that sell the game.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesStoresListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesStoresListRequest();
    $request->gamePk = 'fugit';
    $request->ordering = 'dolorum';
    $request->page = 569618;
    $request->pageSize = 270008;

    $response = $sdk->games->gamesStoresList($request);

    if ($response->gamesStoresList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesSuggestedRead

Get a list of visually similar games, available only for business and enterprise API users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesSuggestedReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesSuggestedReadRequest();
    $request->id = 'bb4f63c9-69e9-4a3e-ba77-dfb14cd66ae3';

    $response = $sdk->games->gamesSuggestedRead($request);

    if ($response->gameSingle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesTwitchRead

Get streams on Twitch associated with the game, available only for business and enterprise API users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesTwitchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesTwitchReadRequest();
    $request->id = '95efb9ba-88f3-4a66-9970-74ba4469b6e2';

    $response = $sdk->games->gamesTwitchRead($request);

    if ($response->twitch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesYoutubeRead

Get videos from YouTube associated with the game, available only for business and enterprise API users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesYoutubeReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesYoutubeReadRequest();
    $request->id = '14195989-0afa-4563-a251-6fe4c8b711e5';

    $response = $sdk->games->gamesYoutubeRead($request);

    if ($response->youtube !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
