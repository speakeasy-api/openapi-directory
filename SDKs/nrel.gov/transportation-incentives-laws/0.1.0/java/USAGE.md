<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsAllOutputFormatEnum;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsAllRequest;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TransportationIncentivesLawsAllRequest req = new TransportationIncentivesLawsAllRequest("corrupti", TransportationIncentivesLawsAllOutputFormatEnum.XML) {{
                expired = false;
                incentiveType = "distinctio";
                jurisdiction = "quibusdam";
                keyword = "unde";
                lawType = "nulla";
                limit = 544883L;
                local = false;
                poc = false;
                recent = false;
                regulationType = "illum";
                technology = "vel";
                userType = "error";
            }};            

            TransportationIncentivesLawsAllResponse res = sdk.transportationIncentivesLawsAll(req);

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