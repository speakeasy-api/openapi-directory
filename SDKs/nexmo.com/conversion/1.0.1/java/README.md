# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.SmsConversionQueryParams;
import org.openapis.openapi.models.operations.SmsConversionRequest;
import org.openapis.openapi.models.operations.SmsConversionResponse;
import org.openapis.openapi.models.shared.DeliveredEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1() {{
                        apiKey = new SchemeAPIKey() {{
                            apiKey = "YOUR_API_KEY_HERE";
                        }};
                        apiSecret = new SchemeAPISecret() {{
                            apiKey = "YOUR_API_KEY_HERE";
                        }};
                    }};
                }})
                .build();

            SmsConversionRequest req = new SmsConversionRequest() {{
                queryParams = new SmsConversionQueryParams() {{
                    delivered = "0";
                    messageId = "provident";
                    timestamp = "distinctio";
                }};
            }};            

            SmsConversionResponse res = sdk.smsConversion.smsConversion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### smsConversion

* `smsConversion` - Tell Nexmo if your SMS message was successful

### voiceConversion

* `voiceConversion` - Tell Nexmo if your voice call was successful
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
