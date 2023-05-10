# channels

### Available Operations

* [deleteOfferingsOfferingIdChannelsChannelIdLearners](#deleteofferingsofferingidchannelschannelidlearners) - Remove learners from a group channel
* [getOfferingsOfferingIdAnalyticsChannelsChannelIdComments](#getofferingsofferingidanalyticschannelschannelidcomments) - Find comments
* [getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts](#getofferingsofferingidanalyticschannelschannelidposts) - Find posts
* [getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies](#getofferingsofferingidanalyticschannelschannelidreplies) - Find replies
* [getOfferingsOfferingIdChannels](#getofferingsofferingidchannels) - Find channels
* [getOfferingsOfferingIdChannelsChannelIdLearners](#getofferingsofferingidchannelschannelidlearners) - Find learners in a group channel
* [patchOfferingsOfferingIdChannelsChannelId](#patchofferingsofferingidchannelschannelid) - Update channel
* [postOfferingsOfferingIdChannels](#postofferingsofferingidchannels) - Add channel
* [postOfferingsOfferingIdChannelsChannelIdLearners](#postofferingsofferingidchannelschannelidlearners) - Add learners to a group channel

## deleteOfferingsOfferingIdChannelsChannelIdLearners

Removes a learner from the specified group channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequest();
    $request->requestBody = new DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequestBody();
    $request->requestBody->email = 'Maxie96@hotmail.com';
    $request->channelId = 'est';
    $request->offeringId = 'mollitia';

    $response = $sdk->channels->deleteOfferingsOfferingIdChannelsChannelIdLearners($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdAnalyticsChannelsChannelIdComments

Responds with a list of comments made in any posts in a specified channel, within an offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRequest();
    $request->channelId = 'laborum';
    $request->offeringId = 'dolores';

    $response = $sdk->channels->getOfferingsOfferingIdAnalyticsChannelsChannelIdComments($request);

    if ($response->comments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts

Responds with a list of posts made in a specified channel, within an offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRequest();
    $request->channelId = 'dolorem';
    $request->offeringId = 'corporis';

    $response = $sdk->channels->getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts($request);

    if ($response->httpPosts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies

Responds with a list of replies to comments in any posts in a specified channel, within an offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest();
    $request->channelId = 'explicabo';
    $request->offeringId = 'nobis';

    $response = $sdk->channels->getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies($request);

    if ($response->comments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdChannels

Responds with a list of channels in an offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdChannelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdChannelsRequest();
    $request->offeringId = 'enim';

    $response = $sdk->channels->getOfferingsOfferingIdChannels($request);

    if ($response->channelResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdChannelsChannelIdLearners

Finds all learners in a specified group channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdChannelsChannelIdLearnersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdChannelsChannelIdLearnersRequest();
    $request->channelId = 'omnis';
    $request->offeringId = 'nemo';

    $response = $sdk->channels->getOfferingsOfferingIdChannelsChannelIdLearners($request);

    if ($response->channelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchOfferingsOfferingIdChannelsChannelId

Updates a channel in an offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchOfferingsOfferingIdChannelsChannelIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\ChannelGroup;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchOfferingsOfferingIdChannelsChannelIdRequest();
    $request->channel = new Channel();
    $request->channel->group = new ChannelGroup();
    $request->channel->group->autoAssign = false;
    $request->channel->groupDiscussion = false;
    $request->channel->isBroadcastOnly = false;
    $request->channel->privateSupport = false;
    $request->channel->title = 'Mrs.';
    $request->channelId = 'excepturi';
    $request->offeringId = 'accusantium';

    $response = $sdk->channels->patchOfferingsOfferingIdChannelsChannelId($request);

    if ($response->channelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOfferingsOfferingIdChannels

Adds new channel to the specified offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostOfferingsOfferingIdChannelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelRequired;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOfferingsOfferingIdChannelsRequest();
    $request->channelRequired = new ChannelRequired();
    $request->channelRequired->isBroadcastOnly = false;
    $request->channelRequired->title = 'Ms.';
    $request->offeringId = 'culpa';

    $response = $sdk->channels->postOfferingsOfferingIdChannels($request);

    if ($response->channelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOfferingsOfferingIdChannelsChannelIdLearners

Adds a learner to a specified group channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostOfferingsOfferingIdChannelsChannelIdLearnersRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOfferingsOfferingIdChannelsChannelIdLearnersRequest();
    $request->requestBody = new PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody();
    $request->requestBody->email = 'Veronica.Brakus@hotmail.com';
    $request->channelId = 'culpa';
    $request->offeringId = 'consequuntur';

    $response = $sdk->channels->postOfferingsOfferingIdChannelsChannelIdLearners($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
