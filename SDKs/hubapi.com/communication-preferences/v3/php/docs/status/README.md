# status

## Overview

Whether a contact has subscribed or unsubscribed from a given subscription type.

### Available Operations

* [getCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus](#getcommunicationpreferencesv3statusemailemailaddressgetemailstatus) - Get subscription statuses for a contact
* [postCommunicationPreferencesV3SubscribeSubscribe](#postcommunicationpreferencesv3subscribesubscribe) - Subscribe a contact
* [postCommunicationPreferencesV3UnsubscribeUnsubscribe](#postcommunicationpreferencesv3unsubscribeunsubscribe) - Unsubscribe a contact

## getCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus

Returns a list of subscriptions and their status for a given contact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest();
    $request->emailAddress = 'corrupti';

    $requestSecurity = new GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->status->getCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus($request, $requestSecurity);

    if ($response->publicSubscriptionStatusesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCommunicationPreferencesV3SubscribeSubscribe

Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PublicUpdateSubscriptionStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\PublicUpdateSubscriptionStatusRequestLegalBasisEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostCommunicationPreferencesV3SubscribeSubscribeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublicUpdateSubscriptionStatusRequest();
    $request->emailAddress = 'provident';
    $request->legalBasis = PublicUpdateSubscriptionStatusRequestLegalBasisEnum::PROCESS_AND_STORE;
    $request->legalBasisExplanation = 'quibusdam';
    $request->subscriptionId = 'unde';

    $requestSecurity = new PostCommunicationPreferencesV3SubscribeSubscribeSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->status->postCommunicationPreferencesV3SubscribeSubscribe($request, $requestSecurity);

    if ($response->publicSubscriptionStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCommunicationPreferencesV3UnsubscribeUnsubscribe

Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PublicUpdateSubscriptionStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\PublicUpdateSubscriptionStatusRequestLegalBasisEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublicUpdateSubscriptionStatusRequest();
    $request->emailAddress = 'nulla';
    $request->legalBasis = PublicUpdateSubscriptionStatusRequestLegalBasisEnum::CONSENT_WITH_NOTICE;
    $request->legalBasisExplanation = 'illum';
    $request->subscriptionId = 'vel';

    $requestSecurity = new PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->status->postCommunicationPreferencesV3UnsubscribeUnsubscribe($request, $requestSecurity);

    if ($response->publicSubscriptionStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
