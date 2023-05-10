# externalAmbassadorAPI

### Available Operations

* [predictJson](#predictjson)
* [predictRaw](#predictraw)
* [predictString](#predictstring)
* [sendFeedback](#sendfeedback)

## predictJson

### Example Usage

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
    $request->seldonMessage->binData = 'corporis';
    $request->seldonMessage->data = new DefaultData();
    $request->seldonMessage->data->names = [
        'nobis',
    ];
    $request->seldonMessage->data->ndarray = [
        'omnis',
        'nemo',
    ];
    $request->seldonMessage->data->tensor = new Tensor();
    $request->seldonMessage->data->tensor->shape = [
        570197,
        38425,
    ];
    $request->seldonMessage->data->tensor->values = [
        6342.74,
        9883.74,
    ];
    $request->seldonMessage->data->tftensor = new TensorflowTensorProto();
    $request->seldonMessage->data->tftensor->boolVal = [
        false,
        false,
        false,
        false,
    ];
    $request->seldonMessage->data->tftensor->dcomplexVal = [
        6527.9,
    ];
    $request->seldonMessage->data->tftensor->doubleVal = [
        6350.59,
    ];
    $request->seldonMessage->data->tftensor->dtype = TensorflowDataTypeEnum::DT_STRING;
    $request->seldonMessage->data->tftensor->floatVal = [
        6531.08,
        5818.5,
        2532.91,
        4143.69,
    ];
    $request->seldonMessage->data->tftensor->halfVal = [
        474697,
        244425,
    ];
    $request->seldonMessage->data->tftensor->int64Val = [
        'quia',
        'quis',
        'vitae',
    ];
    $request->seldonMessage->data->tftensor->intVal = [
        656330,
        317202,
        138183,
    ];
    $request->seldonMessage->data->tftensor->resourceHandleVal = [
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
    ];
    $request->seldonMessage->data->tftensor->scomplexVal = [
        9495.72,
    ];
    $request->seldonMessage->data->tftensor->stringVal = [
        'id',
        'possimus',
    ];
    $request->seldonMessage->data->tftensor->tensorContent = 'aut';
    $request->seldonMessage->data->tftensor->tensorShape = new TensorflowTensorShapeProto();
    $request->seldonMessage->data->tftensor->tensorShape->dim = [
        new TensorShapeProtoDim(),
    ];
    $request->seldonMessage->data->tftensor->tensorShape->unknownRank = false;
    $request->seldonMessage->data->tftensor->uint32Val = [
        837945,
        673660,
        96098,
    ];
    $request->seldonMessage->data->tftensor->uint64Val = [
        'voluptatibus',
        'vero',
        'nihil',
        'praesentium',
    ];
    $request->seldonMessage->data->tftensor->variantVal = [
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
    ];
    $request->seldonMessage->data->tftensor->versionNumber = 55714;
    $request->seldonMessage->meta = new Meta();
    $request->seldonMessage->meta->metrics = [
        new Metric(),
        new Metric(),
        new Metric(),
    ];
    $request->seldonMessage->meta->puid = 'voluptate';
    $request->seldonMessage->meta->requestPath = [
        'perferendis' => 'doloremque',
        'reprehenderit' => 'ut',
        'maiores' => 'dicta',
    ];
    $request->seldonMessage->meta->routing = [
        'dolore' => 480894,
        'dicta' => 688661,
    ];
    $request->seldonMessage->meta->tags = [
        'accusamus' => 'commodi',
        'repudiandae' => 'quae',
    ];
    $request->seldonMessage->status = new Status();
    $request->seldonMessage->status->code = 216822;
    $request->seldonMessage->status->info = 'quidem';
    $request->seldonMessage->status->reason = 'molestias';
    $request->seldonMessage->status->status = StatusStatusFlagEnum::FAILURE;
    $request->seldonMessage->strData = 'pariatur';
    $request->deployment = 'modi';
    $request->namespace = 'praesentium';

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

## predictRaw

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PredictRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\PredictRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PredictRawRequest();
    $request->requestBody = 'rem';
    $request->deployment = 'voluptates';
    $request->namespace = 'quasi';

    $requestSecurity = new PredictRawSecurity();
    $requestSecurity->httpBearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->externalAmbassadorAPI->predictRaw($request, $requestSecurity);

    if ($response->seldonMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## predictString

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PredictStringRequest;
use \OpenAPI\OpenAPI\Models\Operations\PredictStringSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PredictStringRequest();
    $request->requestBody = 'repudiandae';
    $request->deployment = 'sint';
    $request->namespace = 'veritatis';

    $requestSecurity = new PredictStringSecurity();
    $requestSecurity->httpBearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->externalAmbassadorAPI->predictString($request, $requestSecurity);

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
use \OpenAPI\OpenAPI\Models\Operations\SendFeedbackRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\SendFeedbackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendFeedbackRequest();
    $request->feedback = new Feedback();
    $request->feedback->request = new SeldonMessage();
    $request->feedback->request->binData = 'itaque';
    $request->feedback->request->data = new DefaultData();
    $request->feedback->request->data->names = [
        'enim',
        'consequatur',
    ];
    $request->feedback->request->data->ndarray = [
        'quibusdam',
        'explicabo',
        'deserunt',
    ];
    $request->feedback->request->data->tensor = new Tensor();
    $request->feedback->request->data->tensor->shape = [
        841386,
        289406,
        264730,
    ];
    $request->feedback->request->data->tensor->values = [
        3978.21,
    ];
    $request->feedback->request->data->tftensor = new TensorflowTensorProto();
    $request->feedback->request->data->tftensor->boolVal = [
        false,
        false,
        false,
    ];
    $request->feedback->request->data->tftensor->dcomplexVal = [
        201.07,
        1649.4,
        8289.4,
    ];
    $request->feedback->request->data->tftensor->doubleVal = [
        46.95,
        1464.41,
    ];
    $request->feedback->request->data->tftensor->dtype = TensorflowDataTypeEnum::DT_COMPLEX64_REF;
    $request->feedback->request->data->tftensor->floatVal = [
        2700.08,
        7037.37,
        7351.94,
    ];
    $request->feedback->request->data->tftensor->halfVal = [
        962189,
        433288,
    ];
    $request->feedback->request->data->tftensor->int64Val = [
        'eligendi',
    ];
    $request->feedback->request->data->tftensor->intVal = [
        396098,
        592042,
        896039,
    ];
    $request->feedback->request->data->tftensor->resourceHandleVal = [
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
    ];
    $request->feedback->request->data->tftensor->scomplexVal = [
        2230.81,
        8915.55,
        9527.49,
    ];
    $request->feedback->request->data->tftensor->stringVal = [
        'in',
        'in',
        'illum',
    ];
    $request->feedback->request->data->tftensor->tensorContent = 'maiores';
    $request->feedback->request->data->tftensor->tensorShape = new TensorflowTensorShapeProto();
    $request->feedback->request->data->tftensor->tensorShape->dim = [
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
    ];
    $request->feedback->request->data->tftensor->tensorShape->unknownRank = false;
    $request->feedback->request->data->tftensor->uint32Val = [
        297437,
    ];
    $request->feedback->request->data->tftensor->uint64Val = [
        'facere',
        'ea',
        'aliquid',
        'laborum',
    ];
    $request->feedback->request->data->tftensor->variantVal = [
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
    ];
    $request->feedback->request->data->tftensor->versionNumber = 249796;
    $request->feedback->request->meta = new Meta();
    $request->feedback->request->meta->metrics = [
        new Metric(),
        new Metric(),
        new Metric(),
    ];
    $request->feedback->request->meta->puid = 'enim';
    $request->feedback->request->meta->requestPath = [
        'delectus' => 'quidem',
        'provident' => 'nam',
        'id' => 'blanditiis',
        'deleniti' => 'sapiente',
    ];
    $request->feedback->request->meta->routing = [
        'deserunt' => 394869,
    ];
    $request->feedback->request->meta->tags = [
        'natus' => 'omnis',
        'molestiae' => 'perferendis',
    ];
    $request->feedback->request->status = new Status();
    $request->feedback->request->status->code = 470132;
    $request->feedback->request->status->info = 'magnam';
    $request->feedback->request->status->reason = 'distinctio';
    $request->feedback->request->status->status = StatusStatusFlagEnum::FAILURE;
    $request->feedback->request->strData = 'labore';
    $request->feedback->response = new SeldonMessage();
    $request->feedback->response->binData = 'labore';
    $request->feedback->response->data = new DefaultData();
    $request->feedback->response->data->names = [
        'natus',
        'nobis',
    ];
    $request->feedback->response->data->ndarray = [
        'vero',
        'aspernatur',
    ];
    $request->feedback->response->data->tensor = new Tensor();
    $request->feedback->response->data->tensor->shape = [
        298282,
    ];
    $request->feedback->response->data->tensor->values = [
        5699.65,
    ];
    $request->feedback->response->data->tftensor = new TensorflowTensorProto();
    $request->feedback->response->data->tftensor->boolVal = [
        false,
        false,
    ];
    $request->feedback->response->data->tftensor->dcomplexVal = [
        5518.16,
        5743.25,
        336.25,
    ];
    $request->feedback->response->data->tftensor->doubleVal = [
        9689.62,
        6521.03,
        3209.97,
    ];
    $request->feedback->response->data->tftensor->dtype = TensorflowDataTypeEnum::DT_RESOURCE;
    $request->feedback->response->data->tftensor->floatVal = [
        8965.47,
    ];
    $request->feedback->response->data->tftensor->halfVal = [
        367562,
    ];
    $request->feedback->response->data->tftensor->int64Val = [
        'iure',
    ];
    $request->feedback->response->data->tftensor->intVal = [
        891924,
        260341,
        806194,
        537023,
    ];
    $request->feedback->response->data->tftensor->resourceHandleVal = [
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
    ];
    $request->feedback->response->data->tftensor->scomplexVal = [
        1002.26,
        995.69,
    ];
    $request->feedback->response->data->tftensor->stringVal = [
        'ullam',
        'expedita',
        'nihil',
        'repellat',
    ];
    $request->feedback->response->data->tftensor->tensorContent = 'quibusdam';
    $request->feedback->response->data->tftensor->tensorShape = new TensorflowTensorShapeProto();
    $request->feedback->response->data->tftensor->tensorShape->dim = [
        new TensorShapeProtoDim(),
    ];
    $request->feedback->response->data->tftensor->tensorShape->unknownRank = false;
    $request->feedback->response->data->tftensor->uint32Val = [
        868126,
        37559,
        162493,
        508315,
    ];
    $request->feedback->response->data->tftensor->uint64Val = [
        'magni',
        'sunt',
        'quo',
    ];
    $request->feedback->response->data->tftensor->variantVal = [
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
        new TensorflowVariantTensorDataProto(),
    ];
    $request->feedback->response->data->tftensor->versionNumber = 864934;
    $request->feedback->response->meta = new Meta();
    $request->feedback->response->meta->metrics = [
        new Metric(),
        new Metric(),
        new Metric(),
        new Metric(),
    ];
    $request->feedback->response->meta->puid = 'ea';
    $request->feedback->response->meta->requestPath = [
        'odit' => 'ea',
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->feedback->response->meta->routing = [
        'voluptate' => 420075,
        'nam' => 50588,
    ];
    $request->feedback->response->meta->tags = [
        'nemo' => 'voluptatibus',
        'perferendis' => 'fugiat',
        'amet' => 'aut',
        'cumque' => 'corporis',
    ];
    $request->feedback->response->status = new Status();
    $request->feedback->response->status->code = 944124;
    $request->feedback->response->status->info = 'libero';
    $request->feedback->response->status->reason = 'nobis';
    $request->feedback->response->status->status = StatusStatusFlagEnum::SUCCESS;
    $request->feedback->response->strData = 'quis';
    $request->feedback->reward = 5210.37;
    $request->feedback->truth = new SeldonMessage();
    $request->feedback->truth->binData = 'dignissimos';
    $request->feedback->truth->data = new DefaultData();
    $request->feedback->truth->data->names = [
        'quis',
    ];
    $request->feedback->truth->data->ndarray = [
        'eos',
    ];
    $request->feedback->truth->data->tensor = new Tensor();
    $request->feedback->truth->data->tensor->shape = [
        170986,
    ];
    $request->feedback->truth->data->tensor->values = [
        4634.51,
        2239.24,
        8745.73,
        3453.52,
    ];
    $request->feedback->truth->data->tftensor = new TensorflowTensorProto();
    $request->feedback->truth->data->tftensor->boolVal = [
        false,
        false,
        false,
        false,
    ];
    $request->feedback->truth->data->tftensor->dcomplexVal = [
        6082.53,
        7044.15,
        5966.56,
        318.38,
    ];
    $request->feedback->truth->data->tftensor->doubleVal = [
        1646.94,
        5000.26,
        6214.79,
        503.7,
    ];
    $request->feedback->truth->data->tftensor->dtype = TensorflowDataTypeEnum::DT_UINT8_REF;
    $request->feedback->truth->data->tftensor->floatVal = [
        2378.93,
        9923.97,
        9342.14,
    ];
    $request->feedback->truth->data->tftensor->halfVal = [
        613966,
        679091,
    ];
    $request->feedback->truth->data->tftensor->int64Val = [
        'pariatur',
        'provident',
        'nobis',
    ];
    $request->feedback->truth->data->tftensor->intVal = [
        964490,
        311945,
        554242,
    ];
    $request->feedback->truth->data->tftensor->resourceHandleVal = [
        new TensorflowResourceHandleProto(),
        new TensorflowResourceHandleProto(),
    ];
    $request->feedback->truth->data->tftensor->scomplexVal = [
        2098.43,
    ];
    $request->feedback->truth->data->tftensor->stringVal = [
        'qui',
    ];
    $request->feedback->truth->data->tftensor->tensorContent = 'ipsum';
    $request->feedback->truth->data->tftensor->tensorShape = new TensorflowTensorShapeProto();
    $request->feedback->truth->data->tftensor->tensorShape->dim = [
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
        new TensorShapeProtoDim(),
    ];
    $request->feedback->truth->data->tftensor->tensorShape->unknownRank = false;
    $request->feedback->truth->data->tftensor->uint32Val = [
        739551,
        452109,
        490459,
    ];
    $request->feedback->truth->data->tftensor->uint64Val = [
        'amet',
        'dolorum',
        'numquam',
        'veritatis',
    ];
    $request->feedback->truth->data->tftensor->variantVal = [
        new TensorflowVariantTensorDataProto(),
    ];
    $request->feedback->truth->data->tftensor->versionNumber = 56418;
    $request->feedback->truth->meta = new Meta();
    $request->feedback->truth->meta->metrics = [
        new Metric(),
        new Metric(),
    ];
    $request->feedback->truth->meta->puid = 'odio';
    $request->feedback->truth->meta->requestPath = [
        'accusamus' => 'quidem',
        'voluptatibus' => 'voluptas',
    ];
    $request->feedback->truth->meta->routing = [
        'eos' => 542499,
        'sit' => 854614,
        'ab' => 743835,
    ];
    $request->feedback->truth->meta->tags = [
        'iusto' => 'voluptate',
        'dolorum' => 'deleniti',
        'omnis' => 'necessitatibus',
    ];
    $request->feedback->truth->status = new Status();
    $request->feedback->truth->status->code = 714697;
    $request->feedback->truth->status->info = 'asperiores';
    $request->feedback->truth->status->reason = 'nihil';
    $request->feedback->truth->status->status = StatusStatusFlagEnum::SUCCESS;
    $request->feedback->truth->strData = 'voluptate';
    $request->deployment = 'id';
    $request->namespace = 'saepe';

    $requestSecurity = new SendFeedbackSecurity();
    $requestSecurity->httpBearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->externalAmbassadorAPI->sendFeedback($request, $requestSecurity);

    if ($response->seldonMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
