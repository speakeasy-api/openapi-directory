# emergencyContacts

### Available Operations

* [addOrUpdateEmergencyContacts](#addorupdateemergencycontacts) - Add/update emergency contacts

## addOrUpdateEmergencyContacts

Sends new or updated employee emergency contacts directly to Web Pay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdateEmergencyContactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EmergencyContact;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdateEmergencyContactsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddOrUpdateEmergencyContactsRequest();
    $request->companyId = 'dolor';
    $request->emergencyContact = new EmergencyContact();
    $request->emergencyContact->address1 = 'natus';
    $request->emergencyContact->address2 = 'laboriosam';
    $request->emergencyContact->city = 'Toms River';
    $request->emergencyContact->country = 'Palestinian Territory';
    $request->emergencyContact->county = 'in';
    $request->emergencyContact->email = 'Leslie_Kertzmann9@yahoo.com';
    $request->emergencyContact->firstName = 'Andy';
    $request->emergencyContact->homePhone = 'reiciendis';
    $request->emergencyContact->lastName = 'Orn';
    $request->emergencyContact->mobilePhone = 'mollitia';
    $request->emergencyContact->notes = 'laborum';
    $request->emergencyContact->pager = 'dolores';
    $request->emergencyContact->primaryPhone = 'dolorem';
    $request->emergencyContact->priority = 'corporis';
    $request->emergencyContact->relationship = 'explicabo';
    $request->emergencyContact->state = 'nobis';
    $request->emergencyContact->syncEmployeeInfo = false;
    $request->emergencyContact->workExtension = 'enim';
    $request->emergencyContact->workPhone = 'omnis';
    $request->emergencyContact->zip = 'nemo';
    $request->employeeId = 'minima';

    $requestSecurity = new AddOrUpdateEmergencyContactsSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->emergencyContacts->addOrUpdateEmergencyContacts($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
