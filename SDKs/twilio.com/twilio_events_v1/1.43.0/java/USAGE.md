<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSinkCreateSinkRequest;
import org.openapis.openapi.models.operations.CreateSinkResponse;
import org.openapis.openapi.models.operations.CreateSinkSecurity;
import org.openapis.openapi.models.shared.SinkEnumSinkTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSinkCreateSinkRequest req = new CreateSinkCreateSinkRequest("corrupti", "provident", SinkEnumSinkTypeEnum.SEGMENT);            

            CreateSinkResponse res = sdk.createSink(req, new CreateSinkSecurity("quibusdam", "unde") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1Sink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->