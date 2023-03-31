<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetBestPodcastsSortEnum;
import org.openapis.openapi.models.operations.GetBestPodcastsQueryParams;
import org.openapis.openapi.models.operations.GetBestPodcastsHeaders;
import org.openapis.openapi.models.operations.GetBestPodcastsRequest;
import org.openapis.openapi.models.operations.GetBestPodcastsResponse;
import org.openapis.openapi.models.shared.SafeModeParamEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBestPodcastsRequest req = new GetBestPodcastsRequest() {{
                queryParams = new GetBestPodcastsQueryParams() {{
                    genreId = "corrupti";
                    language = "provident";
                    page = 715190;
                    publisherRegion = "quibusdam";
                    region = "unde";
                    safeMode = "1";
                    sort = "recent_published_first";
                }};
                headers = new GetBestPodcastsHeaders() {{
                    xListenAPIKey = "illum";
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