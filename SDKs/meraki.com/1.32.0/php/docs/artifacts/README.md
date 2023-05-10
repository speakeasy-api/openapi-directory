# artifacts

### Available Operations

* [createOrganizationCameraCustomAnalyticsArtifact](#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [deleteOrganizationCameraCustomAnalyticsArtifact](#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [getOrganizationCameraCustomAnalyticsArtifact](#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [getOrganizationCameraCustomAnalyticsArtifacts](#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts

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
    $request->requestBody->name = 'Peter Prosacco';
    $request->organizationId = 'voluptatem';

    $response = $sdk->artifacts->createOrganizationCameraCustomAnalyticsArtifact($request);

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
    $request->artifactId = 'sapiente';
    $request->organizationId = 'officiis';

    $response = $sdk->artifacts->deleteOrganizationCameraCustomAnalyticsArtifact($request);

    if ($response->statusCode === 200) {
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
    $request->artifactId = 'architecto';
    $request->organizationId = 'fuga';

    $response = $sdk->artifacts->getOrganizationCameraCustomAnalyticsArtifact($request);

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
    $request->organizationId = 'pariatur';

    $response = $sdk->artifacts->getOrganizationCameraCustomAnalyticsArtifacts($request);

    if ($response->getOrganizationCameraCustomAnalyticsArtifacts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
