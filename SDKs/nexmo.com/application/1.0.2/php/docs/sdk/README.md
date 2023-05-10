# SDK

## Overview

<div class="Vlt-callout Vlt-callout--critical"> <i></i> <div class="Vlt-callout__content">
  <h4>Applications V1 is deprecated</h4>
  This version of the API has been deprecated. Please use <a href="/api/application.v2">version 2</a> going forwards
</div> </div>
A Nexmo application contains the security and configuration information you need to connect to Nexmo endpoints and easily use our products.

<https://developer.nexmo.com/api/developer/application>
### Available Operations

* [createApplication](#createapplication) - Create Application
* [deleteApplication](#deleteapplication) - Destroy Application
* [retrieveApplication](#retrieveapplication) - Retrieve Application
* [retrieveApplications](#retrieveapplications) - Retrieve all Applications
* [updateApplication](#updateapplication) - Update Application

## createApplication

You use a `POST` request to create a new application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequestBody();
    $request->answerMethod = 'GET';
    $request->answerUrl = 'https://example.com/webhooks/answer';
    $request->apiKey = 'ap1k3y';
    $request->apiSecret = '230e6cf0709417176df1b4fc1e083adc';
    $request->eventMethod = 'POST';
    $request->eventUrl = 'https://example.com/webhooks/event';
    $request->inboundMethod = 'POST';
    $request->inboundUrl = 'https://example.com/webhooks/inbound';
    $request->name = 'My Application';
    $request->statusMethod = 'POST';
    $request->statusUrl = 'https://example.com/webhooks/status';
    $request->type = CreateApplicationRequestBodyTypeEnum::VOICE;

    $response = $sdk->sdk->createApplication($request);

    if ($response->applicationCreated !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplication

You use a `DELETE` request to delete a single application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationRequest();
    $request->appId = 'corrupti';

    $response = $sdk->sdk->deleteApplication($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveApplication

You use a `GET` request to retrieve details about a single application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveApplicationRequest();
    $request->apiKey = 'provident';
    $request->apiSecret = 'distinctio';
    $request->appId = 'quibusdam';

    $response = $sdk->sdk->retrieveApplication($request);

    if ($response->application !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveApplications

You use a `GET` request to retrieve details of all applications associated with your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveApplicationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveApplicationsRequest();
    $request->apiKey = 'unde';
    $request->apiSecret = 'nulla';
    $request->pageIndex = 544883;
    $request->pageSize = 847252;

    $response = $sdk->sdk->retrieveApplications($request);

    if ($response->applications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplication

You use a `PUT` request to update an existing application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationRequest();
    $request->requestBody = new UpdateApplicationRequestBody();
    $request->requestBody->answerMethod = 'GET';
    $request->requestBody->answerUrl = 'https://example.com/webhooks/answer';
    $request->requestBody->apiKey = 'ap1k3y';
    $request->requestBody->apiSecret = '230e6cf0709417176df1b4fc1e083adc';
    $request->requestBody->eventMethod = 'POST';
    $request->requestBody->eventUrl = 'https://example.com/webhooks/event';
    $request->requestBody->name = 'UpdatedApplication';
    $request->requestBody->type = UpdateApplicationRequestBodyTypeEnum::VOICE;
    $request->appId = 'vel';

    $response = $sdk->sdk->updateApplication($request);

    if ($response->application !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
