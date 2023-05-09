<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBillingRecipientsRequest;
import org.openapis.openapi.models.operations.GetBillingRecipientsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBillingRecipientsRequest req = new GetBillingRecipientsRequest("corrupti");            

            GetBillingRecipientsResponse res = sdk.contact.getBillingRecipients(req);

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