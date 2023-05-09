# MarketingEventsExternal

### Available Operations

* [DeleteMarketingV3MarketingEventsEventsExternalEventIDArchive](#deletemarketingv3marketingeventseventsexternaleventidarchive)
* [GetMarketingV3MarketingEventsEventsExternalEventIDGetByID](#getmarketingv3marketingeventseventsexternaleventidgetbyid)
* [PatchMarketingV3MarketingEventsEventsExternalEventIDUpdate](#patchmarketingv3marketingeventseventsexternaleventidupdate)
* [PostMarketingV3MarketingEventsEventsDeleteArchiveBatch](#postmarketingv3marketingeventseventsdeletearchivebatch)
* [PostMarketingV3MarketingEventsEventsUpsertDoUpsert](#postmarketingv3marketingeventseventsupsertdoupsert)
* [PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancel](#postmarketingv3marketingeventseventsexternaleventidcanceldocancel)
* [PostMarketingV3MarketingEventsEventsExternalEventIDCompleteComplete](#postmarketingv3marketingeventseventsexternaleventidcompletecomplete)
* [PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByID](#postmarketingv3marketingeventseventsexternaleventidsubscriberstateemailupsertdoemailupsertbyid)
* [PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByID](#postmarketingv3marketingeventseventsexternaleventidsubscriberstateupsertdoupsertbyid)
* [PostMarketingV3MarketingEventsEventsCreate](#postmarketingv3marketingeventseventscreate)
* [PutMarketingV3MarketingEventsEventsExternalEventIDReplace](#putmarketingv3marketingeventseventsexternaleventidreplace)

## DeleteMarketingV3MarketingEventsEventsExternalEventIDArchive

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
    res, err := s.MarketingEventsExternal.DeleteMarketingV3MarketingEventsEventsExternalEventIDArchive(ctx, operations.DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveRequest{
        ExternalAccountID: "mollitia",
        ExternalEventID: "laborum",
    }, operations.DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMarketingV3MarketingEventsEventsExternalEventIDGetByID

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
    res, err := s.MarketingEventsExternal.GetMarketingV3MarketingEventsEventsExternalEventIDGetByID(ctx, operations.GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDRequest{
        ExternalAccountID: "dolores",
        ExternalEventID: "dolorem",
    }, operations.GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarketingEventPublicReadResponse != nil {
        // handle response
    }
}
```

## PatchMarketingV3MarketingEventsEventsExternalEventIDUpdate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MarketingEventsExternal.PatchMarketingV3MarketingEventsEventsExternalEventIDUpdate(ctx, operations.PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateRequest{
        MarketingEventUpdateRequestParams: shared.MarketingEventUpdateRequestParams{
            CustomProperties: []shared.PropertyValue{
                shared.PropertyValue{
                    Name: "Della Halvorson",
                    PersistenceTimestamp: sdk.Int64(325047),
                    RequestID: "excepturi",
                    SelectedByUser: false,
                    SelectedByUserTimestamp: 38425,
                    Source: shared.PropertyValueSourceEnumGmailIntegration,
                    SourceID: "culpa",
                    SourceLabel: "doloribus",
                    SourceMetadata: "sapiente",
                    SourceVid: []int64{
                        652790,
                    },
                    Timestamp: 208876,
                    UpdatedByUserID: sdk.Int(635059),
                    UseTimestampAsPersistenceTimestamp: sdk.Bool(false),
                    Value: "consequuntur",
                },
                shared.PropertyValue{
                    Name: "Shaun McCullough",
                    PersistenceTimestamp: sdk.Int64(466311),
                    RequestID: "molestiae",
                    SelectedByUser: false,
                    SelectedByUserTimestamp: 244425,
                    Source: shared.PropertyValueSourceEnumAutomationPlatform,
                    SourceID: "quia",
                    SourceLabel: "quis",
                    SourceMetadata: "vitae",
                    SourceVid: []int64{
                        656330,
                        317202,
                        138183,
                    },
                    Timestamp: 778346,
                    UpdatedByUserID: sdk.Int(196582),
                    UseTimestampAsPersistenceTimestamp: sdk.Bool(false),
                    Value: "tenetur",
                },
            },
            EndDateTime: types.MustTimeFromString("2022-05-04T04:15:52.352Z"),
            EventCancelled: sdk.Bool(false),
            EventDescription: sdk.String("possimus"),
            EventName: sdk.String("aut"),
            EventOrganizer: sdk.String("quasi"),
            EventType: sdk.String("error"),
            EventURL: sdk.String("temporibus"),
            StartDateTime: types.MustTimeFromString("2022-10-22T20:21:20.741Z"),
        },
        ExternalAccountID: "reiciendis",
        ExternalEventID: "voluptatibus",
    }, operations.PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarketingEventPublicDefaultResponse != nil {
        // handle response
    }
}
```

## PostMarketingV3MarketingEventsEventsDeleteArchiveBatch

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MarketingEventsExternal.PostMarketingV3MarketingEventsEventsDeleteArchiveBatch(ctx, shared.BatchInputMarketingEventExternalUniqueIdentifier{
        Inputs: []shared.MarketingEventExternalUniqueIdentifier{
            shared.MarketingEventExternalUniqueIdentifier{
                AppID: 468651,
                ExternalAccountID: "praesentium",
                ExternalEventID: "voluptatibus",
            },
            shared.MarketingEventExternalUniqueIdentifier{
                AppID: 55714,
                ExternalAccountID: "omnis",
                ExternalEventID: "voluptate",
            },
            shared.MarketingEventExternalUniqueIdentifier{
                AppID: 739264,
                ExternalAccountID: "perferendis",
                ExternalEventID: "doloremque",
            },
            shared.MarketingEventExternalUniqueIdentifier{
                AppID: 441711,
                ExternalAccountID: "ut",
                ExternalEventID: "maiores",
            },
        },
    }, operations.PostMarketingV3MarketingEventsEventsDeleteArchiveBatchSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostMarketingV3MarketingEventsEventsUpsertDoUpsert

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MarketingEventsExternal.PostMarketingV3MarketingEventsEventsUpsertDoUpsert(ctx, shared.BatchInputMarketingEventCreateRequestParams{
        Inputs: []shared.MarketingEventCreateRequestParams{
            shared.MarketingEventCreateRequestParams{
                CustomProperties: []shared.PropertyValue{
                    shared.PropertyValue{
                        Name: "Heidi Carter",
                        PersistenceTimestamp: sdk.Int64(880476),
                        RequestID: "commodi",
                        SelectedByUser: false,
                        SelectedByUserTimestamp: 918236,
                        Source: shared.PropertyValueSourceEnumSalesforce,
                        SourceID: "ipsum",
                        SourceLabel: "quidem",
                        SourceMetadata: "molestias",
                        SourceVid: []int64{
                            865103,
                            265389,
                            508969,
                        },
                        Timestamp: 523248,
                        UpdatedByUserID: sdk.Int(916723),
                        UseTimestampAsPersistenceTimestamp: sdk.Bool(false),
                        Value: "quasi",
                    },
                    shared.PropertyValue{
                        Name: "Kirk Boehm",
                        PersistenceTimestamp: sdk.Int64(318569),
                        RequestID: "consequatur",
                        SelectedByUser: false,
                        SelectedByUserTimestamp: 667411,
                        Source: shared.PropertyValueSourceEnumCompanyInsights,
                        SourceID: "explicabo",
                        SourceLabel: "deserunt",
                        SourceMetadata: "distinctio",
                        SourceVid: []int64{
                            289406,
                            264730,
                            183191,
                            397821,
                        },
                        Timestamp: 586513,
                        UpdatedByUserID: sdk.Int(552822),
                        UseTimestampAsPersistenceTimestamp: sdk.Bool(false),
                        Value: "perferendis",
                    },
                },
                EndDateTime: types.MustTimeFromString("2022-03-04T10:29:07.095Z"),
                EventCancelled: sdk.Bool(false),
                EventDescription: sdk.String("ipsam"),
                EventName: "alias",
                EventOrganizer: "fugit",
                EventType: sdk.String("dolorum"),
                EventURL: sdk.String("excepturi"),
                ExternalAccountID: "tempora",
                ExternalEventID: "facilis",
                StartDateTime: types.MustTimeFromString("2022-06-04T09:53:33.742Z"),
            },
        },
    }, operations.PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchResponseMarketingEventPublicDefaultResponse != nil {
        // handle response
    }
}
```

## PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancel

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
    res, err := s.MarketingEventsExternal.PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancel(ctx, operations.PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelRequest{
        ExternalAccountID: "delectus",
        ExternalEventID: "eum",
    }, operations.PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarketingEventDefaultResponse != nil {
        // handle response
    }
}
```

## PostMarketingV3MarketingEventsEventsExternalEventIDCompleteComplete

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MarketingEventsExternal.PostMarketingV3MarketingEventsEventsExternalEventIDCompleteComplete(ctx, operations.PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteRequest{
        MarketingEventCompleteRequestParams: shared.MarketingEventCompleteRequestParams{
            EndDateTime: types.MustTimeFromString("2022-03-31T00:30:19.135Z"),
            StartDateTime: types.MustTimeFromString("2022-03-17T20:21:28.792Z"),
        },
        ExternalAccountID: "provident",
        ExternalEventID: "necessitatibus",
    }, operations.PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarketingEventDefaultResponse != nil {
        // handle response
    }
}
```

## PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByID

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
    res, err := s.MarketingEventsExternal.PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByID(ctx, operations.PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDRequest{
        BatchInputMarketingEventEmailSubscriber: shared.BatchInputMarketingEventEmailSubscriber{
            Inputs: []shared.MarketingEventEmailSubscriber{
                shared.MarketingEventEmailSubscriber{
                    ContactProperties: map[string]string{
                        "dolor": "debitis",
                        "a": "dolorum",
                        "in": "in",
                    },
                    Email: "Wilford29@hotmail.com",
                    InteractionDateTime: 767024,
                    Properties: map[string]string{
                        "ea": "aliquid",
                        "laborum": "accusamus",
                        "non": "occaecati",
                        "enim": "accusamus",
                    },
                },
                shared.MarketingEventEmailSubscriber{
                    ContactProperties: map[string]string{
                        "quidem": "provident",
                        "nam": "id",
                        "blanditiis": "deleniti",
                        "sapiente": "amet",
                    },
                    Email: "Golda_Kassulke@yahoo.com",
                    InteractionDateTime: 474867,
                    Properties: map[string]string{
                        "nihil": "magnam",
                    },
                },
                shared.MarketingEventEmailSubscriber{
                    ContactProperties: map[string]string{
                        "id": "labore",
                        "labore": "suscipit",
                        "natus": "nobis",
                    },
                    Email: "Shaina29@yahoo.com",
                    InteractionDateTime: 92373,
                    Properties: map[string]string{
                        "ullam": "provident",
                        "quos": "sint",
                        "accusantium": "mollitia",
                    },
                },
            },
        },
        ExternalAccountID: "reiciendis",
        ExternalEventID: "mollitia",
        SubscriberState: "ad",
    }, operations.PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByID

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
    res, err := s.MarketingEventsExternal.PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByID(ctx, operations.PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDRequest{
        BatchInputMarketingEventSubscriber: shared.BatchInputMarketingEventSubscriber{
            Inputs: []shared.MarketingEventSubscriber{
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 221262,
                    Properties: map[string]string{
                        "odit": "nemo",
                        "quasi": "iure",
                        "doloribus": "debitis",
                        "eius": "maxime",
                    },
                    Vid: sdk.Int(537023),
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 703889,
                    Properties: map[string]string{
                        "architecto": "architecto",
                        "repudiandae": "ullam",
                    },
                    Vid: sdk.Int(714242),
                },
            },
        },
        ExternalAccountID: "nihil",
        ExternalEventID: "repellat",
        SubscriberState: "quibusdam",
    }, operations.PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostMarketingV3MarketingEventsEventsCreate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MarketingEventsExternal.PostMarketingV3MarketingEventsEventsCreate(ctx, shared.MarketingEventCreateRequestParams{
        CustomProperties: []shared.PropertyValue{
            shared.PropertyValue{
                Name: "Al Bashirian",
                PersistenceTimestamp: sdk.Int64(615560),
                RequestID: "magni",
                SelectedByUser: false,
                SelectedByUserTimestamp: 123820,
                Source: shared.PropertyValueSourceEnumAiGroup,
                SourceID: "illum",
                SourceLabel: "pariatur",
                SourceMetadata: "maxime",
                SourceVid: []int64{
                    569101,
                    139972,
                },
                Timestamp: 407183,
                UpdatedByUserID: sdk.Int(33222),
                UseTimestampAsPersistenceTimestamp: sdk.Bool(false),
                Value: "ab",
            },
        },
        EndDateTime: types.MustTimeFromString("2020-11-28T07:34:18.392Z"),
        EventCancelled: sdk.Bool(false),
        EventDescription: sdk.String("ipsam"),
        EventName: "voluptate",
        EventOrganizer: "autem",
        EventType: sdk.String("nam"),
        EventURL: sdk.String("eaque"),
        ExternalAccountID: "pariatur",
        ExternalEventID: "nemo",
        StartDateTime: types.MustTimeFromString("2022-12-13T19:01:00.083Z"),
    }, operations.PostMarketingV3MarketingEventsEventsCreateSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarketingEventDefaultResponse != nil {
        // handle response
    }
}
```

## PutMarketingV3MarketingEventsEventsExternalEventIDReplace

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MarketingEventsExternal.PutMarketingV3MarketingEventsEventsExternalEventIDReplace(ctx, operations.PutMarketingV3MarketingEventsEventsExternalEventIDReplaceRequest{
        MarketingEventCreateRequestParams: shared.MarketingEventCreateRequestParams{
            CustomProperties: []shared.PropertyValue{
                shared.PropertyValue{
                    Name: "Jennifer Runolfsdottir",
                    PersistenceTimestamp: sdk.Int64(729991),
                    RequestID: "nobis",
                    SelectedByUser: false,
                    SelectedByUserTimestamp: 171629,
                    Source: shared.PropertyValueSourceEnumPortalUserAssociator,
                    SourceID: "totam",
                    SourceLabel: "dignissimos",
                    SourceMetadata: "eaque",
                    SourceVid: []int64{
                        199996,
                        179490,
                    },
                    Timestamp: 18521,
                    UpdatedByUserID: sdk.Int(170986),
                    UseTimestampAsPersistenceTimestamp: sdk.Bool(false),
                    Value: "minus",
                },
                shared.PropertyValue{
                    Name: "Rosa Swift",
                    PersistenceTimestamp: sdk.Int64(928082),
                    RequestID: "omnis",
                    SelectedByUser: false,
                    SelectedByUserTimestamp: 704415,
                    Source: shared.PropertyValueSourceEnumBot,
                    SourceID: "voluptatem",
                    SourceLabel: "porro",
                    SourceMetadata: "consequuntur",
                    SourceVid: []int64{
                        621479,
                        50370,
                        577229,
                    },
                    Timestamp: 699098,
                    UpdatedByUserID: sdk.Int(237893),
                    UseTimestampAsPersistenceTimestamp: sdk.Bool(false),
                    Value: "asperiores",
                },
                shared.PropertyValue{
                    Name: "Edwin Morar",
                    PersistenceTimestamp: sdk.Int64(864282),
                    RequestID: "provident",
                    SelectedByUser: false,
                    SelectedByUserTimestamp: 750844,
                    Source: shared.PropertyValueSourceEnumMeetings,
                    SourceID: "delectus",
                    SourceLabel: "quaerat",
                    SourceMetadata: "quos",
                    SourceVid: []int64{
                        212390,
                        209843,
                    },
                    Timestamp: 222443,
                    UpdatedByUserID: sdk.Int(186193),
                    UseTimestampAsPersistenceTimestamp: sdk.Bool(false),
                    Value: "ipsum",
                },
                shared.PropertyValue{
                    Name: "Marshall Ritchie",
                    PersistenceTimestamp: sdk.Int64(970237),
                    RequestID: "amet",
                    SelectedByUser: false,
                    SelectedByUserTimestamp: 680545,
                    Source: shared.PropertyValueSourceEnumAssists,
                    SourceID: "veritatis",
                    SourceLabel: "ipsa",
                    SourceMetadata: "ipsa",
                    SourceVid: []int64{
                        487838,
                        311796,
                    },
                    Timestamp: 881005,
                    UpdatedByUserID: sdk.Int(696344),
                    UseTimestampAsPersistenceTimestamp: sdk.Bool(false),
                    Value: "voluptatibus",
                },
            },
            EndDateTime: types.MustTimeFromString("2022-05-20T13:18:59.478Z"),
            EventCancelled: sdk.Bool(false),
            EventDescription: sdk.String("eos"),
            EventName: "atque",
            EventOrganizer: "sit",
            EventType: sdk.String("fugiat"),
            EventURL: sdk.String("ab"),
            ExternalAccountID: "soluta",
            ExternalEventID: "dolorum",
            StartDateTime: types.MustTimeFromString("2022-07-19T09:36:55.923Z"),
        },
        ExternalEventID: "dolorum",
    }, operations.PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarketingEventPublicDefaultResponse != nil {
        // handle response
    }
}
```
