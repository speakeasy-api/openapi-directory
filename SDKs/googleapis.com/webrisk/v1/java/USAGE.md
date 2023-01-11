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
                    accessToken = "debitis";
                    alt = "media";
                    callback = "nobis";
                    fields = "aut";
                    hashPrefix = "velit";
                    key = "similique";
                    oauthToken = "est";
                    prettyPrint = true;
                    quotaUser = "tempora";
                    threatTypes = new openapisdk.models.operations.WebriskHashesSearchThreatTypesEnum[]() {{
                        add("UNWANTED_SOFTWARE"),
                        add("MALWARE"),
                        add("UNWANTED_SOFTWARE"),
                    }};
                    uploadType = "et";
                    uploadProtocol = "saepe";
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