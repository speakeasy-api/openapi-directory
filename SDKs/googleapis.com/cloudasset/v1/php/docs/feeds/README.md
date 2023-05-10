# feeds

### Available Operations

* [cloudassetFeedsCreate](#cloudassetfeedscreate) - Creates a feed in a parent project/folder/organization to listen to its asset updates.
* [cloudassetFeedsList](#cloudassetfeedslist) - Lists all asset feeds in a parent project/folder/organization.

## cloudassetFeedsCreate

Creates a feed in a parent project/folder/organization to listen to its asset updates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetFeedsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateFeedRequest;
use \OpenAPI\OpenAPI\Models\Shared\Feed;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\FeedContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeedOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\PubsubDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetFeedsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetFeedsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createFeedRequest = new CreateFeedRequest();
    $request->createFeedRequest->feed = new Feed();
    $request->createFeedRequest->feed->assetNames = [
        'qui',
        'impedit',
    ];
    $request->createFeedRequest->feed->assetTypes = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->createFeedRequest->feed->condition = new Expr();
    $request->createFeedRequest->feed->condition->description = 'aspernatur';
    $request->createFeedRequest->feed->condition->expression = 'perferendis';
    $request->createFeedRequest->feed->condition->location = 'ad';
    $request->createFeedRequest->feed->condition->title = 'Miss';
    $request->createFeedRequest->feed->contentType = FeedContentTypeEnum::RESOURCE;
    $request->createFeedRequest->feed->feedOutputConfig = new FeedOutputConfig();
    $request->createFeedRequest->feed->feedOutputConfig->pubsubDestination = new PubsubDestination();
    $request->createFeedRequest->feed->feedOutputConfig->pubsubDestination->topic = 'iste';
    $request->createFeedRequest->feed->name = 'Faye Howe';
    $request->createFeedRequest->feed->relationshipTypes = [
        'in',
        'corporis',
        'iste',
    ];
    $request->createFeedRequest->feedId = 'iure';
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'ipsa';
    $request->key = 'reiciendis';
    $request->oauthToken = 'est';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new CloudassetFeedsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->feeds->cloudassetFeedsCreate($request, $requestSecurity);

    if ($response->feed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetFeedsList

Lists all asset feeds in a parent project/folder/organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetFeedsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetFeedsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetFeedsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'omnis';
    $request->key = 'nemo';
    $request->oauthToken = 'minima';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new CloudassetFeedsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->feeds->cloudassetFeedsList($request, $requestSecurity);

    if ($response->listFeedsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
