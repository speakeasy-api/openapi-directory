# services

### Available Operations

* [servicecontrolServicesCheck](#servicecontrolservicescheck) - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* [servicecontrolServicesReport](#servicecontrolservicesreport) - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

## servicecontrolServicesCheck

Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttributeContext;
use \OpenAPI\OpenAPI\Models\Shared\Api;
use \OpenAPI\OpenAPI\Models\Shared\Peer;
use \OpenAPI\OpenAPI\Models\Shared\Request;
use \OpenAPI\OpenAPI\Models\Shared\Auth;
use \OpenAPI\OpenAPI\Models\Shared\Resource;
use \OpenAPI\OpenAPI\Models\Shared\Response;
use \OpenAPI\OpenAPI\Models\Shared\ResourceInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesCheckSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesCheckSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesCheckSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicecontrolServicesCheckRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->checkRequest = new CheckRequest();
    $request->checkRequest->attributes = new AttributeContext();
    $request->checkRequest->attributes->api = new Api();
    $request->checkRequest->attributes->api->operation = 'incidunt';
    $request->checkRequest->attributes->api->protocol = 'enim';
    $request->checkRequest->attributes->api->service = 'consequatur';
    $request->checkRequest->attributes->api->version = 'est';
    $request->checkRequest->attributes->destination = new Peer();
    $request->checkRequest->attributes->destination->ip = 'quibusdam';
    $request->checkRequest->attributes->destination->labels = [
        'deserunt' => 'distinctio',
    ];
    $request->checkRequest->attributes->destination->port = 'quibusdam';
    $request->checkRequest->attributes->destination->principal = 'labore';
    $request->checkRequest->attributes->destination->regionCode = 'modi';
    $request->checkRequest->attributes->extensions = [
        [
            'cupiditate' => 'quos',
            'perferendis' => 'magni',
        ],
    ];
    $request->checkRequest->attributes->origin = new Peer();
    $request->checkRequest->attributes->origin->ip = 'assumenda';
    $request->checkRequest->attributes->origin->labels = [
        'alias' => 'fugit',
        'dolorum' => 'excepturi',
    ];
    $request->checkRequest->attributes->origin->port = 'tempora';
    $request->checkRequest->attributes->origin->principal = 'facilis';
    $request->checkRequest->attributes->origin->regionCode = 'tempore';
    $request->checkRequest->attributes->request = new Request();
    $request->checkRequest->attributes->request->auth = new Auth();
    $request->checkRequest->attributes->request->auth->accessLevels = [
        'delectus',
        'eum',
    ];
    $request->checkRequest->attributes->request->auth->audiences = [
        'eligendi',
    ];
    $request->checkRequest->attributes->request->auth->claims = [
        'aliquid' => 'provident',
        'necessitatibus' => 'sint',
        'officia' => 'dolor',
    ];
    $request->checkRequest->attributes->request->auth->presenter = 'debitis';
    $request->checkRequest->attributes->request->auth->principal = 'a';
    $request->checkRequest->attributes->request->headers = [
        'in' => 'in',
        'illum' => 'maiores',
        'rerum' => 'dicta',
    ];
    $request->checkRequest->attributes->request->host = 'magnam';
    $request->checkRequest->attributes->request->id = 'cd66ae39-5efb-49ba-88f3-a66997074ba4';
    $request->checkRequest->attributes->request->method = 'labore';
    $request->checkRequest->attributes->request->path = 'suscipit';
    $request->checkRequest->attributes->request->protocol = 'natus';
    $request->checkRequest->attributes->request->query = 'nobis';
    $request->checkRequest->attributes->request->reason = 'eum';
    $request->checkRequest->attributes->request->scheme = 'vero';
    $request->checkRequest->attributes->request->size = 'aspernatur';
    $request->checkRequest->attributes->request->time = 'architecto';
    $request->checkRequest->attributes->resource = new Resource();
    $request->checkRequest->attributes->resource->annotations = [
        'et' => 'excepturi',
        'ullam' => 'provident',
    ];
    $request->checkRequest->attributes->resource->createTime = 'quos';
    $request->checkRequest->attributes->resource->deleteTime = 'sint';
    $request->checkRequest->attributes->resource->displayName = 'accusantium';
    $request->checkRequest->attributes->resource->etag = 'mollitia';
    $request->checkRequest->attributes->resource->labels = [
        'mollitia' => 'ad',
        'eum' => 'dolor',
        'necessitatibus' => 'odit',
        'nemo' => 'quasi',
    ];
    $request->checkRequest->attributes->resource->location = 'iure';
    $request->checkRequest->attributes->resource->name = 'Doyle Gibson';
    $request->checkRequest->attributes->resource->service = 'facilis';
    $request->checkRequest->attributes->resource->type = 'in';
    $request->checkRequest->attributes->resource->uid = 'architecto';
    $request->checkRequest->attributes->resource->updateTime = 'architecto';
    $request->checkRequest->attributes->response = new Response();
    $request->checkRequest->attributes->response->backendLatency = 'repudiandae';
    $request->checkRequest->attributes->response->code = 'ullam';
    $request->checkRequest->attributes->response->headers = [
        'nihil' => 'repellat',
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
    ];
    $request->checkRequest->attributes->response->size = 'accusantium';
    $request->checkRequest->attributes->response->time = 'consequuntur';
    $request->checkRequest->attributes->source = new Peer();
    $request->checkRequest->attributes->source->ip = 'praesentium';
    $request->checkRequest->attributes->source->labels = [
        'magni' => 'sunt',
        'quo' => 'illum',
        'pariatur' => 'maxime',
    ];
    $request->checkRequest->attributes->source->port = 'ea';
    $request->checkRequest->attributes->source->principal = 'excepturi';
    $request->checkRequest->attributes->source->regionCode = 'odit';
    $request->checkRequest->flags = 'ea';
    $request->checkRequest->resources = [
        new ResourceInfo(),
    ];
    $request->checkRequest->serviceConfigId = 'ab';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'voluptate';
    $request->key = 'autem';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->serviceName = 'pariatur';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new ServicecontrolServicesCheckSecurity();
    $requestSecurity->option1 = new ServicecontrolServicesCheckSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicecontrolServicesCheck($request, $requestSecurity);

    if ($response->checkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicecontrolServicesReport

Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttributeContext;
use \OpenAPI\OpenAPI\Models\Shared\Api;
use \OpenAPI\OpenAPI\Models\Shared\Peer;
use \OpenAPI\OpenAPI\Models\Shared\Request;
use \OpenAPI\OpenAPI\Models\Shared\Auth;
use \OpenAPI\OpenAPI\Models\Shared\Resource;
use \OpenAPI\OpenAPI\Models\Shared\Response;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesReportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesReportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesReportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicecontrolServicesReportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reportRequest = new ReportRequest();
    $request->reportRequest->operations = [
        new AttributeContext(),
        new AttributeContext(),
        new AttributeContext(),
        new AttributeContext(),
    ];
    $request->reportRequest->serviceConfigId = 'amet';
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corporis';
    $request->fields = 'hic';
    $request->key = 'libero';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->serviceName = 'quis';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new ServicecontrolServicesReportSecurity();
    $requestSecurity->option1 = new ServicecontrolServicesReportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicecontrolServicesReport($request, $requestSecurity);

    if ($response->reportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
