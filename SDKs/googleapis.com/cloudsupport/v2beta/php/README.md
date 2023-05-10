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
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCaseClassificationsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCaseClassificationsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsupportCaseClassificationsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->pageSize = 847252;
    $request->pageToken = 'vel';
    $request->prettyPrint = false;
    $request->query = 'error';
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new CloudsupportCaseClassificationsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->caseClassifications->cloudsupportCaseClassificationsSearch($request, $requestSecurity);

    if ($response->searchCaseClassificationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [caseClassifications](docs/caseclassifications/README.md)

* [cloudsupportCaseClassificationsSearch](docs/caseclassifications/README.md#cloudsupportcaseclassificationssearch) - Retrieve valid classifications to be used when creating a support case. The classications are hierarchical, with each classification containing all levels of the hierarchy, separated by " > ". For example "Technical Issue > Compute > Compute Engine".

### [cases](docs/cases/README.md)

* [cloudsupportCasesAttachmentsList](docs/cases/README.md#cloudsupportcasesattachmentslist) - Retrieve all attachments associated with a support case.
* [cloudsupportCasesClose](docs/cases/README.md#cloudsupportcasesclose) - Close the specified case.
* [cloudsupportCasesCommentsCreate](docs/cases/README.md#cloudsupportcasescommentscreate) - Add a new comment to the specified Case. The comment object must have the following fields set: body.
* [cloudsupportCasesCommentsList](docs/cases/README.md#cloudsupportcasescommentslist) - Retrieve all Comments associated with the Case object.
* [cloudsupportCasesCreate](docs/cases/README.md#cloudsupportcasescreate) - Create a new case and associate it with the given Google Cloud Resource. The case object must have the following fields set: `display_name`, `description`, `classification`, and `priority`.
* [cloudsupportCasesEscalate](docs/cases/README.md#cloudsupportcasesescalate) - Escalate a case. Escalating a case will initiate the Google Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.
* [cloudsupportCasesGet](docs/cases/README.md#cloudsupportcasesget) - Retrieve the specified case.
* [cloudsupportCasesList](docs/cases/README.md#cloudsupportcaseslist) - Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.
* [cloudsupportCasesPatch](docs/cases/README.md#cloudsupportcasespatch) - Update the specified case. Only a subset of fields can be updated.
* [cloudsupportCasesSearch](docs/cases/README.md#cloudsupportcasessearch) - Search cases using the specified query.

### [media](docs/media/README.md)

* [cloudsupportMediaDownload](docs/media/README.md#cloudsupportmediadownload) - Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.
* [cloudsupportMediaUpload](docs/media/README.md#cloudsupportmediaupload) - Create a file attachment on a case or Cloud resource. The attachment object must have the following fields set: filename.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
