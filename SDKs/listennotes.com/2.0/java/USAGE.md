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
                    genreId = "sit";
                    language = "voluptas";
                    page = 6050128673802995827;
                    publisherRegion = "expedita";
                    region = "consequuntur";
                    safeMode = 2669985732393126063;
                }};
                headers = new GetBestPodcastsHeaders() {{
                    xListenAPIKey = "expedita";
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