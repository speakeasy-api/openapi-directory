<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsApisConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayApiConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayGatewayConfig;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayBackendConfig;
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
    $request->apigatewayApiConfigInput->gatewayConfig = new ApigatewayGatewayConfig();
    $request->apigatewayApiConfigInput->gatewayConfig->backendConfig = new ApigatewayBackendConfig();
    $request->apigatewayApiConfigInput->gatewayConfig->backendConfig->googleServiceAccount = 'distinctio';
    $request->apigatewayApiConfigInput->gatewayServiceAccount = 'quibusdam';
    $request->apigatewayApiConfigInput->grpcServices = [
        new ApigatewayApiConfigGrpcServiceDefinition(),
        new ApigatewayApiConfigGrpcServiceDefinition(),
        new ApigatewayApiConfigGrpcServiceDefinition(),
    ];
    $request->apigatewayApiConfigInput->labels = [
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
    ];
    $request->apigatewayApiConfigInput->managedServiceConfigs = [
        new ApigatewayApiConfigFile(),
        new ApigatewayApiConfigFile(),
        new ApigatewayApiConfigFile(),
        new ApigatewayApiConfigFile(),
    ];
    $request->apigatewayApiConfigInput->openapiDocuments = [
        new ApigatewayApiConfigOpenApiDocument(),
    ];
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->apiConfigId = 'suscipit';
    $request->callback = 'molestiae';
    $request->fields = 'minus';
    $request->key = 'placeat';
    $request->oauthToken = 'voluptatum';
    $request->parent = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'recusandae';

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