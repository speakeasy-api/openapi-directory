# recurringPaymentsAPIEmailSubscriptionsFeature

## Overview

Streamline your workflows by sending payments to your customers on a regular basis with NOWPayments.  
This feature involves creating a plan for payments and individual recurring payments for each user.  
First you need to create a Recurring Payment plan:

### Available Operations

* [deleteRecurringPayment](#deleterecurringpayment) - Delete recurring payment
* [getManyPlans](#getmanyplans) - Get many plans
* [getManyRecurringPayments](#getmanyrecurringpayments) - Get many recurring payments
* [getOnePlan](#getoneplan) - Get one plan
* [getOneRecurringPayment](#getonerecurringpayment) - Get one recurring payment
* [updatePlan](#updateplan) - Update plan

## deleteRecurringPayment

Completely removes a particular payment from the recurring payment plan.  
You need to specify the payment plan id in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecurringPaymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRecurringPaymentRequest();
    $request->requestBody = 'explicabo';
    $request->subId = 'nobis';

    $response = $sdk->recurringPaymentsAPIEmailSubscriptionsFeature->deleteRecurringPayment($request);

    if ($response->deleteRecurringPayment200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getManyPlans

This method allows you to obtain information about all the payment plans you’ve created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetManyPlansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetManyPlansRequest();
    $request->limit = '10';
    $request->offset = '3';
    $request->xApiKey = '{{your_api_key}}';

    $response = $sdk->recurringPaymentsAPIEmailSubscriptionsFeature->getManyPlans($request);

    if ($response->getManyPlans200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getManyRecurringPayments

The method allows you to view the entire list of recurring payments filtered by payment status and/or payment plan id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetManyRecurringPaymentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetManyRecurringPaymentsRequest();
    $request->requestBody = 'enim';
    $request->isActive = 'false';
    $request->limit = '10';
    $request->offset = '0';
    $request->status = 'PARTIALLY_PAID';
    $request->subscriptionPlanId = '111394288';
    $request->xApiKey = '{{your_api_key}}';

    $response = $sdk->recurringPaymentsAPIEmailSubscriptionsFeature->getManyRecurringPayments($request);

    if ($response->getManyRecurringPayments200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOnePlan

This method allows you to obtain information about your payment plan.  
(you need to specify your payment plan id in the request).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOnePlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOnePlanRequest();
    $request->planId = 'omnis';
    $request->xApiKey = '{{your_api_key}}';

    $response = $sdk->recurringPaymentsAPIEmailSubscriptionsFeature->getOnePlan($request);

    if ($response->getOnePlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOneRecurringPayment

Get information about a particular recurring payment via its ID.

Here’s the list of available statuses:  
\- WAITING_PAY  
\- PAID  
\- PARTIALLY_PAID  
\- EXPIRED

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOneRecurringPaymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOneRecurringPaymentRequest();
    $request->requestBody = 'nemo';
    $request->subId = 'minima';
    $request->xApiKey = '{{your_api_key}}';

    $response = $sdk->recurringPaymentsAPIEmailSubscriptionsFeature->getOneRecurringPayment($request);

    if ($response->getOneRecurringPayment200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePlan

This method allows you to add necessary changes to a created plan. They won’t affect users who have already paid; however, the changes will take effect when a new payment is to be made.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePlanRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePlanRequest();
    $request->requestBody = new UpdatePlanRequestBody();
    $request->requestBody->amount = 2;
    $request->requestBody->currency = 'usd';
    $request->requestBody->intervalDay = 1;
    $request->requestBody->title = 'test plan';
    $request->planId = 'excepturi';

    $response = $sdk->recurringPaymentsAPIEmailSubscriptionsFeature->updatePlan($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
