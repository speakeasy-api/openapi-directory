<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01BulkCallResponse;
import org.openapis.openapi.models.operations.PostV01BulkCallSecurity;
import org.openapis.openapi.models.shared.BulkCallParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BulkCallParameters req = new BulkCallParameters("https://example.com/answer/", "<", "15551234567", "user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/", "15557654321") {{
                callerName = "Bulk Test";
                confirmKey = "1";
                confirmSound = "https://example.com/confirm_sound/";
                coreUUID = "2e8e6275-7cfe-4e3c-a8d6-25316b4519c7";
                extraDialString = "bridge_early_media=true,hangup_after_bridge=true";
                gatewayCodecs = "'PCMA,PCMU','G729,PCMU','PCMA,G729'";
                gatewayRetries = "3,1,2";
                gatewayTimeouts = "10,30,20";
                hangupOnRing = 90L;
                hangupUrl = "https://example.com/hangup/";
                rejectCauses = "USER_BUSY,NO_ANSWER";
                ringUrl = "https://example.com/ring/";
                sendDigits = "1w2w3W#*@1500";
                sendOnPreanswer = false;
                timeLimit = 90L;
            }};            

            PostV01BulkCallResponse res = sdk.call.postV01BulkCall(req, new PostV01BulkCallSecurity("corrupti", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.bulkCallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->