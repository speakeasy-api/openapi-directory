# CustomEvents

### Available Operations

* [DfareportingCustomEventsBatchinsert](#dfareportingcustomeventsbatchinsert) - Inserts custom events.

## DfareportingCustomEventsBatchinsert

Inserts custom events.

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
    res, err := s.CustomEvents.DfareportingCustomEventsBatchinsert(ctx, operations.DfareportingCustomEventsBatchinsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CustomEventsBatchInsertRequest: &shared.CustomEventsBatchInsertRequest{
            CustomEvents: []shared.CustomEvent{
                shared.CustomEvent{
                    AnnotateClickEvent: &shared.CustomEventClickAnnotation{
                        Gclid: sdk.String("facere"),
                        Kind: sdk.String("exercitationem"),
                    },
                    AnnotateImpressionEvent: &shared.CustomEventImpressionAnnotation{
                        Kind: sdk.String("ut"),
                        PathImpressionID: sdk.String("dolore"),
                    },
                    CustomVariables: []shared.CustomVariable{
                        shared.CustomVariable{
                            Index: sdk.String("officia"),
                            Kind: sdk.String("reprehenderit"),
                            Value: sdk.String("nemo"),
                        },
                        shared.CustomVariable{
                            Index: sdk.String("nisi"),
                            Kind: sdk.String("consequuntur"),
                            Value: sdk.String("praesentium"),
                        },
                    },
                    EventType: shared.CustomEventEventTypeEnumInsert.ToPointer(),
                    FloodlightConfigurationID: sdk.String("dolorem"),
                    InsertEvent: &shared.CustomEventInsert{
                        CmDimensions: &shared.CampaignManagerIds{
                            AdID: sdk.String("placeat"),
                            CampaignID: sdk.String("dignissimos"),
                            CreativeID: sdk.String("quibusdam"),
                            Kind: sdk.String("placeat"),
                            PlacementID: sdk.String("natus"),
                            SiteID: sdk.String("accusamus"),
                        },
                        Dv3Dimensions: &shared.Dv3Ids{
                            DvCampaignID: sdk.String("repellat"),
                            DvCreativeID: sdk.String("est"),
                            DvInsertionOrderID: sdk.String("doloribus"),
                            DvLineItemID: sdk.String("labore"),
                            DvSiteID: sdk.String("adipisci"),
                            Kind: sdk.String("at"),
                        },
                        InsertEventType: shared.CustomEventInsertInsertEventTypeEnumClick.ToPointer(),
                        Kind: sdk.String("autem"),
                        MatchID: sdk.String("qui"),
                        MobileDeviceID: sdk.String("consectetur"),
                    },
                    Kind: sdk.String("ea"),
                    Ordinal: sdk.String("aspernatur"),
                    TimestampMicros: sdk.String("consequatur"),
                },
                shared.CustomEvent{
                    AnnotateClickEvent: &shared.CustomEventClickAnnotation{
                        Gclid: sdk.String("delectus"),
                        Kind: sdk.String("nesciunt"),
                    },
                    AnnotateImpressionEvent: &shared.CustomEventImpressionAnnotation{
                        Kind: sdk.String("et"),
                        PathImpressionID: sdk.String("dolor"),
                    },
                    CustomVariables: []shared.CustomVariable{
                        shared.CustomVariable{
                            Index: sdk.String("doloribus"),
                            Kind: sdk.String("nesciunt"),
                            Value: sdk.String("doloremque"),
                        },
                        shared.CustomVariable{
                            Index: sdk.String("at"),
                            Kind: sdk.String("tenetur"),
                            Value: sdk.String("sequi"),
                        },
                        shared.CustomVariable{
                            Index: sdk.String("temporibus"),
                            Kind: sdk.String("cum"),
                            Value: sdk.String("sit"),
                        },
                    },
                    EventType: shared.CustomEventEventTypeEnumUnknown.ToPointer(),
                    FloodlightConfigurationID: sdk.String("aspernatur"),
                    InsertEvent: &shared.CustomEventInsert{
                        CmDimensions: &shared.CampaignManagerIds{
                            AdID: sdk.String("earum"),
                            CampaignID: sdk.String("similique"),
                            CreativeID: sdk.String("id"),
                            Kind: sdk.String("exercitationem"),
                            PlacementID: sdk.String("commodi"),
                            SiteID: sdk.String("nostrum"),
                        },
                        Dv3Dimensions: &shared.Dv3Ids{
                            DvCampaignID: sdk.String("delectus"),
                            DvCreativeID: sdk.String("quidem"),
                            DvInsertionOrderID: sdk.String("rem"),
                            DvLineItemID: sdk.String("repellat"),
                            DvSiteID: sdk.String("suscipit"),
                            Kind: sdk.String("veniam"),
                        },
                        InsertEventType: shared.CustomEventInsertInsertEventTypeEnumUnknown.ToPointer(),
                        Kind: sdk.String("repudiandae"),
                        MatchID: sdk.String("nam"),
                        MobileDeviceID: sdk.String("libero"),
                    },
                    Kind: sdk.String("perspiciatis"),
                    Ordinal: sdk.String("illum"),
                    TimestampMicros: sdk.String("dolor"),
                },
                shared.CustomEvent{
                    AnnotateClickEvent: &shared.CustomEventClickAnnotation{
                        Gclid: sdk.String("praesentium"),
                        Kind: sdk.String("non"),
                    },
                    AnnotateImpressionEvent: &shared.CustomEventImpressionAnnotation{
                        Kind: sdk.String("deleniti"),
                        PathImpressionID: sdk.String("dolor"),
                    },
                    CustomVariables: []shared.CustomVariable{
                        shared.CustomVariable{
                            Index: sdk.String("ducimus"),
                            Kind: sdk.String("molestias"),
                            Value: sdk.String("aperiam"),
                        },
                        shared.CustomVariable{
                            Index: sdk.String("fugit"),
                            Kind: sdk.String("labore"),
                            Value: sdk.String("neque"),
                        },
                        shared.CustomVariable{
                            Index: sdk.String("cum"),
                            Kind: sdk.String("sed"),
                            Value: sdk.String("error"),
                        },
                    },
                    EventType: shared.CustomEventEventTypeEnumUnknown.ToPointer(),
                    FloodlightConfigurationID: sdk.String("facere"),
                    InsertEvent: &shared.CustomEventInsert{
                        CmDimensions: &shared.CampaignManagerIds{
                            AdID: sdk.String("est"),
                            CampaignID: sdk.String("soluta"),
                            CreativeID: sdk.String("neque"),
                            Kind: sdk.String("perferendis"),
                            PlacementID: sdk.String("vero"),
                            SiteID: sdk.String("excepturi"),
                        },
                        Dv3Dimensions: &shared.Dv3Ids{
                            DvCampaignID: sdk.String("dicta"),
                            DvCreativeID: sdk.String("iure"),
                            DvInsertionOrderID: sdk.String("doloribus"),
                            DvLineItemID: sdk.String("corporis"),
                            DvSiteID: sdk.String("alias"),
                            Kind: sdk.String("asperiores"),
                        },
                        InsertEventType: shared.CustomEventInsertInsertEventTypeEnumClick.ToPointer(),
                        Kind: sdk.String("animi"),
                        MatchID: sdk.String("alias"),
                        MobileDeviceID: sdk.String("non"),
                    },
                    Kind: sdk.String("porro"),
                    Ordinal: sdk.String("voluptatum"),
                    TimestampMicros: sdk.String("libero"),
                },
                shared.CustomEvent{
                    AnnotateClickEvent: &shared.CustomEventClickAnnotation{
                        Gclid: sdk.String("quasi"),
                        Kind: sdk.String("quidem"),
                    },
                    AnnotateImpressionEvent: &shared.CustomEventImpressionAnnotation{
                        Kind: sdk.String("soluta"),
                        PathImpressionID: sdk.String("exercitationem"),
                    },
                    CustomVariables: []shared.CustomVariable{
                        shared.CustomVariable{
                            Index: sdk.String("similique"),
                            Kind: sdk.String("magni"),
                            Value: sdk.String("unde"),
                        },
                        shared.CustomVariable{
                            Index: sdk.String("consequuntur"),
                            Kind: sdk.String("cum"),
                            Value: sdk.String("aut"),
                        },
                    },
                    EventType: shared.CustomEventEventTypeEnumAnnotate.ToPointer(),
                    FloodlightConfigurationID: sdk.String("quo"),
                    InsertEvent: &shared.CustomEventInsert{
                        CmDimensions: &shared.CampaignManagerIds{
                            AdID: sdk.String("non"),
                            CampaignID: sdk.String("libero"),
                            CreativeID: sdk.String("expedita"),
                            Kind: sdk.String("odio"),
                            PlacementID: sdk.String("quaerat"),
                            SiteID: sdk.String("aliquam"),
                        },
                        Dv3Dimensions: &shared.Dv3Ids{
                            DvCampaignID: sdk.String("laboriosam"),
                            DvCreativeID: sdk.String("nisi"),
                            DvInsertionOrderID: sdk.String("labore"),
                            DvLineItemID: sdk.String("accusamus"),
                            DvSiteID: sdk.String("cum"),
                            Kind: sdk.String("sunt"),
                        },
                        InsertEventType: shared.CustomEventInsertInsertEventTypeEnumClick.ToPointer(),
                        Kind: sdk.String("voluptatem"),
                        MatchID: sdk.String("non"),
                        MobileDeviceID: sdk.String("ipsum"),
                    },
                    Kind: sdk.String("laudantium"),
                    Ordinal: sdk.String("totam"),
                    TimestampMicros: sdk.String("facilis"),
                },
            },
            Kind: sdk.String("consequatur"),
        },
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fuga",
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("eveniet"),
    }, operations.DfareportingCustomEventsBatchinsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomEventsBatchInsertResponse != nil {
        // handle response
    }
}
```
