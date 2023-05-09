# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_trusthub_v1/1.43.0/go
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
    res, err := s.CreateCustomerProfile(ctx, operations.CreateCustomerProfileCreateCustomerProfileRequest{
        Email: "Larue_Rau85@yahoo.com",
        FriendlyName: "corrupti",
        PolicySid: "illum",
        StatusCallback: sdk.String("http://physical-pegboard.info"),
    }, operations.CreateCustomerProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1CustomerProfile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateCustomerProfile](docs/sdk/README.md#createcustomerprofile) - Create a new Customer-Profile.
* [CreateCustomerProfileChannelEndpointAssignment](docs/sdk/README.md#createcustomerprofilechannelendpointassignment) - Create a new Assigned Item.
* [CreateCustomerProfileEntityAssignment](docs/sdk/README.md#createcustomerprofileentityassignment) - Create a new Assigned Item.
* [CreateCustomerProfileEvaluation](docs/sdk/README.md#createcustomerprofileevaluation) - Create a new Evaluation
* [CreateEndUser](docs/sdk/README.md#createenduser) - Create a new End User.
* [CreateSupportingDocument](docs/sdk/README.md#createsupportingdocument) - Create a new Supporting Document.
* [CreateTrustProduct](docs/sdk/README.md#createtrustproduct) - Create a new Customer-Profile.
* [CreateTrustProductChannelEndpointAssignment](docs/sdk/README.md#createtrustproductchannelendpointassignment) - Create a new Assigned Item.
* [CreateTrustProductEntityAssignment](docs/sdk/README.md#createtrustproductentityassignment) - Create a new Assigned Item.
* [CreateTrustProductEvaluation](docs/sdk/README.md#createtrustproductevaluation) - Create a new Evaluation
* [DeleteCustomerProfile](docs/sdk/README.md#deletecustomerprofile) - Delete a specific Customer-Profile.
* [DeleteCustomerProfileChannelEndpointAssignment](docs/sdk/README.md#deletecustomerprofilechannelendpointassignment) - Remove an Assignment Item Instance.
* [DeleteCustomerProfileEntityAssignment](docs/sdk/README.md#deletecustomerprofileentityassignment) - Remove an Assignment Item Instance.
* [DeleteEndUser](docs/sdk/README.md#deleteenduser) - Delete a specific End User.
* [DeleteSupportingDocument](docs/sdk/README.md#deletesupportingdocument) - Delete a specific Supporting Document.
* [DeleteTrustProduct](docs/sdk/README.md#deletetrustproduct) - Delete a specific Customer-Profile.
* [DeleteTrustProductChannelEndpointAssignment](docs/sdk/README.md#deletetrustproductchannelendpointassignment) - Remove an Assignment Item Instance.
* [DeleteTrustProductEntityAssignment](docs/sdk/README.md#deletetrustproductentityassignment) - Remove an Assignment Item Instance.
* [FetchCustomerProfile](docs/sdk/README.md#fetchcustomerprofile) - Fetch a specific Customer-Profile instance.
* [FetchCustomerProfileChannelEndpointAssignment](docs/sdk/README.md#fetchcustomerprofilechannelendpointassignment) - Fetch specific Assigned Item Instance.
* [FetchCustomerProfileEntityAssignment](docs/sdk/README.md#fetchcustomerprofileentityassignment) - Fetch specific Assigned Item Instance.
* [FetchCustomerProfileEvaluation](docs/sdk/README.md#fetchcustomerprofileevaluation) - Fetch specific Evaluation Instance.
* [FetchEndUser](docs/sdk/README.md#fetchenduser) - Fetch specific End User Instance.
* [FetchEndUserType](docs/sdk/README.md#fetchendusertype) - Fetch a specific End-User Type Instance.
* [FetchPolicies](docs/sdk/README.md#fetchpolicies) - Fetch specific Policy Instance.
* [FetchSupportingDocument](docs/sdk/README.md#fetchsupportingdocument) - Fetch specific Supporting Document Instance.
* [FetchSupportingDocumentType](docs/sdk/README.md#fetchsupportingdocumenttype) - Fetch a specific Supporting Document Type Instance.
* [FetchTrustProduct](docs/sdk/README.md#fetchtrustproduct) - Fetch a specific Customer-Profile instance.
* [FetchTrustProductChannelEndpointAssignment](docs/sdk/README.md#fetchtrustproductchannelendpointassignment) - Fetch specific Assigned Item Instance.
* [FetchTrustProductEntityAssignment](docs/sdk/README.md#fetchtrustproductentityassignment) - Fetch specific Assigned Item Instance.
* [FetchTrustProductEvaluation](docs/sdk/README.md#fetchtrustproductevaluation) - Fetch specific Evaluation Instance.
* [ListCustomerProfile](docs/sdk/README.md#listcustomerprofile) - Retrieve a list of all Customer-Profiles for an account.
* [ListCustomerProfileChannelEndpointAssignment](docs/sdk/README.md#listcustomerprofilechannelendpointassignment) - Retrieve a list of all Assigned Items for an account.
* [ListCustomerProfileEntityAssignment](docs/sdk/README.md#listcustomerprofileentityassignment) - Retrieve a list of all Assigned Items for an account.
* [ListCustomerProfileEvaluation](docs/sdk/README.md#listcustomerprofileevaluation) - Retrieve a list of Evaluations associated to the customer_profile resource.
* [ListEndUser](docs/sdk/README.md#listenduser) - Retrieve a list of all End User for an account.
* [ListEndUserType](docs/sdk/README.md#listendusertype) - Retrieve a list of all End-User Types.
* [ListPolicies](docs/sdk/README.md#listpolicies) - Retrieve a list of all Policys.
* [ListSupportingDocument](docs/sdk/README.md#listsupportingdocument) - Retrieve a list of all Supporting Document for an account.
* [ListSupportingDocumentType](docs/sdk/README.md#listsupportingdocumenttype) - Retrieve a list of all Supporting Document Types.
* [ListTrustProduct](docs/sdk/README.md#listtrustproduct) - Retrieve a list of all Customer-Profiles for an account.
* [ListTrustProductChannelEndpointAssignment](docs/sdk/README.md#listtrustproductchannelendpointassignment) - Retrieve a list of all Assigned Items for an account.
* [ListTrustProductEntityAssignment](docs/sdk/README.md#listtrustproductentityassignment) - Retrieve a list of all Assigned Items for an account.
* [ListTrustProductEvaluation](docs/sdk/README.md#listtrustproductevaluation) - Retrieve a list of Evaluations associated to the trust_product resource.
* [UpdateCustomerProfile](docs/sdk/README.md#updatecustomerprofile) - Updates a Customer-Profile in an account.
* [UpdateEndUser](docs/sdk/README.md#updateenduser) - Update an existing End User.
* [UpdateSupportingDocument](docs/sdk/README.md#updatesupportingdocument) - Update an existing Supporting Document.
* [UpdateTrustProduct](docs/sdk/README.md#updatetrustproduct) - Updates a Customer-Profile in an account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
