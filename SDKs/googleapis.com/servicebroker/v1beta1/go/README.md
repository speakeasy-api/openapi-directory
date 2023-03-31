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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ServicebrokerProjectsBrokersCreateRequest{
        DollarXgafv: "2",
        GoogleCloudServicebrokerV1beta1Broker: &shared.GoogleCloudServicebrokerV1beta1Broker{
            CreateTime: "provident",
            Name: "distinctio",
            Title: "Dr.",
            URL: "unde",
        },
        AccessToken: "nulla",
        Alt: "media",
        Callback: "illum",
        Fields: "vel",
        Key: "error",
        OauthToken: "deserunt",
        Parent: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Projects.ServicebrokerProjectsBrokersCreate(ctx, req, operations.ServicebrokerProjectsBrokersCreateSecurity{
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


### Projects

* `ServicebrokerProjectsBrokersCreate` - CreateBroker creates a Broker.
* `ServicebrokerProjectsBrokersInstancesBindingsList` - Lists all the bindings in the instance.
* `ServicebrokerProjectsBrokersInstancesList` - Lists all the instances in the brokers
This API is an extension and not part of the OSB spec.
Hence the path is a standard Google API URL.
* `ServicebrokerProjectsBrokersList` - ListBrokers lists brokers.
* `ServicebrokerProjectsBrokersV2CatalogList` - Lists all the Services registered with this broker for consumption for
given service registry broker, which contains an set of services.
Note, that Service producer API is separate from Broker API.
* `ServicebrokerProjectsBrokersV2ServiceInstancesCreate` - Provisions a service instance.
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
* `ServicebrokerProjectsBrokersV2ServiceInstancesPatch` - Updates an existing service instance.
See CreateServiceInstance for possible response codes.
* `ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate` - CreateBinding generates a service binding to an existing service instance.
See ProviServiceInstance for async operation details.
* `ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete` - Unbinds from a service instance.
For synchronous/asynchronous request details see CreateServiceInstance
method.
If binding does not exist HTTP 410 status will be returned.
* `ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet` - GetBinding returns the binding information.
* `ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation` - Returns the state of the last operation for the binding.
Only last (or current) operation can be polled.

### V1beta1

* `ServicebrokerGetIamPolicy` - Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.
* `ServicebrokerSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any
existing policy.

Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
* `ServicebrokerTestIamPermissions` - Returns permissions that a caller has on the specified resource.
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
