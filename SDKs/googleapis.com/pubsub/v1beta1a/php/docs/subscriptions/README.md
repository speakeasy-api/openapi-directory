# subscriptions

### Available Operations

* [pubsubSubscriptionsAcknowledge](#pubsubsubscriptionsacknowledge) - Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.
* [pubsubSubscriptionsCreate](#pubsubsubscriptionscreate) - Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.
* [pubsubSubscriptionsDelete](#pubsubsubscriptionsdelete) - Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.
* [pubsubSubscriptionsGet](#pubsubsubscriptionsget) - Gets the configuration details of a subscription.
* [pubsubSubscriptionsList](#pubsubsubscriptionslist) - Lists matching subscriptions.
* [pubsubSubscriptionsModifyAckDeadline](#pubsubsubscriptionsmodifyackdeadline) - Modifies the Ack deadline for a message received from a pull request.
* [pubsubSubscriptionsModifyPushConfig](#pubsubsubscriptionsmodifypushconfig) - Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.
* [pubsubSubscriptionsPull](#pubsubsubscriptionspull) - Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).
* [pubsubSubscriptionsPullBatch](#pubsubsubscriptionspullbatch) - Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.

## pubsubSubscriptionsAcknowledge

Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsAcknowledgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AcknowledgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsAcknowledgeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsAcknowledgeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsAcknowledgeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubSubscriptionsAcknowledgeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->acknowledgeRequest = new AcknowledgeRequest();
    $request->acknowledgeRequest->ackId = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->acknowledgeRequest->subscription = 'placeat';
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'nisi';
    $request->key = 'recusandae';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new PubsubSubscriptionsAcknowledgeSecurity();
    $requestSecurity->option1 = new PubsubSubscriptionsAcknowledgeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->pubsubSubscriptionsAcknowledge($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pubsubSubscriptionsCreate

Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;
use \OpenAPI\OpenAPI\Models\Shared\PushConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubSubscriptionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->subscription = new Subscription();
    $request->subscription->ackDeadlineSeconds = 20218;
    $request->subscription->name = 'Estelle Will';
    $request->subscription->pushConfig = new PushConfig();
    $request->subscription->pushConfig->pushEndpoint = 'at';
    $request->subscription->topic = 'at';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new PubsubSubscriptionsCreateSecurity();
    $requestSecurity->option1 = new PubsubSubscriptionsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->pubsubSubscriptionsCreate($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pubsubSubscriptionsDelete

Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubSubscriptionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->subscription = 'beatae';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new PubsubSubscriptionsDeleteSecurity();
    $requestSecurity->option1 = new PubsubSubscriptionsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->pubsubSubscriptionsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pubsubSubscriptionsGet

Gets the configuration details of a subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubSubscriptionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'esse';
    $request->key = 'ipsum';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->subscription = 'perferendis';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new PubsubSubscriptionsGetSecurity();
    $requestSecurity->option1 = new PubsubSubscriptionsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->pubsubSubscriptionsGet($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pubsubSubscriptionsList

Lists matching subscriptions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubSubscriptionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->maxResults = 902599;
    $request->oauthToken = 'fuga';
    $request->pageToken = 'in';
    $request->prettyPrint = false;
    $request->query = 'corporis';
    $request->quotaUser = 'iste';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new PubsubSubscriptionsListSecurity();
    $requestSecurity->option1 = new PubsubSubscriptionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->pubsubSubscriptionsList($request, $requestSecurity);

    if ($response->listSubscriptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pubsubSubscriptionsModifyAckDeadline

Modifies the Ack deadline for a message received from a pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsModifyAckDeadlineRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModifyAckDeadlineRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsModifyAckDeadlineSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsModifyAckDeadlineSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsModifyAckDeadlineSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubSubscriptionsModifyAckDeadlineRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->modifyAckDeadlineRequest = new ModifyAckDeadlineRequest();
    $request->modifyAckDeadlineRequest->ackDeadlineSeconds = 99280;
    $request->modifyAckDeadlineRequest->ackId = 'ipsa';
    $request->modifyAckDeadlineRequest->ackIds = [
        'est',
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->modifyAckDeadlineRequest->subscription = 'dolorem';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'enim';
    $request->key = 'omnis';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new PubsubSubscriptionsModifyAckDeadlineSecurity();
    $requestSecurity->option1 = new PubsubSubscriptionsModifyAckDeadlineSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->pubsubSubscriptionsModifyAckDeadline($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pubsubSubscriptionsModifyPushConfig

Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsModifyPushConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModifyPushConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\PushConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsModifyPushConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsModifyPushConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsModifyPushConfigSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubSubscriptionsModifyPushConfigRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->modifyPushConfigRequest = new ModifyPushConfigRequest();
    $request->modifyPushConfigRequest->pushConfig = new PushConfig();
    $request->modifyPushConfigRequest->pushConfig->pushEndpoint = 'culpa';
    $request->modifyPushConfigRequest->subscription = 'doloribus';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'dolorem';
    $request->key = 'culpa';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new PubsubSubscriptionsModifyPushConfigSecurity();
    $requestSecurity->option1 = new PubsubSubscriptionsModifyPushConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->pubsubSubscriptionsModifyPushConfig($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pubsubSubscriptionsPull

Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsPullRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PullRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsPullSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsPullSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsPullSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubSubscriptionsPullRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->pullRequest = new PullRequest();
    $request->pullRequest->returnImmediately = false;
    $request->pullRequest->subscription = 'commodi';
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'error';
    $request->key = 'quia';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'vitae';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'animi';

    $requestSecurity = new PubsubSubscriptionsPullSecurity();
    $requestSecurity->option1 = new PubsubSubscriptionsPullSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->pubsubSubscriptionsPull($request, $requestSecurity);

    if ($response->pullResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pubsubSubscriptionsPullBatch

Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsPullBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PullBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsPullBatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsPullBatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsPullBatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubSubscriptionsPullBatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->pullBatchRequest = new PullBatchRequest();
    $request->pullBatchRequest->maxEvents = 138183;
    $request->pullBatchRequest->returnImmediately = false;
    $request->pullBatchRequest->subscription = 'quo';
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'id';
    $request->key = 'possimus';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new PubsubSubscriptionsPullBatchSecurity();
    $requestSecurity->option1 = new PubsubSubscriptionsPullBatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->pubsubSubscriptionsPullBatch($request, $requestSecurity);

    if ($response->pullBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
