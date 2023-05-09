# campaigns

## Overview

Information about campaigns

### Available Operations

* [getResourcesCampaignsJson](#getresourcescampaignsjson) - Get Campaigns
* [getResourcesCampaignsIdJson](#getresourcescampaignsidjson) - Get Campaign by ID
* [getResourcesCampaignsIdMediaJson](#getresourcescampaignsidmediajson) - Get MediaItems by Campaign ID
* [getResourcesCampaignsIdSyndicateFormat](#getresourcescampaignsidsyndicateformat) - Get MediaItems for Campaign

## getResourcesCampaignsJson

Media Listings for a specific campaign

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesCampaignsJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesCampaignsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesCampaignsJsonRequest req = new GetResourcesCampaignsJsonRequest() {{
                max = 844266;
                offset = 602763;
                sort = "nulla";
            }};            

            GetResourcesCampaignsJsonResponse res = sdk.campaigns.getResourcesCampaignsJson(req);

            if (res.campaignWrapped != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesCampaignsIdJson

Information about a specific campaign

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesCampaignsIdJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesCampaignsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesCampaignsIdJsonRequest req = new GetResourcesCampaignsIdJsonRequest(544883L);            

            GetResourcesCampaignsIdJsonResponse res = sdk.campaigns.getResourcesCampaignsIdJson(req);

            if (res.campaignWrapped != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesCampaignsIdMediaJson

Campaign Listings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesCampaignsIdMediaJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesCampaignsIdMediaJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesCampaignsIdMediaJsonRequest req = new GetResourcesCampaignsIdMediaJsonRequest(847252L) {{
                max = 423655;
                offset = 623564;
                sort = "deserunt";
            }};            

            GetResourcesCampaignsIdMediaJsonResponse res = sdk.campaigns.getResourcesCampaignsIdMediaJson(req);

            if (res.mediaItemWrapped != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesCampaignsIdSyndicateFormat

MediaItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesCampaignsIdSyndicateFormatRequest;
import org.openapis.openapi.models.operations.GetResourcesCampaignsIdSyndicateFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesCampaignsIdSyndicateFormatRequest req = new GetResourcesCampaignsIdSyndicateFormatRequest("suscipit", 437587L) {{
                displayMethod = "magnam";
            }};            

            GetResourcesCampaignsIdSyndicateFormatResponse res = sdk.campaigns.getResourcesCampaignsIdSyndicateFormat(req);

            if (res.syndicateMarshallerWrapped != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
