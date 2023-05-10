# apiSpecification

### Available Operations

* [deleteAPISpecification](#deleteapispecification) - Delete an API specification in ReadMe
* [getAPISpecification](#getapispecification) - Get API specification metadata
* [updateAPISpecification](#updateapispecification) - Update an API specification in ReadMe
* [uploadAPISpecification](#uploadapispecification) - Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github

## deleteAPISpecification

Delete an API specification in ReadMe

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAPISpecificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAPISpecificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAPISpecificationRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $requestSecurity = new DeleteAPISpecificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apiSpecification->deleteAPISpecification($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAPISpecification

Get API specification metadata

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAPISpecificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAPISpecificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAPISpecificationRequest();
    $request->page = 774234;
    $request->perPage = 736918;
    $request->xReadmeVersion = 'esse';

    $requestSecurity = new GetAPISpecificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apiSpecification->getAPISpecification($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAPISpecification

Update an API specification in ReadMe

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAPISpecificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAPISpecificationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAPISpecificationRequestBodySpec;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAPISpecificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAPISpecificationRequest();
    $request->requestBody = new UpdateAPISpecificationRequestBody();
    $request->requestBody->spec = new UpdateAPISpecificationRequestBodySpec();
    $request->requestBody->spec->content = 'ipsum';
    $request->requestBody->spec->spec = 'excepturi';
    $request->id = '20592939-6fea-4759-aeb1-0faaa2352c59';

    $requestSecurity = new UpdateAPISpecificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apiSpecification->updateAPISpecification($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadAPISpecification

Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UploadAPISpecificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UploadAPISpecificationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UploadAPISpecificationRequestBodySpec;
use \OpenAPI\OpenAPI\Models\Operations\UploadAPISpecificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadAPISpecificationRequest();
    $request->requestBody = new UploadAPISpecificationRequestBody();
    $request->requestBody->spec = new UploadAPISpecificationRequestBodySpec();
    $request->requestBody->spec->content = 'nemo';
    $request->requestBody->spec->spec = 'minima';
    $request->xReadmeVersion = 'excepturi';

    $requestSecurity = new UploadAPISpecificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apiSpecification->uploadAPISpecification($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
