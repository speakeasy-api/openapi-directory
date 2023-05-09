# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/contactcenteraiplatform/v1alpha1/go
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
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsContactCentersCreate(ctx, operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ContactCenterInput: &shared.ContactCenterInput{
            AdminUser: &shared.AdminUser{
                FamilyName: sdk.String("provident"),
                GivenName: sdk.String("distinctio"),
            },
            CcaipManagedUsers: sdk.Bool(false),
            CustomerDomainPrefix: sdk.String("quibusdam"),
            DisplayName: sdk.String("unde"),
            InstanceConfig: &shared.InstanceConfig{
                InstanceSize: shared.InstanceConfigInstanceSizeEnumStandard3Xlarge.ToPointer(),
            },
            Labels: map[string]string{
                "illum": "vel",
                "error": "deserunt",
                "suscipit": "iure",
            },
            Name: sdk.String("Raquel Bednar"),
            SamlParams: &shared.SAMLParams{
                Certificate: sdk.String("suscipit"),
                EntityID: sdk.String("molestiae"),
                SsoURI: sdk.String("minus"),
                UserEmail: sdk.String("placeat"),
            },
            Uris: &shared.URIs{
                ChatBotURI: sdk.String("voluptatum"),
                MediaURI: sdk.String("iusto"),
                RootURI: sdk.String("excepturi"),
                VirtualAgentStreamingServiceURI: sdk.String("nisi"),
            },
            UserEmail: sdk.String("recusandae"),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        ContactCenterID: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ipsam"),
        Parent: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        RequestID: sdk.String("quo"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("at"),
    }, operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [ContactcenteraiplatformProjectsLocationsContactCentersCreate](docs/projects/README.md#contactcenteraiplatformprojectslocationscontactcenterscreate) - Creates a new ContactCenter in a given project and location.
* [ContactcenteraiplatformProjectsLocationsContactCentersList](docs/projects/README.md#contactcenteraiplatformprojectslocationscontactcenterslist) - Lists ContactCenters in a given project and location.
* [ContactcenteraiplatformProjectsLocationsContactCentersPatch](docs/projects/README.md#contactcenteraiplatformprojectslocationscontactcenterspatch) - Updates the parameters of a single ContactCenter.
* [ContactcenteraiplatformProjectsLocationsList](docs/projects/README.md#contactcenteraiplatformprojectslocationslist) - Lists information about the supported locations for this service.
* [ContactcenteraiplatformProjectsLocationsOperationsCancel](docs/projects/README.md#contactcenteraiplatformprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ContactcenteraiplatformProjectsLocationsOperationsDelete](docs/projects/README.md#contactcenteraiplatformprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [ContactcenteraiplatformProjectsLocationsOperationsGet](docs/projects/README.md#contactcenteraiplatformprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [ContactcenteraiplatformProjectsLocationsOperationsList](docs/projects/README.md#contactcenteraiplatformprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [ContactcenteraiplatformProjectsLocationsQueryContactCenterQuota](docs/projects/README.md#contactcenteraiplatformprojectslocationsquerycontactcenterquota) - Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
