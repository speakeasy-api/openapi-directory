<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersProductsListRequest;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersProductsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsresellersubscriptionPartnersProductsListRequest req = new PaymentsresellersubscriptionPartnersProductsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            PaymentsresellersubscriptionPartnersProductsListResponse res = sdk.partners.paymentsresellersubscriptionPartnersProductsList(req);

            if (res.googleCloudPaymentsResellerSubscriptionV1ListProductsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->