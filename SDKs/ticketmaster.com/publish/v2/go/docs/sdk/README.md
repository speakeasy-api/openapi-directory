# SDK

## Overview

Publish API

### Available Operations

* [PatchAttraction](#patchattraction) - Publish a patch on an attraction
* [PatchEvent](#patchevent) - Publish a patch on an event
* [PatchVenue](#patchvenue) - Publish a patch on a venue
* [PublishAttraction](#publishattraction) - Publish an attractions
* [PublishAttractionVideos](#publishattractionvideos) - Publish a video on an attraction
* [PublishEntitlements](#publishentitlements) - Publish entitlements on an entity
* [PublishEvent](#publishevent) - Publish an event
* [PublishEventVideos](#publisheventvideos) - Publish a video on an event
* [PublishExtension](#publishextension) - Publish extension on an entity
* [PublishVenue](#publishvenue) - Publish a venue

## PatchAttraction

Since 1.0.0

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
    res, err := s.SDK.PatchAttraction(ctx, operations.PatchAttractionRequest{
        AugmentationData: shared.AugmentationData{
            Changes: []shared.Change{
                shared.Change{
                    From: sdk.String("dolor"),
                    Op: shared.ChangeOpEnumMove,
                    Path: "laboriosam",
                    Value: map[string]interface{}{
                        "saepe": "fuga",
                        "in": "corporis",
                        "iste": "iure",
                        "saepe": "quidem",
                    },
                },
                shared.Change{
                    From: sdk.String("architecto"),
                    Op: shared.ChangeOpEnumAdd,
                    Path: "reiciendis",
                    Value: map[string]interface{}{
                        "mollitia": "laborum",
                        "dolores": "dolorem",
                        "corporis": "explicabo",
                    },
                },
                shared.Change{
                    From: sdk.String("nobis"),
                    Op: shared.ChangeOpEnumRemove,
                    Path: "omnis",
                    Value: map[string]interface{}{
                        "minima": "excepturi",
                        "accusantium": "iure",
                    },
                },
            },
            RelatedEntityID: "culpa",
            RelatedEntityType: shared.AugmentationDataRelatedEntityTypeEnumVenue,
            Score: sdk.Float32(9589.5),
            Source: "architecto",
            VersionNumber: 652790,
        },
        TMPSCorrelationID: "dolorem",
        ID: "a2fa9467-7392-451a-a52c-3f5ad019da1f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PatchEvent

Since 1.0.0

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
    res, err := s.SDK.PatchEvent(ctx, operations.PatchEventRequest{
        AugmentationData: shared.AugmentationData{
            Changes: []shared.Change{
                shared.Change{
                    From: sdk.String("vero"),
                    Op: shared.ChangeOpEnumReplace,
                    Path: "praesentium",
                    Value: map[string]interface{}{
                        "ipsa": "omnis",
                        "voluptate": "cum",
                        "perferendis": "doloremque",
                        "reprehenderit": "ut",
                    },
                },
                shared.Change{
                    From: sdk.String("maiores"),
                    Op: shared.ChangeOpEnumAdd,
                    Path: "corporis",
                    Value: map[string]interface{}{
                        "iusto": "dicta",
                        "harum": "enim",
                    },
                },
                shared.Change{
                    From: sdk.String("accusamus"),
                    Op: shared.ChangeOpEnumReplace,
                    Path: "repudiandae",
                    Value: map[string]interface{}{
                        "ipsum": "quidem",
                    },
                },
                shared.Change{
                    From: sdk.String("molestias"),
                    Op: shared.ChangeOpEnumMove,
                    Path: "pariatur",
                    Value: map[string]interface{}{
                        "praesentium": "rem",
                        "voluptates": "quasi",
                    },
                },
            },
            RelatedEntityID: "repudiandae",
            RelatedEntityType: shared.AugmentationDataRelatedEntityTypeEnumAttraction,
            Score: sdk.Float32(831.12),
            Source: "itaque",
            VersionNumber: 277718,
        },
        TMPSCorrelationID: "enim",
        ID: "0ad2abd4-4269-4802-9502-a94bb4f63c96",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PatchVenue

Since 1.0.0

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
    res, err := s.SDK.PatchVenue(ctx, operations.PatchVenueRequest{
        AugmentationData: shared.AugmentationData{
            Changes: []shared.Change{
                shared.Change{
                    From: sdk.String("necessitatibus"),
                    Op: shared.ChangeOpEnumMove,
                    Path: "officia",
                    Value: map[string]interface{}{
                        "debitis": "a",
                    },
                },
                shared.Change{
                    From: sdk.String("dolorum"),
                    Op: shared.ChangeOpEnumReplace,
                    Path: "in",
                    Value: map[string]interface{}{
                        "maiores": "rerum",
                        "dicta": "magnam",
                        "cumque": "facere",
                        "ea": "aliquid",
                    },
                },
                shared.Change{
                    From: sdk.String("laborum"),
                    Op: shared.ChangeOpEnumTest,
                    Path: "non",
                    Value: map[string]interface{}{
                        "enim": "accusamus",
                        "delectus": "quidem",
                        "provident": "nam",
                    },
                },
            },
            RelatedEntityID: "id",
            RelatedEntityType: shared.AugmentationDataRelatedEntityTypeEnumAttraction,
            Score: sdk.Float32(5332.06),
            Source: "sapiente",
            VersionNumber: 230533,
        },
        TMPSCorrelationID: "deserunt",
        ID: "66997074-ba44-469b-ae21-41959890afa5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PublishAttraction

Since 1.0.0

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
    res, err := s.SDK.PublishAttraction(ctx, operations.PublishAttractionRequest{
        Attraction: shared.Attraction{
            Active: sdk.Bool(false),
            AdditionalInfos: map[string]string{
                "dolor": "necessitatibus",
                "odit": "nemo",
            },
            Classifications: []shared.Classification{
                shared.Classification{
                    Genre: &shared.Level{
                        ID: sdk.String("6fe4c8b7-11e5-4b7f-92ed-028921cddc69"),
                        Names: map[string]string{
                            "ea": "accusantium",
                        },
                    },
                    Primary: sdk.Bool(false),
                    Segment: &shared.Segment{
                        ID: sdk.String("1fb576b0-d5f0-4d30-85fb-b2587053202c"),
                        Names: map[string]string{
                            "dolor": "vero",
                            "nostrum": "hic",
                        },
                    },
                    SubGenre: &shared.Level{
                        ID: sdk.String("e9b90c28-909b-43fe-89a8-d9cbf4863332"),
                        Names: map[string]string{
                            "hic": "excepturi",
                        },
                    },
                    SubType: &shared.Level{
                        ID: sdk.String("b77f3a41-0067-44eb-b692-80d1ba77a89e"),
                        Names: map[string]string{
                            "asperiores": "nihil",
                            "ipsum": "voluptate",
                            "id": "saepe",
                        },
                    },
                    Type: &shared.Level{
                        ID: sdk.String("4203ce5e-6a95-4d8a-8d44-6ce2af7a73cf"),
                        Names: map[string]string{
                            "tempore": "accusamus",
                        },
                    },
                },
            },
            Descriptions: map[string]string{
                "enim": "dolorem",
                "sapiente": "totam",
            },
            Discoverable: sdk.Bool(false),
            Images: []shared.Image{
                shared.Image{
                    Attribution: sdk.String("sit"),
                    Domains: []string{
                        "neque",
                        "sed",
                        "vel",
                    },
                    Fallback: sdk.Bool(false),
                    Height: sdk.Int(730442),
                    Ratio: shared.ImageRatioEnumZero.ToPointer(),
                    URL: sdk.String("voluptas"),
                    Width: sdk.Int(646265),
                },
                shared.Image{
                    Attribution: sdk.String("quam"),
                    Domains: []string{
                        "incidunt",
                    },
                    Fallback: sdk.Bool(false),
                    Height: sdk.Int(186458),
                    Ratio: shared.ImageRatioEnumZero.ToPointer(),
                    URL: sdk.String("cupiditate"),
                    Width: sdk.Int(807581),
                },
            },
            Names: map[string]string{
                "soluta": "dicta",
                "laborum": "totam",
                "incidunt": "aspernatur",
                "dolores": "distinctio",
            },
            References: map[string]string{
                "aliquid": "quam",
                "molestias": "temporibus",
                "qui": "neque",
            },
            Relationships: []map[string]interface{}{
                map[string]interface{}{
                    "odio": "sunt",
                },
            },
            Source: &shared.Source{
                ID: sdk.String("5bf0cbb1-e31b-48b9-8f34-43a1108e0adc"),
                Name: sdk.String("Alexander Prosacco"),
            },
            Test: sdk.Bool(false),
            Type: shared.AttractionTypeEnumEvent,
            URL: sdk.String("laudantium"),
            Version: sdk.Int64(485628),
        },
        TMPSCorrelationID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PublishAttractionVideos

Since 1.0.0

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
    res, err := s.SDK.PublishAttractionVideos(ctx, operations.PublishAttractionVideosRequest{
        TMPSCorrelationID: "voluptatibus",
        Video: shared.Video{
            EmbedURL: sdk.String("quisquam"),
            LicensingInformation: shared.LicensingInformation{
                License: "vero",
                RegionRestriction: &shared.RegionRestrictions{
                    Allowed: []string{
                        "quis",
                        "ipsum",
                        "delectus",
                    },
                },
            },
            Source: shared.Source{
                ID: sdk.String("73ef7fbc-7abd-474d-939c-0f5d2cff7c70"),
                Name: sdk.String("Don Hills"),
            },
            URL: "vel",
        },
        ID: "d436813f-16d9-4f5f-8e6c-556146c3e250",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PublishEntitlements

Since 2.0.0

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
    res, err := s.SDK.PublishEntitlements(ctx, operations.PublishEntitlementsRequest{
        Entitlement: shared.Entitlement{
            Data: map[string]interface{}{
                "libero": "aut",
                "aut": "deleniti",
                "impedit": "aliquam",
                "fugit": "accusamus",
            },
            RelatedEntityID: sdk.String("inventore"),
            RelatedEntitySource: &shared.Source{
                ID: sdk.String("41aac366-c8dd-46b1-8429-07474778a7bd"),
                Name: sdk.String("Agnes Hoeger"),
            },
            RelatedEntityType: shared.EntitlementRelatedEntityTypeEnumVenue,
            Source: shared.EntitlementSourceEnumTicketmaster,
            VersionNumber: sdk.Int64(788546),
        },
        TMPSCorrelationID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PublishEvent

Since 1.0.0

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
    res, err := s.SDK.PublishEvent(ctx, operations.PublishEventRequest{
        Event: shared.Event{
            Active: sdk.Bool(false),
            AdditionalInfos: map[string]string{
                "id": "quidem",
            },
            Attractions: []shared.Attraction{
                shared.Attraction{
                    Active: sdk.Bool(false),
                    AdditionalInfos: map[string]string{
                        "illum": "quo",
                        "fuga": "eius",
                        "eos": "voluptas",
                        "ab": "cupiditate",
                    },
                    Classifications: []shared.Classification{
                        shared.Classification{
                            Genre: &shared.Level{
                                ID: sdk.String("4e523c7e-0bc7-4178-a479-6f2a70c68828"),
                                Names: map[string]string{
                                    "fuga": "mollitia",
                                },
                            },
                            Primary: sdk.Bool(false),
                            Segment: &shared.Segment{
                                ID: sdk.String("482562f2-22e9-4817-ae17-cbe61e6b7b95"),
                                Names: map[string]string{
                                    "eligendi": "sit",
                                    "culpa": "tempore",
                                    "adipisci": "cumque",
                                },
                            },
                            SubGenre: &shared.Level{
                                ID: sdk.String("20c4f378-9fd8-471f-99dd-2efd121aa6f1"),
                                Names: map[string]string{
                                    "vel": "in",
                                    "eius": "libero",
                                    "illum": "soluta",
                                    "accusantium": "aliquam",
                                },
                            },
                            SubType: &shared.Level{
                                ID: sdk.String("f1575608-2d68-4ea1-9f1d-17051339d080"),
                                Names: map[string]string{
                                    "eum": "mollitia",
                                    "ab": "corrupti",
                                    "non": "voluptatem",
                                },
                            },
                            Type: &shared.Level{
                                ID: sdk.String("394c2607-1f93-4f5f-8642-dac7af515cc4"),
                                Names: map[string]string{
                                    "adipisci": "fuga",
                                },
                            },
                        },
                    },
                    Descriptions: map[string]string{
                        "suscipit": "velit",
                        "culpa": "est",
                        "recusandae": "totam",
                    },
                    Discoverable: sdk.Bool(false),
                    Images: []shared.Image{
                        shared.Image{
                            Attribution: sdk.String("vel"),
                            Domains: []string{
                                "quos",
                                "vel",
                            },
                            Fallback: sdk.Bool(false),
                            Height: sdk.Int(287051),
                            Ratio: shared.ImageRatioEnumZero.ToPointer(),
                            URL: sdk.String("possimus"),
                            Width: sdk.Int(706575),
                        },
                        shared.Image{
                            Attribution: sdk.String("cum"),
                            Domains: []string{
                                "in",
                                "corporis",
                            },
                            Fallback: sdk.Bool(false),
                            Height: sdk.Int(968904),
                            Ratio: shared.ImageRatioEnumZero.ToPointer(),
                            URL: sdk.String("assumenda"),
                            Width: sdk.Int(363161),
                        },
                        shared.Image{
                            Attribution: sdk.String("recusandae"),
                            Domains: []string{
                                "aperiam",
                                "cum",
                            },
                            Fallback: sdk.Bool(false),
                            Height: sdk.Int(232627),
                            Ratio: shared.ImageRatioEnumZero.ToPointer(),
                            URL: sdk.String("in"),
                            Width: sdk.Int(348519),
                        },
                        shared.Image{
                            Attribution: sdk.String("earum"),
                            Domains: []string{
                                "numquam",
                                "doloribus",
                                "suscipit",
                                "reiciendis",
                            },
                            Fallback: sdk.Bool(false),
                            Height: sdk.Int(697142),
                            Ratio: shared.ImageRatioEnumZero.ToPointer(),
                            URL: sdk.String("saepe"),
                            Width: sdk.Int(897071),
                        },
                    },
                    Names: map[string]string{
                        "sunt": "asperiores",
                        "adipisci": "non",
                    },
                    References: map[string]string{
                        "beatae": "dignissimos",
                    },
                    Relationships: []map[string]interface{}{
                        map[string]interface{}{
                            "consectetur": "corporis",
                            "harum": "laboriosam",
                            "ipsa": "voluptates",
                            "libero": "vitae",
                        },
                        map[string]interface{}{
                            "similique": "tempora",
                            "aspernatur": "voluptas",
                            "voluptas": "voluptas",
                            "minima": "nobis",
                        },
                        map[string]interface{}{
                            "adipisci": "minus",
                            "dolores": "blanditiis",
                            "in": "dolore",
                        },
                        map[string]interface{}{
                            "officiis": "temporibus",
                            "ullam": "adipisci",
                        },
                    },
                    Source: &shared.Source{
                        ID: sdk.String("b88f3a8d-8f5c-40b2-b2fb-7b194a276b26"),
                        Name: sdk.String("Joe Hoppe"),
                    },
                    Test: sdk.Bool(false),
                    Type: shared.AttractionTypeEnumEvent,
                    URL: sdk.String("reiciendis"),
                    Version: sdk.Int64(19300),
                },
            },
            Classifications: []shared.Classification{
                shared.Classification{
                    Genre: &shared.Level{
                        ID: sdk.String("f4294e36-98f4-447f-a03e-8b445e80ca55"),
                        Names: map[string]string{
                            "reiciendis": "nulla",
                            "magni": "aperiam",
                            "saepe": "numquam",
                            "veniam": "in",
                        },
                    },
                    Primary: sdk.Bool(false),
                    Segment: &shared.Segment{
                        ID: sdk.String("e1858b6a-89fb-4e3a-9aa8-e4824d0ab407"),
                        Names: map[string]string{
                            "sit": "voluptatum",
                            "quas": "repudiandae",
                        },
                    },
                    SubGenre: &shared.Level{
                        ID: sdk.String("51862065-e904-4f3b-9194-b8abf603a79f"),
                        Names: map[string]string{
                            "repellendus": "delectus",
                            "voluptates": "perferendis",
                            "est": "quidem",
                        },
                    },
                    SubType: &shared.Level{
                        ID: sdk.String("7da8a50c-e187-4f86-bc17-3d689eee9526"),
                        Names: map[string]string{
                            "corrupti": "at",
                            "error": "blanditiis",
                            "suscipit": "repudiandae",
                            "atque": "atque",
                        },
                    },
                    Type: &shared.Level{
                        ID: sdk.String("1ead4f0e-1012-4563-b94e-29e973e922a5"),
                        Names: map[string]string{
                            "error": "illo",
                            "corporis": "quidem",
                        },
                    },
                },
                shared.Classification{
                    Genre: &shared.Level{
                        ID: sdk.String("e3e06080-7e2b-46e3-ab88-45f0597a60ff"),
                        Names: map[string]string{
                            "id": "minima",
                        },
                    },
                    Primary: sdk.Bool(false),
                    Segment: &shared.Segment{
                        ID: sdk.String("4a31e947-64a3-4e86-9e79-56f9251a5a9d"),
                        Names: map[string]string{
                            "ex": "aliquid",
                            "accusantium": "repellat",
                            "doloribus": "ullam",
                        },
                    },
                    SubGenre: &shared.Level{
                        ID: sdk.String("7bfaad4f-9efc-41b4-912c-1032648dc2f6"),
                        Names: map[string]string{
                            "minima": "beatae",
                        },
                    },
                    SubType: &shared.Level{
                        ID: sdk.String("99ebfd0e-9fe6-4c63-aca3-aed011799631"),
                        Names: map[string]string{
                            "doloribus": "nulla",
                        },
                    },
                    Type: &shared.Level{
                        ID: sdk.String("e0477177-8ff6-41d0-9747-6360a15db6a6"),
                        Names: map[string]string{
                            "perferendis": "eum",
                            "voluptas": "iste",
                        },
                    },
                },
                shared.Classification{
                    Genre: &shared.Level{
                        ID: sdk.String("a1adeaab-5851-4d6c-a45b-08b61891baa0"),
                        Names: map[string]string{
                            "officiis": "architecto",
                            "fuga": "pariatur",
                            "debitis": "voluptatem",
                            "alias": "deleniti",
                        },
                    },
                    Primary: sdk.Bool(false),
                    Segment: &shared.Segment{
                        ID: sdk.String("e6f8c5f3-50d8-4cdb-9a34-181430104218"),
                        Names: map[string]string{
                            "dolor": "fugiat",
                        },
                    },
                    SubGenre: &shared.Level{
                        ID: sdk.String("5208ece7-e253-4b66-8451-c6c6e205e16d"),
                        Names: map[string]string{
                            "est": "harum",
                            "sequi": "doloribus",
                            "repudiandae": "optio",
                            "occaecati": "nemo",
                        },
                    },
                    SubType: &shared.Level{
                        ID: sdk.String("78a64584-273a-4841-8d16-2309fb092992"),
                        Names: map[string]string{
                            "fuga": "accusamus",
                        },
                    },
                    Type: &shared.Level{
                        ID: sdk.String("fb9f58c4-d86e-468e-8be0-56013f59da75"),
                        Names: map[string]string{
                            "est": "quis",
                            "sint": "accusamus",
                        },
                    },
                },
            },
            Dates: &shared.EventDates{
                Access: &shared.AccessDates{
                    EndApproximate: sdk.Bool(true),
                    EndDateTime: types.MustTimeFromString("yyyy-MM-ddThh-mm-ssZ"),
                    StartApproximate: sdk.Bool(false),
                    StartDateTime: types.MustTimeFromString("yyyy-MM-ddThh-mm-ssZ"),
                },
                End: &shared.EndDates{
                    Approximate: sdk.Bool(false),
                    DateTime: types.MustTimeFromString("yyyy-MM-ddThh-mm-ssZ"),
                    LocalTime: &shared.LocalTime{
                        Chronology: &shared.Chronology{
                            Zone: &shared.DateTimeZone{
                                Fixed: sdk.Bool(false),
                                ID: sdk.String("cfef66ef-1caa-4338-bc2b-eb477373c8d7"),
                            },
                        },
                        FieldTypes: []shared.DateTimeFieldType{
                            shared.DateTimeFieldType{
                                DurationType: &shared.DurationFieldType{
                                    Name: sdk.String("Cecil Gutkowski DDS"),
                                },
                                Name: sdk.String("Juan Wolf"),
                                RangeDurationType: &shared.DurationFieldType{
                                    Name: sdk.String("Ms. Sheila Blanda"),
                                },
                            },
                        },
                        Fields: []shared.DateTimeField{
                            shared.DateTimeField{
                                DurationField: &shared.DurationField{
                                    Name: sdk.String("Marshall Kemmer"),
                                    Precise: sdk.Bool(false),
                                    Supported: sdk.Bool(false),
                                    Type: &shared.DurationFieldType{
                                        Name: sdk.String("Merle Carroll"),
                                    },
                                    UnitMillis: sdk.Int64(610987),
                                },
                                LeapDurationField: &shared.DurationField{
                                    Name: sdk.String("John Huel"),
                                    Precise: sdk.Bool(false),
                                    Supported: sdk.Bool(false),
                                    Type: &shared.DurationFieldType{
                                        Name: sdk.String("Kyle Fahey Jr."),
                                    },
                                    UnitMillis: sdk.Int64(7468),
                                },
                                Lenient: sdk.Bool(false),
                                MaximumValue: sdk.Int(639705),
                                MinimumValue: sdk.Int(927403),
                                Name: sdk.String("Alison Hodkiewicz"),
                                RangeDurationField: &shared.DurationField{
                                    Name: sdk.String("Malcolm Lind"),
                                    Precise: sdk.Bool(false),
                                    Supported: sdk.Bool(false),
                                    Type: &shared.DurationFieldType{
                                        Name: sdk.String("Lindsey Treutel"),
                                    },
                                    UnitMillis: sdk.Int64(373040),
                                },
                                Supported: sdk.Bool(false),
                                Type: &shared.DateTimeFieldType{
                                    DurationType: &shared.DurationFieldType{
                                        Name: sdk.String("Jodi Mueller"),
                                    },
                                    Name: sdk.String("Mr. Eula Feest"),
                                    RangeDurationType: &shared.DurationFieldType{
                                        Name: sdk.String("Tina Moore"),
                                    },
                                },
                            },
                        },
                        HourOfDay: sdk.Int(745233),
                        MillisOfDay: sdk.Int(726227),
                        MillisOfSecond: sdk.Int(526907),
                        MinuteOfHour: sdk.Int(678060),
                        SecondOfMinute: sdk.Int(487676),
                        Values: []int{
                            545,
                        },
                    },
                },
                Start: &shared.StartDates{
                    DateTBA: sdk.Bool(false),
                    DateTBD: sdk.Bool(false),
                    DateTime: types.MustTimeFromString("yyyy-MM-ddThh:mm:ssZ"),
                    LocalDate: types.MustDateFromString("yyyy-MM-dd"),
                    LocalTime: &shared.LocalTime{
                        Chronology: &shared.Chronology{
                            Zone: &shared.DateTimeZone{
                                Fixed: sdk.Bool(false),
                                ID: sdk.String("2611435e-139d-4bc2-a59b-1abda8c070e1"),
                            },
                        },
                        FieldTypes: []shared.DateTimeFieldType{
                            shared.DateTimeFieldType{
                                DurationType: &shared.DurationFieldType{
                                    Name: sdk.String("Micheal Roob III"),
                                },
                                Name: sdk.String("Miss Wanda Shanahan"),
                                RangeDurationType: &shared.DurationFieldType{
                                    Name: sdk.String("Javier McKenzie"),
                                },
                            },
                        },
                        Fields: []shared.DateTimeField{
                            shared.DateTimeField{
                                DurationField: &shared.DurationField{
                                    Name: sdk.String("Angel Jones"),
                                    Precise: sdk.Bool(false),
                                    Supported: sdk.Bool(false),
                                    Type: &shared.DurationFieldType{
                                        Name: sdk.String("Dan Towne"),
                                    },
                                    UnitMillis: sdk.Int64(872303),
                                },
                                LeapDurationField: &shared.DurationField{
                                    Name: sdk.String("Rachel Powlowski"),
                                    Precise: sdk.Bool(false),
                                    Supported: sdk.Bool(false),
                                    Type: &shared.DurationFieldType{
                                        Name: sdk.String("Mamie Torp"),
                                    },
                                    UnitMillis: sdk.Int64(483518),
                                },
                                Lenient: sdk.Bool(false),
                                MaximumValue: sdk.Int(510128),
                                MinimumValue: sdk.Int(140316),
                                Name: sdk.String("Stacy Mraz"),
                                RangeDurationField: &shared.DurationField{
                                    Name: sdk.String("Otis Grady"),
                                    Precise: sdk.Bool(false),
                                    Supported: sdk.Bool(false),
                                    Type: &shared.DurationFieldType{
                                        Name: sdk.String("Lindsey Kreiger"),
                                    },
                                    UnitMillis: sdk.Int64(147801),
                                },
                                Supported: sdk.Bool(false),
                                Type: &shared.DateTimeFieldType{
                                    DurationType: &shared.DurationFieldType{
                                        Name: sdk.String("Carrie Douglas"),
                                    },
                                    Name: sdk.String("Kara Tromp"),
                                    RangeDurationType: &shared.DurationFieldType{
                                        Name: sdk.String("Jaime McGlynn"),
                                    },
                                },
                            },
                            shared.DateTimeField{
                                DurationField: &shared.DurationField{
                                    Name: sdk.String("Gladys King"),
                                    Precise: sdk.Bool(false),
                                    Supported: sdk.Bool(false),
                                    Type: &shared.DurationFieldType{
                                        Name: sdk.String("Dana Gusikowski"),
                                    },
                                    UnitMillis: sdk.Int64(731744),
                                },
                                LeapDurationField: &shared.DurationField{
                                    Name: sdk.String("Jeannette Dickens"),
                                    Precise: sdk.Bool(false),
                                    Supported: sdk.Bool(false),
                                    Type: &shared.DurationFieldType{
                                        Name: sdk.String("Glen Satterfield"),
                                    },
                                    UnitMillis: sdk.Int64(684553),
                                },
                                Lenient: sdk.Bool(false),
                                MaximumValue: sdk.Int(344530),
                                MinimumValue: sdk.Int(669237),
                                Name: sdk.String("Brendan Rippin"),
                                RangeDurationField: &shared.DurationField{
                                    Name: sdk.String("Ervin Hettinger IV"),
                                    Precise: sdk.Bool(false),
                                    Supported: sdk.Bool(false),
                                    Type: &shared.DurationFieldType{
                                        Name: sdk.String("Arlene Kuphal"),
                                    },
                                    UnitMillis: sdk.Int64(621169),
                                },
                                Supported: sdk.Bool(false),
                                Type: &shared.DateTimeFieldType{
                                    DurationType: &shared.DurationFieldType{
                                        Name: sdk.String("Jo Kling"),
                                    },
                                    Name: sdk.String("Benny Jacobs"),
                                    RangeDurationType: &shared.DurationFieldType{
                                        Name: sdk.String("Clark Predovic"),
                                    },
                                },
                            },
                            shared.DateTimeField{
                                DurationField: &shared.DurationField{
                                    Name: sdk.String("Pauline Beier"),
                                    Precise: sdk.Bool(false),
                                    Supported: sdk.Bool(false),
                                    Type: &shared.DurationFieldType{
                                        Name: sdk.String("Dr. Elvira Robel"),
                                    },
                                    UnitMillis: sdk.Int64(659268),
                                },
                                LeapDurationField: &shared.DurationField{
                                    Name: sdk.String("Juana Buckridge"),
                                    Precise: sdk.Bool(false),
                                    Supported: sdk.Bool(false),
                                    Type: &shared.DurationFieldType{
                                        Name: sdk.String("Larry Kuphal Sr."),
                                    },
                                    UnitMillis: sdk.Int64(386447),
                                },
                                Lenient: sdk.Bool(false),
                                MaximumValue: sdk.Int(863471),
                                MinimumValue: sdk.Int(729448),
                                Name: sdk.String("Marion Hills"),
                                RangeDurationField: &shared.DurationField{
                                    Name: sdk.String("Guillermo Marvin"),
                                    Precise: sdk.Bool(false),
                                    Supported: sdk.Bool(false),
                                    Type: &shared.DurationFieldType{
                                        Name: sdk.String("Willard Larson"),
                                    },
                                    UnitMillis: sdk.Int64(51170),
                                },
                                Supported: sdk.Bool(false),
                                Type: &shared.DateTimeFieldType{
                                    DurationType: &shared.DurationFieldType{
                                        Name: sdk.String("Jack Luettgen"),
                                    },
                                    Name: sdk.String("Dr. Marco Frami"),
                                    RangeDurationType: &shared.DurationFieldType{
                                        Name: sdk.String("Dale Ferry"),
                                    },
                                },
                            },
                        },
                        HourOfDay: sdk.Int(42924),
                        MillisOfDay: sdk.Int(339756),
                        MillisOfSecond: sdk.Int(333072),
                        MinuteOfHour: sdk.Int(727481),
                        SecondOfMinute: sdk.Int(99733),
                        Values: []int{
                            475589,
                            756654,
                            820023,
                        },
                    },
                    NoSpecificTime: sdk.Bool(false),
                    TimeTBA: sdk.Bool(false),
                },
                Status: &shared.EventStatus{
                    Code: shared.EventStatusCodeEnumOffsale.ToPointer(),
                },
                Timezone: sdk.String("magnam"),
            },
            Descriptions: map[string]string{
                "sed": "asperiores",
                "veniam": "consequuntur",
                "facere": "laudantium",
                "odit": "pariatur",
            },
            Discoverable: sdk.Bool(false),
            Distance: sdk.Float64(2273.62),
            Images: []shared.Image{
                shared.Image{
                    Attribution: sdk.String("ab"),
                    Domains: []string{
                        "facilis",
                    },
                    Fallback: sdk.Bool(false),
                    Height: sdk.Int(731065),
                    Ratio: shared.ImageRatioEnumZero.ToPointer(),
                    URL: sdk.String("nisi"),
                    Width: sdk.Int(977518),
                },
                shared.Image{
                    Attribution: sdk.String("quaerat"),
                    Domains: []string{
                        "distinctio",
                        "nisi",
                        "quis",
                    },
                    Fallback: sdk.Bool(false),
                    Height: sdk.Int(391933),
                    Ratio: shared.ImageRatioEnumZero.ToPointer(),
                    URL: sdk.String("libero"),
                    Width: sdk.Int(794507),
                },
            },
            Infos: map[string]string{
                "facilis": "ipsum",
                "ad": "voluptatibus",
                "voluptatibus": "consequuntur",
                "debitis": "labore",
            },
            Location: &shared.Location{
                Latitude: sdk.Float64(7009.28),
                Longitude: sdk.Float64(1797.95),
            },
            Names: map[string]string{
                "nostrum": "neque",
                "iusto": "est",
            },
            Place: &shared.Place{
                Address: &shared.Address{
                    Line1s: map[string]string{
                        "eligendi": "fugiat",
                        "unde": "officiis",
                        "ducimus": "dolor",
                    },
                    Line2s: map[string]string{
                        "error": "porro",
                    },
                    Line3s: map[string]string{
                        "dignissimos": "esse",
                    },
                },
                Area: &shared.Area{
                    Names: map[string]string{
                        "ad": "aspernatur",
                        "enim": "delectus",
                        "iusto": "dignissimos",
                        "libero": "illo",
                    },
                },
                City: &shared.City{
                    Names: map[string]string{
                        "incidunt": "accusamus",
                    },
                },
                Country: &shared.Country{
                    CountryCode: sdk.String("TR"),
                    Names: map[string]string{
                        "veniam": "eos",
                        "reiciendis": "earum",
                        "reprehenderit": "praesentium",
                    },
                },
                Location: &shared.Location{
                    Latitude: sdk.Float64(3670.46),
                    Longitude: sdk.Float64(9998.09),
                },
                Names: map[string]string{
                    "sequi": "nihil",
                    "deleniti": "illo",
                    "labore": "assumenda",
                    "aliquam": "quisquam",
                },
                PostalCode: sdk.String("59081-7755"),
                State: &shared.State{
                    Names: map[string]string{
                        "rerum": "dignissimos",
                        "corporis": "vero",
                        "similique": "repellendus",
                        "iure": "dolorem",
                    },
                    StateCode: sdk.String("commodi"),
                },
            },
            PleaseNotes: map[string]string{
                "commodi": "aut",
                "voluptatem": "ad",
                "quae": "amet",
                "illum": "praesentium",
            },
            PriceRanges: []shared.PriceRange{
                shared.PriceRange{
                    Currency: sdk.String("cum"),
                    Max: sdk.Float64(2304.11),
                    Min: sdk.Float64(976.76),
                    Type: shared.PriceRangeTypeEnumStandard.ToPointer(),
                },
                shared.PriceRange{
                    Currency: sdk.String("dicta"),
                    Max: sdk.Float64(5149.22),
                    Min: sdk.Float64(407.1),
                    Type: shared.PriceRangeTypeEnumStandard.ToPointer(),
                },
                shared.PriceRange{
                    Currency: sdk.String("earum"),
                    Max: sdk.Float64(4797.07),
                    Min: sdk.Float64(2286.46),
                    Type: shared.PriceRangeTypeEnumStandard.ToPointer(),
                },
            },
            Promoter: &shared.Promoter{
                Descriptions: map[string]string{
                    "dolorum": "necessitatibus",
                    "provident": "repudiandae",
                    "consequatur": "nemo",
                },
                ID: sdk.String("7eb809e2-8103-431f-b981-d4c700b607f3"),
                Names: map[string]string{
                    "provident": "consectetur",
                    "eligendi": "dignissimos",
                    "consectetur": "soluta",
                    "natus": "temporibus",
                },
            },
            PublicVisibility: &shared.PublicVisibility{
                EndDateTime: types.MustTimeFromString("2022-07-17T22:25:06.067Z"),
                StartDateTime: types.MustTimeFromString("2022-08-07T07:49:22.459Z"),
                Visible: sdk.Bool(false),
            },
            References: map[string]string{
                "itaque": "illum",
                "laborum": "dignissimos",
                "vero": "qui",
                "consectetur": "repellat",
            },
            Relationships: []map[string]interface{}{
                map[string]interface{}{
                    "exercitationem": "nihil",
                },
            },
            Sales: &shared.EventSalesDates{
                Presales: []shared.Presale{
                    shared.Presale{
                        Descriptions: map[string]string{
                            "illo": "hic",
                        },
                        EndDateTime: types.MustTimeFromString("2021-01-26T14:30:53.787Z"),
                        Names: map[string]string{
                            "distinctio": "in",
                            "exercitationem": "labore",
                        },
                        StartDateTime: types.MustTimeFromString("2022-01-29T18:21:22.366Z"),
                        URL: sdk.String("modi"),
                    },
                    shared.Presale{
                        Descriptions: map[string]string{
                            "explicabo": "accusamus",
                            "rem": "aperiam",
                        },
                        EndDateTime: types.MustTimeFromString("2022-06-19T10:22:30.161Z"),
                        Names: map[string]string{
                            "voluptate": "similique",
                            "minima": "libero",
                        },
                        StartDateTime: types.MustTimeFromString("2022-12-23T03:22:14.898Z"),
                        URL: sdk.String("modi"),
                    },
                },
                Public: &shared.PublicSaleDates{
                    EndDateTime: types.MustTimeFromString("2022-10-20T04:07:15.934Z"),
                    StartDateTime: types.MustTimeFromString("2022-01-06T09:04:46.850Z"),
                    StartTBD: sdk.Bool(false),
                },
            },
            Source: &shared.Source{
                ID: sdk.String("d575f140-0e76-44ad-b334-ec1b781b36a0"),
                Name: sdk.String("David Lubowitz"),
            },
            Test: sdk.Bool(false),
            Type: shared.EventTypeEnumEvent,
            Units: sdk.String("quae"),
            URL: sdk.String("eaque"),
            Venue: &shared.Venue{
                AccessibleSeatingDetails: map[string]string{
                    "delectus": "mollitia",
                    "nulla": "officia",
                    "sed": "voluptatem",
                    "alias": "eveniet",
                },
                Active: sdk.Bool(false),
                AdditionalInfos: map[string]string{
                    "voluptatem": "incidunt",
                    "qui": "qui",
                    "necessitatibus": "harum",
                    "explicabo": "beatae",
                },
                Address: &shared.Address{
                    Line1s: map[string]string{
                        "modi": "optio",
                        "voluptatibus": "molestias",
                    },
                    Line2s: map[string]string{
                        "libero": "totam",
                        "sequi": "aliquid",
                        "ea": "impedit",
                    },
                    Line3s: map[string]string{
                        "odit": "velit",
                        "reiciendis": "repellat",
                    },
                },
                BoxOfficeInfo: &shared.VenueBoxOfficeInfo{
                    AcceptedPaymentDetails: map[string]string{
                        "laborum": "natus",
                        "accusamus": "doloremque",
                        "nisi": "rerum",
                        "recusandae": "voluptates",
                    },
                    OpenHoursDetails: map[string]string{
                        "rem": "quia",
                        "ullam": "quisquam",
                    },
                    PhoneNumberDetails: map[string]string{
                        "voluptatibus": "eligendi",
                    },
                    WillCallDetails: map[string]string{
                        "officiis": "architecto",
                    },
                },
                City: &shared.City{
                    Names: map[string]string{
                        "enim": "optio",
                    },
                },
                Country: &shared.Country{
                    CountryCode: sdk.String("LR"),
                    Names: map[string]string{
                        "facilis": "reiciendis",
                    },
                },
                Currency: sdk.String("a"),
                Descriptions: map[string]string{
                    "dicta": "quos",
                    "ullam": "dolore",
                    "modi": "itaque",
                },
                Discoverable: sdk.Bool(false),
                Distance: sdk.Float64(8074.19),
                Dma: []shared.Dma{
                    shared.Dma{
                        ID: sdk.Int(163558),
                    },
                    shared.Dma{
                        ID: sdk.Int(828147),
                    },
                },
                GeneralInfo: &shared.VenueGeneralInfo{
                    ChildRules: map[string]string{
                        "doloribus": "impedit",
                        "porro": "accusamus",
                        "totam": "reiciendis",
                        "ab": "sint",
                    },
                    GeneralRules: map[string]string{
                        "esse": "iure",
                        "odio": "nesciunt",
                    },
                },
                Images: []shared.Image{
                    shared.Image{
                        Attribution: sdk.String("vel"),
                        Domains: []string{
                            "corporis",
                        },
                        Fallback: sdk.Bool(false),
                        Height: sdk.Int(375350),
                        Ratio: shared.ImageRatioEnumZero.ToPointer(),
                        URL: sdk.String("consequuntur"),
                        Width: sdk.Int(641133),
                    },
                    shared.Image{
                        Attribution: sdk.String("reprehenderit"),
                        Domains: []string{
                            "eius",
                            "ipsa",
                            "rem",
                        },
                        Fallback: sdk.Bool(false),
                        Height: sdk.Int(978154),
                        Ratio: shared.ImageRatioEnumZero.ToPointer(),
                        URL: sdk.String("accusantium"),
                        Width: sdk.Int(331452),
                    },
                    shared.Image{
                        Attribution: sdk.String("saepe"),
                        Domains: []string{
                            "facere",
                        },
                        Fallback: sdk.Bool(false),
                        Height: sdk.Int(307173),
                        Ratio: shared.ImageRatioEnumZero.ToPointer(),
                        URL: sdk.String("quos"),
                        Width: sdk.Int(984773),
                    },
                    shared.Image{
                        Attribution: sdk.String("fugiat"),
                        Domains: []string{
                            "delectus",
                            "velit",
                            "vitae",
                        },
                        Fallback: sdk.Bool(false),
                        Height: sdk.Int(201096),
                        Ratio: shared.ImageRatioEnumZero.ToPointer(),
                        URL: sdk.String("similique"),
                        Width: sdk.Int(74895),
                    },
                },
                Location: &shared.Location{
                    Latitude: sdk.Float64(9979.95),
                    Longitude: sdk.Float64(3632.14),
                },
                Markets: []shared.Market{
                    shared.Market{
                        ID: sdk.String("d94259c0-b36f-425e-a944-f3b756c11f6c"),
                    },
                    shared.Market{
                        ID: sdk.String("37a51262-4383-45bb-805a-23a45cefc5fd"),
                    },
                    shared.Market{
                        ID: sdk.String("e10a0ce2-169e-4510-819c-6dc5e3476279"),
                    },
                    shared.Market{
                        ID: sdk.String("9bfbbe69-49fb-42bb-8eca-e6c3d5db3ade"),
                    },
                },
                Names: map[string]string{
                    "pariatur": "ad",
                    "facere": "laborum",
                    "eveniet": "laborum",
                },
                ParkingDetails: map[string]string{
                    "maxime": "ipsam",
                    "alias": "suscipit",
                },
                PostalCode: sdk.String("56652-7013"),
                References: map[string]string{
                    "quaerat": "eligendi",
                    "hic": "nostrum",
                },
                Relationships: []map[string]interface{}{
                    map[string]interface{}{
                        "nulla": "error",
                        "mollitia": "magnam",
                        "nostrum": "esse",
                    },
                    map[string]interface{}{
                        "fuga": "facere",
                        "impedit": "quasi",
                        "deserunt": "quod",
                    },
                    map[string]interface{}{
                        "doloremque": "voluptatem",
                        "facere": "necessitatibus",
                    },
                    map[string]interface{}{
                        "consequatur": "eaque",
                        "architecto": "similique",
                        "porro": "blanditiis",
                        "quae": "magni",
                    },
                },
                Social: &shared.Social{
                    Twitter: &shared.Twitter{
                        Handle: shared.TwitterHandleEnumAtATwitterHandle.ToPointer(),
                        Hashtags: []string{
                            "sed",
                            "necessitatibus",
                            "impedit",
                            "ipsa",
                        },
                    },
                },
                Source: &shared.Source{
                    ID: sdk.String("9ff8f0f8-16ff-4347-bc13-e902c14125b0"),
                    Name: sdk.String("Chester Barton"),
                },
                State: &shared.State{
                    Names: map[string]string{
                        "quas": "veritatis",
                        "ullam": "quae",
                    },
                    StateCode: sdk.String("similique"),
                },
                Test: sdk.Bool(false),
                Timezone: sdk.String("incidunt"),
                Type: shared.VenueTypeEnumVenue,
                Units: sdk.String("magni"),
                URL: sdk.String("deserunt"),
                Version: sdk.Int64(965095),
            },
            Version: sdk.Int64(609537),
        },
        TMPSCorrelationID: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PublishEventVideos

Since 1.0.0

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
    res, err := s.SDK.PublishEventVideos(ctx, operations.PublishEventVideosRequest{
        TMPSCorrelationID: "nesciunt",
        Video: shared.Video{
            EmbedURL: sdk.String("maxime"),
            LicensingInformation: shared.LicensingInformation{
                License: "quis",
                RegionRestriction: &shared.RegionRestrictions{
                    Allowed: []string{
                        "aliquam",
                        "excepturi",
                        "maiores",
                    },
                },
            },
            Source: shared.Source{
                ID: sdk.String("83f350cf-876f-4fb9-81c6-ecbb4e243cf7"),
                Name: sdk.String("Perry Zieme"),
            },
            URL: "maiores",
        },
        ID: "eda53e5a-e6e0-4ac1-84c2-b9c247c88373",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PublishExtension

Since 1.0.0

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
    res, err := s.SDK.PublishExtension(ctx, operations.PublishExtensionRequest{
        ExtensionData: shared.ExtensionData{
            Data: map[string]interface{}{
                "modi": "perferendis",
                "necessitatibus": "architecto",
                "molestias": "dolore",
            },
            RelatedEntityID: sdk.String("sunt"),
            RelatedEntitySource: &shared.Source{
                ID: sdk.String("f32e5505-5756-4f5d-96d0-bd0af2dfe13d"),
                Name: sdk.String("Theodore Wolff DDS"),
            },
            RelatedEntityType: shared.ExtensionDataRelatedEntityTypeEnumAttraction,
            Source: "dolorum",
            Type: "velit",
            VersionNumber: sdk.Int64(937865),
        },
        TMPSCorrelationID: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PublishVenue

Since 1.0.0

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
    res, err := s.SDK.PublishVenue(ctx, operations.PublishVenueRequest{
        TMPSCorrelationID: "error",
        Venue: shared.Venue{
            AccessibleSeatingDetails: map[string]string{
                "quasi": "mollitia",
                "accusamus": "harum",
            },
            Active: sdk.Bool(false),
            AdditionalInfos: map[string]string{
                "doloremque": "expedita",
                "corrupti": "eaque",
                "deserunt": "aliquid",
                "excepturi": "magni",
            },
            Address: &shared.Address{
                Line1s: map[string]string{
                    "possimus": "dolor",
                    "rerum": "sed",
                },
                Line2s: map[string]string{
                    "optio": "delectus",
                    "minus": "quo",
                    "quos": "asperiores",
                    "voluptatum": "iste",
                },
                Line3s: map[string]string{
                    "accusantium": "illo",
                    "aut": "doloribus",
                },
            },
            BoxOfficeInfo: &shared.VenueBoxOfficeInfo{
                AcceptedPaymentDetails: map[string]string{
                    "at": "possimus",
                    "neque": "pariatur",
                },
                OpenHoursDetails: map[string]string{
                    "sapiente": "mollitia",
                    "quae": "quos",
                },
                PhoneNumberDetails: map[string]string{
                    "non": "voluptates",
                },
                WillCallDetails: map[string]string{
                    "aliquam": "quisquam",
                    "quas": "consequuntur",
                },
            },
            City: &shared.City{
                Names: map[string]string{
                    "inventore": "aliquid",
                    "laudantium": "est",
                    "dolor": "aliquid",
                    "consectetur": "cumque",
                },
            },
            Country: &shared.Country{
                CountryCode: sdk.String("LR"),
                Names: map[string]string{
                    "ducimus": "adipisci",
                    "recusandae": "tempora",
                    "blanditiis": "numquam",
                },
            },
            Currency: sdk.String("sequi"),
            Descriptions: map[string]string{
                "sit": "rerum",
                "veritatis": "tenetur",
                "autem": "quidem",
            },
            Discoverable: sdk.Bool(false),
            Distance: sdk.Float64(5171.21),
            Dma: []shared.Dma{
                shared.Dma{
                    ID: sdk.Int(646491),
                },
                shared.Dma{
                    ID: sdk.Int(168926),
                },
                shared.Dma{
                    ID: sdk.Int(471207),
                },
                shared.Dma{
                    ID: sdk.Int(374062),
                },
            },
            GeneralInfo: &shared.VenueGeneralInfo{
                ChildRules: map[string]string{
                    "commodi": "alias",
                    "fuga": "aut",
                    "dolore": "maxime",
                },
                GeneralRules: map[string]string{
                    "iste": "ullam",
                    "eligendi": "placeat",
                },
            },
            Images: []shared.Image{
                shared.Image{
                    Attribution: sdk.String("occaecati"),
                    Domains: []string{
                        "illo",
                        "nihil",
                        "inventore",
                    },
                    Fallback: sdk.Bool(false),
                    Height: sdk.Int(725316),
                    Ratio: shared.ImageRatioEnumZero.ToPointer(),
                    URL: sdk.String("ipsam"),
                    Width: sdk.Int(97659),
                },
                shared.Image{
                    Attribution: sdk.String("cumque"),
                    Domains: []string{
                        "harum",
                    },
                    Fallback: sdk.Bool(false),
                    Height: sdk.Int(813224),
                    Ratio: shared.ImageRatioEnumZero.ToPointer(),
                    URL: sdk.String("facilis"),
                    Width: sdk.Int(105372),
                },
            },
            Location: &shared.Location{
                Latitude: sdk.Float64(7672.1),
                Longitude: sdk.Float64(9645.11),
            },
            Markets: []shared.Market{
                shared.Market{
                    ID: sdk.String("b888ebdf-c4cc-4ca9-9bc7-fc0b2dce1087"),
                },
                shared.Market{
                    ID: sdk.String("3e42b006-d678-4878-ba85-81a58208c54f"),
                },
            },
            Names: map[string]string{
                "delectus": "officia",
                "natus": "cumque",
                "natus": "quaerat",
                "doloribus": "quia",
            },
            ParkingDetails: map[string]string{
                "mollitia": "cumque",
                "quis": "enim",
                "eum": "nemo",
                "illum": "nesciunt",
            },
            PostalCode: sdk.String("47999"),
            References: map[string]string{
                "dicta": "fugit",
                "sit": "aliquid",
                "necessitatibus": "sed",
            },
            Relationships: []map[string]interface{}{
                map[string]interface{}{
                    "nesciunt": "delectus",
                },
                map[string]interface{}{
                    "aliquam": "deserunt",
                    "modi": "sunt",
                    "impedit": "eius",
                },
                map[string]interface{}{
                    "ipsa": "at",
                    "dolorem": "repellat",
                    "aspernatur": "inventore",
                },
            },
            Social: &shared.Social{
                Twitter: &shared.Twitter{
                    Handle: shared.TwitterHandleEnumAtATwitterHandle.ToPointer(),
                    Hashtags: []string{
                        "fugit",
                    },
                },
            },
            Source: &shared.Source{
                ID: sdk.String("af03102d-514f-44cc-af18-bf9621a6a4f7"),
                Name: sdk.String("Lynda Langworth"),
            },
            State: &shared.State{
                Names: map[string]string{
                    "velit": "officiis",
                    "eius": "rerum",
                    "itaque": "dignissimos",
                    "ipsam": "explicabo",
                },
                StateCode: sdk.String("impedit"),
            },
            Test: sdk.Bool(false),
            Timezone: sdk.String("aliquid"),
            Type: shared.VenueTypeEnumVenue,
            Units: sdk.String("facilis"),
            URL: sdk.String("ipsum"),
            Version: sdk.Int64(284885),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
