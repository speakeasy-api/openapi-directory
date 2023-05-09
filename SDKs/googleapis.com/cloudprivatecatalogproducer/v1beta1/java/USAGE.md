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