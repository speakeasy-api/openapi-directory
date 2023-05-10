# paymentDetails

### Available Operations

* [getDomesticPaymentsDomesticPaymentIdPaymentDetails](#getdomesticpaymentsdomesticpaymentidpaymentdetails) - Get Payment Details
* [getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails](#getdomesticscheduledpaymentsdomesticscheduledpaymentidpaymentdetails) - Get Payment Details
* [getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails](#getdomesticstandingordersdomesticstandingorderidpaymentdetails) - Get Payment Details
* [getFilePaymentsFilePaymentIdPaymentDetails](#getfilepaymentsfilepaymentidpaymentdetails) - Get Payment Details
* [getInternationalPaymentsInternationalPaymentIdPaymentDetails](#getinternationalpaymentsinternationalpaymentidpaymentdetails) - Get Payment Details
* [getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails](#getinternationalscheduledpaymentsinternationalscheduledpaymentidpaymentdetails) - Get Payment Details
* [getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails](#getinternationalstandingordersinternationalstandingorderpaymentidpaymentdetails) - Get Payment Details

## getDomesticPaymentsDomesticPaymentIdPaymentDetails

Get Payment Details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticPaymentsDomesticPaymentIdPaymentDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest();
    $request->authorization = 'ut';
    $request->domesticPaymentId = 'perspiciatis';
    $request->xCustomerUserAgent = 'earum';
    $request->xFapiAuthDate = 'dicta';
    $request->xFapiCustomerIpAddress = 'impedit';
    $request->xFapiInteractionId = 'voluptatibus';

    $requestSecurity = new GetDomesticPaymentsDomesticPaymentIdPaymentDetailsSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDetails->getDomesticPaymentsDomesticPaymentIdPaymentDetails($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails

Get Payment Details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest();
    $request->authorization = 'iste';
    $request->domesticScheduledPaymentId = 'itaque';
    $request->xCustomerUserAgent = 'alias';
    $request->xFapiAuthDate = 'nisi';
    $request->xFapiCustomerIpAddress = 'itaque';
    $request->xFapiInteractionId = 'velit';

    $requestSecurity = new GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDetails->getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails

Get Payment Details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest();
    $request->authorization = 'laborum';
    $request->domesticStandingOrderId = 'non';
    $request->xCustomerUserAgent = 'dolor';
    $request->xFapiAuthDate = 'iusto';
    $request->xFapiCustomerIpAddress = 'sit';
    $request->xFapiInteractionId = 'doloremque';

    $requestSecurity = new GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDetails->getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilePaymentsFilePaymentIdPaymentDetails

Get Payment Details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFilePaymentsFilePaymentIdPaymentDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFilePaymentsFilePaymentIdPaymentDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilePaymentsFilePaymentIdPaymentDetailsRequest();
    $request->authorization = 'consequatur';
    $request->filePaymentId = 'officia';
    $request->xCustomerUserAgent = 'recusandae';
    $request->xFapiAuthDate = 'ea';
    $request->xFapiCustomerIpAddress = 'quidem';
    $request->xFapiInteractionId = 'voluptas';

    $requestSecurity = new GetFilePaymentsFilePaymentIdPaymentDetailsSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDetails->getFilePaymentsFilePaymentIdPaymentDetails($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInternationalPaymentsInternationalPaymentIdPaymentDetails

Get Payment Details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalPaymentsInternationalPaymentIdPaymentDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest();
    $request->authorization = 'facilis';
    $request->internationalPaymentId = 'placeat';
    $request->xCustomerUserAgent = 'perspiciatis';
    $request->xFapiAuthDate = 'expedita';
    $request->xFapiCustomerIpAddress = 'deleniti';
    $request->xFapiInteractionId = 'a';

    $requestSecurity = new GetInternationalPaymentsInternationalPaymentIdPaymentDetailsSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDetails->getInternationalPaymentsInternationalPaymentIdPaymentDetails($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails

Get Payment Details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest();
    $request->authorization = 'voluptate';
    $request->internationalScheduledPaymentId = 'ullam';
    $request->xCustomerUserAgent = 'unde';
    $request->xFapiAuthDate = 'necessitatibus';
    $request->xFapiCustomerIpAddress = 'animi';
    $request->xFapiInteractionId = 'impedit';

    $requestSecurity = new GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDetails->getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails

Get Payment Details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRequest();
    $request->authorization = 'ipsam';
    $request->internationalStandingOrderPaymentId = 'corporis';
    $request->xCustomerUserAgent = 'est';
    $request->xFapiAuthDate = 'error';
    $request->xFapiCustomerIpAddress = 'esse';
    $request->xFapiInteractionId = 'labore';

    $requestSecurity = new GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDetails->getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
