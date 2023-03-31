# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/networksecurity/v1beta1/go
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

    req := operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest{
        DollarXgafv: "2",
        AddAddressGroupItemsRequest: &shared.AddAddressGroupItemsRequest{
            Items: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            RequestID: "nulla",
        },
        AccessToken: "corrupti",
        AddressGroup: "illum",
        Alt: "media",
        Callback: "error",
        Fields: "deserunt",
        Key: "suscipit",
        OauthToken: "iure",
        PrettyPrint: false,
        QuotaUser: "magnam",
        UploadType: "debitis",
        UploadProtocol: "ipsa",
    }

    ctx := context.Background()
    res, err := s.Projects.NetworksecurityProjectsLocationsAddressGroupsAddItems(ctx, req, operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity{
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

* `NetworksecurityProjectsLocationsAddressGroupsAddItems` - Adds items to an address group.
* `NetworksecurityProjectsLocationsAddressGroupsCloneItems` - Clones items from one address group to another.
* `NetworksecurityProjectsLocationsAddressGroupsCreate` - Creates a new address group in a given project and location.
* `NetworksecurityProjectsLocationsAddressGroupsList` - Lists address groups in a given project and location.
* `NetworksecurityProjectsLocationsAddressGroupsListReferences` - Lists references of an address group.
* `NetworksecurityProjectsLocationsAddressGroupsRemoveItems` - Removes items from an address group.
* `NetworksecurityProjectsLocationsAuthorizationPoliciesCreate` - Creates a new AuthorizationPolicy in a given project and location.
* `NetworksecurityProjectsLocationsAuthorizationPoliciesList` - Lists AuthorizationPolicies in a given project and location.
* `NetworksecurityProjectsLocationsClientTLSPoliciesCreate` - Creates a new ClientTlsPolicy in a given project and location.
* `NetworksecurityProjectsLocationsClientTLSPoliciesList` - Lists ClientTlsPolicies in a given project and location.
* `NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreate` - Creates a new GatewaySecurityPolicy in a given project and location.
* `NetworksecurityProjectsLocationsGatewaySecurityPoliciesList` - Lists GatewaySecurityPolicies in a given project and location.
* `NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate` - Creates a new GatewaySecurityPolicy in a given project and location.
* `NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesList` - Lists GatewaySecurityPolicyRules in a given project and location.
* `NetworksecurityProjectsLocationsList` - Lists information about the supported locations for this service.
* `NetworksecurityProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `NetworksecurityProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `NetworksecurityProjectsLocationsServerTLSPoliciesCreate` - Creates a new ServerTlsPolicy in a given project and location.
* `NetworksecurityProjectsLocationsServerTLSPoliciesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `NetworksecurityProjectsLocationsServerTLSPoliciesList` - Lists ServerTlsPolicies in a given project and location.
* `NetworksecurityProjectsLocationsServerTLSPoliciesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `NetworksecurityProjectsLocationsServerTLSPoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `NetworksecurityProjectsLocationsTLSInspectionPoliciesCreate` - Creates a new TlsInspectionPolicy in a given project and location.
* `NetworksecurityProjectsLocationsTLSInspectionPoliciesList` - Lists TlsInspectionPolicies in a given project and location.
* `NetworksecurityProjectsLocationsURLListsCreate` - Creates a new UrlList in a given project and location.
* `NetworksecurityProjectsLocationsURLListsDelete` - Deletes a single UrlList.
* `NetworksecurityProjectsLocationsURLListsGet` - Gets details of a single UrlList.
* `NetworksecurityProjectsLocationsURLListsList` - Lists UrlLists in a given project and location.
* `NetworksecurityProjectsLocationsURLListsPatch` - Updates the parameters of a single UrlList.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
