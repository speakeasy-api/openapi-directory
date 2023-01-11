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

            CloudresourcemanagerEffectiveTagsListRequest req = new CloudresourcemanagerEffectiveTagsListRequest() {{
                security = new CloudresourcemanagerEffectiveTagsListSecurity() {{
                    option1 = new CloudresourcemanagerEffectiveTagsListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new CloudresourcemanagerEffectiveTagsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "qui";
                    alt = "proto";
                    callback = "eius";
                    fields = "totam";
                    key = "voluptas";
                    oauthToken = "omnis";
                    pageSize = 1290762731677787192;
                    pageToken = "nemo";
                    parent = "est";
                    prettyPrint = false;
                    quotaUser = "in";
                    uploadType = "velit";
                    uploadProtocol = "ex";
                }};
            }};

            CloudresourcemanagerEffectiveTagsListResponse res = sdk.effectiveTags.cloudresourcemanagerEffectiveTagsList(req);

            if (res.listEffectiveTagsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->