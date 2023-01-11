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

            DeleteLikesPlaylistsPlaylistIdRequest req = new DeleteLikesPlaylistsPlaylistIdRequest() {{
                security = new DeleteLikesPlaylistsPlaylistIdSecurity() {{
                    authHeader = new SchemeAuthHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteLikesPlaylistsPlaylistIdPathParams() {{
                    playlistId = 5366472482114725502;
                }};
            }};

            DeleteLikesPlaylistsPlaylistIdResponse res = sdk.likes.deleteLikesPlaylistsPlaylistId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->