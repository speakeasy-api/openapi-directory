<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdSecurity;
import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdRequest;
import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteLikesPlaylistsPlaylistIdRequest req = new DeleteLikesPlaylistsPlaylistIdRequest() {{
                playlistId = 548814;
            }}            

            DeleteLikesPlaylistsPlaylistIdResponse res = sdk.likes.deleteLikesPlaylistsPlaylistId(req, new DeleteLikesPlaylistsPlaylistIdSecurity() {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->