# markedEpisodes

### Available Operations

* [deleteUserEpisodesEpisodeId](#deleteuserepisodesepisodeid) - Unmark an episode
* [getUserEpisodes](#getuserepisodes) - List the marked episodes
* [getUserEpisodesEpisodeId](#getuserepisodesepisodeid) - Check if an episode is marked
* [putUserEpisodesEpisodeId](#putuserepisodesepisodeid) - Mark an episode

## deleteUserEpisodesEpisodeId

Unmark an episode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserEpisodesEpisodeIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserEpisodesEpisodeIdRequest();
    $request->episodeId = 383441;

    $response = $sdk->markedEpisodes->deleteUserEpisodesEpisodeId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserEpisodes

List the marked episodes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserEpisodesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserEpisodesRequest();
    $request->showId = 477665;

    $response = $sdk->markedEpisodes->getUserEpisodes($request);

    if ($response->markedEpisodes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserEpisodesEpisodeId

Check if an episode is marked

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserEpisodesEpisodeIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserEpisodesEpisodeIdRequest();
    $request->episodeId = 791725;

    $response = $sdk->markedEpisodes->getUserEpisodesEpisodeId($request);

    if ($response->markedEpisode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUserEpisodesEpisodeId

Set `marked_at` to `NULL` or leave it out to use the current time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutUserEpisodesEpisodeIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\MarkedEpisodeInput;
use \OpenAPI\OpenAPI\Models\Shared\MarkedEpisodeEmbedded;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUserEpisodesEpisodeIdRequest();
    $request->markedEpisodeInput = new MarkedEpisodeInput();
    $request->markedEpisodeInput->embedded = new MarkedEpisodeEmbedded();
    $request->markedEpisodeInput->embedded->episode = [
        'voluptatum' => 'iusto',
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
        'ab' => 'quis',
    ];
    $request->markedEpisodeInput->markedAt = 87129;
    $request->markedEpisodeInput->type = 'deserunt';
    $request->episodeId = 20218;

    $response = $sdk->markedEpisodes->putUserEpisodesEpisodeId($request);

    if ($response->markedEpisode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
