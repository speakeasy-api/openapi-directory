<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBestPodcastsRequest;
import org.openapis.openapi.models.operations.GetBestPodcastsResponse;
import org.openapis.openapi.models.operations.GetBestPodcastsSortEnum;
import org.openapis.openapi.models.shared.SafeModeParamEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBestPodcastsRequest req = new GetBestPodcastsRequest("corrupti") {{
                genreId = "provident";
                language = "distinctio";
                page = 844266L;
                publisherRegion = "unde";
                region = "nulla";
                safeMode = SafeModeParamEnum.ONE;
                sort = GetBestPodcastsSortEnum.LISTEN_SCORE;
            }};            

            GetBestPodcastsResponse res = sdk.directoryAPI.getBestPodcasts(req);

            if (res.bestPodcastsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->