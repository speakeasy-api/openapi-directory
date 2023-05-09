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

            ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest req = new ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
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

            ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteResponse res = sdk.publications.readerrevenuesubscriptionlinkingPublicationsReadersDelete(req);

            if (res.deleteReaderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->