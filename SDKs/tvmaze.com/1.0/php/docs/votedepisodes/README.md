# votedEpisodes

### Available Operations

* [deleteUserVotesEpisodesEpisodeId](#deleteuservotesepisodesepisodeid) - Remove an episode vote
* [getUserVotesEpisodes](#getuservotesepisodes) - List the episodes voted for
* [getUserVotesEpisodesEpisodeId](#getuservotesepisodesepisodeid) - Check if an episode is voted for
* [putUserVotesEpisodesEpisodeId](#putuservotesepisodesepisodeid) - Vote for an episode

## deleteUserVotesEpisodesEpisodeId

Remove an episode vote

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserVotesEpisodesEpisodeIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserVotesEpisodesEpisodeIdRequest();
    $request->episodeId = 18789;

    $response = $sdk->votedEpisodes->deleteUserVotesEpisodesEpisodeId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserVotesEpisodes

List the episodes voted for

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->votedEpisodes->getUserVotesEpisodes();

    if ($response->episodeVotes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserVotesEpisodesEpisodeId

Check if an episode is voted for

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserVotesEpisodesEpisodeIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserVotesEpisodesEpisodeIdRequest();
    $request->episodeId = 324141;

    $response = $sdk->votedEpisodes->getUserVotesEpisodesEpisodeId($request);

    if ($response->episodeVote !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUserVotesEpisodesEpisodeId

Vote for an episode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutUserVotesEpisodesEpisodeIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\EpisodeVoteInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUserVotesEpisodesEpisodeIdRequest();
    $request->episodeVoteInput = new EpisodeVoteInput();
    $request->episodeVoteInput->vote = 617636;
    $request->episodeId = 149675;

    $response = $sdk->votedEpisodes->putUserVotesEpisodesEpisodeId($request);

    if ($response->episodeVote !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
