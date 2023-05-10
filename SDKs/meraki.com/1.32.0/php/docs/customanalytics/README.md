# customAnalytics

### Available Operations

* [createOrganizationCameraCustomAnalyticsArtifact](#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [deleteOrganizationCameraCustomAnalyticsArtifact](#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [getDeviceCameraCustomAnalytics](#getdevicecameracustomanalytics) - Return custom analytics settings for a camera
* [getOrganizationCameraCustomAnalyticsArtifact](#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [getOrganizationCameraCustomAnalyticsArtifacts](#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts
* [updateDeviceCameraCustomAnalytics](#updatedevicecameracustomanalytics) - Update custom analytics settings for a camera

## createOrganizationCameraCustomAnalyticsArtifact

Create custom analytics artifact. Returns an artifact upload URL with expiry time. Upload the artifact file with a put request to the returned upload URL before its expiry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationCameraCustomAnalyticsArtifactRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationCameraCustomAnalyticsArtifactRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationCameraCustomAnalyticsArtifactRequest();
    $request->requestBody = new CreateOrganizationCameraCustomAnalyticsArtifactRequestBody();
    $request->requestBody->name = 'Sherry Mosciski';
    $request->organizationId = 'sint';

    $response = $sdk->customAnalytics->createOrganizationCameraCustomAnalyticsArtifact($request);

    if ($response->createOrganizationCameraCustomAnalyticsArtifact201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationCameraCustomAnalyticsArtifact

Delete Custom Analytics Artifact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationCameraCustomAnalyticsArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationCameraCustomAnalyticsArtifactRequest();
    $request->artifactId = 'eos';
    $request->organizationId = 'nisi';

    $response = $sdk->customAnalytics->deleteOrganizationCameraCustomAnalyticsArtifact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraCustomAnalytics

Return custom analytics settings for a camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraCustomAnalyticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraCustomAnalyticsRequest();
    $request->serial = 'commodi';

    $response = $sdk->customAnalytics->getDeviceCameraCustomAnalytics($request);

    if ($response->getDeviceCameraCustomAnalytics200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationCameraCustomAnalyticsArtifact

Get Custom Analytics Artifact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCameraCustomAnalyticsArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationCameraCustomAnalyticsArtifactRequest();
    $request->artifactId = 'impedit';
    $request->organizationId = 'facilis';

    $response = $sdk->customAnalytics->getOrganizationCameraCustomAnalyticsArtifact($request);

    if ($response->getOrganizationCameraCustomAnalyticsArtifact200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationCameraCustomAnalyticsArtifacts

List Custom Analytics Artifacts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCameraCustomAnalyticsArtifactsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationCameraCustomAnalyticsArtifactsRequest();
    $request->organizationId = 'temporibus';

    $response = $sdk->customAnalytics->getOrganizationCameraCustomAnalyticsArtifacts($request);

    if ($response->getOrganizationCameraCustomAnalyticsArtifacts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCameraCustomAnalytics

Update custom analytics settings for a camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraCustomAnalyticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraCustomAnalyticsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraCustomAnalyticsRequestBodyParameters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCameraCustomAnalyticsRequest();
    $request->requestBody = new UpdateDeviceCameraCustomAnalyticsRequestBody();
    $request->requestBody->artifactId = 'error';
    $request->requestBody->enabled = false;
    $request->requestBody->parameters = [
        new UpdateDeviceCameraCustomAnalyticsRequestBodyParameters(),
        new UpdateDeviceCameraCustomAnalyticsRequestBodyParameters(),
    ];
    $request->serial = 'delectus';

    $response = $sdk->customAnalytics->updateDeviceCameraCustomAnalytics($request);

    if ($response->updateDeviceCameraCustomAnalytics200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
