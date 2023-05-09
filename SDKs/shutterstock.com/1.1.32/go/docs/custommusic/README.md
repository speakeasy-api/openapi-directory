# CustomMusic

### Available Operations

* [CreateAudioRenders](#createaudiorenders) - Create rendered audio
* [FetchRenders](#fetchrenders) - Get details about audio renders
* [ListCustomDescriptors](#listcustomdescriptors) - List computer audio descriptors
* [ListCustomInstruments](#listcustominstruments) - List computer audio instruments

## CreateAudioRenders

This endpoint creates rendered audio from timeline data. It returns a render ID that you can use to download the finished audio when it is ready. The render ID is valid for up to 48 hours.

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
    res, err := s.CustomMusic.CreateAudioRenders(ctx, shared.CreateAudioRendersRequest{
        AudioRenders: []shared.CreateAudioRender{
            shared.CreateAudioRender{
                Filename: "My Project.mp3",
                Preset: shared.CreateAudioRenderPresetEnumMasterMp3,
                Timeline: shared.AudioRenderTimeline{
                    Spans: []shared.AudioRenderTimelineSpan{
                        shared.AudioRenderTimelineSpan{
                            ID: sdk.Float64(5223.71),
                            InstrumentGroups: []shared.AudioRenderTimelineSpanInstrumentGroup{
                                shared.AudioRenderTimelineSpanInstrumentGroup{
                                    InstrumentGroup: "laudantium",
                                    Statuses: []shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 6498.32,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 5445.91,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive,
                                        },
                                    },
                                },
                            },
                            Regions: []shared.AudioRenderTimelineSpanRegion{
                                shared.AudioRenderTimelineSpanRegion{
                                    Beat: 221161,
                                    Descriptor: "occaecati",
                                    EndType: &shared.AudioRenderTimelineSpanRegionEndType{
                                        Beat: 2531.91,
                                        Event: shared.AudioRenderTimelineSpanRegionEndTypeEventEnumTransition,
                                        Type: shared.AudioRenderTimelineSpanRegionEndTypeTypeEnumRingout,
                                    },
                                    ID: 3762.26,
                                    Key: &shared.AudioRenderTimelineSpanRegionKey{
                                        TonicAccidental: shared.AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumDoubleFlat.ToPointer(),
                                        TonicNote: shared.AudioRenderTimelineSpanRegionKeyTonicNoteEnumF.ToPointer(),
                                        TonicQuality: shared.AudioRenderTimelineSpanRegionKeyTonicQualityEnumMajor.ToPointer(),
                                    },
                                    Region: shared.AudioRenderTimelineSpanRegionRegionEnumMusic,
                                },
                            },
                            SpanType: shared.AudioRenderTimelineSpanSpanTypeEnumUnmetered,
                            Tempo: sdk.Int64(618480),
                            TempoChanges: []shared.AudioRenderTimelineSpanTempoChanges{
                                shared.AudioRenderTimelineSpanTempoChanges{
                                    Tempo: 9742.57,
                                    Time: 3743.23,
                                },
                            },
                            Time: 990345,
                        },
                    },
                },
            },
            shared.CreateAudioRender{
                Filename: "My Project.mp3",
                Preset: shared.CreateAudioRenderPresetEnumMasterMp3,
                Timeline: shared.AudioRenderTimeline{
                    Spans: []shared.AudioRenderTimelineSpan{
                        shared.AudioRenderTimelineSpan{
                            ID: sdk.Float64(4090.54),
                            InstrumentGroups: []shared.AudioRenderTimelineSpanInstrumentGroup{
                                shared.AudioRenderTimelineSpanInstrumentGroup{
                                    InstrumentGroup: "consequuntur",
                                    Statuses: []shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 6387.62,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 4903.05,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 9894.1,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 653.04,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive,
                                        },
                                    },
                                },
                                shared.AudioRenderTimelineSpanInstrumentGroup{
                                    InstrumentGroup: "porro",
                                    Statuses: []shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 2883.98,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 2414.18,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 6625.05,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 2460.63,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive,
                                        },
                                    },
                                },
                            },
                            Regions: []shared.AudioRenderTimelineSpanRegion{
                                shared.AudioRenderTimelineSpanRegion{
                                    Beat: 926880,
                                    Descriptor: "totam",
                                    EndType: &shared.AudioRenderTimelineSpanRegionEndType{
                                        Beat: 8539.4,
                                        Event: shared.AudioRenderTimelineSpanRegionEndTypeEventEnumEnding,
                                        Type: shared.AudioRenderTimelineSpanRegionEndTypeTypeEnumRingout,
                                    },
                                    ID: 5546.88,
                                    Key: &shared.AudioRenderTimelineSpanRegionKey{
                                        TonicAccidental: shared.AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumNatural.ToPointer(),
                                        TonicNote: shared.AudioRenderTimelineSpanRegionKeyTonicNoteEnumE.ToPointer(),
                                        TonicQuality: shared.AudioRenderTimelineSpanRegionKeyTonicQualityEnumMajor.ToPointer(),
                                    },
                                    Region: shared.AudioRenderTimelineSpanRegionRegionEnumSilence,
                                },
                                shared.AudioRenderTimelineSpanRegion{
                                    Beat: 706575,
                                    Descriptor: "cum",
                                    EndType: &shared.AudioRenderTimelineSpanRegionEndType{
                                        Beat: 4148.57,
                                        Event: shared.AudioRenderTimelineSpanRegionEndTypeEventEnumEnding,
                                        Type: shared.AudioRenderTimelineSpanRegionEndTypeTypeEnumRingout,
                                    },
                                    ID: 9689.04,
                                    Key: &shared.AudioRenderTimelineSpanRegionKey{
                                        TonicAccidental: shared.AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumDoubleSharp.ToPointer(),
                                        TonicNote: shared.AudioRenderTimelineSpanRegionKeyTonicNoteEnumE.ToPointer(),
                                        TonicQuality: shared.AudioRenderTimelineSpanRegionKeyTonicQualityEnumMajor.ToPointer(),
                                    },
                                    Region: shared.AudioRenderTimelineSpanRegionRegionEnumSilence,
                                },
                                shared.AudioRenderTimelineSpanRegion{
                                    Beat: 397533,
                                    Descriptor: "aperiam",
                                    EndType: &shared.AudioRenderTimelineSpanRegionEndType{
                                        Beat: 7386.83,
                                        Event: shared.AudioRenderTimelineSpanRegionEndTypeEventEnumEnding,
                                        Type: shared.AudioRenderTimelineSpanRegionEndTypeTypeEnumRingout,
                                    },
                                    ID: 3485.19,
                                    Key: &shared.AudioRenderTimelineSpanRegionKey{
                                        TonicAccidental: shared.AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumDoubleSharp.ToPointer(),
                                        TonicNote: shared.AudioRenderTimelineSpanRegionKeyTonicNoteEnumA.ToPointer(),
                                        TonicQuality: shared.AudioRenderTimelineSpanRegionKeyTonicQualityEnumMajor.ToPointer(),
                                    },
                                    Region: shared.AudioRenderTimelineSpanRegionRegionEnumMusic,
                                },
                            },
                            SpanType: shared.AudioRenderTimelineSpanSpanTypeEnumUnmetered,
                            Tempo: sdk.Int64(381760),
                            TempoChanges: []shared.AudioRenderTimelineSpanTempoChanges{
                                shared.AudioRenderTimelineSpanTempoChanges{
                                    Tempo: 6971.42,
                                    Time: 9049.49,
                                },
                                shared.AudioRenderTimelineSpanTempoChanges{
                                    Tempo: 8970.71,
                                    Time: 2965.56,
                                },
                                shared.AudioRenderTimelineSpanTempoChanges{
                                    Tempo: 1210.59,
                                    Time: 9920.12,
                                },
                                shared.AudioRenderTimelineSpanTempoChanges{
                                    Tempo: 2415.45,
                                    Time: 2494.2,
                                },
                            },
                            Time: 228263,
                        },
                    },
                },
            },
            shared.CreateAudioRender{
                Filename: "My Project.mp3",
                Preset: shared.CreateAudioRenderPresetEnumMasterMp3,
                Timeline: shared.AudioRenderTimeline{
                    Spans: []shared.AudioRenderTimelineSpan{
                        shared.AudioRenderTimelineSpan{
                            ID: sdk.Float64(4895.09),
                            InstrumentGroups: []shared.AudioRenderTimelineSpanInstrumentGroup{
                                shared.AudioRenderTimelineSpanInstrumentGroup{
                                    InstrumentGroup: "debitis",
                                    Statuses: []shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 3581.07,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive,
                                        },
                                    },
                                },
                                shared.AudioRenderTimelineSpanInstrumentGroup{
                                    InstrumentGroup: "laboriosam",
                                    Statuses: []shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 9167.27,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive,
                                        },
                                    },
                                },
                                shared.AudioRenderTimelineSpanInstrumentGroup{
                                    InstrumentGroup: "vitae",
                                    Statuses: []shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 6311.26,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 1328.15,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 3742.44,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 3244.05,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive,
                                        },
                                    },
                                },
                                shared.AudioRenderTimelineSpanInstrumentGroup{
                                    InstrumentGroup: "dolorum",
                                    Statuses: []shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 7955.35,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive,
                                        },
                                    },
                                },
                            },
                            Regions: []shared.AudioRenderTimelineSpanRegion{
                                shared.AudioRenderTimelineSpanRegion{
                                    Beat: 449292,
                                    Descriptor: "dolore",
                                    EndType: &shared.AudioRenderTimelineSpanRegionEndType{
                                        Beat: 3044.68,
                                        Event: shared.AudioRenderTimelineSpanRegionEndTypeEventEnumTransition,
                                        Type: shared.AudioRenderTimelineSpanRegionEndTypeTypeEnumCut,
                                    },
                                    ID: 3518.7,
                                    Key: &shared.AudioRenderTimelineSpanRegionKey{
                                        TonicAccidental: shared.AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumFlat.ToPointer(),
                                        TonicNote: shared.AudioRenderTimelineSpanRegionKeyTonicNoteEnumA.ToPointer(),
                                        TonicQuality: shared.AudioRenderTimelineSpanRegionKeyTonicQualityEnumMajor.ToPointer(),
                                    },
                                    Region: shared.AudioRenderTimelineSpanRegionRegionEnumSilence,
                                },
                                shared.AudioRenderTimelineSpanRegion{
                                    Beat: 555361,
                                    Descriptor: "hic",
                                    EndType: &shared.AudioRenderTimelineSpanRegionEndType{
                                        Beat: 2015.17,
                                        Event: shared.AudioRenderTimelineSpanRegionEndTypeEventEnumTransition,
                                        Type: shared.AudioRenderTimelineSpanRegionEndTypeTypeEnumCut,
                                    },
                                    ID: 8672.9,
                                    Key: &shared.AudioRenderTimelineSpanRegionKey{
                                        TonicAccidental: shared.AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumNatural.ToPointer(),
                                        TonicNote: shared.AudioRenderTimelineSpanRegionKeyTonicNoteEnumB.ToPointer(),
                                        TonicQuality: shared.AudioRenderTimelineSpanRegionKeyTonicQualityEnumMajor.ToPointer(),
                                    },
                                    Region: shared.AudioRenderTimelineSpanRegionRegionEnumMusic,
                                },
                                shared.AudioRenderTimelineSpanRegion{
                                    Beat: 750765,
                                    Descriptor: "sit",
                                    EndType: &shared.AudioRenderTimelineSpanRegionEndType{
                                        Beat: 6995.75,
                                        Event: shared.AudioRenderTimelineSpanRegionEndTypeEventEnumEnding,
                                        Type: shared.AudioRenderTimelineSpanRegionEndTypeTypeEnumCut,
                                    },
                                    ID: 1318.52,
                                    Key: &shared.AudioRenderTimelineSpanRegionKey{
                                        TonicAccidental: shared.AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumDoubleSharp.ToPointer(),
                                        TonicNote: shared.AudioRenderTimelineSpanRegionKeyTonicNoteEnumG.ToPointer(),
                                        TonicQuality: shared.AudioRenderTimelineSpanRegionKeyTonicQualityEnumMajor.ToPointer(),
                                    },
                                    Region: shared.AudioRenderTimelineSpanRegionRegionEnumMusic,
                                },
                            },
                            SpanType: shared.AudioRenderTimelineSpanSpanTypeEnumUnmetered,
                            Tempo: sdk.Int64(70869),
                            TempoChanges: []shared.AudioRenderTimelineSpanTempoChanges{
                                shared.AudioRenderTimelineSpanTempoChanges{
                                    Tempo: 2927.94,
                                    Time: 6719.07,
                                },
                                shared.AudioRenderTimelineSpanTempoChanges{
                                    Tempo: 1523.54,
                                    Time: 4475.16,
                                },
                                shared.AudioRenderTimelineSpanTempoChanges{
                                    Tempo: 4174.86,
                                    Time: 6960.77,
                                },
                            },
                            Time: 131289,
                        },
                    },
                },
            },
            shared.CreateAudioRender{
                Filename: "My Project.mp3",
                Preset: shared.CreateAudioRenderPresetEnumMasterMp3,
                Timeline: shared.AudioRenderTimeline{
                    Spans: []shared.AudioRenderTimelineSpan{
                        shared.AudioRenderTimelineSpan{
                            ID: sdk.Float64(6041.18),
                            InstrumentGroups: []shared.AudioRenderTimelineSpanInstrumentGroup{
                                shared.AudioRenderTimelineSpanInstrumentGroup{
                                    InstrumentGroup: "suscipit",
                                    Statuses: []shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 8953.86,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 9677.95,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 5468.85,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 2748.23,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive,
                                        },
                                    },
                                },
                            },
                            Regions: []shared.AudioRenderTimelineSpanRegion{
                                shared.AudioRenderTimelineSpanRegion{
                                    Beat: 258702,
                                    Descriptor: "necessitatibus",
                                    EndType: &shared.AudioRenderTimelineSpanRegionEndType{
                                        Beat: 2155.29,
                                        Event: shared.AudioRenderTimelineSpanRegionEndTypeEventEnumEnding,
                                        Type: shared.AudioRenderTimelineSpanRegionEndTypeTypeEnumCut,
                                    },
                                    ID: 5520.78,
                                    Key: &shared.AudioRenderTimelineSpanRegionKey{
                                        TonicAccidental: shared.AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumDoubleSharp.ToPointer(),
                                        TonicNote: shared.AudioRenderTimelineSpanRegionKeyTonicNoteEnumD.ToPointer(),
                                        TonicQuality: shared.AudioRenderTimelineSpanRegionKeyTonicQualityEnumMajor.ToPointer(),
                                    },
                                    Region: shared.AudioRenderTimelineSpanRegionRegionEnumMusic,
                                },
                                shared.AudioRenderTimelineSpanRegion{
                                    Beat: 455444,
                                    Descriptor: "reiciendis",
                                    EndType: &shared.AudioRenderTimelineSpanRegionEndType{
                                        Beat: 4017.13,
                                        Event: shared.AudioRenderTimelineSpanRegionEndTypeEventEnumEnding,
                                        Type: shared.AudioRenderTimelineSpanRegionEndTypeTypeEnumRingout,
                                    },
                                    ID: 8880.44,
                                    Key: &shared.AudioRenderTimelineSpanRegionKey{
                                        TonicAccidental: shared.AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumNatural.ToPointer(),
                                        TonicNote: shared.AudioRenderTimelineSpanRegionKeyTonicNoteEnumG.ToPointer(),
                                        TonicQuality: shared.AudioRenderTimelineSpanRegionKeyTonicQualityEnumMajor.ToPointer(),
                                    },
                                    Region: shared.AudioRenderTimelineSpanRegionRegionEnumMusic,
                                },
                                shared.AudioRenderTimelineSpanRegion{
                                    Beat: 277773,
                                    Descriptor: "ipsam",
                                    EndType: &shared.AudioRenderTimelineSpanRegionEndType{
                                        Beat: 8948.64,
                                        Event: shared.AudioRenderTimelineSpanRegionEndTypeEventEnumTransition,
                                        Type: shared.AudioRenderTimelineSpanRegionEndTypeTypeEnumRingout,
                                    },
                                    ID: 7505.95,
                                    Key: &shared.AudioRenderTimelineSpanRegionKey{
                                        TonicAccidental: shared.AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumSharp.ToPointer(),
                                        TonicNote: shared.AudioRenderTimelineSpanRegionKeyTonicNoteEnumE.ToPointer(),
                                        TonicQuality: shared.AudioRenderTimelineSpanRegionKeyTonicQualityEnumMajor.ToPointer(),
                                    },
                                    Region: shared.AudioRenderTimelineSpanRegionRegionEnumMusic,
                                },
                            },
                            SpanType: shared.AudioRenderTimelineSpanSpanTypeEnumUnmetered,
                            Tempo: sdk.Int64(967122),
                            TempoChanges: []shared.AudioRenderTimelineSpanTempoChanges{
                                shared.AudioRenderTimelineSpanTempoChanges{
                                    Tempo: 1685.76,
                                    Time: 486.9,
                                },
                                shared.AudioRenderTimelineSpanTempoChanges{
                                    Tempo: 9014.83,
                                    Time: 2536.42,
                                },
                                shared.AudioRenderTimelineSpanTempoChanges{
                                    Tempo: 3299.35,
                                    Time: 4461.35,
                                },
                                shared.AudioRenderTimelineSpanTempoChanges{
                                    Tempo: 8892.34,
                                    Time: 1046.27,
                                },
                            },
                            Time: 512452,
                        },
                        shared.AudioRenderTimelineSpan{
                            ID: sdk.Float64(3484.76),
                            InstrumentGroups: []shared.AudioRenderTimelineSpanInstrumentGroup{
                                shared.AudioRenderTimelineSpanInstrumentGroup{
                                    InstrumentGroup: "cum",
                                    Statuses: []shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 6805.15,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 6223.85,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive,
                                        },
                                    },
                                },
                                shared.AudioRenderTimelineSpanInstrumentGroup{
                                    InstrumentGroup: "expedita",
                                    Statuses: []shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 2049.23,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 3416.98,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 6762.43,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive,
                                        },
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 8792.35,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive,
                                        },
                                    },
                                },
                                shared.AudioRenderTimelineSpanInstrumentGroup{
                                    InstrumentGroup: "atque",
                                    Statuses: []shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                        shared.AudioRenderTimelineSpanInstrumentGroupStatus{
                                            Beat: 2826.99,
                                            Status: shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive,
                                        },
                                    },
                                },
                            },
                            Regions: []shared.AudioRenderTimelineSpanRegion{
                                shared.AudioRenderTimelineSpanRegion{
                                    Beat: 635057,
                                    Descriptor: "expedita",
                                    EndType: &shared.AudioRenderTimelineSpanRegionEndType{
                                        Beat: 2996.43,
                                        Event: shared.AudioRenderTimelineSpanRegionEndTypeEventEnumEnding,
                                        Type: shared.AudioRenderTimelineSpanRegionEndTypeTypeEnumRingout,
                                    },
                                    ID: 3726.79,
                                    Key: &shared.AudioRenderTimelineSpanRegionKey{
                                        TonicAccidental: shared.AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumDoubleFlat.ToPointer(),
                                        TonicNote: shared.AudioRenderTimelineSpanRegionKeyTonicNoteEnumF.ToPointer(),
                                        TonicQuality: shared.AudioRenderTimelineSpanRegionKeyTonicQualityEnumMajor.ToPointer(),
                                    },
                                    Region: shared.AudioRenderTimelineSpanRegionRegionEnumSilence,
                                },
                            },
                            SpanType: shared.AudioRenderTimelineSpanSpanTypeEnumUnmetered,
                            Tempo: sdk.Int64(361151),
                            TempoChanges: []shared.AudioRenderTimelineSpanTempoChanges{
                                shared.AudioRenderTimelineSpanTempoChanges{
                                    Tempo: 5027.1,
                                    Time: 4059.42,
                                },
                            },
                            Time: 153627,
                        },
                    },
                },
            },
        },
    }, operations.CreateAudioRendersSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AudioRendersListResults != nil {
        // handle response
    }
}
```

## FetchRenders

This endpoint shows the status of one or more audio renders, including download links for completed audio.

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
    res, err := s.CustomMusic.FetchRenders(ctx, operations.FetchRendersRequest{
        ID: []string{
            "vel",
        },
    }, operations.FetchRendersSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AudioRendersListResults != nil {
        // handle response
    }
}
```

