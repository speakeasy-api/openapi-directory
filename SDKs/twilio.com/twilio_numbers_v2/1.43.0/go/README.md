# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_numbers_v2/1.43.0/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateBundle(ctx, operations.CreateBundleCreateBundleRequest{
        Email: "Larue_Rau85@yahoo.com",
        EndUserType: shared.BundleEnumEndUserTypeEnumBusiness.ToPointer(),
        FriendlyName: "illum",
        IsoCountry: sdk.String("vel"),
        NumberType: sdk.String("error"),
        RegulationSid: sdk.String("deserunt"),
        StatusCallback: sdk.String("http://innocent-effect.org"),
    }, operations.CreateBundleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceBundle != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateBundle](docs/sdk/README.md#createbundle) - Create a new Bundle.
* [CreateBundleCopy](docs/sdk/README.md#createbundlecopy) - Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle
* [CreateEndUser](docs/sdk/README.md#createenduser) - Create a new End User.
* [CreateEvaluation](docs/sdk/README.md#createevaluation) - Creates an evaluation for a bundle
* [CreateItemAssignment](docs/sdk/README.md#createitemassignment) - Create a new Assigned Item.
* [CreateReplaceItems](docs/sdk/README.md#createreplaceitems) - Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)
* [CreateSupportingDocument](docs/sdk/README.md#createsupportingdocument) - Create a new Supporting Document.
* [DeleteBundle](docs/sdk/README.md#deletebundle) - Delete a specific Bundle.
* [DeleteEndUser](docs/sdk/README.md#deleteenduser) - Delete a specific End User.
* [DeleteItemAssignment](docs/sdk/README.md#deleteitemassignment) - Remove an Assignment Item Instance.
* [DeleteSupportingDocument](docs/sdk/README.md#deletesupportingdocument) - Delete a specific Supporting Document.
* [FetchBundle](docs/sdk/README.md#fetchbundle) - Fetch a specific Bundle instance.
* [FetchEndUser](docs/sdk/README.md#fetchenduser) - Fetch specific End User Instance.
* [FetchEndUserType](docs/sdk/README.md#fetchendusertype) - Fetch a specific End-User Type Instance.
* [FetchEvaluation](docs/sdk/README.md#fetchevaluation) - Fetch specific Evaluation Instance.
* [FetchItemAssignment](docs/sdk/README.md#fetchitemassignment) - Fetch specific Assigned Item Instance.
* [FetchRegulation](docs/sdk/README.md#fetchregulation) - Fetch specific Regulation Instance.
* [FetchSupportingDocument](docs/sdk/README.md#fetchsupportingdocument) - Fetch specific Supporting Document Instance.
* [FetchSupportingDocumentType](docs/sdk/README.md#fetchsupportingdocumenttype) - Fetch a specific Supporting Document Type Instance.
* [ListBundle](docs/sdk/README.md#listbundle) - Retrieve a list of all Bundles for an account.
* [ListBundleCopy](docs/sdk/README.md#listbundlecopy) - Retrieve a list of all Bundles Copies for a Bundle.
* [ListEndUser](docs/sdk/README.md#listenduser) - Retrieve a list of all End User for an account.
* [ListEndUserType](docs/sdk/README.md#listendusertype) - Retrieve a list of all End-User Types.
* [ListEvaluation](docs/sdk/README.md#listevaluation) - Retrieve a list of Evaluations associated to the Bundle resource.
* [ListItemAssignment](docs/sdk/README.md#listitemassignment) - Retrieve a list of all Assigned Items for an account.
* [ListRegulation](docs/sdk/README.md#listregulation) - Retrieve a list of all Regulations.
* [ListSupportingDocument](docs/sdk/README.md#listsupportingdocument) - Retrieve a list of all Supporting Document for an account.
* [ListSupportingDocumentType](docs/sdk/README.md#listsupportingdocumenttype) - Retrieve a list of all Supporting Document Types.
* [UpdateBundle](docs/sdk/README.md#updatebundle) - Updates a Bundle in an account.
* [UpdateEndUser](docs/sdk/README.md#updateenduser) - Update an existing End User.
* [UpdateSupportingDocument](docs/sdk/README.md#updatesupportingdocument) - Update an existing Supporting Document.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
