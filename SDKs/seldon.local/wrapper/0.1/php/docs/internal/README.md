# internal

### Available Operations

* [aggregate2](#aggregate2)
* [route](#route)
* [sendFeedback](#sendfeedback)
* [transformInput](#transforminput)
* [transformInput3](#transforminput3)
* [transformOutput](#transformoutput)

## aggregate2

### Example Usage

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

## route

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RouteRequestBody;
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
    $request = new RouteRequestBody();
    $request->json = new SeldonMessage();
    $request->json->binData = 'distinctio';
    $request->json->data = new DefaultData();
    $request->json->data->names = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->json->data->ndarry = [
        'error',
        'deserunt',
    ];
    $request->json->data->tensor = new Tensor();
    $request->json->data->tensor->shape = [
        437587,
        297534,
    ];
    $request->json->data->tensor->values = [
        567.13,
        9636.63,
        2726.56,
        3834.41,
    ];
    $request->json->data->tftensor = new TensorflowTensorProto();
    $request->json->data->tftensor->boolVal = [
        false,
        false,
    ];
    $request->json->data->tftensor->dcomplexVal = [
        8121.69,
        5288.95,
        4799.77,
        5680.45,
    ];
    $request->json->data->tftensor->doubleVal = [
        9255.97,
        8360.79,
    ];
    $request->json->data->tftensor->dtype = TensorflowDataTypeEnum::DT_INT32;
    $request->json->data->tftensor->floatVal = [
        871.29,
        6481.72,
    ];
    $request->json->data->tftensor->halfVal = [
        368241,
    ];
    $request->json->data->tftensor->int64Val = [
        'sapiente',
        'quo',
        'odit',
        'at',
    ];
    $request->json->data->tftensor->intVal = [
        978619,
        473608,
        799159,
        800911,
    ];
    $request->json->data->tftensor->resourceHandleVal = [
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
    ];
    $request->json->data->tftensor->scomplexVal = [
        7805.29,
        6788.8,
        1182.74,
    ];
    $request->json->data->tftensor->stringVal = [
        'officia',
        'occaecati',
        'fugit',
    ];
    $request->json->data->tftensor->tensorContent = 'deleniti';
    $request->json->data->tftensor->tensorShape = new TensorflowTensorShapeProto();
    $request->json->data->tftensor->tensorShape->dim = [
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
    ];
    $request->json->data->tftensor->tensorShape->unknownRank = false;
    $request->json->data->tftensor->uint32Val = [
        521848,
        105907,
        414662,
        473600,
    ];
    $request->json->data->tftensor->uint64Val = [
        'qui',
        'impedit',
    ];
    $request->json->data->tftensor->variantVal = [
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
    ];
    $request->json->data->tftensor->versionNumber = 456150;
    $request->json->meta = new Meta();
    $request->json->meta->metrics = [
        new Metric(),
    ];
    $request->json->meta->puid = 'excepturi';
    $request->json->meta->requestPath = [
        'perferendis' => 'ad',
    ];
    $request->json->meta->routing = [
        'sed' => 612096,
        'dolor' => 616934,
        'laboriosam' => 943749,
    ];
    $request->json->meta->tags = [
        'fuga' => 'in',
        'corporis' => 'iste',
        'iure' => 'saepe',
        'quidem' => 'architecto',
    ];
    $request->json->status = new Status();
    $request->json->status->code = 60225;
    $request->json->status->info = 'reiciendis';
    $request->json->status->reason = 'est';
    $request->json->status->status = StatusStatusFlagEnum::FAILURE;
    $request->json->strData = 'laborum';

    $response = $sdk->internal->route($request);

    if ($response->seldonMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendFeedback

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SendFeedbackRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Feedback;
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
    $request = new SendFeedbackRequestBody();
    $request->json = new Feedback();
    $request->json->request = new SeldonMessage();
    $request->json->request->binData = 'dolores';
    $request->json->request->data = new DefaultData();
    $request->json->request->data->names = [
        'corporis',
    ];
    $request->json->request->data->ndarry = [
        'nobis',
    ];
    $request->json->request->data->tensor = new Tensor();
    $request->json->request->data->tensor->shape = [
        607831,
        363711,
    ];
    $request->json->request->data->tensor->values = [
        5701.97,
        384.25,
    ];
    $request->json->request->data->tftensor = new TensorflowTensorProto();
    $request->json->request->data->tftensor->boolVal = [
        false,
        false,
    ];
    $request->json->request->data->tftensor->dcomplexVal = [
        9883.74,
        9589.5,
        1020.44,
    ];
    $request->json->request->data->tftensor->doubleVal = [
        2088.76,
        6350.59,
        1613.09,
    ];
    $request->json->request->data->tftensor->dtype = TensorflowDataTypeEnum::DT_UINT64_REF;
    $request->json->request->data->tftensor->floatVal = [
        5818.5,
        2532.91,
        4143.69,
    ];
    $request->json->request->data->tftensor->halfVal = [
        474697,
        244425,
    ];
    $request->json->request->data->tftensor->int64Val = [
        'quia',
        'quis',
        'vitae',
    ];
    $request->json->request->data->tftensor->intVal = [
        656330,
        317202,
        138183,
    ];
    $request->json->request->data->tftensor->resourceHandleVal = [
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
    ];
    $request->json->request->data->tftensor->scomplexVal = [
        9495.72,
    ];
    $request->json->request->data->tftensor->stringVal = [
        'id',
        'possimus',
    ];
    $request->json->request->data->tftensor->tensorContent = 'aut';
    $request->json->request->data->tftensor->tensorShape = new TensorflowTensorShapeProto();
    $request->json->request->data->tftensor->tensorShape->dim = [
        new TensorShapeProtoDim(),
    ];
    $request->json->request->data->tftensor->tensorShape->unknownRank = false;
    $request->json->request->data->tftensor->uint32Val = [
        837945,
        673660,
        96098,
    ];
    $request->json->request->data->tftensor->uint64Val = [
        'voluptatibus',
        'vero',
        'nihil',
        'praesentium',
    ];
    $request->json->request->data->tftensor->variantVal = [
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
    ];
    $request->json->request->data->tftensor->versionNumber = 55714;
    $request->json->request->meta = new Meta();
    $request->json->request->meta->metrics = [
        new Metric(),
        new Metric(),
        new Metric(),
    ];
    $request->json->request->meta->puid = 'voluptate';
    $request->json->request->meta->requestPath = [
        'perferendis' => 'doloremque',
        'reprehenderit' => 'ut',
        'maiores' => 'dicta',
    ];
    $request->json->request->meta->routing = [
        'dolore' => 480894,
        'dicta' => 688661,
    ];
    $request->json->request->meta->tags = [
        'accusamus' => 'commodi',
        'repudiandae' => 'quae',
    ];
    $request->json->request->status = new Status();
    $request->json->request->status->code = 216822;
    $request->json->request->status->info = 'quidem';
    $request->json->request->status->reason = 'molestias';
    $request->json->request->status->status = StatusStatusFlagEnum::FAILURE;
    $request->json->request->strData = 'pariatur';
    $request->json->response = new SeldonMessage();
    $request->json->response->binData = 'modi';
    $request->json->response->data = new DefaultData();
    $request->json->response->data->names = [
        'rem',
        'voluptates',
        'quasi',
    ];
    $request->json->response->data->ndarry = [
        'sint',
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->json->response->data->tensor = new Tensor();
    $request->json->response->data->tensor->shape = [
        9356,
        667411,
    ];
    $request->json->response->data->tensor->values = [
        1317.97,
        6471.74,
        7163.27,
        8413.86,
    ];
    $request->json->response->data->tftensor = new TensorflowTensorProto();
    $request->json->response->data->tftensor->boolVal = [
        false,
        false,
    ];
    $request->json->response->data->tftensor->dcomplexVal = [
        1831.91,
        3978.21,
    ];
    $request->json->response->data->tftensor->doubleVal = [
        5528.22,
        201.07,
        1649.4,
    ];
    $request->json->response->data->tftensor->dtype = TensorflowDataTypeEnum::DT_QINT16_REF;
    $request->json->response->data->tftensor->floatVal = [
        46.95,
        1464.41,
    ];
    $request->json->response->data->tftensor->halfVal = [
        569618,
        270008,
        703737,
    ];
    $request->json->response->data->tftensor->int64Val = [
        'labore',
        'delectus',
        'eum',
    ];
    $request->json->response->data->tftensor->intVal = [
        756107,
    ];
    $request->json->response->data->tftensor->resourceHandleVal = [
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
    ];
    $request->json->response->data->tftensor->scomplexVal = [
        5920.42,
        8960.39,
    ];
    $request->json->response->data->tftensor->stringVal = [
        'officia',
        'dolor',
        'debitis',
    ];
    $request->json->response->data->tftensor->tensorContent = 'a';
    $request->json->response->data->tftensor->tensorShape = new TensorflowTensorShapeProto();
    $request->json->response->data->tftensor->tensorShape->dim = [
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
    ];
    $request->json->response->data->tftensor->tensorShape->unknownRank = false;
    $request->json->response->data->tftensor->uint32Val = [
        449198,
        846409,
    ];
    $request->json->response->data->tftensor->uint64Val = [
        'rerum',
        'dicta',
        'magnam',
        'cumque',
    ];
    $request->json->response->data->tftensor->variantVal = [
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
    ];
    $request->json->response->data->tftensor->versionNumber = 411820;
    $request->json->response->meta = new Meta();
    $request->json->response->meta->metrics = [
        new Metric(),
        new Metric(),
    ];
    $request->json->response->meta->puid = 'laborum';
    $request->json->response->meta->requestPath = [
        'non' => 'occaecati',
        'enim' => 'accusamus',
        'delectus' => 'quidem',
        'provident' => 'nam',
    ];
    $request->json->response->meta->routing = [
        'blanditiis' => 533206,
        'sapiente' => 230533,
        'deserunt' => 394869,
    ];
    $request->json->response->meta->tags = [
        'natus' => 'omnis',
        'molestiae' => 'perferendis',
    ];
    $request->json->response->status = new Status();
    $request->json->response->status->code = 470132;
    $request->json->response->status->info = 'magnam';
    $request->json->response->status->reason = 'distinctio';
    $request->json->response->status->status = StatusStatusFlagEnum::FAILURE;
    $request->json->response->strData = 'labore';
    $request->json->reward = 2900.77;
    $request->json->truth = new SeldonMessage();
    $request->json->truth->binData = 'suscipit';
    $request->json->truth->data = new DefaultData();
    $request->json->truth->data->names = [
        'nobis',
        'eum',
        'vero',
    ];
    $request->json->truth->data->ndarry = [
        'architecto',
    ];
    $request->json->truth->data->tensor = new Tensor();
    $request->json->truth->data->tensor->shape = [
        92373,
        569965,
    ];
    $request->json->truth->data->tensor->values = [
        5908.73,
        5518.16,
    ];
    $request->json->truth->data->tftensor = new TensorflowTensorProto();
    $request->json->truth->data->tftensor->boolVal = [
        false,
        false,
        false,
    ];
    $request->json->truth->data->tftensor->dcomplexVal = [
        6532.01,
    ];
    $request->json->truth->data->tftensor->doubleVal = [
        6521.03,
        3209.97,
        4314.18,
        2212.62,
    ];
    $request->json->truth->data->tftensor->dtype = TensorflowDataTypeEnum::DT_HALF_REF;
    $request->json->truth->data->tftensor->floatVal = [
        3675.62,
    ];
    $request->json->truth->data->tftensor->halfVal = [
        435865,
    ];
    $request->json->truth->data->tftensor->int64Val = [
        'debitis',
        'eius',
        'maxime',
        'deleniti',
    ];
    $request->json->truth->data->tftensor->intVal = [
        447926,
        100226,
        99569,
    ];
    $request->json->truth->data->tftensor->resourceHandleVal = [
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
    ];
    $request->json->truth->data->tftensor->scomplexVal = [
        7142.42,
        4692.49,
    ];
    $request->json->truth->data->tftensor->stringVal = [
        'quibusdam',
        'sed',
        'saepe',
        'pariatur',
    ];
    $request->json->truth->data->tftensor->tensorContent = 'accusantium';
    $request->json->truth->data->tftensor->tensorShape = new TensorflowTensorShapeProto();
    $request->json->truth->data->tftensor->tensorShape->dim = [
        new TensorShapeProtoDim(),
    ];
    $request->json->truth->data->tftensor->tensorShape->unknownRank = false;
    $request->json->truth->data->tftensor->uint32Val = [
        615560,
        166847,
        123820,
    ];
    $request->json->truth->data->tftensor->uint64Val = [
        'illum',
        'pariatur',
        'maxime',
        'ea',
    ];
    $request->json->truth->data->tftensor->variantVal = [
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
    ];
    $request->json->truth->data->tftensor->versionNumber = 139972;
    $request->json->truth->meta = new Meta();
    $request->json->truth->meta->metrics = [
        new Metric(),
        new Metric(),
    ];
    $request->json->truth->meta->puid = 'accusantium';
    $request->json->truth->meta->requestPath = [
        'maiores' => 'quidem',
    ];
    $request->json->truth->meta->routing = [
        'voluptate' => 420075,
        'nam' => 50588,
    ];
    $request->json->truth->meta->tags = [
        'nemo' => 'voluptatibus',
        'perferendis' => 'fugiat',
        'amet' => 'aut',
        'cumque' => 'corporis',
    ];
    $request->json->truth->status = new Status();
    $request->json->truth->status->code = 944124;
    $request->json->truth->status->info = 'libero';
    $request->json->truth->status->reason = 'nobis';
    $request->json->truth->status->status = StatusStatusFlagEnum::SUCCESS;
    $request->json->truth->strData = 'quis';

    $response = $sdk->internal->sendFeedback($request);

    if ($response->seldonMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transformInput

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TransformInputRequestBody;
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
    $request = new TransformInputRequestBody();
    $request->json = new SeldonMessage();
    $request->json->binData = 'totam';
    $request->json->data = new DefaultData();
    $request->json->data->names = [
        'eaque',
        'quis',
    ];
    $request->json->data->ndarry = [
        'eos',
    ];
    $request->json->data->tensor = new Tensor();
    $request->json->data->tensor->shape = [
        170986,
    ];
    $request->json->data->tensor->values = [
        4634.51,
        2239.24,
        8745.73,
        3453.52,
    ];
    $request->json->data->tftensor = new TensorflowTensorProto();
    $request->json->data->tftensor->boolVal = [
        false,
        false,
        false,
        false,
    ];
    $request->json->data->tftensor->dcomplexVal = [
        6082.53,
        7044.15,
        5966.56,
        318.38,
    ];
    $request->json->data->tftensor->doubleVal = [
        1646.94,
        5000.26,
        6214.79,
        503.7,
    ];
    $request->json->data->tftensor->dtype = TensorflowDataTypeEnum::DT_UINT8_REF;
    $request->json->data->tftensor->floatVal = [
        2378.93,
        9923.97,
        9342.14,
    ];
    $request->json->data->tftensor->halfVal = [
        613966,
        679091,
    ];
    $request->json->data->tftensor->int64Val = [
        'pariatur',
        'provident',
        'nobis',
    ];
    $request->json->data->tftensor->intVal = [
        964490,
        311945,
        554242,
    ];
    $request->json->data->tftensor->resourceHandleVal = [
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
    ];
    $request->json->data->tftensor->scomplexVal = [
        2098.43,
    ];
    $request->json->data->tftensor->stringVal = [
        'qui',
    ];
    $request->json->data->tftensor->tensorContent = 'ipsum';
    $request->json->data->tftensor->tensorShape = new TensorflowTensorShapeProto();
    $request->json->data->tftensor->tensorShape->dim = [
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
    ];
    $request->json->data->tftensor->tensorShape->unknownRank = false;
    $request->json->data->tftensor->uint32Val = [
        739551,
        452109,
        490459,
    ];
    $request->json->data->tftensor->uint64Val = [
        'amet',
        'dolorum',
        'numquam',
        'veritatis',
    ];
    $request->json->data->tftensor->variantVal = [
        new TensorflowVariantTensorDataProto(),
    ];
    $request->json->data->tftensor->versionNumber = 56418;
    $request->json->meta = new Meta();
    $request->json->meta->metrics = [
        new Metric(),
        new Metric(),
    ];
    $request->json->meta->puid = 'odio';
    $request->json->meta->requestPath = [
        'accusamus' => 'quidem',
        'voluptatibus' => 'voluptas',
    ];
    $request->json->meta->routing = [
        'eos' => 542499,
        'sit' => 854614,
        'ab' => 743835,
    ];
    $request->json->meta->tags = [
        'iusto' => 'voluptate',
        'dolorum' => 'deleniti',
        'omnis' => 'necessitatibus',
    ];
    $request->json->status = new Status();
    $request->json->status->code = 714697;
    $request->json->status->info = 'asperiores';
    $request->json->status->reason = 'nihil';
    $request->json->status->status = StatusStatusFlagEnum::SUCCESS;
    $request->json->strData = 'voluptate';

    $response = $sdk->internal->transformInput($request);

    if ($response->seldonMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transformInput3

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TransformInput3RequestBody;
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
    $request = new TransformInput3RequestBody();
    $request->json = new SeldonMessage();
    $request->json->binData = 'id';
    $request->json->data = new DefaultData();
    $request->json->data->names = [
        'eius',
        'aspernatur',
        'perferendis',
        'amet',
    ];
    $request->json->data->ndarry = [
        'accusamus',
        'ad',
        'saepe',
        'suscipit',
    ];
    $request->json->data->tensor = new Tensor();
    $request->json->data->tensor->shape = [
        588317,
        324683,
        831049,
    ];
    $request->json->data->tensor->values = [
        6289.82,
        0.55,
        8726.51,
    ];
    $request->json->data->tftensor = new TensorflowTensorProto();
    $request->json->data->tftensor->boolVal = [
        false,
        false,
    ];
    $request->json->data->tftensor->dcomplexVal = [
        4254.51,
        7980.47,
    ];
    $request->json->data->tftensor->doubleVal = [
        1856.36,
        6798.8,
        9527.92,
        4561.3,
    ];
    $request->json->data->tftensor->dtype = TensorflowDataTypeEnum::DT_INT64_REF;
    $request->json->data->tftensor->floatVal = [
        2155.07,
        7887.4,
    ];
    $request->json->data->tftensor->halfVal = [
        229442,
        730856,
        880298,
        253941,
    ];
    $request->json->data->tftensor->int64Val = [
        'dolorem',
        'sapiente',
    ];
    $request->json->data->tftensor->intVal = [
        471752,
        25662,
        711584,
    ];
    $request->json->data->tftensor->resourceHandleVal = [
        new TensorflowResourceHandleProto(),
    ];
    $request->json->data->tftensor->scomplexVal = [
        4246.85,
    ];
    $request->json->data->tftensor->stringVal = [
        'voluptas',
        'deserunt',
        'quam',
    ];
    $request->json->data->tftensor->tensorContent = 'ipsum';
    $request->json->data->tftensor->tensorShape = new TensorflowTensorShapeProto();
    $request->json->data->tftensor->tensorShape->dim = [
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
    ];
    $request->json->data->tftensor->tensorShape->unknownRank = false;
    $request->json->data->tftensor->uint32Val = [
        586784,
    ];
    $request->json->data->tftensor->uint64Val = [
        'pariatur',
        'soluta',
        'dicta',
        'laborum',
    ];
    $request->json->data->tftensor->variantVal = [
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
    ];
    $request->json->data->tftensor->versionNumber = 276894;
    $request->json->meta = new Meta();
    $request->json->meta->metrics = [
        new Metric(),
    ];
    $request->json->meta->puid = 'dolores';
    $request->json->meta->requestPath = [
        'facilis' => 'aliquid',
        'quam' => 'molestias',
        'temporibus' => 'qui',
    ];
    $request->json->meta->routing = [
        'fugit' => 164959,
    ];
    $request->json->meta->tags = [
        'sunt' => 'ullam',
        'nam' => 'hic',
    ];
    $request->json->status = new Status();
    $request->json->status->code = 30452;
    $request->json->status->info = 'cumque';
    $request->json->status->reason = 'soluta';
    $request->json->status->status = StatusStatusFlagEnum::FAILURE;
    $request->json->strData = 'et';

    $response = $sdk->internal->transformInput3($request);

    if ($response->seldonMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transformOutput

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TransformOutputRequestBody;
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
    $request = new TransformOutputRequestBody();
    $request->json = new SeldonMessage();
    $request->json->binData = 'saepe';
    $request->json->data = new DefaultData();
    $request->json->data->names = [
        'veritatis',
    ];
    $request->json->data->ndarry = [
        'quos',
        'tempore',
        'cupiditate',
    ];
    $request->json->data->tensor = new Tensor();
    $request->json->data->tensor->shape = [
        961937,
    ];
    $request->json->data->tensor->values = [
        2921.47,
    ];
    $request->json->data->tftensor = new TensorflowTensorProto();
    $request->json->data->tftensor->boolVal = [
        false,
        false,
    ];
    $request->json->data->tftensor->dcomplexVal = [
        6772.63,
    ];
    $request->json->data->tftensor->doubleVal = [
        630.38,
    ];
    $request->json->data->tftensor->dtype = TensorflowDataTypeEnum::DT_INVALID;
    $request->json->data->tftensor->floatVal = [
        9295.3,
        92.4,
        6699.17,
    ];
    $request->json->data->tftensor->halfVal = [
        785153,
        984330,
        281730,
        703495,
    ];
    $request->json->data->tftensor->int64Val = [
        'qui',
        'quae',
        'laudantium',
    ];
    $request->json->data->tftensor->intVal = [
        580447,
        977496,
    ];
    $request->json->data->tftensor->resourceHandleVal = [
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
    ];
    $request->json->data->tftensor->scomplexVal = [
        6064.76,
        3381.59,
        2184.03,
        9615.71,
    ];
    $request->json->data->tftensor->stringVal = [
        'consectetur',
        'vero',
    ];
    $request->json->data->tftensor->tensorContent = 'tenetur';
    $request->json->data->tftensor->tensorShape = new TensorflowTensorShapeProto();
    $request->json->data->tftensor->tensorShape->dim = [
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
    ];
    $request->json->data->tftensor->tensorShape->unknownRank = false;
    $request->json->data->tftensor->uint32Val = [
        715561,
        799203,
        486160,
        630448,
    ];
    $request->json->data->tftensor->uint64Val = [
        'vero',
        'ducimus',
        'dolore',
    ];
    $request->json->data->tftensor->variantVal = [
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
    ];
    $request->json->data->tftensor->versionNumber = 848944;
    $request->json->meta = new Meta();
    $request->json->meta->metrics = [
        new Metric(),
    ];
    $request->json->meta->puid = 'natus';
    $request->json->meta->requestPath = [
        'aut' => 'voluptatibus',
        'exercitationem' => 'nulla',
        'fugit' => 'porro',
        'maiores' => 'doloribus',
    ];
    $request->json->meta->routing = [
        'eligendi' => 497391,
        'alias' => 639473,
    ];
    $request->json->meta->tags = [
        'ipsam' => 'ea',
        'aspernatur' => 'vel',
    ];
    $request->json->status = new Status();
    $request->json->status->code = 822118;
    $request->json->status->info = 'magnam';
    $request->json->status->reason = 'ratione';
    $request->json->status->status = StatusStatusFlagEnum::SUCCESS;
    $request->json->strData = 'laudantium';

    $response = $sdk->internal->transformOutput($request);

    if ($response->seldonMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
