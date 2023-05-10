<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PredictJsonRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\PredictJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PredictJsonRequest();
    $request->seldonMessage = new SeldonMessage();
    $request->seldonMessage->binData = 'corrupti';
    $request->seldonMessage->data = new DefaultData();
    $request->seldonMessage->data->names = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->seldonMessage->data->ndarray = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->seldonMessage->data->tensor = new Tensor();
    $request->seldonMessage->data->tensor->shape = [
        384382,
        437587,
        297534,
    ];
    $request->seldonMessage->data->tensor->values = [
        567.13,
        9636.63,
        2726.56,
        3834.41,
    ];
    $request->seldonMessage->data->tftensor = new TensorflowTensorProto();
    $request->seldonMessage->data->tftensor->boolVal = [
        false,
        false,
    ];
    $request->seldonMessage->data->tftensor->dcomplexVal = [
        8121.69,
        5288.95,
        4799.77,
        5680.45,
    ];
    $request->seldonMessage->data->tftensor->doubleVal = [
        9255.97,
        8360.79,
    ];
    $request->seldonMessage->data->tftensor->dtype = TensorflowDataTypeEnum::DT_INT32;
    $request->seldonMessage->data->tftensor->floatVal = [
        871.29,
        6481.72,
    ];
    $request->seldonMessage->data->tftensor->halfVal = [
        368241,
    ];
    $request->seldonMessage->data->tftensor->int64Val = [
        'sapiente',
        'quo',
        'odit',
        'at',
    ];
    $request->seldonMessage->data->tftensor->intVal = [
        978619,
        473608,
        799159,
        800911,
    ];
    $request->seldonMessage->data->tftensor->resourceHandleVal = [
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
    ];
    $request->seldonMessage->data->tftensor->scomplexVal = [
        7805.29,
        6788.8,
        1182.74,
    ];
    $request->seldonMessage->data->tftensor->stringVal = [
        'officia',
        'occaecati',
        'fugit',
    ];
    $request->seldonMessage->data->tftensor->tensorContent = 'deleniti';
    $request->seldonMessage->data->tftensor->tensorShape = new TensorflowTensorShapeProto();
    $request->seldonMessage->data->tftensor->tensorShape->dim = [
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
    ];
    $request->seldonMessage->data->tftensor->tensorShape->unknownRank = false;
    $request->seldonMessage->data->tftensor->uint32Val = [
        521848,
        105907,
        414662,
        473600,
    ];
    $request->seldonMessage->data->tftensor->uint64Val = [
        'qui',
        'impedit',
    ];
    $request->seldonMessage->data->tftensor->variantVal = [
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
    ];
    $request->seldonMessage->data->tftensor->versionNumber = 456150;
    $request->seldonMessage->meta = new Meta();
    $request->seldonMessage->meta->metrics = [
        new Metric(),
    ];
    $request->seldonMessage->meta->puid = 'excepturi';
    $request->seldonMessage->meta->requestPath = [
        'perferendis' => 'ad',
    ];
    $request->seldonMessage->meta->routing = [
        'sed' => 612096,
        'dolor' => 616934,
        'laboriosam' => 943749,
    ];
    $request->seldonMessage->meta->tags = [
        'fuga' => 'in',
        'corporis' => 'iste',
        'iure' => 'saepe',
        'quidem' => 'architecto',
    ];
    $request->seldonMessage->status = new Status();
    $request->seldonMessage->status->code = 60225;
    $request->seldonMessage->status->info = 'reiciendis';
    $request->seldonMessage->status->reason = 'est';
    $request->seldonMessage->status->status = StatusStatusFlagEnum::FAILURE;
    $request->seldonMessage->strData = 'laborum';
    $request->deployment = 'dolores';
    $request->namespace = 'dolorem';

    $requestSecurity = new PredictJsonSecurity();
    $requestSecurity->httpBearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->externalAmbassadorAPI->predictJson($request, $requestSecurity);

    if ($response->seldonMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->