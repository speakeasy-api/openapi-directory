# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BranchControllerGetBranchesRequest;
import org.openapis.openapi.models.operations.BranchControllerGetBranchesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BranchControllerGetBranchesRequest req = new BranchControllerGetBranchesRequest() {{
                count = 548814;
                offset = 592845;
                shortName = "distinctio";
            }}            

            BranchControllerGetBranchesResponse res = sdk.branchController.branchControllerGetBranches(req);

            if (res.branchModelResults.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### branchController

* `branchControllerGetBranches` - All branches defined for a company
* `getV2CustomerShortNameBranchBranchesBranchID` - Get a specific branch given its unique Object ID (OID)

### landlordController

* `landlordControllerCreateMaintenancePreference` - Post tenancy maintenance preferences:-
* `landlordControllerGetAccounts` - Get the accounting details for the landlord.
* `landlordControllerGetDocument` - Download a Document
* `landlordControllerGetInvetoryReport` - Generate a Inventory PDF for a tenancy
* `landlordControllerGetInvoice` - Get an invoice pdf belonging to the landlord.
* `landlordControllerGetLandlordCrmEntries` - Retrieve landlord's CRM ID
* `landlordControllerGetMaintenanceJobs` - Get Active maintenance jobs.
* `landlordControllerGetProfitLossReport` - Generate a Profit and Loss Report
* `landlordControllerGetRentArrears` - Rent Arrears
* `landlordControllerGetSASReport` - Generate a Self Assessment Tax Report
* `landlordControllerGetSettings` - Get contact details of all linked landlords.
* `landlordControllerGetSummaryDetails` - Get the summary details for the landlord.
* `landlordControllerGetTenancy` - Get tenancy details.
* `landlordControllerGetTenancyAgreementReport` - Generate a Tenancy Agreement Copy (PDF)

### photoController

* `photoControllerGetPhotoDownload` - Downloads the photo of a property given the photo ID.

### propertyController

* `propertyControllerGetPropertiesPhotos` - A collection showing all the photos linked to a specific block, property or room

### sessionController

* `sessionControllerChangePassword` - Change the password of a customer given their existing and new password.
* `sessionControllerCreateLandlordLogin` - Send a request to the in-tray to create a landlord login.
* `sessionControllerGetSessionInfo` - Gets information about the currently logged on customer.
* `sessionControllerLogin` - Login as a customer given their username and password.
* `sessionControllerLogout` - Logout a customer previously logged in via the Login endpoint.
* `sessionControllerResetPassword` - Reset the customer's password. An email will be sent out to reset.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
