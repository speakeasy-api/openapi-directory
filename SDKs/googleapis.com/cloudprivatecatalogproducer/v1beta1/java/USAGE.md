<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsAssociationsCreateRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsAssociationsCreateResponse;
import org.openapis.openapi.models.shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest;
import org.openapis.openapi.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Association;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsAssociationsCreateRequest req = new CloudprivatecatalogproducerCatalogsAssociationsCreateRequest() {{
                security = new CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest() {{
                    association = new GoogleCloudPrivatecatalogproducerV1beta1Association() {{
                        createTime = "suscipit";
                        name = "iure";
                        resource = "magnam";
                    }};
                }};
            }};            

            CloudprivatecatalogproducerCatalogsAssociationsCreateResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsAssociationsCreate(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->