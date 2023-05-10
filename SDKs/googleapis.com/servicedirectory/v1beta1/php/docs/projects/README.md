# projects

### Available Operations

* [servicedirectoryProjectsLocationsList](#servicedirectoryprojectslocationslist) - Lists information about the supported locations for this service.
* [servicedirectoryProjectsLocationsNamespacesCreate](#servicedirectoryprojectslocationsnamespacescreate) - Creates a namespace, and returns the new namespace.
* [servicedirectoryProjectsLocationsNamespacesList](#servicedirectoryprojectslocationsnamespaceslist) - Lists all namespaces.
* [servicedirectoryProjectsLocationsNamespacesServicesCreate](#servicedirectoryprojectslocationsnamespacesservicescreate) - Creates a service, and returns the new service.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate](#servicedirectoryprojectslocationsnamespacesservicesendpointscreate) - Creates an endpoint, and returns the new endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete](#servicedirectoryprojectslocationsnamespacesservicesendpointsdelete) - Deletes an endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsGet](#servicedirectoryprojectslocationsnamespacesservicesendpointsget) - Gets an endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsList](#servicedirectoryprojectslocationsnamespacesservicesendpointslist) - Lists all endpoints.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch](#servicedirectoryprojectslocationsnamespacesservicesendpointspatch) - Updates an endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesList](#servicedirectoryprojectslocationsnamespacesserviceslist) - Lists all services belonging to a namespace.
* [servicedirectoryProjectsLocationsNamespacesServicesResolve](#servicedirectoryprojectslocationsnamespacesservicesresolve) - Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
* [servicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicy](#servicedirectoryprojectslocationsregistrationpoliciesgetiampolicy) - Gets the IAM Policy for a resource
* [servicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicy](#servicedirectoryprojectslocationsregistrationpoliciessetiampolicy) - Sets the IAM Policy for a resource
* [servicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissions](#servicedirectoryprojectslocationsregistrationpoliciestestiampermissions) - Tests IAM permissions for a resource (namespace, service or service workload only).

## servicedirectoryProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->filter = 'iusto';
    $request->key = 'excepturi';
    $request->name = 'Mrs. Sophie Smith MD';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 368241;
    $request->pageToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new ServicedirectoryProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicedirectoryProjectsLocationsNamespacesCreate

Creates a namespace, and returns the new namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamespaceInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsNamespacesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->namespaceInput = new NamespaceInput();
    $request->namespaceInput->labels = [
        'maiores' => 'molestiae',
        'quod' => 'quod',
        'esse' => 'totam',
        'porro' => 'dolorum',
    ];
    $request->namespaceInput->name = 'Antoinette Nikolaus';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'totam';
    $request->key = 'beatae';
    $request->namespaceId = 'commodi';
    $request->oauthToken = 'molestiae';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new ServicedirectoryProjectsLocationsNamespacesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsNamespacesCreate($request, $requestSecurity);

    if ($response->namespace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicedirectoryProjectsLocationsNamespacesList

Lists all namespaces.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsNamespacesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->filter = 'ad';
    $request->key = 'natus';
    $request->oauthToken = 'sed';
    $request->orderBy = 'iste';
    $request->pageSize = 222321;
    $request->pageToken = 'natus';
    $request->parent = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new ServicedirectoryProjectsLocationsNamespacesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsNamespacesList($request, $requestSecurity);

    if ($response->listNamespacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicedirectoryProjectsLocationsNamespacesServicesCreate

Creates a service, and returns the new service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->serviceInput = new ServiceInput();
    $request->serviceInput->metadata = [
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];
    $request->serviceInput->name = 'Brenda Wisozk';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'corporis';
    $request->key = 'explicabo';
    $request->oauthToken = 'nobis';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->serviceId = 'nemo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new ServicedirectoryProjectsLocationsNamespacesServicesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsNamespacesServicesCreate($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate

Creates an endpoint, and returns the new endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->endpointInput = new EndpointInput();
    $request->endpointInput->address = '6991 Durgan Pike';
    $request->endpointInput->metadata = [
        'repellat' => 'mollitia',
    ];
    $request->endpointInput->name = 'Francis Jerde';
    $request->endpointInput->network = 'velit';
    $request->endpointInput->port = 623510;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->endpointId = 'laborum';
    $request->fields = 'animi';
    $request->key = 'enim';
    $request->oauthToken = 'odit';
    $request->parent = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate($request, $requestSecurity);

    if ($response->endpoint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete

Deletes an endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'error';
    $request->key = 'temporibus';
    $request->name = 'Ryan Witting';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicedirectoryProjectsLocationsNamespacesServicesEndpointsGet

Gets an endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->name = 'Shawna Carter';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsNamespacesServicesEndpointsGet($request, $requestSecurity);

    if ($response->endpoint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicedirectoryProjectsLocationsNamespacesServicesEndpointsList

Lists all endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'ipsum';
    $request->filter = 'quidem';
    $request->key = 'molestias';
    $request->oauthToken = 'excepturi';
    $request->orderBy = 'pariatur';
    $request->pageSize = 265389;
    $request->pageToken = 'praesentium';
    $request->parent = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsNamespacesServicesEndpointsList($request, $requestSecurity);

    if ($response->listEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch

Updates an endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->endpointInput = new EndpointInput();
    $request->endpointInput->address = '92306 Cole Place';
    $request->endpointInput->metadata = [
        'quibusdam' => 'labore',
        'modi' => 'qui',
        'aliquid' => 'cupiditate',
    ];
    $request->endpointInput->name = 'Christopher Cummerata';
    $request->endpointInput->network = 'alias';
    $request->endpointInput->port = 146441;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempora';
    $request->fields = 'facilis';
    $request->key = 'tempore';
    $request->name = 'Lucia Kemmer';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->updateMask = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch($request, $requestSecurity);

    if ($response->endpoint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicedirectoryProjectsLocationsNamespacesServicesList

Lists all services belonging to a namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsNamespacesServicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'dolorum';
    $request->filter = 'in';
    $request->key = 'in';
    $request->oauthToken = 'illum';
    $request->orderBy = 'maiores';
    $request->pageSize = 699479;
    $request->pageToken = 'dicta';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new ServicedirectoryProjectsLocationsNamespacesServicesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsNamespacesServicesList($request, $requestSecurity);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicedirectoryProjectsLocationsNamespacesServicesResolve

Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResolveServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->resolveServiceRequest = new ResolveServiceRequest();
    $request->resolveServiceRequest->endpointFilter = 'laborum';
    $request->resolveServiceRequest->maxEndpoints = 881104;
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'delectus';
    $request->name = 'Rene Reinger';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsNamespacesServicesResolve($request, $requestSecurity);

    if ($response->resolveServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicy

Gets the IAM Policy for a resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 423855;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'perferendis';
    $request->key = 'nihil';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->resource = 'id';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicy

Sets the IAM Policy for a resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'nobis';
    $request->setIamPolicyRequest->policy->version = 428769;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'magnam';
    $request->key = 'et';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->resource = 'provident';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissions

Tests IAM permissions for a resource (namespace, service or service workload only).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'reiciendis',
        'mollitia',
        'ad',
    ];
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'necessitatibus';
    $request->fields = 'odit';
    $request->key = 'nemo';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->resource = 'doloribus';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'eius';

    $requestSecurity = new ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
