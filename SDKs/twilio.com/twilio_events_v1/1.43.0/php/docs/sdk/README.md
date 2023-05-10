# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createSink](#createsink) - Create a new Sink
* [createSinkTest](#createsinktest) - Create a new Sink Test Event for the given Sink.
* [createSinkValidate](#createsinkvalidate) - Validate that a test event for a Sink was received.
* [createSubscribedEvent](#createsubscribedevent) - Create a new Subscribed Event type for the subscription
* [createSubscription](#createsubscription) - Create a new Subscription.
* [deleteSink](#deletesink) - Delete a specific Sink.
* [deleteSubscribedEvent](#deletesubscribedevent) - Remove an event type from a subscription.
* [deleteSubscription](#deletesubscription) - Delete a specific Subscription.
* [fetchEventType](#fetcheventtype) - Fetch a specific Event Type.
* [fetchSchema](#fetchschema) - Fetch a specific schema with its nested versions.
* [fetchSchemaVersion](#fetchschemaversion) - Fetch a specific schema and version.
* [fetchSink](#fetchsink) - Fetch a specific Sink.
* [fetchSubscribedEvent](#fetchsubscribedevent) - Read an Event for a Subscription.
* [fetchSubscription](#fetchsubscription) - Fetch a specific Subscription.
* [listEventType](#listeventtype) - Retrieve a paginated list of all the available Event Types.
* [listSchemaVersion](#listschemaversion) - Retrieve a paginated list of versions of the schema.
* [listSink](#listsink) - Retrieve a paginated list of Sinks belonging to the account used to make the request.
* [listSubscribedEvent](#listsubscribedevent) - Retrieve a list of all Subscribed Event types for a Subscription.
* [listSubscription](#listsubscription) - Retrieve a paginated list of Subscriptions belonging to the account used to make the request.
* [updateSink](#updatesink) - Update a specific Sink
* [updateSubscribedEvent](#updatesubscribedevent) - Update an Event for a Subscription.
* [updateSubscription](#updatesubscription) - Update a Subscription.

## createSink

Create a new Sink

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinkCreateSinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\SinkEnumSinkTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSinkCreateSinkRequest();
    $request->description = 'quibusdam';
    $request->sinkConfiguration = 'unde';
    $request->sinkType = SinkEnumSinkTypeEnum::SEGMENT;

    $requestSecurity = new CreateSinkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSink($request, $requestSecurity);

    if ($response->eventsV1Sink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSinkTest

Create a new Sink Test Event for the given Sink.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinkTestRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinkTestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSinkTestRequest();
    $request->sid = 'corrupti';

    $requestSecurity = new CreateSinkTestSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSinkTest($request, $requestSecurity);

    if ($response->eventsV1SinkSinkTest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSinkValidate

Validate that a test event for a Sink was received.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinkValidateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinkValidateCreateSinkValidateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinkValidateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSinkValidateRequest();
    $request->requestBody = new CreateSinkValidateCreateSinkValidateRequest();
    $request->requestBody->testId = 'illum';
    $request->sid = 'vel';

    $requestSecurity = new CreateSinkValidateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSinkValidate($request, $requestSecurity);

    if ($response->eventsV1SinkSinkValidate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubscribedEvent

Create a new Subscribed Event type for the subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscribedEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscribedEventCreateSubscribedEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscribedEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubscribedEventRequest();
    $request->requestBody = new CreateSubscribedEventCreateSubscribedEventRequest();
    $request->requestBody->schemaVersion = 623564;
    $request->requestBody->type = 'deserunt';
    $request->subscriptionSid = 'suscipit';

    $requestSecurity = new CreateSubscribedEventSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSubscribedEvent($request, $requestSecurity);

    if ($response->eventsV1SubscriptionSubscribedEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubscription

Create a new Subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionCreateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubscriptionCreateSubscriptionRequest();
    $request->description = 'iure';
    $request->sinkSid = 'magnam';
    $request->types = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];

    $requestSecurity = new CreateSubscriptionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSubscription($request, $requestSecurity);

    if ($response->eventsV1Subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSink

Delete a specific Sink.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSinkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSinkRequest();
    $request->sid = 'molestiae';

    $requestSecurity = new DeleteSinkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSink($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubscribedEvent

Remove an event type from a subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscribedEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscribedEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubscribedEventRequest();
    $request->subscriptionSid = 'minus';
    $request->type = 'placeat';

    $requestSecurity = new DeleteSubscribedEventSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSubscribedEvent($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubscription

Delete a specific Subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubscriptionRequest();
    $request->sid = 'voluptatum';

    $requestSecurity = new DeleteSubscriptionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSubscription($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchEventType

Fetch a specific Event Type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchEventTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchEventTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchEventTypeRequest();
    $request->type = 'iusto';

    $requestSecurity = new FetchEventTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchEventType($request, $requestSecurity);

    if ($response->eventsV1EventType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSchema

Fetch a specific schema with its nested versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSchemaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSchemaRequest();
    $request->id = '96ed151a-05df-4c2d-9f7c-c78ca1ba928f';

    $requestSecurity = new FetchSchemaSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSchema($request, $requestSecurity);

    if ($response->eventsV1Schema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSchemaVersion

Fetch a specific schema and version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSchemaVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSchemaVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSchemaVersionRequest();
    $request->id = 'c816742c-b739-4205-9293-96fea7596eb1';
    $request->schemaVersion = 60225;

    $requestSecurity = new FetchSchemaVersionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSchemaVersion($request, $requestSecurity);

    if ($response->eventsV1SchemaSchemaVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSink

Fetch a specific Sink.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSinkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSinkRequest();
    $request->sid = 'reiciendis';

    $requestSecurity = new FetchSinkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSink($request, $requestSecurity);

    if ($response->eventsV1Sink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSubscribedEvent

Read an Event for a Subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSubscribedEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSubscribedEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSubscribedEventRequest();
    $request->subscriptionSid = 'est';
    $request->type = 'mollitia';

    $requestSecurity = new FetchSubscribedEventSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSubscribedEvent($request, $requestSecurity);

    if ($response->eventsV1SubscriptionSubscribedEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSubscription

Fetch a specific Subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSubscriptionRequest();
    $request->sid = 'laborum';

    $requestSecurity = new FetchSubscriptionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSubscription($request, $requestSecurity);

    if ($response->eventsV1Subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEventType

Retrieve a paginated list of all the available Event Types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEventTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEventTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEventTypeRequest();
    $request->page = 170909;
    $request->pageSize = 210382;
    $request->pageToken = 'corporis';
    $request->schemaId = 'explicabo';

    $requestSecurity = new ListEventTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listEventType($request, $requestSecurity);

    if ($response->listEventTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSchemaVersion

Retrieve a paginated list of versions of the schema.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSchemaVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSchemaVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSchemaVersionRequest();
    $request->id = 'c5955907-aff1-4a3a-afa9-467739251aa5';
    $request->page = 138183;
    $request->pageSize = 778346;
    $request->pageToken = 'sequi';

    $requestSecurity = new ListSchemaVersionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSchemaVersion($request, $requestSecurity);

    if ($response->listSchemaVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSink

Retrieve a paginated list of Sinks belonging to the account used to make the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSinkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSinkRequest();
    $request->inUse = false;
    $request->page = 949572;
    $request->pageSize = 368725;
    $request->pageToken = 'id';
    $request->status = 'possimus';

    $requestSecurity = new ListSinkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSink($request, $requestSecurity);

    if ($response->listSinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSubscribedEvent

Retrieve a list of all Subscribed Event types for a Subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSubscribedEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSubscribedEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSubscribedEventRequest();
    $request->page = 13571;
    $request->pageSize = 97101;
    $request->pageToken = 'error';
    $request->subscriptionSid = 'temporibus';

    $requestSecurity = new ListSubscribedEventSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSubscribedEvent($request, $requestSecurity);

    if ($response->listSubscribedEventResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSubscription

Retrieve a paginated list of Subscriptions belonging to the account used to make the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSubscriptionRequest();
    $request->page = 673660;
    $request->pageSize = 96098;
    $request->pageToken = 'reiciendis';
    $request->sinkSid = 'voluptatibus';

    $requestSecurity = new ListSubscriptionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSubscription($request, $requestSecurity);

    if ($response->listSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSink

Update a specific Sink

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSinkUpdateSinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSinkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSinkRequest();
    $request->requestBody = new UpdateSinkUpdateSinkRequest();
    $request->requestBody->description = 'vero';
    $request->sid = 'nihil';

    $requestSecurity = new UpdateSinkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSink($request, $requestSecurity);

    if ($response->eventsV1Sink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscribedEvent

Update an Event for a Subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscribedEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscribedEventUpdateSubscribedEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscribedEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubscribedEventRequest();
    $request->requestBody = new UpdateSubscribedEventUpdateSubscribedEventRequest();
    $request->requestBody->schemaVersion = 509624;
    $request->subscriptionSid = 'voluptatibus';
    $request->type = 'ipsa';

    $requestSecurity = new UpdateSubscribedEventSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSubscribedEvent($request, $requestSecurity);

    if ($response->eventsV1SubscriptionSubscribedEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscription

Update a Subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionUpdateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubscriptionRequest();
    $request->requestBody = new UpdateSubscriptionUpdateSubscriptionRequest();
    $request->requestBody->description = 'omnis';
    $request->requestBody->sinkSid = 'voluptate';
    $request->sid = 'cum';

    $requestSecurity = new UpdateSubscriptionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSubscription($request, $requestSecurity);

    if ($response->eventsV1Subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
