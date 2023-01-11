<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    jsonWebTokenAuth = new SchemeJsonWebTokenAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            MergeTemplateRequest req = new MergeTemplateRequest() {{
                queryParams = new MergeTemplateQueryParams() {{
                    format = "zip";
                    name = "voluptas";
                    output = "url";
                    templateId = 501233450539197794;
                }};
                request = new Data() {{
                    id = 3390393562759376202;
                    name = "dolor";
                }};
            }};

            MergeTemplateResponse res = sdk.documents.mergeTemplate(req);

            if (res.mergeTemplate200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->