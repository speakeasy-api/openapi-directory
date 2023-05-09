# Channel

### Available Operations

* [GetChannel](#getchannel) - Channel Detail
* [ListChannels](#listchannels) - Channel Collection

## GetChannel

Return the content of the selected channel.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Channel.GetChannel(ctx, operations.GetChannelRequest{
        Aliases: sdk.Bool(false),
        ChannelID: "debitis",
    }, operations.GetChannelSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetChannel200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListChannels

If you are interested in a list of channels that have had there schedule updated you can filter by the following query params.
 - scheduleStart
 - scheduleEnd
 - scheduleUpdatedSince

adding these query params will filter the channel collection to only return channels that have been updated within the given range, updatedSince stores the state of your previous call.

Example Usage: Every 10 minutes get me the channels that have updated schedules for the next 2 weeks.

/channel?platform={uuid}&scheduleStart={today}&scheduleEnd={today + 2 weeks}&updatedSince={10 minutes ago}

Also please note epg numbers are only exposed when a platform and region are passed to the query.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Channel.ListChannels(ctx, operations.ListChannelsRequest{
        Aliases: sdk.Bool(false),
        Date: sdk.String("ipsa"),
        PlatformID: sdk.String("delectus"),
        RegionID: sdk.String("tempora"),
        ScheduleEnd: sdk.String("suscipit"),
        ScheduleStart: sdk.String("molestiae"),
        ScheduleUpdatedSince: sdk.String("minus"),
    }, operations.ListChannelsSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChannels200ApplicationJSONObject != nil {
        // handle response
    }
}
```
