# profile

### Available Operations

* [postV05PatientsProfileOnShareJson](#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [postV05PatientsProfileOnShareRaw](#postv05patientsprofileonshareraw) - Response to patient's share profile request

## postV05PatientsProfileOnShareJson

Result of patient share profile request at HIP end.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsProfileOnShareJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileResult;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsProfileOnShareJsonRequest();
    $request->authorization = 'ab';
    $request->shareProfileResult = new ShareProfileResult();
    $request->shareProfileResult->acknowledgement = new ShareProfileAcknowledgement();
    $request->shareProfileResult->acknowledgement->healthId = '<username>@<suffix>';
    $request->shareProfileResult->acknowledgement->status = ShareProfileAcknowledgementStatusEnum::FAILURE;
    $request->shareProfileResult->error = new Error();
    $request->shareProfileResult->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->shareProfileResult->error->message = 'tempora';
    $request->shareProfileResult->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->shareProfileResult->resp = new RequestReference();
    $request->shareProfileResult->resp->requestId = 'e523c7e0-bc71-478e-8796-f2a70c688282';
    $request->shareProfileResult->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-13T21:24:27.316Z');

    $response = $sdk->profile->postV05PatientsProfileOnShareJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsProfileOnShareRaw

Result of patient share profile request at HIP end.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsProfileOnShareRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsProfileOnShareRawRequest();
    $request->authorization = 'incidunt';
    $request->requestBody = 'atque';

    $response = $sdk->profile->postV05PatientsProfileOnShareRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
