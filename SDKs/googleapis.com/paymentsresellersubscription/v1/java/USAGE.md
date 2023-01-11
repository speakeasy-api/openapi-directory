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

            PaymentsresellersubscriptionPartnersProductsListRequest req = new PaymentsresellersubscriptionPartnersProductsListRequest() {{
                pathParams = new PaymentsresellersubscriptionPartnersProductsListPathParams() {{
                    parent = "sit";
                }};
                queryParams = new PaymentsresellersubscriptionPartnersProductsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    filter = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    pageSize = 1543572285742637646;
                    pageToken = "nihil";
                    prettyPrint = true;
                    quotaUser = "dicta";
                    uploadType = "debitis";
                    uploadProtocol = "voluptatum";
                }};
            }};

            PaymentsresellersubscriptionPartnersProductsListResponse res = sdk.partners.paymentsresellersubscriptionPartnersProductsList(req);

            if (res.googleCloudPaymentsResellerSubscriptionV1ListProductsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->