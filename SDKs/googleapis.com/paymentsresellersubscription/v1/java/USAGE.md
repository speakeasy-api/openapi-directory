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
                    parent = "qui";
                }};
                queryParams = new PaymentsresellersubscriptionPartnersProductsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "inventore";
                    alt = "json";
                    callback = "dicta";
                    fields = "neque";
                    filter = "temporibus";
                    key = "dolorem";
                    oauthToken = "nihil";
                    pageSize = 2354657580295386910;
                    pageToken = "dolore";
                    prettyPrint = false;
                    quotaUser = "aut";
                    uploadType = "placeat";
                    uploadProtocol = "qui";
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