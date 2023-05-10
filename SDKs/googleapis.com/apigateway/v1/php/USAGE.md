<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsApisConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayApiConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayApiConfigGrpcServiceDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayApiConfigFile;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayApiConfigOpenApiDocument;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsApisConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsApisConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->apigatewayApiConfigInput = new ApigatewayApiConfigInput();
    $request->apigatewayApiConfigInput->displayName = 'provident';
    $request->apigatewayApiConfigInput->gatewayServiceAccount = 'distinctio';
    $request->apigatewayApiConfigInput->grpcServices = [
        new ApigatewayApiConfigGrpcServiceDefinition(),
        new ApigatewayApiConfigGrpcServiceDefinition(),
        new ApigatewayApiConfigGrpcServiceDefinition(),
        new ApigatewayApiConfigGrpcServiceDefinition(),
    ];
    $request->apigatewayApiConfigInput->labels = [
        'nulla' => 'corrupti',
        'illum' => 'vel',
        'error' => 'deserunt',
    ];
    $request->apigatewayApiConfigInput->managedServiceConfigs = [
        new ApigatewayApiConfigFile(),
        new ApigatewayApiConfigFile(),
    ];
    $request->apigatewayApiConfigInput->openapiDocuments = [
        new ApigatewayApiConfigOpenApiDocument(),
        new ApigatewayApiConfigOpenApiDocument(),
    ];
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->apiConfigId = 'ipsa';
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->parent = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new ApigatewayProjectsLocationsApisConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsApisConfigsCreate($request, $requestSecurity);

    if ($response->apigatewayOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->