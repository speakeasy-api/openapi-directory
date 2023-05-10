# locations

### Available Operations

* [mybusinessaccountmanagementLocationsAdminsCreate](#mybusinessaccountmanagementlocationsadminscreate) - Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
* [mybusinessaccountmanagementLocationsAdminsDelete](#mybusinessaccountmanagementlocationsadminsdelete) - Removes the specified admin as a manager of the specified location.
* [mybusinessaccountmanagementLocationsAdminsList](#mybusinessaccountmanagementlocationsadminslist) - Lists all of the admins for the specified location.
* [mybusinessaccountmanagementLocationsAdminsPatch](#mybusinessaccountmanagementlocationsadminspatch) - Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.
* [mybusinessaccountmanagementLocationsTransfer](#mybusinessaccountmanagementlocationstransfer) - Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.

## mybusinessaccountmanagementLocationsAdminsCreate

Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessaccountmanagementLocationsAdminsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdminInput;
use \OpenAPI\OpenAPI\Models\Shared\AdminRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessaccountmanagementLocationsAdminsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->adminInput = new AdminInput();
    $request->adminInput->account = 'molestias';
    $request->adminInput->admin = 'excepturi';
    $request->adminInput->name = 'Joel Lang';
    $request->adminInput->role = AdminRoleEnum::ADMIN_ROLE_UNSPECIFIED;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'itaque';
    $request->key = 'incidunt';
    $request->oauthToken = 'enim';
    $request->parent = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'explicabo';

    $response = $sdk->locations->mybusinessaccountmanagementLocationsAdminsCreate($request);

    if ($response->admin !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessaccountmanagementLocationsAdminsDelete

Removes the specified admin as a manager of the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessaccountmanagementLocationsAdminsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessaccountmanagementLocationsAdminsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->name = 'Mr. Shelly Lueilwitz';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'dolorum';

    $response = $sdk->locations->mybusinessaccountmanagementLocationsAdminsDelete($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessaccountmanagementLocationsAdminsList

Lists all of the admins for the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessaccountmanagementLocationsAdminsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessaccountmanagementLocationsAdminsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'labore';
    $request->key = 'delectus';
    $request->oauthToken = 'eum';
    $request->parent = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'aliquid';

    $response = $sdk->locations->mybusinessaccountmanagementLocationsAdminsList($request);

    if ($response->listLocationAdminsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessaccountmanagementLocationsAdminsPatch

Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessaccountmanagementLocationsAdminsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdminInput;
use \OpenAPI\OpenAPI\Models\Shared\AdminRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessaccountmanagementLocationsAdminsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->adminInput = new AdminInput();
    $request->adminInput->account = 'necessitatibus';
    $request->adminInput->admin = 'sint';
    $request->adminInput->name = 'Curtis Toy';
    $request->adminInput->role = AdminRoleEnum::OWNER;
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'rerum';
    $request->key = 'dicta';
    $request->name = 'Blanca Schulist';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->updateMask = 'non';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'enim';
    $request->validateOnly = false;

    $response = $sdk->locations->mybusinessaccountmanagementLocationsAdminsPatch($request);

    if ($response->admin !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessaccountmanagementLocationsTransfer

Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessaccountmanagementLocationsTransferRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessaccountmanagementLocationsTransferRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->transferLocationRequest = new TransferLocationRequest();
    $request->transferLocationRequest->destinationAccount = 'delectus';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->fields = 'id';
    $request->key = 'blanditiis';
    $request->name = 'Timmy Feeney';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'molestiae';

    $response = $sdk->locations->mybusinessaccountmanagementLocationsTransfer($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
