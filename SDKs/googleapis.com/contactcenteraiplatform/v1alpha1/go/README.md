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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest{
        DollarXgafv: "2",
        ContactCenterInput: &shared.ContactCenterInput{
            AdminUser: &shared.AdminUser{
                FamilyName: "provident",
                GivenName: "distinctio",
            },
            CcaipManagedUsers: false,
            CustomerDomainPrefix: "quibusdam",
            DisplayName: "unde",
            InstanceConfig: &shared.InstanceConfig{
                InstanceSize: "STANDARD_3XLARGE",
            },
            Labels: map[string]string{
                "illum": "vel",
                "error": "deserunt",
                "suscipit": "iure",
            },
            Name: "magnam",
            SamlParams: &shared.SAMLParams{
                Certificate: "debitis",
                EntityID: "ipsa",
                SsoURI: "delectus",
                UserEmail: "tempora",
            },
            Uris: &shared.URIs{
                ChatBotURI: "suscipit",
                MediaURI: "molestiae",
                RootURI: "minus",
                VirtualAgentStreamingServiceURI: "placeat",
            },
            UserEmail: "voluptatum",
        },
        AccessToken: "iusto",
        Alt: "media",
        Callback: "nisi",
        ContactCenterID: "recusandae",
        Fields: "temporibus",
        Key: "ab",
        OauthToken: "quis",
        Parent: "veritatis",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        RequestID: "perferendis",
        UploadType: "ipsam",
        UploadProtocol: "repellendus",
    }

    ctx := context.Background()
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsContactCentersCreate(ctx, req, operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity{
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


### Projects

* `ContactcenteraiplatformProjectsLocationsContactCentersCreate` - Creates a new ContactCenter in a given project and location.
* `ContactcenteraiplatformProjectsLocationsContactCentersList` - Lists ContactCenters in a given project and location.
* `ContactcenteraiplatformProjectsLocationsContactCentersPatch` - Updates the parameters of a single ContactCenter.
* `ContactcenteraiplatformProjectsLocationsList` - Lists information about the supported locations for this service.
* `ContactcenteraiplatformProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `ContactcenteraiplatformProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `ContactcenteraiplatformProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `ContactcenteraiplatformProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `ContactcenteraiplatformProjectsLocationsQueryContactCenterQuota` - Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
