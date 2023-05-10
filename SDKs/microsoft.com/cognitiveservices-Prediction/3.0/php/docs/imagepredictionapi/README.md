# imagePredictionApi

### Available Operations

* [classifyImage](#classifyimage) - Classify an image and saves the result.
* [classifyImageUrlWithNoStoreForm](#classifyimageurlwithnostoreform) - Classify an image url without saving the result.
* [classifyImageUrlWithNoStoreJson](#classifyimageurlwithnostorejson) - Classify an image url without saving the result.
* [classifyImageUrlWithNoStoreRaw](#classifyimageurlwithnostoreraw) - Classify an image url without saving the result.
* [classifyImageUrlForm](#classifyimageurlform) - Classify an image url and saves the result.
* [classifyImageUrlJson](#classifyimageurljson) - Classify an image url and saves the result.
* [classifyImageUrlRaw](#classifyimageurlraw) - Classify an image url and saves the result.
* [classifyImageWithNoStore](#classifyimagewithnostore) - Classify an image without saving the result.
* [detectImage](#detectimage) - Detect objects in an image and saves the result.
* [detectImageUrlWithNoStoreForm](#detectimageurlwithnostoreform) - Detect objects in an image url without saving the result.
* [detectImageUrlWithNoStoreJson](#detectimageurlwithnostorejson) - Detect objects in an image url without saving the result.
* [detectImageUrlWithNoStoreRaw](#detectimageurlwithnostoreraw) - Detect objects in an image url without saving the result.
* [detectImageUrlForm](#detectimageurlform) - Detect objects in an image url and saves the result.
* [detectImageUrlJson](#detectimageurljson) - Detect objects in an image url and saves the result.
* [detectImageUrlRaw](#detectimageurlraw) - Detect objects in an image url and saves the result.
* [detectImageWithNoStore](#detectimagewithnostore) - Detect objects in an image without saving the result.

## classifyImage

Classify an image and saves the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageRequestBodyImageData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassifyImageRequest();
    $request->requestBody = new ClassifyImageRequestBody();
    $request->requestBody->imageData = new ClassifyImageRequestBodyImageData();
    $request->requestBody->imageData->content = 'sapiente';
    $request->requestBody->imageData->imageData = 'quo';
    $request->application = 'odit';
    $request->projectId = 'ddf7cc78-ca1b-4a92-8fc8-16742cb73920';
    $request->publishedName = 'ad';

    $response = $sdk->imagePredictionApi->classifyImage($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classifyImageUrlWithNoStoreForm

Classify an image url without saving the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageUrlWithNoStoreFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassifyImageUrlWithNoStoreFormRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'natus';
    $request->application = 'sed';
    $request->projectId = '9396fea7-596e-4b10-baaa-2352c5955907';
    $request->publishedName = 'culpa';

    $response = $sdk->imagePredictionApi->classifyImageUrlWithNoStoreForm($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classifyImageUrlWithNoStoreJson

Classify an image url without saving the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageUrlWithNoStoreJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassifyImageUrlWithNoStoreJsonRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'doloribus';
    $request->application = 'sapiente';
    $request->projectId = '1a3a2fa9-4677-4392-91aa-52c3f5ad019d';
    $request->publishedName = 'laborum';

    $response = $sdk->imagePredictionApi->classifyImageUrlWithNoStoreJson($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classifyImageUrlWithNoStoreRaw

Classify an image url without saving the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageUrlWithNoStoreRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassifyImageUrlWithNoStoreRawRequest();
    $request->requestBody = 'quasi';
    $request->application = 'reiciendis';
    $request->projectId = 'fe78f097-b007-44f1-9471-b5e6e13b99d4';
    $request->publishedName = 'praesentium';

    $response = $sdk->imagePredictionApi->classifyImageUrlWithNoStoreRaw($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classifyImageUrlForm

Classify an image url and saves the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageUrlFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassifyImageUrlFormRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'rem';
    $request->application = 'voluptates';
    $request->projectId = '1e91e450-ad2a-4bd4-8269-802d502a94bb';
    $request->publishedName = 'labore';

    $response = $sdk->imagePredictionApi->classifyImageUrlForm($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classifyImageUrlJson

Classify an image url and saves the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageUrlJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassifyImageUrlJsonRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'delectus';
    $request->application = 'eum';
    $request->projectId = '3c969e9a-3efa-477d-bb14-cd66ae395efb';
    $request->publishedName = 'provident';

    $response = $sdk->imagePredictionApi->classifyImageUrlJson($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classifyImageUrlRaw

Classify an image url and saves the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageUrlRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassifyImageUrlRawRequest();
    $request->requestBody = 'nam';
    $request->application = 'id';
    $request->projectId = '88f3a669-9707-44ba-8469-b6e214195989';
    $request->publishedName = 'accusantium';

    $response = $sdk->imagePredictionApi->classifyImageUrlRaw($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classifyImageWithNoStore

Classify an image without saving the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageWithNoStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageWithNoStoreRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageWithNoStoreRequestBodyImageData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassifyImageWithNoStoreRequest();
    $request->requestBody = new ClassifyImageWithNoStoreRequestBody();
    $request->requestBody->imageData = new ClassifyImageWithNoStoreRequestBodyImageData();
    $request->requestBody->imageData->content = 'mollitia';
    $request->requestBody->imageData->imageData = 'reiciendis';
    $request->application = 'mollitia';
    $request->projectId = '563e2516-fe4c-48b7-91e5-b7fd2ed02892';
    $request->publishedName = 'sunt';

    $response = $sdk->imagePredictionApi->classifyImageWithNoStore($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectImage

Detect objects in an image and saves the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetectImageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DetectImageRequestBodyImageData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectImageRequest();
    $request->requestBody = new DetectImageRequestBody();
    $request->requestBody->imageData = new DetectImageRequestBodyImageData();
    $request->requestBody->imageData->content = 'quo';
    $request->requestBody->imageData->imageData = 'illum';
    $request->application = 'pariatur';
    $request->projectId = 'c692601f-b576-4b0d-9f0d-30c5fbb25870';
    $request->publishedName = 'quis';

    $response = $sdk->imagePredictionApi->detectImage($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectImageUrlWithNoStoreForm

Detect objects in an image url without saving the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectImageUrlWithNoStoreFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectImageUrlWithNoStoreFormRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'nesciunt';
    $request->application = 'eos';
    $request->projectId = '02c73d5f-e9b9-40c2-8909-b3fe49a8d9cb';
    $request->publishedName = 'delectus';

    $response = $sdk->imagePredictionApi->detectImageUrlWithNoStoreForm($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectImageUrlWithNoStoreJson

Detect objects in an image url without saving the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectImageUrlWithNoStoreJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectImageUrlWithNoStoreJsonRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'quaerat';
    $request->application = 'quos';
    $request->projectId = '633323f9-b77f-43a4-9006-74ebf69280d1';
    $request->publishedName = 'soluta';

    $response = $sdk->imagePredictionApi->detectImageUrlWithNoStoreJson($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectImageUrlWithNoStoreRaw

Detect objects in an image url without saving the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectImageUrlWithNoStoreRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectImageUrlWithNoStoreRawRequest();
    $request->requestBody = 'dolorum';
    $request->application = 'iusto';
    $request->projectId = '7a89ebf7-37ae-4420-bce5-e6a95d8a0d44';
    $request->publishedName = 'vel';

    $response = $sdk->imagePredictionApi->detectImageUrlWithNoStoreRaw($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectImageUrlForm

Detect objects in an image url and saves the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectImageUrlFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectImageUrlFormRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'quod';
    $request->application = 'officiis';
    $request->projectId = '2af7a73c-f3be-4453-b870-b326b5a73429';
    $request->publishedName = 'maxime';

    $response = $sdk->imagePredictionApi->detectImageUrlForm($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectImageUrlJson

Detect objects in an image url and saves the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectImageUrlJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectImageUrlJsonRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'pariatur';
    $request->application = 'soluta';
    $request->projectId = '1a8422bb-679d-4232-a715-bf0cbb1e31b8';
    $request->publishedName = 'tempore';

    $response = $sdk->imagePredictionApi->detectImageUrlJson($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectImageUrlRaw

Detect objects in an image url and saves the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectImageUrlRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectImageUrlRawRequest();
    $request->requestBody = 'cupiditate';
    $request->application = 'aperiam';
    $request->projectId = 'f3443a11-08e0-4adc-b4b9-21879fce953f';
    $request->publishedName = 'voluptate';

    $response = $sdk->imagePredictionApi->detectImageUrlRaw($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectImageWithNoStore

Detect objects in an image without saving the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectImageWithNoStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetectImageWithNoStoreRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DetectImageWithNoStoreRequestBodyImageData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectImageWithNoStoreRequest();
    $request->requestBody = new DetectImageWithNoStoreRequestBody();
    $request->requestBody->imageData = new DetectImageWithNoStoreRequestBodyImageData();
    $request->requestBody->imageData->content = 'consectetur';
    $request->requestBody->imageData->imageData = 'vero';
    $request->application = 'tenetur';
    $request->projectId = '7fbc7abd-74dd-439c-8f5d-2cff7c70a456';
    $request->publishedName = 'aspernatur';

    $response = $sdk->imagePredictionApi->detectImageWithNoStore($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
