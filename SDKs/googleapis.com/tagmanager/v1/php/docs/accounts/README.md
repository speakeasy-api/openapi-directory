# accounts

### Available Operations

* [tagmanagerAccountsContainersCreate](#tagmanageraccountscontainerscreate) - Creates a Container.
* [tagmanagerAccountsContainersDelete](#tagmanageraccountscontainersdelete) - Deletes a Container.
* [tagmanagerAccountsContainersEnvironmentsCreate](#tagmanageraccountscontainersenvironmentscreate) - Creates a GTM Environment.
* [tagmanagerAccountsContainersEnvironmentsDelete](#tagmanageraccountscontainersenvironmentsdelete) - Deletes a GTM Environment.
* [tagmanagerAccountsContainersEnvironmentsGet](#tagmanageraccountscontainersenvironmentsget) - Gets a GTM Environment.
* [tagmanagerAccountsContainersEnvironmentsList](#tagmanageraccountscontainersenvironmentslist) - Lists all GTM Environments of a GTM Container.
* [tagmanagerAccountsContainersEnvironmentsUpdate](#tagmanageraccountscontainersenvironmentsupdate) - Updates a GTM Environment.
* [tagmanagerAccountsContainersFoldersCreate](#tagmanageraccountscontainersfolderscreate) - Creates a GTM Folder.
* [tagmanagerAccountsContainersFoldersDelete](#tagmanageraccountscontainersfoldersdelete) - Deletes a GTM Folder.
* [tagmanagerAccountsContainersFoldersEntitiesList](#tagmanageraccountscontainersfoldersentitieslist) - List all entities in a GTM Folder.
* [tagmanagerAccountsContainersFoldersGet](#tagmanageraccountscontainersfoldersget) - Gets a GTM Folder.
* [tagmanagerAccountsContainersFoldersList](#tagmanageraccountscontainersfolderslist) - Lists all GTM Folders of a Container.
* [tagmanagerAccountsContainersFoldersUpdate](#tagmanageraccountscontainersfoldersupdate) - Updates a GTM Folder.
* [tagmanagerAccountsContainersGet](#tagmanageraccountscontainersget) - Gets a Container.
* [tagmanagerAccountsContainersList](#tagmanageraccountscontainerslist) - Lists all Containers that belongs to a GTM Account.
* [tagmanagerAccountsContainersMoveFoldersUpdate](#tagmanageraccountscontainersmovefoldersupdate) - Moves entities to a GTM Folder.
* [tagmanagerAccountsContainersReauthorizeEnvironmentsUpdate](#tagmanageraccountscontainersreauthorizeenvironmentsupdate) - Re-generates the authorization code for a GTM Environment.
* [tagmanagerAccountsContainersTagsCreate](#tagmanageraccountscontainerstagscreate) - Creates a GTM Tag.
* [tagmanagerAccountsContainersTagsDelete](#tagmanageraccountscontainerstagsdelete) - Deletes a GTM Tag.
* [tagmanagerAccountsContainersTagsGet](#tagmanageraccountscontainerstagsget) - Gets a GTM Tag.
* [tagmanagerAccountsContainersTagsList](#tagmanageraccountscontainerstagslist) - Lists all GTM Tags of a Container.
* [tagmanagerAccountsContainersTagsUpdate](#tagmanageraccountscontainerstagsupdate) - Updates a GTM Tag.
* [tagmanagerAccountsContainersTriggersCreate](#tagmanageraccountscontainerstriggerscreate) - Creates a GTM Trigger.
* [tagmanagerAccountsContainersTriggersDelete](#tagmanageraccountscontainerstriggersdelete) - Deletes a GTM Trigger.
* [tagmanagerAccountsContainersTriggersGet](#tagmanageraccountscontainerstriggersget) - Gets a GTM Trigger.
* [tagmanagerAccountsContainersTriggersList](#tagmanageraccountscontainerstriggerslist) - Lists all GTM Triggers of a Container.
* [tagmanagerAccountsContainersTriggersUpdate](#tagmanageraccountscontainerstriggersupdate) - Updates a GTM Trigger.
* [tagmanagerAccountsContainersUpdate](#tagmanageraccountscontainersupdate) - Updates a Container.
* [tagmanagerAccountsContainersVariablesCreate](#tagmanageraccountscontainersvariablescreate) - Creates a GTM Variable.
* [tagmanagerAccountsContainersVariablesDelete](#tagmanageraccountscontainersvariablesdelete) - Deletes a GTM Variable.
* [tagmanagerAccountsContainersVariablesGet](#tagmanageraccountscontainersvariablesget) - Gets a GTM Variable.
* [tagmanagerAccountsContainersVariablesList](#tagmanageraccountscontainersvariableslist) - Lists all GTM Variables of a Container.
* [tagmanagerAccountsContainersVariablesUpdate](#tagmanageraccountscontainersvariablesupdate) - Updates a GTM Variable.
* [tagmanagerAccountsContainersVersionsCreate](#tagmanageraccountscontainersversionscreate) - Creates a Container Version.
* [tagmanagerAccountsContainersVersionsDelete](#tagmanageraccountscontainersversionsdelete) - Deletes a Container Version.
* [tagmanagerAccountsContainersVersionsGet](#tagmanageraccountscontainersversionsget) - Gets a Container Version.
* [tagmanagerAccountsContainersVersionsList](#tagmanageraccountscontainersversionslist) - Lists all Container Versions of a GTM Container.
* [tagmanagerAccountsContainersVersionsPublish](#tagmanageraccountscontainersversionspublish) - Publishes a Container Version.
* [tagmanagerAccountsContainersVersionsRestore](#tagmanageraccountscontainersversionsrestore) - Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
* [tagmanagerAccountsContainersVersionsUndelete](#tagmanageraccountscontainersversionsundelete) - Undeletes a Container Version.
* [tagmanagerAccountsContainersVersionsUpdate](#tagmanageraccountscontainersversionsupdate) - Updates a Container Version.
* [tagmanagerAccountsGet](#tagmanageraccountsget) - Gets a GTM Account.
* [tagmanagerAccountsList](#tagmanageraccountslist) - Lists all GTM Accounts that a user has access to.
* [tagmanagerAccountsPermissionsCreate](#tagmanageraccountspermissionscreate) - Creates a user's Account & Container Permissions.
* [tagmanagerAccountsPermissionsDelete](#tagmanageraccountspermissionsdelete) - Removes a user from the account, revoking access to it and all of its containers.
* [tagmanagerAccountsPermissionsGet](#tagmanageraccountspermissionsget) - Gets a user's Account & Container Permissions.
* [tagmanagerAccountsPermissionsList](#tagmanageraccountspermissionslist) - List all users that have access to the account along with Account and Container Permissions granted to each of them.
* [tagmanagerAccountsPermissionsUpdate](#tagmanageraccountspermissionsupdate) - Updates a user's Account & Container Permissions.
* [tagmanagerAccountsUpdate](#tagmanageraccountsupdate) - Updates a GTM Account.

## tagmanagerAccountsContainersCreate

Creates a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Container;
use \OpenAPI\OpenAPI\Models\Shared\ContainerEnabledBuiltInVariableEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContainerUsageContextEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->container = new Container();
    $request->container->accountId = 'odit';
    $request->container->containerId = 'at';
    $request->container->domainName = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->container->enabledBuiltInVariable = [
        ContainerEnabledBuiltInVariableEnum::AMP_CLIENT_TIMESTAMP,
        ContainerEnabledBuiltInVariableEnum::FIREBASE_EVENT_PARAMETER_NOTIFICATION_MESSAGE_NAME,
    ];
    $request->container->fingerprint = 'dolorum';
    $request->container->name = 'Antoinette Nikolaus';
    $request->container->notes = 'deleniti';
    $request->container->publicId = 'hic';
    $request->container->timeZoneCountryId = 'optio';
    $request->container->timeZoneId = 'totam';
    $request->container->usageContext = [
        ContainerUsageContextEnum::IOS,
    ];
    $request->accessToken = 'molestiae';
    $request->accountId = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'cum';
    $request->key = 'esse';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new TagmanagerAccountsContainersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersCreate($request, $requestSecurity);

    if ($response->container !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersDelete

Deletes a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->accountId = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->containerId = 'natus';
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new TagmanagerAccountsContainersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersEnvironmentsCreate

Creates a GTM Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Environment;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersEnvironmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->environment = new Environment();
    $request->environment->accountId = 'iure';
    $request->environment->authorizationCode = 'saepe';
    $request->environment->authorizationTimestampMs = 'quidem';
    $request->environment->containerId = 'architecto';
    $request->environment->containerVersionId = 'ipsa';
    $request->environment->description = 'reiciendis';
    $request->environment->enableDebug = false;
    $request->environment->environmentId = 'est';
    $request->environment->fingerprint = 'mollitia';
    $request->environment->name = 'Ernest Ebert';
    $request->environment->type = EnvironmentTypeEnum::DRAFT;
    $request->environment->url = 'enim';
    $request->accessToken = 'omnis';
    $request->accountId = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->containerId = 'accusantium';
    $request->fields = 'iure';
    $request->key = 'culpa';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new TagmanagerAccountsContainersEnvironmentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersEnvironmentsCreate($request, $requestSecurity);

    if ($response->environment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersEnvironmentsDelete

Deletes a GTM Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersEnvironmentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'culpa';
    $request->accountId = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->containerId = 'occaecati';
    $request->environmentId = 'numquam';
    $request->fields = 'commodi';
    $request->key = 'quam';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'quia';

    $requestSecurity = new TagmanagerAccountsContainersEnvironmentsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersEnvironmentsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersEnvironmentsGet

Gets a GTM Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersEnvironmentsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vitae';
    $request->accountId = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->containerId = 'odit';
    $request->environmentId = 'quo';
    $request->fields = 'sequi';
    $request->key = 'tenetur';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new TagmanagerAccountsContainersEnvironmentsGetSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersEnvironmentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersEnvironmentsGet($request, $requestSecurity);

    if ($response->environment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersEnvironmentsList

Lists all GTM Environments of a GTM Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersEnvironmentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->accountId = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->containerId = 'reiciendis';
    $request->fields = 'voluptatibus';
    $request->key = 'vero';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new TagmanagerAccountsContainersEnvironmentsListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersEnvironmentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersEnvironmentsList($request, $requestSecurity);

    if ($response->listEnvironmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersEnvironmentsUpdate

Updates a GTM Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Environment;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersEnvironmentsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->environment = new Environment();
    $request->environment->accountId = 'voluptate';
    $request->environment->authorizationCode = 'cum';
    $request->environment->authorizationTimestampMs = 'perferendis';
    $request->environment->containerId = 'doloremque';
    $request->environment->containerVersionId = 'reprehenderit';
    $request->environment->description = 'ut';
    $request->environment->enableDebug = false;
    $request->environment->environmentId = 'maiores';
    $request->environment->fingerprint = 'dicta';
    $request->environment->name = 'Miss Valerie Kshlerin';
    $request->environment->type = EnvironmentTypeEnum::DRAFT;
    $request->environment->url = 'commodi';
    $request->accessToken = 'repudiandae';
    $request->accountId = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->containerId = 'molestias';
    $request->environmentId = 'excepturi';
    $request->fields = 'pariatur';
    $request->fingerprint = 'modi';
    $request->key = 'praesentium';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new TagmanagerAccountsContainersEnvironmentsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersEnvironmentsUpdate($request, $requestSecurity);

    if ($response->environment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersFoldersCreate

Creates a GTM Folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Folder;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersFoldersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->folder = new Folder();
    $request->folder->accountId = 'veritatis';
    $request->folder->containerId = 'itaque';
    $request->folder->fingerprint = 'incidunt';
    $request->folder->folderId = 'enim';
    $request->folder->name = 'Monique Spinka';
    $request->accessToken = 'distinctio';
    $request->accountId = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'modi';
    $request->containerId = 'qui';
    $request->fields = 'aliquid';
    $request->key = 'cupiditate';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new TagmanagerAccountsContainersFoldersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersFoldersCreate($request, $requestSecurity);

    if ($response->folder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersFoldersDelete

Deletes a GTM Folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersFoldersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'alias';
    $request->accountId = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->containerId = 'tempora';
    $request->fields = 'facilis';
    $request->folderId = 'tempore';
    $request->key = 'labore';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'eligendi';

    $requestSecurity = new TagmanagerAccountsContainersFoldersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersFoldersDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersFoldersEntitiesList

List all entities in a GTM Folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersEntitiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersEntitiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersFoldersEntitiesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->accountId = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->containerId = 'officia';
    $request->fields = 'dolor';
    $request->folderId = 'debitis';
    $request->key = 'a';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new TagmanagerAccountsContainersFoldersEntitiesListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersFoldersEntitiesList($request, $requestSecurity);

    if ($response->folderEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersFoldersGet

Gets a GTM Folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersFoldersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'rerum';
    $request->accountId = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->containerId = 'facere';
    $request->fields = 'ea';
    $request->folderId = 'aliquid';
    $request->key = 'laborum';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new TagmanagerAccountsContainersFoldersGetSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersFoldersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersFoldersGet($request, $requestSecurity);

    if ($response->folder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersFoldersList

Lists all GTM Folders of a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersFoldersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'delectus';
    $request->accountId = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->containerId = 'id';
    $request->fields = 'blanditiis';
    $request->key = 'deleniti';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new TagmanagerAccountsContainersFoldersListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersFoldersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersFoldersList($request, $requestSecurity);

    if ($response->listFoldersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersFoldersUpdate

Updates a GTM Folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Folder;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersFoldersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersFoldersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->folder = new Folder();
    $request->folder->accountId = 'natus';
    $request->folder->containerId = 'omnis';
    $request->folder->fingerprint = 'molestiae';
    $request->folder->folderId = 'perferendis';
    $request->folder->name = 'Megan Rau';
    $request->accessToken = 'labore';
    $request->accountId = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->containerId = 'eum';
    $request->fields = 'vero';
    $request->fingerprint = 'aspernatur';
    $request->folderId = 'architecto';
    $request->key = 'magnam';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new TagmanagerAccountsContainersFoldersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersFoldersUpdate($request, $requestSecurity);

    if ($response->folder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersGet

Gets a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sint';
    $request->accountId = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->containerId = 'mollitia';
    $request->fields = 'ad';
    $request->key = 'eum';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new TagmanagerAccountsContainersGetSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersGet($request, $requestSecurity);

    if ($response->container !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersList

Lists all Containers that belongs to a GTM Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->accountId = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'maxime';
    $request->key = 'deleniti';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new TagmanagerAccountsContainersListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersList($request, $requestSecurity);

    if ($response->listContainersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersMoveFoldersUpdate

Moves entities to a GTM Folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersMoveFoldersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Folder;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersMoveFoldersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersMoveFoldersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->folder = new Folder();
    $request->folder->accountId = 'ullam';
    $request->folder->containerId = 'expedita';
    $request->folder->fingerprint = 'nihil';
    $request->folder->folderId = 'repellat';
    $request->folder->name = 'Louis Turner Sr.';
    $request->accessToken = 'praesentium';
    $request->accountId = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->containerId = 'quo';
    $request->fields = 'illum';
    $request->folderId = 'pariatur';
    $request->key = 'maxime';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->tagId = [
        'ea',
    ];
    $request->triggerId = [
        'ab',
    ];
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quidem';
    $request->variableId = [
        'voluptate',
        'autem',
    ];

    $requestSecurity = new TagmanagerAccountsContainersMoveFoldersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersMoveFoldersUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersReauthorizeEnvironmentsUpdate

Re-generates the authorization code for a GTM Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Environment;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->environment = new Environment();
    $request->environment->accountId = 'eaque';
    $request->environment->authorizationCode = 'pariatur';
    $request->environment->authorizationTimestampMs = 'nemo';
    $request->environment->containerId = 'voluptatibus';
    $request->environment->containerVersionId = 'perferendis';
    $request->environment->description = 'fugiat';
    $request->environment->enableDebug = false;
    $request->environment->environmentId = 'amet';
    $request->environment->fingerprint = 'aut';
    $request->environment->name = 'Lewis Welch';
    $request->environment->type = EnvironmentTypeEnum::USER;
    $request->environment->url = 'quis';
    $request->accessToken = 'totam';
    $request->accountId = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->containerId = 'nesciunt';
    $request->environmentId = 'eos';
    $request->fields = 'perferendis';
    $request->key = 'dolores';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersReauthorizeEnvironmentsUpdate($request, $requestSecurity);

    if ($response->environment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersTagsCreate

Creates a GTM Tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTagsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetupTag;
use \OpenAPI\OpenAPI\Models\Shared\TagTagFiringOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TeardownTag;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTagsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersTagsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->tag = new Tag();
    $request->tag->accountId = 'hic';
    $request->tag->blockingRuleId = [
        'omnis',
        'facilis',
        'perspiciatis',
        'voluptatem',
    ];
    $request->tag->blockingTriggerId = [
        'consequuntur',
        'blanditiis',
        'error',
        'eaque',
    ];
    $request->tag->containerId = 'occaecati';
    $request->tag->fingerprint = 'rerum';
    $request->tag->firingRuleId = [
        'asperiores',
    ];
    $request->tag->firingTriggerId = [
        'modi',
        'iste',
        'dolorum',
        'deleniti',
    ];
    $request->tag->liveOnly = false;
    $request->tag->name = 'Rene Rolfson';
    $request->tag->notes = 'quaerat';
    $request->tag->parameter = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->tag->parentFolderId = 'aliquid';
    $request->tag->paused = false;
    $request->tag->priority = new Parameter();
    $request->tag->priority->key = 'dolorem';
    $request->tag->priority->list = [
        new Parameter(),
    ];
    $request->tag->priority->map = [
        new Parameter(),
    ];
    $request->tag->priority->type = ParameterTypeEnum::INTEGER;
    $request->tag->priority->value = 'ipsum';
    $request->tag->scheduleEndMs = 'hic';
    $request->tag->scheduleStartMs = 'excepturi';
    $request->tag->setupTag = [
        new SetupTag(),
        new SetupTag(),
        new SetupTag(),
    ];
    $request->tag->tagFiringOption = TagTagFiringOptionEnum::ONCE_PER_EVENT;
    $request->tag->tagId = 'dignissimos';
    $request->tag->teardownTag = [
        new TeardownTag(),
        new TeardownTag(),
        new TeardownTag(),
        new TeardownTag(),
    ];
    $request->tag->type = 'amet';
    $request->accessToken = 'dolorum';
    $request->accountId = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->containerId = 'ipsa';
    $request->fields = 'iure';
    $request->key = 'odio';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new TagmanagerAccountsContainersTagsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersTagsCreate($request, $requestSecurity);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersTagsDelete

Deletes a GTM Tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTagsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTagsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersTagsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->accountId = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->containerId = 'fugiat';
    $request->fields = 'ab';
    $request->key = 'soluta';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->tagId = 'voluptate';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new TagmanagerAccountsContainersTagsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersTagsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersTagsGet

Gets a GTM Tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTagsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTagsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTagsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTagsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersTagsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'necessitatibus';
    $request->accountId = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->containerId = 'ipsum';
    $request->fields = 'voluptate';
    $request->key = 'id';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->tagId = 'aspernatur';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new TagmanagerAccountsContainersTagsGetSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersTagsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersTagsGet($request, $requestSecurity);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersTagsList

Lists all GTM Tags of a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTagsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTagsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTagsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTagsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersTagsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusamus';
    $request->accountId = 'ad';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'suscipit';
    $request->containerId = 'deserunt';
    $request->fields = 'provident';
    $request->key = 'minima';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new TagmanagerAccountsContainersTagsListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersTagsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersTagsList($request, $requestSecurity);

    if ($response->listTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersTagsUpdate

Updates a GTM Tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTagsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetupTag;
use \OpenAPI\OpenAPI\Models\Shared\TagTagFiringOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TeardownTag;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTagsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersTagsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->tag = new Tag();
    $request->tag->accountId = 'quaerat';
    $request->tag->blockingRuleId = [
        'vel',
        'quod',
    ];
    $request->tag->blockingTriggerId = [
        'qui',
        'dolorum',
        'a',
        'esse',
    ];
    $request->tag->containerId = 'harum';
    $request->tag->fingerprint = 'iusto';
    $request->tag->firingRuleId = [
        'quisquam',
    ];
    $request->tag->firingTriggerId = [
        'amet',
        'tempore',
        'accusamus',
        'numquam',
    ];
    $request->tag->liveOnly = false;
    $request->tag->name = 'Florence Will';
    $request->tag->notes = 'sit';
    $request->tag->parameter = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->tag->parentFolderId = 'neque';
    $request->tag->paused = false;
    $request->tag->priority = new Parameter();
    $request->tag->priority->key = 'sed';
    $request->tag->priority->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->tag->priority->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->tag->priority->type = ParameterTypeEnum::BOOLEAN;
    $request->tag->priority->value = 'deserunt';
    $request->tag->scheduleEndMs = 'quam';
    $request->tag->scheduleStartMs = 'ipsum';
    $request->tag->setupTag = [
        new SetupTag(),
        new SetupTag(),
    ];
    $request->tag->tagFiringOption = TagTagFiringOptionEnum::UNLIMITED;
    $request->tag->tagId = 'cupiditate';
    $request->tag->teardownTag = [
        new TeardownTag(),
        new TeardownTag(),
        new TeardownTag(),
        new TeardownTag(),
    ];
    $request->tag->type = 'pariatur';
    $request->accessToken = 'soluta';
    $request->accountId = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->containerId = 'incidunt';
    $request->fields = 'aspernatur';
    $request->fingerprint = 'dolores';
    $request->key = 'distinctio';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->tagId = 'quam';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new TagmanagerAccountsContainersTagsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersTagsUpdate($request, $requestSecurity);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersTriggersCreate

Creates a GTM Trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTriggersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Trigger;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTriggersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersTriggersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->trigger = new Trigger();
    $request->trigger->accountId = 'neque';
    $request->trigger->autoEventFilter = [
        new Condition(),
    ];
    $request->trigger->checkValidation = new Parameter();
    $request->trigger->checkValidation->key = 'magni';
    $request->trigger->checkValidation->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->checkValidation->map = [
        new Parameter(),
    ];
    $request->trigger->checkValidation->type = ParameterTypeEnum::BOOLEAN;
    $request->trigger->checkValidation->value = 'nam';
    $request->trigger->containerId = 'hic';
    $request->trigger->continuousTimeMinMilliseconds = new Parameter();
    $request->trigger->continuousTimeMinMilliseconds->key = 'voluptatem';
    $request->trigger->continuousTimeMinMilliseconds->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->continuousTimeMinMilliseconds->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->continuousTimeMinMilliseconds->type = ParameterTypeEnum::TRIGGER_REFERENCE;
    $request->trigger->continuousTimeMinMilliseconds->value = 'et';
    $request->trigger->customEventFilter = [
        new Condition(),
        new Condition(),
        new Condition(),
        new Condition(),
    ];
    $request->trigger->eventName = new Parameter();
    $request->trigger->eventName->key = 'ipsum';
    $request->trigger->eventName->list = [
        new Parameter(),
    ];
    $request->trigger->eventName->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->eventName->type = ParameterTypeEnum::LIST;
    $request->trigger->eventName->value = 'tempore';
    $request->trigger->filter = [
        new Condition(),
        new Condition(),
        new Condition(),
    ];
    $request->trigger->fingerprint = 'aperiam';
    $request->trigger->horizontalScrollPercentageList = new Parameter();
    $request->trigger->horizontalScrollPercentageList->key = 'delectus';
    $request->trigger->horizontalScrollPercentageList->list = [
        new Parameter(),
    ];
    $request->trigger->horizontalScrollPercentageList->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->horizontalScrollPercentageList->type = ParameterTypeEnum::BOOLEAN;
    $request->trigger->horizontalScrollPercentageList->value = 'adipisci';
    $request->trigger->interval = new Parameter();
    $request->trigger->interval->key = 'dolorum';
    $request->trigger->interval->list = [
        new Parameter(),
    ];
    $request->trigger->interval->map = [
        new Parameter(),
    ];
    $request->trigger->interval->type = ParameterTypeEnum::TEMPLATE;
    $request->trigger->interval->value = 'quas';
    $request->trigger->intervalSeconds = new Parameter();
    $request->trigger->intervalSeconds->key = 'itaque';
    $request->trigger->intervalSeconds->list = [
        new Parameter(),
    ];
    $request->trigger->intervalSeconds->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->intervalSeconds->type = ParameterTypeEnum::TRIGGER_REFERENCE;
    $request->trigger->intervalSeconds->value = 'porro';
    $request->trigger->limit = new Parameter();
    $request->trigger->limit->key = 'doloribus';
    $request->trigger->limit->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->limit->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->limit->type = ParameterTypeEnum::MAP;
    $request->trigger->limit->value = 'qui';
    $request->trigger->maxTimerLengthSeconds = new Parameter();
    $request->trigger->maxTimerLengthSeconds->key = 'quae';
    $request->trigger->maxTimerLengthSeconds->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->maxTimerLengthSeconds->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->maxTimerLengthSeconds->type = ParameterTypeEnum::MAP;
    $request->trigger->maxTimerLengthSeconds->value = 'voluptatibus';
    $request->trigger->name = 'Ignacio Moen';
    $request->trigger->parameter = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->parentFolderId = 'voluptate';
    $request->trigger->selector = new Parameter();
    $request->trigger->selector->key = 'consectetur';
    $request->trigger->selector->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->selector->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->selector->type = ParameterTypeEnum::LIST;
    $request->trigger->selector->value = 'hic';
    $request->trigger->totalTimeMinMilliseconds = new Parameter();
    $request->trigger->totalTimeMinMilliseconds->key = 'distinctio';
    $request->trigger->totalTimeMinMilliseconds->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->totalTimeMinMilliseconds->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->totalTimeMinMilliseconds->type = ParameterTypeEnum::MAP;
    $request->trigger->totalTimeMinMilliseconds->value = 'facilis';
    $request->trigger->triggerId = 'vero';
    $request->trigger->type = TriggerTypeEnum::JS_ERROR;
    $request->trigger->uniqueTriggerId = new Parameter();
    $request->trigger->uniqueTriggerId->key = 'dolore';
    $request->trigger->uniqueTriggerId->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->uniqueTriggerId->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->uniqueTriggerId->type = ParameterTypeEnum::INTEGER;
    $request->trigger->uniqueTriggerId->value = 'natus';
    $request->trigger->verticalScrollPercentageList = new Parameter();
    $request->trigger->verticalScrollPercentageList->key = 'impedit';
    $request->trigger->verticalScrollPercentageList->list = [
        new Parameter(),
    ];
    $request->trigger->verticalScrollPercentageList->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->verticalScrollPercentageList->type = ParameterTypeEnum::BOOLEAN;
    $request->trigger->verticalScrollPercentageList->value = 'nulla';
    $request->trigger->visibilitySelector = new Parameter();
    $request->trigger->visibilitySelector->key = 'fugit';
    $request->trigger->visibilitySelector->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->visibilitySelector->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->visibilitySelector->type = ParameterTypeEnum::TAG_REFERENCE;
    $request->trigger->visibilitySelector->value = 'iusto';
    $request->trigger->visiblePercentageMax = new Parameter();
    $request->trigger->visiblePercentageMax->key = 'eligendi';
    $request->trigger->visiblePercentageMax->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->visiblePercentageMax->map = [
        new Parameter(),
    ];
    $request->trigger->visiblePercentageMax->type = ParameterTypeEnum::MAP;
    $request->trigger->visiblePercentageMax->value = 'tempora';
    $request->trigger->visiblePercentageMin = new Parameter();
    $request->trigger->visiblePercentageMin->key = 'ipsam';
    $request->trigger->visiblePercentageMin->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->visiblePercentageMin->map = [
        new Parameter(),
    ];
    $request->trigger->visiblePercentageMin->type = ParameterTypeEnum::BOOLEAN;
    $request->trigger->visiblePercentageMin->value = 'possimus';
    $request->trigger->waitForTags = new Parameter();
    $request->trigger->waitForTags->key = 'magnam';
    $request->trigger->waitForTags->list = [
        new Parameter(),
    ];
    $request->trigger->waitForTags->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->waitForTags->type = ParameterTypeEnum::LIST;
    $request->trigger->waitForTags->value = 'dicta';
    $request->trigger->waitForTagsTimeout = new Parameter();
    $request->trigger->waitForTagsTimeout->key = 'dolor';
    $request->trigger->waitForTagsTimeout->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->waitForTagsTimeout->map = [
        new Parameter(),
    ];
    $request->trigger->waitForTagsTimeout->type = ParameterTypeEnum::BOOLEAN;
    $request->trigger->waitForTagsTimeout->value = 'nulla';
    $request->accessToken = 'excepturi';
    $request->accountId = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->containerId = 'quisquam';
    $request->fields = 'saepe';
    $request->key = 'ea';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new TagmanagerAccountsContainersTriggersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersTriggersCreate($request, $requestSecurity);

    if ($response->trigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersTriggersDelete

Deletes a GTM Trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTriggersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTriggersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersTriggersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->accountId = 'ea';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consectetur';
    $request->containerId = 'recusandae';
    $request->fields = 'aspernatur';
    $request->key = 'minima';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->triggerId = 'libero';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new TagmanagerAccountsContainersTriggersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersTriggersDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersTriggersGet

Gets a GTM Trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTriggersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTriggersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTriggersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTriggersGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersTriggersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'impedit';
    $request->accountId = 'aliquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->containerId = 'inventore';
    $request->fields = 'non';
    $request->key = 'et';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->triggerId = 'placeat';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new TagmanagerAccountsContainersTriggersGetSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersTriggersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersTriggersGet($request, $requestSecurity);

    if ($response->trigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersTriggersList

Lists all GTM Triggers of a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTriggersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTriggersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTriggersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTriggersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersTriggersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nobis';
    $request->accountId = 'quas';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nulla';
    $request->containerId = 'voluptas';
    $request->fields = 'libero';
    $request->key = 'quasi';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new TagmanagerAccountsContainersTriggersListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersTriggersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersTriggersList($request, $requestSecurity);

    if ($response->listTriggersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersTriggersUpdate

Updates a GTM Trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTriggersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Trigger;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersTriggersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersTriggersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->trigger = new Trigger();
    $request->trigger->accountId = 'molestiae';
    $request->trigger->autoEventFilter = [
        new Condition(),
        new Condition(),
    ];
    $request->trigger->checkValidation = new Parameter();
    $request->trigger->checkValidation->key = 'odio';
    $request->trigger->checkValidation->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->checkValidation->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->checkValidation->type = ParameterTypeEnum::LIST;
    $request->trigger->checkValidation->value = 'rem';
    $request->trigger->containerId = 'fuga';
    $request->trigger->continuousTimeMinMilliseconds = new Parameter();
    $request->trigger->continuousTimeMinMilliseconds->key = 'reprehenderit';
    $request->trigger->continuousTimeMinMilliseconds->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->continuousTimeMinMilliseconds->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->continuousTimeMinMilliseconds->type = ParameterTypeEnum::INTEGER;
    $request->trigger->continuousTimeMinMilliseconds->value = 'eum';
    $request->trigger->customEventFilter = [
        new Condition(),
        new Condition(),
    ];
    $request->trigger->eventName = new Parameter();
    $request->trigger->eventName->key = 'assumenda';
    $request->trigger->eventName->list = [
        new Parameter(),
    ];
    $request->trigger->eventName->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->eventName->type = ParameterTypeEnum::TRIGGER_REFERENCE;
    $request->trigger->eventName->value = 'veritatis';
    $request->trigger->filter = [
        new Condition(),
    ];
    $request->trigger->fingerprint = 'id';
    $request->trigger->horizontalScrollPercentageList = new Parameter();
    $request->trigger->horizontalScrollPercentageList->key = 'quidem';
    $request->trigger->horizontalScrollPercentageList->list = [
        new Parameter(),
    ];
    $request->trigger->horizontalScrollPercentageList->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->horizontalScrollPercentageList->type = ParameterTypeEnum::TRIGGER_REFERENCE;
    $request->trigger->horizontalScrollPercentageList->value = 'quo';
    $request->trigger->interval = new Parameter();
    $request->trigger->interval->key = 'fuga';
    $request->trigger->interval->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->interval->map = [
        new Parameter(),
    ];
    $request->trigger->interval->type = ParameterTypeEnum::BOOLEAN;
    $request->trigger->interval->value = 'ab';
    $request->trigger->intervalSeconds = new Parameter();
    $request->trigger->intervalSeconds->key = 'cupiditate';
    $request->trigger->intervalSeconds->list = [
        new Parameter(),
    ];
    $request->trigger->intervalSeconds->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->intervalSeconds->type = ParameterTypeEnum::TAG_REFERENCE;
    $request->trigger->intervalSeconds->value = 'ipsam';
    $request->trigger->limit = new Parameter();
    $request->trigger->limit->key = 'aspernatur';
    $request->trigger->limit->list = [
        new Parameter(),
    ];
    $request->trigger->limit->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->limit->type = ParameterTypeEnum::LIST;
    $request->trigger->limit->value = 'recusandae';
    $request->trigger->maxTimerLengthSeconds = new Parameter();
    $request->trigger->maxTimerLengthSeconds->key = 'aperiam';
    $request->trigger->maxTimerLengthSeconds->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->maxTimerLengthSeconds->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->maxTimerLengthSeconds->type = ParameterTypeEnum::LIST;
    $request->trigger->maxTimerLengthSeconds->value = 'inventore';
    $request->trigger->name = 'Christy Tillman';
    $request->trigger->parameter = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->parentFolderId = 'commodi';
    $request->trigger->selector = new Parameter();
    $request->trigger->selector->key = 'sapiente';
    $request->trigger->selector->list = [
        new Parameter(),
    ];
    $request->trigger->selector->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->selector->type = ParameterTypeEnum::LIST;
    $request->trigger->selector->value = 'accusantium';
    $request->trigger->totalTimeMinMilliseconds = new Parameter();
    $request->trigger->totalTimeMinMilliseconds->key = 'porro';
    $request->trigger->totalTimeMinMilliseconds->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->totalTimeMinMilliseconds->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->totalTimeMinMilliseconds->type = ParameterTypeEnum::LIST;
    $request->trigger->totalTimeMinMilliseconds->value = 'consequuntur';
    $request->trigger->triggerId = 'deleniti';
    $request->trigger->type = TriggerTypeEnum::WINDOW_LOADED;
    $request->trigger->uniqueTriggerId = new Parameter();
    $request->trigger->uniqueTriggerId->key = 'fuga';
    $request->trigger->uniqueTriggerId->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->uniqueTriggerId->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->uniqueTriggerId->type = ParameterTypeEnum::LIST;
    $request->trigger->uniqueTriggerId->value = 'explicabo';
    $request->trigger->verticalScrollPercentageList = new Parameter();
    $request->trigger->verticalScrollPercentageList->key = 'minima';
    $request->trigger->verticalScrollPercentageList->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->verticalScrollPercentageList->map = [
        new Parameter(),
    ];
    $request->trigger->verticalScrollPercentageList->type = ParameterTypeEnum::TAG_REFERENCE;
    $request->trigger->verticalScrollPercentageList->value = 'consequuntur';
    $request->trigger->visibilitySelector = new Parameter();
    $request->trigger->visibilitySelector->key = 'ratione';
    $request->trigger->visibilitySelector->list = [
        new Parameter(),
    ];
    $request->trigger->visibilitySelector->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->visibilitySelector->type = ParameterTypeEnum::MAP;
    $request->trigger->visibilitySelector->value = 'atque';
    $request->trigger->visiblePercentageMax = new Parameter();
    $request->trigger->visiblePercentageMax->key = 'et';
    $request->trigger->visiblePercentageMax->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->visiblePercentageMax->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->visiblePercentageMax->type = ParameterTypeEnum::TAG_REFERENCE;
    $request->trigger->visiblePercentageMax->value = 'veritatis';
    $request->trigger->visiblePercentageMin = new Parameter();
    $request->trigger->visiblePercentageMin->key = 'esse';
    $request->trigger->visiblePercentageMin->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->visiblePercentageMin->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->visiblePercentageMin->type = ParameterTypeEnum::TAG_REFERENCE;
    $request->trigger->visiblePercentageMin->value = 'aliquid';
    $request->trigger->waitForTags = new Parameter();
    $request->trigger->waitForTags->key = 'quasi';
    $request->trigger->waitForTags->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->waitForTags->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->waitForTags->type = ParameterTypeEnum::MAP;
    $request->trigger->waitForTags->value = 'molestiae';
    $request->trigger->waitForTagsTimeout = new Parameter();
    $request->trigger->waitForTagsTimeout->key = 'rerum';
    $request->trigger->waitForTagsTimeout->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->waitForTagsTimeout->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->waitForTagsTimeout->type = ParameterTypeEnum::TRIGGER_REFERENCE;
    $request->trigger->waitForTagsTimeout->value = 'eligendi';
    $request->accessToken = 'sit';
    $request->accountId = 'culpa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'adipisci';
    $request->containerId = 'cumque';
    $request->fields = 'consequuntur';
    $request->fingerprint = 'consequatur';
    $request->key = 'minus';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->triggerId = 'consectetur';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new TagmanagerAccountsContainersTriggersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersTriggersUpdate($request, $requestSecurity);

    if ($response->trigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersUpdate

Updates a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Container;
use \OpenAPI\OpenAPI\Models\Shared\ContainerEnabledBuiltInVariableEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContainerUsageContextEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->container = new Container();
    $request->container->accountId = 'a';
    $request->container->containerId = 'nulla';
    $request->container->domainName = [
        'esse',
        'quasi',
        'a',
    ];
    $request->container->enabledBuiltInVariable = [
        ContainerEnabledBuiltInVariableEnum::AMP_CLIENT_MAX_SCROLL_Y,
        ContainerEnabledBuiltInVariableEnum::VIDEO_PROVIDER,
        ContainerEnabledBuiltInVariableEnum::FIREBASE_EVENT_PARAMETER_PRICE,
    ];
    $request->container->fingerprint = 'quia';
    $request->container->name = 'Mr. Marlon Schultz V';
    $request->container->notes = 'culpa';
    $request->container->publicId = 'aliquid';
    $request->container->timeZoneCountryId = 'tenetur';
    $request->container->timeZoneId = 'quae';
    $request->container->usageContext = [
        ContainerUsageContextEnum::IOS,
        ContainerUsageContextEnum::IOS,
        ContainerUsageContextEnum::ANDROID,
        ContainerUsageContextEnum::IOS_SDK5,
    ];
    $request->accessToken = 'illum';
    $request->accountId = 'soluta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquam';
    $request->containerId = 'sapiente';
    $request->fields = 'dicta';
    $request->fingerprint = 'ullam';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new TagmanagerAccountsContainersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersUpdate($request, $requestSecurity);

    if ($response->container !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVariablesCreate

Creates a GTM Variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVariablesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Variable;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVariablesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVariablesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->variable = new Variable();
    $request->variable->accountId = 'quibusdam';
    $request->variable->containerId = 'ex';
    $request->variable->disablingTriggerId = [
        'itaque',
        'dolorum',
        'architecto',
    ];
    $request->variable->enablingTriggerId = [
        'tenetur',
        'quasi',
        'at',
    ];
    $request->variable->fingerprint = 'et';
    $request->variable->name = 'Mrs. Cynthia Hansen';
    $request->variable->notes = 'iste';
    $request->variable->parameter = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->variable->parentFolderId = 'accusantium';
    $request->variable->scheduleEndMs = 'rem';
    $request->variable->scheduleStartMs = 'aut';
    $request->variable->type = 'laudantium';
    $request->variable->variableId = 'eum';
    $request->accessToken = 'mollitia';
    $request->accountId = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->containerId = 'voluptatem';
    $request->fields = 'dolor';
    $request->key = 'occaecati';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new TagmanagerAccountsContainersVariablesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVariablesCreate($request, $requestSecurity);

    if ($response->variable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVariablesDelete

Deletes a GTM Variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVariablesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVariablesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVariablesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dignissimos';
    $request->accountId = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'natus';
    $request->containerId = 'velit';
    $request->fields = 'voluptatibus';
    $request->key = 'voluptas';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'quaerat';
    $request->variableId = 'consequuntur';

    $requestSecurity = new TagmanagerAccountsContainersVariablesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVariablesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVariablesGet

Gets a GTM Variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVariablesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVariablesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVariablesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVariablesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVariablesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officia';
    $request->accountId = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->containerId = 'asperiores';
    $request->fields = 'nemo';
    $request->key = 'quae';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'labore';
    $request->variableId = 'ab';

    $requestSecurity = new TagmanagerAccountsContainersVariablesGetSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersVariablesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVariablesGet($request, $requestSecurity);

    if ($response->variable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVariablesList

Lists all GTM Variables of a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVariablesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVariablesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVariablesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVariablesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVariablesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fuga';
    $request->accountId = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->containerId = 'culpa';
    $request->fields = 'est';
    $request->key = 'recusandae';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'ducimus';

    $requestSecurity = new TagmanagerAccountsContainersVariablesListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersVariablesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVariablesList($request, $requestSecurity);

    if ($response->listVariablesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVariablesUpdate

Updates a GTM Variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVariablesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Variable;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVariablesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVariablesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->variable = new Variable();
    $request->variable->accountId = 'vel';
    $request->variable->containerId = 'labore';
    $request->variable->disablingTriggerId = [
        'facilis',
        'cum',
        'commodi',
        'in',
    ];
    $request->variable->enablingTriggerId = [
        'reiciendis',
        'assumenda',
    ];
    $request->variable->fingerprint = 'nemo';
    $request->variable->name = 'Gilbert Bayer';
    $request->variable->notes = 'in';
    $request->variable->parameter = [
        new Parameter(),
        new Parameter(),
    ];
    $request->variable->parentFolderId = 'earum';
    $request->variable->scheduleEndMs = 'facere';
    $request->variable->scheduleStartMs = 'numquam';
    $request->variable->type = 'doloribus';
    $request->variable->variableId = 'suscipit';
    $request->accessToken = 'reiciendis';
    $request->accountId = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'necessitatibus';
    $request->containerId = 'dolore';
    $request->fields = 'sunt';
    $request->fingerprint = 'asperiores';
    $request->key = 'adipisci';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'dignissimos';
    $request->variableId = 'a';

    $requestSecurity = new TagmanagerAccountsContainersVariablesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVariablesUpdate($request, $requestSecurity);

    if ($response->variable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVersionsCreate

Creates a Container Version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateContainerVersionRequestVersionOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVersionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createContainerVersionRequestVersionOptions = new CreateContainerVersionRequestVersionOptions();
    $request->createContainerVersionRequestVersionOptions->name = 'Stacy Pollich DVM';
    $request->createContainerVersionRequestVersionOptions->notes = 'libero';
    $request->createContainerVersionRequestVersionOptions->quickPreview = false;
    $request->accessToken = 'vitae';
    $request->accountId = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempora';
    $request->containerId = 'aspernatur';
    $request->fields = 'voluptas';
    $request->key = 'voluptas';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new TagmanagerAccountsContainersVersionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVersionsCreate($request, $requestSecurity);

    if ($response->createContainerVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVersionsDelete

Deletes a Container Version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVersionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minus';
    $request->accountId = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->containerId = 'dolore';
    $request->containerVersionId = 'aliquam';
    $request->fields = 'officiis';
    $request->key = 'temporibus';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new TagmanagerAccountsContainersVersionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVersionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVersionsGet

Gets a Container Version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVersionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'hic';
    $request->accountId = 'nesciunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corrupti';
    $request->containerId = 'pariatur';
    $request->containerVersionId = 'totam';
    $request->fields = 'hic';
    $request->key = 'exercitationem';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new TagmanagerAccountsContainersVersionsGetSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersVersionsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVersionsGet($request, $requestSecurity);

    if ($response->containerVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVersionsList

Lists all Container Versions of a GTM Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'explicabo';
    $request->accountId = 'asperiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->containerId = 'expedita';
    $request->fields = 'ab';
    $request->headers = false;
    $request->includeDeleted = false;
    $request->key = 'iste';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'in';

    $requestSecurity = new TagmanagerAccountsContainersVersionsListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersVersionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVersionsList($request, $requestSecurity);

    if ($response->listContainerVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVersionsPublish

Publishes a Container Version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsPublishRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsPublishSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVersionsPublishRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quidem';
    $request->accountId = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'unde';
    $request->containerId = 'architecto';
    $request->containerVersionId = 'suscipit';
    $request->fields = 'sapiente';
    $request->fingerprint = 'debitis';
    $request->key = 'illo';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new TagmanagerAccountsContainersVersionsPublishSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVersionsPublish($request, $requestSecurity);

    if ($response->publishContainerVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVersionsRestore

Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsRestoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsRestoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVersionsRestoreRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sed';
    $request->accountId = 'provident';
    $request->alt = AltEnum::JSON;
    $request->callback = 'necessitatibus';
    $request->containerId = 'ipsum';
    $request->containerVersionId = 'ea';
    $request->fields = 'occaecati';
    $request->key = 'quos';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new TagmanagerAccountsContainersVersionsRestoreSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVersionsRestore($request, $requestSecurity);

    if ($response->containerVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVersionsUndelete

Undeletes a Container Version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsUndeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsUndeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVersionsUndeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ex';
    $request->accountId = 'sit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officiis';
    $request->containerId = 'praesentium';
    $request->containerVersionId = 'facilis';
    $request->fields = 'quaerat';
    $request->key = 'incidunt';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'sit';

    $requestSecurity = new TagmanagerAccountsContainersVersionsUndeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVersionsUndelete($request, $requestSecurity);

    if ($response->containerVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVersionsUpdate

Updates a Container Version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContainerVersion;
use \OpenAPI\OpenAPI\Models\Shared\Container;
use \OpenAPI\OpenAPI\Models\Shared\ContainerEnabledBuiltInVariableEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContainerUsageContextEnum;
use \OpenAPI\OpenAPI\Models\Shared\Folder;
use \OpenAPI\OpenAPI\Models\Shared\Macro;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\ConditionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\SetupTag;
use \OpenAPI\OpenAPI\Models\Shared\TagTagFiringOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TeardownTag;
use \OpenAPI\OpenAPI\Models\Shared\Trigger;
use \OpenAPI\OpenAPI\Models\Shared\TriggerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Variable;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVersionsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->containerVersion = new ContainerVersion();
    $request->containerVersion->accountId = 'error';
    $request->containerVersion->container = new Container();
    $request->containerVersion->container->accountId = 'veniam';
    $request->containerVersion->container->containerId = 'minima';
    $request->containerVersion->container->domainName = [
        'reiciendis',
        'nulla',
        'magni',
        'aperiam',
    ];
    $request->containerVersion->container->enabledBuiltInVariable = [
        ContainerEnabledBuiltInVariableEnum::NEW_HISTORY_STATE,
        ContainerEnabledBuiltInVariableEnum::APP_NAME,
        ContainerEnabledBuiltInVariableEnum::AMP_BROWSER_LANGUAGE,
        ContainerEnabledBuiltInVariableEnum::VIDEO_DURATION,
    ];
    $request->containerVersion->container->fingerprint = 'beatae';
    $request->containerVersion->container->name = 'Jorge Langosh';
    $request->containerVersion->container->notes = 'dolorum';
    $request->containerVersion->container->publicId = 'voluptatum';
    $request->containerVersion->container->timeZoneCountryId = 'error';
    $request->containerVersion->container->timeZoneId = 'hic';
    $request->containerVersion->container->usageContext = [
        ContainerUsageContextEnum::AMP,
        ContainerUsageContextEnum::ANDROID,
        ContainerUsageContextEnum::IOS_SDK5,
    ];
    $request->containerVersion->containerId = 'nostrum';
    $request->containerVersion->containerVersionId = 'officia';
    $request->containerVersion->deleted = false;
    $request->containerVersion->fingerprint = 'dolorum';
    $request->containerVersion->folder = [
        new Folder(),
        new Folder(),
        new Folder(),
    ];
    $request->containerVersion->macro = [
        new Macro(),
        new Macro(),
        new Macro(),
        new Macro(),
    ];
    $request->containerVersion->name = 'Kay Cormier';
    $request->containerVersion->notes = 'voluptatem';
    $request->containerVersion->rule = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->containerVersion->tag = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->containerVersion->trigger = [
        new Trigger(),
        new Trigger(),
    ];
    $request->containerVersion->variable = [
        new Variable(),
    ];
    $request->accessToken = 'esse';
    $request->accountId = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatum';
    $request->containerId = 'quas';
    $request->containerVersionId = 'repudiandae';
    $request->fields = 'corporis';
    $request->fingerprint = 'et';
    $request->key = 'blanditiis';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'vel';

    $requestSecurity = new TagmanagerAccountsContainersVersionsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVersionsUpdate($request, $requestSecurity);

    if ($response->containerVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsGet

Gets a GTM Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->accountId = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'reiciendis';
    $request->key = 'dolorem';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new TagmanagerAccountsGetSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsGet($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsList

Lists all GTM Accounts that a user has access to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'nam';
    $request->key = 'tenetur';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new TagmanagerAccountsListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsList($request, $requestSecurity);

    if ($response->listAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsPermissionsCreate

Creates a user's Account & Container Permissions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsPermissionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserAccess;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccess;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccessPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContainerAccess;
use \OpenAPI\OpenAPI\Models\Shared\ContainerAccessPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsPermissionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsPermissionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->userAccess = new UserAccess();
    $request->userAccess->accountAccess = new AccountAccess();
    $request->userAccess->accountAccess->permission = [
        AccountAccessPermissionEnum::EDIT_WORKSPACE,
        AccountAccessPermissionEnum::DELETE,
        AccountAccessPermissionEnum::EDIT_WORKSPACE,
    ];
    $request->userAccess->accountId = 'delectus';
    $request->userAccess->containerAccess = [
        new ContainerAccess(),
        new ContainerAccess(),
        new ContainerAccess(),
        new ContainerAccess(),
    ];
    $request->userAccess->emailAddress = 'perferendis';
    $request->userAccess->permissionId = 'est';
    $request->accessToken = 'quidem';
    $request->accountId = 'reprehenderit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->fields = 'praesentium';
    $request->key = 'mollitia';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new TagmanagerAccountsPermissionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsPermissionsCreate($request, $requestSecurity);

    if ($response->userAccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsPermissionsDelete

Removes a user from the account, revoking access to it and all of its containers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsPermissionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsPermissionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsPermissionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'atque';
    $request->accountId = 'reprehenderit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'suscipit';
    $request->key = 'quidem';
    $request->oauthToken = 'maxime';
    $request->permissionId = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new TagmanagerAccountsPermissionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsPermissionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsPermissionsGet

Gets a user's Account & Container Permissions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsPermissionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsPermissionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsPermissionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'atque';
    $request->accountId = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officiis';
    $request->fields = 'accusamus';
    $request->key = 'natus';
    $request->oauthToken = 'minima';
    $request->permissionId = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'corrupti';

    $requestSecurity = new TagmanagerAccountsPermissionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsPermissionsGet($request, $requestSecurity);

    if ($response->userAccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsPermissionsList

List all users that have access to the account along with Account and Container Permissions granted to each of them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsPermissionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsPermissionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsPermissionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'error';
    $request->accountId = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repudiandae';
    $request->fields = 'atque';
    $request->key = 'atque';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'repellendus';

    $requestSecurity = new TagmanagerAccountsPermissionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsPermissionsList($request, $requestSecurity);

    if ($response->listAccountUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsPermissionsUpdate

Updates a user's Account & Container Permissions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsPermissionsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserAccess;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccess;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccessPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContainerAccess;
use \OpenAPI\OpenAPI\Models\Shared\ContainerAccessPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsPermissionsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsPermissionsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->userAccess = new UserAccess();
    $request->userAccess->accountAccess = new AccountAccess();
    $request->userAccess->accountAccess->permission = [
        AccountAccessPermissionEnum::READ,
        AccountAccessPermissionEnum::EDIT_WORKSPACE,
        AccountAccessPermissionEnum::READ,
        AccountAccessPermissionEnum::READ,
    ];
    $request->userAccess->accountId = 'beatae';
    $request->userAccess->containerAccess = [
        new ContainerAccess(),
    ];
    $request->userAccess->emailAddress = 'enim';
    $request->userAccess->permissionId = 'laboriosam';
    $request->accessToken = 'velit';
    $request->accountId = 'a';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'saepe';
    $request->key = 'consequuntur';
    $request->oauthToken = 'occaecati';
    $request->permissionId = 'officiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'perspiciatis';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'adipisci';

    $requestSecurity = new TagmanagerAccountsPermissionsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsPermissionsUpdate($request, $requestSecurity);

    if ($response->userAccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsUpdate

Updates a GTM Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Account;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->account = new Account();
    $request->account->accountId = 'occaecati';
    $request->account->fingerprint = 'consequuntur';
    $request->account->name = 'Amelia Harvey';
    $request->account->shareData = false;
    $request->accessToken = 'illo';
    $request->accountId = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eveniet';
    $request->fields = 'non';
    $request->fingerprint = 'vero';
    $request->key = 'doloremque';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new TagmanagerAccountsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsUpdate($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
