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