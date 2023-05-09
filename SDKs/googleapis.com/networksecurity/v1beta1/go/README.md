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
    res, err := s.Projects.NetworksecurityProjectsLocationsAddressGroupsAddItems(ctx, operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddAddressGroupItemsRequest: &shared.AddAddressGroupItemsRequest{
            Items: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            RequestID: sdk.String("nulla"),
        },
        AccessToken: sdk.String("corrupti"),
        AddressGroup: "illum",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity{
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

* [NetworksecurityProjectsLocationsAddressGroupsAddItems](docs/projects/README.md#networksecurityprojectslocationsaddressgroupsadditems) - Adds items to an address group.
* [NetworksecurityProjectsLocationsAddressGroupsCloneItems](docs/projects/README.md#networksecurityprojectslocationsaddressgroupscloneitems) - Clones items from one address group to another.
* [NetworksecurityProjectsLocationsAddressGroupsCreate](docs/projects/README.md#networksecurityprojectslocationsaddressgroupscreate) - Creates a new address group in a given project and location.
* [NetworksecurityProjectsLocationsAddressGroupsList](docs/projects/README.md#networksecurityprojectslocationsaddressgroupslist) - Lists address groups in a given project and location.
* [NetworksecurityProjectsLocationsAddressGroupsListReferences](docs/projects/README.md#networksecurityprojectslocationsaddressgroupslistreferences) - Lists references of an address group.
* [NetworksecurityProjectsLocationsAddressGroupsRemoveItems](docs/projects/README.md#networksecurityprojectslocationsaddressgroupsremoveitems) - Removes items from an address group.
* [NetworksecurityProjectsLocationsAuthorizationPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationsauthorizationpoliciescreate) - Creates a new AuthorizationPolicy in a given project and location.
* [NetworksecurityProjectsLocationsAuthorizationPoliciesList](docs/projects/README.md#networksecurityprojectslocationsauthorizationpolicieslist) - Lists AuthorizationPolicies in a given project and location.
* [NetworksecurityProjectsLocationsClientTLSPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationsclienttlspoliciescreate) - Creates a new ClientTlsPolicy in a given project and location.
* [NetworksecurityProjectsLocationsClientTLSPoliciesList](docs/projects/README.md#networksecurityprojectslocationsclienttlspolicieslist) - Lists ClientTlsPolicies in a given project and location.
* [NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationsgatewaysecuritypoliciescreate) - Creates a new GatewaySecurityPolicy in a given project and location.
* [NetworksecurityProjectsLocationsGatewaySecurityPoliciesList](docs/projects/README.md#networksecurityprojectslocationsgatewaysecuritypolicieslist) - Lists GatewaySecurityPolicies in a given project and location.
* [NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate](docs/projects/README.md#networksecurityprojectslocationsgatewaysecuritypoliciesrulescreate) - Creates a new GatewaySecurityPolicy in a given project and location.
* [NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesList](docs/projects/README.md#networksecurityprojectslocationsgatewaysecuritypoliciesruleslist) - Lists GatewaySecurityPolicyRules in a given project and location.
* [NetworksecurityProjectsLocationsList](docs/projects/README.md#networksecurityprojectslocationslist) - Lists information about the supported locations for this service.
* [NetworksecurityProjectsLocationsOperationsCancel](docs/projects/README.md#networksecurityprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [NetworksecurityProjectsLocationsOperationsList](docs/projects/README.md#networksecurityprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [NetworksecurityProjectsLocationsServerTLSPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationsservertlspoliciescreate) - Creates a new ServerTlsPolicy in a given project and location.
* [NetworksecurityProjectsLocationsServerTLSPoliciesGetIamPolicy](docs/projects/README.md#networksecurityprojectslocationsservertlspoliciesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [NetworksecurityProjectsLocationsServerTLSPoliciesList](docs/projects/README.md#networksecurityprojectslocationsservertlspolicieslist) - Lists ServerTlsPolicies in a given project and location.
* [NetworksecurityProjectsLocationsServerTLSPoliciesSetIamPolicy](docs/projects/README.md#networksecurityprojectslocationsservertlspoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [NetworksecurityProjectsLocationsServerTLSPoliciesTestIamPermissions](docs/projects/README.md#networksecurityprojectslocationsservertlspoliciestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [NetworksecurityProjectsLocationsTLSInspectionPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationstlsinspectionpoliciescreate) - Creates a new TlsInspectionPolicy in a given project and location.
* [NetworksecurityProjectsLocationsTLSInspectionPoliciesList](docs/projects/README.md#networksecurityprojectslocationstlsinspectionpolicieslist) - Lists TlsInspectionPolicies in a given project and location.
* [NetworksecurityProjectsLocationsURLListsCreate](docs/projects/README.md#networksecurityprojectslocationsurllistscreate) - Creates a new UrlList in a given project and location.
* [NetworksecurityProjectsLocationsURLListsDelete](docs/projects/README.md#networksecurityprojectslocationsurllistsdelete) - Deletes a single UrlList.
* [NetworksecurityProjectsLocationsURLListsGet](docs/projects/README.md#networksecurityprojectslocationsurllistsget) - Gets details of a single UrlList.
* [NetworksecurityProjectsLocationsURLListsList](docs/projects/README.md#networksecurityprojectslocationsurllistslist) - Lists UrlLists in a given project and location.
* [NetworksecurityProjectsLocationsURLListsPatch](docs/projects/README.md#networksecurityprojectslocationsurllistspatch) - Updates the parameters of a single UrlList.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
