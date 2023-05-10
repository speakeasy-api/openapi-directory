# accounts

### Available Operations

* [tagmanagerAccountsContainersCombine](#tagmanageraccountscontainerscombine) - Combines Containers.
* [tagmanagerAccountsContainersCreate](#tagmanageraccountscontainerscreate) - Creates a Container.
* [tagmanagerAccountsContainersDestinationsLink](#tagmanageraccountscontainersdestinationslink) - Adds a Destination to this Container and removes it from the Container to which it is currently linked.
* [tagmanagerAccountsContainersDestinationsList](#tagmanageraccountscontainersdestinationslist) - Lists all Destinations linked to a GTM Container.
* [tagmanagerAccountsContainersEnvironmentsCreate](#tagmanageraccountscontainersenvironmentscreate) - Creates a GTM Environment.
* [tagmanagerAccountsContainersEnvironmentsList](#tagmanageraccountscontainersenvironmentslist) - Lists all GTM Environments of a GTM Container.
* [tagmanagerAccountsContainersEnvironmentsReauthorize](#tagmanageraccountscontainersenvironmentsreauthorize) - Re-generates the authorization code for a GTM Environment.
* [tagmanagerAccountsContainersList](#tagmanageraccountscontainerslist) - Lists all Containers that belongs to a GTM Account.
* [tagmanagerAccountsContainersLookup](#tagmanageraccountscontainerslookup) - Looks up a Container by destination ID.
* [tagmanagerAccountsContainersMoveTagId](#tagmanageraccountscontainersmovetagid) - Move Tag ID out of a Container.
* [tagmanagerAccountsContainersSnippet](#tagmanageraccountscontainerssnippet) - Gets the tagging snippet for a Container.
* [tagmanagerAccountsContainersVersionHeadersLatest](#tagmanageraccountscontainersversionheaderslatest) - Gets the latest container version header
* [tagmanagerAccountsContainersVersionHeadersList](#tagmanageraccountscontainersversionheaderslist) - Lists all Container Versions of a GTM Container.
* [tagmanagerAccountsContainersVersionsLive](#tagmanageraccountscontainersversionslive) - Gets the live (i.e. published) container version
* [tagmanagerAccountsContainersVersionsPublish](#tagmanageraccountscontainersversionspublish) - Publishes a Container Version.
* [tagmanagerAccountsContainersVersionsSetLatest](#tagmanageraccountscontainersversionssetlatest) - Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
* [tagmanagerAccountsContainersVersionsUndelete](#tagmanageraccountscontainersversionsundelete) - Undeletes a Container Version.
* [tagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate](#tagmanageraccountscontainersworkspacesbuiltinvariablescreate) - Creates one or more GTM Built-In Variables.
* [tagmanagerAccountsContainersWorkspacesBuiltInVariablesList](#tagmanageraccountscontainersworkspacesbuiltinvariableslist) - Lists all the enabled Built-In Variables of a GTM Container.
* [tagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert](#tagmanageraccountscontainersworkspacesbuiltinvariablesrevert) - Reverts changes to a GTM Built-In Variables in a GTM Workspace.
* [tagmanagerAccountsContainersWorkspacesClientsCreate](#tagmanageraccountscontainersworkspacesclientscreate) - Creates a GTM Client.
* [tagmanagerAccountsContainersWorkspacesClientsList](#tagmanageraccountscontainersworkspacesclientslist) - Lists all GTM Clients of a GTM container workspace.
* [tagmanagerAccountsContainersWorkspacesCreate](#tagmanageraccountscontainersworkspacescreate) - Creates a Workspace.
* [tagmanagerAccountsContainersWorkspacesCreateVersion](#tagmanageraccountscontainersworkspacescreateversion) - Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
* [tagmanagerAccountsContainersWorkspacesFoldersCreate](#tagmanageraccountscontainersworkspacesfolderscreate) - Creates a GTM Folder.
* [tagmanagerAccountsContainersWorkspacesFoldersEntities](#tagmanageraccountscontainersworkspacesfoldersentities) - List all entities in a GTM Folder.
* [tagmanagerAccountsContainersWorkspacesFoldersList](#tagmanageraccountscontainersworkspacesfolderslist) - Lists all GTM Folders of a Container.
* [tagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder](#tagmanageraccountscontainersworkspacesfoldersmoveentitiestofolder) - Moves entities to a GTM Folder.
* [tagmanagerAccountsContainersWorkspacesGetStatus](#tagmanageraccountscontainersworkspacesgetstatus) - Finds conflicting and modified entities in the workspace.
* [tagmanagerAccountsContainersWorkspacesGtagConfigCreate](#tagmanageraccountscontainersworkspacesgtagconfigcreate) - Creates a Google tag config.
* [tagmanagerAccountsContainersWorkspacesGtagConfigList](#tagmanageraccountscontainersworkspacesgtagconfiglist) - Lists all Google tag configs in a Container.
* [tagmanagerAccountsContainersWorkspacesList](#tagmanageraccountscontainersworkspaceslist) - Lists all Workspaces that belong to a GTM Container.
* [tagmanagerAccountsContainersWorkspacesQuickPreview](#tagmanageraccountscontainersworkspacesquickpreview) - Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
* [tagmanagerAccountsContainersWorkspacesResolveConflict](#tagmanageraccountscontainersworkspacesresolveconflict) - Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
* [tagmanagerAccountsContainersWorkspacesSync](#tagmanageraccountscontainersworkspacessync) - Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
* [tagmanagerAccountsContainersWorkspacesTagsCreate](#tagmanageraccountscontainersworkspacestagscreate) - Creates a GTM Tag.
* [tagmanagerAccountsContainersWorkspacesTagsList](#tagmanageraccountscontainersworkspacestagslist) - Lists all GTM Tags of a Container.
* [tagmanagerAccountsContainersWorkspacesTemplatesCreate](#tagmanageraccountscontainersworkspacestemplatescreate) - Creates a GTM Custom Template.
* [tagmanagerAccountsContainersWorkspacesTemplatesList](#tagmanageraccountscontainersworkspacestemplateslist) - Lists all GTM Templates of a GTM container workspace.
* [tagmanagerAccountsContainersWorkspacesTriggersCreate](#tagmanageraccountscontainersworkspacestriggerscreate) - Creates a GTM Trigger.
* [tagmanagerAccountsContainersWorkspacesTriggersList](#tagmanageraccountscontainersworkspacestriggerslist) - Lists all GTM Triggers of a Container.
* [tagmanagerAccountsContainersWorkspacesVariablesCreate](#tagmanageraccountscontainersworkspacesvariablescreate) - Creates a GTM Variable.
* [tagmanagerAccountsContainersWorkspacesVariablesList](#tagmanageraccountscontainersworkspacesvariableslist) - Lists all GTM Variables of a Container.
* [tagmanagerAccountsContainersWorkspacesZonesCreate](#tagmanageraccountscontainersworkspaceszonescreate) - Creates a GTM Zone.
* [tagmanagerAccountsContainersWorkspacesZonesList](#tagmanageraccountscontainersworkspaceszoneslist) - Lists all GTM Zones of a GTM container workspace.
* [tagmanagerAccountsContainersWorkspacesZonesRevert](#tagmanageraccountscontainersworkspaceszonesrevert) - Reverts changes to a GTM Zone in a GTM Workspace.
* [tagmanagerAccountsList](#tagmanageraccountslist) - Lists all GTM Accounts that a user has access to.
* [tagmanagerAccountsUserPermissionsCreate](#tagmanageraccountsuserpermissionscreate) - Creates a user's Account & Container access.
* [tagmanagerAccountsUserPermissionsDelete](#tagmanageraccountsuserpermissionsdelete) - Removes a user from the account, revoking access to it and all of its containers.
* [tagmanagerAccountsUserPermissionsGet](#tagmanageraccountsuserpermissionsget) - Gets a user's Account & Container access.
* [tagmanagerAccountsUserPermissionsList](#tagmanageraccountsuserpermissionslist) - List all users that have access to the account along with Account and Container user access granted to each of them.
* [tagmanagerAccountsUserPermissionsUpdate](#tagmanageraccountsuserpermissionsupdate) - Updates a user's Account & Container access.

## tagmanagerAccountsContainersCombine

Combines Containers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersCombineRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersCombineSettingSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersCombineSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersCombineRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->allowUserPermissionFeatureUpdate = false;
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->containerId = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->path = 'placeat';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatum';
    $request->settingSource = TagmanagerAccountsContainersCombineSettingSourceEnum::CURRENT;
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new TagmanagerAccountsContainersCombineSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersCombine($request, $requestSecurity);

    if ($response->container !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
use \OpenAPI\OpenAPI\Models\Shared\ContainerFeatures;
use \OpenAPI\OpenAPI\Models\Shared\ContainerUsageContextEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->container = new Container();
    $request->container->accountId = 'temporibus';
    $request->container->containerId = 'ab';
    $request->container->domainName = [
        'veritatis',
        'deserunt',
    ];
    $request->container->features = new ContainerFeatures();
    $request->container->features->supportBuiltInVariables = false;
    $request->container->features->supportClients = false;
    $request->container->features->supportEnvironments = false;
    $request->container->features->supportFolders = false;
    $request->container->features->supportGtagConfigs = false;
    $request->container->features->supportTags = false;
    $request->container->features->supportTemplates = false;
    $request->container->features->supportTriggers = false;
    $request->container->features->supportUserPermissions = false;
    $request->container->features->supportVariables = false;
    $request->container->features->supportVersions = false;
    $request->container->features->supportWorkspaces = false;
    $request->container->features->supportZones = false;
    $request->container->fingerprint = 'perferendis';
    $request->container->name = 'Estelle Will';
    $request->container->notes = 'at';
    $request->container->path = 'at';
    $request->container->publicId = 'maiores';
    $request->container->tagIds = [
        'quod',
        'quod',
    ];
    $request->container->tagManagerUrl = 'esse';
    $request->container->taggingServerUrls = [
        'porro',
        'dolorum',
        'dicta',
    ];
    $request->container->usageContext = [
        ContainerUsageContextEnum::IOS_SDK5,
        ContainerUsageContextEnum::ANDROID_SDK5,
        ContainerUsageContextEnum::WEB,
    ];
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'totam';
    $request->key = 'beatae';
    $request->oauthToken = 'commodi';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'impedit';

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

## tagmanagerAccountsContainersDestinationsLink

Adds a Destination to this Container and removes it from the Container to which it is currently linked.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersDestinationsLinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersDestinationsLinkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersDestinationsLinkRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->allowUserPermissionFeatureUpdate = false;
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->destinationId = 'aspernatur';
    $request->fields = 'perferendis';
    $request->key = 'ad';
    $request->oauthToken = 'natus';
    $request->parent = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new TagmanagerAccountsContainersDestinationsLinkSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersDestinationsLink($request, $requestSecurity);

    if ($response->destination !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersDestinationsList

Lists all Destinations linked to a GTM Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersDestinationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersDestinationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersDestinationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersDestinationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersDestinationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->fields = 'in';
    $request->key = 'corporis';
    $request->oauthToken = 'iste';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new TagmanagerAccountsContainersDestinationsListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersDestinationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersDestinationsList($request, $requestSecurity);

    if ($response->listDestinationsResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->environment = new Environment();
    $request->environment->accountId = 'reiciendis';
    $request->environment->authorizationCode = 'est';
    $request->environment->authorizationTimestamp = 'mollitia';
    $request->environment->containerId = 'laborum';
    $request->environment->containerVersionId = 'dolores';
    $request->environment->description = 'dolorem';
    $request->environment->enableDebug = false;
    $request->environment->environmentId = 'corporis';
    $request->environment->fingerprint = 'explicabo';
    $request->environment->name = 'Ronnie Mohr';
    $request->environment->path = 'excepturi';
    $request->environment->tagManagerUrl = 'accusantium';
    $request->environment->type = EnvironmentTypeEnum::LIVE;
    $request->environment->url = 'culpa';
    $request->environment->workspaceId = 'doloribus';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'dolorem';
    $request->key = 'culpa';
    $request->oauthToken = 'consequuntur';
    $request->parent = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

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
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'error';
    $request->key = 'quia';
    $request->oauthToken = 'quis';
    $request->pageToken = 'vitae';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'odit';

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

## tagmanagerAccountsContainersEnvironmentsReauthorize

Re-generates the authorization code for a GTM Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsReauthorizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Environment;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersEnvironmentsReauthorizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersEnvironmentsReauthorizeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->environment = new Environment();
    $request->environment->accountId = 'sequi';
    $request->environment->authorizationCode = 'tenetur';
    $request->environment->authorizationTimestamp = 'ipsam';
    $request->environment->containerId = 'id';
    $request->environment->containerVersionId = 'possimus';
    $request->environment->description = 'aut';
    $request->environment->enableDebug = false;
    $request->environment->environmentId = 'quasi';
    $request->environment->fingerprint = 'error';
    $request->environment->name = 'Neal Boyer';
    $request->environment->path = 'vero';
    $request->environment->tagManagerUrl = 'nihil';
    $request->environment->type = EnvironmentTypeEnum::LATEST;
    $request->environment->url = 'voluptatibus';
    $request->environment->workspaceId = 'ipsa';
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'perferendis';
    $request->key = 'doloremque';
    $request->oauthToken = 'reprehenderit';
    $request->path = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new TagmanagerAccountsContainersEnvironmentsReauthorizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersEnvironmentsReauthorize($request, $requestSecurity);

    if ($response->environment !== null) {
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
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'commodi';
    $request->pageToken = 'repudiandae';
    $request->parent = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'molestias';

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

## tagmanagerAccountsContainersLookup

Looks up a Container by destination ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersLookupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersLookupSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersLookupSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersLookupSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersLookupRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->destinationId = 'rem';
    $request->fields = 'voluptates';
    $request->key = 'quasi';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'itaque';

    $requestSecurity = new TagmanagerAccountsContainersLookupSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersLookupSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersLookup($request, $requestSecurity);

    if ($response->container !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersMoveTagId

Move Tag ID out of a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersMoveTagIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersMoveTagIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersMoveTagIdRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'enim';
    $request->allowUserPermissionFeatureUpdate = false;
    $request->alt = AltEnum::JSON;
    $request->callback = 'est';
    $request->copySettings = false;
    $request->copyTermsOfService = false;
    $request->copyUsers = false;
    $request->fields = 'quibusdam';
    $request->key = 'explicabo';
    $request->oauthToken = 'deserunt';
    $request->path = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->tagId = 'labore';
    $request->tagName = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new TagmanagerAccountsContainersMoveTagIdSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersMoveTagId($request, $requestSecurity);

    if ($response->container !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersSnippet

Gets the tagging snippet for a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersSnippetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersSnippetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersSnippetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersSnippetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersSnippetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'assumenda';
    $request->key = 'ipsam';
    $request->oauthToken = 'alias';
    $request->path = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new TagmanagerAccountsContainersSnippetSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersSnippetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersSnippet($request, $requestSecurity);

    if ($response->getContainerSnippetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVersionHeadersLatest

Gets the latest container version header

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionHeadersLatestRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionHeadersLatestSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionHeadersLatestSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVersionHeadersLatestRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'eum';
    $request->key = 'non';
    $request->oauthToken = 'eligendi';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new TagmanagerAccountsContainersVersionHeadersLatestSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVersionHeadersLatest($request, $requestSecurity);

    if ($response->containerVersionHeader !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVersionHeadersList

Lists all Container Versions of a GTM Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionHeadersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionHeadersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionHeadersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionHeadersListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionHeadersListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVersionHeadersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'a';
    $request->includeDeleted = false;
    $request->key = 'dolorum';
    $request->oauthToken = 'in';
    $request->pageToken = 'in';
    $request->parent = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new TagmanagerAccountsContainersVersionHeadersListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersVersionHeadersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVersionHeadersList($request, $requestSecurity);

    if ($response->listContainerVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersVersionsLive

Gets the live (i.e. published) container version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsLiveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsLiveSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsLiveSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsLiveSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVersionsLiveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'aliquid';
    $request->key = 'laborum';
    $request->oauthToken = 'accusamus';
    $request->parent = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new TagmanagerAccountsContainersVersionsLiveSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersVersionsLiveSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVersionsLive($request, $requestSecurity);

    if ($response->containerVersion !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->fields = 'id';
    $request->fingerprint = 'blanditiis';
    $request->key = 'deleniti';
    $request->oauthToken = 'sapiente';
    $request->path = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'vel';

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

## tagmanagerAccountsContainersVersionsSetLatest

Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsSetLatestRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersVersionsSetLatestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersVersionsSetLatestRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'nihil';
    $request->key = 'magnam';
    $request->oauthToken = 'distinctio';
    $request->path = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new TagmanagerAccountsContainersVersionsSetLatestSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersVersionsSetLatest($request, $requestSecurity);

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
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vero';
    $request->fields = 'aspernatur';
    $request->key = 'architecto';
    $request->oauthToken = 'magnam';
    $request->path = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'provident';

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

## tagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate

Creates one or more GTM Built-In Variables.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'reiciendis';
    $request->key = 'mollitia';
    $request->oauthToken = 'ad';
    $request->parent = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->type = [
        TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum::FORM_TARGET,
        TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum::DEVICE_NAME,
        TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum::CLICK_TEXT,
        TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum::AMP_CANONICAL_URL,
    ];
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate($request, $requestSecurity);

    if ($response->createBuiltInVariableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesBuiltInVariablesList

Lists all the enabled Built-In Variables of a GTM Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'in';
    $request->key = 'architecto';
    $request->oauthToken = 'architecto';
    $request->pageToken = 'repudiandae';
    $request->parent = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesBuiltInVariablesList($request, $requestSecurity);

    if ($response->listEnabledBuiltInVariablesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert

Reverts changes to a GTM Built-In Variables in a GTM Workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'accusantium';
    $request->key = 'consequuntur';
    $request->oauthToken = 'praesentium';
    $request->path = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->type = TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum::FORM_CLASSES;
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert($request, $requestSecurity);

    if ($response->revertBuiltInVariableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesClientsCreate

Creates a GTM Client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesClientsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Client;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesClientsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesClientsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->client = new Client();
    $request->client->accountId = 'maxime';
    $request->client->clientId = 'ea';
    $request->client->containerId = 'excepturi';
    $request->client->fingerprint = 'odit';
    $request->client->name = 'Donna Bernhard';
    $request->client->notes = 'ipsam';
    $request->client->parameter = [
        new Parameter(),
        new Parameter(),
    ];
    $request->client->parentFolderId = 'autem';
    $request->client->path = 'nam';
    $request->client->priority = 50588;
    $request->client->tagManagerUrl = 'pariatur';
    $request->client->type = 'nemo';
    $request->client->workspaceId = 'voluptatibus';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'aut';
    $request->key = 'cumque';
    $request->oauthToken = 'corporis';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesClientsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesClientsCreate($request, $requestSecurity);

    if ($response->client !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesClientsList

Lists all GTM Clients of a GTM container workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesClientsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesClientsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesClientsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesClientsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->fields = 'quis';
    $request->key = 'nesciunt';
    $request->oauthToken = 'eos';
    $request->pageToken = 'perferendis';
    $request->parent = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesClientsListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesClientsList($request, $requestSecurity);

    if ($response->listClientsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesCreate

Creates a Workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Workspace;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->workspace = new Workspace();
    $request->workspace->accountId = 'nostrum';
    $request->workspace->containerId = 'hic';
    $request->workspace->description = 'recusandae';
    $request->workspace->fingerprint = 'omnis';
    $request->workspace->name = 'Freddie Bartoletti';
    $request->workspace->path = 'blanditiis';
    $request->workspace->tagManagerUrl = 'error';
    $request->workspace->workspaceId = 'eaque';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'adipisci';
    $request->fields = 'asperiores';
    $request->key = 'earum';
    $request->oauthToken = 'modi';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesCreate($request, $requestSecurity);

    if ($response->workspace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesCreateVersion

Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesCreateVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateContainerVersionRequestVersionOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesCreateVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesCreateVersionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createContainerVersionRequestVersionOptions = new CreateContainerVersionRequestVersionOptions();
    $request->createContainerVersionRequestVersionOptions->name = 'Randolph Wintheiser';
    $request->createContainerVersionRequestVersionOptions->notes = 'aliquid';
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'qui';
    $request->key = 'ipsum';
    $request->oauthToken = 'hic';
    $request->path = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesCreateVersionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesCreateVersion($request, $requestSecurity);

    if ($response->createContainerVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesFoldersCreate

Creates a GTM Folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesFoldersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Folder;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesFoldersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->folder = new Folder();
    $request->folder->accountId = 'amet';
    $request->folder->containerId = 'dolorum';
    $request->folder->fingerprint = 'numquam';
    $request->folder->folderId = 'veritatis';
    $request->folder->name = 'Angela Kerluke';
    $request->folder->notes = 'accusamus';
    $request->folder->path = 'quidem';
    $request->folder->tagManagerUrl = 'voluptatibus';
    $request->folder->workspaceId = 'voluptas';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'atque';
    $request->fields = 'sit';
    $request->key = 'fugiat';
    $request->oauthToken = 'ab';
    $request->parent = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesFoldersCreate($request, $requestSecurity);

    if ($response->folder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesFoldersEntities

List all entities in a GTM Folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesFoldersEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesFoldersEntitiesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'distinctio';
    $request->key = 'asperiores';
    $request->oauthToken = 'nihil';
    $request->pageToken = 'ipsum';
    $request->path = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'eius';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesFoldersEntities($request, $requestSecurity);

    if ($response->folderEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesFoldersList

Lists all GTM Folders of a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesFoldersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesFoldersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesFoldersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesFoldersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesFoldersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'accusamus';
    $request->key = 'ad';
    $request->oauthToken = 'saepe';
    $request->pageToken = 'suscipit';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'repellendus';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesFoldersListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersWorkspacesFoldersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesFoldersList($request, $requestSecurity);

    if ($response->listFoldersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder

Moves entities to a GTM Folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Folder;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->folder = new Folder();
    $request->folder->accountId = 'similique';
    $request->folder->containerId = 'alias';
    $request->folder->fingerprint = 'at';
    $request->folder->folderId = 'quaerat';
    $request->folder->name = 'Gina Schmeler';
    $request->folder->notes = 'dolorum';
    $request->folder->path = 'a';
    $request->folder->tagManagerUrl = 'esse';
    $request->folder->workspaceId = 'harum';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'tenetur';
    $request->key = 'amet';
    $request->oauthToken = 'tempore';
    $request->path = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->tagId = [
        'dolorem',
        'sapiente',
    ];
    $request->triggerId = [
        'nihil',
        'sit',
        'expedita',
    ];
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'sed';
    $request->variableId = [
        'libero',
        'voluptas',
    ];

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesGetStatus

Finds conflicting and modified entities in the workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesGetStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesGetStatusSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesGetStatusRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'qui';
    $request->key = 'cupiditate';
    $request->oauthToken = 'maxime';
    $request->path = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'soluta';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesGetStatusSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesGetStatus($request, $requestSecurity);

    if ($response->getWorkspaceStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesGtagConfigCreate

Creates a Google tag config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GtagConfig;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesGtagConfigCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->gtagConfig = new GtagConfig();
    $request->gtagConfig->accountId = 'incidunt';
    $request->gtagConfig->containerId = 'aspernatur';
    $request->gtagConfig->fingerprint = 'dolores';
    $request->gtagConfig->gtagConfigId = 'distinctio';
    $request->gtagConfig->parameter = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->gtagConfig->path = 'aliquid';
    $request->gtagConfig->tagManagerUrl = 'quam';
    $request->gtagConfig->type = 'molestias';
    $request->gtagConfig->workspaceId = 'temporibus';
    $request->accessToken = 'qui';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'magni';
    $request->key = 'odio';
    $request->oauthToken = 'sunt';
    $request->parent = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'voluptatem';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesGtagConfigCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesGtagConfigCreate($request, $requestSecurity);

    if ($response->gtagConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesGtagConfigList

Lists all Google tag configs in a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesGtagConfigListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesGtagConfigListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'et';
    $request->fields = 'saepe';
    $request->key = 'ipsum';
    $request->oauthToken = 'veritatis';
    $request->pageToken = 'nobis';
    $request->parent = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'aperiam';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesGtagConfigList($request, $requestSecurity);

    if ($response->listGtagConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesList

Lists all Workspaces that belong to a GTM Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'adipisci';
    $request->key = 'dolorum';
    $request->oauthToken = 'architecto';
    $request->pageToken = 'quae';
    $request->parent = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quas';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersWorkspacesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesList($request, $requestSecurity);

    if ($response->listWorkspacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesQuickPreview

Quick previews a workspace by creating a fake container version from all entities in the provided workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesQuickPreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesQuickPreviewRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloribus';
    $request->fields = 'ut';
    $request->key = 'facilis';
    $request->oauthToken = 'cupiditate';
    $request->path = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesQuickPreview($request, $requestSecurity);

    if ($response->quickPreviewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesResolveConflict

Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesResolveConflictRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Entity;
use \OpenAPI\OpenAPI\Models\Shared\EntityChangeStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Client;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Folder;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TagConsentSetting;
use \OpenAPI\OpenAPI\Models\Shared\TagConsentSettingConsentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetupTag;
use \OpenAPI\OpenAPI\Models\Shared\TagTagFiringOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TeardownTag;
use \OpenAPI\OpenAPI\Models\Shared\Trigger;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\ConditionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Variable;
use \OpenAPI\OpenAPI\Models\Shared\VariableFormatValue;
use \OpenAPI\OpenAPI\Models\Shared\VariableFormatValueCaseConversionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesResolveConflictSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesResolveConflictRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->entity = new Entity();
    $request->entity->changeStatus = EntityChangeStatusEnum::UPDATED;
    $request->entity->client = new Client();
    $request->entity->client->accountId = 'quisquam';
    $request->entity->client->clientId = 'vero';
    $request->entity->client->containerId = 'omnis';
    $request->entity->client->fingerprint = 'quis';
    $request->entity->client->name = 'Dixie Klocko';
    $request->entity->client->notes = 'tenetur';
    $request->entity->client->parameter = [
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->client->parentFolderId = 'hic';
    $request->entity->client->path = 'distinctio';
    $request->entity->client->priority = 799203;
    $request->entity->client->tagManagerUrl = 'odio';
    $request->entity->client->type = 'similique';
    $request->entity->client->workspaceId = 'facilis';
    $request->entity->folder = new Folder();
    $request->entity->folder->accountId = 'vero';
    $request->entity->folder->containerId = 'ducimus';
    $request->entity->folder->fingerprint = 'dolore';
    $request->entity->folder->folderId = 'quibusdam';
    $request->entity->folder->name = 'Earl Mosciski DVM';
    $request->entity->folder->notes = 'exercitationem';
    $request->entity->folder->path = 'nulla';
    $request->entity->folder->tagManagerUrl = 'fugit';
    $request->entity->folder->workspaceId = 'porro';
    $request->entity->tag = new Tag();
    $request->entity->tag->accountId = 'maiores';
    $request->entity->tag->blockingRuleId = [
        'iusto',
        'eligendi',
        'ducimus',
        'alias',
    ];
    $request->entity->tag->blockingTriggerId = [
        'tempora',
        'ipsam',
        'ea',
    ];
    $request->entity->tag->consentSettings = new TagConsentSetting();
    $request->entity->tag->consentSettings->consentStatus = TagConsentSettingConsentStatusEnum::NOT_SET;
    $request->entity->tag->consentSettings->consentType = new Parameter();
    $request->entity->tag->consentSettings->consentType->key = 'vel';
    $request->entity->tag->consentSettings->consentType->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->tag->consentSettings->consentType->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->tag->consentSettings->consentType->type = ParameterTypeEnum::TEMPLATE;
    $request->entity->tag->consentSettings->consentType->value = 'ex';
    $request->entity->tag->containerId = 'laudantium';
    $request->entity->tag->fingerprint = 'dicta';
    $request->entity->tag->firingRuleId = [
        'maiores',
    ];
    $request->entity->tag->firingTriggerId = [
        'ex',
    ];
    $request->entity->tag->liveOnly = false;
    $request->entity->tag->monitoringMetadata = new Parameter();
    $request->entity->tag->monitoringMetadata->key = 'nulla';
    $request->entity->tag->monitoringMetadata->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->tag->monitoringMetadata->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->tag->monitoringMetadata->type = ParameterTypeEnum::INTEGER;
    $request->entity->tag->monitoringMetadata->value = 'sapiente';
    $request->entity->tag->monitoringMetadataTagNameKey = 'quisquam';
    $request->entity->tag->name = 'Nathaniel Ryan';
    $request->entity->tag->notes = 'aliquid';
    $request->entity->tag->parameter = [
        new Parameter(),
    ];
    $request->entity->tag->parentFolderId = 'magnam';
    $request->entity->tag->path = 'ea';
    $request->entity->tag->paused = false;
    $request->entity->tag->priority = new Parameter();
    $request->entity->tag->priority->key = 'quo';
    $request->entity->tag->priority->list = [
        new Parameter(),
    ];
    $request->entity->tag->priority->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->tag->priority->type = ParameterTypeEnum::TEMPLATE;
    $request->entity->tag->priority->value = 'minima';
    $request->entity->tag->scheduleEndMs = 'eaque';
    $request->entity->tag->scheduleStartMs = 'a';
    $request->entity->tag->setupTag = [
        new SetupTag(),
        new SetupTag(),
        new SetupTag(),
    ];
    $request->entity->tag->tagFiringOption = TagTagFiringOptionEnum::TAG_FIRING_OPTION_UNSPECIFIED;
    $request->entity->tag->tagId = 'aut';
    $request->entity->tag->tagManagerUrl = 'deleniti';
    $request->entity->tag->teardownTag = [
        new TeardownTag(),
        new TeardownTag(),
        new TeardownTag(),
        new TeardownTag(),
    ];
    $request->entity->tag->type = 'aliquam';
    $request->entity->tag->workspaceId = 'fugit';
    $request->entity->trigger = new Trigger();
    $request->entity->trigger->accountId = 'accusamus';
    $request->entity->trigger->autoEventFilter = [
        new Condition(),
    ];
    $request->entity->trigger->checkValidation = new Parameter();
    $request->entity->trigger->checkValidation->key = 'non';
    $request->entity->trigger->checkValidation->list = [
        new Parameter(),
    ];
    $request->entity->trigger->checkValidation->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->checkValidation->type = ParameterTypeEnum::MAP;
    $request->entity->trigger->checkValidation->value = 'placeat';
    $request->entity->trigger->containerId = 'velit';
    $request->entity->trigger->continuousTimeMinMilliseconds = new Parameter();
    $request->entity->trigger->continuousTimeMinMilliseconds->key = 'eum';
    $request->entity->trigger->continuousTimeMinMilliseconds->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->continuousTimeMinMilliseconds->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->continuousTimeMinMilliseconds->type = ParameterTypeEnum::LIST;
    $request->entity->trigger->continuousTimeMinMilliseconds->value = 'assumenda';
    $request->entity->trigger->customEventFilter = [
        new Condition(),
        new Condition(),
        new Condition(),
        new Condition(),
    ];
    $request->entity->trigger->eventName = new Parameter();
    $request->entity->trigger->eventName->key = 'voluptas';
    $request->entity->trigger->eventName->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->eventName->map = [
        new Parameter(),
    ];
    $request->entity->trigger->eventName->type = ParameterTypeEnum::INTEGER;
    $request->entity->trigger->eventName->value = 'numquam';
    $request->entity->trigger->filter = [
        new Condition(),
    ];
    $request->entity->trigger->fingerprint = 'provident';
    $request->entity->trigger->horizontalScrollPercentageList = new Parameter();
    $request->entity->trigger->horizontalScrollPercentageList->key = 'ipsa';
    $request->entity->trigger->horizontalScrollPercentageList->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->horizontalScrollPercentageList->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->horizontalScrollPercentageList->type = ParameterTypeEnum::BOOLEAN;
    $request->entity->trigger->horizontalScrollPercentageList->value = 'eius';
    $request->entity->trigger->interval = new Parameter();
    $request->entity->trigger->interval->key = 'esse';
    $request->entity->trigger->interval->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->interval->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->interval->type = ParameterTypeEnum::MAP;
    $request->entity->trigger->interval->value = 'reprehenderit';
    $request->entity->trigger->intervalSeconds = new Parameter();
    $request->entity->trigger->intervalSeconds->key = 'quidem';
    $request->entity->trigger->intervalSeconds->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->intervalSeconds->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->intervalSeconds->type = ParameterTypeEnum::BOOLEAN;
    $request->entity->trigger->intervalSeconds->value = 'suscipit';
    $request->entity->trigger->limit = new Parameter();
    $request->entity->trigger->limit->key = 'assumenda';
    $request->entity->trigger->limit->list = [
        new Parameter(),
    ];
    $request->entity->trigger->limit->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->limit->type = ParameterTypeEnum::TRIGGER_REFERENCE;
    $request->entity->trigger->limit->value = 'veritatis';
    $request->entity->trigger->maxTimerLengthSeconds = new Parameter();
    $request->entity->trigger->maxTimerLengthSeconds->key = 'ipsa';
    $request->entity->trigger->maxTimerLengthSeconds->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->maxTimerLengthSeconds->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->maxTimerLengthSeconds->type = ParameterTypeEnum::TEMPLATE;
    $request->entity->trigger->maxTimerLengthSeconds->value = 'quo';
    $request->entity->trigger->name = 'Salvatore Parker';
    $request->entity->trigger->notes = 'voluptas';
    $request->entity->trigger->parameter = [
        new Parameter(),
    ];
    $request->entity->trigger->parentFolderId = 'cupiditate';
    $request->entity->trigger->path = 'consequatur';
    $request->entity->trigger->selector = new Parameter();
    $request->entity->trigger->selector->key = 'tempora';
    $request->entity->trigger->selector->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->selector->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->selector->type = ParameterTypeEnum::TEMPLATE;
    $request->entity->trigger->selector->value = 'sequi';
    $request->entity->trigger->tagManagerUrl = 'quo';
    $request->entity->trigger->totalTimeMinMilliseconds = new Parameter();
    $request->entity->trigger->totalTimeMinMilliseconds->key = 'esse';
    $request->entity->trigger->totalTimeMinMilliseconds->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->totalTimeMinMilliseconds->map = [
        new Parameter(),
    ];
    $request->entity->trigger->totalTimeMinMilliseconds->type = ParameterTypeEnum::MAP;
    $request->entity->trigger->totalTimeMinMilliseconds->value = 'quod';
    $request->entity->trigger->triggerId = 'dignissimos';
    $request->entity->trigger->type = TriggerTypeEnum::DOM_READY;
    $request->entity->trigger->uniqueTriggerId = new Parameter();
    $request->entity->trigger->uniqueTriggerId->key = 'nihil';
    $request->entity->trigger->uniqueTriggerId->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->uniqueTriggerId->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->uniqueTriggerId->type = ParameterTypeEnum::INTEGER;
    $request->entity->trigger->uniqueTriggerId->value = 'odio';
    $request->entity->trigger->verticalScrollPercentageList = new Parameter();
    $request->entity->trigger->verticalScrollPercentageList->key = 'occaecati';
    $request->entity->trigger->verticalScrollPercentageList->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->verticalScrollPercentageList->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->verticalScrollPercentageList->type = ParameterTypeEnum::TEMPLATE;
    $request->entity->trigger->verticalScrollPercentageList->value = 'deserunt';
    $request->entity->trigger->visibilitySelector = new Parameter();
    $request->entity->trigger->visibilitySelector->key = 'molestiae';
    $request->entity->trigger->visibilitySelector->list = [
        new Parameter(),
    ];
    $request->entity->trigger->visibilitySelector->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->visibilitySelector->type = ParameterTypeEnum::BOOLEAN;
    $request->entity->trigger->visibilitySelector->value = 'quas';
    $request->entity->trigger->visiblePercentageMax = new Parameter();
    $request->entity->trigger->visiblePercentageMax->key = 'praesentium';
    $request->entity->trigger->visiblePercentageMax->list = [
        new Parameter(),
    ];
    $request->entity->trigger->visiblePercentageMax->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->visiblePercentageMax->type = ParameterTypeEnum::TEMPLATE;
    $request->entity->trigger->visiblePercentageMax->value = 'fuga';
    $request->entity->trigger->visiblePercentageMin = new Parameter();
    $request->entity->trigger->visiblePercentageMin->key = 'mollitia';
    $request->entity->trigger->visiblePercentageMin->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->visiblePercentageMin->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->visiblePercentageMin->type = ParameterTypeEnum::TEMPLATE;
    $request->entity->trigger->visiblePercentageMin->value = 'minima';
    $request->entity->trigger->waitForTags = new Parameter();
    $request->entity->trigger->waitForTags->key = 'nisi';
    $request->entity->trigger->waitForTags->list = [
        new Parameter(),
    ];
    $request->entity->trigger->waitForTags->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->waitForTags->type = ParameterTypeEnum::TEMPLATE;
    $request->entity->trigger->waitForTags->value = 'ratione';
    $request->entity->trigger->waitForTagsTimeout = new Parameter();
    $request->entity->trigger->waitForTagsTimeout->key = 'explicabo';
    $request->entity->trigger->waitForTagsTimeout->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->waitForTagsTimeout->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->trigger->waitForTagsTimeout->type = ParameterTypeEnum::LIST;
    $request->entity->trigger->waitForTagsTimeout->value = 'et';
    $request->entity->trigger->workspaceId = 'esse';
    $request->entity->variable = new Variable();
    $request->entity->variable->accountId = 'eveniet';
    $request->entity->variable->containerId = 'accusamus';
    $request->entity->variable->disablingTriggerId = [
        'esse',
    ];
    $request->entity->variable->enablingTriggerId = [
        'nam',
        'vero',
        'aliquid',
        'quasi',
    ];
    $request->entity->variable->fingerprint = 'saepe';
    $request->entity->variable->formatValue = new VariableFormatValue();
    $request->entity->variable->formatValue->caseConversionType = VariableFormatValueCaseConversionTypeEnum::LOWERCASE;
    $request->entity->variable->formatValue->convertFalseToValue = new Parameter();
    $request->entity->variable->formatValue->convertFalseToValue->key = 'harum';
    $request->entity->variable->formatValue->convertFalseToValue->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->variable->formatValue->convertFalseToValue->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->variable->formatValue->convertFalseToValue->type = ParameterTypeEnum::LIST;
    $request->entity->variable->formatValue->convertFalseToValue->value = 'minima';
    $request->entity->variable->formatValue->convertNullToValue = new Parameter();
    $request->entity->variable->formatValue->convertNullToValue->key = 'distinctio';
    $request->entity->variable->formatValue->convertNullToValue->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->variable->formatValue->convertNullToValue->map = [
        new Parameter(),
    ];
    $request->entity->variable->formatValue->convertNullToValue->type = ParameterTypeEnum::MAP;
    $request->entity->variable->formatValue->convertNullToValue->value = 'tempore';
    $request->entity->variable->formatValue->convertTrueToValue = new Parameter();
    $request->entity->variable->formatValue->convertTrueToValue->key = 'adipisci';
    $request->entity->variable->formatValue->convertTrueToValue->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->variable->formatValue->convertTrueToValue->map = [
        new Parameter(),
    ];
    $request->entity->variable->formatValue->convertTrueToValue->type = ParameterTypeEnum::TYPE_UNSPECIFIED;
    $request->entity->variable->formatValue->convertTrueToValue->value = 'minus';
    $request->entity->variable->formatValue->convertUndefinedToValue = new Parameter();
    $request->entity->variable->formatValue->convertUndefinedToValue->key = 'quaerat';
    $request->entity->variable->formatValue->convertUndefinedToValue->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->variable->formatValue->convertUndefinedToValue->map = [
        new Parameter(),
    ];
    $request->entity->variable->formatValue->convertUndefinedToValue->type = ParameterTypeEnum::BOOLEAN;
    $request->entity->variable->formatValue->convertUndefinedToValue->value = 'blanditiis';
    $request->entity->variable->name = 'Randal Stiedemann';
    $request->entity->variable->notes = 'quasi';
    $request->entity->variable->parameter = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->entity->variable->parentFolderId = 'error';
    $request->entity->variable->path = 'sint';
    $request->entity->variable->scheduleEndMs = 'pariatur';
    $request->entity->variable->scheduleStartMs = 'possimus';
    $request->entity->variable->tagManagerUrl = 'quia';
    $request->entity->variable->type = 'eveniet';
    $request->entity->variable->variableId = 'asperiores';
    $request->entity->variable->workspaceId = 'facere';
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'similique';
    $request->fingerprint = 'culpa';
    $request->key = 'aliquid';
    $request->oauthToken = 'tenetur';
    $request->path = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'earum';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'in';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesResolveConflictSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesResolveConflict($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesSync

Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesSyncSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesSyncRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'accusantium';
    $request->key = 'aliquam';
    $request->oauthToken = 'sapiente';
    $request->path = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesSyncSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesSync($request, $requestSecurity);

    if ($response->syncWorkspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesTagsCreate

Creates a GTM Tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTagsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TagConsentSetting;
use \OpenAPI\OpenAPI\Models\Shared\TagConsentSettingConsentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetupTag;
use \OpenAPI\OpenAPI\Models\Shared\TagTagFiringOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TeardownTag;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTagsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesTagsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->tag = new Tag();
    $request->tag->accountId = 'aut';
    $request->tag->blockingRuleId = [
        'qui',
        'quibusdam',
        'ex',
    ];
    $request->tag->blockingTriggerId = [
        'itaque',
        'dolorum',
        'architecto',
    ];
    $request->tag->consentSettings = new TagConsentSetting();
    $request->tag->consentSettings->consentStatus = TagConsentSettingConsentStatusEnum::NOT_NEEDED;
    $request->tag->consentSettings->consentType = new Parameter();
    $request->tag->consentSettings->consentType->key = 'tenetur';
    $request->tag->consentSettings->consentType->list = [
        new Parameter(),
    ];
    $request->tag->consentSettings->consentType->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->tag->consentSettings->consentType->type = ParameterTypeEnum::TYPE_UNSPECIFIED;
    $request->tag->consentSettings->consentType->value = 'voluptate';
    $request->tag->containerId = 'ipsa';
    $request->tag->fingerprint = 'minima';
    $request->tag->firingRuleId = [
        'consectetur',
    ];
    $request->tag->firingTriggerId = [
        'iste',
    ];
    $request->tag->liveOnly = false;
    $request->tag->monitoringMetadata = new Parameter();
    $request->tag->monitoringMetadata->key = 'temporibus';
    $request->tag->monitoringMetadata->list = [
        new Parameter(),
    ];
    $request->tag->monitoringMetadata->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->tag->monitoringMetadata->type = ParameterTypeEnum::TYPE_UNSPECIFIED;
    $request->tag->monitoringMetadata->value = 'laudantium';
    $request->tag->monitoringMetadataTagNameKey = 'eum';
    $request->tag->name = 'Andrew Little I';
    $request->tag->notes = 'occaecati';
    $request->tag->parameter = [
        new Parameter(),
        new Parameter(),
    ];
    $request->tag->parentFolderId = 'impedit';
    $request->tag->path = 'explicabo';
    $request->tag->paused = false;
    $request->tag->priority = new Parameter();
    $request->tag->priority->key = 'voluptas';
    $request->tag->priority->list = [
        new Parameter(),
    ];
    $request->tag->priority->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->tag->priority->type = ParameterTypeEnum::TYPE_UNSPECIFIED;
    $request->tag->priority->value = 'maiores';
    $request->tag->scheduleEndMs = 'natus';
    $request->tag->scheduleStartMs = 'velit';
    $request->tag->setupTag = [
        new SetupTag(),
        new SetupTag(),
        new SetupTag(),
        new SetupTag(),
    ];
    $request->tag->tagFiringOption = TagTagFiringOptionEnum::UNLIMITED;
    $request->tag->tagId = 'asperiores';
    $request->tag->tagManagerUrl = 'aperiam';
    $request->tag->teardownTag = [
        new TeardownTag(),
        new TeardownTag(),
    ];
    $request->tag->type = 'quaerat';
    $request->tag->workspaceId = 'consequuntur';
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'maxime';
    $request->fields = 'dignissimos';
    $request->key = 'officia';
    $request->oauthToken = 'asperiores';
    $request->parent = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesTagsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesTagsCreate($request, $requestSecurity);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesTagsList

Lists all GTM Tags of a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTagsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTagsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTagsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesTagsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->fields = 'fuga';
    $request->key = 'id';
    $request->oauthToken = 'suscipit';
    $request->pageToken = 'velit';
    $request->parent = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesTagsListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesTagsList($request, $requestSecurity);

    if ($response->listTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesTemplatesCreate

Creates a GTM Custom Template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTemplatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomTemplate;
use \OpenAPI\OpenAPI\Models\Shared\GalleryReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTemplatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesTemplatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->customTemplate = new CustomTemplate();
    $request->customTemplate->accountId = 'vel';
    $request->customTemplate->containerId = 'ducimus';
    $request->customTemplate->fingerprint = 'quos';
    $request->customTemplate->galleryReference = new GalleryReference();
    $request->customTemplate->galleryReference->host = 'vel';
    $request->customTemplate->galleryReference->isModified = false;
    $request->customTemplate->galleryReference->owner = 'labore';
    $request->customTemplate->galleryReference->repository = 'possimus';
    $request->customTemplate->galleryReference->signature = 'facilis';
    $request->customTemplate->galleryReference->version = 'cum';
    $request->customTemplate->name = 'Pearl Hessel';
    $request->customTemplate->path = 'nemo';
    $request->customTemplate->tagManagerUrl = 'recusandae';
    $request->customTemplate->templateData = 'aliquid';
    $request->customTemplate->templateId = 'aperiam';
    $request->customTemplate->workspaceId = 'cum';
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'exercitationem';
    $request->fields = 'earum';
    $request->key = 'facere';
    $request->oauthToken = 'numquam';
    $request->parent = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesTemplatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesTemplatesCreate($request, $requestSecurity);

    if ($response->customTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesTemplatesList

Lists all GTM Templates of a GTM container workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTemplatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTemplatesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTemplatesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTemplatesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesTemplatesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'asperiores';
    $request->key = 'adipisci';
    $request->oauthToken = 'non';
    $request->pageToken = 'amet';
    $request->parent = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesTemplatesListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersWorkspacesTemplatesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesTemplatesList($request, $requestSecurity);

    if ($response->listTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesTriggersCreate

Creates a GTM Trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTriggersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Trigger;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesTriggersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->trigger = new Trigger();
    $request->trigger->accountId = 'corporis';
    $request->trigger->autoEventFilter = [
        new Condition(),
        new Condition(),
        new Condition(),
    ];
    $request->trigger->checkValidation = new Parameter();
    $request->trigger->checkValidation->key = 'laboriosam';
    $request->trigger->checkValidation->list = [
        new Parameter(),
    ];
    $request->trigger->checkValidation->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->checkValidation->type = ParameterTypeEnum::MAP;
    $request->trigger->checkValidation->value = 'vitae';
    $request->trigger->containerId = 'accusamus';
    $request->trigger->continuousTimeMinMilliseconds = new Parameter();
    $request->trigger->continuousTimeMinMilliseconds->key = 'similique';
    $request->trigger->continuousTimeMinMilliseconds->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->continuousTimeMinMilliseconds->map = [
        new Parameter(),
    ];
    $request->trigger->continuousTimeMinMilliseconds->type = ParameterTypeEnum::BOOLEAN;
    $request->trigger->continuousTimeMinMilliseconds->value = 'voluptas';
    $request->trigger->customEventFilter = [
        new Condition(),
        new Condition(),
    ];
    $request->trigger->eventName = new Parameter();
    $request->trigger->eventName->key = 'minima';
    $request->trigger->eventName->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->eventName->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->eventName->type = ParameterTypeEnum::TEMPLATE;
    $request->trigger->eventName->value = 'minus';
    $request->trigger->filter = [
        new Condition(),
    ];
    $request->trigger->fingerprint = 'blanditiis';
    $request->trigger->horizontalScrollPercentageList = new Parameter();
    $request->trigger->horizontalScrollPercentageList->key = 'in';
    $request->trigger->horizontalScrollPercentageList->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->horizontalScrollPercentageList->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->horizontalScrollPercentageList->type = ParameterTypeEnum::TAG_REFERENCE;
    $request->trigger->horizontalScrollPercentageList->value = 'temporibus';
    $request->trigger->interval = new Parameter();
    $request->trigger->interval->key = 'ullam';
    $request->trigger->interval->list = [
        new Parameter(),
    ];
    $request->trigger->interval->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->interval->type = ParameterTypeEnum::LIST;
    $request->trigger->interval->value = 'quas';
    $request->trigger->intervalSeconds = new Parameter();
    $request->trigger->intervalSeconds->key = 'hic';
    $request->trigger->intervalSeconds->list = [
        new Parameter(),
    ];
    $request->trigger->intervalSeconds->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->intervalSeconds->type = ParameterTypeEnum::LIST;
    $request->trigger->intervalSeconds->value = 'pariatur';
    $request->trigger->limit = new Parameter();
    $request->trigger->limit->key = 'totam';
    $request->trigger->limit->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->limit->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->limit->type = ParameterTypeEnum::TRIGGER_REFERENCE;
    $request->trigger->limit->value = 'sit';
    $request->trigger->maxTimerLengthSeconds = new Parameter();
    $request->trigger->maxTimerLengthSeconds->key = 'rerum';
    $request->trigger->maxTimerLengthSeconds->list = [
        new Parameter(),
    ];
    $request->trigger->maxTimerLengthSeconds->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->maxTimerLengthSeconds->type = ParameterTypeEnum::TEMPLATE;
    $request->trigger->maxTimerLengthSeconds->value = 'asperiores';
    $request->trigger->name = 'Miss Jared Quitzon';
    $request->trigger->notes = 'laborum';
    $request->trigger->parameter = [
        new Parameter(),
    ];
    $request->trigger->parentFolderId = 'in';
    $request->trigger->path = 'commodi';
    $request->trigger->selector = new Parameter();
    $request->trigger->selector->key = 'quidem';
    $request->trigger->selector->list = [
        new Parameter(),
    ];
    $request->trigger->selector->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->selector->type = ParameterTypeEnum::LIST;
    $request->trigger->selector->value = 'architecto';
    $request->trigger->tagManagerUrl = 'suscipit';
    $request->trigger->totalTimeMinMilliseconds = new Parameter();
    $request->trigger->totalTimeMinMilliseconds->key = 'sapiente';
    $request->trigger->totalTimeMinMilliseconds->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->totalTimeMinMilliseconds->map = [
        new Parameter(),
    ];
    $request->trigger->totalTimeMinMilliseconds->type = ParameterTypeEnum::TAG_REFERENCE;
    $request->trigger->totalTimeMinMilliseconds->value = 'perferendis';
    $request->trigger->triggerId = 'corrupti';
    $request->trigger->type = TriggerTypeEnum::ELEMENT_VISIBILITY;
    $request->trigger->uniqueTriggerId = new Parameter();
    $request->trigger->uniqueTriggerId->key = 'incidunt';
    $request->trigger->uniqueTriggerId->list = [
        new Parameter(),
    ];
    $request->trigger->uniqueTriggerId->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->uniqueTriggerId->type = ParameterTypeEnum::INTEGER;
    $request->trigger->uniqueTriggerId->value = 'necessitatibus';
    $request->trigger->verticalScrollPercentageList = new Parameter();
    $request->trigger->verticalScrollPercentageList->key = 'ipsum';
    $request->trigger->verticalScrollPercentageList->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->verticalScrollPercentageList->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->verticalScrollPercentageList->type = ParameterTypeEnum::LIST;
    $request->trigger->verticalScrollPercentageList->value = 'voluptatibus';
    $request->trigger->visibilitySelector = new Parameter();
    $request->trigger->visibilitySelector->key = 'tempora';
    $request->trigger->visibilitySelector->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->visibilitySelector->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->visibilitySelector->type = ParameterTypeEnum::TAG_REFERENCE;
    $request->trigger->visibilitySelector->value = 'ex';
    $request->trigger->visiblePercentageMax = new Parameter();
    $request->trigger->visiblePercentageMax->key = 'sit';
    $request->trigger->visiblePercentageMax->list = [
        new Parameter(),
    ];
    $request->trigger->visiblePercentageMax->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->visiblePercentageMax->type = ParameterTypeEnum::LIST;
    $request->trigger->visiblePercentageMax->value = 'facilis';
    $request->trigger->visiblePercentageMin = new Parameter();
    $request->trigger->visiblePercentageMin->key = 'quaerat';
    $request->trigger->visiblePercentageMin->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->visiblePercentageMin->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->visiblePercentageMin->type = ParameterTypeEnum::TAG_REFERENCE;
    $request->trigger->visiblePercentageMin->value = 'rem';
    $request->trigger->waitForTags = new Parameter();
    $request->trigger->waitForTags->key = 'sit';
    $request->trigger->waitForTags->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->waitForTags->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->waitForTags->type = ParameterTypeEnum::INTEGER;
    $request->trigger->waitForTags->value = 'minima';
    $request->trigger->waitForTagsTimeout = new Parameter();
    $request->trigger->waitForTagsTimeout->key = 'recusandae';
    $request->trigger->waitForTagsTimeout->list = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->waitForTagsTimeout->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->trigger->waitForTagsTimeout->type = ParameterTypeEnum::TEMPLATE;
    $request->trigger->waitForTagsTimeout->value = 'aperiam';
    $request->trigger->workspaceId = 'saepe';
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'in';
    $request->fields = 'officiis';
    $request->key = 'beatae';
    $request->oauthToken = 'laudantium';
    $request->parent = 'exercitationem';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'laboriosam';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesTriggersCreate($request, $requestSecurity);

    if ($response->trigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesTriggersList

Lists all GTM Triggers of a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTriggersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTriggersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesTriggersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'expedita';
    $request->key = 'debitis';
    $request->oauthToken = 'neque';
    $request->pageToken = 'dolorum';
    $request->parent = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'corrupti';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesTriggersListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesTriggersList($request, $requestSecurity);

    if ($response->listTriggersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesVariablesCreate

Creates a GTM Variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesVariablesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Variable;
use \OpenAPI\OpenAPI\Models\Shared\VariableFormatValue;
use \OpenAPI\OpenAPI\Models\Shared\VariableFormatValueCaseConversionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesVariablesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->variable = new Variable();
    $request->variable->accountId = 'tempora';
    $request->variable->containerId = 'atque';
    $request->variable->disablingTriggerId = [
        'ut',
    ];
    $request->variable->enablingTriggerId = [
        'voluptatem',
        'culpa',
        'expedita',
        'magnam',
    ];
    $request->variable->fingerprint = 'consequatur';
    $request->variable->formatValue = new VariableFormatValue();
    $request->variable->formatValue->caseConversionType = VariableFormatValueCaseConversionTypeEnum::LOWERCASE;
    $request->variable->formatValue->convertFalseToValue = new Parameter();
    $request->variable->formatValue->convertFalseToValue->key = 'ipsam';
    $request->variable->formatValue->convertFalseToValue->list = [
        new Parameter(),
    ];
    $request->variable->formatValue->convertFalseToValue->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->variable->formatValue->convertFalseToValue->type = ParameterTypeEnum::LIST;
    $request->variable->formatValue->convertFalseToValue->value = 'repudiandae';
    $request->variable->formatValue->convertNullToValue = new Parameter();
    $request->variable->formatValue->convertNullToValue->key = 'corporis';
    $request->variable->formatValue->convertNullToValue->list = [
        new Parameter(),
    ];
    $request->variable->formatValue->convertNullToValue->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->variable->formatValue->convertNullToValue->type = ParameterTypeEnum::BOOLEAN;
    $request->variable->formatValue->convertNullToValue->value = 'sed';
    $request->variable->formatValue->convertTrueToValue = new Parameter();
    $request->variable->formatValue->convertTrueToValue->key = 'sit';
    $request->variable->formatValue->convertTrueToValue->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->variable->formatValue->convertTrueToValue->map = [
        new Parameter(),
        new Parameter(),
    ];
    $request->variable->formatValue->convertTrueToValue->type = ParameterTypeEnum::TAG_REFERENCE;
    $request->variable->formatValue->convertTrueToValue->value = 'error';
    $request->variable->formatValue->convertUndefinedToValue = new Parameter();
    $request->variable->formatValue->convertUndefinedToValue->key = 'consequatur';
    $request->variable->formatValue->convertUndefinedToValue->list = [
        new Parameter(),
        new Parameter(),
    ];
    $request->variable->formatValue->convertUndefinedToValue->map = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->variable->formatValue->convertUndefinedToValue->type = ParameterTypeEnum::TEMPLATE;
    $request->variable->formatValue->convertUndefinedToValue->value = 'harum';
    $request->variable->name = 'Diane Mayer';
    $request->variable->notes = 'atque';
    $request->variable->parameter = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->variable->parentFolderId = 'nam';
    $request->variable->path = 'tenetur';
    $request->variable->scheduleEndMs = 'laboriosam';
    $request->variable->scheduleStartMs = 'alias';
    $request->variable->tagManagerUrl = 'amet';
    $request->variable->type = 'deserunt';
    $request->variable->variableId = 'voluptate';
    $request->variable->workspaceId = 'unde';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->fields = 'delectus';
    $request->key = 'voluptates';
    $request->oauthToken = 'perferendis';
    $request->parent = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'facere';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesVariablesCreate($request, $requestSecurity);

    if ($response->variable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesVariablesList

Lists all GTM Variables of a Container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesVariablesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesVariablesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesVariablesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'voluptatem';
    $request->key = 'quisquam';
    $request->oauthToken = 'repudiandae';
    $request->pageToken = 'quasi';
    $request->parent = 'atque';
    $request->prettyPrint = false;
    $request->quotaUser = 'reprehenderit';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesVariablesListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesVariablesList($request, $requestSecurity);

    if ($response->listVariablesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesZonesCreate

Creates a GTM Zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesZonesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Zone;
use \OpenAPI\OpenAPI\Models\Shared\ZoneBoundary;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ZoneChildContainer;
use \OpenAPI\OpenAPI\Models\Shared\ZoneTypeRestriction;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesZonesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesZonesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->zone = new Zone();
    $request->zone->accountId = 'quidem';
    $request->zone->boundary = new ZoneBoundary();
    $request->zone->boundary->condition = [
        new Condition(),
        new Condition(),
        new Condition(),
        new Condition(),
    ];
    $request->zone->boundary->customEvaluationTriggerId = [
        'esse',
    ];
    $request->zone->childContainer = [
        new ZoneChildContainer(),
    ];
    $request->zone->containerId = 'assumenda';
    $request->zone->fingerprint = 'ea';
    $request->zone->name = 'Evan Torphy';
    $request->zone->notes = 'natus';
    $request->zone->path = 'minima';
    $request->zone->tagManagerUrl = 'aspernatur';
    $request->zone->typeRestriction = new ZoneTypeRestriction();
    $request->zone->typeRestriction->enable = false;
    $request->zone->typeRestriction->whitelistedTypeId = [
        'maiores',
        'corrupti',
    ];
    $request->zone->workspaceId = 'at';
    $request->zone->zoneId = 'error';
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repudiandae';
    $request->fields = 'atque';
    $request->key = 'atque';
    $request->oauthToken = 'sunt';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesZonesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesZonesCreate($request, $requestSecurity);

    if ($response->zone !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesZonesList

Lists all GTM Zones of a GTM container workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesZonesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesZonesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesZonesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesZonesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesZonesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'accusantium';
    $request->key = 'beatae';
    $request->oauthToken = 'dolores';
    $request->pageToken = 'enim';
    $request->parent = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesZonesListSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsContainersWorkspacesZonesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesZonesList($request, $requestSecurity);

    if ($response->listZonesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsContainersWorkspacesZonesRevert

Reverts changes to a GTM Zone in a GTM Workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesZonesRevertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersWorkspacesZonesRevertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersWorkspacesZonesRevertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'officiis';
    $request->fingerprint = 'perspiciatis';
    $request->key = 'in';
    $request->oauthToken = 'adipisci';
    $request->path = 'eveniet';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new TagmanagerAccountsContainersWorkspacesZonesRevertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersWorkspacesZonesRevert($request, $requestSecurity);

    if ($response->revertZoneResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'illo';
    $request->includeGoogleTags = false;
    $request->key = 'corporis';
    $request->oauthToken = 'quidem';
    $request->pageToken = 'eveniet';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'doloremque';

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

## tagmanagerAccountsUserPermissionsCreate

Creates a user's Account & Container access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUserPermissionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserPermission;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccess;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccessPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContainerAccess;
use \OpenAPI\OpenAPI\Models\Shared\ContainerAccessPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUserPermissionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsUserPermissionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->userPermission = new UserPermission();
    $request->userPermission->accountAccess = new AccountAccess();
    $request->userPermission->accountAccess->permission = AccountAccessPermissionEnum::ACCOUNT_PERMISSION_UNSPECIFIED;
    $request->userPermission->accountId = 'totam';
    $request->userPermission->containerAccess = [
        new ContainerAccess(),
    ];
    $request->userPermission->emailAddress = 'molestiae';
    $request->userPermission->path = 'eveniet';
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iure';
    $request->fields = 'necessitatibus';
    $request->key = 'ratione';
    $request->oauthToken = 'laborum';
    $request->parent = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatum';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'aliquam';

    $requestSecurity = new TagmanagerAccountsUserPermissionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsUserPermissionsCreate($request, $requestSecurity);

    if ($response->userPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsUserPermissionsDelete

Removes a user from the account, revoking access to it and all of its containers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUserPermissionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUserPermissionsDeleteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUserPermissionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsUserPermissionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'perspiciatis';
    $request->key = 'nihil';
    $request->oauthToken = 'mollitia';
    $request->path = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->type = [
        TagmanagerAccountsUserPermissionsDeleteTypeEnum::SERVER_PAGE_LOCATION_URL,
        TagmanagerAccountsUserPermissionsDeleteTypeEnum::ERROR_MESSAGE,
        TagmanagerAccountsUserPermissionsDeleteTypeEnum::FIREBASE_EVENT_PARAMETER_CAMPAIGN_SOURCE,
        TagmanagerAccountsUserPermissionsDeleteTypeEnum::LANGUAGE,
    ];
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new TagmanagerAccountsUserPermissionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsUserPermissionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsUserPermissionsGet

Gets a user's Account & Container access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUserPermissionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUserPermissionsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUserPermissionsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUserPermissionsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUserPermissionsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsUserPermissionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->containerVersionId = 'quaerat';
    $request->fields = 'molestiae';
    $request->key = 'ex';
    $request->oauthToken = 'ut';
    $request->path = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'laudantium';

    $requestSecurity = new TagmanagerAccountsUserPermissionsGetSecurity();
    $requestSecurity->option1 = new TagmanagerAccountsUserPermissionsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsUserPermissionsGet($request, $requestSecurity);

    if ($response->userPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsUserPermissionsList

List all users that have access to the account along with Account and Container user access granted to each of them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUserPermissionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUserPermissionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsUserPermissionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'provident';
    $request->key = 'quis';
    $request->oauthToken = 'eum';
    $request->pageToken = 'reiciendis';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new TagmanagerAccountsUserPermissionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsUserPermissionsList($request, $requestSecurity);

    if ($response->listUserPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagmanagerAccountsUserPermissionsUpdate

Updates a user's Account & Container access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUserPermissionsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserPermission;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccess;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccessPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContainerAccess;
use \OpenAPI\OpenAPI\Models\Shared\ContainerAccessPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsUserPermissionsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsUserPermissionsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->userPermission = new UserPermission();
    $request->userPermission->accountAccess = new AccountAccess();
    $request->userPermission->accountAccess->permission = AccountAccessPermissionEnum::NO_ACCESS;
    $request->userPermission->accountId = 'mollitia';
    $request->userPermission->containerAccess = [
        new ContainerAccess(),
        new ContainerAccess(),
        new ContainerAccess(),
    ];
    $request->userPermission->emailAddress = 'possimus';
    $request->userPermission->path = 'animi';
    $request->accessToken = 'ex';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'repellat';
    $request->fingerprint = 'doloribus';
    $request->key = 'ullam';
    $request->oauthToken = 'in';
    $request->path = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'earum';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new TagmanagerAccountsUserPermissionsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsUserPermissionsUpdate($request, $requestSecurity);

    if ($response->userPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