## ListCustomDescriptors

This endpoint lists the descriptors that you can use in the audio regions in an audio render.

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
    res, err := s.CustomMusic.ListCustomDescriptors(ctx, operations.ListCustomDescriptorsRequest{
        BandID: sdk.String("nostrum"),
        BandName: sdk.String("saepe"),
        ID: []string{
            "consequatur",
            "incidunt",
            "reiciendis",
        },
        InstrumentID: sdk.String("dolorem"),
        InstrumentName: sdk.String("harum"),
        Name: sdk.String("Diane Mayer"),
        Page: sdk.Int64(539074),
        PerPage: sdk.Int64(671957),
        RenderSpeedOver: sdk.Float64(7241.48),
        Tag: sdk.String("tenetur"),
        Tempo: sdk.Float64(3888.67),
        TempoFrom: sdk.Float64(27.03),
        TempoTo: sdk.Float64(2270.84),
    }, operations.ListCustomDescriptorsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescriptorsListResult != nil {
        // handle response
    }
}
```

## ListCustomInstruments

This endpoint lists the instruments that you can include in computer audio. If you specify more than one search parameter, the API uses an AND condition.

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
    res, err := s.CustomMusic.ListCustomInstruments(ctx, operations.ListCustomInstrumentsRequest{
        ID: []string{
            "voluptate",
            "unde",
            "reiciendis",
        },
        Name: sdk.String("Marcos Windler MD"),
        Page: sdk.Int64(696483),
        PerPage: sdk.Int64(440666),
        Tag: sdk.String("facere"),
    }, operations.ListCustomInstrumentsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstrumentsListResult != nil {
        // handle response
    }
}
```
