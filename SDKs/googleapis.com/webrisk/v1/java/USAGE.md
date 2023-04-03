<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.WebriskHashesSearchSecurity;
import org.openapis.openapi.models.operations.WebriskHashesSearchThreatTypesEnum;
import org.openapis.openapi.models.operations.WebriskHashesSearchRequest;
import org.openapis.openapi.models.operations.WebriskHashesSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebriskHashesSearchRequest req = new WebriskHashesSearchRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                hashPrefix = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                threatTypes = new org.openapis.openapi.models.operations.WebriskHashesSearchThreatTypesEnum[]{{
                    add("UNWANTED_SOFTWARE"),
                    add("MALWARE"),
                    add("SOCIAL_ENGINEERING"),
                }};
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }}            

            WebriskHashesSearchResponse res = sdk.hashes.webriskHashesSearch(req, new WebriskHashesSearchSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudWebriskV1SearchHashesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->