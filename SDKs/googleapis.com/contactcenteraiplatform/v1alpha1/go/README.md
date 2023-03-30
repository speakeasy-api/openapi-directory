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
        Security: operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ContactcenteraiplatformProjectsLocationsContactCentersCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            ContactCenterID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            RequestID: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
        Request: &shared.ContactCenterInput{
            AdminUser: &shared.AdminUser{
                FamilyName: "magnam",
                GivenName: "debitis",
            },
            CcaipManagedUsers: false,
            CustomerDomainPrefix: "ipsa",
            DisplayName: "delectus",
            InstanceConfig: &shared.InstanceConfig{
                InstanceSize: "STANDARD_SMALL",
            },
            Labels: map[string]string{
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            Name: "iusto",
            SamlParams: &shared.SAMLParams{
                Certificate: "excepturi",
                EntityID: "nisi",
                SsoURI: "recusandae",
                UserEmail: "temporibus",
            },
            Uris: &shared.URIs{
                ChatBotURI: "ab",
                MediaURI: "quis",
                RootURI: "veritatis",
                VirtualAgentStreamingServiceURI: "deserunt",
            },
            UserEmail: "perferendis",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsContactCentersCreate(ctx, req)
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
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
