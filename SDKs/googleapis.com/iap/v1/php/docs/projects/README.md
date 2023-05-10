# projects

### Available Operations

* [iapProjectsBrandsCreate](#iapprojectsbrandscreate) - Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.
* [iapProjectsBrandsIdentityAwareProxyClientsCreate](#iapprojectsbrandsidentityawareproxyclientscreate) - Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.
* [iapProjectsBrandsIdentityAwareProxyClientsList](#iapprojectsbrandsidentityawareproxyclientslist) - Lists the existing clients for the brand.
* [iapProjectsBrandsIdentityAwareProxyClientsResetSecret](#iapprojectsbrandsidentityawareproxyclientsresetsecret) - Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.
* [iapProjectsBrandsList](#iapprojectsbrandslist) - Lists the existing brands for the project.
* [iapProjectsIapTunnelLocationsDestGroupsCreate](#iapprojectsiaptunnellocationsdestgroupscreate) - Creates a new TunnelDestGroup.
* [iapProjectsIapTunnelLocationsDestGroupsDelete](#iapprojectsiaptunnellocationsdestgroupsdelete) - Deletes a TunnelDestGroup.
* [iapProjectsIapTunnelLocationsDestGroupsGet](#iapprojectsiaptunnellocationsdestgroupsget) - Retrieves an existing TunnelDestGroup.
* [iapProjectsIapTunnelLocationsDestGroupsList](#iapprojectsiaptunnellocationsdestgroupslist) - Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`
* [iapProjectsIapTunnelLocationsDestGroupsPatch](#iapprojectsiaptunnellocationsdestgroupspatch) - Updates a TunnelDestGroup.

## iapProjectsBrandsCreate

Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsBrandsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BrandInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsBrandsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapProjectsBrandsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->brandInput = new BrandInput();
    $request->brandInput->applicationTitle = 'debitis';
    $request->brandInput->supportEmail = 'ipsa';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->parent = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new IapProjectsBrandsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iapProjectsBrandsCreate($request, $requestSecurity);

    if ($response->brand !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iapProjectsBrandsIdentityAwareProxyClientsCreate

Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsBrandsIdentityAwareProxyClientsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\IdentityAwareProxyClientInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsBrandsIdentityAwareProxyClientsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapProjectsBrandsIdentityAwareProxyClientsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->identityAwareProxyClientInput = new IdentityAwareProxyClientInput();
    $request->identityAwareProxyClientInput->displayName = 'temporibus';
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new IapProjectsBrandsIdentityAwareProxyClientsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iapProjectsBrandsIdentityAwareProxyClientsCreate($request, $requestSecurity);

    if ($response->identityAwareProxyClient !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iapProjectsBrandsIdentityAwareProxyClientsList

Lists the existing clients for the brand.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsBrandsIdentityAwareProxyClientsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsBrandsIdentityAwareProxyClientsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapProjectsBrandsIdentityAwareProxyClientsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'quod';
    $request->key = 'quod';
    $request->oauthToken = 'esse';
    $request->pageSize = 520478;
    $request->pageToken = 'porro';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new IapProjectsBrandsIdentityAwareProxyClientsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iapProjectsBrandsIdentityAwareProxyClientsList($request, $requestSecurity);

    if ($response->listIdentityAwareProxyClientsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iapProjectsBrandsIdentityAwareProxyClientsResetSecret

Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'deleniti' => 'hic',
    ];
    $request->accessToken = 'optio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->name = 'Norma Ryan';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iapProjectsBrandsIdentityAwareProxyClientsResetSecret($request, $requestSecurity);

    if ($response->identityAwareProxyClient !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iapProjectsBrandsList

Lists the existing brands for the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsBrandsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsBrandsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapProjectsBrandsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolor';
    $request->key = 'natus';
    $request->oauthToken = 'laboriosam';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'in';

    $requestSecurity = new IapProjectsBrandsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iapProjectsBrandsList($request, $requestSecurity);

    if ($response->listBrandsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iapProjectsIapTunnelLocationsDestGroupsCreate

Creates a new TunnelDestGroup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsIapTunnelLocationsDestGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TunnelDestGroup;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsIapTunnelLocationsDestGroupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapProjectsIapTunnelLocationsDestGroupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->tunnelDestGroup = new TunnelDestGroup();
    $request->tunnelDestGroup->cidrs = [
        'iure',
        'saepe',
        'quidem',
    ];
    $request->tunnelDestGroup->fqdns = [
        'ipsa',
    ];
    $request->tunnelDestGroup->name = 'Carlton O'Hara';
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'nobis';
    $request->key = 'enim';
    $request->oauthToken = 'omnis';
    $request->parent = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->tunnelDestGroupId = 'excepturi';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new IapProjectsIapTunnelLocationsDestGroupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iapProjectsIapTunnelLocationsDestGroupsCreate($request, $requestSecurity);

    if ($response->tunnelDestGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iapProjectsIapTunnelLocationsDestGroupsDelete

Deletes a TunnelDestGroup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsIapTunnelLocationsDestGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapProjectsIapTunnelLocationsDestGroupsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'mollitia';
    $request->key = 'dolorem';
    $request->name = 'Carlos Ziemann';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iapProjectsIapTunnelLocationsDestGroupsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iapProjectsIapTunnelLocationsDestGroupsGet

Retrieves an existing TunnelDestGroup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsIapTunnelLocationsDestGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsIapTunnelLocationsDestGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapProjectsIapTunnelLocationsDestGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'vitae';
    $request->key = 'laborum';
    $request->name = 'Bill Conn';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new IapProjectsIapTunnelLocationsDestGroupsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iapProjectsIapTunnelLocationsDestGroupsGet($request, $requestSecurity);

    if ($response->tunnelDestGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iapProjectsIapTunnelLocationsDestGroupsList

Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsIapTunnelLocationsDestGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsIapTunnelLocationsDestGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapProjectsIapTunnelLocationsDestGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'laborum';
    $request->key = 'quasi';
    $request->oauthToken = 'reiciendis';
    $request->pageSize = 976460;
    $request->pageToken = 'vero';
    $request->parent = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new IapProjectsIapTunnelLocationsDestGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iapProjectsIapTunnelLocationsDestGroupsList($request, $requestSecurity);

    if ($response->listTunnelDestGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iapProjectsIapTunnelLocationsDestGroupsPatch

Updates a TunnelDestGroup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsIapTunnelLocationsDestGroupsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TunnelDestGroup;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsIapTunnelLocationsDestGroupsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapProjectsIapTunnelLocationsDestGroupsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->tunnelDestGroup = new TunnelDestGroup();
    $request->tunnelDestGroup->cidrs = [
        'cum',
        'perferendis',
    ];
    $request->tunnelDestGroup->fqdns = [
        'reprehenderit',
    ];
    $request->tunnelDestGroup->name = 'Shawna Carter';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->name = 'Elvira Bergnaum';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->updateMask = 'pariatur';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new IapProjectsIapTunnelLocationsDestGroupsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iapProjectsIapTunnelLocationsDestGroupsPatch($request, $requestSecurity);

    if ($response->tunnelDestGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
