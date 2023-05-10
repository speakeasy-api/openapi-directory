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
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsComputeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsComputeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EssentialcontactsProjectsContactsComputeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->notificationCategories = [
        EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum::PRODUCT_UPDATES,
        EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum::SECURITY,
        EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum::BILLING,
    ];
    $request->oauthToken = 'deserunt';
    $request->pageSize = 384382;
    $request->pageToken = 'iure';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new EssentialcontactsProjectsContactsComputeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->essentialcontactsProjectsContactsCompute($request, $requestSecurity);

    if ($response->googleCloudEssentialcontactsV1ComputeContactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [essentialcontactsProjectsContactsCompute](docs/projects/README.md#essentialcontactsprojectscontactscompute) - Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
* [essentialcontactsProjectsContactsCreate](docs/projects/README.md#essentialcontactsprojectscontactscreate) - Adds a new contact for a resource.
* [essentialcontactsProjectsContactsDelete](docs/projects/README.md#essentialcontactsprojectscontactsdelete) - Deletes a contact.
* [essentialcontactsProjectsContactsGet](docs/projects/README.md#essentialcontactsprojectscontactsget) - Gets a single contact.
* [essentialcontactsProjectsContactsList](docs/projects/README.md#essentialcontactsprojectscontactslist) - Lists the contacts that have been set on a resource.
* [essentialcontactsProjectsContactsPatch](docs/projects/README.md#essentialcontactsprojectscontactspatch) - Updates a contact. Note: A contact's email address cannot be changed.
* [essentialcontactsProjectsContactsSendTestMessage](docs/projects/README.md#essentialcontactsprojectscontactssendtestmessage) - Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
