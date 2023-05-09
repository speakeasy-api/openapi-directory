<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdRequest;
import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdResponse;
import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteLikesPlaylistsPlaylistIdRequest req = new DeleteLikesPlaylistsPlaylistIdRequest(548814L);            

            DeleteLikesPlaylistsPlaylistIdResponse res = sdk.likes.deleteLikesPlaylistsPlaylistId(req, new DeleteLikesPlaylistsPlaylistIdSecurity("provident") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->