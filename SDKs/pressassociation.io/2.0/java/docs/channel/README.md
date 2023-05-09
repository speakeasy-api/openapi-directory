# channel

### Available Operations

* [getChannel](#getchannel) - Channel Detail
* [listChannels](#listchannels) - Channel Collection

## getChannel

Return the content of the selected channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelRequest;
import org.openapis.openapi.models.operations.GetChannelResponse;
import org.openapis.openapi.models.operations.GetChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelRequest req = new GetChannelRequest("voluptatum") {{
                aliases = false;
            }};            

            GetChannelResponse res = sdk.channel.getChannel(req, new GetChannelSecurity("iusto") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.getChannel200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listChannels

If you are interested in a list of channels that have had there schedule updated you can filter by the following query params.
 - scheduleStart
 - scheduleEnd
 - scheduleUpdatedSince

adding these query params will filter the channel collection to only return channels that have been updated within the given range, updatedSince stores the state of your previous call.

Example Usage: Every 10 minutes get me the channels that have updated schedules for the next 2 weeks.

/channel?platform={uuid}&scheduleStart={today}&scheduleEnd={today + 2 weeks}&updatedSince={10 minutes ago}

Also please note epg numbers are only exposed when a platform and region are passed to the query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListChannelsRequest;
import org.openapis.openapi.models.operations.ListChannelsResponse;
import org.openapis.openapi.models.operations.ListChannelsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListChannelsRequest req = new ListChannelsRequest() {{
                aliases = false;
                date = "excepturi";
                platformId = "nisi";
                regionId = "recusandae";
                scheduleEnd = "temporibus";
                scheduleStart = "ab";
                scheduleUpdatedSince = "quis";
            }};            

            ListChannelsResponse res = sdk.channel.listChannels(req, new ListChannelsSecurity("veritatis") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.listChannels200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
