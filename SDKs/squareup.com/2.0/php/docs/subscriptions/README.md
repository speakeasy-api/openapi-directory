# subscriptions

### Available Operations

* [cancelSubscription](#cancelsubscription) - CancelSubscription
* [createSubscription](#createsubscription) - CreateSubscription
* [listSubscriptionEvents](#listsubscriptionevents) - ListSubscriptionEvents
* [resumeSubscription](#resumesubscription) - ResumeSubscription
* [retrieveSubscription](#retrievesubscription) - RetrieveSubscription
* [searchSubscriptions](#searchsubscriptions) - SearchSubscriptions
* [updateSubscription](#updatesubscription) - UpdateSubscription

## cancelSubscription

Sets the `canceled_date` field to the end of the active billing period.
After this date, the status changes from ACTIVE to CANCELED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CancelSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelSubscriptionRequest();
    $request->subscriptionId = 'quod';

    $requestSecurity = new CancelSubscriptionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->cancelSubscription($request, $requestSecurity);

    if ($response->cancelSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubscription

Creates a subscription for a customer to a subscription plan.

If you provide a card on file in the request, Square charges the card for
the subscription. Otherwise, Square bills an invoice to the customer's email
address. The subscription starts immediately, unless the request includes
the optional `start_date`. Each individual subscription is associated with a particular location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubscriptionRequest();
    $request->canceledDate = 'minus';
    $request->cardId = 'quos';
    $request->customerId = 'possimus';
    $request->idempotencyKey = 'maiores';
    $request->locationId = 'odio';
    $request->planId = 'provident';
    $request->priceOverrideMoney = new Money();
    $request->priceOverrideMoney->amount = 960933;
    $request->priceOverrideMoney->currency = 'aperiam';
    $request->startDate = 'similique';
    $request->taxPercentage = 'nesciunt';
    $request->timezone = 'provident';

    $requestSecurity = new CreateSubscriptionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->createSubscription($request, $requestSecurity);

    if ($response->createSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSubscriptionEvents

Lists all events for a specific subscription.
In the current implementation, only `START_SUBSCRIPTION` and `STOP_SUBSCRIPTION` (when the subscription was canceled) events are returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSubscriptionEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSubscriptionEventsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSubscriptionEventsRequest();
    $request->cursor = 'ex';
    $request->limit = 832944;
    $request->subscriptionId = 'unde';

    $requestSecurity = new ListSubscriptionEventsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->listSubscriptionEvents($request, $requestSecurity);

    if ($response->listSubscriptionEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resumeSubscription

Resumes a deactivated subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResumeSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResumeSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResumeSubscriptionRequest();
    $request->subscriptionId = 'alias';

    $requestSecurity = new ResumeSubscriptionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->resumeSubscription($request, $requestSecurity);

    if ($response->resumeSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveSubscription

Retrieves a subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveSubscriptionRequest();
    $request->subscriptionId = 'impedit';

    $requestSecurity = new RetrieveSubscriptionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->retrieveSubscription($request, $requestSecurity);

    if ($response->retrieveSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchSubscriptions

Searches for subscriptions.
Results are ordered chronologically by subscription creation date. If
the request specifies more than one location ID,
the endpoint orders the result
by location ID, and then by creation date within each location. If no locations are given
in the query, all locations are searched.

You can also optionally specify `customer_ids` to search by customer.
If left unset, all customers
associated with the specified locations are returned.
If the request specifies customer IDs, the endpoint orders results
first by location, within location by customer ID, and within
customer by subscription creation date.

For more information, see
[Retrieve subscriptions](https://developer.squareup.com/docs/subscriptions-api/overview#retrieve-subscriptions).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchSubscriptionsQuery;
use \OpenAPI\OpenAPI\Models\Shared\SearchSubscriptionsFilter;
use \OpenAPI\OpenAPI\Models\Operations\SearchSubscriptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchSubscriptionsRequest();
    $request->cursor = 'sequi';
    $request->limit = 413086;
    $request->query = new SearchSubscriptionsQuery();
    $request->query->filter = new SearchSubscriptionsFilter();
    $request->query->filter->customerIds = [
        'expedita',
        'in',
    ];
    $request->query->filter->locationIds = [
        'sunt',
        'enim',
        'nulla',
        'maiores',
    ];

    $requestSecurity = new SearchSubscriptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->searchSubscriptions($request, $requestSecurity);

    if ($response->searchSubscriptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscription

Updates a subscription. You can set, modify, and clear the
`subscription` field values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubscriptionRequest();
    $request->updateSubscriptionRequest = new UpdateSubscriptionRequest();
    $request->updateSubscriptionRequest->subscription = new Subscription();
    $request->updateSubscriptionRequest->subscription->canceledDate = 'distinctio';
    $request->updateSubscriptionRequest->subscription->cardId = 'mollitia';
    $request->updateSubscriptionRequest->subscription->chargedThroughDate = 'impedit';
    $request->updateSubscriptionRequest->subscription->createdAt = 'accusamus';
    $request->updateSubscriptionRequest->subscription->customerId = 'et';
    $request->updateSubscriptionRequest->subscription->id = '88b1c4ee-2c8c-46ce-a11f-eeb1c7cbdb6e';
    $request->updateSubscriptionRequest->subscription->invoiceIds = [
        'quod',
        'nihil',
        'quaerat',
        'ipsum',
    ];
    $request->updateSubscriptionRequest->subscription->locationId = 'ducimus';
    $request->updateSubscriptionRequest->subscription->planId = 'laudantium';
    $request->updateSubscriptionRequest->subscription->priceOverrideMoney = new Money();
    $request->updateSubscriptionRequest->subscription->priceOverrideMoney->amount = 701786;
    $request->updateSubscriptionRequest->subscription->priceOverrideMoney->currency = 'deserunt';
    $request->updateSubscriptionRequest->subscription->startDate = 'odit';
    $request->updateSubscriptionRequest->subscription->status = 'ad';
    $request->updateSubscriptionRequest->subscription->taxPercentage = 'sequi';
    $request->updateSubscriptionRequest->subscription->timezone = 'beatae';
    $request->updateSubscriptionRequest->subscription->version = 481042;
    $request->subscriptionId = 'esse';

    $requestSecurity = new UpdateSubscriptionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->updateSubscription($request, $requestSecurity);

    if ($response->updateSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
