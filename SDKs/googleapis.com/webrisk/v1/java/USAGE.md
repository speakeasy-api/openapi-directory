<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.WebriskHashesSearchSecurity;
import org.openapis.openapi.models.operations.WebriskHashesSearchThreatTypesEnum;
import org.openapis.openapi.models.operations.WebriskHashesSearchQueryParams;
import org.openapis.openapi.models.operations.WebriskHashesSearchRequest;
import org.openapis.openapi.models.operations.WebriskHashesSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebriskHashesSearchRequest req = new WebriskHashesSearchRequest() {{
                security = new WebriskHashesSearchSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new WebriskHashesSearchQueryParams() {{
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
                }};
            }};            

            WebriskHashesSearchResponse res = sdk.hashes.webriskHashesSearch(req);

            if (res.googleCloudWebriskV1SearchHashesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->