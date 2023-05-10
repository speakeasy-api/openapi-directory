# customers

### Available Operations

* [deleteCustomersIdJson](#deletecustomersidjson) - Delete an existing Customer.
* [getCustomersJson](#getcustomersjson) - Retrieve all Customers.
* [getCustomersCountJson](#getcustomerscountjson) - Count all Customers.
* [getCustomersEmailEmailJson](#getcustomersemailemailjson) - Retrieve a single Customer by email.
* [getCustomersIdJson](#getcustomersidjson) - Retrieve a single Customer by id.
* [postCustomersJson](#postcustomersjson) - Create a new Customer.
* [putCustomersIdJson](#putcustomersidjson) - Update a new Customer.

## deleteCustomersIdJson

Delete an existing Customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomersIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomersIdJsonRequest();
    $request->authtoken = 'in';
    $request->id = 449198;
    $request->login = 'illum';

    $response = $sdk->customers->deleteCustomersIdJson($request);

    if ($response->deleteCustomersIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomersJson

Retrieve all Customers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomersJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomersJsonRequest();
    $request->authtoken = 'maiores';
    $request->limit = 699479;
    $request->login = 'dicta';
    $request->page = 297437;

    $response = $sdk->customers->getCustomersJson($request);

    if ($response->customers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomersCountJson

Count all Customers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomersCountJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomersCountJsonRequest();
    $request->authtoken = 'cumque';
    $request->login = 'facere';

    $response = $sdk->customers->getCustomersCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomersEmailEmailJson

Retrieve a single Customer by email.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomersEmailEmailJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomersEmailEmailJsonRequest();
    $request->authtoken = 'ea';
    $request->email = 'Mariah58@yahoo.com';
    $request->login = 'enim';

    $response = $sdk->customers->getCustomersEmailEmailJson($request);

    if ($response->customer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomersIdJson

Retrieve a single Customer by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomersIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomersIdJsonRequest();
    $request->authtoken = 'accusamus';
    $request->id = 965417;
    $request->login = 'quidem';

    $response = $sdk->customers->getCustomersIdJson($request);

    if ($response->customer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCustomersJson

Create a new Customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCustomersJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerWithPasswordNoID;
use \OpenAPI\OpenAPI\Models\Shared\CustomerFieldsWithPasswordNoID;
use \OpenAPI\OpenAPI\Models\Shared\BillingAddress;
use \OpenAPI\OpenAPI\Models\Shared\ShippingAddress;
use \OpenAPI\OpenAPI\Models\Shared\CustomerFieldsWithPasswordNoIDStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCustomersJsonRequest();
    $request->customerWithPasswordNoID = new CustomerWithPasswordNoID();
    $request->customerWithPasswordNoID->customer = new CustomerFieldsWithPasswordNoID();
    $request->customerWithPasswordNoID->customer->billingAddress = new BillingAddress();
    $request->customerWithPasswordNoID->customer->billingAddress->address = '7655 Feeney Pines';
    $request->customerWithPasswordNoID->customer->billingAddress->city = 'South Libby';
    $request->customerWithPasswordNoID->customer->billingAddress->country = 'Mozambique';
    $request->customerWithPasswordNoID->customer->billingAddress->municipality = 'molestiae';
    $request->customerWithPasswordNoID->customer->billingAddress->name = 'Marcia Gutkowski';
    $request->customerWithPasswordNoID->customer->billingAddress->postal = 'labore';
    $request->customerWithPasswordNoID->customer->billingAddress->region = 'labore';
    $request->customerWithPasswordNoID->customer->billingAddress->surname = 'suscipit';
    $request->customerWithPasswordNoID->customer->billingAddress->taxid = 'natus';
    $request->customerWithPasswordNoID->customer->customerCategory = [
        428769,
        878453,
        135474,
    ];
    $request->customerWithPasswordNoID->customer->email = 'Eliane.Bosco@gmail.com';
    $request->customerWithPasswordNoID->customer->password = 'provident';
    $request->customerWithPasswordNoID->customer->phone = '606-963-4281 x3049';
    $request->customerWithPasswordNoID->customer->shippingAddress = new ShippingAddress();
    $request->customerWithPasswordNoID->customer->shippingAddress->address = '285 King Club';
    $request->customerWithPasswordNoID->customer->shippingAddress->city = 'Fort Felixcester';
    $request->customerWithPasswordNoID->customer->shippingAddress->country = 'Republic of Korea';
    $request->customerWithPasswordNoID->customer->shippingAddress->municipality = 'repellat';
    $request->customerWithPasswordNoID->customer->shippingAddress->name = 'Louis Turner Sr.';
    $request->customerWithPasswordNoID->customer->shippingAddress->postal = 'praesentium';
    $request->customerWithPasswordNoID->customer->shippingAddress->region = 'natus';
    $request->customerWithPasswordNoID->customer->shippingAddress->surname = 'magni';
    $request->customerWithPasswordNoID->customer->status = CustomerFieldsWithPasswordNoIDStatusEnum::APPROVED;
    $request->authtoken = 'quo';
    $request->login = 'illum';

    $response = $sdk->customers->postCustomersJson($request);

    if ($response->customer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCustomersIdJson

Update a new Customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCustomersIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerWithPasswordNoID;
use \OpenAPI\OpenAPI\Models\Shared\CustomerFieldsWithPasswordNoID;
use \OpenAPI\OpenAPI\Models\Shared\BillingAddress;
use \OpenAPI\OpenAPI\Models\Shared\ShippingAddress;
use \OpenAPI\OpenAPI\Models\Shared\CustomerFieldsWithPasswordNoIDStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCustomersIdJsonRequest();
    $request->customerWithPasswordNoID = new CustomerWithPasswordNoID();
    $request->customerWithPasswordNoID->customer = new CustomerFieldsWithPasswordNoID();
    $request->customerWithPasswordNoID->customer->billingAddress = new BillingAddress();
    $request->customerWithPasswordNoID->customer->billingAddress->address = '845 Gwendolyn Burg';
    $request->customerWithPasswordNoID->customer->billingAddress->city = 'Fort Maxbury';
    $request->customerWithPasswordNoID->customer->billingAddress->country = 'Kazakhstan';
    $request->customerWithPasswordNoID->customer->billingAddress->municipality = 'autem';
    $request->customerWithPasswordNoID->customer->billingAddress->name = 'Gary Streich';
    $request->customerWithPasswordNoID->customer->billingAddress->postal = 'perferendis';
    $request->customerWithPasswordNoID->customer->billingAddress->region = 'fugiat';
    $request->customerWithPasswordNoID->customer->billingAddress->surname = 'amet';
    $request->customerWithPasswordNoID->customer->billingAddress->taxid = 'aut';
    $request->customerWithPasswordNoID->customer->customerCategory = [
        359978,
        944124,
        729991,
        749999,
    ];
    $request->customerWithPasswordNoID->customer->email = 'Eulalia.Lebsack@gmail.com';
    $request->customerWithPasswordNoID->customer->password = 'quis';
    $request->customerWithPasswordNoID->customer->phone = '301.842.8399';
    $request->customerWithPasswordNoID->customer->shippingAddress = new ShippingAddress();
    $request->customerWithPasswordNoID->customer->shippingAddress->address = '7507 Jett Passage';
    $request->customerWithPasswordNoID->customer->shippingAddress->city = 'New Maximillianburgh';
    $request->customerWithPasswordNoID->customer->shippingAddress->country = 'Zambia';
    $request->customerWithPasswordNoID->customer->shippingAddress->municipality = 'earum';
    $request->customerWithPasswordNoID->customer->shippingAddress->name = 'Sheryl Parisian';
    $request->customerWithPasswordNoID->customer->shippingAddress->postal = 'provident';
    $request->customerWithPasswordNoID->customer->shippingAddress->region = 'nobis';
    $request->customerWithPasswordNoID->customer->shippingAddress->surname = 'libero';
    $request->customerWithPasswordNoID->customer->status = CustomerFieldsWithPasswordNoIDStatusEnum::DISABLED;
    $request->authtoken = 'quaerat';
    $request->id = 554242;
    $request->login = 'aliquid';

    $response = $sdk->customers->putCustomersIdJson($request);

    if ($response->customer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
