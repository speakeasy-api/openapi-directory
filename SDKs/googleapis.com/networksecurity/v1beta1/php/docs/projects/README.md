# projects

### Available Operations

* [networksecurityProjectsLocationsAddressGroupsAddItems](#networksecurityprojectslocationsaddressgroupsadditems) - Adds items to an address group.
* [networksecurityProjectsLocationsAddressGroupsCloneItems](#networksecurityprojectslocationsaddressgroupscloneitems) - Clones items from one address group to another.
* [networksecurityProjectsLocationsAddressGroupsCreate](#networksecurityprojectslocationsaddressgroupscreate) - Creates a new address group in a given project and location.
* [networksecurityProjectsLocationsAddressGroupsList](#networksecurityprojectslocationsaddressgroupslist) - Lists address groups in a given project and location.
* [networksecurityProjectsLocationsAddressGroupsListReferences](#networksecurityprojectslocationsaddressgroupslistreferences) - Lists references of an address group.
* [networksecurityProjectsLocationsAddressGroupsRemoveItems](#networksecurityprojectslocationsaddressgroupsremoveitems) - Removes items from an address group.
* [networksecurityProjectsLocationsAuthorizationPoliciesCreate](#networksecurityprojectslocationsauthorizationpoliciescreate) - Creates a new AuthorizationPolicy in a given project and location.
* [networksecurityProjectsLocationsAuthorizationPoliciesList](#networksecurityprojectslocationsauthorizationpolicieslist) - Lists AuthorizationPolicies in a given project and location.
* [networksecurityProjectsLocationsClientTlsPoliciesCreate](#networksecurityprojectslocationsclienttlspoliciescreate) - Creates a new ClientTlsPolicy in a given project and location.
* [networksecurityProjectsLocationsClientTlsPoliciesList](#networksecurityprojectslocationsclienttlspolicieslist) - Lists ClientTlsPolicies in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesCreate](#networksecurityprojectslocationsgatewaysecuritypoliciescreate) - Creates a new GatewaySecurityPolicy in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesList](#networksecurityprojectslocationsgatewaysecuritypolicieslist) - Lists GatewaySecurityPolicies in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate](#networksecurityprojectslocationsgatewaysecuritypoliciesrulescreate) - Creates a new GatewaySecurityPolicy in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesRulesList](#networksecurityprojectslocationsgatewaysecuritypoliciesruleslist) - Lists GatewaySecurityPolicyRules in a given project and location.
* [networksecurityProjectsLocationsList](#networksecurityprojectslocationslist) - Lists information about the supported locations for this service.
* [networksecurityProjectsLocationsOperationsCancel](#networksecurityprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [networksecurityProjectsLocationsOperationsList](#networksecurityprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [networksecurityProjectsLocationsServerTlsPoliciesCreate](#networksecurityprojectslocationsservertlspoliciescreate) - Creates a new ServerTlsPolicy in a given project and location.
* [networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy](#networksecurityprojectslocationsservertlspoliciesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [networksecurityProjectsLocationsServerTlsPoliciesList](#networksecurityprojectslocationsservertlspolicieslist) - Lists ServerTlsPolicies in a given project and location.
* [networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy](#networksecurityprojectslocationsservertlspoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions](#networksecurityprojectslocationsservertlspoliciestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [networksecurityProjectsLocationsTlsInspectionPoliciesCreate](#networksecurityprojectslocationstlsinspectionpoliciescreate) - Creates a new TlsInspectionPolicy in a given project and location.
* [networksecurityProjectsLocationsTlsInspectionPoliciesList](#networksecurityprojectslocationstlsinspectionpolicieslist) - Lists TlsInspectionPolicies in a given project and location.
* [networksecurityProjectsLocationsUrlListsCreate](#networksecurityprojectslocationsurllistscreate) - Creates a new UrlList in a given project and location.
* [networksecurityProjectsLocationsUrlListsDelete](#networksecurityprojectslocationsurllistsdelete) - Deletes a single UrlList.
* [networksecurityProjectsLocationsUrlListsGet](#networksecurityprojectslocationsurllistsget) - Gets details of a single UrlList.
* [networksecurityProjectsLocationsUrlListsList](#networksecurityprojectslocationsurllistslist) - Lists UrlLists in a given project and location.
* [networksecurityProjectsLocationsUrlListsPatch](#networksecurityprojectslocationsurllistspatch) - Updates the parameters of a single UrlList.

## networksecurityProjectsLocationsAddressGroupsAddItems

Adds items to an address group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddAddressGroupItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addAddressGroupItemsRequest = new AddAddressGroupItemsRequest();
    $request->addAddressGroupItemsRequest->items = [
        'suscipit',
        'molestiae',
    ];
    $request->addAddressGroupItemsRequest->requestId = 'minus';
    $request->accessToken = 'placeat';
    $request->addressGroup = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'nisi';
    $request->key = 'recusandae';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsAddressGroupsAddItems($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsAddressGroupsCloneItems

Clones items from one address group to another.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsCloneItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloneAddressGroupItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsCloneItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsAddressGroupsCloneItemsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->cloneAddressGroupItemsRequest = new CloneAddressGroupItemsRequest();
    $request->cloneAddressGroupItemsRequest->requestId = 'perferendis';
    $request->cloneAddressGroupItemsRequest->sourceAddressGroup = 'ipsam';
    $request->accessToken = 'repellendus';
    $request->addressGroup = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new NetworksecurityProjectsLocationsAddressGroupsCloneItemsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsAddressGroupsCloneItems($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsAddressGroupsCreate

Creates a new address group in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\AddressGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsAddressGroupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->addressGroupInput = new AddressGroupInput();
    $request->addressGroupInput->capacity = 520478;
    $request->addressGroupInput->description = 'porro';
    $request->addressGroupInput->items = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->addressGroupInput->labels = [
        'fugit' => 'deleniti',
        'hic' => 'optio',
        'totam' => 'beatae',
    ];
    $request->addressGroupInput->name = 'Tanya Gleason';
    $request->addressGroupInput->type = AddressGroupTypeEnum::IPV6;
    $request->accessToken = 'esse';
    $request->addressGroupId = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->key = 'ad';
    $request->oauthToken = 'natus';
    $request->parent = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->requestId = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';

    $requestSecurity = new NetworksecurityProjectsLocationsAddressGroupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsAddressGroupsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsAddressGroupsList

Lists address groups in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsAddressGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'corporis';
    $request->key = 'iste';
    $request->oauthToken = 'iure';
    $request->pageSize = 902349;
    $request->pageToken = 'quidem';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'est';

    $requestSecurity = new NetworksecurityProjectsLocationsAddressGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsAddressGroupsList($request, $requestSecurity);

    if ($response->listAddressGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsAddressGroupsListReferences

Lists references of an address group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsListReferencesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsListReferencesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsAddressGroupsListReferencesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laborum';
    $request->addressGroup = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'explicabo';
    $request->key = 'nobis';
    $request->oauthToken = 'enim';
    $request->pageSize = 607831;
    $request->pageToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new NetworksecurityProjectsLocationsAddressGroupsListReferencesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsAddressGroupsListReferences($request, $requestSecurity);

    if ($response->listAddressGroupReferencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsAddressGroupsRemoveItems

Removes items from an address group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsRemoveItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveAddressGroupItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsRemoveItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsAddressGroupsRemoveItemsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->removeAddressGroupItemsRequest = new RemoveAddressGroupItemsRequest();
    $request->removeAddressGroupItemsRequest->items = [
        'doloribus',
        'sapiente',
        'architecto',
    ];
    $request->removeAddressGroupItemsRequest->requestId = 'mollitia';
    $request->accessToken = 'dolorem';
    $request->addressGroup = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellat';
    $request->fields = 'mollitia';
    $request->key = 'occaecati';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new NetworksecurityProjectsLocationsAddressGroupsRemoveItemsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsAddressGroupsRemoveItems($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsAuthorizationPoliciesCreate

Creates a new AuthorizationPolicy in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\Destination;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeaderMatch;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->authorizationPolicyInput = new AuthorizationPolicyInput();
    $request->authorizationPolicyInput->action = AuthorizationPolicyActionEnum::ALLOW;
    $request->authorizationPolicyInput->description = 'quia';
    $request->authorizationPolicyInput->labels = [
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->authorizationPolicyInput->name = 'Angelica Dietrich';
    $request->authorizationPolicyInput->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->authorizationPolicyId = 'quasi';
    $request->callback = 'error';
    $request->fields = 'temporibus';
    $request->key = 'laborum';
    $request->oauthToken = 'quasi';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsAuthorizationPoliciesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsAuthorizationPoliciesList

Lists AuthorizationPolicies in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'voluptate';
    $request->key = 'cum';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 39187;
    $request->pageToken = 'reprehenderit';
    $request->parent = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsAuthorizationPoliciesList($request, $requestSecurity);

    if ($response->listAuthorizationPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsClientTlsPoliciesCreate

Creates a new ClientTlsPolicy in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientTlsPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudNetworksecurityV1beta1CertificateProvider;
use \OpenAPI\OpenAPI\Models\Shared\CertificateProviderInstance;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudNetworksecurityV1beta1GrpcEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCA;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->clientTlsPolicyInput = new ClientTlsPolicyInput();
    $request->clientTlsPolicyInput->clientCertificate = new GoogleCloudNetworksecurityV1beta1CertificateProvider();
    $request->clientTlsPolicyInput->clientCertificate->certificateProviderInstance = new CertificateProviderInstance();
    $request->clientTlsPolicyInput->clientCertificate->certificateProviderInstance->pluginInstance = 'iusto';
    $request->clientTlsPolicyInput->clientCertificate->grpcEndpoint = new GoogleCloudNetworksecurityV1beta1GrpcEndpoint();
    $request->clientTlsPolicyInput->clientCertificate->grpcEndpoint->targetUri = 'dicta';
    $request->clientTlsPolicyInput->description = 'harum';
    $request->clientTlsPolicyInput->labels = [
        'accusamus' => 'commodi',
        'repudiandae' => 'quae',
    ];
    $request->clientTlsPolicyInput->name = 'Alison Mann';
    $request->clientTlsPolicyInput->serverValidationCa = [
        new ValidationCA(),
        new ValidationCA(),
    ];
    $request->clientTlsPolicyInput->sni = 'praesentium';
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->clientTlsPolicyId = 'repudiandae';
    $request->fields = 'sint';
    $request->key = 'veritatis';
    $request->oauthToken = 'itaque';
    $request->parent = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';

    $requestSecurity = new NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsClientTlsPoliciesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsClientTlsPoliciesList

Lists ClientTlsPolicies in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsClientTlsPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsClientTlsPoliciesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsClientTlsPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->fields = 'quibusdam';
    $request->key = 'labore';
    $request->oauthToken = 'modi';
    $request->pageSize = 183191;
    $request->pageToken = 'aliquid';
    $request->parent = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new NetworksecurityProjectsLocationsClientTlsPoliciesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsClientTlsPoliciesList($request, $requestSecurity);

    if ($response->listClientTlsPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsGatewaySecurityPoliciesCreate

Creates a new GatewaySecurityPolicy in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GatewaySecurityPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->gatewaySecurityPolicyInput = new GatewaySecurityPolicyInput();
    $request->gatewaySecurityPolicyInput->description = 'ipsam';
    $request->gatewaySecurityPolicyInput->name = 'Denise Pagac';
    $request->gatewaySecurityPolicyInput->tlsInspectionPolicy = 'facilis';
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'eum';
    $request->gatewaySecurityPolicyId = 'non';
    $request->key = 'eligendi';
    $request->oauthToken = 'sint';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsGatewaySecurityPoliciesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsGatewaySecurityPoliciesList

Lists GatewaySecurityPolicies in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsGatewaySecurityPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsGatewaySecurityPoliciesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'dolorum';
    $request->key = 'in';
    $request->oauthToken = 'in';
    $request->pageSize = 846409;
    $request->pageToken = 'maiores';
    $request->parent = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsGatewaySecurityPoliciesList($request, $requestSecurity);

    if ($response->listGatewaySecurityPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate

Creates a new GatewaySecurityPolicy in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GatewaySecurityPolicyRuleInput;
use \OpenAPI\OpenAPI\Models\Shared\GatewaySecurityPolicyRuleBasicProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->gatewaySecurityPolicyRuleInput = new GatewaySecurityPolicyRuleInput();
    $request->gatewaySecurityPolicyRuleInput->applicationMatcher = 'ea';
    $request->gatewaySecurityPolicyRuleInput->basicProfile = GatewaySecurityPolicyRuleBasicProfileEnum::ALLOW;
    $request->gatewaySecurityPolicyRuleInput->description = 'laborum';
    $request->gatewaySecurityPolicyRuleInput->enabled = false;
    $request->gatewaySecurityPolicyRuleInput->name = 'Alfred McClure';
    $request->gatewaySecurityPolicyRuleInput->priority = 965417;
    $request->gatewaySecurityPolicyRuleInput->sessionMatcher = 'quidem';
    $request->gatewaySecurityPolicyRuleInput->tlsInspectionEnabled = false;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'blanditiis';
    $request->gatewaySecurityPolicyRuleId = 'deleniti';
    $request->key = 'sapiente';
    $request->oauthToken = 'amet';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsGatewaySecurityPoliciesRulesList

Lists GatewaySecurityPolicyRules in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'magnam';
    $request->key = 'distinctio';
    $request->oauthToken = 'id';
    $request->pageSize = 287991;
    $request->pageToken = 'labore';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsGatewaySecurityPoliciesRulesList($request, $requestSecurity);

    if ($response->listGatewaySecurityPolicyRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->fields = 'et';
    $request->filter = 'excepturi';
    $request->key = 'ullam';
    $request->name = 'Miss Julian Marvin';
    $request->oauthToken = 'mollitia';
    $request->pageSize = 320997;
    $request->pageToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new NetworksecurityProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'iure' => 'doloribus',
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'deleniti';
    $request->key = 'facilis';
    $request->name = 'Alice Bradtke';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new NetworksecurityProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->fields = 'consequuntur';
    $request->filter = 'praesentium';
    $request->key = 'natus';
    $request->name = 'Joan Satterfield';
    $request->oauthToken = 'maxime';
    $request->pageSize = 411397;
    $request->pageToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new NetworksecurityProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsServerTlsPoliciesCreate

Creates a new ServerTlsPolicy in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServerTlsPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\MTLSPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCA;
use \OpenAPI\OpenAPI\Models\Shared\CertificateProviderInstance;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudNetworksecurityV1beta1GrpcEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\MTLSPolicyClientValidationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudNetworksecurityV1beta1CertificateProvider;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsServerTlsPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->serverTlsPolicyInput = new ServerTlsPolicyInput();
    $request->serverTlsPolicyInput->allowOpen = false;
    $request->serverTlsPolicyInput->description = 'maiores';
    $request->serverTlsPolicyInput->labels = [
        'ipsam' => 'voluptate',
        'autem' => 'nam',
        'eaque' => 'pariatur',
    ];
    $request->serverTlsPolicyInput->mtlsPolicy = new MTLSPolicy();
    $request->serverTlsPolicyInput->mtlsPolicy->clientValidationCa = [
        new ValidationCA(),
        new ValidationCA(),
    ];
    $request->serverTlsPolicyInput->mtlsPolicy->clientValidationMode = MTLSPolicyClientValidationModeEnum::REJECT_INVALID;
    $request->serverTlsPolicyInput->mtlsPolicy->clientValidationTrustConfig = 'perferendis';
    $request->serverTlsPolicyInput->name = 'Vincent Anderson';
    $request->serverTlsPolicyInput->serverCertificate = new GoogleCloudNetworksecurityV1beta1CertificateProvider();
    $request->serverTlsPolicyInput->serverCertificate->certificateProviderInstance = new CertificateProviderInstance();
    $request->serverTlsPolicyInput->serverCertificate->certificateProviderInstance->pluginInstance = 'hic';
    $request->serverTlsPolicyInput->serverCertificate->grpcEndpoint = new GoogleCloudNetworksecurityV1beta1GrpcEndpoint();
    $request->serverTlsPolicyInput->serverCertificate->grpcEndpoint->targetUri = 'libero';
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'totam';
    $request->key = 'dignissimos';
    $request->oauthToken = 'eaque';
    $request->parent = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nesciunt';
    $request->serverTlsPolicyId = 'eos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new NetworksecurityProjectsLocationsServerTlsPoliciesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsServerTlsPoliciesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->fields = 'nostrum';
    $request->key = 'hic';
    $request->oauthToken = 'recusandae';
    $request->optionsRequestedPolicyVersion = 608253;
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->resource = 'perspiciatis';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy($request, $requestSecurity);

    if ($response->googleIamV1Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsServerTlsPoliciesList

Lists ServerTlsPolicies in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsServerTlsPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsServerTlsPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->fields = 'occaecati';
    $request->key = 'rerum';
    $request->oauthToken = 'adipisci';
    $request->pageSize = 992397;
    $request->pageToken = 'earum';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsServerTlsPoliciesList($request, $requestSecurity);

    if ($response->listServerTlsPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Policy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest();
    $request->googleIamV1SetIamPolicyRequest->policy = new GoogleIamV1Policy();
    $request->googleIamV1SetIamPolicyRequest->policy->auditConfigs = [
        new GoogleIamV1AuditConfig(),
        new GoogleIamV1AuditConfig(),
        new GoogleIamV1AuditConfig(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->bindings = [
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->etag = 'libero';
    $request->googleIamV1SetIamPolicyRequest->policy->version = 964490;
    $request->googleIamV1SetIamPolicyRequest->updateMask = 'quaerat';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'dolorem';
    $request->key = 'dolor';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->resource = 'hic';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy($request, $requestSecurity);

    if ($response->googleIamV1Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest();
    $request->googleIamV1TestIamPermissionsRequest->permissions = [
        'reiciendis',
        'amet',
    ];
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veritatis';
    $request->fields = 'ipsa';
    $request->key = 'ipsa';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->resource = 'quaerat';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions($request, $requestSecurity);

    if ($response->googleIamV1TestIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsTlsInspectionPoliciesCreate

Creates a new TlsInspectionPolicy in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlsInspectionPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->tlsInspectionPolicyInput = new TlsInspectionPolicyInput();
    $request->tlsInspectionPolicyInput->caPool = 'voluptas';
    $request->tlsInspectionPolicyInput->description = 'natus';
    $request->tlsInspectionPolicyInput->name = 'Kay Bailey DDS';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'dolorum';
    $request->key = 'deleniti';
    $request->oauthToken = 'omnis';
    $request->parent = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->tlsInspectionPolicyId = 'asperiores';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsTlsInspectionPoliciesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsTlsInspectionPoliciesList

Lists TlsInspectionPolicies in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsTlsInspectionPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsTlsInspectionPoliciesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsTlsInspectionPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'aspernatur';
    $request->key = 'perferendis';
    $request->oauthToken = 'amet';
    $request->pageSize = 758379;
    $request->pageToken = 'accusamus';
    $request->parent = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new NetworksecurityProjectsLocationsTlsInspectionPoliciesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsTlsInspectionPoliciesList($request, $requestSecurity);

    if ($response->listTlsInspectionPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsUrlListsCreate

Creates a new UrlList in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsUrlListsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlListInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsUrlListsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsUrlListsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->urlListInput = new UrlListInput();
    $request->urlListInput->description = 'minima';
    $request->urlListInput->name = 'Dr. Jimmie Murphy';
    $request->urlListInput->values = [
        'vel',
        'quod',
    ];
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'a';
    $request->key = 'esse';
    $request->oauthToken = 'harum';
    $request->parent = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'tenetur';
    $request->urlListId = 'amet';

    $requestSecurity = new NetworksecurityProjectsLocationsUrlListsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsUrlListsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsUrlListsDelete

Deletes a single UrlList.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsUrlListsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsUrlListsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsUrlListsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'dolorem';
    $request->force = false;
    $request->key = 'sapiente';
    $request->name = 'Christian Balistreri';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new NetworksecurityProjectsLocationsUrlListsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsUrlListsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsUrlListsGet

Gets details of a single UrlList.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsUrlListsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsUrlListsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsUrlListsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'qui';
    $request->key = 'cupiditate';
    $request->name = 'Miss Jody Rogahn';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new NetworksecurityProjectsLocationsUrlListsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsUrlListsGet($request, $requestSecurity);

    if ($response->urlList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsUrlListsList

Lists UrlLists in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsUrlListsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsUrlListsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsUrlListsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestias';
    $request->fields = 'temporibus';
    $request->key = 'qui';
    $request->oauthToken = 'neque';
    $request->pageSize = 144847;
    $request->pageToken = 'magni';
    $request->parent = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'sunt';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new NetworksecurityProjectsLocationsUrlListsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsUrlListsList($request, $requestSecurity);

    if ($response->listUrlListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networksecurityProjectsLocationsUrlListsPatch

Updates the parameters of a single UrlList.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsUrlListsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlListInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsUrlListsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsUrlListsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->urlListInput = new UrlListInput();
    $request->urlListInput->description = 'voluptatem';
    $request->urlListInput->name = 'Dr. Dominic Rohan';
    $request->urlListInput->values = [
        'nobis',
    ];
    $request->accessToken = 'quos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cupiditate';
    $request->fields = 'aperiam';
    $request->key = 'delectus';
    $request->name = 'Joanne Grant';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->updateMask = 'aut';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'itaque';

    $requestSecurity = new NetworksecurityProjectsLocationsUrlListsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsUrlListsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
