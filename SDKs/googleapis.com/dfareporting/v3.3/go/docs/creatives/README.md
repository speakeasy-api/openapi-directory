# Creatives

### Available Operations

* [DfareportingCreativesGet](#dfareportingcreativesget) - Gets one creative by ID.
* [DfareportingCreativesInsert](#dfareportingcreativesinsert) - Inserts a new creative.
* [DfareportingCreativesList](#dfareportingcreativeslist) - Retrieves a list of creatives, possibly filtered. This method supports paging.
* [DfareportingCreativesPatch](#dfareportingcreativespatch) - Updates an existing creative. This method supports patch semantics.
* [DfareportingCreativesUpdate](#dfareportingcreativesupdate) - Updates an existing creative.

## DfareportingCreativesGet

Gets one creative by ID.

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
    res, err := s.Creatives.DfareportingCreativesGet(ctx, operations.DfareportingCreativesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eos"),
        Fields: sdk.String("saepe"),
        ID: "072467b8-a40b-4c05-bab0-d650edf22a94",
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aperiam",
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("perspiciatis"),
    }, operations.DfareportingCreativesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Creative != nil {
        // handle response
    }
}
```

## DfareportingCreativesInsert

Inserts a new creative.

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
    res, err := s.Creatives.DfareportingCreativesInsert(ctx, operations.DfareportingCreativesInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Creative: &shared.Creative{
            AccountID: sdk.String("debitis"),
            Active: sdk.Bool(false),
            AdParameters: sdk.String("animi"),
            AdTagKeys: []string{
                "quasi",
                "repellendus",
            },
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(941683),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("labore"),
                    Kind: sdk.String("nisi"),
                    Width: sdk.Int(373668),
                },
            },
            AdvertiserID: sdk.String("saepe"),
            AllowScriptAccess: sdk.Bool(false),
            Archived: sdk.Bool(false),
            ArtworkType: shared.CreativeArtworkTypeEnumArtworkTypeMixed.ToPointer(),
            AuthoringSource: shared.CreativeAuthoringSourceEnumCreativeAuthoringSourceDbm.ToPointer(),
            AuthoringTool: shared.CreativeAuthoringToolEnumNinja.ToPointer(),
            AutoAdvanceImages: sdk.Bool(false),
            BackgroundColor: sdk.String("minima"),
            BackupImageClickThroughURL: &shared.CreativeClickThroughURL{
                ComputedClickThroughURL: sdk.String("nisi"),
                CustomClickThroughURL: sdk.String("repellat"),
                LandingPageID: sdk.String("sapiente"),
            },
            BackupImageFeatures: []shared.CreativeBackupImageFeaturesEnum{
                shared.CreativeBackupImageFeaturesEnumInputAttrPlaceholder,
                shared.CreativeBackupImageFeaturesEnumCSSReflections,
                shared.CreativeBackupImageFeaturesEnumSvgFilters,
                shared.CreativeBackupImageFeaturesEnumWebSQLDatabase,
            },
            BackupImageReportingLabel: sdk.String("tenetur"),
            BackupImageTargetWindow: &shared.TargetWindow{
                CustomHTML: sdk.String("nostrum"),
                TargetWindowOption: shared.TargetWindowTargetWindowOptionEnumNewWindow.ToPointer(),
            },
            ClickTags: []shared.ClickTag{
                shared.ClickTag{
                    ClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("facere"),
                        CustomClickThroughURL: sdk.String("illum"),
                        LandingPageID: sdk.String("exercitationem"),
                    },
                    EventName: sdk.String("saepe"),
                    Name: sdk.String("Perry Hansen"),
                },
                shared.ClickTag{
                    ClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("sequi"),
                        CustomClickThroughURL: sdk.String("occaecati"),
                        LandingPageID: sdk.String("voluptatum"),
                    },
                    EventName: sdk.String("illum"),
                    Name: sdk.String("Timmy Robel"),
                },
                shared.ClickTag{
                    ClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("dolorum"),
                        CustomClickThroughURL: sdk.String("deleniti"),
                        LandingPageID: sdk.String("assumenda"),
                    },
                    EventName: sdk.String("iure"),
                    Name: sdk.String("Dawn Langworth"),
                },
                shared.ClickTag{
                    ClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("incidunt"),
                        CustomClickThroughURL: sdk.String("pariatur"),
                        LandingPageID: sdk.String("deleniti"),
                    },
                    EventName: sdk.String("aut"),
                    Name: sdk.String("Isabel Tromp"),
                },
            },
            CommercialID: sdk.String("asperiores"),
            CompanionCreatives: []string{
                "harum",
                "sunt",
                "atque",
            },
            Compatibility: []shared.CreativeCompatibilityEnum{
                shared.CreativeCompatibilityEnumDisplayInterstitial,
                shared.CreativeCompatibilityEnumDisplayInterstitial,
                shared.CreativeCompatibilityEnumDisplayInterstitial,
            },
            ConvertFlashToHtml5: sdk.Bool(false),
            CounterCustomEvents: []shared.CreativeCustomEvent{
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("possimus"),
                    AdvertiserCustomEventName: sdk.String("nisi"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventTimer.ToPointer(),
                    ArtworkLabel: sdk.String("omnis"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeFlash.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("ipsum"),
                        CustomClickThroughURL: sdk.String("iste"),
                        LandingPageID: sdk.String("nulla"),
                    },
                    ID: sdk.String("dolorum"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(804333),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("assumenda"),
                            Kind: sdk.String("velit"),
                            Width: sdk.Int(530225),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(911049),
                            Top: sdk.Int(842370),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Dr."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetParent.ToPointer(),
                    VideoReportingID: sdk.String("laboriosam"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("esse"),
                    AdvertiserCustomEventName: sdk.String("et"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventCounter.ToPointer(),
                    ArtworkLabel: sdk.String("optio"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeHtml5.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("delectus"),
                        CustomClickThroughURL: sdk.String("quae"),
                        LandingPageID: sdk.String("vero"),
                    },
                    ID: sdk.String("amet"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(633299),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("asperiores"),
                            Kind: sdk.String("quasi"),
                            Width: sdk.Int(334177),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(592191),
                            Top: sdk.Int(160305),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Dr."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetSelf.ToPointer(),
                    VideoReportingID: sdk.String("aperiam"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("repellendus"),
                    AdvertiserCustomEventName: sdk.String("ab"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventCounter.ToPointer(),
                    ArtworkLabel: sdk.String("magnam"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeMixed.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("aperiam"),
                        CustomClickThroughURL: sdk.String("dicta"),
                        LandingPageID: sdk.String("repellat"),
                    },
                    ID: sdk.String("dolores"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(691129),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("quibusdam"),
                            Kind: sdk.String("totam"),
                            Width: sdk.Int(591481),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(805167),
                            Top: sdk.Int(521892),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Mrs."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetBlank.ToPointer(),
                    VideoReportingID: sdk.String("vel"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("ipsum"),
                    AdvertiserCustomEventName: sdk.String("occaecati"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventCounter.ToPointer(),
                    ArtworkLabel: sdk.String("similique"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeHtml5.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("facilis"),
                        CustomClickThroughURL: sdk.String("in"),
                        LandingPageID: sdk.String("nobis"),
                    },
                    ID: sdk.String("nisi"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(620858),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("eaque"),
                            Kind: sdk.String("quia"),
                            Width: sdk.Int(704574),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(542322),
                            Top: sdk.Int(540074),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Miss"),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetSelf.ToPointer(),
                    VideoReportingID: sdk.String("incidunt"),
                },
            },
            CreativeAssetSelection: &shared.CreativeAssetSelection{
                DefaultAssetID: sdk.String("maiores"),
                Rules: []shared.Rule{
                    shared.Rule{
                        AssetID: sdk.String("modi"),
                        Name: sdk.String("Alma Johnston"),
                        TargetingTemplateID: sdk.String("quas"),
                    },
                    shared.Rule{
                        AssetID: sdk.String("hic"),
                        Name: sdk.String("Alberta Ziemann"),
                        TargetingTemplateID: sdk.String("commodi"),
                    },
                },
            },
            CreativeAssets: []shared.CreativeAsset{
                shared.CreativeAsset{
                    ActionScript3: sdk.Bool(false),
                    Active: sdk.Bool(false),
                    AdditionalSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(812626),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("molestiae"),
                            Kind: sdk.String("dolor"),
                            Width: sdk.Int(155108),
                        },
                    },
                    Alignment: shared.CreativeAssetAlignmentEnumAlignmentLeft.ToPointer(),
                    ArtworkType: shared.CreativeAssetArtworkTypeEnumArtworkTypeMixed.ToPointer(),
                    AssetIdentifier: &shared.CreativeAssetID{
                        Name: sdk.String("Randolph Nicolas"),
                        Type: shared.CreativeAssetIDTypeEnumFlash.ToPointer(),
                    },
                    AudioBitRate: sdk.Int(451363),
                    AudioSampleRate: sdk.Int(396905),
                    BackupImageExit: &shared.CreativeCustomEvent{
                        AdvertiserCustomEventID: sdk.String("officia"),
                        AdvertiserCustomEventName: sdk.String("qui"),
                        AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventExit.ToPointer(),
                        ArtworkLabel: sdk.String("vero"),
                        ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeMixed.ToPointer(),
                        ExitClickThroughURL: &shared.CreativeClickThroughURL{
                            ComputedClickThroughURL: sdk.String("possimus"),
                            CustomClickThroughURL: sdk.String("optio"),
                            LandingPageID: sdk.String("quo"),
                        },
                        ID: sdk.String("ullam"),
                        PopupWindowProperties: &shared.PopupWindowProperties{
                            Dimension: &shared.Size{
                                Height: sdk.Int(57290),
                                Iab: sdk.Bool(false),
                                ID: sdk.String("placeat"),
                                Kind: sdk.String("quas"),
                                Width: sdk.Int(635302),
                            },
                            Offset: &shared.OffsetPosition{
                                Left: sdk.Int(235013),
                                Top: sdk.Int(345588),
                            },
                            PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                            ShowAddressBar: sdk.Bool(false),
                            ShowMenuBar: sdk.Bool(false),
                            ShowScrollBar: sdk.Bool(false),
                            ShowStatusBar: sdk.Bool(false),
                            ShowToolBar: sdk.Bool(false),
                            Title: sdk.String("Mr."),
                        },
                        TargetType: shared.CreativeCustomEventTargetTypeEnumTargetParent.ToPointer(),
                        VideoReportingID: sdk.String("iusto"),
                    },
                    BitRate: sdk.Int(211581),
                    ChildAssetType: shared.CreativeAssetChildAssetTypeEnumChildAssetTypeVideo.ToPointer(),
                    CollapsedSize: &shared.Size{
                        Height: sdk.Int(500812),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("dolore"),
                        Kind: sdk.String("rem"),
                        Width: sdk.Int(591417),
                    },
                    CompanionCreativeIds: []string{
                        "alias",
                    },
                    CustomStartTimeValue: sdk.Int(492261),
                    DetectedFeatures: []shared.CreativeAssetDetectedFeaturesEnum{
                        shared.CreativeAssetDetectedFeaturesEnumCSSBorderRadius,
                        shared.CreativeAssetDetectedFeaturesEnumInputTypeDatetime,
                    },
                    DisplayType: shared.CreativeAssetDisplayTypeEnumAssetDisplayTypeInpage.ToPointer(),
                    Duration: sdk.Int(25872),
                    DurationType: shared.CreativeAssetDurationTypeEnumAssetDurationTypeCustom.ToPointer(),
                    ExpandedDimension: &shared.Size{
                        Height: sdk.Int(576563),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("commodi"),
                        Kind: sdk.String("voluptas"),
                        Width: sdk.Int(907420),
                    },
                    FileSize: sdk.String("eligendi"),
                    FlashVersion: sdk.Int(496307),
                    FrameRate: sdk.Float32(2124.05),
                    HideFlashObjects: sdk.Bool(false),
                    HideSelectionBoxes: sdk.Bool(false),
                    HorizontallyLocked: sdk.Bool(false),
                    ID: sdk.String("eum"),
                    IDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("possimus"),
                        Etag: sdk.String("dolore"),
                        ID: sdk.String("3194398c-783c-4923-98ed-3d3ab7ca3c5c"),
                        Kind: sdk.String("similique"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("aliquid"),
                    },
                    MediaDuration: sdk.Float32(3074.01),
                    MimeType: sdk.String("error"),
                    Offset: &shared.OffsetPosition{
                        Left: sdk.Int(657824),
                        Top: sdk.Int(496430),
                    },
                    Orientation: shared.CreativeAssetOrientationEnumLandscape.ToPointer(),
                    OriginalBackup: sdk.Bool(false),
                    PoliteLoad: sdk.Bool(false),
                    Position: &shared.OffsetPosition{
                        Left: sdk.Int(773652),
                        Top: sdk.Int(968773),
                    },
                    PositionLeftUnit: shared.CreativeAssetPositionLeftUnitEnumOffsetUnitPixelFromCenter.ToPointer(),
                    PositionTopUnit: shared.CreativeAssetPositionTopUnitEnumOffsetUnitPixel.ToPointer(),
                    ProgressiveServingURL: sdk.String("pariatur"),
                    Pushdown: sdk.Bool(false),
                    PushdownDuration: sdk.Float32(4175.19),
                    Role: shared.CreativeAssetRoleEnumOther.ToPointer(),
                    Size: &shared.Size{
                        Height: sdk.Int(547923),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("iste"),
                        Kind: sdk.String("distinctio"),
                        Width: sdk.Int(449647),
                    },
                    SslCompliant: sdk.Bool(false),
                    StartTimeType: shared.CreativeAssetStartTimeTypeEnumAssetStartTimeTypeNone.ToPointer(),
                    StreamingServingURL: sdk.String("voluptatem"),
                    Transparency: sdk.Bool(false),
                    VerticallyLocked: sdk.Bool(false),
                    WindowMode: shared.CreativeAssetWindowModeEnumWindow.ToPointer(),
                    ZIndex: sdk.Int(299180),
                    ZipFilename: sdk.String("ad"),
                    ZipFilesize: sdk.String("quae"),
                },
                shared.CreativeAsset{
                    ActionScript3: sdk.Bool(false),
                    Active: sdk.Bool(false),
                    AdditionalSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(437785),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("voluptate"),
                            Kind: sdk.String("illum"),
                            Width: sdk.Int(87960),
                        },
                    },
                    Alignment: shared.CreativeAssetAlignmentEnumAlignmentBottom.ToPointer(),
                    ArtworkType: shared.CreativeAssetArtworkTypeEnumArtworkTypeImage.ToPointer(),
                    AssetIdentifier: &shared.CreativeAssetID{
                        Name: sdk.String("Ken Dibbert"),
                        Type: shared.CreativeAssetIDTypeEnumHTML.ToPointer(),
                    },
                    AudioBitRate: sdk.Int(163132),
                    AudioSampleRate: sdk.Int(935771),
                    BackupImageExit: &shared.CreativeCustomEvent{
                        AdvertiserCustomEventID: sdk.String("quibusdam"),
                        AdvertiserCustomEventName: sdk.String("inventore"),
                        AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventTimer.ToPointer(),
                        ArtworkLabel: sdk.String("tempore"),
                        ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeMixed.ToPointer(),
                        ExitClickThroughURL: &shared.CreativeClickThroughURL{
                            ComputedClickThroughURL: sdk.String("fuga"),
                            CustomClickThroughURL: sdk.String("odit"),
                            LandingPageID: sdk.String("minus"),
                        },
                        ID: sdk.String("sunt"),
                        PopupWindowProperties: &shared.PopupWindowProperties{
                            Dimension: &shared.Size{
                                Height: sdk.Int(572892),
                                Iab: sdk.Bool(false),
                                ID: sdk.String("exercitationem"),
                                Kind: sdk.String("magnam"),
                                Width: sdk.Int(330353),
                            },
                            Offset: &shared.OffsetPosition{
                                Left: sdk.Int(312440),
                                Top: sdk.Int(328853),
                            },
                            PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                            ShowAddressBar: sdk.Bool(false),
                            ShowMenuBar: sdk.Bool(false),
                            ShowScrollBar: sdk.Bool(false),
                            ShowStatusBar: sdk.Bool(false),
                            ShowToolBar: sdk.Bool(false),
                            Title: sdk.String("Miss"),
                        },
                        TargetType: shared.CreativeCustomEventTargetTypeEnumTargetTop.ToPointer(),
                        VideoReportingID: sdk.String("enim"),
                    },
                    BitRate: sdk.Int(814114),
                    ChildAssetType: shared.CreativeAssetChildAssetTypeEnumChildAssetTypeData.ToPointer(),
                    CollapsedSize: &shared.Size{
                        Height: sdk.Int(765900),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("et"),
                        Kind: sdk.String("praesentium"),
                        Width: sdk.Int(324786),
                    },
                    CompanionCreativeIds: []string{
                        "est",
                        "magnam",
                        "unde",
                        "consequatur",
                    },
                    CustomStartTimeValue: sdk.Int(119515),
                    DetectedFeatures: []shared.CreativeAssetDetectedFeaturesEnum{
                        shared.CreativeAssetDetectedFeaturesEnumInputAttrAutofocus,
                        shared.CreativeAssetDetectedFeaturesEnumInputTypeColor,
                        shared.CreativeAssetDetectedFeaturesEnumCanvas,
                        shared.CreativeAssetDetectedFeaturesEnumCSSColumns,
                    },
                    DisplayType: shared.CreativeAssetDisplayTypeEnumAssetDisplayTypePeelDown.ToPointer(),
                    Duration: sdk.Int(815667),
                    DurationType: shared.CreativeAssetDurationTypeEnumAssetDurationTypeAuto.ToPointer(),
                    ExpandedDimension: &shared.Size{
                        Height: sdk.Int(858987),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("laborum"),
                        Kind: sdk.String("animi"),
                        Width: sdk.Int(463832),
                    },
                    FileSize: sdk.String("totam"),
                    FlashVersion: sdk.Int(274890),
                    FrameRate: sdk.Float32(6284.7),
                    HideFlashObjects: sdk.Bool(false),
                    HideSelectionBoxes: sdk.Bool(false),
                    HorizontallyLocked: sdk.Bool(false),
                    ID: sdk.String("nobis"),
                    IDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("culpa"),
                        Etag: sdk.String("ratione"),
                        ID: sdk.String("d230edf7-3811-4a11-9382-bd7ed5650762"),
                        Kind: sdk.String("veritatis"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("ad"),
                    },
                    MediaDuration: sdk.Float32(5330.96),
                    MimeType: sdk.String("doloribus"),
                    Offset: &shared.OffsetPosition{
                        Left: sdk.Int(296712),
                        Top: sdk.Int(857355),
                    },
                    Orientation: shared.CreativeAssetOrientationEnumPortrait.ToPointer(),
                    OriginalBackup: sdk.Bool(false),
                    PoliteLoad: sdk.Bool(false),
                    Position: &shared.OffsetPosition{
                        Left: sdk.Int(236455),
                        Top: sdk.Int(592813),
                    },
                    PositionLeftUnit: shared.CreativeAssetPositionLeftUnitEnumOffsetUnitPercent.ToPointer(),
                    PositionTopUnit: shared.CreativeAssetPositionTopUnitEnumOffsetUnitPercent.ToPointer(),
                    ProgressiveServingURL: sdk.String("eum"),
                    Pushdown: sdk.Bool(false),
                    PushdownDuration: sdk.Float32(2681.68),
                    Role: shared.CreativeAssetRoleEnumAlternateVideo.ToPointer(),
                    Size: &shared.Size{
                        Height: sdk.Int(145964),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("accusantium"),
                        Kind: sdk.String("fuga"),
                        Width: sdk.Int(38622),
                    },
                    SslCompliant: sdk.Bool(false),
                    StartTimeType: shared.CreativeAssetStartTimeTypeEnumAssetStartTimeTypeNone.ToPointer(),
                    StreamingServingURL: sdk.String("dicta"),
                    Transparency: sdk.Bool(false),
                    VerticallyLocked: sdk.Bool(false),
                    WindowMode: shared.CreativeAssetWindowModeEnumOpaque.ToPointer(),
                    ZIndex: sdk.Int(628325),
                    ZipFilename: sdk.String("omnis"),
                    ZipFilesize: sdk.String("commodi"),
                },
                shared.CreativeAsset{
                    ActionScript3: sdk.Bool(false),
                    Active: sdk.Bool(false),
                    AdditionalSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(848926),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("aspernatur"),
                            Kind: sdk.String("ut"),
                            Width: sdk.Int(646854),
                        },
                    },
                    Alignment: shared.CreativeAssetAlignmentEnumAlignmentRight.ToPointer(),
                    ArtworkType: shared.CreativeAssetArtworkTypeEnumArtworkTypeImage.ToPointer(),
                    AssetIdentifier: &shared.CreativeAssetID{
                        Name: sdk.String("Wm Little"),
                        Type: shared.CreativeAssetIDTypeEnumFlash.ToPointer(),
                    },
                    AudioBitRate: sdk.Int(152542),
                    AudioSampleRate: sdk.Int(826114),
                    BackupImageExit: &shared.CreativeCustomEvent{
                        AdvertiserCustomEventID: sdk.String("atque"),
                        AdvertiserCustomEventName: sdk.String("perspiciatis"),
                        AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventTimer.ToPointer(),
                        ArtworkLabel: sdk.String("eligendi"),
                        ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeImage.ToPointer(),
                        ExitClickThroughURL: &shared.CreativeClickThroughURL{
                            ComputedClickThroughURL: sdk.String("iusto"),
                            CustomClickThroughURL: sdk.String("atque"),
                            LandingPageID: sdk.String("sunt"),
                        },
                        ID: sdk.String("dolores"),
                        PopupWindowProperties: &shared.PopupWindowProperties{
                            Dimension: &shared.Size{
                                Height: sdk.Int(810324),
                                Iab: sdk.Bool(false),
                                ID: sdk.String("nam"),
                                Kind: sdk.String("exercitationem"),
                                Width: sdk.Int(103547),
                            },
                            Offset: &shared.OffsetPosition{
                                Left: sdk.Int(162374),
                                Top: sdk.Int(771645),
                            },
                            PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                            ShowAddressBar: sdk.Bool(false),
                            ShowMenuBar: sdk.Bool(false),
                            ShowScrollBar: sdk.Bool(false),
                            ShowStatusBar: sdk.Bool(false),
                            ShowToolBar: sdk.Bool(false),
                            Title: sdk.String("Ms."),
                        },
                        TargetType: shared.CreativeCustomEventTargetTypeEnumTargetSelf.ToPointer(),
                        VideoReportingID: sdk.String("aspernatur"),
                    },
                    BitRate: sdk.Int(260929),
                    ChildAssetType: shared.CreativeAssetChildAssetTypeEnumChildAssetTypeFlash.ToPointer(),
                    CollapsedSize: &shared.Size{
                        Height: sdk.Int(749893),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("asperiores"),
                        Kind: sdk.String("corporis"),
                        Width: sdk.Int(274368),
                    },
                    CompanionCreativeIds: []string{
                        "a",
                        "corrupti",
                        "blanditiis",
                    },
                    CustomStartTimeValue: sdk.Int(944690),
                    DetectedFeatures: []shared.CreativeAssetDetectedFeaturesEnum{
                        shared.CreativeAssetDetectedFeaturesEnumSvgFilters,
                        shared.CreativeAssetDetectedFeaturesEnumCSSHsla,
                        shared.CreativeAssetDetectedFeaturesEnumInputTypeWeek,
                    },
                    DisplayType: shared.CreativeAssetDisplayTypeEnumAssetDisplayTypeBackdrop.ToPointer(),
                    Duration: sdk.Int(812),
                    DurationType: shared.CreativeAssetDurationTypeEnumAssetDurationTypeCustom.ToPointer(),
                    ExpandedDimension: &shared.Size{
                        Height: sdk.Int(800509),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("totam"),
                        Kind: sdk.String("officiis"),
                        Width: sdk.Int(120257),
                    },
                    FileSize: sdk.String("maiores"),
                    FlashVersion: sdk.Int(175676),
                    FrameRate: sdk.Float32(195.51),
                    HideFlashObjects: sdk.Bool(false),
                    HideSelectionBoxes: sdk.Bool(false),
                    HorizontallyLocked: sdk.Bool(false),
                    ID: sdk.String("eum"),
                    IDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("nulla"),
                        Etag: sdk.String("corporis"),
                        ID: sdk.String("d831d008-1090-4f67-8667-3f3a681c5768"),
                        Kind: sdk.String("repellendus"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("itaque"),
                    },
                    MediaDuration: sdk.Float32(4771.17),
                    MimeType: sdk.String("quaerat"),
                    Offset: &shared.OffsetPosition{
                        Left: sdk.Int(129134),
                        Top: sdk.Int(292642),
                    },
                    Orientation: shared.CreativeAssetOrientationEnumLandscape.ToPointer(),
                    OriginalBackup: sdk.Bool(false),
                    PoliteLoad: sdk.Bool(false),
                    Position: &shared.OffsetPosition{
                        Left: sdk.Int(566518),
                        Top: sdk.Int(643164),
                    },
                    PositionLeftUnit: shared.CreativeAssetPositionLeftUnitEnumOffsetUnitPixel.ToPointer(),
                    PositionTopUnit: shared.CreativeAssetPositionTopUnitEnumOffsetUnitPixel.ToPointer(),
                    ProgressiveServingURL: sdk.String("exercitationem"),
                    Pushdown: sdk.Bool(false),
                    PushdownDuration: sdk.Float32(8881.17),
                    Role: shared.CreativeAssetRoleEnumPrimary.ToPointer(),
                    Size: &shared.Size{
                        Height: sdk.Int(503498),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("voluptas"),
                        Kind: sdk.String("aut"),
                        Width: sdk.Int(114151),
                    },
                    SslCompliant: sdk.Bool(false),
                    StartTimeType: shared.CreativeAssetStartTimeTypeEnumAssetStartTimeTypeNone.ToPointer(),
                    StreamingServingURL: sdk.String("molestias"),
                    Transparency: sdk.Bool(false),
                    VerticallyLocked: sdk.Bool(false),
                    WindowMode: shared.CreativeAssetWindowModeEnumWindow.ToPointer(),
                    ZIndex: sdk.Int(641594),
                    ZipFilename: sdk.String("minima"),
                    ZipFilesize: sdk.String("doloribus"),
                },
            },
            CreativeFieldAssignments: []shared.CreativeFieldAssignment{
                shared.CreativeFieldAssignment{
                    CreativeFieldID: sdk.String("sequi"),
                    CreativeFieldValueID: sdk.String("debitis"),
                },
                shared.CreativeFieldAssignment{
                    CreativeFieldID: sdk.String("neque"),
                    CreativeFieldValueID: sdk.String("mollitia"),
                },
            },
            CustomKeyValues: []string{
                "non",
                "pariatur",
                "vero",
                "natus",
            },
            DynamicAssetSelection: sdk.Bool(false),
            ExitCustomEvents: []shared.CreativeCustomEvent{
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("quibusdam"),
                    AdvertiserCustomEventName: sdk.String("officia"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventTimer.ToPointer(),
                    ArtworkLabel: sdk.String("velit"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeImage.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("placeat"),
                        CustomClickThroughURL: sdk.String("pariatur"),
                        LandingPageID: sdk.String("vel"),
                    },
                    ID: sdk.String("non"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(279965),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("praesentium"),
                            Kind: sdk.String("ipsum"),
                            Width: sdk.Int(929775),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(252323),
                            Top: sdk.Int(679150),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Miss"),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetParent.ToPointer(),
                    VideoReportingID: sdk.String("quas"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("saepe"),
                    AdvertiserCustomEventName: sdk.String("modi"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventCounter.ToPointer(),
                    ArtworkLabel: sdk.String("maiores"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeFlash.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("in"),
                        CustomClickThroughURL: sdk.String("debitis"),
                        LandingPageID: sdk.String("quaerat"),
                    },
                    ID: sdk.String("nostrum"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(728581),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("totam"),
                            Kind: sdk.String("omnis"),
                            Width: sdk.Int(330484),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(342241),
                            Top: sdk.Int(814971),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Mr."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetTop.ToPointer(),
                    VideoReportingID: sdk.String("recusandae"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("inventore"),
                    AdvertiserCustomEventName: sdk.String("ipsum"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventExit.ToPointer(),
                    ArtworkLabel: sdk.String("numquam"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeMixed.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("dolores"),
                        CustomClickThroughURL: sdk.String("consectetur"),
                        LandingPageID: sdk.String("dicta"),
                    },
                    ID: sdk.String("ipsa"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(580877),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("perferendis"),
                            Kind: sdk.String("iure"),
                            Width: sdk.Int(738496),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(816900),
                            Top: sdk.Int(188253),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Mrs."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetParent.ToPointer(),
                    VideoReportingID: sdk.String("aut"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("cupiditate"),
                    AdvertiserCustomEventName: sdk.String("sed"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventCounter.ToPointer(),
                    ArtworkLabel: sdk.String("vero"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeHtml5.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("velit"),
                        CustomClickThroughURL: sdk.String("incidunt"),
                        LandingPageID: sdk.String("a"),
                    },
                    ID: sdk.String("consequatur"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(164347),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("numquam"),
                            Kind: sdk.String("numquam"),
                            Width: sdk.Int(571263),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(867710),
                            Top: sdk.Int(531934),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Dr."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetTop.ToPointer(),
                    VideoReportingID: sdk.String("expedita"),
                },
            },
            FsCommand: &shared.FsCommand{
                Left: sdk.Int(692814),
                PositionOption: shared.FsCommandPositionOptionEnumCentered.ToPointer(),
                Top: sdk.Int(51228),
                WindowHeight: sdk.Int(991563),
                WindowWidth: sdk.Int(890606),
            },
            HTMLCode: sdk.String("nostrum"),
            HTMLCodeLocked: sdk.Bool(false),
            ID: sdk.String("quibusdam"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("provident"),
                Etag: sdk.String("veritatis"),
                ID: sdk.String("1cbfe749-caf4-45a2-bf69-e2c9e6d10e9d"),
                Kind: sdk.String("quidem"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("est"),
            },
            Kind: sdk.String("repellendus"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("tempora"),
            },
            LatestTraffickedCreativeID: sdk.String("quisquam"),
            MediaDescription: sdk.String("vel"),
            MediaDuration: sdk.Float32(7414.73),
            Name: sdk.String("Ms. Sylvia Botsford"),
            OverrideCSS: sdk.String("occaecati"),
            ProgressOffset: &shared.VideoOffset{
                OffsetPercentage: sdk.Int(787042),
                OffsetSeconds: sdk.Int(201229),
            },
            RedirectURL: sdk.String("sequi"),
            RenderingID: sdk.String("in"),
            RenderingIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("modi"),
                Etag: sdk.String("nihil"),
                ID: sdk.String("3082b94f-2ab1-4fd5-a71e-9c326350a467"),
                Kind: sdk.String("architecto"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("ipsum"),
            },
            RequiredFlashPluginVersion: sdk.String("nihil"),
            RequiredFlashVersion: sdk.Int(500445),
            Size: &shared.Size{
                Height: sdk.Int(616039),
                Iab: sdk.Bool(false),
                ID: sdk.String("quisquam"),
                Kind: sdk.String("itaque"),
                Width: sdk.Int(9743),
            },
            SkipOffset: &shared.VideoOffset{
                OffsetPercentage: sdk.Int(923497),
                OffsetSeconds: sdk.Int(612427),
            },
            Skippable: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslOverride: sdk.Bool(false),
            StudioAdvertiserID: sdk.String("error"),
            StudioCreativeID: sdk.String("dicta"),
            StudioTraffickedCreativeID: sdk.String("nemo"),
            SubaccountID: sdk.String("unde"),
            ThirdPartyBackupImageImpressionsURL: sdk.String("numquam"),
            ThirdPartyRichMediaImpressionsURL: sdk.String("temporibus"),
            ThirdPartyUrls: []shared.ThirdPartyTrackingURL{
                shared.ThirdPartyTrackingURL{
                    ThirdPartyURLType: shared.ThirdPartyTrackingURLThirdPartyURLTypeEnumVideoMidpoint.ToPointer(),
                    URL: sdk.String("deserunt"),
                },
                shared.ThirdPartyTrackingURL{
                    ThirdPartyURLType: shared.ThirdPartyTrackingURLThirdPartyURLTypeEnumVideoRewind.ToPointer(),
                    URL: sdk.String("modi"),
                },
                shared.ThirdPartyTrackingURL{
                    ThirdPartyURLType: shared.ThirdPartyTrackingURLThirdPartyURLTypeEnumRichMediaImpression.ToPointer(),
                    URL: sdk.String("ipsa"),
                },
            },
            TimerCustomEvents: []shared.CreativeCustomEvent{
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("ullam"),
                    AdvertiserCustomEventName: sdk.String("sed"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventCounter.ToPointer(),
                    ArtworkLabel: sdk.String("saepe"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeFlash.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("quidem"),
                        CustomClickThroughURL: sdk.String("quaerat"),
                        LandingPageID: sdk.String("cum"),
                    },
                    ID: sdk.String("dolore"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(843969),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("rerum"),
                            Kind: sdk.String("atque"),
                            Width: sdk.Int(735012),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(488405),
                            Top: sdk.Int(444318),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Dr."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetParent.ToPointer(),
                    VideoReportingID: sdk.String("nam"),
                },
            },
            TotalFileSize: sdk.String("nisi"),
            Type: shared.CreativeTypeEnumDisplayImageGallery.ToPointer(),
            UniversalAdID: &shared.UniversalAdID{
                Registry: shared.UniversalAdIDRegistryEnumOther.ToPointer(),
                Value: sdk.String("fugiat"),
            },
            Version: sdk.Int(135597),
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "laborum",
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.DfareportingCreativesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Creative != nil {
        // handle response
    }
}
```

## DfareportingCreativesList

Retrieves a list of creatives, possibly filtered. This method supports paging.

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
    res, err := s.Creatives.DfareportingCreativesList(ctx, operations.DfareportingCreativesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nam"),
        Active: sdk.Bool(false),
        AdvertiserID: sdk.String("placeat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Archived: sdk.Bool(false),
        Callback: sdk.String("aliquid"),
        CampaignID: sdk.String("adipisci"),
        CompanionCreativeIds: []string{
            "fugiat",
            "enim",
        },
        CreativeFieldIds: []string{
            "eum",
            "exercitationem",
            "at",
            "culpa",
        },
        Fields: sdk.String("alias"),
        Ids: []string{
            "quos",
        },
        Key: sdk.String("quisquam"),
        MaxResults: sdk.Int64(223692),
        OauthToken: sdk.String("accusamus"),
        PageToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "enim",
        QuotaUser: sdk.String("veritatis"),
        RenderingIds: []string{
            "veritatis",
            "vero",
            "ratione",
        },
        SearchString: sdk.String("aut"),
        SizeIds: []string{
            "fugiat",
            "deserunt",
            "sint",
            "eum",
        },
        SortField: operations.DfareportingCreativesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingCreativesListSortOrderEnumAscending.ToPointer(),
        StudioCreativeID: sdk.String("rem"),
        Types: []DfareportingCreativesListTypesEnum{
            operations.DfareportingCreativesListTypesEnumHtml5Banner,
            operations.DfareportingCreativesListTypesEnumRichMediaDisplayInterstitial,
            operations.DfareportingCreativesListTypesEnumInstreamVideoRedirect,
        },
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.DfareportingCreativesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativesListResponse != nil {
        // handle response
    }
}
```

## DfareportingCreativesPatch

Updates an existing creative. This method supports patch semantics.

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
    res, err := s.Creatives.DfareportingCreativesPatch(ctx, operations.DfareportingCreativesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Creative: &shared.Creative{
            AccountID: sdk.String("odio"),
            Active: sdk.Bool(false),
            AdParameters: sdk.String("adipisci"),
            AdTagKeys: []string{
                "veritatis",
                "consectetur",
                "fuga",
                "quasi",
            },
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(678638),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("vel"),
                    Kind: sdk.String("rerum"),
                    Width: sdk.Int(587248),
                },
            },
            AdvertiserID: sdk.String("excepturi"),
            AllowScriptAccess: sdk.Bool(false),
            Archived: sdk.Bool(false),
            ArtworkType: shared.CreativeArtworkTypeEnumArtworkTypeFlash.ToPointer(),
            AuthoringSource: shared.CreativeAuthoringSourceEnumCreativeAuthoringSourceDbm.ToPointer(),
            AuthoringTool: shared.CreativeAuthoringToolEnumSwiffy.ToPointer(),
            AutoAdvanceImages: sdk.Bool(false),
            BackgroundColor: sdk.String("dolore"),
            BackupImageClickThroughURL: &shared.CreativeClickThroughURL{
                ComputedClickThroughURL: sdk.String("corporis"),
                CustomClickThroughURL: sdk.String("natus"),
                LandingPageID: sdk.String("numquam"),
            },
            BackupImageFeatures: []shared.CreativeBackupImageFeaturesEnum{
                shared.CreativeBackupImageFeaturesEnumInputAttrRequired,
                shared.CreativeBackupImageFeaturesEnumInputAttrMax,
            },
            BackupImageReportingLabel: sdk.String("asperiores"),
            BackupImageTargetWindow: &shared.TargetWindow{
                CustomHTML: sdk.String("veniam"),
                TargetWindowOption: shared.TargetWindowTargetWindowOptionEnumCustom.ToPointer(),
            },
            ClickTags: []shared.ClickTag{
                shared.ClickTag{
                    ClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("ut"),
                        CustomClickThroughURL: sdk.String("amet"),
                        LandingPageID: sdk.String("blanditiis"),
                    },
                    EventName: sdk.String("nesciunt"),
                    Name: sdk.String("Hannah Leffler"),
                },
                shared.ClickTag{
                    ClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("consectetur"),
                        CustomClickThroughURL: sdk.String("quisquam"),
                        LandingPageID: sdk.String("nulla"),
                    },
                    EventName: sdk.String("a"),
                    Name: sdk.String("Eleanor Buckridge"),
                },
                shared.ClickTag{
                    ClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("sit"),
                        CustomClickThroughURL: sdk.String("incidunt"),
                        LandingPageID: sdk.String("magnam"),
                    },
                    EventName: sdk.String("molestias"),
                    Name: sdk.String("Evan Skiles I"),
                },
            },
            CommercialID: sdk.String("delectus"),
            CompanionCreatives: []string{
                "officiis",
                "itaque",
            },
            Compatibility: []shared.CreativeCompatibilityEnum{
                shared.CreativeCompatibilityEnumInStreamVideo,
                shared.CreativeCompatibilityEnumInStreamAudio,
                shared.CreativeCompatibilityEnumApp,
                shared.CreativeCompatibilityEnumAppInterstitial,
            },
            ConvertFlashToHtml5: sdk.Bool(false),
            CounterCustomEvents: []shared.CreativeCustomEvent{
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("reiciendis"),
                    AdvertiserCustomEventName: sdk.String("commodi"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventTimer.ToPointer(),
                    ArtworkLabel: sdk.String("ea"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeMixed.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("quia"),
                        CustomClickThroughURL: sdk.String("ipsam"),
                        LandingPageID: sdk.String("rem"),
                    },
                    ID: sdk.String("molestias"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(262664),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("necessitatibus"),
                            Kind: sdk.String("culpa"),
                            Width: sdk.Int(449365),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(398606),
                            Top: sdk.Int(227452),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Mrs."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetParent.ToPointer(),
                    VideoReportingID: sdk.String("in"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("fugit"),
                    AdvertiserCustomEventName: sdk.String("voluptate"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventExit.ToPointer(),
                    ArtworkLabel: sdk.String("quis"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeMixed.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("quam"),
                        CustomClickThroughURL: sdk.String("laudantium"),
                        LandingPageID: sdk.String("exercitationem"),
                    },
                    ID: sdk.String("vitae"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(300584),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("blanditiis"),
                            Kind: sdk.String("nulla"),
                            Width: sdk.Int(432899),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(845164),
                            Top: sdk.Int(325754),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Ms."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetPopup.ToPointer(),
                    VideoReportingID: sdk.String("minima"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("vel"),
                    AdvertiserCustomEventName: sdk.String("consectetur"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventExit.ToPointer(),
                    ArtworkLabel: sdk.String("tempore"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeFlash.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("dolorem"),
                        CustomClickThroughURL: sdk.String("expedita"),
                        LandingPageID: sdk.String("maxime"),
                    },
                    ID: sdk.String("voluptatem"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(979161),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("unde"),
                            Kind: sdk.String("reprehenderit"),
                            Width: sdk.Int(27979),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(812393),
                            Top: sdk.Int(292327),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Dr."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetParent.ToPointer(),
                    VideoReportingID: sdk.String("provident"),
                },
            },
            CreativeAssetSelection: &shared.CreativeAssetSelection{
                DefaultAssetID: sdk.String("delectus"),
                Rules: []shared.Rule{
                    shared.Rule{
                        AssetID: sdk.String("totam"),
                        Name: sdk.String("Marjorie Cassin"),
                        TargetingTemplateID: sdk.String("voluptates"),
                    },
                    shared.Rule{
                        AssetID: sdk.String("in"),
                        Name: sdk.String("Lula Kuphal"),
                        TargetingTemplateID: sdk.String("doloremque"),
                    },
                },
            },
            CreativeAssets: []shared.CreativeAsset{
                shared.CreativeAsset{
                    ActionScript3: sdk.Bool(false),
                    Active: sdk.Bool(false),
                    AdditionalSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(765259),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("eaque"),
                            Kind: sdk.String("earum"),
                            Width: sdk.Int(938762),
                        },
                        shared.Size{
                            Height: sdk.Int(636775),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("vel"),
                            Kind: sdk.String("sapiente"),
                            Width: sdk.Int(598824),
                        },
                    },
                    Alignment: shared.CreativeAssetAlignmentEnumAlignmentTop.ToPointer(),
                    ArtworkType: shared.CreativeAssetArtworkTypeEnumArtworkTypeMixed.ToPointer(),
                    AssetIdentifier: &shared.CreativeAssetID{
                        Name: sdk.String("Miss John Pfannerstill"),
                        Type: shared.CreativeAssetIDTypeEnumHTMLImage.ToPointer(),
                    },
                    AudioBitRate: sdk.Int(601194),
                    AudioSampleRate: sdk.Int(333150),
                    BackupImageExit: &shared.CreativeCustomEvent{
                        AdvertiserCustomEventID: sdk.String("nam"),
                        AdvertiserCustomEventName: sdk.String("accusamus"),
                        AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventTimer.ToPointer(),
                        ArtworkLabel: sdk.String("explicabo"),
                        ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeHtml5.ToPointer(),
                        ExitClickThroughURL: &shared.CreativeClickThroughURL{
                            ComputedClickThroughURL: sdk.String("incidunt"),
                            CustomClickThroughURL: sdk.String("soluta"),
                            LandingPageID: sdk.String("nihil"),
                        },
                        ID: sdk.String("adipisci"),
                        PopupWindowProperties: &shared.PopupWindowProperties{
                            Dimension: &shared.Size{
                                Height: sdk.Int(591998),
                                Iab: sdk.Bool(false),
                                ID: sdk.String("reiciendis"),
                                Kind: sdk.String("dolore"),
                                Width: sdk.Int(974452),
                            },
                            Offset: &shared.OffsetPosition{
                                Left: sdk.Int(907826),
                                Top: sdk.Int(485506),
                            },
                            PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                            ShowAddressBar: sdk.Bool(false),
                            ShowMenuBar: sdk.Bool(false),
                            ShowScrollBar: sdk.Bool(false),
                            ShowStatusBar: sdk.Bool(false),
                            ShowToolBar: sdk.Bool(false),
                            Title: sdk.String("Mr."),
                        },
                        TargetType: shared.CreativeCustomEventTargetTypeEnumTargetBlank.ToPointer(),
                        VideoReportingID: sdk.String("perferendis"),
                    },
                    BitRate: sdk.Int(819052),
                    ChildAssetType: shared.CreativeAssetChildAssetTypeEnumChildAssetTypeFlash.ToPointer(),
                    CollapsedSize: &shared.Size{
                        Height: sdk.Int(965454),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("voluptas"),
                        Kind: sdk.String("exercitationem"),
                        Width: sdk.Int(338101),
                    },
                    CompanionCreativeIds: []string{
                        "impedit",
                        "cupiditate",
                        "excepturi",
                    },
                    CustomStartTimeValue: sdk.Int(801621),
                    DetectedFeatures: []shared.CreativeAssetDetectedFeaturesEnum{
                        shared.CreativeAssetDetectedFeaturesEnumCSSTextShadow,
                        shared.CreativeAssetDetectedFeaturesEnumCSSRgba,
                    },
                    DisplayType: shared.CreativeAssetDisplayTypeEnumAssetDisplayTypeVpaidNonLinear.ToPointer(),
                    Duration: sdk.Int(144879),
                    DurationType: shared.CreativeAssetDurationTypeEnumAssetDurationTypeCustom.ToPointer(),
                    ExpandedDimension: &shared.Size{
                        Height: sdk.Int(761165),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("accusantium"),
                        Kind: sdk.String("earum"),
                        Width: sdk.Int(566915),
                    },
                    FileSize: sdk.String("numquam"),
                    FlashVersion: sdk.Int(28033),
                    FrameRate: sdk.Float32(5286.46),
                    HideFlashObjects: sdk.Bool(false),
                    HideSelectionBoxes: sdk.Bool(false),
                    HorizontallyLocked: sdk.Bool(false),
                    ID: sdk.String("ducimus"),
                    IDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("possimus"),
                        Etag: sdk.String("unde"),
                        ID: sdk.String("caae042d-d7ca-4ac9-b4ca-a1cfe9e15df9"),
                        Kind: sdk.String("ipsa"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("natus"),
                    },
                    MediaDuration: sdk.Float32(455.46),
                    MimeType: sdk.String("ducimus"),
                    Offset: &shared.OffsetPosition{
                        Left: sdk.Int(984557),
                        Top: sdk.Int(230476),
                    },
                    Orientation: shared.CreativeAssetOrientationEnumPortrait.ToPointer(),
                    OriginalBackup: sdk.Bool(false),
                    PoliteLoad: sdk.Bool(false),
                    Position: &shared.OffsetPosition{
                        Left: sdk.Int(535148),
                        Top: sdk.Int(224026),
                    },
                    PositionLeftUnit: shared.CreativeAssetPositionLeftUnitEnumOffsetUnitPixel.ToPointer(),
                    PositionTopUnit: shared.CreativeAssetPositionTopUnitEnumOffsetUnitPercent.ToPointer(),
                    ProgressiveServingURL: sdk.String("quos"),
                    Pushdown: sdk.Bool(false),
                    PushdownDuration: sdk.Float32(1932),
                    Role: shared.CreativeAssetRoleEnumParentAudio.ToPointer(),
                    Size: &shared.Size{
                        Height: sdk.Int(262824),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("odit"),
                        Kind: sdk.String("recusandae"),
                        Width: sdk.Int(325352),
                    },
                    SslCompliant: sdk.Bool(false),
                    StartTimeType: shared.CreativeAssetStartTimeTypeEnumAssetStartTimeTypeNone.ToPointer(),
                    StreamingServingURL: sdk.String("similique"),
                    Transparency: sdk.Bool(false),
                    VerticallyLocked: sdk.Bool(false),
                    WindowMode: shared.CreativeAssetWindowModeEnumWindow.ToPointer(),
                    ZIndex: sdk.Int(359301),
                    ZipFilename: sdk.String("dolore"),
                    ZipFilesize: sdk.String("commodi"),
                },
                shared.CreativeAsset{
                    ActionScript3: sdk.Bool(false),
                    Active: sdk.Bool(false),
                    AdditionalSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(338451),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("provident"),
                            Kind: sdk.String("iusto"),
                            Width: sdk.Int(761961),
                        },
                        shared.Size{
                            Height: sdk.Int(373196),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("consequatur"),
                            Kind: sdk.String("fugit"),
                            Width: sdk.Int(213871),
                        },
                    },
                    Alignment: shared.CreativeAssetAlignmentEnumAlignmentTop.ToPointer(),
                    ArtworkType: shared.CreativeAssetArtworkTypeEnumArtworkTypeImage.ToPointer(),
                    AssetIdentifier: &shared.CreativeAssetID{
                        Name: sdk.String("Dr. Pauline Koss"),
                        Type: shared.CreativeAssetIDTypeEnumImage.ToPointer(),
                    },
                    AudioBitRate: sdk.Int(679899),
                    AudioSampleRate: sdk.Int(658726),
                    BackupImageExit: &shared.CreativeCustomEvent{
                        AdvertiserCustomEventID: sdk.String("mollitia"),
                        AdvertiserCustomEventName: sdk.String("autem"),
                        AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventCounter.ToPointer(),
                        ArtworkLabel: sdk.String("at"),
                        ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeImage.ToPointer(),
                        ExitClickThroughURL: &shared.CreativeClickThroughURL{
                            ComputedClickThroughURL: sdk.String("nemo"),
                            CustomClickThroughURL: sdk.String("laborum"),
                            LandingPageID: sdk.String("quidem"),
                        },
                        ID: sdk.String("nulla"),
                        PopupWindowProperties: &shared.PopupWindowProperties{
                            Dimension: &shared.Size{
                                Height: sdk.Int(399112),
                                Iab: sdk.Bool(false),
                                ID: sdk.String("eius"),
                                Kind: sdk.String("atque"),
                                Width: sdk.Int(442527),
                            },
                            Offset: &shared.OffsetPosition{
                                Left: sdk.Int(774946),
                                Top: sdk.Int(317889),
                            },
                            PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                            ShowAddressBar: sdk.Bool(false),
                            ShowMenuBar: sdk.Bool(false),
                            ShowScrollBar: sdk.Bool(false),
                            ShowStatusBar: sdk.Bool(false),
                            ShowToolBar: sdk.Bool(false),
                            Title: sdk.String("Miss"),
                        },
                        TargetType: shared.CreativeCustomEventTargetTypeEnumTargetBlank.ToPointer(),
                        VideoReportingID: sdk.String("nobis"),
                    },
                    BitRate: sdk.Int(529097),
                    ChildAssetType: shared.CreativeAssetChildAssetTypeEnumChildAssetTypeVideo.ToPointer(),
                    CollapsedSize: &shared.Size{
                        Height: sdk.Int(132268),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("est"),
                        Kind: sdk.String("voluptatem"),
                        Width: sdk.Int(13057),
                    },
                    CompanionCreativeIds: []string{
                        "saepe",
                        "maiores",
                        "autem",
                    },
                    CustomStartTimeValue: sdk.Int(595403),
                    DetectedFeatures: []shared.CreativeAssetDetectedFeaturesEnum{
                        shared.CreativeAssetDetectedFeaturesEnumCSSBoxShadow,
                        shared.CreativeAssetDetectedFeaturesEnumCSSBorderRadius,
                        shared.CreativeAssetDetectedFeaturesEnumCSSBoxShadow,
                        shared.CreativeAssetDetectedFeaturesEnumCSSFlexBox,
                    },
                    DisplayType: shared.CreativeAssetDisplayTypeEnumAssetDisplayTypeExpanding.ToPointer(),
                    Duration: sdk.Int(499883),
                    DurationType: shared.CreativeAssetDurationTypeEnumAssetDurationTypeNone.ToPointer(),
                    ExpandedDimension: &shared.Size{
                        Height: sdk.Int(222109),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("alias"),
                        Kind: sdk.String("libero"),
                        Width: sdk.Int(842683),
                    },
                    FileSize: sdk.String("fuga"),
                    FlashVersion: sdk.Int(468580),
                    FrameRate: sdk.Float32(6306.68),
                    HideFlashObjects: sdk.Bool(false),
                    HideSelectionBoxes: sdk.Bool(false),
                    HorizontallyLocked: sdk.Bool(false),
                    ID: sdk.String("repellat"),
                    IDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("quibusdam"),
                        Etag: sdk.String("accusamus"),
                        ID: sdk.String("d84a35a4-1238-4e1a-b35a-c26ae33bef97"),
                        Kind: sdk.String("dicta"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("blanditiis"),
                    },
                    MediaDuration: sdk.Float32(9993.15),
                    MimeType: sdk.String("modi"),
                    Offset: &shared.OffsetPosition{
                        Left: sdk.Int(401466),
                        Top: sdk.Int(749037),
                    },
                    Orientation: shared.CreativeAssetOrientationEnumSquare.ToPointer(),
                    OriginalBackup: sdk.Bool(false),
                    PoliteLoad: sdk.Bool(false),
                    Position: &shared.OffsetPosition{
                        Left: sdk.Int(651310),
                        Top: sdk.Int(102207),
                    },
                    PositionLeftUnit: shared.CreativeAssetPositionLeftUnitEnumOffsetUnitPixel.ToPointer(),
                    PositionTopUnit: shared.CreativeAssetPositionTopUnitEnumOffsetUnitPixel.ToPointer(),
                    ProgressiveServingURL: sdk.String("commodi"),
                    Pushdown: sdk.Bool(false),
                    PushdownDuration: sdk.Float32(9657.11),
                    Role: shared.CreativeAssetRoleEnumParentAudio.ToPointer(),
                    Size: &shared.Size{
                        Height: sdk.Int(607672),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("ea"),
                        Kind: sdk.String("ipsam"),
                        Width: sdk.Int(743631),
                    },
                    SslCompliant: sdk.Bool(false),
                    StartTimeType: shared.CreativeAssetStartTimeTypeEnumAssetStartTimeTypeNone.ToPointer(),
                    StreamingServingURL: sdk.String("vitae"),
                    Transparency: sdk.Bool(false),
                    VerticallyLocked: sdk.Bool(false),
                    WindowMode: shared.CreativeAssetWindowModeEnumOpaque.ToPointer(),
                    ZIndex: sdk.Int(866917),
                    ZipFilename: sdk.String("voluptatem"),
                    ZipFilesize: sdk.String("blanditiis"),
                },
            },
            CreativeFieldAssignments: []shared.CreativeFieldAssignment{
                shared.CreativeFieldAssignment{
                    CreativeFieldID: sdk.String("tenetur"),
                    CreativeFieldValueID: sdk.String("deleniti"),
                },
                shared.CreativeFieldAssignment{
                    CreativeFieldID: sdk.String("deleniti"),
                    CreativeFieldValueID: sdk.String("necessitatibus"),
                },
                shared.CreativeFieldAssignment{
                    CreativeFieldID: sdk.String("cumque"),
                    CreativeFieldValueID: sdk.String("iste"),
                },
                shared.CreativeFieldAssignment{
                    CreativeFieldID: sdk.String("reiciendis"),
                    CreativeFieldValueID: sdk.String("nihil"),
                },
            },
            CustomKeyValues: []string{
                "perspiciatis",
                "occaecati",
                "officia",
            },
            DynamicAssetSelection: sdk.Bool(false),
            ExitCustomEvents: []shared.CreativeCustomEvent{
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("quis"),
                    AdvertiserCustomEventName: sdk.String("doloremque"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventExit.ToPointer(),
                    ArtworkLabel: sdk.String("eum"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeHtml5.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("commodi"),
                        CustomClickThroughURL: sdk.String("eveniet"),
                        LandingPageID: sdk.String("possimus"),
                    },
                    ID: sdk.String("dolor"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(189252),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("velit"),
                            Kind: sdk.String("soluta"),
                            Width: sdk.Int(740142),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(37563),
                            Top: sdk.Int(777399),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Ms."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetParent.ToPointer(),
                    VideoReportingID: sdk.String("fuga"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("autem"),
                    AdvertiserCustomEventName: sdk.String("quis"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventTimer.ToPointer(),
                    ArtworkLabel: sdk.String("consectetur"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeFlash.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("officia"),
                        CustomClickThroughURL: sdk.String("cupiditate"),
                        LandingPageID: sdk.String("rem"),
                    },
                    ID: sdk.String("ea"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(891770),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("soluta"),
                            Kind: sdk.String("odio"),
                            Width: sdk.Int(906775),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(108879),
                            Top: sdk.Int(295651),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Miss"),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetTop.ToPointer(),
                    VideoReportingID: sdk.String("autem"),
                },
            },
            FsCommand: &shared.FsCommand{
                Left: sdk.Int(251198),
                PositionOption: shared.FsCommandPositionOptionEnumCentered.ToPointer(),
                Top: sdk.Int(540260),
                WindowHeight: sdk.Int(615433),
                WindowWidth: sdk.Int(105102),
            },
            HTMLCode: sdk.String("nemo"),
            HTMLCodeLocked: sdk.Bool(false),
            ID: sdk.String("eaque"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("aut"),
                Etag: sdk.String("natus"),
                ID: sdk.String("7019a48f-88ec-4e7b-b904-e01105d38908"),
                Kind: sdk.String("quasi"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("aspernatur"),
            },
            Kind: sdk.String("quod"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("suscipit"),
            },
            LatestTraffickedCreativeID: sdk.String("tempore"),
            MediaDescription: sdk.String("recusandae"),
            MediaDuration: sdk.Float32(6878.83),
            Name: sdk.String("Dr. Mattie Nader"),
            OverrideCSS: sdk.String("enim"),
            ProgressOffset: &shared.VideoOffset{
                OffsetPercentage: sdk.Int(499182),
                OffsetSeconds: sdk.Int(692401),
            },
            RedirectURL: sdk.String("in"),
            RenderingID: sdk.String("at"),
            RenderingIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("alias"),
                Etag: sdk.String("consectetur"),
                ID: sdk.String("a1480f8d-e30f-4069-9810-618d97e15229"),
                Kind: sdk.String("molestiae"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("et"),
            },
            RequiredFlashPluginVersion: sdk.String("sit"),
            RequiredFlashVersion: sdk.Int(843403),
            Size: &shared.Size{
                Height: sdk.Int(636019),
                Iab: sdk.Bool(false),
                ID: sdk.String("voluptatum"),
                Kind: sdk.String("voluptatem"),
                Width: sdk.Int(228977),
            },
            SkipOffset: &shared.VideoOffset{
                OffsetPercentage: sdk.Int(110280),
                OffsetSeconds: sdk.Int(130672),
            },
            Skippable: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslOverride: sdk.Bool(false),
            StudioAdvertiserID: sdk.String("quia"),
            StudioCreativeID: sdk.String("provident"),
            StudioTraffickedCreativeID: sdk.String("fugit"),
            SubaccountID: sdk.String("nobis"),
            ThirdPartyBackupImageImpressionsURL: sdk.String("optio"),
            ThirdPartyRichMediaImpressionsURL: sdk.String("laboriosam"),
            ThirdPartyUrls: []shared.ThirdPartyTrackingURL{
                shared.ThirdPartyTrackingURL{
                    ThirdPartyURLType: shared.ThirdPartyTrackingURLThirdPartyURLTypeEnumRichMediaImpression.ToPointer(),
                    URL: sdk.String("sed"),
                },
            },
            TimerCustomEvents: []shared.CreativeCustomEvent{
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("in"),
                    AdvertiserCustomEventName: sdk.String("eaque"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventTimer.ToPointer(),
                    ArtworkLabel: sdk.String("distinctio"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeMixed.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("sint"),
                        CustomClickThroughURL: sdk.String("odio"),
                        LandingPageID: sdk.String("repudiandae"),
                    },
                    ID: sdk.String("accusamus"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(93556),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("accusantium"),
                            Kind: sdk.String("dolores"),
                            Width: sdk.Int(855199),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(664312),
                            Top: sdk.Int(153811),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Dr."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetTop.ToPointer(),
                    VideoReportingID: sdk.String("minima"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("tenetur"),
                    AdvertiserCustomEventName: sdk.String("praesentium"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventCounter.ToPointer(),
                    ArtworkLabel: sdk.String("sit"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeFlash.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("libero"),
                        CustomClickThroughURL: sdk.String("tenetur"),
                        LandingPageID: sdk.String("dolorem"),
                    },
                    ID: sdk.String("adipisci"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(916617),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("similique"),
                            Kind: sdk.String("id"),
                            Width: sdk.Int(695002),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(283619),
                            Top: sdk.Int(330468),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Mr."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetBlank.ToPointer(),
                    VideoReportingID: sdk.String("dolorum"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("quod"),
                    AdvertiserCustomEventName: sdk.String("sunt"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventExit.ToPointer(),
                    ArtworkLabel: sdk.String("voluptatem"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeHtml5.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("soluta"),
                        CustomClickThroughURL: sdk.String("a"),
                        LandingPageID: sdk.String("vitae"),
                    },
                    ID: sdk.String("maxime"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(811167),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("cupiditate"),
                            Kind: sdk.String("asperiores"),
                            Width: sdk.Int(802449),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(403683),
                            Top: sdk.Int(120126),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Miss"),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetPopup.ToPointer(),
                    VideoReportingID: sdk.String("ad"),
                },
            },
            TotalFileSize: sdk.String("voluptates"),
            Type: shared.CreativeTypeEnumVpaidNonLinearVideo.ToPointer(),
            UniversalAdID: &shared.UniversalAdID{
                Registry: shared.UniversalAdIDRegistryEnumAdIDOrg.ToPointer(),
                Value: sdk.String("delectus"),
            },
            Version: sdk.Int(27159),
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("molestias"),
        Fields: sdk.String("qui"),
        ID: "b5744d08-a226-47aa-ae79-e3c71ad31bec",
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "consectetur",
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.DfareportingCreativesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Creative != nil {
        // handle response
    }
}
```

## DfareportingCreativesUpdate

Updates an existing creative.

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
    res, err := s.Creatives.DfareportingCreativesUpdate(ctx, operations.DfareportingCreativesUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Creative: &shared.Creative{
            AccountID: sdk.String("deleniti"),
            Active: sdk.Bool(false),
            AdParameters: sdk.String("mollitia"),
            AdTagKeys: []string{
                "neque",
                "facilis",
                "sapiente",
                "maxime",
            },
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(222093),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("nulla"),
                    Kind: sdk.String("sint"),
                    Width: sdk.Int(261500),
                },
            },
            AdvertiserID: sdk.String("ad"),
            AllowScriptAccess: sdk.Bool(false),
            Archived: sdk.Bool(false),
            ArtworkType: shared.CreativeArtworkTypeEnumArtworkTypeFlash.ToPointer(),
            AuthoringSource: shared.CreativeAuthoringSourceEnumCreativeAuthoringSourceStudio.ToPointer(),
            AuthoringTool: shared.CreativeAuthoringToolEnumSwiffy.ToPointer(),
            AutoAdvanceImages: sdk.Bool(false),
            BackgroundColor: sdk.String("rem"),
            BackupImageClickThroughURL: &shared.CreativeClickThroughURL{
                ComputedClickThroughURL: sdk.String("iure"),
                CustomClickThroughURL: sdk.String("error"),
                LandingPageID: sdk.String("aliquam"),
            },
            BackupImageFeatures: []shared.CreativeBackupImageFeaturesEnum{
                shared.CreativeBackupImageFeaturesEnumCanvasText,
                shared.CreativeBackupImageFeaturesEnumInputTypeNumber,
                shared.CreativeBackupImageFeaturesEnumInputTypeMonth,
            },
            BackupImageReportingLabel: sdk.String("quod"),
            BackupImageTargetWindow: &shared.TargetWindow{
                CustomHTML: sdk.String("nihil"),
                TargetWindowOption: shared.TargetWindowTargetWindowOptionEnumNewWindow.ToPointer(),
            },
            ClickTags: []shared.ClickTag{
                shared.ClickTag{
                    ClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("tenetur"),
                        CustomClickThroughURL: sdk.String("eaque"),
                        LandingPageID: sdk.String("ex"),
                    },
                    EventName: sdk.String("rerum"),
                    Name: sdk.String("Myrtle Walker"),
                },
                shared.ClickTag{
                    ClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("atque"),
                        CustomClickThroughURL: sdk.String("autem"),
                        LandingPageID: sdk.String("eius"),
                    },
                    EventName: sdk.String("unde"),
                    Name: sdk.String("Grace Langworth"),
                },
            },
            CommercialID: sdk.String("aliquid"),
            CompanionCreatives: []string{
                "eligendi",
            },
            Compatibility: []shared.CreativeCompatibilityEnum{
                shared.CreativeCompatibilityEnumApp,
                shared.CreativeCompatibilityEnumAppInterstitial,
                shared.CreativeCompatibilityEnumInStreamVideo,
            },
            ConvertFlashToHtml5: sdk.Bool(false),
            CounterCustomEvents: []shared.CreativeCustomEvent{
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("quisquam"),
                    AdvertiserCustomEventName: sdk.String("quod"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventExit.ToPointer(),
                    ArtworkLabel: sdk.String("quidem"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeHtml5.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("praesentium"),
                        CustomClickThroughURL: sdk.String("totam"),
                        LandingPageID: sdk.String("error"),
                    },
                    ID: sdk.String("alias"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(646795),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("sequi"),
                            Kind: sdk.String("sapiente"),
                            Width: sdk.Int(847137),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(202693),
                            Top: sdk.Int(760941),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Mr."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetPopup.ToPointer(),
                    VideoReportingID: sdk.String("culpa"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("dicta"),
                    AdvertiserCustomEventName: sdk.String("perferendis"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventCounter.ToPointer(),
                    ArtworkLabel: sdk.String("deleniti"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeImage.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("consequuntur"),
                        CustomClickThroughURL: sdk.String("non"),
                        LandingPageID: sdk.String("fugiat"),
                    },
                    ID: sdk.String("voluptatibus"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(614815),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("amet"),
                            Kind: sdk.String("quae"),
                            Width: sdk.Int(862971),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(641254),
                            Top: sdk.Int(246557),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Dr."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetParent.ToPointer(),
                    VideoReportingID: sdk.String("minima"),
                },
            },
            CreativeAssetSelection: &shared.CreativeAssetSelection{
                DefaultAssetID: sdk.String("vitae"),
                Rules: []shared.Rule{
                    shared.Rule{
                        AssetID: sdk.String("est"),
                        Name: sdk.String("Jackie Funk"),
                        TargetingTemplateID: sdk.String("minus"),
                    },
                    shared.Rule{
                        AssetID: sdk.String("sint"),
                        Name: sdk.String("Mrs. Edith Hermiston"),
                        TargetingTemplateID: sdk.String("esse"),
                    },
                    shared.Rule{
                        AssetID: sdk.String("magni"),
                        Name: sdk.String("Doreen Boehm"),
                        TargetingTemplateID: sdk.String("quia"),
                    },
                    shared.Rule{
                        AssetID: sdk.String("dicta"),
                        Name: sdk.String("Morris Flatley"),
                        TargetingTemplateID: sdk.String("minima"),
                    },
                },
            },
            CreativeAssets: []shared.CreativeAsset{
                shared.CreativeAsset{
                    ActionScript3: sdk.Bool(false),
                    Active: sdk.Bool(false),
                    AdditionalSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(389091),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("sint"),
                            Kind: sdk.String("architecto"),
                            Width: sdk.Int(519583),
                        },
                        shared.Size{
                            Height: sdk.Int(1320),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("hic"),
                            Kind: sdk.String("tenetur"),
                            Width: sdk.Int(437351),
                        },
                        shared.Size{
                            Height: sdk.Int(8469),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("accusamus"),
                            Kind: sdk.String("cum"),
                            Width: sdk.Int(577854),
                        },
                        shared.Size{
                            Height: sdk.Int(682506),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("ex"),
                            Kind: sdk.String("autem"),
                            Width: sdk.Int(346072),
                        },
                    },
                    Alignment: shared.CreativeAssetAlignmentEnumAlignmentBottom.ToPointer(),
                    ArtworkType: shared.CreativeAssetArtworkTypeEnumArtworkTypeImage.ToPointer(),
                    AssetIdentifier: &shared.CreativeAssetID{
                        Name: sdk.String("Felicia Paucek"),
                        Type: shared.CreativeAssetIDTypeEnumHTML.ToPointer(),
                    },
                    AudioBitRate: sdk.Int(281630),
                    AudioSampleRate: sdk.Int(249771),
                    BackupImageExit: &shared.CreativeCustomEvent{
                        AdvertiserCustomEventID: sdk.String("illum"),
                        AdvertiserCustomEventName: sdk.String("adipisci"),
                        AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventExit.ToPointer(),
                        ArtworkLabel: sdk.String("explicabo"),
                        ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeImage.ToPointer(),
                        ExitClickThroughURL: &shared.CreativeClickThroughURL{
                            ComputedClickThroughURL: sdk.String("harum"),
                            CustomClickThroughURL: sdk.String("itaque"),
                            LandingPageID: sdk.String("porro"),
                        },
                        ID: sdk.String("ducimus"),
                        PopupWindowProperties: &shared.PopupWindowProperties{
                            Dimension: &shared.Size{
                                Height: sdk.Int(323612),
                                Iab: sdk.Bool(false),
                                ID: sdk.String("optio"),
                                Kind: sdk.String("ea"),
                                Width: sdk.Int(547140),
                            },
                            Offset: &shared.OffsetPosition{
                                Left: sdk.Int(793068),
                                Top: sdk.Int(421094),
                            },
                            PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                            ShowAddressBar: sdk.Bool(false),
                            ShowMenuBar: sdk.Bool(false),
                            ShowScrollBar: sdk.Bool(false),
                            ShowStatusBar: sdk.Bool(false),
                            ShowToolBar: sdk.Bool(false),
                            Title: sdk.String("Mrs."),
                        },
                        TargetType: shared.CreativeCustomEventTargetTypeEnumTargetTop.ToPointer(),
                        VideoReportingID: sdk.String("cupiditate"),
                    },
                    BitRate: sdk.Int(307594),
                    ChildAssetType: shared.CreativeAssetChildAssetTypeEnumChildAssetTypeVideo.ToPointer(),
                    CollapsedSize: &shared.Size{
                        Height: sdk.Int(543452),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("minus"),
                        Kind: sdk.String("debitis"),
                        Width: sdk.Int(207326),
                    },
                    CompanionCreativeIds: []string{
                        "tempora",
                    },
                    CustomStartTimeValue: sdk.Int(842772),
                    DetectedFeatures: []shared.CreativeAssetDetectedFeaturesEnum{
                        shared.CreativeAssetDetectedFeaturesEnumInputAttrRequired,
                        shared.CreativeAssetDetectedFeaturesEnumApplicationCache,
                        shared.CreativeAssetDetectedFeaturesEnumInputTypeSearch,
                    },
                    DisplayType: shared.CreativeAssetDisplayTypeEnumAssetDisplayTypeVpaidLinear.ToPointer(),
                    Duration: sdk.Int(956966),
                    DurationType: shared.CreativeAssetDurationTypeEnumAssetDurationTypeNone.ToPointer(),
                    ExpandedDimension: &shared.Size{
                        Height: sdk.Int(128283),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("veritatis"),
                        Kind: sdk.String("incidunt"),
                        Width: sdk.Int(757027),
                    },
                    FileSize: sdk.String("amet"),
                    FlashVersion: sdk.Int(219545),
                    FrameRate: sdk.Float32(4688.4),
                    HideFlashObjects: sdk.Bool(false),
                    HideSelectionBoxes: sdk.Bool(false),
                    HorizontallyLocked: sdk.Bool(false),
                    ID: sdk.String("hic"),
                    IDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("occaecati"),
                        Etag: sdk.String("iure"),
                        ID: sdk.String("bb0c69e3-72db-4134-8ba9-f78a5c0ed7aa"),
                        Kind: sdk.String("soluta"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("explicabo"),
                    },
                    MediaDuration: sdk.Float32(9270.5),
                    MimeType: sdk.String("unde"),
                    Offset: &shared.OffsetPosition{
                        Left: sdk.Int(480684),
                        Top: sdk.Int(132366),
                    },
                    Orientation: shared.CreativeAssetOrientationEnumPortrait.ToPointer(),
                    OriginalBackup: sdk.Bool(false),
                    PoliteLoad: sdk.Bool(false),
                    Position: &shared.OffsetPosition{
                        Left: sdk.Int(102644),
                        Top: sdk.Int(939472),
                    },
                    PositionLeftUnit: shared.CreativeAssetPositionLeftUnitEnumOffsetUnitPixelFromCenter.ToPointer(),
                    PositionTopUnit: shared.CreativeAssetPositionTopUnitEnumOffsetUnitPixel.ToPointer(),
                    ProgressiveServingURL: sdk.String("quod"),
                    Pushdown: sdk.Bool(false),
                    PushdownDuration: sdk.Float32(3319.71),
                    Role: shared.CreativeAssetRoleEnumTranscodedVideo.ToPointer(),
                    Size: &shared.Size{
                        Height: sdk.Int(838206),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("odit"),
                        Kind: sdk.String("voluptate"),
                        Width: sdk.Int(749343),
                    },
                    SslCompliant: sdk.Bool(false),
                    StartTimeType: shared.CreativeAssetStartTimeTypeEnumAssetStartTimeTypeNone.ToPointer(),
                    StreamingServingURL: sdk.String("beatae"),
                    Transparency: sdk.Bool(false),
                    VerticallyLocked: sdk.Bool(false),
                    WindowMode: shared.CreativeAssetWindowModeEnumWindow.ToPointer(),
                    ZIndex: sdk.Int(583913),
                    ZipFilename: sdk.String("ex"),
                    ZipFilesize: sdk.String("tempore"),
                },
                shared.CreativeAsset{
                    ActionScript3: sdk.Bool(false),
                    Active: sdk.Bool(false),
                    AdditionalSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(713538),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("modi"),
                            Kind: sdk.String("expedita"),
                            Width: sdk.Int(313045),
                        },
                        shared.Size{
                            Height: sdk.Int(37560),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("recusandae"),
                            Kind: sdk.String("saepe"),
                            Width: sdk.Int(959673),
                        },
                    },
                    Alignment: shared.CreativeAssetAlignmentEnumAlignmentRight.ToPointer(),
                    ArtworkType: shared.CreativeAssetArtworkTypeEnumArtworkTypeFlash.ToPointer(),
                    AssetIdentifier: &shared.CreativeAssetID{
                        Name: sdk.String("Whitney Kuphal"),
                        Type: shared.CreativeAssetIDTypeEnumHTML.ToPointer(),
                    },
                    AudioBitRate: sdk.Int(709739),
                    AudioSampleRate: sdk.Int(32843),
                    BackupImageExit: &shared.CreativeCustomEvent{
                        AdvertiserCustomEventID: sdk.String("adipisci"),
                        AdvertiserCustomEventName: sdk.String("tempora"),
                        AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventTimer.ToPointer(),
                        ArtworkLabel: sdk.String("soluta"),
                        ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeFlash.ToPointer(),
                        ExitClickThroughURL: &shared.CreativeClickThroughURL{
                            ComputedClickThroughURL: sdk.String("ducimus"),
                            CustomClickThroughURL: sdk.String("vitae"),
                            LandingPageID: sdk.String("sit"),
                        },
                        ID: sdk.String("autem"),
                        PopupWindowProperties: &shared.PopupWindowProperties{
                            Dimension: &shared.Size{
                                Height: sdk.Int(526516),
                                Iab: sdk.Bool(false),
                                ID: sdk.String("deleniti"),
                                Kind: sdk.String("illum"),
                                Width: sdk.Int(899786),
                            },
                            Offset: &shared.OffsetPosition{
                                Left: sdk.Int(878421),
                                Top: sdk.Int(705059),
                            },
                            PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                            ShowAddressBar: sdk.Bool(false),
                            ShowMenuBar: sdk.Bool(false),
                            ShowScrollBar: sdk.Bool(false),
                            ShowStatusBar: sdk.Bool(false),
                            ShowToolBar: sdk.Bool(false),
                            Title: sdk.String("Dr."),
                        },
                        TargetType: shared.CreativeCustomEventTargetTypeEnumTargetSelf.ToPointer(),
                        VideoReportingID: sdk.String("perspiciatis"),
                    },
                    BitRate: sdk.Int(466968),
                    ChildAssetType: shared.CreativeAssetChildAssetTypeEnumChildAssetTypeData.ToPointer(),
                    CollapsedSize: &shared.Size{
                        Height: sdk.Int(244344),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("fugiat"),
                        Kind: sdk.String("pariatur"),
                        Width: sdk.Int(27676),
                    },
                    CompanionCreativeIds: []string{
                        "minus",
                        "pariatur",
                        "dolor",
                        "amet",
                    },
                    CustomStartTimeValue: sdk.Int(948301),
                    DetectedFeatures: []shared.CreativeAssetDetectedFeaturesEnum{
                        shared.CreativeAssetDetectedFeaturesEnumCSSMultipleBgs,
                    },
                    DisplayType: shared.CreativeAssetDisplayTypeEnumAssetDisplayTypePeelDown.ToPointer(),
                    Duration: sdk.Int(205473),
                    DurationType: shared.CreativeAssetDurationTypeEnumAssetDurationTypeCustom.ToPointer(),
                    ExpandedDimension: &shared.Size{
                        Height: sdk.Int(303365),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("voluptates"),
                        Kind: sdk.String("alias"),
                        Width: sdk.Int(528631),
                    },
                    FileSize: sdk.String("aut"),
                    FlashVersion: sdk.Int(642105),
                    FrameRate: sdk.Float32(6383.18),
                    HideFlashObjects: sdk.Bool(false),
                    HideSelectionBoxes: sdk.Bool(false),
                    HorizontallyLocked: sdk.Bool(false),
                    ID: sdk.String("vitae"),
                    IDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("ipsa"),
                        Etag: sdk.String("incidunt"),
                        ID: sdk.String("186ec759-e02f-4370-ac5c-8e2d30ead310"),
                        Kind: sdk.String("incidunt"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("culpa"),
                    },
                    MediaDuration: sdk.Float32(2957.4),
                    MimeType: sdk.String("eius"),
                    Offset: &shared.OffsetPosition{
                        Left: sdk.Int(438216),
                        Top: sdk.Int(2083),
                    },
                    Orientation: shared.CreativeAssetOrientationEnumPortrait.ToPointer(),
                    OriginalBackup: sdk.Bool(false),
                    PoliteLoad: sdk.Bool(false),
                    Position: &shared.OffsetPosition{
                        Left: sdk.Int(701215),
                        Top: sdk.Int(972620),
                    },
                    PositionLeftUnit: shared.CreativeAssetPositionLeftUnitEnumOffsetUnitPixel.ToPointer(),
                    PositionTopUnit: shared.CreativeAssetPositionTopUnitEnumOffsetUnitPercent.ToPointer(),
                    ProgressiveServingURL: sdk.String("minima"),
                    Pushdown: sdk.Bool(false),
                    PushdownDuration: sdk.Float32(7261.44),
                    Role: shared.CreativeAssetRoleEnumAdditionalImage.ToPointer(),
                    Size: &shared.Size{
                        Height: sdk.Int(270633),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("sed"),
                        Kind: sdk.String("quas"),
                        Width: sdk.Int(135685),
                    },
                    SslCompliant: sdk.Bool(false),
                    StartTimeType: shared.CreativeAssetStartTimeTypeEnumAssetStartTimeTypeCustom.ToPointer(),
                    StreamingServingURL: sdk.String("fugit"),
                    Transparency: sdk.Bool(false),
                    VerticallyLocked: sdk.Bool(false),
                    WindowMode: shared.CreativeAssetWindowModeEnumOpaque.ToPointer(),
                    ZIndex: sdk.Int(967492),
                    ZipFilename: sdk.String("nulla"),
                    ZipFilesize: sdk.String("libero"),
                },
            },
            CreativeFieldAssignments: []shared.CreativeFieldAssignment{
                shared.CreativeFieldAssignment{
                    CreativeFieldID: sdk.String("hic"),
                    CreativeFieldValueID: sdk.String("eum"),
                },
            },
            CustomKeyValues: []string{
                "eveniet",
                "veniam",
                "unde",
            },
            DynamicAssetSelection: sdk.Bool(false),
            ExitCustomEvents: []shared.CreativeCustomEvent{
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("laboriosam"),
                    AdvertiserCustomEventName: sdk.String("iusto"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventCounter.ToPointer(),
                    ArtworkLabel: sdk.String("dignissimos"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeFlash.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("quo"),
                        CustomClickThroughURL: sdk.String("optio"),
                        LandingPageID: sdk.String("voluptatum"),
                    },
                    ID: sdk.String("pariatur"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(194850),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("quo"),
                            Kind: sdk.String("facere"),
                            Width: sdk.Int(286446),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(147916),
                            Top: sdk.Int(340317),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Dr."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetBlank.ToPointer(),
                    VideoReportingID: sdk.String("amet"),
                },
            },
            FsCommand: &shared.FsCommand{
                Left: sdk.Int(369181),
                PositionOption: shared.FsCommandPositionOptionEnumDistanceFromTopLeftCorner.ToPointer(),
                Top: sdk.Int(671873),
                WindowHeight: sdk.Int(558869),
                WindowWidth: sdk.Int(138708),
            },
            HTMLCode: sdk.String("placeat"),
            HTMLCodeLocked: sdk.Bool(false),
            ID: sdk.String("rem"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("aut"),
                Etag: sdk.String("atque"),
                ID: sdk.String("fe2751a2-047c-4044-9e14-3f9619bb7d40"),
                Kind: sdk.String("vero"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("laborum"),
            },
            Kind: sdk.String("quae"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("quae"),
            },
            LatestTraffickedCreativeID: sdk.String("voluptatibus"),
            MediaDescription: sdk.String("est"),
            MediaDuration: sdk.Float32(2688.56),
            Name: sdk.String("Tonya Waelchi"),
            OverrideCSS: sdk.String("exercitationem"),
            ProgressOffset: &shared.VideoOffset{
                OffsetPercentage: sdk.Int(616690),
                OffsetSeconds: sdk.Int(128471),
            },
            RedirectURL: sdk.String("velit"),
            RenderingID: sdk.String("adipisci"),
            RenderingIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("hic"),
                Etag: sdk.String("natus"),
                ID: sdk.String("5c9d2373-97c7-485b-9db4-f500183febdf"),
                Kind: sdk.String("ea"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("aliquid"),
            },
            RequiredFlashPluginVersion: sdk.String("nobis"),
            RequiredFlashVersion: sdk.Int(443973),
            Size: &shared.Size{
                Height: sdk.Int(161208),
                Iab: sdk.Bool(false),
                ID: sdk.String("accusantium"),
                Kind: sdk.String("autem"),
                Width: sdk.Int(865309),
            },
            SkipOffset: &shared.VideoOffset{
                OffsetPercentage: sdk.Int(643614),
                OffsetSeconds: sdk.Int(705418),
            },
            Skippable: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslOverride: sdk.Bool(false),
            StudioAdvertiserID: sdk.String("in"),
            StudioCreativeID: sdk.String("ad"),
            StudioTraffickedCreativeID: sdk.String("voluptatem"),
            SubaccountID: sdk.String("sit"),
            ThirdPartyBackupImageImpressionsURL: sdk.String("enim"),
            ThirdPartyRichMediaImpressionsURL: sdk.String("qui"),
            ThirdPartyUrls: []shared.ThirdPartyTrackingURL{
                shared.ThirdPartyTrackingURL{
                    ThirdPartyURLType: shared.ThirdPartyTrackingURLThirdPartyURLTypeEnumVideoComplete.ToPointer(),
                    URL: sdk.String("nisi"),
                },
                shared.ThirdPartyTrackingURL{
                    ThirdPartyURLType: shared.ThirdPartyTrackingURLThirdPartyURLTypeEnumVideoThirdQuartile.ToPointer(),
                    URL: sdk.String("in"),
                },
                shared.ThirdPartyTrackingURL{
                    ThirdPartyURLType: shared.ThirdPartyTrackingURLThirdPartyURLTypeEnumRichMediaBackupImpression.ToPointer(),
                    URL: sdk.String("fugiat"),
                },
            },
            TimerCustomEvents: []shared.CreativeCustomEvent{
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("tempora"),
                    AdvertiserCustomEventName: sdk.String("sequi"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventExit.ToPointer(),
                    ArtworkLabel: sdk.String("saepe"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeImage.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("corrupti"),
                        CustomClickThroughURL: sdk.String("maxime"),
                        LandingPageID: sdk.String("aliquam"),
                    },
                    ID: sdk.String("adipisci"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(130147),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("eaque"),
                            Kind: sdk.String("hic"),
                            Width: sdk.Int(276828),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(65826),
                            Top: sdk.Int(176403),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Mr."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetPopup.ToPointer(),
                    VideoReportingID: sdk.String("aliquam"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("incidunt"),
                    AdvertiserCustomEventName: sdk.String("totam"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventExit.ToPointer(),
                    ArtworkLabel: sdk.String("mollitia"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeImage.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("voluptas"),
                        CustomClickThroughURL: sdk.String("provident"),
                        LandingPageID: sdk.String("neque"),
                    },
                    ID: sdk.String("expedita"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(569306),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("quaerat"),
                            Kind: sdk.String("nobis"),
                            Width: sdk.Int(198485),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(694952),
                            Top: sdk.Int(603472),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCoordinates.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Mr."),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetTop.ToPointer(),
                    VideoReportingID: sdk.String("atque"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("blanditiis"),
                    AdvertiserCustomEventName: sdk.String("quibusdam"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventExit.ToPointer(),
                    ArtworkLabel: sdk.String("unde"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeHtml5.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("officia"),
                        CustomClickThroughURL: sdk.String("fuga"),
                        LandingPageID: sdk.String("incidunt"),
                    },
                    ID: sdk.String("aspernatur"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(990125),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("maxime"),
                            Kind: sdk.String("dolore"),
                            Width: sdk.Int(36619),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(357434),
                            Top: sdk.Int(388180),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Miss"),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetPopup.ToPointer(),
                    VideoReportingID: sdk.String("vel"),
                },
                shared.CreativeCustomEvent{
                    AdvertiserCustomEventID: sdk.String("iste"),
                    AdvertiserCustomEventName: sdk.String("animi"),
                    AdvertiserCustomEventType: shared.CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventTimer.ToPointer(),
                    ArtworkLabel: sdk.String("doloremque"),
                    ArtworkType: shared.CreativeCustomEventArtworkTypeEnumArtworkTypeHtml5.ToPointer(),
                    ExitClickThroughURL: &shared.CreativeClickThroughURL{
                        ComputedClickThroughURL: sdk.String("pariatur"),
                        CustomClickThroughURL: sdk.String("fugit"),
                        LandingPageID: sdk.String("inventore"),
                    },
                    ID: sdk.String("odit"),
                    PopupWindowProperties: &shared.PopupWindowProperties{
                        Dimension: &shared.Size{
                            Height: sdk.Int(287746),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("perspiciatis"),
                            Kind: sdk.String("dolore"),
                            Width: sdk.Int(352016),
                        },
                        Offset: &shared.OffsetPosition{
                            Left: sdk.Int(11813),
                            Top: sdk.Int(540570),
                        },
                        PositionType: shared.PopupWindowPropertiesPositionTypeEnumCenter.ToPointer(),
                        ShowAddressBar: sdk.Bool(false),
                        ShowMenuBar: sdk.Bool(false),
                        ShowScrollBar: sdk.Bool(false),
                        ShowStatusBar: sdk.Bool(false),
                        ShowToolBar: sdk.Bool(false),
                        Title: sdk.String("Miss"),
                    },
                    TargetType: shared.CreativeCustomEventTargetTypeEnumTargetPopup.ToPointer(),
                    VideoReportingID: sdk.String("odio"),
                },
            },
            TotalFileSize: sdk.String("quo"),
            Type: shared.CreativeTypeEnumInterstitialInternalRedirect.ToPointer(),
            UniversalAdID: &shared.UniversalAdID{
                Registry: shared.UniversalAdIDRegistryEnumClearcast.ToPointer(),
                Value: sdk.String("et"),
            },
            Version: sdk.Int(689296),
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("consequatur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nisi",
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.DfareportingCreativesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Creative != nil {
        // handle response
    }
}
```
