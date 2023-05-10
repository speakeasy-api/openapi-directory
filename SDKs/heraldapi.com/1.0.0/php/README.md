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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationsApplicationIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationsApplicationIdRequest();
    $request->applicationId = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';

    $response = $sdk->applications->getApplicationsApplicationId($request);

    if ($response->getApplicationsApplicationId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [applications](docs/applications/README.md)

* [getApplicationsApplicationId](docs/applications/README.md#getapplicationsapplicationid) - /applications/{application_id}
* [postApplications](docs/applications/README.md#postapplications) - /applications
* [putApplicationsApplicationId](docs/applications/README.md#putapplicationsapplicationid) - /applications/{application_id}

### [auth](docs/auth/README.md)

* [postAuthToken](docs/auth/README.md#postauthtoken) - /auth/token

### [classifications](docs/classifications/README.md)

* [getClassifications](docs/classifications/README.md#getclassifications) - /classifications/naics_index_entries

### [coverageParameters](docs/coverageparameters/README.md)

* [getCoverageParameters](docs/coverageparameters/README.md#getcoverageparameters) - /coverage_parameters

### [files](docs/files/README.md)

* [getFilesFileId](docs/files/README.md#getfilesfileid) - /files/{file_id}
* [postFilesFileIdGetTemporaryLink](docs/files/README.md#postfilesfileidgettemporarylink) - /files/{file_id}/get_temporary_link

### [institutions](docs/institutions/README.md)

* [getInstitutions](docs/institutions/README.md#getinstitutions) - /institutions

### [policies](docs/policies/README.md)

* [getPoliciesPolicyId](docs/policies/README.md#getpoliciespolicyid) - /policies/{policy_id}
* [postPolicies](docs/policies/README.md#postpolicies) - /policies

### [producers](docs/producers/README.md)

* [getProducers](docs/producers/README.md#getproducers) - /producers

### [products](docs/products/README.md)

* [getProducts](docs/products/README.md#getproducts) - /products

### [quotes](docs/quotes/README.md)

* [getQuotesQuoteId](docs/quotes/README.md#getquotesquoteid) - /quotes/{quote_id}

### [riskParameters](docs/riskparameters/README.md)

* [getRiskParameters](docs/riskparameters/README.md#getriskparameters) - /risk_parameters

### [submissions](docs/submissions/README.md)

* [getSubmissionsSubmissionId](docs/submissions/README.md#getsubmissionssubmissionid) - /submissions/{submission_id}
* [postSubmissions](docs/submissions/README.md#postsubmissions) - /submissions

### [welcomeAndHealthCheck](docs/welcomeandhealthcheck/README.md)

* [get](docs/welcomeandhealthcheck/README.md#get) - /
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
