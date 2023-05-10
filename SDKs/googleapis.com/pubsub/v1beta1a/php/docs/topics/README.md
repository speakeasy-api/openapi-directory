# topics

### Available Operations

* [pubsubTopicsCreate](#pubsubtopicscreate) - Creates the given topic with the given name.
* [pubsubTopicsDelete](#pubsubtopicsdelete) - Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.
* [pubsubTopicsGet](#pubsubtopicsget) - Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.
* [pubsubTopicsList](#pubsubtopicslist) - Lists matching topics.
* [pubsubTopicsPublish](#pubsubtopicspublish) - Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.
* [pubsubTopicsPublishBatch](#pubsubtopicspublishbatch) - Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.

## pubsubTopicsCreate

Creates the given topic with the given name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Topic;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubTopicsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->topic = new Topic();
    $request->topic->name = 'Johanna Wolf';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'omnis';
    $request->key = 'voluptate';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'reprehenderit';

    $requestSecurity = new PubsubTopicsCreateSecurity();
    $requestSecurity->option1 = new PubsubTopicsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->topics->pubsubTopicsCreate($request, $requestSecurity);

    if ($response->topic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pubsubTopicsDelete

Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubTopicsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'dolore';
    $request->key = 'iusto';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->topic = 'enim';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new PubsubTopicsDeleteSecurity();
    $requestSecurity->option1 = new PubsubTopicsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->topics->pubsubTopicsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pubsubTopicsGet

Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubTopicsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'molestias';
    $request->key = 'excepturi';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->topic = 'praesentium';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'voluptates';

    $requestSecurity = new PubsubTopicsGetSecurity();
    $requestSecurity->option1 = new PubsubTopicsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->topics->pubsubTopicsGet($request, $requestSecurity);

    if ($response->topic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pubsubTopicsList

Lists matching topics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubTopicsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'itaque';
    $request->key = 'incidunt';
    $request->maxResults = 318569;
    $request->oauthToken = 'consequatur';
    $request->pageToken = 'est';
    $request->prettyPrint = false;
    $request->query = 'quibusdam';
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new PubsubTopicsListSecurity();
    $requestSecurity->option1 = new PubsubTopicsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->topics->pubsubTopicsList($request, $requestSecurity);

    if ($response->listTopicsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pubsubTopicsPublish

Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsPublishRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublishRequest;
use \OpenAPI\OpenAPI\Models\Shared\PubsubMessage;
use \OpenAPI\OpenAPI\Models\Shared\Label;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsPublishSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsPublishSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsPublishSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubTopicsPublishRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->publishRequest = new PublishRequest();
    $request->publishRequest->message = new PubsubMessage();
    $request->publishRequest->message->data = 'labore';
    $request->publishRequest->message->label = [
        new Label(),
        new Label(),
    ];
    $request->publishRequest->message->messageId = 'qui';
    $request->publishRequest->message->publishTime = 'aliquid';
    $request->publishRequest->topic = 'cupiditate';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'assumenda';
    $request->key = 'ipsam';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new PubsubTopicsPublishSecurity();
    $requestSecurity->option1 = new PubsubTopicsPublishSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->topics->pubsubTopicsPublish($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pubsubTopicsPublishBatch

Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsPublishBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublishBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\PubsubMessage;
use \OpenAPI\OpenAPI\Models\Shared\Label;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsPublishBatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsPublishBatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubTopicsPublishBatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubTopicsPublishBatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->publishBatchRequest = new PublishBatchRequest();
    $request->publishBatchRequest->messages = [
        new PubsubMessage(),
        new PubsubMessage(),
        new PubsubMessage(),
    ];
    $request->publishBatchRequest->topic = 'tempore';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'non';
    $request->key = 'eligendi';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new PubsubTopicsPublishBatchSecurity();
    $requestSecurity->option1 = new PubsubTopicsPublishBatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->topics->pubsubTopicsPublishBatch($request, $requestSecurity);

    if ($response->publishBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
