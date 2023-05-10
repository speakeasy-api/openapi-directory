<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAliasModel;
use \OpenAPI\OpenAPI\Models\Shared\DestinationModel;
use \OpenAPI\OpenAPI\Models\Shared\MetaTagModel;
use \OpenAPI\OpenAPI\Models\Shared\SnippetModel;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAliasRequest();
    $request->createAliasModel = new CreateAliasModel();
    $request->createAliasModel->destinations = [
        new DestinationModel(),
        new DestinationModel(),
        new DestinationModel(),
    ];
    $request->createAliasModel->metatags = [
        new MetaTagModel(),
        new MetaTagModel(),
        new MetaTagModel(),
    ];
    $request->createAliasModel->snippets = [
        new SnippetModel(),
        new SnippetModel(),
        new SnippetModel(),
    ];
    $request->aliasName = 'quibusdam';
    $request->domainName = 'unde';

    $requestSecurity = new CreateAliasSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->alias->createAlias($request, $requestSecurity);

    if ($response->createAliasResponseModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->