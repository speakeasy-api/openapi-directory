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

            IapProjectsBrandsCreateRequest req = new IapProjectsBrandsCreateRequest() {{
                security = new IapProjectsBrandsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new IapProjectsBrandsCreatePathParams() {{
                    parent = "voluptatem";
                }};
                queryParams = new IapProjectsBrandsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "ut";
                    alt = "media";
                    callback = "ut";
                    fields = "debitis";
                    key = "laudantium";
                    oauthToken = "eaque";
                    prettyPrint = false;
                    quotaUser = "ipsam";
                    uploadType = "in";
                    uploadProtocol = "ab";
                }};
                request = new BrandInput() {{
                    applicationTitle = "eum";
                    supportEmail = "magnam";
                }};
            }};

            IapProjectsBrandsCreateResponse res = sdk.projects.iapProjectsBrandsCreate(req);

            if (res.brand.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->