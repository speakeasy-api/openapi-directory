# customers

### Available Operations

* [deleteConsumerV1CustomersId](#deleteconsumerv1customersid) - Delete Customer
* [getConsumerV1Customers](#getconsumerv1customers) - List Customers
* [getConsumerV1CustomersBookingfields](#getconsumerv1customersbookingfields) - Get Customer Booking Fields
* [getConsumerV1CustomersCountries](#getconsumerv1customerscountries) - List Country Codes
* [getConsumerV1CustomersCustomfields](#getconsumerv1customerscustomfields) - Get Customer Custom Fields
* [getConsumerV1CustomersStates](#getconsumerv1customersstates) - List Country States
* [getConsumerV1CustomersId](#getconsumerv1customersid) - Get Customer
* [postConsumerV1Customers](#postconsumerv1customers) - Create Customer
* [putConsumerV1CustomersId](#putconsumerv1customersid) - Update Customer

## deleteConsumerV1CustomersId

<p>Use this endpoint to permanently <b>Delete</b> a Customer object. A valid <b>customer id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConsumerV1CustomersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConsumerV1CustomersIdRequest();
    $request->id = '3cf3be45-3f87-40b3-a6b5-a73429cdb1a8';

    $response = $sdk->customers->deleteConsumerV1CustomersId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1Customers

<p>Use this endpoint to return a <b>List of Customers</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1CustomersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1CustomersRequest();
    $request->deleted = false;
    $request->email = 'Brendon_Daniel39@gmail.com';
    $request->groupId = 'quam';
    $request->lastname = 'Mann';
    $request->limit = 840429;
    $request->locationId = 'qui';
    $request->offset = 204865;

    $response = $sdk->customers->getConsumerV1Customers($request);

    if ($response->customerListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1CustomersBookingfields

<p>Use this endpoint to return <b>Customer Booking Fields</b>. Customer booking fields are stored with each customer object. They are used when the information collected during the booking is for a particular customer. Customer Booking Fields include any custom customer fields you define and want to capture with the Booking.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1CustomersBookingfieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1CustomersBookingfieldsRequest();
    $request->locationId = 'fugit';

    $response = $sdk->customers->getConsumerV1CustomersBookingfields($request);

    if ($response->bookingFieldListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1CustomersCountries

<p>Use this endpoint to return a <b>List of Countries with their associated Country Code</b>. Country codes are based on the 2-character ANSI standard. If your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->customers->getConsumerV1CustomersCountries();

    if ($response->countryViewModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1CustomersCustomfields

<p>Use this endpoint to return <b>Customer Custom Fields</b>. Customer custom fields are stored with the customer object. They are used when the information collected during the booking is specific to a particular customer.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1CustomersCustomfieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1CustomersCustomfieldsRequest();
    $request->leadQuestions = false;
    $request->locationId = 'magni';

    $response = $sdk->customers->getConsumerV1CustomersCustomfields($request);

    if ($response->customFieldDefinitionListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1CustomersStates

<p>Use this endpoint to return a <b>List of Countries with their associated State Codes</b>. Supply a country code to filter results further. If states for your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1CustomersStatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1CustomersStatesRequest();
    $request->country = 'Lebanon';

    $response = $sdk->customers->getConsumerV1CustomersStates($request);

    if ($response->stateViewModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1CustomersId

<p>Use this endpoint to return a <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's by using the <i>GET /consumer/v1/customers</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1CustomersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1CustomersIdRequest();
    $request->id = '15bf0cbb-1e31-4b8b-90f3-443a1108e0ad';

    $response = $sdk->customers->getConsumerV1CustomersId($request);

    if ($response->customerViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConsumerV1Customers

<p>Use this endpoint to <b>Create</b> a new Customer. A customer object is automatically created with the first appointment booking if it doesn't already exist. If not specified, the business location id defaults to the primary business location.</p>
<p>Required Fields: <b>Email</b> and <b>Name</b> or <b>First and Lastname</b> depending on customer type. Type 0 = Person, Type 1 = Business. For type 0, the firstname and lastname fields are used. For type 1, the Name field is used, and the name field is also used to populate the lastname.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CustomerInputModel;
use \OpenAPI\OpenAPI\Models\Shared\AddressInputModel;
use \OpenAPI\OpenAPI\Models\Shared\ContactInputModel;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerInputModel();
    $request->address = new AddressInputModel();
    $request->address->addressLine1 = 'porro';
    $request->address->addressLine2 = 'doloribus';
    $request->address->city = 'Lake Kyler';
    $request->address->country = 'Christmas Island';
    $request->address->postalCode = '54597';
    $request->address->state = 'vero';
    $request->contact = new ContactInputModel();
    $request->contact->businessPhone = 'omnis';
    $request->contact->businessPhoneExt = 'quis';
    $request->contact->conferenceInfo = 'ipsum';
    $request->contact->homePhone = 'delectus';
    $request->contact->mobilePhone = 'voluptate';
    $request->contact->preferredPhoneType = 'consectetur';
    $request->contact->skypeUsername = 'vero';
    $request->customFields = new CustomFieldInputModel();
    $request->customFields->field1 = 'tenetur';
    $request->customFields->field10 = 'dignissimos';
    $request->customFields->field2 = 'hic';
    $request->customFields->field3 = 'distinctio';
    $request->customFields->field4 = 'quod';
    $request->customFields->field5 = 'odio';
    $request->customFields->field6 = 'similique';
    $request->customFields->field7 = 'facilis';
    $request->customFields->field8 = 'vero';
    $request->customFields->field9 = 'ducimus';
    $request->email = 'Rosalinda61@gmail.com';
    $request->firstname = 'Oma';
    $request->lastname = 'Ankunding';
    $request->locationId = 'voluptatibus';
    $request->name = 'Freda Cormier';
    $request->notificationType = 'doloribus';
    $request->sendLeadNotification = false;
    $request->stripeCustomerId = 'iusto';
    $request->type = 753570;

    $response = $sdk->customers->postConsumerV1Customers($request);

    if ($response->customerViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConsumerV1CustomersId

<p>Use this endpoint to <b>Update</b> a Customer object. A valid <b>customer id</b> is required. Note: Blank fields are not changed.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConsumerV1CustomersIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\AddressUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\ContactUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldUpdateModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConsumerV1CustomersIdRequest();
    $request->customerUpdateModel = new CustomerUpdateModel();
    $request->customerUpdateModel->address = new AddressUpdateModel();
    $request->customerUpdateModel->address->addressLine1 = 'ducimus';
    $request->customerUpdateModel->address->addressLine2 = 'alias';
    $request->customerUpdateModel->address->city = 'Gloverbury';
    $request->customerUpdateModel->address->country = 'Iran';
    $request->customerUpdateModel->address->postalCode = '48214';
    $request->customerUpdateModel->address->state = 'laudantium';
    $request->customerUpdateModel->contact = new ContactUpdateModel();
    $request->customerUpdateModel->contact->businessPhone = 'dicta';
    $request->customerUpdateModel->contact->businessPhoneExt = 'dolor';
    $request->customerUpdateModel->contact->conferenceInfo = 'maiores';
    $request->customerUpdateModel->contact->homePhone = 'quasi';
    $request->customerUpdateModel->contact->mobilePhone = 'ex';
    $request->customerUpdateModel->contact->preferredPhoneType = 'nulla';
    $request->customerUpdateModel->contact->skypeUsername = 'excepturi';
    $request->customerUpdateModel->customFields = new CustomFieldUpdateModel();
    $request->customerUpdateModel->customFields->field1 = 'voluptatibus';
    $request->customerUpdateModel->customFields->field10 = 'nostrum';
    $request->customerUpdateModel->customFields->field2 = 'sapiente';
    $request->customerUpdateModel->customFields->field3 = 'quisquam';
    $request->customerUpdateModel->customFields->field4 = 'saepe';
    $request->customerUpdateModel->customFields->field5 = 'ea';
    $request->customerUpdateModel->customFields->field6 = 'impedit';
    $request->customerUpdateModel->customFields->field7 = 'corporis';
    $request->customerUpdateModel->customFields->field8 = 'veniam';
    $request->customerUpdateModel->customFields->field9 = 'aliquid';
    $request->customerUpdateModel->email = 'Elissa.Jaskolski92@gmail.com';
    $request->customerUpdateModel->firstname = 'Brennan';
    $request->customerUpdateModel->lastname = 'Hane';
    $request->customerUpdateModel->locationId = 'eaque';
    $request->customerUpdateModel->name = 'Ms. Marco Ankunding';
    $request->customerUpdateModel->notificationType = 'aliquam';
    $request->customerUpdateModel->stripeCustomerId = 'fugit';
    $request->customerUpdateModel->type = 882860;
    $request->id = '141aac36-6c8d-4d6b-9442-907474778a7b';

    $response = $sdk->customers->putConsumerV1CustomersId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
