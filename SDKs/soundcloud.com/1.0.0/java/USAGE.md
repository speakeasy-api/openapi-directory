<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdSecurity;
import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdPathParams;
import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdRequest;
import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdResponse;
import org.openapis.openapi.models.shared.SchemeAuthHeader;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteLikesPlaylistsPlaylistIdRequest req = new DeleteLikesPlaylistsPlaylistIdRequest() {{
                security = new DeleteLikesPlaylistsPlaylistIdSecurity() {{
                    authHeader = new SchemeAuthHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteLikesPlaylistsPlaylistIdPathParams() {{
                    playlistId = 548814;
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