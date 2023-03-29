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
            Parent: "unde",
        },
        QueryParams: operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            ContactCenterID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.ContactCenterInput{
            AdminUser: &shared.AdminUser{
                FamilyName: "ullam",
                GivenName: "saepe",
            },
            CcaipManagedUsers: false,
            CustomerDomainPrefix: "inventore",
            DisplayName: "sapiente",
            InstanceConfig: &shared.InstanceConfig{
                InstanceSize: "STANDARD_SMALL",
            },
            Labels: map[string]string{
                "voluptatum": "autem",
                "vel": "non",
            },
            Name: "deleniti",
            SamlParams: &shared.SAMLParams{
                Certificate: "similique",
                EntityID: "reprehenderit",
                SsoURI: "molestiae",
                UserEmail: "quo",
            },
            Uris: &shared.URIs{
                ChatBotURI: "quasi",
                MediaURI: "laboriosam",
                RootURI: "dicta",
                VirtualAgentStreamingServiceURI: "est",
            },
            UserEmail: "voluptatem",
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
* `ContactcenteraiplatformProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `ContactcenteraiplatformProjectsLocationsQueryContactCenterQuota` - Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
