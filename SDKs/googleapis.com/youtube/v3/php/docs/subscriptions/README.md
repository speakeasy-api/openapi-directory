# subscriptions

### Available Operations

* [youtubeSubscriptionsDelete](#youtubesubscriptionsdelete) - Deletes a resource.
* [youtubeSubscriptionsInsert](#youtubesubscriptionsinsert) - Inserts a new resource into this collection.
* [youtubeSubscriptionsList](#youtubesubscriptionslist) - Retrieves a list of resources, possibly filtered.

## youtubeSubscriptionsDelete

Deletes a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeSubscriptionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'velit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'officia';
    $request->id = 'e6e0ac18-4c2b-49c2-87c8-8373a40e1942';
    $request->key = 'maiores';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'veniam';

    $requestSecurity = new YoutubeSubscriptionsDeleteSecurity();
    $requestSecurity->option1 = new YoutubeSubscriptionsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->youtubeSubscriptionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeSubscriptionsInsert

Inserts a new resource into this collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionContentDetailsActivityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionSnippet;
use \OpenAPI\OpenAPI\Models\Shared\ResourceId;
use \OpenAPI\OpenAPI\Models\Shared\ThumbnailDetails;
use \OpenAPI\OpenAPI\Models\Shared\Thumbnail;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionSubscriberSnippet;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsInsertSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeSubscriptionsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->subscription = new Subscription();
    $request->subscription->contentDetails = new SubscriptionContentDetails();
    $request->subscription->contentDetails->activityType = SubscriptionContentDetailsActivityTypeEnum::SUBSCRIPTION_ACTIVITY_TYPE_UNSPECIFIED;
    $request->subscription->contentDetails->newItemCount = 350387;
    $request->subscription->contentDetails->totalItemCount = 331269;
    $request->subscription->etag = 'nihil';
    $request->subscription->id = '56f5d56d-0bd0-4af2-9fe1-3db4f62cba3f';
    $request->subscription->kind = 'praesentium';
    $request->subscription->snippet = new SubscriptionSnippet();
    $request->subscription->snippet->channelId = 'error';
    $request->subscription->snippet->channelTitle = 'non';
    $request->subscription->snippet->description = 'quasi';
    $request->subscription->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-26T10:00:23.303Z');
    $request->subscription->snippet->resourceId = new ResourceId();
    $request->subscription->snippet->resourceId->channelId = 'harum';
    $request->subscription->snippet->resourceId->kind = 'cumque';
    $request->subscription->snippet->resourceId->playlistId = 'doloremque';
    $request->subscription->snippet->resourceId->videoId = 'expedita';
    $request->subscription->snippet->thumbnails = new ThumbnailDetails();
    $request->subscription->snippet->thumbnails->high = new Thumbnail();
    $request->subscription->snippet->thumbnails->high->height = 549237;
    $request->subscription->snippet->thumbnails->high->url = 'eaque';
    $request->subscription->snippet->thumbnails->high->width = 643199;
    $request->subscription->snippet->thumbnails->maxres = new Thumbnail();
    $request->subscription->snippet->thumbnails->maxres->height = 396223;
    $request->subscription->snippet->thumbnails->maxres->url = 'excepturi';
    $request->subscription->snippet->thumbnails->maxres->width = 167435;
    $request->subscription->snippet->thumbnails->medium = new Thumbnail();
    $request->subscription->snippet->thumbnails->medium->height = 273677;
    $request->subscription->snippet->thumbnails->medium->url = 'possimus';
    $request->subscription->snippet->thumbnails->medium->width = 220824;
    $request->subscription->snippet->thumbnails->standard = new Thumbnail();
    $request->subscription->snippet->thumbnails->standard->height = 700529;
    $request->subscription->snippet->thumbnails->standard->url = 'sed';
    $request->subscription->snippet->thumbnails->standard->width = 883078;
    $request->subscription->snippet->title = 'Miss';
    $request->subscription->subscriberSnippet = new SubscriptionSubscriberSnippet();
    $request->subscription->subscriberSnippet->channelId = 'delectus';
    $request->subscription->subscriberSnippet->description = 'minus';
    $request->subscription->subscriberSnippet->thumbnails = new ThumbnailDetails();
    $request->subscription->subscriberSnippet->thumbnails->high = new Thumbnail();
    $request->subscription->subscriberSnippet->thumbnails->high->height = 774748;
    $request->subscription->subscriberSnippet->thumbnails->high->url = 'quos';
    $request->subscription->subscriberSnippet->thumbnails->high->width = 994234;
    $request->subscription->subscriberSnippet->thumbnails->maxres = new Thumbnail();
    $request->subscription->subscriberSnippet->thumbnails->maxres->height = 532326;
    $request->subscription->subscriberSnippet->thumbnails->maxres->url = 'iste';
    $request->subscription->subscriberSnippet->thumbnails->maxres->width = 361106;
    $request->subscription->subscriberSnippet->thumbnails->medium = new Thumbnail();
    $request->subscription->subscriberSnippet->thumbnails->medium->height = 37129;
    $request->subscription->subscriberSnippet->thumbnails->medium->url = 'illo';
    $request->subscription->subscriberSnippet->thumbnails->medium->width = 14251;
    $request->subscription->subscriberSnippet->thumbnails->standard = new Thumbnail();
    $request->subscription->subscriberSnippet->thumbnails->standard->height = 984031;
    $request->subscription->subscriberSnippet->thumbnails->standard->url = 'nostrum';
    $request->subscription->subscriberSnippet->thumbnails->standard->width = 869848;
    $request->subscription->subscriberSnippet->title = 'Dr.';
    $request->accessToken = 'neque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vel';
    $request->fields = 'sapiente';
    $request->key = 'mollitia';
    $request->oauthToken = 'quae';
    $request->part = [
        'aperiam',
        'non',
        'voluptates',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new YoutubeSubscriptionsInsertSecurity();
    $requestSecurity->option1 = new YoutubeSubscriptionsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->youtubeSubscriptionsInsert($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeSubscriptionsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsListOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSubscriptionsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeSubscriptionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'inventore';
    $request->channelId = 'aliquid';
    $request->fields = 'laudantium';
    $request->forChannelId = 'est';
    $request->id = [
        'aliquid',
    ];
    $request->key = 'consectetur';
    $request->maxResults = 768195;
    $request->mine = false;
    $request->myRecentSubscribers = false;
    $request->mySubscribers = false;
    $request->oauthToken = 'rem';
    $request->onBehalfOfContentOwner = 'voluptatum';
    $request->onBehalfOfContentOwnerChannel = 'ducimus';
    $request->order = YoutubeSubscriptionsListOrderEnum::SUBSCRIPTION_ORDER_UNSPECIFIED;
    $request->pageToken = 'recusandae';
    $request->part = [
        'blanditiis',
        'numquam',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'sit';

    $requestSecurity = new YoutubeSubscriptionsListSecurity();
    $requestSecurity->option1 = new YoutubeSubscriptionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->youtubeSubscriptionsList($request, $requestSecurity);

    if ($response->subscriptionListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
