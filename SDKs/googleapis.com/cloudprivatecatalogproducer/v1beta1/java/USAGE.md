<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest() {{
                    association = new GoogleCloudPrivatecatalogproducerV1beta1Association() {{
                        createTime = "dicta";
                        name = "debitis";
                        resource = "voluptatum";
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