# scrobbling

### Available Operations

* [getScrobbleShowsShowId](#getscrobbleshowsshowid) - List watched and acquired episodes for a show
* [postScrobbleEpisodes](#postscrobbleepisodes) - Mark episodes as acquired or watched based on their IDs
* [postScrobbleShows](#postscrobbleshows) - Mark episodes within a show as acquired or watched based on their attributes
* [putScrobbleEpisodesEpisodeId](#putscrobbleepisodesepisodeid) - Mark an episode as acquired or watched based on its ID

## getScrobbleShowsShowId

This endpoint can be used by all users, even without premium

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetScrobbleShowsShowIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScrobbleShowsShowIdEmbedEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScrobbleShowsShowIdRequest();
    $request->embed = GetScrobbleShowsShowIdEmbedEnum::EPISODE;
    $request->showId = 368241;

    $response = $sdk->scrobbling->getScrobbleShowsShowId($request);

    if ($response->markedEpisodes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postScrobbleEpisodes

This endpoint can be used by all users, even without premium

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostScrobbleEpisodesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new PostScrobbleEpisodesRequestBody(),
        new PostScrobbleEpisodesRequestBody(),
        new PostScrobbleEpisodesRequestBody(),
        new PostScrobbleEpisodesRequestBody(),
    ]

    $response = $sdk->scrobbling->postScrobbleEpisodes($request);

    if ($response->bulkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postScrobbleShows

To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.

This endpoint can be used by all users, even without premium.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostScrobbleShowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostScrobbleShowsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostScrobbleShowsRequest();
    $request->requestBody = [
        new PostScrobbleShowsRequestBody(),
        new PostScrobbleShowsRequestBody(),
        new PostScrobbleShowsRequestBody(),
        new PostScrobbleShowsRequestBody(),
    ];
    $request->imdbId = 778157;
    $request->thetvdbId = 140350;
    $request->tvmazeId = 870013;

    $response = $sdk->scrobbling->postScrobbleShows($request);

    if ($response->bulkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putScrobbleEpisodesEpisodeId

This endpoint can be used by all users, even without premium

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutScrobbleEpisodesEpisodeIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\MarkedEpisodeInput;
use \OpenAPI\OpenAPI\Models\Shared\MarkedEpisodeEmbedded;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutScrobbleEpisodesEpisodeIdRequest();
    $request->markedEpisodeInput = new MarkedEpisodeInput();
    $request->markedEpisodeInput->embedded = new MarkedEpisodeEmbedded();
    $request->markedEpisodeInput->embedded->episode = [
        'maiores' => 'molestiae',
        'quod' => 'quod',
        'esse' => 'totam',
        'porro' => 'dolorum',
    ];
    $request->markedEpisodeInput->markedAt = 118274;
    $request->markedEpisodeInput->type = 'nam';
    $request->episodeId = 639921;

    $response = $sdk->scrobbling->putScrobbleEpisodesEpisodeId($request);

    if ($response->markedEpisode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
