# loyalty

### Available Operations

* [accumulateLoyaltyPoints](#accumulateloyaltypoints) - AccumulateLoyaltyPoints
* [adjustLoyaltyPoints](#adjustloyaltypoints) - AdjustLoyaltyPoints
* [calculateLoyaltyPoints](#calculateloyaltypoints) - CalculateLoyaltyPoints
* [createLoyaltyAccount](#createloyaltyaccount) - CreateLoyaltyAccount
* [createLoyaltyReward](#createloyaltyreward) - CreateLoyaltyReward
* [deleteLoyaltyReward](#deleteloyaltyreward) - DeleteLoyaltyReward
* [listLoyaltyPrograms](#listloyaltyprograms) - ListLoyaltyPrograms
* [redeemLoyaltyReward](#redeemloyaltyreward) - RedeemLoyaltyReward
* [retrieveLoyaltyAccount](#retrieveloyaltyaccount) - RetrieveLoyaltyAccount
* [retrieveLoyaltyProgram](#retrieveloyaltyprogram) - RetrieveLoyaltyProgram
* [retrieveLoyaltyReward](#retrieveloyaltyreward) - RetrieveLoyaltyReward
* [searchLoyaltyAccounts](#searchloyaltyaccounts) - SearchLoyaltyAccounts
* [searchLoyaltyEvents](#searchloyaltyevents) - SearchLoyaltyEvents
* [searchLoyaltyRewards](#searchloyaltyrewards) - SearchLoyaltyRewards

## accumulateLoyaltyPoints

Adds points to a loyalty account.

- If you are using the Orders API to manage orders, you only provide the `order_id`. 
The endpoint reads the order to compute points to add to the buyer's account.
- If you are not using the Orders API to manage orders, 
you first perform a client-side computation to compute the points.  
For spend-based and visit-based programs, you can first call 
[CalculateLoyaltyPoints](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/calculate-loyalty-points) to compute the points  
that you provide to this endpoint. 

__Note:__ The country of the seller's Square account determines whether tax is included in the purchase amount when accruing points for spend-based and visit-based programs. 
For more information, see [Availability of Square Loyalty](https://developer.squareup.com/docs/loyalty-api/overview#loyalty-market-availability).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccumulateLoyaltyPointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccumulateLoyaltyPointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyEventAccumulatePoints;
use \OpenAPI\OpenAPI\Models\Operations\AccumulateLoyaltyPointsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccumulateLoyaltyPointsRequest();
    $request->accumulateLoyaltyPointsRequest = new AccumulateLoyaltyPointsRequest();
    $request->accumulateLoyaltyPointsRequest->accumulatePoints = new LoyaltyEventAccumulatePoints();
    $request->accumulateLoyaltyPointsRequest->accumulatePoints->loyaltyProgramId = 'veritatis';
    $request->accumulateLoyaltyPointsRequest->accumulatePoints->orderId = 'quae';
    $request->accumulateLoyaltyPointsRequest->accumulatePoints->points = 51075;
    $request->accumulateLoyaltyPointsRequest->idempotencyKey = 'saepe';
    $request->accumulateLoyaltyPointsRequest->locationId = 'delectus';
    $request->accountId = 'mollitia';

    $requestSecurity = new AccumulateLoyaltyPointsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->loyalty->accumulateLoyaltyPoints($request, $requestSecurity);

    if ($response->accumulateLoyaltyPointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adjustLoyaltyPoints

Adds points to or subtracts points from a buyer's account. 

Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow, you call 
[AccumulateLoyaltyPoints](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/accumulate-loyalty-points) 
to add points when a buyer pays for the purchase.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdjustLoyaltyPointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdjustLoyaltyPointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyEventAdjustPoints;
use \OpenAPI\OpenAPI\Models\Operations\AdjustLoyaltyPointsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdjustLoyaltyPointsRequest();
    $request->adjustLoyaltyPointsRequest = new AdjustLoyaltyPointsRequest();
    $request->adjustLoyaltyPointsRequest->adjustPoints = new LoyaltyEventAdjustPoints();
    $request->adjustLoyaltyPointsRequest->adjustPoints->loyaltyProgramId = 'nulla';
    $request->adjustLoyaltyPointsRequest->adjustPoints->points = 640907;
    $request->adjustLoyaltyPointsRequest->adjustPoints->reason = 'sed';
    $request->adjustLoyaltyPointsRequest->idempotencyKey = 'voluptatem';
    $request->accountId = 'alias';

    $requestSecurity = new AdjustLoyaltyPointsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->loyalty->adjustLoyaltyPoints($request, $requestSecurity);

    if ($response->adjustLoyaltyPointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calculateLoyaltyPoints

Calculates the points a purchase earns.

- If you are using the Orders API to manage orders, you provide `order_id` in the request. The 
endpoint calculates the points by reading the order.
- If you are not using the Orders API to manage orders, you provide the purchase amount in 
the request for the endpoint to calculate the points.

An application might call this endpoint to show the points that a buyer can earn with the 
specific purchase.

__Note:__ The country of the seller's Square account determines whether tax is included in the purchase amount when accruing points for spend-based and visit-based programs. 
For more information, see [Availability of Square Loyalty](https://developer.squareup.com/docs/loyalty-api/overview#loyalty-market-availability).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalculateLoyaltyPointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CalculateLoyaltyPointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Operations\CalculateLoyaltyPointsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalculateLoyaltyPointsRequest();
    $request->calculateLoyaltyPointsRequest = new CalculateLoyaltyPointsRequest();
    $request->calculateLoyaltyPointsRequest->orderId = 'eveniet';
    $request->calculateLoyaltyPointsRequest->transactionAmountMoney = new Money();
    $request->calculateLoyaltyPointsRequest->transactionAmountMoney->amount = 941668;
    $request->calculateLoyaltyPointsRequest->transactionAmountMoney->currency = 'voluptatem';
    $request->programId = 'incidunt';

    $requestSecurity = new CalculateLoyaltyPointsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->loyalty->calculateLoyaltyPoints($request, $requestSecurity);

    if ($response->calculateLoyaltyPointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLoyaltyAccount

Creates a loyalty account. To create a loyalty account, you must provide the `program_id` and a `mapping` with the `phone_number` of the buyer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateLoyaltyAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyAccount;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyAccountExpiringPointDeadline;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyAccountMapping;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoyaltyAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLoyaltyAccountRequest();
    $request->idempotencyKey = 'qui';
    $request->loyaltyAccount = new LoyaltyAccount();
    $request->loyaltyAccount->balance = 185897;
    $request->loyaltyAccount->createdAt = 'necessitatibus';
    $request->loyaltyAccount->customerId = 'harum';
    $request->loyaltyAccount->enrolledAt = 'explicabo';
    $request->loyaltyAccount->expiringPointDeadlines = [
        new LoyaltyAccountExpiringPointDeadline(),
    ];
    $request->loyaltyAccount->id = '64cf9ab8-366c-4723-bfda-9e06bee4825c';
    $request->loyaltyAccount->lifetimePoints = 120277;
    $request->loyaltyAccount->mapping = new LoyaltyAccountMapping();
    $request->loyaltyAccount->mapping->createdAt = 'voluptatibus';
    $request->loyaltyAccount->mapping->id = 'c0e115c8-0bff-4918-944e-c42defcce8f1';
    $request->loyaltyAccount->mapping->phoneNumber = 'sint';
    $request->loyaltyAccount->programId = 'nihil';
    $request->loyaltyAccount->updatedAt = 'esse';

    $requestSecurity = new CreateLoyaltyAccountSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->loyalty->createLoyaltyAccount($request, $requestSecurity);

    if ($response->createLoyaltyAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLoyaltyReward

Creates a loyalty reward. In the process, the endpoint does following:

- Uses the `reward_tier_id` in the request to determine the number of points 
to lock for this reward. 
- If the request includes `order_id`, it adds the reward and related discount to the order. 

After a reward is created, the points are locked and 
not available for the buyer to redeem another reward.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateLoyaltyRewardRequest;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyReward;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoyaltyRewardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLoyaltyRewardRequest();
    $request->idempotencyKey = 'iure';
    $request->reward = new LoyaltyReward();
    $request->reward->createdAt = 'odio';
    $request->reward->id = '3e63562a-7b40-48f0-9e3d-48fdaf313a1f';
    $request->reward->loyaltyAccountId = 'nemo';
    $request->reward->orderId = 'doloribus';
    $request->reward->points = 823753;
    $request->reward->redeemedAt = 'unde';
    $request->reward->rewardTierId = 'incidunt';
    $request->reward->status = 'explicabo';
    $request->reward->updatedAt = 'ipsam';

    $requestSecurity = new CreateLoyaltyRewardSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->loyalty->createLoyaltyReward($request, $requestSecurity);

    if ($response->createLoyaltyRewardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLoyaltyReward

Deletes a loyalty reward by doing the following:

- Returns the loyalty points back to the loyalty account.
- If an order ID was specified when the reward was created 
(see [CreateLoyaltyReward](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/create-loyalty-reward)), 
it updates the order by removing the reward and related 
discounts.

You cannot delete a reward that has reached the terminal state (REDEEMED).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLoyaltyRewardRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLoyaltyRewardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLoyaltyRewardRequest();
    $request->rewardId = 'cupiditate';

    $requestSecurity = new DeleteLoyaltyRewardSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->loyalty->deleteLoyaltyReward($request, $requestSecurity);

    if ($response->deleteLoyaltyRewardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLoyaltyPrograms

Returns a list of loyalty programs in the seller's account.
Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).


Replaced with [RetrieveLoyaltyProgram](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/retrieve-loyalty-program) when used with the keyword `main`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListLoyaltyProgramsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListLoyaltyProgramsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->loyalty->listLoyaltyPrograms($requestSecurity);

    if ($response->listLoyaltyProgramsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## redeemLoyaltyReward

Redeems a loyalty reward.

The endpoint sets the reward to the `REDEEMED` terminal state. 

If you are using your own order processing system (not using the 
Orders API), you call this endpoint after the buyer paid for the 
purchase.

After the reward reaches the terminal state, it cannot be deleted. 
In other words, points used for the reward cannot be returned 
to the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedeemLoyaltyRewardRequest;
use \OpenAPI\OpenAPI\Models\Shared\RedeemLoyaltyRewardRequest;
use \OpenAPI\OpenAPI\Models\Operations\RedeemLoyaltyRewardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedeemLoyaltyRewardRequest();
    $request->redeemLoyaltyRewardRequest = new RedeemLoyaltyRewardRequest();
    $request->redeemLoyaltyRewardRequest->idempotencyKey = 'optio';
    $request->redeemLoyaltyRewardRequest->locationId = 'alias';
    $request->rewardId = 'quidem';

    $requestSecurity = new RedeemLoyaltyRewardSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->loyalty->redeemLoyaltyReward($request, $requestSecurity);

    if ($response->redeemLoyaltyRewardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveLoyaltyAccount

Retrieves a loyalty account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveLoyaltyAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveLoyaltyAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveLoyaltyAccountRequest();
    $request->accountId = 'nesciunt';

    $requestSecurity = new RetrieveLoyaltyAccountSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->loyalty->retrieveLoyaltyAccount($request, $requestSecurity);

    if ($response->retrieveLoyaltyAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveLoyaltyProgram

Retrieves the loyalty program in a seller's account, specified by the program ID or the keyword `main`. 

Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveLoyaltyProgramRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveLoyaltyProgramSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveLoyaltyProgramRequest();
    $request->programId = 'commodi';

    $requestSecurity = new RetrieveLoyaltyProgramSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->loyalty->retrieveLoyaltyProgram($request, $requestSecurity);

    if ($response->retrieveLoyaltyProgramResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveLoyaltyReward

Retrieves a loyalty reward.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveLoyaltyRewardRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveLoyaltyRewardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveLoyaltyRewardRequest();
    $request->rewardId = 'sapiente';

    $requestSecurity = new RetrieveLoyaltyRewardSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->loyalty->retrieveLoyaltyReward($request, $requestSecurity);

    if ($response->retrieveLoyaltyRewardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchLoyaltyAccounts

Searches for loyalty accounts in a loyalty program.  

You can search for a loyalty account using the phone number or customer ID associated with the account. To return all loyalty accounts, specify an empty `query` object or omit it entirely.  

Search results are sorted by `created_at` in ascending order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchLoyaltyAccountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchLoyaltyAccountsRequestLoyaltyAccountQuery;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyAccountMapping;
use \OpenAPI\OpenAPI\Models\Operations\SearchLoyaltyAccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchLoyaltyAccountsRequest();
    $request->cursor = 'consequuntur';
    $request->limit = 330440;
    $request->query = new SearchLoyaltyAccountsRequestLoyaltyAccountQuery();
    $request->query->customerIds = [
        'officia',
        'sint',
        'ut',
        'numquam',
    ];
    $request->query->mappings = [
        new LoyaltyAccountMapping(),
        new LoyaltyAccountMapping(),
        new LoyaltyAccountMapping(),
        new LoyaltyAccountMapping(),
    ];

    $requestSecurity = new SearchLoyaltyAccountsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->loyalty->searchLoyaltyAccounts($request, $requestSecurity);

    if ($response->searchLoyaltyAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchLoyaltyEvents

Searches for loyalty events.

A Square loyalty program maintains a ledger of events that occur during the lifetime of a 
buyer's loyalty account. Each change in the point balance 
(for example, points earned, points redeemed, and points expired) is 
recorded in the ledger. Using this endpoint, you can search the ledger for events.

Search results are sorted by `created_at` in descending order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchLoyaltyEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyEventQuery;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyEventFilter;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyEventDateTimeFilter;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyEventLocationFilter;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyEventLoyaltyAccountFilter;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyEventOrderFilter;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyEventTypeFilter;
use \OpenAPI\OpenAPI\Models\Operations\SearchLoyaltyEventsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchLoyaltyEventsRequest();
    $request->cursor = 'adipisci';
    $request->limit = 728559;
    $request->query = new LoyaltyEventQuery();
    $request->query->filter = new LoyaltyEventFilter();
    $request->query->filter->dateTimeFilter = new LoyaltyEventDateTimeFilter();
    $request->query->filter->dateTimeFilter->createdAt = new TimeRange();
    $request->query->filter->dateTimeFilter->createdAt->endAt = 'in';
    $request->query->filter->dateTimeFilter->createdAt->startAt = 'minima';
    $request->query->filter->locationFilter = new LoyaltyEventLocationFilter();
    $request->query->filter->locationFilter->locationIds = [
        'minus',
        'ab',
    ];
    $request->query->filter->loyaltyAccountFilter = new LoyaltyEventLoyaltyAccountFilter();
    $request->query->filter->loyaltyAccountFilter->loyaltyAccountId = 'beatae';
    $request->query->filter->orderFilter = new LoyaltyEventOrderFilter();
    $request->query->filter->orderFilter->orderId = 'hic';
    $request->query->filter->typeFilter = new LoyaltyEventTypeFilter();
    $request->query->filter->typeFilter->types = [
        'quisquam',
        'dolor',
    ];

    $requestSecurity = new SearchLoyaltyEventsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->loyalty->searchLoyaltyEvents($request, $requestSecurity);

    if ($response->searchLoyaltyEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchLoyaltyRewards

Searches for loyalty rewards in a loyalty account. 

In the current implementation, the endpoint supports search by the reward `status`.

If you know a reward ID, use the 
[RetrieveLoyaltyReward](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/retrieve-loyalty-reward) endpoint.

Search results are sorted by `updated_at` in descending order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchLoyaltyRewardsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchLoyaltyRewardsRequestLoyaltyRewardQuery;
use \OpenAPI\OpenAPI\Models\Operations\SearchLoyaltyRewardsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchLoyaltyRewardsRequest();
    $request->cursor = 'ducimus';
    $request->limit = 683727;
    $request->query = new SearchLoyaltyRewardsRequestLoyaltyRewardQuery();
    $request->query->loyaltyAccountId = 'minima';
    $request->query->status = 'architecto';

    $requestSecurity = new SearchLoyaltyRewardsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->loyalty->searchLoyaltyRewards($request, $requestSecurity);

    if ($response->searchLoyaltyRewardsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
