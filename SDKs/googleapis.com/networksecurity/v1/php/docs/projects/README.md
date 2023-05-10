# projects

### Available Operations

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
    $request->authorizationPolicyInput->description = 'perferendis';
    $request->authorizationPolicyInput->labels = [
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->authorizationPolicyInput->name = 'Wilfred Wolff';
    $request->authorizationPolicyInput->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->authorizationPolicyId = 'porro';
    $request->callback = 'dolorum';
    $request->fields = 'dicta';
    $request->key = 'nam';
    $request->oauthToken = 'officia';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'hic';

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
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->pageSize = 774234;
    $request->pageToken = 'cum';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'aspernatur';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudNetworksecurityV1CertificateProvider;
use \OpenAPI\OpenAPI\Models\Shared\CertificateProviderInstance;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudNetworksecurityV1GrpcEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCA;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->clientTlsPolicyInput = new ClientTlsPolicyInput();
    $request->clientTlsPolicyInput->clientCertificate = new GoogleCloudNetworksecurityV1CertificateProvider();
    $request->clientTlsPolicyInput->clientCertificate->certificateProviderInstance = new CertificateProviderInstance();
    $request->clientTlsPolicyInput->clientCertificate->certificateProviderInstance->pluginInstance = 'ad';
    $request->clientTlsPolicyInput->clientCertificate->grpcEndpoint = new GoogleCloudNetworksecurityV1GrpcEndpoint();
    $request->clientTlsPolicyInput->clientCertificate->grpcEndpoint->targetUri = 'natus';
    $request->clientTlsPolicyInput->description = 'sed';
    $request->clientTlsPolicyInput->labels = [
        'dolor' => 'natus',
        'laboriosam' => 'hic',
        'saepe' => 'fuga',
    ];
    $request->clientTlsPolicyInput->name = 'Stacy Moore';
    $request->clientTlsPolicyInput->serverValidationCa = [
        new ValidationCA(),
        new ValidationCA(),
        new ValidationCA(),
    ];
    $request->clientTlsPolicyInput->sni = 'architecto';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->clientTlsPolicyId = 'mollitia';
    $request->fields = 'laborum';
    $request->key = 'dolores';
    $request->oauthToken = 'dolorem';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'enim';

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
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'accusantium';
    $request->key = 'iure';
    $request->oauthToken = 'culpa';
    $request->pageSize = 988374;
    $request->pageToken = 'sapiente';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'culpa';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->gatewaySecurityPolicyInput = new GatewaySecurityPolicyInput();
    $request->gatewaySecurityPolicyInput->description = 'repellat';
    $request->gatewaySecurityPolicyInput->name = 'Tracy Fritsch';
    $request->gatewaySecurityPolicyInput->tlsInspectionPolicy = 'molestiae';
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quia';
    $request->fields = 'quis';
    $request->gatewaySecurityPolicyId = 'vitae';
    $request->key = 'laborum';
    $request->oauthToken = 'animi';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'sequi';

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
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'aut';
    $request->key = 'quasi';
    $request->oauthToken = 'error';
    $request->pageSize = 837945;
    $request->pageToken = 'laborum';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'vero';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->gatewaySecurityPolicyRuleInput = new GatewaySecurityPolicyRuleInput();
    $request->gatewaySecurityPolicyRuleInput->applicationMatcher = 'praesentium';
    $request->gatewaySecurityPolicyRuleInput->basicProfile = GatewaySecurityPolicyRuleBasicProfileEnum::DENY;
    $request->gatewaySecurityPolicyRuleInput->description = 'ipsa';
    $request->gatewaySecurityPolicyRuleInput->enabled = false;
    $request->gatewaySecurityPolicyRuleInput->name = 'Mr. Jared Ritchie';
    $request->gatewaySecurityPolicyRuleInput->priority = 282807;
    $request->gatewaySecurityPolicyRuleInput->sessionMatcher = 'maiores';
    $request->gatewaySecurityPolicyRuleInput->tlsInspectionEnabled = false;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'iusto';
    $request->gatewaySecurityPolicyRuleId = 'dicta';
    $request->key = 'harum';
    $request->oauthToken = 'enim';
    $request->parent = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'quae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'pariatur';
    $request->key = 'modi';
    $request->oauthToken = 'praesentium';
    $request->pageSize = 523248;
    $request->pageToken = 'voluptates';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'veritatis';

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
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'est';
    $request->filter = 'quibusdam';
    $request->key = 'explicabo';
    $request->name = 'Rudy Spencer';
    $request->oauthToken = 'qui';
    $request->pageSize = 397821;
    $request->pageToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'magni';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'alias' => 'fugit',
        'dolorum' => 'excepturi',
    ];
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'labore';
    $request->key = 'delectus';
    $request->name = 'Ethel Roob';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'officia';

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
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'in';
    $request->filter = 'in';
    $request->key = 'illum';
    $request->name = 'Jean Buckridge';
    $request->oauthToken = 'facere';
    $request->pageSize = 411820;
    $request->pageToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'non';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudNetworksecurityV1GrpcEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\MTLSPolicyClientValidationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudNetworksecurityV1CertificateProvider;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsServerTlsPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->serverTlsPolicyInput = new ServerTlsPolicyInput();
    $request->serverTlsPolicyInput->allowOpen = false;
    $request->serverTlsPolicyInput->description = 'enim';
    $request->serverTlsPolicyInput->labels = [
        'delectus' => 'quidem',
        'provident' => 'nam',
        'id' => 'blanditiis',
        'deleniti' => 'sapiente',
    ];
    $request->serverTlsPolicyInput->mtlsPolicy = new MTLSPolicy();
    $request->serverTlsPolicyInput->mtlsPolicy->clientValidationCa = [
        new ValidationCA(),
    ];
    $request->serverTlsPolicyInput->mtlsPolicy->clientValidationMode = MTLSPolicyClientValidationModeEnum::ALLOW_INVALID_OR_MISSING_CLIENT_CERT;
    $request->serverTlsPolicyInput->mtlsPolicy->clientValidationTrustConfig = 'nisi';
    $request->serverTlsPolicyInput->name = 'Ada Moen IV';
    $request->serverTlsPolicyInput->serverCertificate = new GoogleCloudNetworksecurityV1CertificateProvider();
    $request->serverTlsPolicyInput->serverCertificate->certificateProviderInstance = new CertificateProviderInstance();
    $request->serverTlsPolicyInput->serverCertificate->certificateProviderInstance->pluginInstance = 'magnam';
    $request->serverTlsPolicyInput->serverCertificate->grpcEndpoint = new GoogleCloudNetworksecurityV1GrpcEndpoint();
    $request->serverTlsPolicyInput->serverCertificate->grpcEndpoint->targetUri = 'distinctio';
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'suscipit';
    $request->key = 'natus';
    $request->oauthToken = 'nobis';
    $request->parent = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->serverTlsPolicyId = 'aspernatur';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'magnam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'quos';
    $request->key = 'sint';
    $request->oauthToken = 'accusantium';
    $request->optionsRequestedPolicyVersion = 653201;
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->resource = 'mollitia';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'eum';

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
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nemo';
    $request->fields = 'quasi';
    $request->key = 'iure';
    $request->oauthToken = 'doloribus';
    $request->pageSize = 891924;
    $request->pageToken = 'eius';
    $request->parent = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'in';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest();
    $request->googleIamV1SetIamPolicyRequest->policy = new GoogleIamV1Policy();
    $request->googleIamV1SetIamPolicyRequest->policy->auditConfigs = [
        new GoogleIamV1AuditConfig(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->bindings = [
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->etag = 'ullam';
    $request->googleIamV1SetIamPolicyRequest->policy->version = 714242;
    $request->googleIamV1SetIamPolicyRequest->updateMask = 'nihil';
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'saepe';
    $request->key = 'pariatur';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->resource = 'praesentium';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'magni';

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
        'illum',
        'pariatur',
        'maxime',
        'ea',
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ea';
    $request->fields = 'accusantium';
    $request->key = 'ab';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->resource = 'ipsam';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'autem';

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
    $request->tlsInspectionPolicyInput->caPool = 'eaque';
    $request->tlsInspectionPolicyInput->description = 'pariatur';
    $request->tlsInspectionPolicyInput->name = 'Camille Armstrong';
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corporis';
    $request->fields = 'hic';
    $request->key = 'libero';
    $request->oauthToken = 'nobis';
    $request->parent = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->tlsInspectionPolicyId = 'totam';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'eaque';

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
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'dolores';
    $request->key = 'minus';
    $request->oauthToken = 'quam';
    $request->pageSize = 223924;
    $request->pageToken = 'vero';
    $request->parent = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'omnis';

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
    $request->urlListInput->description = 'perspiciatis';
    $request->urlListInput->name = 'Robyn Cruickshank';
    $request->urlListInput->values = [
        'occaecati',
    ];
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'asperiores';
    $request->fields = 'earum';
    $request->key = 'modi';
    $request->oauthToken = 'iste';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'provident';
    $request->urlListId = 'nobis';

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
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'aliquid';
    $request->force = false;
    $request->key = 'dolorem';
    $request->name = 'Rosa Dibbert';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'dignissimos';

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
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'veritatis';
    $request->key = 'ipsa';
    $request->name = 'Vera Kuhlman';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'natus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'ab';
    $request->key = 'soluta';
    $request->oauthToken = 'dolorum';
    $request->pageSize = 478596;
    $request->pageToken = 'voluptate';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'necessitatibus';

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
    $request->urlListInput->description = 'asperiores';
    $request->urlListInput->name = 'Edna Klocko';
    $request->urlListInput->values = [
        'aspernatur',
        'perferendis',
    ];
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'ad';
    $request->key = 'saepe';
    $request->name = 'Rosie McKenzie';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->updateMask = 'alias';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'quaerat';

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
