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