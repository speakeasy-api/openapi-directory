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
import org.openapis.openapi.models.operations.CreateBundleCreateBundleRequest;
import org.openapis.openapi.models.operations.CreateBundleResponse;
import org.openapis.openapi.models.operations.CreateBundleSecurity;
import org.openapis.openapi.models.shared.BundleEnumEndUserTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBundleCreateBundleRequest req = new CreateBundleCreateBundleRequest("corrupti", "provident") {{
                endUserType = BundleEnumEndUserTypeEnum.BUSINESS;
                isoCountry = "quibusdam";
                numberType = "unde";
                regulationSid = "nulla";
                statusCallback = "https://that-hellcat.name";
            }};            

            CreateBundleResponse res = sdk.createBundle(req, new CreateBundleSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceBundle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createBundle](docs/sdk/README.md#createbundle) - Create a new Bundle.
* [createBundleCopy](docs/sdk/README.md#createbundlecopy) - Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle
* [createEndUser](docs/sdk/README.md#createenduser) - Create a new End User.
* [createEvaluation](docs/sdk/README.md#createevaluation) - Creates an evaluation for a bundle
* [createItemAssignment](docs/sdk/README.md#createitemassignment) - Create a new Assigned Item.
* [createReplaceItems](docs/sdk/README.md#createreplaceitems) - Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)
* [createSupportingDocument](docs/sdk/README.md#createsupportingdocument) - Create a new Supporting Document.
* [deleteBundle](docs/sdk/README.md#deletebundle) - Delete a specific Bundle.
* [deleteEndUser](docs/sdk/README.md#deleteenduser) - Delete a specific End User.
* [deleteItemAssignment](docs/sdk/README.md#deleteitemassignment) - Remove an Assignment Item Instance.
* [deleteSupportingDocument](docs/sdk/README.md#deletesupportingdocument) - Delete a specific Supporting Document.
* [fetchBundle](docs/sdk/README.md#fetchbundle) - Fetch a specific Bundle instance.
* [fetchEndUser](docs/sdk/README.md#fetchenduser) - Fetch specific End User Instance.
* [fetchEndUserType](docs/sdk/README.md#fetchendusertype) - Fetch a specific End-User Type Instance.
* [fetchEvaluation](docs/sdk/README.md#fetchevaluation) - Fetch specific Evaluation Instance.
* [fetchItemAssignment](docs/sdk/README.md#fetchitemassignment) - Fetch specific Assigned Item Instance.
* [fetchRegulation](docs/sdk/README.md#fetchregulation) - Fetch specific Regulation Instance.
* [fetchSupportingDocument](docs/sdk/README.md#fetchsupportingdocument) - Fetch specific Supporting Document Instance.
* [fetchSupportingDocumentType](docs/sdk/README.md#fetchsupportingdocumenttype) - Fetch a specific Supporting Document Type Instance.
* [listBundle](docs/sdk/README.md#listbundle) - Retrieve a list of all Bundles for an account.
* [listBundleCopy](docs/sdk/README.md#listbundlecopy) - Retrieve a list of all Bundles Copies for a Bundle.
* [listEndUser](docs/sdk/README.md#listenduser) - Retrieve a list of all End User for an account.
* [listEndUserType](docs/sdk/README.md#listendusertype) - Retrieve a list of all End-User Types.
* [listEvaluation](docs/sdk/README.md#listevaluation) - Retrieve a list of Evaluations associated to the Bundle resource.
* [listItemAssignment](docs/sdk/README.md#listitemassignment) - Retrieve a list of all Assigned Items for an account.
* [listRegulation](docs/sdk/README.md#listregulation) - Retrieve a list of all Regulations.
* [listSupportingDocument](docs/sdk/README.md#listsupportingdocument) - Retrieve a list of all Supporting Document for an account.
* [listSupportingDocumentType](docs/sdk/README.md#listsupportingdocumenttype) - Retrieve a list of all Supporting Document Types.
* [updateBundle](docs/sdk/README.md#updatebundle) - Updates a Bundle in an account.
* [updateEndUser](docs/sdk/README.md#updateenduser) - Update an existing End User.
* [updateSupportingDocument](docs/sdk/README.md#updatesupportingdocument) - Update an existing Supporting Document.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
