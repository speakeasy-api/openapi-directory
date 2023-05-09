<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateActionRetrieveRequest;
import org.openapis.openapi.models.operations.CertificateActionRetrieveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateActionRetrieveRequest req = new CertificateActionRetrieveRequest("corrupti");            

            CertificateActionRetrieveResponse res = sdk.v1.certificateActionRetrieve(req);

            if (res.arrayOfCertificateAction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->