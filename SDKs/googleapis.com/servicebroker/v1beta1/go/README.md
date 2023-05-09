# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/servicebroker/v1beta1/go
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
    res, err := s.Projects.ServicebrokerProjectsBrokersCreate(ctx, operations.ServicebrokerProjectsBrokersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudServicebrokerV1beta1Broker: &shared.GoogleCloudServicebrokerV1beta1Broker{
            CreateTime: sdk.String("provident"),
            Name: sdk.String("Ellis Mitchell"),
            Title: sdk.String("Dr."),
            URL: sdk.String("vel"),
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("iure"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("debitis"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.ServicebrokerProjectsBrokersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [ServicebrokerProjectsBrokersCreate](docs/projects/README.md#servicebrokerprojectsbrokerscreate) - CreateBroker creates a Broker.
* [ServicebrokerProjectsBrokersInstancesBindingsList](docs/projects/README.md#servicebrokerprojectsbrokersinstancesbindingslist) - Lists all the bindings in the instance.
* [ServicebrokerProjectsBrokersInstancesList](docs/projects/README.md#servicebrokerprojectsbrokersinstanceslist) - Lists all the instances in the brokers
This API is an extension and not part of the OSB spec.
Hence the path is a standard Google API URL.
* [ServicebrokerProjectsBrokersList](docs/projects/README.md#servicebrokerprojectsbrokerslist) - ListBrokers lists brokers.
* [ServicebrokerProjectsBrokersV2CatalogList](docs/projects/README.md#servicebrokerprojectsbrokersv2cataloglist) - Lists all the Services registered with this broker for consumption for
given service registry broker, which contains an set of services.
Note, that Service producer API is separate from Broker API.
* [ServicebrokerProjectsBrokersV2ServiceInstancesCreate](docs/projects/README.md#servicebrokerprojectsbrokersv2serviceinstancescreate) - Provisions a service instance.
If `request.accepts_incomplete` is false and Broker cannot execute request
synchronously HTTP 422 error will be returned along with
FAILED_PRECONDITION status.
If `request.accepts_incomplete` is true and the Broker decides to execute
resource asynchronously then HTTP 202 response code will be returned and a
valid polling operation in the response will be included.
If Broker executes the request synchronously and it succeeds HTTP 201
response will be furnished.
If identical instance exists, then HTTP 200 response will be returned.
If an instance with identical ID but mismatching parameters exists, then
HTTP 409 status code will be returned.
* [ServicebrokerProjectsBrokersV2ServiceInstancesPatch](docs/projects/README.md#servicebrokerprojectsbrokersv2serviceinstancespatch) - Updates an existing service instance.
See CreateServiceInstance for possible response codes.
* [ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate](docs/projects/README.md#servicebrokerprojectsbrokersv2serviceinstancesservicebindingscreate) - CreateBinding generates a service binding to an existing service instance.
See ProviServiceInstance for async operation details.
* [ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete](docs/projects/README.md#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsdelete) - Unbinds from a service instance.
For synchronous/asynchronous request details see CreateServiceInstance
method.
If binding does not exist HTTP 410 status will be returned.
* [ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet](docs/projects/README.md#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsget) - GetBinding returns the binding information.
* [ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation](docs/projects/README.md#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsgetlastoperation) - Returns the state of the last operation for the binding.
Only last (or current) operation can be polled.

### [V1beta1](docs/v1beta1/README.md)

* [ServicebrokerGetIamPolicy](docs/v1beta1/README.md#servicebrokergetiampolicy) - Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.
* [ServicebrokerSetIamPolicy](docs/v1beta1/README.md#servicebrokersetiampolicy) - Sets the access control policy on the specified resource. Replaces any
existing policy.

Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
* [ServicebrokerTestIamPermissions](docs/v1beta1/README.md#servicebrokertestiampermissions) - Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
