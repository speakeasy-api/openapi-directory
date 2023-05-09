# Events

### Available Operations

* [GamesEventsListByPlayer](#gameseventslistbyplayer) - Returns a list showing the current progress on events in this application for the currently authenticated user.
* [GamesEventsListDefinitions](#gameseventslistdefinitions) - Returns a list of the event definitions in this application.
* [GamesEventsRecord](#gameseventsrecord) - Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

## GamesEventsListByPlayer

Returns a list showing the current progress on events in this application for the currently authenticated user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Events.GamesEventsListByPlayer(ctx, operations.GamesEventsListByPlayerRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("repudiandae"),
        Language: sdk.String("sint"),
        MaxResults: sdk.Int64(83112),
        OauthToken: sdk.String("itaque"),
        PageToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("est"),
    }, operations.GamesEventsListByPlayerSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerEventListResponse != nil {
        // handle response
    }
}
```

## GamesEventsListDefinitions

Returns a list of the event definitions in this application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Events.GamesEventsListDefinitions(ctx, operations.GamesEventsListDefinitionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("labore"),
        Language: sdk.String("modi"),
        MaxResults: sdk.Int64(183191),
        OauthToken: sdk.String("aliquid"),
        PageToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("magni"),
    }, operations.GamesEventsListDefinitionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventDefinitionListResponse != nil {
        // handle response
    }
}
```

## GamesEventsRecord

Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Events.GamesEventsRecord(ctx, operations.GamesEventsRecordRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EventRecordRequest: &shared.EventRecordRequest{
            CurrentTimeMillis: sdk.String("ipsam"),
            Kind: sdk.String("alias"),
            RequestID: sdk.String("fugit"),
            TimePeriods: []shared.EventPeriodUpdate{
                shared.EventPeriodUpdate{
                    Kind: sdk.String("excepturi"),
                    TimePeriod: &shared.EventPeriodRange{
                        Kind: sdk.String("tempora"),
                        PeriodEndMillis: sdk.String("facilis"),
                        PeriodStartMillis: sdk.String("tempore"),
                    },
                    Updates: []shared.EventUpdateRequest{
                        shared.EventUpdateRequest{
                            DefinitionID: sdk.String("delectus"),
                            Kind: sdk.String("eum"),
                            UpdateCount: sdk.String("non"),
                        },
                        shared.EventUpdateRequest{
                            DefinitionID: sdk.String("eligendi"),
                            Kind: sdk.String("sint"),
                            UpdateCount: sdk.String("aliquid"),
                        },
                    },
                },
                shared.EventPeriodUpdate{
                    Kind: sdk.String("provident"),
                    TimePeriod: &shared.EventPeriodRange{
                        Kind: sdk.String("necessitatibus"),
                        PeriodEndMillis: sdk.String("sint"),
                        PeriodStartMillis: sdk.String("officia"),
                    },
                    Updates: []shared.EventUpdateRequest{
                        shared.EventUpdateRequest{
                            DefinitionID: sdk.String("debitis"),
                            Kind: sdk.String("a"),
                            UpdateCount: sdk.String("dolorum"),
                        },
                    },
                },
                shared.EventPeriodUpdate{
                    Kind: sdk.String("in"),
                    TimePeriod: &shared.EventPeriodRange{
                        Kind: sdk.String("in"),
                        PeriodEndMillis: sdk.String("illum"),
                        PeriodStartMillis: sdk.String("maiores"),
                    },
                    Updates: []shared.EventUpdateRequest{
                        shared.EventUpdateRequest{
                            DefinitionID: sdk.String("dicta"),
                            Kind: sdk.String("magnam"),
                            UpdateCount: sdk.String("cumque"),
                        },
                        shared.EventUpdateRequest{
                            DefinitionID: sdk.String("facere"),
                            Kind: sdk.String("ea"),
                            UpdateCount: sdk.String("aliquid"),
                        },
                        shared.EventUpdateRequest{
                            DefinitionID: sdk.String("laborum"),
                            Kind: sdk.String("accusamus"),
                            UpdateCount: sdk.String("non"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("quidem"),
        Language: sdk.String("provident"),
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.GamesEventsRecordSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventUpdateResponse != nil {
        // handle response
    }
}
```
