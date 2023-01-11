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

            CertificateActionRetrieveRequest req = new CertificateActionRetrieveRequest() {{
                pathParams = new CertificateActionRetrievePathParams() {{
                    certificateId = "modi";
                }};
            }};

            CertificateActionRetrieveResponse res = sdk.v1.certificateActionRetrieve(req);

            if (res.arrayOfCertificateAction.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->