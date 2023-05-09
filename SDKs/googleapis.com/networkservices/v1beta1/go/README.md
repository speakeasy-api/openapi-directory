# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/networkservices/v1beta1/go
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
    res, err := s.Projects.NetworkservicesProjectsLocationsEndpointPoliciesCreate(ctx, operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EndpointPolicyInput: &shared.EndpointPolicyInput{
            AuthorizationPolicy: sdk.String("provident"),
            ClientTLSPolicy: sdk.String("distinctio"),
            Description: sdk.String("quibusdam"),
            EndpointMatcher: &shared.EndpointMatcher{
                MetadataLabelMatcher: &shared.MetadataLabelMatcher{
                    MetadataLabelMatchCriteria: shared.MetadataLabelMatcherMetadataLabelMatchCriteriaEnumMatchAny.ToPointer(),
                    MetadataLabels: []shared.MetadataLabels{
                        shared.MetadataLabels{
                            LabelName: sdk.String("corrupti"),
                            LabelValue: sdk.String("illum"),
                        },
                        shared.MetadataLabels{
                            LabelName: sdk.String("vel"),
                            LabelValue: sdk.String("error"),
                        },
                        shared.MetadataLabels{
                            LabelName: sdk.String("deserunt"),
                            LabelValue: sdk.String("suscipit"),
                        },
                        shared.MetadataLabels{
                            LabelName: sdk.String("iure"),
                            LabelValue: sdk.String("magnam"),
                        },
                    },
                },
            },
            Labels: map[string]string{
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            Name: sdk.String("Miriam Huel"),
            ServerTLSPolicy: sdk.String("ab"),
            TrafficPortSelector: &shared.TrafficPortSelector{
                Ports: []string{
                    "veritatis",
                    "deserunt",
                },
            },
            Type: shared.EndpointPolicyTypeEnumEndpointPolicyTypeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        EndpointPolicyID: sdk.String("quo"),
        Fields: sdk.String("odit"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("at"),
        Parent: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
    }, operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity{
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

* [NetworkservicesProjectsLocationsEndpointPoliciesCreate](docs/projects/README.md#networkservicesprojectslocationsendpointpoliciescreate) - Creates a new EndpointPolicy in a given project and location.
* [NetworkservicesProjectsLocationsEndpointPoliciesList](docs/projects/README.md#networkservicesprojectslocationsendpointpolicieslist) - Lists EndpointPolicies in a given project and location.
* [NetworkservicesProjectsLocationsGatewaysCreate](docs/projects/README.md#networkservicesprojectslocationsgatewayscreate) - Creates a new Gateway in a given project and location.
* [NetworkservicesProjectsLocationsGatewaysList](docs/projects/README.md#networkservicesprojectslocationsgatewayslist) - Lists Gateways in a given project and location.
* [NetworkservicesProjectsLocationsGrpcRoutesCreate](docs/projects/README.md#networkservicesprojectslocationsgrpcroutescreate) - Creates a new GrpcRoute in a given project and location.
* [NetworkservicesProjectsLocationsGrpcRoutesList](docs/projects/README.md#networkservicesprojectslocationsgrpcrouteslist) - Lists GrpcRoutes in a given project and location.
* [NetworkservicesProjectsLocationsHTTPRoutesCreate](docs/projects/README.md#networkservicesprojectslocationshttproutescreate) - Creates a new HttpRoute in a given project and location.
* [NetworkservicesProjectsLocationsHTTPRoutesList](docs/projects/README.md#networkservicesprojectslocationshttprouteslist) - Lists HttpRoute in a given project and location.
* [NetworkservicesProjectsLocationsList](docs/projects/README.md#networkservicesprojectslocationslist) - Lists information about the supported locations for this service.
* [NetworkservicesProjectsLocationsMeshesCreate](docs/projects/README.md#networkservicesprojectslocationsmeshescreate) - Creates a new Mesh in a given project and location.
* [NetworkservicesProjectsLocationsMeshesList](docs/projects/README.md#networkservicesprojectslocationsmesheslist) - Lists Meshes in a given project and location.
* [NetworkservicesProjectsLocationsOperationsCancel](docs/projects/README.md#networkservicesprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [NetworkservicesProjectsLocationsOperationsList](docs/projects/README.md#networkservicesprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [NetworkservicesProjectsLocationsServiceBindingsCreate](docs/projects/README.md#networkservicesprojectslocationsservicebindingscreate) - Creates a new ServiceBinding in a given project and location.
* [NetworkservicesProjectsLocationsServiceBindingsGetIamPolicy](docs/projects/README.md#networkservicesprojectslocationsservicebindingsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [NetworkservicesProjectsLocationsServiceBindingsList](docs/projects/README.md#networkservicesprojectslocationsservicebindingslist) - Lists ServiceBinding in a given project and location.
* [NetworkservicesProjectsLocationsServiceBindingsSetIamPolicy](docs/projects/README.md#networkservicesprojectslocationsservicebindingssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [NetworkservicesProjectsLocationsServiceBindingsTestIamPermissions](docs/projects/README.md#networkservicesprojectslocationsservicebindingstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [NetworkservicesProjectsLocationsTCPRoutesCreate](docs/projects/README.md#networkservicesprojectslocationstcproutescreate) - Creates a new TcpRoute in a given project and location.
* [NetworkservicesProjectsLocationsTCPRoutesList](docs/projects/README.md#networkservicesprojectslocationstcprouteslist) - Lists TcpRoute in a given project and location.
* [NetworkservicesProjectsLocationsTLSRoutesCreate](docs/projects/README.md#networkservicesprojectslocationstlsroutescreate) - Creates a new TlsRoute in a given project and location.
* [NetworkservicesProjectsLocationsTLSRoutesDelete](docs/projects/README.md#networkservicesprojectslocationstlsroutesdelete) - Deletes a single TlsRoute.
* [NetworkservicesProjectsLocationsTLSRoutesGet](docs/projects/README.md#networkservicesprojectslocationstlsroutesget) - Gets details of a single TlsRoute.
* [NetworkservicesProjectsLocationsTLSRoutesList](docs/projects/README.md#networkservicesprojectslocationstlsrouteslist) - Lists TlsRoute in a given project and location.
* [NetworkservicesProjectsLocationsTLSRoutesPatch](docs/projects/README.md#networkservicesprojectslocationstlsroutespatch) - Updates the parameters of a single TlsRoute.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
