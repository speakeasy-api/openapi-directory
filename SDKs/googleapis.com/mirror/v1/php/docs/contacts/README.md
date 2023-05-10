# contacts

### Available Operations

* [mirrorContactsDelete](#mirrorcontactsdelete) - Deletes a contact.
* [mirrorContactsGet](#mirrorcontactsget) - Gets a single contact by ID.
* [mirrorContactsInsert](#mirrorcontactsinsert) - Inserts a new contact.
* [mirrorContactsList](#mirrorcontactslist) - Retrieves a list of contacts for the authenticated user.
* [mirrorContactsPatch](#mirrorcontactspatch) - Updates a contact in place. This method supports patch semantics.
* [mirrorContactsUpdate](#mirrorcontactsupdate) - Updates a contact in place.

## mirrorContactsDelete

Deletes a contact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorContactsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorContactsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorContactsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'deserunt';
    $request->id = '05dfc2dd-f7cc-478c-a1ba-928fc816742c';
    $request->key = 'cum';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->userIp = 'excepturi';

    $requestSecurity = new MirrorContactsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contacts->mirrorContactsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorContactsGet

Gets a single contact by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorContactsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorContactsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorContactsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'aspernatur';
    $request->id = '05929396-fea7-4596-ab10-faaa2352c595';
    $request->key = 'minima';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->userIp = 'iure';

    $requestSecurity = new MirrorContactsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contacts->mirrorContactsGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorContactsInsert

Inserts a new contact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorContactsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Shared\Command;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorContactsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorContactsInsertRequest();
    $request->contact = new Contact();
    $request->contact->acceptCommands = [
        new Command(),
        new Command(),
        new Command(),
    ];
    $request->contact->acceptTypes = [
        'sapiente',
        'architecto',
        'mollitia',
        'dolorem',
    ];
    $request->contact->displayName = 'culpa';
    $request->contact->id = '2fa94677-3925-41aa-92c3-f5ad019da1ff';
    $request->contact->imageUrls = [
        'nihil',
        'praesentium',
        'voluptatibus',
        'ipsa',
    ];
    $request->contact->kind = 'omnis';
    $request->contact->phoneNumber = 'voluptate';
    $request->contact->priority = 739264;
    $request->contact->sharingFeatures = [
        'doloremque',
    ];
    $request->contact->source = 'reprehenderit';
    $request->contact->speakableName = 'ut';
    $request->contact->type = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->fields = 'dicta';
    $request->key = 'corporis';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->userIp = 'dicta';

    $requestSecurity = new MirrorContactsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contacts->mirrorContactsInsert($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorContactsList

Retrieves a list of contacts for the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorContactsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorContactsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorContactsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'harum';
    $request->key = 'enim';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->userIp = 'repudiandae';

    $requestSecurity = new MirrorContactsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contacts->mirrorContactsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorContactsPatch

Updates a contact in place. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorContactsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Shared\Command;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorContactsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorContactsPatchRequest();
    $request->contact = new Contact();
    $request->contact->acceptCommands = [
        new Command(),
    ];
    $request->contact->acceptTypes = [
        'quidem',
    ];
    $request->contact->displayName = 'molestias';
    $request->contact->id = '9d488e1e-91e4-450a-92ab-d44269802d50';
    $request->contact->imageUrls = [
        'dolorum',
    ];
    $request->contact->kind = 'excepturi';
    $request->contact->phoneNumber = 'tempora';
    $request->contact->priority = 703737;
    $request->contact->sharingFeatures = [
        'labore',
        'delectus',
        'eum',
    ];
    $request->contact->source = 'non';
    $request->contact->speakableName = 'eligendi';
    $request->contact->type = 'sint';
    $request->alt = AltEnum::JSON;
    $request->fields = 'aliquid';
    $request->id = '9e9a3efa-77df-4b14-8d66-ae395efb9ba8';
    $request->key = 'deleniti';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->userIp = 'deserunt';

    $requestSecurity = new MirrorContactsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contacts->mirrorContactsPatch($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorContactsUpdate

Updates a contact in place.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorContactsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Shared\Command;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorContactsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorContactsUpdateRequest();
    $request->contact = new Contact();
    $request->contact->acceptCommands = [
        new Command(),
        new Command(),
    ];
    $request->contact->acceptTypes = [
        'natus',
        'omnis',
    ];
    $request->contact->displayName = 'molestiae';
    $request->contact->id = '074ba446-9b6e-4214-9959-890afa563e25';
    $request->contact->imageUrls = [
        'iure',
    ];
    $request->contact->kind = 'doloribus';
    $request->contact->phoneNumber = 'debitis';
    $request->contact->priority = 260341;
    $request->contact->sharingFeatures = [
        'deleniti',
        'facilis',
        'in',
        'architecto',
    ];
    $request->contact->source = 'architecto';
    $request->contact->speakableName = 'repudiandae';
    $request->contact->type = 'ullam';
    $request->alt = AltEnum::JSON;
    $request->fields = 'expedita';
    $request->id = '7fd2ed02-8921-4cdd-8692-601fb576b0d5';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->userIp = 'amet';

    $requestSecurity = new MirrorContactsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contacts->mirrorContactsUpdate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
