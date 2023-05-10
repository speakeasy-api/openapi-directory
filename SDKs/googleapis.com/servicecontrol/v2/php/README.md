# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->checkRequest->attributes->api->operation = 'provident';
    $request->checkRequest->attributes->api->protocol = 'distinctio';
    $request->checkRequest->attributes->api->service = 'quibusdam';
    $request->checkRequest->attributes->api->version = 'unde';
    $request->checkRequest->attributes->destination = new Peer();
    $request->checkRequest->attributes->destination->ip = 'nulla';
    $request->checkRequest->attributes->destination->labels = [
        'illum' => 'vel',
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->checkRequest->attributes->destination->port = 'magnam';
    $request->checkRequest->attributes->destination->principal = 'debitis';
    $request->checkRequest->attributes->destination->regionCode = 'ipsa';
    $request->checkRequest->attributes->extensions = [
        [
            'suscipit' => 'molestiae',
            'minus' => 'placeat',
        ],
        [
            'iusto' => 'excepturi',
            'nisi' => 'recusandae',
            'temporibus' => 'ab',
        ],
        [
            'veritatis' => 'deserunt',
            'perferendis' => 'ipsam',
        ],
        [
            'sapiente' => 'quo',
            'odit' => 'at',
            'at' => 'maiores',
            'molestiae' => 'quod',
        ],
    ];
    $request->checkRequest->attributes->origin = new Peer();
    $request->checkRequest->attributes->origin->ip = 'quod';
    $request->checkRequest->attributes->origin->labels = [
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->checkRequest->attributes->origin->port = 'nam';
    $request->checkRequest->attributes->origin->principal = 'officia';
    $request->checkRequest->attributes->origin->regionCode = 'occaecati';
    $request->checkRequest->attributes->request = new Request();
    $request->checkRequest->attributes->request->auth = new Auth();
    $request->checkRequest->attributes->request->auth->accessLevels = [
        'deleniti',
    ];
    $request->checkRequest->attributes->request->auth->audiences = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->checkRequest->attributes->request->auth->claims = [
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->checkRequest->attributes->request->auth->presenter = 'esse';
    $request->checkRequest->attributes->request->auth->principal = 'ipsum';
    $request->checkRequest->attributes->request->headers = [
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
        'sed' => 'iste',
    ];
    $request->checkRequest->attributes->request->host = 'dolor';
    $request->checkRequest->attributes->request->id = '96fea759-6eb1-40fa-aa23-52c5955907af';
    $request->checkRequest->attributes->request->method = 'sapiente';
    $request->checkRequest->attributes->request->path = 'architecto';
    $request->checkRequest->attributes->request->protocol = 'mollitia';
    $request->checkRequest->attributes->request->query = 'dolorem';
    $request->checkRequest->attributes->request->reason = 'culpa';
    $request->checkRequest->attributes->request->scheme = 'consequuntur';
    $request->checkRequest->attributes->request->size = 'repellat';
    $request->checkRequest->attributes->request->time = 'mollitia';
    $request->checkRequest->attributes->resource = new Resource();
    $request->checkRequest->attributes->resource->annotations = [
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->checkRequest->attributes->resource->createTime = 'quia';
    $request->checkRequest->attributes->resource->deleteTime = 'quis';
    $request->checkRequest->attributes->resource->displayName = 'vitae';
    $request->checkRequest->attributes->resource->etag = 'laborum';
    $request->checkRequest->attributes->resource->labels = [
        'enim' => 'odit',
        'quo' => 'sequi',
        'tenetur' => 'ipsam',
    ];
    $request->checkRequest->attributes->resource->location = 'id';
    $request->checkRequest->attributes->resource->name = 'Richard Boyer';
    $request->checkRequest->attributes->resource->service = 'laborum';
    $request->checkRequest->attributes->resource->type = 'quasi';
    $request->checkRequest->attributes->resource->uid = 'reiciendis';
    $request->checkRequest->attributes->resource->updateTime = 'voluptatibus';
    $request->checkRequest->attributes->response = new Response();
    $request->checkRequest->attributes->response->backendLatency = 'vero';
    $request->checkRequest->attributes->response->code = 'nihil';
    $request->checkRequest->attributes->response->headers = [
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
        'cum' => 'perferendis',
    ];
    $request->checkRequest->attributes->response->size = 'doloremque';
    $request->checkRequest->attributes->response->time = 'reprehenderit';
    $request->checkRequest->attributes->source = new Peer();
    $request->checkRequest->attributes->source->ip = 'ut';
    $request->checkRequest->attributes->source->labels = [
        'dicta' => 'corporis',
        'dolore' => 'iusto',
        'dicta' => 'harum',
        'enim' => 'accusamus',
    ];
    $request->checkRequest->attributes->source->port = 'commodi';
    $request->checkRequest->attributes->source->principal = 'repudiandae';
    $request->checkRequest->attributes->source->regionCode = 'quae';
    $request->checkRequest->flags = 'ipsum';
    $request->checkRequest->resources = [
        new ResourceInfo(),
        new ResourceInfo(),
        new ResourceInfo(),
    ];
    $request->checkRequest->serviceConfigId = 'molestias';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'praesentium';
    $request->key = 'rem';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->serviceName = 'repudiandae';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'veritatis';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [services](docs/services/README.md)

* [servicecontrolServicesCheck](docs/services/README.md#servicecontrolservicescheck) - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* [servicecontrolServicesReport](docs/services/README.md#servicecontrolservicesreport) - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
