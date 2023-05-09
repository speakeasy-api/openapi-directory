# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/letmc.com/customer/v2-customer/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BranchController.BranchControllerGetBranches(ctx, operations.BranchControllerGetBranchesRequest{
        Count: 548814,
        Offset: 592845,
        ShortName: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchModelResults != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [BranchController](docs/branchcontroller/README.md)

* [BranchControllerGetBranches](docs/branchcontroller/README.md#branchcontrollergetbranches) - All branches defined for a company
* [GetV2CustomerShortNameBranchBranchesBranchID](docs/branchcontroller/README.md#getv2customershortnamebranchbranchesbranchid) - Get a specific branch given its unique Object ID (OID)

### [LandlordController](docs/landlordcontroller/README.md)

* [LandlordControllerCreateMaintenancePreference](docs/landlordcontroller/README.md#landlordcontrollercreatemaintenancepreference) - Post tenancy maintenance preferences:-
* [LandlordControllerGetAccounts](docs/landlordcontroller/README.md#landlordcontrollergetaccounts) - Get the accounting details for the landlord.
* [LandlordControllerGetDocument](docs/landlordcontroller/README.md#landlordcontrollergetdocument) - Download a Document
* [LandlordControllerGetInvetoryReport](docs/landlordcontroller/README.md#landlordcontrollergetinvetoryreport) - Generate a Inventory PDF for a tenancy
* [LandlordControllerGetInvoice](docs/landlordcontroller/README.md#landlordcontrollergetinvoice) - Get an invoice pdf belonging to the landlord.
* [LandlordControllerGetLandlordCrmEntries](docs/landlordcontroller/README.md#landlordcontrollergetlandlordcrmentries) - Retrieve landlord's CRM ID
* [LandlordControllerGetMaintenanceJobs](docs/landlordcontroller/README.md#landlordcontrollergetmaintenancejobs) - Get Active maintenance jobs.
* [LandlordControllerGetProfitLossReport](docs/landlordcontroller/README.md#landlordcontrollergetprofitlossreport) - Generate a Profit and Loss Report
* [LandlordControllerGetRentArrears](docs/landlordcontroller/README.md#landlordcontrollergetrentarrears) - Rent Arrears
* [LandlordControllerGetSASReport](docs/landlordcontroller/README.md#landlordcontrollergetsasreport) - Generate a Self Assessment Tax Report
* [LandlordControllerGetSettings](docs/landlordcontroller/README.md#landlordcontrollergetsettings) - Get contact details of all linked landlords.
* [LandlordControllerGetSummaryDetails](docs/landlordcontroller/README.md#landlordcontrollergetsummarydetails) - Get the summary details for the landlord.
* [LandlordControllerGetTenancy](docs/landlordcontroller/README.md#landlordcontrollergettenancy) - Get tenancy details.
* [LandlordControllerGetTenancyAgreementReport](docs/landlordcontroller/README.md#landlordcontrollergettenancyagreementreport) - Generate a Tenancy Agreement Copy (PDF)

### [PhotoController](docs/photocontroller/README.md)

* [PhotoControllerGetPhotoDownload](docs/photocontroller/README.md#photocontrollergetphotodownload) - Downloads the photo of a property given the photo ID.

### [PropertyController](docs/propertycontroller/README.md)

* [PropertyControllerGetPropertiesPhotos](docs/propertycontroller/README.md#propertycontrollergetpropertiesphotos) - A collection showing all the photos linked to a specific block, property or room

### [SessionController](docs/sessioncontroller/README.md)

* [SessionControllerChangePassword](docs/sessioncontroller/README.md#sessioncontrollerchangepassword) - Change the password of a customer given their existing and new password.
* [SessionControllerCreateLandlordLogin](docs/sessioncontroller/README.md#sessioncontrollercreatelandlordlogin) - Send a request to the in-tray to create a landlord login.
* [SessionControllerGetSessionInfo](docs/sessioncontroller/README.md#sessioncontrollergetsessioninfo) - Gets information about the currently logged on customer.
* [SessionControllerLogin](docs/sessioncontroller/README.md#sessioncontrollerlogin) - Login as a customer given their username and password.
* [SessionControllerLogout](docs/sessioncontroller/README.md#sessioncontrollerlogout) - Logout a customer previously logged in via the Login endpoint.
* [SessionControllerResetPassword](docs/sessioncontroller/README.md#sessioncontrollerresetpassword) - Reset the customer's password. An email will be sent out to reset.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
