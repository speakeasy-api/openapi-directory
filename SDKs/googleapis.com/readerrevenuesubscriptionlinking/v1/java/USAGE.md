<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeletePathParams;
import org.openapis.openapi.models.operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteQueryParams;
import org.openapis.openapi.models.operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest;
import org.openapis.openapi.models.operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest req = new ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest() {{
                pathParams = new ReaderrevenuesubscriptionlinkingPublicationsReadersDeletePathParams() {{
                    name = "corrupti";
                }};
                queryParams = new ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    force = false;
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
            }};            

            ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteResponse res = sdk.publications.readerrevenuesubscriptionlinkingPublicationsReadersDelete(req);

            if (res.deleteReaderResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->