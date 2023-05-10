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
use \OpenAPI\OpenAPI\Models\Operations\BranchControllerGetBranchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BranchControllerGetBranchesRequest();
    $request->count = 548814;
    $request->offset = 592845;
    $request->shortName = 'distinctio';

    $response = $sdk->branchController->branchControllerGetBranches($request);

    if ($response->branchModelResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [branchController](docs/branchcontroller/README.md)

* [branchControllerGetBranches](docs/branchcontroller/README.md#branchcontrollergetbranches) - All branches defined for a company
* [getV2CustomerShortNameBranchBranchesBranchID](docs/branchcontroller/README.md#getv2customershortnamebranchbranchesbranchid) - Get a specific branch given its unique Object ID (OID)

### [landlordController](docs/landlordcontroller/README.md)

* [landlordControllerCreateMaintenancePreference](docs/landlordcontroller/README.md#landlordcontrollercreatemaintenancepreference) - Post tenancy maintenance preferences:-
* [landlordControllerGetAccounts](docs/landlordcontroller/README.md#landlordcontrollergetaccounts) - Get the accounting details for the landlord.
* [landlordControllerGetDocument](docs/landlordcontroller/README.md#landlordcontrollergetdocument) - Download a Document
* [landlordControllerGetInvetoryReport](docs/landlordcontroller/README.md#landlordcontrollergetinvetoryreport) - Generate a Inventory PDF for a tenancy
* [landlordControllerGetInvoice](docs/landlordcontroller/README.md#landlordcontrollergetinvoice) - Get an invoice pdf belonging to the landlord.
* [landlordControllerGetLandlordCrmEntries](docs/landlordcontroller/README.md#landlordcontrollergetlandlordcrmentries) - Retrieve landlord's CRM ID
* [landlordControllerGetMaintenanceJobs](docs/landlordcontroller/README.md#landlordcontrollergetmaintenancejobs) - Get Active maintenance jobs.
* [landlordControllerGetProfitLossReport](docs/landlordcontroller/README.md#landlordcontrollergetprofitlossreport) - Generate a Profit and Loss Report
* [landlordControllerGetRentArrears](docs/landlordcontroller/README.md#landlordcontrollergetrentarrears) - Rent Arrears
* [landlordControllerGetSASReport](docs/landlordcontroller/README.md#landlordcontrollergetsasreport) - Generate a Self Assessment Tax Report
* [landlordControllerGetSettings](docs/landlordcontroller/README.md#landlordcontrollergetsettings) - Get contact details of all linked landlords.
* [landlordControllerGetSummaryDetails](docs/landlordcontroller/README.md#landlordcontrollergetsummarydetails) - Get the summary details for the landlord.
* [landlordControllerGetTenancy](docs/landlordcontroller/README.md#landlordcontrollergettenancy) - Get tenancy details.
* [landlordControllerGetTenancyAgreementReport](docs/landlordcontroller/README.md#landlordcontrollergettenancyagreementreport) - Generate a Tenancy Agreement Copy (PDF)

### [photoController](docs/photocontroller/README.md)

* [photoControllerGetPhotoDownload](docs/photocontroller/README.md#photocontrollergetphotodownload) - Downloads the photo of a property given the photo ID.

### [propertyController](docs/propertycontroller/README.md)

* [propertyControllerGetPropertiesPhotos](docs/propertycontroller/README.md#propertycontrollergetpropertiesphotos) - A collection showing all the photos linked to a specific block, property or room

### [sessionController](docs/sessioncontroller/README.md)

* [sessionControllerChangePassword](docs/sessioncontroller/README.md#sessioncontrollerchangepassword) - Change the password of a customer given their existing and new password.
* [sessionControllerCreateLandlordLogin](docs/sessioncontroller/README.md#sessioncontrollercreatelandlordlogin) - Send a request to the in-tray to create a landlord login.
* [sessionControllerGetSessionInfo](docs/sessioncontroller/README.md#sessioncontrollergetsessioninfo) - Gets information about the currently logged on customer.
* [sessionControllerLogin](docs/sessioncontroller/README.md#sessioncontrollerlogin) - Login as a customer given their username and password.
* [sessionControllerLogout](docs/sessioncontroller/README.md#sessioncontrollerlogout) - Logout a customer previously logged in via the Login endpoint.
* [sessionControllerResetPassword](docs/sessioncontroller/README.md#sessioncontrollerresetpassword) - Reset the customer's password. An email will be sent out to reset.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
