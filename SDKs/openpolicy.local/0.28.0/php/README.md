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
use \OpenAPI\OpenAPI\Models\Operations\PostCompileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCompileRequest();
    $request->requestBody = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->explain = 'illum';
    $request->instrument = false;
    $request->metrics = false;
    $request->pretty = false;

    $response = $sdk->compileAPI->postCompile($request);

    if ($response->postCompile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [compileAPI](docs/compileapi/README.md)

* [postCompile](docs/compileapi/README.md#postcompile) - Compile

### [configAPI](docs/configapi/README.md)

* [getConfig](docs/configapi/README.md#getconfig) - Get configurations

### [dataAPI](docs/dataapi/README.md)

* [deleteDocument](docs/dataapi/README.md#deletedocument) - Delete a document
* [getDocument](docs/dataapi/README.md#getdocument) - Get a document
* [getDocumentWithPath](docs/dataapi/README.md#getdocumentwithpath) - Get a document (with input)
* [getDocumentWithWebHook](docs/dataapi/README.md#getdocumentwithwebhook) - Get a document (with webhook)
* [patchDocument](docs/dataapi/README.md#patchdocument) - Update a document
* [putDocument](docs/dataapi/README.md#putdocument) - Create or overwrite a document

### [healthAPI](docs/healthapi/README.md)

* [getHealth](docs/healthapi/README.md#gethealth) - Health

### [policyAPI](docs/policyapi/README.md)

* [deletePolicyModule](docs/policyapi/README.md#deletepolicymodule) - Delete a policy module
* [getPolicies](docs/policyapi/README.md#getpolicies) - List policies
* [getPolicyModule](docs/policyapi/README.md#getpolicymodule) - Get a policy module
* [putPolicyModule](docs/policyapi/README.md#putpolicymodule) - Create or update a policy module

### [queryAPI](docs/queryapi/README.md)

* [getQuery](docs/queryapi/README.md#getquery) - Execute an ad-hoc query (simple)
* [postQuery](docs/queryapi/README.md#postquery) - Execute an ad-hoc query (complex)
* [postSimpleQuery](docs/queryapi/README.md#postsimplequery) - Execute a simple query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
