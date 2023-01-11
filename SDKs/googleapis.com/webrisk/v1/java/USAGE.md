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
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    hashPrefix = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    threatTypes = new openapisdk.models.operations.WebriskHashesSearchThreatTypesEnum[]() {{
                        add("SOCIAL_ENGINEERING"),
                    }};
                    uploadType = "dicta";
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