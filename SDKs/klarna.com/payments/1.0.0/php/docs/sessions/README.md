# sessions

### Available Operations

* [createCreditSession](#createcreditsession) - Create a new payment session
* [readCreditSession](#readcreditsession) - Read an existing payment session
* [updateCreditSession](#updatecreditsession) - Update an existing payment session

## createCreditSession

Use this API call to create a Klarna Payments session.<br/>When a session is created you will receive the available `payment_method_categories` for the session, a `session_id` and a `client_token`. The `session_id` can be used to read or update the session using the REST API. The `client_token` should be passed to the browser.
Read more on **[Create a new payment session](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/)**.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SessionCreateInput;
use \OpenAPI\OpenAPI\Models\Shared\SessionCreateAcquiringChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Attachment;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Customer;
use \OpenAPI\OpenAPI\Models\Shared\CustomerOrganizationEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SessionCreateIntentEnum;
use \OpenAPI\OpenAPI\Models\Shared\MerchantUrls;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\OrderLine;
use \OpenAPI\OpenAPI\Models\Shared\ProductIdentifiers;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionIntervalEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SessionCreateInput();
    $request->acquiringChannel = SessionCreateAcquiringChannelEnum::ECOMMERCE;
    $request->attachment = new Attachment();
    $request->attachment->body = '{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}';
    $request->attachment->contentType = 'application/vnd.klarna.internal.emd-v2+json';
    $request->billingAddress = new Address();
    $request->billingAddress->attention = 'Attn';
    $request->billingAddress->city = 'London';
    $request->billingAddress->country = 'GB';
    $request->billingAddress->email = 'test.sam@test.com';
    $request->billingAddress->familyName = 'Andersson';
    $request->billingAddress->givenName = 'Adam';
    $request->billingAddress->organizationName = 'iusto';
    $request->billingAddress->phone = '+44795465131';
    $request->billingAddress->postalCode = 'W1G 0PW';
    $request->billingAddress->region = 'OH';
    $request->billingAddress->streetAddress = '33 Cavendish Square';
    $request->billingAddress->streetAddress2 = 'Floor 22 / Flat 2';
    $request->billingAddress->title = 'Mr.';
    $request->customPaymentMethodIds = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->customer = new Customer();
    $request->customer->dateOfBirth = '1978-12-31';
    $request->customer->gender = 'male';
    $request->customer->lastFourSsn = 'ab';
    $request->customer->nationalIdentificationNumber = 'quis';
    $request->customer->organizationEntityType = CustomerOrganizationEntityTypeEnum::LIMITED_COMPANY;
    $request->customer->organizationRegistrationId = 'deserunt';
    $request->customer->title = 'Mr.';
    $request->customer->type = 'organization';
    $request->customer->vatId = 'perferendis';
    $request->design = 'ipsam';
    $request->intent = SessionCreateIntentEnum::BUY;
    $request->locale = 'en-US';
    $request->merchantData = '{"order_specific":[{"substore":"Women's Fashion","product_name":"Women Sweatshirt"}]}';
    $request->merchantReference1 = 'ON4711';
    $request->merchantReference2 = 'hdt53h-zdgg6-hdaff2';
    $request->merchantUrls = new MerchantUrls();
    $request->merchantUrls->authorization = 'https://www.example-url.com/authorization';
    $request->merchantUrls->confirmation = 'https://www.example-url.com/confirmation';
    $request->merchantUrls->notification = 'https://www.example-url.com/notification';
    $request->merchantUrls->push = 'https://www.example-url.com/push';
    $request->options = new Options();
    $request->options->colorBorder = '#FF9900';
    $request->options->colorBorderSelected = '#FF9900';
    $request->options->colorDetails = '#FF9900';
    $request->options->colorText = '#FF9900';
    $request->options->radiusBorder = '5px';
    $request->orderAmount = 2500;
    $request->orderLines = [
        new OrderLine(),
        new OrderLine(),
        new OrderLine(),
        new OrderLine(),
    ];
    $request->orderTaxAmount = 475;
    $request->purchaseCountry = 'GB';
    $request->purchaseCurrency = 'GBP';
    $request->shippingAddress = new Address();
    $request->shippingAddress->attention = 'Attn';
    $request->shippingAddress->city = 'London';
    $request->shippingAddress->country = 'GB';
    $request->shippingAddress->email = 'test.sam@test.com';
    $request->shippingAddress->familyName = 'Andersson';
    $request->shippingAddress->givenName = 'Adam';
    $request->shippingAddress->organizationName = 'sapiente';
    $request->shippingAddress->phone = '+44795465131';
    $request->shippingAddress->postalCode = 'W1G 0PW';
    $request->shippingAddress->region = 'OH';
    $request->shippingAddress->streetAddress = '33 Cavendish Square';
    $request->shippingAddress->streetAddress2 = 'Floor 22 / Flat 2';
    $request->shippingAddress->title = 'Mr.';

    $response = $sdk->sessions->createCreditSession($request);

    if ($response->merchantSession !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## readCreditSession

Use this API call to read a Klarna Payments session. You can read the Klarna Payments session at any time after it has been created, to get information about it. This will return all data that has been collected during the session.
Read more on **[Read an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/check-the-details-of-a-payment-session/)**.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReadCreditSessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReadCreditSessionRequest();
    $request->sessionId = 'quo';

    $response = $sdk->sessions->readCreditSession($request);

    if ($response->sessionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCreditSession

Use this API call to update a Klarna Payments session with new details, in case something in the order has changed and the checkout has been reloaded. Including if the consumer adds a new item to the cart or if consumer details are updated.
Read more on **[Update an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/update-the-cart/)**.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCreditSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SessionInput;
use \OpenAPI\OpenAPI\Models\Shared\SessionAcquiringChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Attachment;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Customer;
use \OpenAPI\OpenAPI\Models\Shared\CustomerOrganizationEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SessionIntentEnum;
use \OpenAPI\OpenAPI\Models\Shared\MerchantUrls;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\OrderLine;
use \OpenAPI\OpenAPI\Models\Shared\ProductIdentifiers;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionIntervalEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCreditSessionRequest();
    $request->sessionInput = new SessionInput();
    $request->sessionInput->acquiringChannel = SessionAcquiringChannelEnum::ECOMMERCE;
    $request->sessionInput->attachment = new Attachment();
    $request->sessionInput->attachment->body = '{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}';
    $request->sessionInput->attachment->contentType = 'application/vnd.klarna.internal.emd-v2+json';
    $request->sessionInput->billingAddress = new Address();
    $request->sessionInput->billingAddress->attention = 'Attn';
    $request->sessionInput->billingAddress->city = 'London';
    $request->sessionInput->billingAddress->country = 'GB';
    $request->sessionInput->billingAddress->email = 'test.sam@test.com';
    $request->sessionInput->billingAddress->familyName = 'Andersson';
    $request->sessionInput->billingAddress->givenName = 'Adam';
    $request->sessionInput->billingAddress->organizationName = 'odit';
    $request->sessionInput->billingAddress->phone = '+44795465131';
    $request->sessionInput->billingAddress->postalCode = 'W1G 0PW';
    $request->sessionInput->billingAddress->region = 'OH';
    $request->sessionInput->billingAddress->streetAddress = '33 Cavendish Square';
    $request->sessionInput->billingAddress->streetAddress2 = 'Floor 22 / Flat 2';
    $request->sessionInput->billingAddress->title = 'Mr.';
    $request->sessionInput->customPaymentMethodIds = [
        'at',
        'maiores',
        'molestiae',
        'quod',
    ];
    $request->sessionInput->customer = new Customer();
    $request->sessionInput->customer->dateOfBirth = '1978-12-31';
    $request->sessionInput->customer->gender = 'male';
    $request->sessionInput->customer->lastFourSsn = 'quod';
    $request->sessionInput->customer->nationalIdentificationNumber = 'esse';
    $request->sessionInput->customer->organizationEntityType = CustomerOrganizationEntityTypeEnum::GENERAL_PARTNERSHIP;
    $request->sessionInput->customer->organizationRegistrationId = 'porro';
    $request->sessionInput->customer->title = 'Mr.';
    $request->sessionInput->customer->type = 'organization';
    $request->sessionInput->customer->vatId = 'dolorum';
    $request->sessionInput->design = 'dicta';
    $request->sessionInput->intent = SessionIntentEnum::BUY;
    $request->sessionInput->locale = 'en-GB';
    $request->sessionInput->merchantData = '{"order_specific":[{"substore":"Women's Fashion","product_name":"Women Sweatshirt"}]}';
    $request->sessionInput->merchantReference1 = 'ON4711';
    $request->sessionInput->merchantReference2 = 'hdt53h-zdgg6-hdaff2';
    $request->sessionInput->merchantUrls = new MerchantUrls();
    $request->sessionInput->merchantUrls->authorization = 'https://www.example-url.com/authorization';
    $request->sessionInput->merchantUrls->confirmation = 'https://www.example-url.com/confirmation';
    $request->sessionInput->merchantUrls->notification = 'https://www.example-url.com/notification';
    $request->sessionInput->merchantUrls->push = 'https://www.example-url.com/push';
    $request->sessionInput->options = new Options();
    $request->sessionInput->options->colorBorder = '#FF9900';
    $request->sessionInput->options->colorBorderSelected = '#FF9900';
    $request->sessionInput->options->colorDetails = '#FF9900';
    $request->sessionInput->options->colorText = '#FF9900';
    $request->sessionInput->options->radiusBorder = '5px';
    $request->sessionInput->orderAmount = 2500;
    $request->sessionInput->orderLines = [
        new OrderLine(),
        new OrderLine(),
        new OrderLine(),
    ];
    $request->sessionInput->orderTaxAmount = 475;
    $request->sessionInput->purchaseCountry = 'GB';
    $request->sessionInput->purchaseCurrency = 'GBP';
    $request->sessionInput->shippingAddress = new Address();
    $request->sessionInput->shippingAddress->attention = 'Attn';
    $request->sessionInput->shippingAddress->city = 'London';
    $request->sessionInput->shippingAddress->country = 'GB';
    $request->sessionInput->shippingAddress->email = 'test.sam@test.com';
    $request->sessionInput->shippingAddress->familyName = 'Andersson';
    $request->sessionInput->shippingAddress->givenName = 'Adam';
    $request->sessionInput->shippingAddress->organizationName = 'officia';
    $request->sessionInput->shippingAddress->phone = '+44795465131';
    $request->sessionInput->shippingAddress->postalCode = 'W1G 0PW';
    $request->sessionInput->shippingAddress->region = 'OH';
    $request->sessionInput->shippingAddress->streetAddress = '33 Cavendish Square';
    $request->sessionInput->shippingAddress->streetAddress2 = 'Floor 22 / Flat 2';
    $request->sessionInput->shippingAddress->title = 'Mr.';
    $request->sessionId = 'occaecati';

    $response = $sdk->sessions->updateCreditSession($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
