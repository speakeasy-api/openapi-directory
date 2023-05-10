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
use \OpenAPI\OpenAPI\Models\Operations\Aggregate2RequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SeldonMessageList;
use \OpenAPI\OpenAPI\Models\Shared\SeldonMessage;
use \OpenAPI\OpenAPI\Models\Shared\DefaultData;
use \OpenAPI\OpenAPI\Models\Shared\Tensor;
use \OpenAPI\OpenAPI\Models\Shared\TensorflowTensorProto;
use \OpenAPI\OpenAPI\Models\Shared\TensorflowDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TensorflowResourceHandleProto;
use \OpenAPI\OpenAPI\Models\Shared\TensorflowTensorShapeProto;
use \OpenAPI\OpenAPI\Models\Shared\TensorShapeProtoDim;
use \OpenAPI\OpenAPI\Models\Shared\TensorflowVariantTensorDataProto;
use \OpenAPI\OpenAPI\Models\Shared\Meta;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\MetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\StatusStatusFlagEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Aggregate2RequestBody();
    $request->json = new SeldonMessageList();
    $request->json->seldonMessages = [
        new SeldonMessage(),
        new SeldonMessage(),
        new SeldonMessage(),
    ];

    $response = $sdk->internal->aggregate2($request);

    if ($response->seldonMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [internal](docs/internal/README.md)

* [aggregate2](docs/internal/README.md#aggregate2)
* [route](docs/internal/README.md#route)
* [sendFeedback](docs/internal/README.md#sendfeedback)
* [transformInput](docs/internal/README.md#transforminput)
* [transformInput3](docs/internal/README.md#transforminput3)
* [transformOutput](docs/internal/README.md#transformoutput)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
