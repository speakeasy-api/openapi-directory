# companySpecificSchema

### Available Operations

* [getCompanySpecificOpenAPIDocumentation](#getcompanyspecificopenapidocumentation) - Get Company-Specific Open API Documentation

## getCompanySpecificOpenAPIDocumentation

The company-specific Open API endpoint allows the client to GET an Open API document for the Paylocity API that is customized with company-specific resource schemas. These customized resource schemas define certain properties as enumerations of pre-defined values that correspond to the company's setup with Web Pay. The customized schemas also indicate which properties are required by the company within Web Pay.<br  />To learn more about Open API, click [here](https://www.openapis.org/)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompanySpecificOpenAPIDocumentationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompanySpecificOpenAPIDocumentationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompanySpecificOpenAPIDocumentationRequest();
    $request->authorization = 'deserunt';
    $request->companyId = 'perferendis';

    $requestSecurity = new GetCompanySpecificOpenAPIDocumentationSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->companySpecificSchema->getCompanySpecificOpenAPIDocumentation($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
