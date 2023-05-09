# insightsAPI

## Overview

Endpoints to get insights of podcasts, e.g., audience demographics

### Available Operations

* [getPodcastAudience](#getpodcastaudience) - Fetch audience demographics for a podcast
* [getPodcastsByDomainName](#getpodcastsbydomainname) - Fetch podcasts by a publisher's domain name

## getPodcastAudience

Fetch audience demographics for a podcast - 1) directly measured on the Listen Notes platform; 2) only supports audience breakdown by regions for now; 3) not every podcast has data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPodcastAudienceRequest;
import org.openapis.openapi.models.operations.GetPodcastAudienceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPodcastAudienceRequest req = new GetPodcastAudienceRequest("dolorum", "dicta");            

            GetPodcastAudienceResponse res = sdk.insightsAPI.getPodcastAudience(req);

            if (res.podcastAudienceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPodcastsByDomainName

Fetch podcasts by a publisher's domain name, e.g., nytimes.com, wondery.com, npr.org...
Each request will return up to 10 podcasts. You can use the `page` parameter to paginate.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPodcastsByDomainNameRequest;
import org.openapis.openapi.models.operations.GetPodcastsByDomainNameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPodcastsByDomainNameRequest req = new GetPodcastsByDomainNameRequest("nam", "officia") {{
                page = 582020L;
            }};            

            GetPodcastsByDomainNameResponse res = sdk.insightsAPI.getPodcastsByDomainName(req);

            if (res.podcastDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
