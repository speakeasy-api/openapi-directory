# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudprivatecatalogproducer/v1beta1/go
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

    req := operations.CloudprivatecatalogproducerCatalogsAssociationsCreateRequest{
        DollarXgafv: "2",
        GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest: &shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest{
            Association: &shared.GoogleCloudPrivatecatalogproducerV1beta1Association{
                CreateTime: "provident",
                Name: "distinctio",
                Resource: "quibusdam",
            },
        },
        AccessToken: "unde",
        Alt: "proto",
        Callback: "corrupti",
        Fields: "illum",
        Key: "vel",
        OauthToken: "error",
        Parent: "deserunt",
        PrettyPrint: false,
        QuotaUser: "suscipit",
        UploadType: "iure",
        UploadProtocol: "magnam",
    }

    ctx := context.Background()
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsAssociationsCreate(ctx, req, operations.CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity{
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


### Catalogs

* `CloudprivatecatalogproducerCatalogsAssociationsCreate` - Creates an Association instance under a given Catalog.
* `CloudprivatecatalogproducerCatalogsAssociationsList` - Lists all Association resources under a catalog.
* `CloudprivatecatalogproducerCatalogsCreate` - Creates a new Catalog resource.
* `CloudprivatecatalogproducerCatalogsGetIamPolicy` - Gets IAM policy for the specified Catalog.
* `CloudprivatecatalogproducerCatalogsList` - Lists Catalog resources that the producer has access to, within the
scope of the parent resource.
* `CloudprivatecatalogproducerCatalogsProductsCopy` - Copies a Product under another Catalog.
* `CloudprivatecatalogproducerCatalogsProductsCreate` - Creates a Product instance under a given Catalog.
* `CloudprivatecatalogproducerCatalogsProductsIconsUpload` - Creates an Icon instance under a given Product.
If Product only has a default icon, a new Icon
instance is created and associated with the given Product.
If Product already has a non-default icon, the action creates
a new Icon instance, associates the newly created
Icon with the given Product and deletes the old icon.
* `CloudprivatecatalogproducerCatalogsProductsList` - Lists Product resources that the producer has access to, within the
scope of the parent catalog.
* `CloudprivatecatalogproducerCatalogsProductsVersionsCreate` - Creates a Version instance under a given Product.
* `CloudprivatecatalogproducerCatalogsProductsVersionsDelete` - Hard deletes a Version.
* `CloudprivatecatalogproducerCatalogsProductsVersionsGet` - Returns the requested Version resource.
* `CloudprivatecatalogproducerCatalogsProductsVersionsList` - Lists Version resources that the producer has access to, within the
scope of the parent Product.
* `CloudprivatecatalogproducerCatalogsProductsVersionsPatch` - Updates a specific Version resource.
* `CloudprivatecatalogproducerCatalogsSetIamPolicy` - Sets the IAM policy for the specified Catalog.
* `CloudprivatecatalogproducerCatalogsTestIamPermissions` - Tests the IAM permissions for the specified Catalog.
* `CloudprivatecatalogproducerCatalogsUndelete` - Undeletes a deleted Catalog and all resources under it.

### Operations

* `CloudprivatecatalogproducerOperationsCancel` - Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.
* `CloudprivatecatalogproducerOperationsList` - Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
