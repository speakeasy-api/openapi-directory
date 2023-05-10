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
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerProfileCreateCustomerProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomerProfileCreateCustomerProfileRequest();
    $request->email = 'Larue_Rau85@yahoo.com';
    $request->friendlyName = 'corrupti';
    $request->policySid = 'illum';
    $request->statusCallback = 'http://physical-pegboard.info';

    $requestSecurity = new CreateCustomerProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createCustomerProfile($request, $requestSecurity);

    if ($response->trusthubV1CustomerProfile !== null) {
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

* [createCustomerProfile](docs/sdk/README.md#createcustomerprofile) - Create a new Customer-Profile.
* [createCustomerProfileChannelEndpointAssignment](docs/sdk/README.md#createcustomerprofilechannelendpointassignment) - Create a new Assigned Item.
* [createCustomerProfileEntityAssignment](docs/sdk/README.md#createcustomerprofileentityassignment) - Create a new Assigned Item.
* [createCustomerProfileEvaluation](docs/sdk/README.md#createcustomerprofileevaluation) - Create a new Evaluation
* [createEndUser](docs/sdk/README.md#createenduser) - Create a new End User.
* [createSupportingDocument](docs/sdk/README.md#createsupportingdocument) - Create a new Supporting Document.
* [createTrustProduct](docs/sdk/README.md#createtrustproduct) - Create a new Customer-Profile.
* [createTrustProductChannelEndpointAssignment](docs/sdk/README.md#createtrustproductchannelendpointassignment) - Create a new Assigned Item.
* [createTrustProductEntityAssignment](docs/sdk/README.md#createtrustproductentityassignment) - Create a new Assigned Item.
* [createTrustProductEvaluation](docs/sdk/README.md#createtrustproductevaluation) - Create a new Evaluation
* [deleteCustomerProfile](docs/sdk/README.md#deletecustomerprofile) - Delete a specific Customer-Profile.
* [deleteCustomerProfileChannelEndpointAssignment](docs/sdk/README.md#deletecustomerprofilechannelendpointassignment) - Remove an Assignment Item Instance.
* [deleteCustomerProfileEntityAssignment](docs/sdk/README.md#deletecustomerprofileentityassignment) - Remove an Assignment Item Instance.
* [deleteEndUser](docs/sdk/README.md#deleteenduser) - Delete a specific End User.
* [deleteSupportingDocument](docs/sdk/README.md#deletesupportingdocument) - Delete a specific Supporting Document.
* [deleteTrustProduct](docs/sdk/README.md#deletetrustproduct) - Delete a specific Customer-Profile.
* [deleteTrustProductChannelEndpointAssignment](docs/sdk/README.md#deletetrustproductchannelendpointassignment) - Remove an Assignment Item Instance.
* [deleteTrustProductEntityAssignment](docs/sdk/README.md#deletetrustproductentityassignment) - Remove an Assignment Item Instance.
* [fetchCustomerProfile](docs/sdk/README.md#fetchcustomerprofile) - Fetch a specific Customer-Profile instance.
* [fetchCustomerProfileChannelEndpointAssignment](docs/sdk/README.md#fetchcustomerprofilechannelendpointassignment) - Fetch specific Assigned Item Instance.
* [fetchCustomerProfileEntityAssignment](docs/sdk/README.md#fetchcustomerprofileentityassignment) - Fetch specific Assigned Item Instance.
* [fetchCustomerProfileEvaluation](docs/sdk/README.md#fetchcustomerprofileevaluation) - Fetch specific Evaluation Instance.
* [fetchEndUser](docs/sdk/README.md#fetchenduser) - Fetch specific End User Instance.
* [fetchEndUserType](docs/sdk/README.md#fetchendusertype) - Fetch a specific End-User Type Instance.
* [fetchPolicies](docs/sdk/README.md#fetchpolicies) - Fetch specific Policy Instance.
* [fetchSupportingDocument](docs/sdk/README.md#fetchsupportingdocument) - Fetch specific Supporting Document Instance.
* [fetchSupportingDocumentType](docs/sdk/README.md#fetchsupportingdocumenttype) - Fetch a specific Supporting Document Type Instance.
* [fetchTrustProduct](docs/sdk/README.md#fetchtrustproduct) - Fetch a specific Customer-Profile instance.
* [fetchTrustProductChannelEndpointAssignment](docs/sdk/README.md#fetchtrustproductchannelendpointassignment) - Fetch specific Assigned Item Instance.
* [fetchTrustProductEntityAssignment](docs/sdk/README.md#fetchtrustproductentityassignment) - Fetch specific Assigned Item Instance.
* [fetchTrustProductEvaluation](docs/sdk/README.md#fetchtrustproductevaluation) - Fetch specific Evaluation Instance.
* [listCustomerProfile](docs/sdk/README.md#listcustomerprofile) - Retrieve a list of all Customer-Profiles for an account.
* [listCustomerProfileChannelEndpointAssignment](docs/sdk/README.md#listcustomerprofilechannelendpointassignment) - Retrieve a list of all Assigned Items for an account.
* [listCustomerProfileEntityAssignment](docs/sdk/README.md#listcustomerprofileentityassignment) - Retrieve a list of all Assigned Items for an account.
* [listCustomerProfileEvaluation](docs/sdk/README.md#listcustomerprofileevaluation) - Retrieve a list of Evaluations associated to the customer_profile resource.
* [listEndUser](docs/sdk/README.md#listenduser) - Retrieve a list of all End User for an account.
* [listEndUserType](docs/sdk/README.md#listendusertype) - Retrieve a list of all End-User Types.
* [listPolicies](docs/sdk/README.md#listpolicies) - Retrieve a list of all Policys.
* [listSupportingDocument](docs/sdk/README.md#listsupportingdocument) - Retrieve a list of all Supporting Document for an account.
* [listSupportingDocumentType](docs/sdk/README.md#listsupportingdocumenttype) - Retrieve a list of all Supporting Document Types.
* [listTrustProduct](docs/sdk/README.md#listtrustproduct) - Retrieve a list of all Customer-Profiles for an account.
* [listTrustProductChannelEndpointAssignment](docs/sdk/README.md#listtrustproductchannelendpointassignment) - Retrieve a list of all Assigned Items for an account.
* [listTrustProductEntityAssignment](docs/sdk/README.md#listtrustproductentityassignment) - Retrieve a list of all Assigned Items for an account.
* [listTrustProductEvaluation](docs/sdk/README.md#listtrustproductevaluation) - Retrieve a list of Evaluations associated to the trust_product resource.
* [updateCustomerProfile](docs/sdk/README.md#updatecustomerprofile) - Updates a Customer-Profile in an account.
* [updateEndUser](docs/sdk/README.md#updateenduser) - Update an existing End User.
* [updateSupportingDocument](docs/sdk/README.md#updatesupportingdocument) - Update an existing Supporting Document.
* [updateTrustProduct](docs/sdk/README.md#updatetrustproduct) - Updates a Customer-Profile in an account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
