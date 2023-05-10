# projects

### Available Operations

* [servicebrokerProjectsBrokersCreate](#servicebrokerprojectsbrokerscreate) - CreateBroker creates a Broker.
* [servicebrokerProjectsBrokersInstancesBindingsList](#servicebrokerprojectsbrokersinstancesbindingslist) - Lists all the bindings in the instance.
* [servicebrokerProjectsBrokersInstancesList](#servicebrokerprojectsbrokersinstanceslist) - Lists all the instances in the brokers
This API is an extension and not part of the OSB spec.
Hence the path is a standard Google API URL.
* [servicebrokerProjectsBrokersList](#servicebrokerprojectsbrokerslist) - ListBrokers lists brokers.
* [servicebrokerProjectsBrokersV2CatalogList](#servicebrokerprojectsbrokersv2cataloglist) - Lists all the Services registered with this broker for consumption for
given service registry broker, which contains an set of services.
Note, that Service producer API is separate from Broker API.
* [servicebrokerProjectsBrokersV2ServiceInstancesCreate](#servicebrokerprojectsbrokersv2serviceinstancescreate) - Provisions a service instance.
If `request.accepts_incomplete` is false and Broker cannot execute request
synchronously HTTP 422 error will be returned along with
FAILED_PRECONDITION status.
If `request.accepts_incomplete` is true and the Broker decides to execute
resource asynchronously then HTTP 202 response code will be returned and a
valid polling operation in the response will be included.
If Broker executes the request synchronously and it succeeds HTTP 201
response will be furnished.
If identical instance exists, then HTTP 200 response will be returned.
If an instance with identical ID but mismatching parameters exists, then
HTTP 409 status code will be returned.
* [servicebrokerProjectsBrokersV2ServiceInstancesPatch](#servicebrokerprojectsbrokersv2serviceinstancespatch) - Updates an existing service instance.
See CreateServiceInstance for possible response codes.
* [servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate](#servicebrokerprojectsbrokersv2serviceinstancesservicebindingscreate) - CreateBinding generates a service binding to an existing service instance.
See ProviServiceInstance for async operation details.
* [servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete](#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsdelete) - Unbinds from a service instance.
For synchronous/asynchronous request details see CreateServiceInstance
method.
If binding does not exist HTTP 410 status will be returned.
* [servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet](#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsget) - GetBinding returns the binding information.
* [servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation](#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsgetlastoperation) - Returns the state of the last operation for the binding.
Only last (or current) operation can be polled.

## servicebrokerProjectsBrokersCreate

CreateBroker creates a Broker.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudServicebrokerV1beta1Broker;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicebrokerProjectsBrokersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudServicebrokerV1beta1Broker = new GoogleCloudServicebrokerV1beta1Broker();
    $request->googleCloudServicebrokerV1beta1Broker->createTime = 'minus';
    $request->googleCloudServicebrokerV1beta1Broker->name = 'Ken Kshlerin';
    $request->googleCloudServicebrokerV1beta1Broker->title = 'Dr.';
    $request->googleCloudServicebrokerV1beta1Broker->url = 'temporibus';
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

    $requestSecurity = new ServicebrokerProjectsBrokersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicebrokerProjectsBrokersCreate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicebrokerProjectsBrokersInstancesBindingsList

Lists all the bindings in the instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersInstancesBindingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersInstancesBindingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicebrokerProjectsBrokersInstancesBindingsListRequest();
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

    $requestSecurity = new ServicebrokerProjectsBrokersInstancesBindingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicebrokerProjectsBrokersInstancesBindingsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicebrokerProjectsBrokersInstancesList

Lists all the instances in the brokers
This API is an extension and not part of the OSB spec.
Hence the path is a standard Google API URL.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersInstancesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicebrokerProjectsBrokersInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'optio';
    $request->key = 'totam';
    $request->oauthToken = 'beatae';
    $request->pageSize = 414662;
    $request->pageToken = 'molestiae';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new ServicebrokerProjectsBrokersInstancesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicebrokerProjectsBrokersInstancesList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicebrokerProjectsBrokersList

ListBrokers lists brokers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicebrokerProjectsBrokersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->key = 'ad';
    $request->oauthToken = 'natus';
    $request->pageSize = 149675;
    $request->pageToken = 'iste';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new ServicebrokerProjectsBrokersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicebrokerProjectsBrokersList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicebrokerProjectsBrokersV2CatalogList

Lists all the Services registered with this broker for consumption for
given service registry broker, which contains an set of services.
Note, that Service producer API is separate from Broker API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersV2CatalogListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersV2CatalogListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicebrokerProjectsBrokersV2CatalogListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corporis';
    $request->fields = 'iste';
    $request->key = 'iure';
    $request->oauthToken = 'saepe';
    $request->pageSize = 697631;
    $request->pageToken = 'architecto';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new ServicebrokerProjectsBrokersV2CatalogListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicebrokerProjectsBrokersV2CatalogList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicebrokerProjectsBrokersV2ServiceInstancesCreate

Provisions a service instance.
If `request.accepts_incomplete` is false and Broker cannot execute request
synchronously HTTP 422 error will be returned along with
FAILED_PRECONDITION status.
If `request.accepts_incomplete` is true and the Broker decides to execute
resource asynchronously then HTTP 202 response code will be returned and a
valid polling operation in the response will be included.
If Broker executes the request synchronously and it succeeds HTTP 201
response will be furnished.
If identical instance exists, then HTTP 200 response will be returned.
If an instance with identical ID but mismatching parameters exists, then
HTTP 409 status code will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudServicebrokerV1beta1ServiceInstance;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudServicebrokerV1beta1ServiceInstance = new GoogleCloudServicebrokerV1beta1ServiceInstance();
    $request->googleCloudServicebrokerV1beta1ServiceInstance->context = [
        'dolorem' => 'corporis',
    ];
    $request->googleCloudServicebrokerV1beta1ServiceInstance->createTime = 'explicabo';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->deploymentName = 'nobis';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->description = 'enim';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->instanceId = 'omnis';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->organizationGuid = 'nemo';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->parameters = [
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->googleCloudServicebrokerV1beta1ServiceInstance->planId = 'doloribus';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->previousValues = [
        'architecto' => 'mollitia',
        'dolorem' => 'culpa',
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
    ];
    $request->googleCloudServicebrokerV1beta1ServiceInstance->resourceName = 'numquam';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->serviceId = 'commodi';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->spaceGuid = 'quam';
    $request->acceptsIncomplete = false;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'quia';
    $request->instanceId = 'quis';
    $request->key = 'vitae';
    $request->oauthToken = 'laborum';
    $request->parent = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicebrokerProjectsBrokersV2ServiceInstancesCreate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicebrokerProjectsBrokersV2ServiceInstancesPatch

Updates an existing service instance.
See CreateServiceInstance for possible response codes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudServicebrokerV1beta1ServiceInstance;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudServicebrokerV1beta1ServiceInstance = new GoogleCloudServicebrokerV1beta1ServiceInstance();
    $request->googleCloudServicebrokerV1beta1ServiceInstance->context = [
        'ipsam' => 'id',
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
    $request->googleCloudServicebrokerV1beta1ServiceInstance->createTime = 'quasi';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->deploymentName = 'reiciendis';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->description = 'voluptatibus';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->instanceId = 'vero';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->organizationGuid = 'nihil';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->parameters = [
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
        'cum' => 'perferendis',
    ];
    $request->googleCloudServicebrokerV1beta1ServiceInstance->planId = 'doloremque';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->previousValues = [
        'ut' => 'maiores',
        'dicta' => 'corporis',
    ];
    $request->googleCloudServicebrokerV1beta1ServiceInstance->resourceName = 'dolore';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->serviceId = 'iusto';
    $request->googleCloudServicebrokerV1beta1ServiceInstance->spaceGuid = 'dicta';
    $request->acceptsIncomplete = false;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'commodi';
    $request->key = 'repudiandae';
    $request->name = 'Edna Pouros';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicebrokerProjectsBrokersV2ServiceInstancesPatch($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate

CreateBinding generates a service binding to an existing service instance.
See ProviServiceInstance for async operation details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudServicebrokerV1beta1Binding;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudServicebrokerV1beta1Binding = new GoogleCloudServicebrokerV1beta1Binding();
    $request->googleCloudServicebrokerV1beta1Binding->bindResource = [
        'repudiandae' => 'sint',
    ];
    $request->googleCloudServicebrokerV1beta1Binding->bindingId = 'veritatis';
    $request->googleCloudServicebrokerV1beta1Binding->createTime = 'itaque';
    $request->googleCloudServicebrokerV1beta1Binding->deploymentName = 'incidunt';
    $request->googleCloudServicebrokerV1beta1Binding->parameters = [
        'consequatur' => 'est',
        'quibusdam' => 'explicabo',
    ];
    $request->googleCloudServicebrokerV1beta1Binding->planId = 'deserunt';
    $request->googleCloudServicebrokerV1beta1Binding->resourceName = 'distinctio';
    $request->googleCloudServicebrokerV1beta1Binding->serviceId = 'quibusdam';
    $request->acceptsIncomplete = false;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->bindingId = 'qui';
    $request->callback = 'aliquid';
    $request->fields = 'cupiditate';
    $request->key = 'quos';
    $request->oauthToken = 'perferendis';
    $request->parent = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete

Unbinds from a service instance.
For synchronous/asynchronous request details see CreateServiceInstance
method.
If binding does not exist HTTP 410 status will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->acceptsIncomplete = false;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempora';
    $request->fields = 'facilis';
    $request->key = 'tempore';
    $request->name = 'Lucia Kemmer';
    $request->oauthToken = 'sint';
    $request->planId = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->serviceId = 'necessitatibus';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet

GetBinding returns the binding information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'in';
    $request->key = 'in';
    $request->name = 'Mrs. Emilio Price';
    $request->oauthToken = 'facere';
    $request->planId = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->serviceId = 'laborum';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'non';

    $requestSecurity = new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation

Returns the state of the last operation for the binding.
Only last (or current) operation can be polled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->fields = 'quidem';
    $request->key = 'provident';
    $request->name = 'Lynn Kuvalis';
    $request->oauthToken = 'amet';
    $request->operation = 'deserunt';
    $request->planId = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->serviceId = 'natus';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
