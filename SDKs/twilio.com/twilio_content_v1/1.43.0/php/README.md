# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContentRequest();
    $request->sid = 'corrupti';

    $requestSecurity = new DeleteContentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->deleteContent($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [deleteContent](docs/sdk/README.md#deletecontent) - Deletes a Content resource
* [fetchApprovalFetch](docs/sdk/README.md#fetchapprovalfetch) - Fetch a Content resource's approval status by its unique Content Sid
* [fetchContent](docs/sdk/README.md#fetchcontent) - Fetch a Content resource by its unique Content Sid
* [listContent](docs/sdk/README.md#listcontent) - Retrieve a list of Contents belonging to the account used to make the request
* [listContentAndApprovals](docs/sdk/README.md#listcontentandapprovals) - Retrieve a list of Contents with approval statuses belonging to the account used to make the request
* [listLegacyContent](docs/sdk/README.md#listlegacycontent) - Retrieve a list of Legacy Contents belonging to the account used to make the request
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
