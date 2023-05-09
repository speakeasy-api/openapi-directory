# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsAssociationsCreateRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsAssociationsCreateResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Association;
import org.openapis.openapi.models.shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsAssociationsCreateRequest req = new CloudprivatecatalogproducerCatalogsAssociationsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest = new GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest() {{
                    association = new GoogleCloudPrivatecatalogproducerV1beta1Association() {{
                        createTime = "distinctio";
                        name = "Stuart Stiedemann";
                        resource = "vel";
                    }};;
                }};;
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            CloudprivatecatalogproducerCatalogsAssociationsCreateResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsAssociationsCreate(req, new CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [catalogs](docs/catalogs/README.md)

* [cloudprivatecatalogproducerCatalogsAssociationsCreate](docs/catalogs/README.md#cloudprivatecatalogproducercatalogsassociationscreate) - Creates an Association instance under a given Catalog.
* [cloudprivatecatalogproducerCatalogsAssociationsList](docs/catalogs/README.md#cloudprivatecatalogproducercatalogsassociationslist) - Lists all Association resources under a catalog.
* [cloudprivatecatalogproducerCatalogsCreate](docs/catalogs/README.md#cloudprivatecatalogproducercatalogscreate) - Creates a new Catalog resource.
* [cloudprivatecatalogproducerCatalogsGetIamPolicy](docs/catalogs/README.md#cloudprivatecatalogproducercatalogsgetiampolicy) - Gets IAM policy for the specified Catalog.
* [cloudprivatecatalogproducerCatalogsList](docs/catalogs/README.md#cloudprivatecatalogproducercatalogslist) - Lists Catalog resources that the producer has access to, within the
scope of the parent resource.
* [cloudprivatecatalogproducerCatalogsProductsCopy](docs/catalogs/README.md#cloudprivatecatalogproducercatalogsproductscopy) - Copies a Product under another Catalog.
* [cloudprivatecatalogproducerCatalogsProductsCreate](docs/catalogs/README.md#cloudprivatecatalogproducercatalogsproductscreate) - Creates a Product instance under a given Catalog.
* [cloudprivatecatalogproducerCatalogsProductsIconsUpload](docs/catalogs/README.md#cloudprivatecatalogproducercatalogsproductsiconsupload) - Creates an Icon instance under a given Product.
If Product only has a default icon, a new Icon
instance is created and associated with the given Product.
If Product already has a non-default icon, the action creates
a new Icon instance, associates the newly created
Icon with the given Product and deletes the old icon.
* [cloudprivatecatalogproducerCatalogsProductsList](docs/catalogs/README.md#cloudprivatecatalogproducercatalogsproductslist) - Lists Product resources that the producer has access to, within the
scope of the parent catalog.
* [cloudprivatecatalogproducerCatalogsProductsVersionsCreate](docs/catalogs/README.md#cloudprivatecatalogproducercatalogsproductsversionscreate) - Creates a Version instance under a given Product.
* [cloudprivatecatalogproducerCatalogsProductsVersionsDelete](docs/catalogs/README.md#cloudprivatecatalogproducercatalogsproductsversionsdelete) - Hard deletes a Version.
* [cloudprivatecatalogproducerCatalogsProductsVersionsGet](docs/catalogs/README.md#cloudprivatecatalogproducercatalogsproductsversionsget) - Returns the requested Version resource.
* [cloudprivatecatalogproducerCatalogsProductsVersionsList](docs/catalogs/README.md#cloudprivatecatalogproducercatalogsproductsversionslist) - Lists Version resources that the producer has access to, within the
scope of the parent Product.
* [cloudprivatecatalogproducerCatalogsProductsVersionsPatch](docs/catalogs/README.md#cloudprivatecatalogproducercatalogsproductsversionspatch) - Updates a specific Version resource.
* [cloudprivatecatalogproducerCatalogsSetIamPolicy](docs/catalogs/README.md#cloudprivatecatalogproducercatalogssetiampolicy) - Sets the IAM policy for the specified Catalog.
* [cloudprivatecatalogproducerCatalogsTestIamPermissions](docs/catalogs/README.md#cloudprivatecatalogproducercatalogstestiampermissions) - Tests the IAM permissions for the specified Catalog.
* [cloudprivatecatalogproducerCatalogsUndelete](docs/catalogs/README.md#cloudprivatecatalogproducercatalogsundelete) - Undeletes a deleted Catalog and all resources under it.

### [operations](docs/operations/README.md)

* [cloudprivatecatalogproducerOperationsCancel](docs/operations/README.md#cloudprivatecatalogproduceroperationscancel) - Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.
* [cloudprivatecatalogproducerOperationsList](docs/operations/README.md#cloudprivatecatalogproduceroperationslist) - Lists operations that match the specified filter in the request. If the
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

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
