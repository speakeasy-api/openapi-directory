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

            GetBestPodcastsRequest req = new GetBestPodcastsRequest() {{
                queryParams = new GetBestPodcastsQueryParams() {{
                    genreId = "est";
                    language = "ducimus";
                    page = 8623164225002686073;
                    publisherRegion = "minus";
                    region = "quasi";
                    safeMode = 3451236887729777416;
                }};
                headers = new GetBestPodcastsHeaders() {{
                    xListenAPIKey = "id";
                }};
            }};

            GetBestPodcastsResponse res = sdk.directoryAPI.getBestPodcasts(req);

            if (res.bestPodcastsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->