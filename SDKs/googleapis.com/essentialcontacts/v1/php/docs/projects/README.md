# projects

### Available Operations

* [essentialcontactsProjectsContactsCompute](#essentialcontactsprojectscontactscompute) - Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
* [essentialcontactsProjectsContactsCreate](#essentialcontactsprojectscontactscreate) - Adds a new contact for a resource.
* [essentialcontactsProjectsContactsDelete](#essentialcontactsprojectscontactsdelete) - Deletes a contact.
* [essentialcontactsProjectsContactsGet](#essentialcontactsprojectscontactsget) - Gets a single contact.
* [essentialcontactsProjectsContactsList](#essentialcontactsprojectscontactslist) - Lists the contacts that have been set on a resource.
* [essentialcontactsProjectsContactsPatch](#essentialcontactsprojectscontactspatch) - Updates a contact. Note: A contact's email address cannot be changed.
* [essentialcontactsProjectsContactsSendTestMessage](#essentialcontactsprojectscontactssendtestmessage) - Allows a contact admin to send a test message to contact to verify that it has been configured correctly.

## essentialcontactsProjectsContactsCompute

Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsComputeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsComputeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EssentialcontactsProjectsContactsComputeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minus';
    $request->fields = 'placeat';
    $request->key = 'voluptatum';
    $request->notificationCategories = [
        EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum::BILLING,
        EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum::SECURITY,
    ];
    $request->oauthToken = 'recusandae';
    $request->pageSize = 836079;
    $request->pageToken = 'ab';
    $request->parent = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new EssentialcontactsProjectsContactsComputeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->essentialcontactsProjectsContactsCompute($request, $requestSecurity);

    if ($response->googleCloudEssentialcontactsV1ComputeContactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## essentialcontactsProjectsContactsCreate

Adds a new contact for a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudEssentialcontactsV1ContactInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudEssentialcontactsV1ContactValidationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EssentialcontactsProjectsContactsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudEssentialcontactsV1ContactInput = new GoogleCloudEssentialcontactsV1ContactInput();
    $request->googleCloudEssentialcontactsV1ContactInput->email = 'Verner87@hotmail.com';
    $request->googleCloudEssentialcontactsV1ContactInput->languageTag = 'at';
    $request->googleCloudEssentialcontactsV1ContactInput->notificationCategorySubscriptions = [
        GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum::TECHNICAL,
        GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum::PRODUCT_UPDATES,
        GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum::PRODUCT_UPDATES,
        GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum::TECHNICAL,
    ];
    $request->googleCloudEssentialcontactsV1ContactInput->validateTime = 'totam';
    $request->googleCloudEssentialcontactsV1ContactInput->validationState = GoogleCloudEssentialcontactsV1ContactValidationStateEnum::INVALID;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nam';
    $request->fields = 'officia';
    $request->key = 'occaecati';
    $request->oauthToken = 'fugit';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new EssentialcontactsProjectsContactsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->essentialcontactsProjectsContactsCreate($request, $requestSecurity);

    if ($response->googleCloudEssentialcontactsV1Contact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## essentialcontactsProjectsContactsDelete

Deletes a contact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EssentialcontactsProjectsContactsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->key = 'impedit';
    $request->name = 'Cory Emmerich';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new EssentialcontactsProjectsContactsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->essentialcontactsProjectsContactsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## essentialcontactsProjectsContactsGet

Gets a single contact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EssentialcontactsProjectsContactsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'hic';
    $request->key = 'saepe';
    $request->name = 'Harvey Hessel';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new EssentialcontactsProjectsContactsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->essentialcontactsProjectsContactsGet($request, $requestSecurity);

    if ($response->googleCloudEssentialcontactsV1Contact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## essentialcontactsProjectsContactsList

Lists the contacts that have been set on a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EssentialcontactsProjectsContactsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'dolores';
    $request->key = 'dolorem';
    $request->oauthToken = 'corporis';
    $request->pageSize = 128926;
    $request->pageToken = 'nobis';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new EssentialcontactsProjectsContactsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->essentialcontactsProjectsContactsList($request, $requestSecurity);

    if ($response->googleCloudEssentialcontactsV1ListContactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## essentialcontactsProjectsContactsPatch

Updates a contact. Note: A contact's email address cannot be changed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudEssentialcontactsV1ContactInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudEssentialcontactsV1ContactValidationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EssentialcontactsProjectsContactsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudEssentialcontactsV1ContactInput = new GoogleCloudEssentialcontactsV1ContactInput();
    $request->googleCloudEssentialcontactsV1ContactInput->email = 'Ibrahim_Nicolas10@gmail.com';
    $request->googleCloudEssentialcontactsV1ContactInput->languageTag = 'mollitia';
    $request->googleCloudEssentialcontactsV1ContactInput->notificationCategorySubscriptions = [
        GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum::BILLING,
    ];
    $request->googleCloudEssentialcontactsV1ContactInput->validateTime = 'consequuntur';
    $request->googleCloudEssentialcontactsV1ContactInput->validationState = GoogleCloudEssentialcontactsV1ContactValidationStateEnum::INVALID;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'commodi';
    $request->key = 'quam';
    $request->name = 'Shannon Mueller';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->updateMask = 'animi';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new EssentialcontactsProjectsContactsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->essentialcontactsProjectsContactsPatch($request, $requestSecurity);

    if ($response->googleCloudEssentialcontactsV1Contact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## essentialcontactsProjectsContactsSendTestMessage

Allows a contact admin to send a test message to contact to verify that it has been configured correctly.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsSendTestMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudEssentialcontactsV1SendTestMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsSendTestMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EssentialcontactsProjectsContactsSendTestMessageRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudEssentialcontactsV1SendTestMessageRequest = new GoogleCloudEssentialcontactsV1SendTestMessageRequest();
    $request->googleCloudEssentialcontactsV1SendTestMessageRequest->contacts = [
        'tenetur',
    ];
    $request->googleCloudEssentialcontactsV1SendTestMessageRequest->notificationCategory = GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnum::SECURITY;
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->fields = 'quasi';
    $request->key = 'error';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->resource = 'quasi';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new EssentialcontactsProjectsContactsSendTestMessageSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->essentialcontactsProjectsContactsSendTestMessage($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
