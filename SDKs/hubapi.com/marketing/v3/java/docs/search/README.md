# search

## Overview

Endpoints that allow you to search for Marketing Events in HubSpot.

### Available Operations

* [getMarketingV3MarketingEventsEventsSearchDoSearch](#getmarketingv3marketingeventseventssearchdosearch) - Search for marketing events

## getMarketingV3MarketingEventsEventsSearchDoSearch

Search for marketing events that have an event id that starts with the query string

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMarketingV3MarketingEventsEventsSearchDoSearchRequest;
import org.openapis.openapi.models.operations.GetMarketingV3MarketingEventsEventsSearchDoSearchResponse;
import org.openapis.openapi.models.operations.GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMarketingV3MarketingEventsEventsSearchDoSearchRequest req = new GetMarketingV3MarketingEventsEventsSearchDoSearchRequest("explicabo");            

            GetMarketingV3MarketingEventsEventsSearchDoSearchResponse res = sdk.search.getMarketingV3MarketingEventsEventsSearchDoSearch(req, new GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collectionResponseMarketingEventExternalUniqueIdentifierNoPaging != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
