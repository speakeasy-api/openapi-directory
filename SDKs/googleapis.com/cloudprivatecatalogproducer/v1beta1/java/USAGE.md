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
                    parent = "nihil";
                }};
                queryParams = new CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "eos";
                    alt = "proto";
                    callback = "et";
                    fields = "dolor";
                    key = "omnis";
                    oauthToken = "itaque";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "quae";
                    uploadProtocol = "cupiditate";
                }};
                request = new GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest() {{
                    association = new GoogleCloudPrivatecatalogproducerV1beta1Association() {{
                        createTime = "sapiente";
                        name = "et";
                        resource = "perferendis";
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