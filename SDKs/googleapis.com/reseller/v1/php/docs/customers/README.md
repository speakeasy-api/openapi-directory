# customers

### Available Operations

* [resellerCustomersGet](#resellercustomersget) - Gets a customer account. Use this operation to see a customer account already in your reseller management, or to see the minimal account information for an existing customer that you do not manage. For more information about the API response for existing customers, see [retrieving a customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#get_customer).
* [resellerCustomersInsert](#resellercustomersinsert) - Orders a new customer's account. Before ordering a new customer account, establish whether the customer account already exists using the [`customers.get`](/admin-sdk/reseller/v1/reference/customers/get) If the customer account exists as a direct Google account or as a resold customer account from another reseller, use the `customerAuthToken\` as described in [order a resold account for an existing customer](/admin-sdk/reseller/v1/how-tos/manage_customers#create_existing_customer). For more information about ordering a new customer account, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#create_customer). After creating a new customer account, you must provision a user as an administrator. The customer's administrator is required to sign in to the Admin console and sign the G Suite via Reseller agreement to activate the account. Resellers are prohibited from signing the G Suite via Reseller agreement on the customer's behalf. For more information, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#tos).
* [resellerCustomersPatch](#resellercustomerspatch) - Updates a customer account's settings. This method supports patch semantics. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [Verify your domain to unlock Essentials features](https://support.google.com/a/answer/9122284).
* [resellerCustomersUpdate](#resellercustomersupdate) - Updates a customer account's settings. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [update a customer's settings](/admin-sdk/reseller/v1/how-tos/manage_customers#update_customer).

## resellerCustomersGet

Gets a customer account. Use this operation to see a customer account already in your reseller management, or to see the minimal account information for an existing customer that you do not manage. For more information about the API response for existing customers, see [retrieving a customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#get_customer).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerCustomersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerCustomersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ResellerCustomersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ResellerCustomersGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerCustomersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->customerId = 'ipsa';
    $request->fields = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new ResellerCustomersGetSecurity();
    $requestSecurity->option1 = new ResellerCustomersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->resellerCustomersGet($request, $requestSecurity);

    if ($response->customer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resellerCustomersInsert

Orders a new customer's account. Before ordering a new customer account, establish whether the customer account already exists using the [`customers.get`](/admin-sdk/reseller/v1/reference/customers/get) If the customer account exists as a direct Google account or as a resold customer account from another reseller, use the `customerAuthToken\` as described in [order a resold account for an existing customer](/admin-sdk/reseller/v1/how-tos/manage_customers#create_existing_customer). For more information about ordering a new customer account, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#create_customer). After creating a new customer account, you must provision a user as an administrator. The customer's administrator is required to sign in to the Admin console and sign the G Suite via Reseller agreement to activate the account. Resellers are prohibited from signing the G Suite via Reseller agreement on the customer's behalf. For more information, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#tos).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerCustomersInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Customer;
use \OpenAPI\OpenAPI\Models\Shared\CustomerCustomerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\PrimaryAdmin;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerCustomersInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerCustomersInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->customer = new Customer();
    $request->customer->alternateEmail = 'iusto';
    $request->customer->customerDomain = 'excepturi';
    $request->customer->customerDomainVerified = false;
    $request->customer->customerId = 'nisi';
    $request->customer->customerType = CustomerCustomerTypeEnum::TEAM;
    $request->customer->kind = 'temporibus';
    $request->customer->phoneNumber = 'ab';
    $request->customer->postalAddress = new Address();
    $request->customer->postalAddress->addressLine1 = 'quis';
    $request->customer->postalAddress->addressLine2 = 'veritatis';
    $request->customer->postalAddress->addressLine3 = 'deserunt';
    $request->customer->postalAddress->contactName = 'perferendis';
    $request->customer->postalAddress->countryCode = 'GU';
    $request->customer->postalAddress->kind = 'repellendus';
    $request->customer->postalAddress->locality = 'sapiente';
    $request->customer->postalAddress->organizationName = 'quo';
    $request->customer->postalAddress->postalCode = '88947';
    $request->customer->postalAddress->region = 'quod';
    $request->customer->primaryAdmin = new PrimaryAdmin();
    $request->customer->primaryAdmin->primaryEmail = 'esse';
    $request->customer->resourceUiUrl = 'totam';
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->customerAuthToken = 'nam';
    $request->fields = 'officia';
    $request->key = 'occaecati';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new ResellerCustomersInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->resellerCustomersInsert($request, $requestSecurity);

    if ($response->customer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resellerCustomersPatch

Updates a customer account's settings. This method supports patch semantics. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [Verify your domain to unlock Essentials features](https://support.google.com/a/answer/9122284).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerCustomersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Customer;
use \OpenAPI\OpenAPI\Models\Shared\CustomerCustomerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\PrimaryAdmin;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerCustomersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerCustomersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->customer = new Customer();
    $request->customer->alternateEmail = 'beatae';
    $request->customer->customerDomain = 'commodi';
    $request->customer->customerDomainVerified = false;
    $request->customer->customerId = 'molestiae';
    $request->customer->customerType = CustomerCustomerTypeEnum::CUSTOMER_TYPE_UNSPECIFIED;
    $request->customer->kind = 'qui';
    $request->customer->phoneNumber = 'impedit';
    $request->customer->postalAddress = new Address();
    $request->customer->postalAddress->addressLine1 = 'cum';
    $request->customer->postalAddress->addressLine2 = 'esse';
    $request->customer->postalAddress->addressLine3 = 'ipsum';
    $request->customer->postalAddress->contactName = 'excepturi';
    $request->customer->postalAddress->countryCode = 'BV';
    $request->customer->postalAddress->kind = 'perferendis';
    $request->customer->postalAddress->locality = 'ad';
    $request->customer->postalAddress->organizationName = 'natus';
    $request->customer->postalAddress->postalCode = '62639';
    $request->customer->postalAddress->region = 'saepe';
    $request->customer->primaryAdmin = new PrimaryAdmin();
    $request->customer->primaryAdmin->primaryEmail = 'fuga';
    $request->customer->resourceUiUrl = 'in';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->customerId = 'saepe';
    $request->fields = 'quidem';
    $request->key = 'architecto';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new ResellerCustomersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->resellerCustomersPatch($request, $requestSecurity);

    if ($response->customer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resellerCustomersUpdate

Updates a customer account's settings. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [update a customer's settings](/admin-sdk/reseller/v1/how-tos/manage_customers#update_customer).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerCustomersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Customer;
use \OpenAPI\OpenAPI\Models\Shared\CustomerCustomerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\PrimaryAdmin;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerCustomersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerCustomersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->customer = new Customer();
    $request->customer->alternateEmail = 'dolores';
    $request->customer->customerDomain = 'dolorem';
    $request->customer->customerDomainVerified = false;
    $request->customer->customerId = 'corporis';
    $request->customer->customerType = CustomerCustomerTypeEnum::CUSTOMER_TYPE_UNSPECIFIED;
    $request->customer->kind = 'nobis';
    $request->customer->phoneNumber = 'enim';
    $request->customer->postalAddress = new Address();
    $request->customer->postalAddress->addressLine1 = 'omnis';
    $request->customer->postalAddress->addressLine2 = 'nemo';
    $request->customer->postalAddress->addressLine3 = 'minima';
    $request->customer->postalAddress->contactName = 'excepturi';
    $request->customer->postalAddress->countryCode = 'AR';
    $request->customer->postalAddress->kind = 'iure';
    $request->customer->postalAddress->locality = 'culpa';
    $request->customer->postalAddress->organizationName = 'doloribus';
    $request->customer->postalAddress->postalCode = '16261-9652';
    $request->customer->postalAddress->region = 'commodi';
    $request->customer->primaryAdmin = new PrimaryAdmin();
    $request->customer->primaryAdmin->primaryEmail = 'quam';
    $request->customer->resourceUiUrl = 'molestiae';
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quia';
    $request->customerId = 'quis';
    $request->fields = 'vitae';
    $request->key = 'laborum';
    $request->oauthToken = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new ResellerCustomersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->resellerCustomersUpdate($request, $requestSecurity);

    if ($response->customer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
