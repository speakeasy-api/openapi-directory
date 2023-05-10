# customers

### Available Operations

* [addGroupToCustomer](#addgrouptocustomer) - AddGroupToCustomer
* [createCustomer](#createcustomer) - CreateCustomer
* [createCustomerCard](#createcustomercard) - CreateCustomerCard
* [deleteCustomer](#deletecustomer) - DeleteCustomer
* [deleteCustomerCard](#deletecustomercard) - DeleteCustomerCard
* [listCustomers](#listcustomers) - ListCustomers
* [removeGroupFromCustomer](#removegroupfromcustomer) - RemoveGroupFromCustomer
* [retrieveCustomer](#retrievecustomer) - RetrieveCustomer
* [searchCustomers](#searchcustomers) - SearchCustomers
* [updateCustomer](#updatecustomer) - UpdateCustomer

## addGroupToCustomer

Adds a group membership to a customer.

The customer is identified by the `customer_id` value
and the customer group is identified by the `group_id` value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddGroupToCustomerRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddGroupToCustomerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddGroupToCustomerRequest();
    $request->customerId = 'culpa';
    $request->groupId = 'tempore';

    $requestSecurity = new AddGroupToCustomerSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->addGroupToCustomer($request, $requestSecurity);

    if ($response->addGroupToCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomer

Creates a new customer for a business.

You must provide at least one of the following values in your request to this
endpoint:

- `given_name`
- `family_name`
- `company_name`
- `email_address`
- `phone_number`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateCustomerRequest;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomerRequest();
    $request->address = new Address();
    $request->address->addressLine1 = 'adipisci';
    $request->address->addressLine2 = 'cumque';
    $request->address->addressLine3 = 'consequuntur';
    $request->address->administrativeDistrictLevel1 = 'consequatur';
    $request->address->administrativeDistrictLevel2 = 'minus';
    $request->address->administrativeDistrictLevel3 = 'quaerat';
    $request->address->country = 'Vanuatu';
    $request->address->firstName = 'Darlene';
    $request->address->lastName = 'Koch';
    $request->address->locality = 'blanditiis';
    $request->address->organization = 'provident';
    $request->address->postalCode = '85409-6588';
    $request->address->sublocality = 'quia';
    $request->address->sublocality2 = 'eveniet';
    $request->address->sublocality3 = 'asperiores';
    $request->birthday = 'facere';
    $request->companyName = 'veritatis';
    $request->emailAddress = 'consequuntur';
    $request->familyName = 'quasi';
    $request->givenName = 'similique';
    $request->idempotencyKey = 'culpa';
    $request->nickname = 'aliquid';
    $request->note = 'tenetur';
    $request->phoneNumber = 'quae';
    $request->referenceId = 'earum';

    $requestSecurity = new CreateCustomerSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->createCustomer($request, $requestSecurity);

    if ($response->createCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomerCard

Adds a card on file to an existing customer.

As with charges, calls to `CreateCustomerCard` are idempotent. Multiple
calls with the same card nonce return the same card record that was created
with the provided nonce during the _first_ call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCustomerCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerCardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomerCardRequest();
    $request->createCustomerCardRequest = new CreateCustomerCardRequest();
    $request->createCustomerCardRequest->billingAddress = new Address();
    $request->createCustomerCardRequest->billingAddress->addressLine1 = 'vel';
    $request->createCustomerCardRequest->billingAddress->addressLine2 = 'in';
    $request->createCustomerCardRequest->billingAddress->addressLine3 = 'eius';
    $request->createCustomerCardRequest->billingAddress->administrativeDistrictLevel1 = 'libero';
    $request->createCustomerCardRequest->billingAddress->administrativeDistrictLevel2 = 'illum';
    $request->createCustomerCardRequest->billingAddress->administrativeDistrictLevel3 = 'soluta';
    $request->createCustomerCardRequest->billingAddress->country = 'Antigua and Barbuda';
    $request->createCustomerCardRequest->billingAddress->firstName = 'Elnora';
    $request->createCustomerCardRequest->billingAddress->lastName = 'Williamson';
    $request->createCustomerCardRequest->billingAddress->locality = 'dicta';
    $request->createCustomerCardRequest->billingAddress->organization = 'ullam';
    $request->createCustomerCardRequest->billingAddress->postalCode = '33051';
    $request->createCustomerCardRequest->billingAddress->sublocality = 'quibusdam';
    $request->createCustomerCardRequest->billingAddress->sublocality2 = 'ex';
    $request->createCustomerCardRequest->billingAddress->sublocality3 = 'deleniti';
    $request->createCustomerCardRequest->cardNonce = 'itaque';
    $request->createCustomerCardRequest->cardholderName = 'dolorum';
    $request->createCustomerCardRequest->verificationToken = 'architecto';
    $request->customerId = 'omnis';

    $requestSecurity = new CreateCustomerCardSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->createCustomerCard($request, $requestSecurity);

    if ($response->createCustomerCardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomer

Deletes a customer profile from a business. This operation also unlinks any associated cards on file. 

As a best practice, you should include the `version` field in the request to enable [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency) control. The value must be set to the current version of the customer profile. 

To delete a customer profile that was created by merging existing profiles, you must use the ID of the newly created profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomerRequest();
    $request->customerId = 'tenetur';
    $request->version = 98478;

    $requestSecurity = new DeleteCustomerSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->deleteCustomer($request, $requestSecurity);

    if ($response->deleteCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomerCard

Removes a card on file from a customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerCardRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerCardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomerCardRequest();
    $request->cardId = 'at';
    $request->customerId = 'et';

    $requestSecurity = new DeleteCustomerCardSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->deleteCustomerCard($request, $requestSecurity);

    if ($response->deleteCustomerCardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomers

Lists customer profiles associated with a Square account.

Under normal operating conditions, newly created or updated customer profiles become available
for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated
profiles can take closer to one minute or longer, especially during network incidents and outages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomersRequest();
    $request->cursor = 'voluptate';
    $request->limit = 55965;
    $request->sortField = 'minima';
    $request->sortOrder = 'veritatis';

    $requestSecurity = new ListCustomersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->listCustomers($request, $requestSecurity);

    if ($response->listCustomersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeGroupFromCustomer

Removes a group membership from a customer.

The customer is identified by the `customer_id` value
and the customer group is identified by the `group_id` value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveGroupFromCustomerRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveGroupFromCustomerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveGroupFromCustomerRequest();
    $request->customerId = 'consectetur';
    $request->groupId = 'adipisci';

    $requestSecurity = new RemoveGroupFromCustomerSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->removeGroupFromCustomer($request, $requestSecurity);

    if ($response->removeGroupFromCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveCustomer

Returns details for a single customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveCustomerRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveCustomerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveCustomerRequest();
    $request->customerId = 'iste';

    $requestSecurity = new RetrieveCustomerSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->retrieveCustomer($request, $requestSecurity);

    if ($response->retrieveCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchCustomers

Searches the customer profiles associated with a Square account using a supported query filter.

Calling `SearchCustomers` without any explicit query filter returns all
customer profiles ordered alphabetically based on `given_name` and
`family_name`.

Under normal operating conditions, newly created or updated customer profiles become available
for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated
profiles can take closer to one minute or longer, especially during network incidents and outages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchCustomersRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerQuery;
use \OpenAPI\OpenAPI\Models\Shared\CustomerFilter;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Shared\CustomerCreationSourceFilter;
use \OpenAPI\OpenAPI\Models\Shared\CustomerTextFilter;
use \OpenAPI\OpenAPI\Models\Shared\FilterValue;
use \OpenAPI\OpenAPI\Models\Shared\CustomerSort;
use \OpenAPI\OpenAPI\Models\Operations\SearchCustomersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCustomersRequest();
    $request->cursor = 'temporibus';
    $request->limit = 33074;
    $request->query = new CustomerQuery();
    $request->query->filter = new CustomerFilter();
    $request->query->filter->createdAt = new TimeRange();
    $request->query->filter->createdAt->endAt = 'rem';
    $request->query->filter->createdAt->startAt = 'aut';
    $request->query->filter->creationSource = new CustomerCreationSourceFilter();
    $request->query->filter->creationSource->rule = 'laudantium';
    $request->query->filter->creationSource->values = [
        'mollitia',
        'ab',
    ];
    $request->query->filter->emailAddress = new CustomerTextFilter();
    $request->query->filter->emailAddress->exact = 'corrupti';
    $request->query->filter->emailAddress->fuzzy = 'non';
    $request->query->filter->groupIds = new FilterValue();
    $request->query->filter->groupIds->all = [
        'dolor',
    ];
    $request->query->filter->groupIds->any = [
        'numquam',
        'impedit',
        'explicabo',
    ];
    $request->query->filter->groupIds->none = [
        'aut',
        'dignissimos',
    ];
    $request->query->filter->phoneNumber = new CustomerTextFilter();
    $request->query->filter->phoneNumber->exact = 'dicta';
    $request->query->filter->phoneNumber->fuzzy = 'maiores';
    $request->query->filter->referenceId = new CustomerTextFilter();
    $request->query->filter->referenceId->exact = 'natus';
    $request->query->filter->referenceId->fuzzy = 'velit';
    $request->query->filter->updatedAt = new TimeRange();
    $request->query->filter->updatedAt->endAt = 'voluptatibus';
    $request->query->filter->updatedAt->startAt = 'voluptas';
    $request->query->sort = new CustomerSort();
    $request->query->sort->field = 'asperiores';
    $request->query->sort->order = 'aperiam';

    $requestSecurity = new SearchCustomersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->searchCustomers($request, $requestSecurity);

    if ($response->searchCustomersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomer

Updates a customer profile. To change an attribute, specify the new value. To remove an attribute, specify the value as an empty string or empty object.

As a best practice, you should include the `version` field in the request to enable [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency) control. The value must be set to the current version of the customer profile.

To update a customer profile that was created by merging existing profiles, you must use the ID of the newly created profile.

You cannot use this endpoint to change cards on file. To make changes, use the [Cards API](https://developer.squareup.com/reference/square_2021-08-18/cards-api) or [Gift Cards API](https://developer.squareup.com/reference/square_2021-08-18/gift-cards-api).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomerRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCustomerRequest;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomerRequest();
    $request->updateCustomerRequest = new UpdateCustomerRequest();
    $request->updateCustomerRequest->address = new Address();
    $request->updateCustomerRequest->address->addressLine1 = 'ea';
    $request->updateCustomerRequest->address->addressLine2 = 'quaerat';
    $request->updateCustomerRequest->address->addressLine3 = 'consequuntur';
    $request->updateCustomerRequest->address->administrativeDistrictLevel1 = 'repellendus';
    $request->updateCustomerRequest->address->administrativeDistrictLevel2 = 'officia';
    $request->updateCustomerRequest->address->administrativeDistrictLevel3 = 'maxime';
    $request->updateCustomerRequest->address->country = 'Lebanon';
    $request->updateCustomerRequest->address->firstName = 'Lucienne';
    $request->updateCustomerRequest->address->lastName = 'Yundt';
    $request->updateCustomerRequest->address->locality = 'nemo';
    $request->updateCustomerRequest->address->organization = 'quae';
    $request->updateCustomerRequest->address->postalCode = '78202';
    $request->updateCustomerRequest->address->sublocality = 'fuga';
    $request->updateCustomerRequest->address->sublocality2 = 'id';
    $request->updateCustomerRequest->address->sublocality3 = 'suscipit';
    $request->updateCustomerRequest->birthday = 'velit';
    $request->updateCustomerRequest->companyName = 'culpa';
    $request->updateCustomerRequest->emailAddress = 'est';
    $request->updateCustomerRequest->familyName = 'recusandae';
    $request->updateCustomerRequest->givenName = 'totam';
    $request->updateCustomerRequest->nickname = 'fugiat';
    $request->updateCustomerRequest->note = 'vel';
    $request->updateCustomerRequest->phoneNumber = 'ducimus';
    $request->updateCustomerRequest->referenceId = 'quos';
    $request->updateCustomerRequest->version = 427834;
    $request->customerId = 'labore';

    $requestSecurity = new UpdateCustomerSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->updateCustomer($request, $requestSecurity);

    if ($response->updateCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
