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

            EndpointGetAnAlbumRequest req = new EndpointGetAnAlbumRequest() {{
                security = new EndpointGetAnAlbumSecurity() {{
                    spotifyAuth = new SchemeSpotifyAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new EndpointGetAnAlbumPathParams() {{
                    id = "sit";
                }};
                queryParams = new EndpointGetAnAlbumQueryParams() {{
                    market = "voluptas";
                }};
                headers = new EndpointGetAnAlbumHeaders() {{
                    authorization = "culpa";
                }};
            }};

            EndpointGetAnAlbumResponse res = sdk.categoryAlbums.endpointGetAnAlbum(req);

            if (res.albumObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->