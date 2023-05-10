# votedShows

### Available Operations

* [deleteUserVotesShowsShowId](#deleteuservotesshowsshowid) - Remove a show vote
* [getUserVotesShows](#getuservotesshows) - List the shows voted for
* [getUserVotesShowsShowId](#getuservotesshowsshowid) - Check if a show is voted for
* [putUserVotesShowsShowId](#putuservotesshowsshowid) - Vote for a show

## deleteUserVotesShowsShowId

Remove a show vote

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserVotesShowsShowIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserVotesShowsShowIdRequest();
    $request->showId = 612096;

    $response = $sdk->votedShows->deleteUserVotesShowsShowId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserVotesShows

List the shows voted for

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserVotesShowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserVotesShowsEmbedEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserVotesShowsRequest();
    $request->embed = GetUserVotesShowsEmbedEnum::SHOW;

    $response = $sdk->votedShows->getUserVotesShows($request);

    if ($response->showVotes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserVotesShowsShowId

Check if a show is voted for

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserVotesShowsShowIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserVotesShowsShowIdRequest();
    $request->showId = 222321;

    $response = $sdk->votedShows->getUserVotesShowsShowId($request);

    if ($response->showVote !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUserVotesShowsShowId

Set `voted_at` to `NULL` or leave it out to use the current time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutUserVotesShowsShowIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShowVoteInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUserVotesShowsShowIdRequest();
    $request->showVoteInput = new ShowVoteInput();
    $request->showVoteInput->vote = 616934;
    $request->showId = 386489;

    $response = $sdk->votedShows->putUserVotesShowsShowId($request);

    if ($response->showVote !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
