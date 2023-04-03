<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

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
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                force = false;
                key = "nulla";
                name = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }}            

            ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteResponse res = sdk.publications.readerrevenuesubscriptionlinkingPublicationsReadersDelete(req);

            if (res.deleteReaderResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->