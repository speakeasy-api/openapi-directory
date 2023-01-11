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

            FirebasestorageProjectsBucketsAddFirebaseRequest req = new FirebasestorageProjectsBucketsAddFirebaseRequest() {{
                security = new FirebasestorageProjectsBucketsAddFirebaseSecurity() {{
                    option1 = new FirebasestorageProjectsBucketsAddFirebaseSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirebasestorageProjectsBucketsAddFirebasePathParams() {{
                    bucket = "tenetur";
                }};
                queryParams = new FirebasestorageProjectsBucketsAddFirebaseQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "excepturi";
                    alt = "proto";
                    callback = "ut";
                    fields = "magni";
                    key = "asperiores";
                    oauthToken = "eum";
                    prettyPrint = true;
                    quotaUser = "mollitia";
                    uploadType = "tenetur";
                    uploadProtocol = "sit";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("earum", "eveniet");
                    put("sed", "a");
                    put("voluptatem", "aut");
                }};
            }};

            FirebasestorageProjectsBucketsAddFirebaseResponse res = sdk.projects.firebasestorageProjectsBucketsAddFirebase(req);

            if (res.bucket.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->