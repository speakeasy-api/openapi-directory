# scores

### Available Operations

* [gamesScoresGet](#gamesscoresget) - Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
* [gamesScoresList](#gamesscoreslist) - Lists the scores in a leaderboard, starting from the top.
* [gamesScoresListWindow](#gamesscoreslistwindow) - Lists the scores in a leaderboard around (and including) a player's score.
* [gamesScoresSubmit](#gamesscoressubmit) - Submits a score to the specified leaderboard.
* [gamesScoresSubmitMultiple](#gamesscoressubmitmultiple) - Submits multiple scores to leaderboards.

## gamesScoresGet

Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresGetIncludeRankTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresGetTimeSpanEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesScoresGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'pariatur';
    $request->includeRankType = GamesScoresGetIncludeRankTypeEnum::INCLUDE_RANK_TYPE_UNSPECIFIED;
    $request->key = 'consequuntur';
    $request->language = 'praesentium';
    $request->leaderboardId = 'natus';
    $request->maxResults = 166847;
    $request->oauthToken = 'sunt';
    $request->pageToken = 'quo';
    $request->playerId = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->timeSpan = GamesScoresGetTimeSpanEnum::DAILY;
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new GamesScoresGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scores->gamesScoresGet($request, $requestSecurity);

    if ($response->playerLeaderboardScoreListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesScoresList

Lists the scores in a leaderboard, starting from the top.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresListCollectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresListTimeSpanEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesScoresListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->collection = GamesScoresListCollectionEnum::FRIENDS;
    $request->fields = 'quidem';
    $request->key = 'ipsam';
    $request->language = 'voluptate';
    $request->leaderboardId = 'autem';
    $request->maxResults = 722056;
    $request->oauthToken = 'eaque';
    $request->pageToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->timeSpan = GamesScoresListTimeSpanEnum::DAILY;
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new GamesScoresListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scores->gamesScoresList($request, $requestSecurity);

    if ($response->leaderboardScores !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesScoresListWindow

Lists the scores in a leaderboard around (and including) a player's score.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresListWindowRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresListWindowCollectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresListWindowTimeSpanEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresListWindowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesScoresListWindowRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corporis';
    $request->collection = GamesScoresListWindowCollectionEnum::FRIENDS;
    $request->fields = 'libero';
    $request->key = 'nobis';
    $request->language = 'dolores';
    $request->leaderboardId = 'quis';
    $request->maxResults = 521037;
    $request->oauthToken = 'dignissimos';
    $request->pageToken = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->resultsAbove = 199996;
    $request->returnTopIfAbsent = false;
    $request->timeSpan = GamesScoresListWindowTimeSpanEnum::SCORE_TIME_SPAN_UNSPECIFIED;
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new GamesScoresListWindowSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scores->gamesScoresListWindow($request, $requestSecurity);

    if ($response->leaderboardScores !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesScoresSubmit

Submits a score to the specified leaderboard.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresSubmitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresSubmitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesScoresSubmitRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->fields = 'nostrum';
    $request->key = 'hic';
    $request->language = 'recusandae';
    $request->leaderboardId = 'omnis';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'perspiciatis';
    $request->score = 'voluptatem';
    $request->scoreTag = 'porro';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new GamesScoresSubmitSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scores->gamesScoresSubmit($request, $requestSecurity);

    if ($response->playerScoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesScoresSubmitMultiple

Submits multiple scores to leaderboards.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresSubmitMultipleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlayerScoreSubmissionList;
use \OpenAPI\OpenAPI\Models\Shared\ScoreSubmission;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesScoresSubmitMultipleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesScoresSubmitMultipleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->playerScoreSubmissionList = new PlayerScoreSubmissionList();
    $request->playerScoreSubmissionList->kind = 'eaque';
    $request->playerScoreSubmissionList->scores = [
        new ScoreSubmission(),
        new ScoreSubmission(),
        new ScoreSubmission(),
    ];
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'asperiores';
    $request->fields = 'earum';
    $request->key = 'modi';
    $request->language = 'iste';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new GamesScoresSubmitMultipleSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scores->gamesScoresSubmitMultiple($request, $requestSecurity);

    if ($response->playerScoreListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
