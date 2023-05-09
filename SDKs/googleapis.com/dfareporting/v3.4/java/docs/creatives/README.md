# creatives

### Available Operations

* [dfareportingCreativesGet](#dfareportingcreativesget) - Gets one creative by ID.
* [dfareportingCreativesInsert](#dfareportingcreativesinsert) - Inserts a new creative.
* [dfareportingCreativesList](#dfareportingcreativeslist) - Retrieves a list of creatives, possibly filtered. This method supports paging.
* [dfareportingCreativesPatch](#dfareportingcreativespatch) - Updates an existing creative. This method supports patch semantics.
* [dfareportingCreativesUpdate](#dfareportingcreativesupdate) - Updates an existing creative.

## dfareportingCreativesGet

Gets one creative by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativesGetRequest;
import org.openapis.openapi.models.operations.DfareportingCreativesGetResponse;
import org.openapis.openapi.models.operations.DfareportingCreativesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativesGetRequest req = new DfareportingCreativesGetRequest("fuga", "excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                alt = AltEnum.PROTO;
                callback = "suscipit";
                fields = "porro";
                key = "nulla";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "in";
                uploadProtocol = "enim";
            }};            

            DfareportingCreativesGetResponse res = sdk.creatives.dfareportingCreativesGet(req, new DfareportingCreativesGetSecurity("vel", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creative != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativesInsert

Inserts a new creative.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativesInsertRequest;
import org.openapis.openapi.models.operations.DfareportingCreativesInsertResponse;
import org.openapis.openapi.models.operations.DfareportingCreativesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClickTag;
import org.openapis.openapi.models.shared.Creative;
import org.openapis.openapi.models.shared.CreativeArtworkTypeEnum;
import org.openapis.openapi.models.shared.CreativeAsset;
import org.openapis.openapi.models.shared.CreativeAssetAlignmentEnum;
import org.openapis.openapi.models.shared.CreativeAssetArtworkTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetChildAssetTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum;
import org.openapis.openapi.models.shared.CreativeAssetDisplayTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetDurationTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetId;
import org.openapis.openapi.models.shared.CreativeAssetIdTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetOrientationEnum;
import org.openapis.openapi.models.shared.CreativeAssetPositionLeftUnitEnum;
import org.openapis.openapi.models.shared.CreativeAssetPositionTopUnitEnum;
import org.openapis.openapi.models.shared.CreativeAssetRoleEnum;
import org.openapis.openapi.models.shared.CreativeAssetSelection;
import org.openapis.openapi.models.shared.CreativeAssetStartTimeTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetWindowModeEnum;
import org.openapis.openapi.models.shared.CreativeAuthoringSourceEnum;
import org.openapis.openapi.models.shared.CreativeAuthoringToolEnum;
import org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum;
import org.openapis.openapi.models.shared.CreativeClickThroughUrl;
import org.openapis.openapi.models.shared.CreativeCompatibilityEnum;
import org.openapis.openapi.models.shared.CreativeCustomEvent;
import org.openapis.openapi.models.shared.CreativeCustomEventAdvertiserCustomEventTypeEnum;
import org.openapis.openapi.models.shared.CreativeCustomEventArtworkTypeEnum;
import org.openapis.openapi.models.shared.CreativeCustomEventTargetTypeEnum;
import org.openapis.openapi.models.shared.CreativeFieldAssignment;
import org.openapis.openapi.models.shared.CreativeTypeEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.FsCommand;
import org.openapis.openapi.models.shared.FsCommandPositionOptionEnum;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.ObaIcon;
import org.openapis.openapi.models.shared.OffsetPosition;
import org.openapis.openapi.models.shared.PopupWindowProperties;
import org.openapis.openapi.models.shared.PopupWindowPropertiesPositionTypeEnum;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.TargetWindow;
import org.openapis.openapi.models.shared.TargetWindowTargetWindowOptionEnum;
import org.openapis.openapi.models.shared.ThirdPartyTrackingUrl;
import org.openapis.openapi.models.shared.ThirdPartyTrackingUrlThirdPartyUrlTypeEnum;
import org.openapis.openapi.models.shared.UniversalAdId;
import org.openapis.openapi.models.shared.UniversalAdIdRegistryEnum;
import org.openapis.openapi.models.shared.VideoOffset;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativesInsertRequest req = new DfareportingCreativesInsertRequest("consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                creative = new Creative() {{
                    accountId = "ut";
                    active = false;
                    adParameters = "est";
                    adTagKeys = new String[]{{
                        add("labore"),
                        add("adipisci"),
                        add("ratione"),
                    }};
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 300732;
                            iab = false;
                            id = "nihil";
                            kind = "officiis";
                            width = 79653;
                        }}),
                        add(new Size() {{
                            height = 460883;
                            iab = false;
                            id = "ex";
                            kind = "amet";
                            width = 791516;
                        }}),
                        add(new Size() {{
                            height = 321438;
                            iab = false;
                            id = "explicabo";
                            kind = "alias";
                            width = 502686;
                        }}),
                    }};
                    advertiserId = "eligendi";
                    allowScriptAccess = false;
                    archived = false;
                    artworkType = CreativeArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                    authoringSource = CreativeAuthoringSourceEnum.CREATIVE_AUTHORING_SOURCE_DBM;
                    authoringTool = CreativeAuthoringToolEnum.SWIFFY;
                    autoAdvanceImages = false;
                    backgroundColor = "perspiciatis";
                    backupImageClickThroughUrl = new CreativeClickThroughUrl() {{
                        computedClickThroughUrl = "corrupti";
                        customClickThroughUrl = "sit";
                        landingPageId = "magni";
                    }};;
                    backupImageFeatures = new org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum[]{{
                        add(CreativeBackupImageFeaturesEnum.INPUT_ATTR_REQUIRED),
                        add(CreativeBackupImageFeaturesEnum.CSS_COLUMNS),
                        add(CreativeBackupImageFeaturesEnum.WEBGL),
                        add(CreativeBackupImageFeaturesEnum.CSS_FONT_FACE),
                    }};
                    backupImageReportingLabel = "repellendus";
                    backupImageTargetWindow = new TargetWindow() {{
                        customHtml = "magnam";
                        targetWindowOption = TargetWindowTargetWindowOptionEnum.CURRENT_WINDOW;
                    }};;
                    clickTags = new org.openapis.openapi.models.shared.ClickTag[]{{
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "soluta";
                                customClickThroughUrl = "eius";
                                landingPageId = "fuga";
                            }};
                            eventName = "blanditiis";
                            name = "Brett Kub";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "recusandae";
                                customClickThroughUrl = "ipsam";
                                landingPageId = "quisquam";
                            }};
                            eventName = "delectus";
                            name = "Ralph Leffler";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "optio";
                                customClickThroughUrl = "esse";
                                landingPageId = "a";
                            }};
                            eventName = "quam";
                            name = "Julio Wehner";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "recusandae";
                                customClickThroughUrl = "voluptatem";
                                landingPageId = "eius";
                            }};
                            eventName = "rerum";
                            name = "Freda Frami";
                        }}),
                    }};
                    commercialId = "quae";
                    companionCreatives = new String[]{{
                        add("ullam"),
                        add("vel"),
                        add("reprehenderit"),
                        add("aut"),
                    }};
                    compatibility = new org.openapis.openapi.models.shared.CreativeCompatibilityEnum[]{{
                        add(CreativeCompatibilityEnum.IN_STREAM_AUDIO),
                        add(CreativeCompatibilityEnum.DISPLAY_INTERSTITIAL),
                        add(CreativeCompatibilityEnum.DISPLAY),
                        add(CreativeCompatibilityEnum.IN_STREAM_VIDEO),
                    }};
                    convertFlashToHtml5 = false;
                    counterCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "dolor";
                            advertiserCustomEventName = "porro";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "earum";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "impedit";
                                customClickThroughUrl = "eligendi";
                                landingPageId = "veniam";
                            }};
                            id = "aperiam";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 231914;
                                    iab = false;
                                    id = "repellat";
                                    kind = "voluptas";
                                    width = 801405;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 203087;
                                    top = 612697;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_POPUP;
                            videoReportingId = "alias";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "deserunt";
                            advertiserCustomEventName = "vel";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "perspiciatis";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "voluptatibus";
                                customClickThroughUrl = "occaecati";
                                landingPageId = "nemo";
                            }};
                            id = "quam";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 970491;
                                    iab = false;
                                    id = "nesciunt";
                                    kind = "laudantium";
                                    width = 368084;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 69381;
                                    top = 541466;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_POPUP;
                            videoReportingId = "molestiae";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "officiis";
                            advertiserCustomEventName = "reiciendis";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "aperiam";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "animi";
                                customClickThroughUrl = "officia";
                                landingPageId = "eveniet";
                            }};
                            id = "quae";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 236564;
                                    iab = false;
                                    id = "hic";
                                    kind = "dolorem";
                                    width = 239908;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 762233;
                                    top = 627374;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_POPUP;
                            videoReportingId = "nam";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "provident";
                            advertiserCustomEventName = "fugiat";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "non";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "neque";
                                customClickThroughUrl = "quia";
                                landingPageId = "soluta";
                            }};
                            id = "fuga";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 186488;
                                    iab = false;
                                    id = "commodi";
                                    kind = "a";
                                    width = 835965;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 197256;
                                    top = 428898;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_PARENT;
                            videoReportingId = "excepturi";
                        }}),
                    }};
                    creativeAssetSelection = new CreativeAssetSelection() {{
                        defaultAssetId = "dolores";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                assetId = "laboriosam";
                                name = "Cedric Quigley II";
                                targetingTemplateId = "molestias";
                            }}),
                        }};
                    }};;
                    creativeAssets = new org.openapis.openapi.models.shared.CreativeAsset[]{{
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 758549;
                                    iab = false;
                                    id = "esse";
                                    kind = "adipisci";
                                    width = 422759;
                                }}),
                                add(new Size() {{
                                    height = 270840;
                                    iab = false;
                                    id = "beatae";
                                    kind = "dignissimos";
                                    width = 158023;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Annie Walter";
                                type = CreativeAssetIdTypeEnum.IMAGE;
                            }};
                            audioBitRate = 268612;
                            audioSampleRate = 431617;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "rerum";
                                advertiserCustomEventName = "quod";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "architecto";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "amet";
                                    customClickThroughUrl = "facilis";
                                    landingPageId = "libero";
                                }};
                                id = "maxime";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 647553;
                                        iab = false;
                                        id = "eius";
                                        kind = "molestias";
                                        width = 173752;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 171640;
                                        top = 439899;
                                    }};
                                    positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                    showAddressBar = false;
                                    showMenuBar = false;
                                    showScrollBar = false;
                                    showStatusBar = false;
                                    showToolBar = false;
                                    title = "Mrs.";
                                }};
                                targetType = CreativeCustomEventTargetTypeEnum.TARGET_BLANK;
                                videoReportingId = "maxime";
                            }};
                            bitRate = 134798;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_FLASH;
                            collapsedSize = new Size() {{
                                height = 795035;
                                iab = false;
                                id = "minima";
                                kind = "ipsam";
                                width = 193199;
                            }};
                            companionCreativeIds = new String[]{{
                                add("accusantium"),
                                add("incidunt"),
                            }};
                            customStartTimeValue = 583959;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.LOCAL_STORAGE),
                                add(CreativeAssetDetectedFeaturesEnum.DRAG_AND_DROP),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR;
                            duration = 696368;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_CUSTOM;
                            expandedDimension = new Size() {{
                                height = 240262;
                                iab = false;
                                id = "optio";
                                kind = "minima";
                                width = 443565;
                            }};
                            fileSize = "quo";
                            flashVersion = 114305;
                            frameRate = 9131.51;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "tempora";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "iste";
                                etag = "molestias";
                                id = "1e8aa257-ddc1-4912-abde-64bfcc5469d4";
                                kind = "aut";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "quis";
                            }};
                            mediaDuration = 8241.49;
                            mimeType = "reiciendis";
                            offset = new OffsetPosition() {{
                                left = 665807;
                                top = 458220;
                            }};
                            orientation = CreativeAssetOrientationEnum.PORTRAIT;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 405419;
                                top = 142173;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PERCENT;
                            progressiveServingUrl = "libero";
                            pushdown = false;
                            pushdownDuration = 8766.36;
                            role = CreativeAssetRoleEnum.TRANSCODED_AUDIO;
                            size = new Size() {{
                                height = 163304;
                                iab = false;
                                id = "quidem";
                                kind = "aperiam";
                                width = 657394;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "itaque";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.OPAQUE;
                            zIndex = 154034;
                            zipFilename = "porro";
                            zipFilesize = "architecto";
                        }}),
                    }};
                    creativeFieldAssignments = new org.openapis.openapi.models.shared.CreativeFieldAssignment[]{{
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "fuga";
                            creativeFieldValueId = "perferendis";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "illo";
                            creativeFieldValueId = "perferendis";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "eveniet";
                            creativeFieldValueId = "excepturi";
                        }}),
                    }};
                    customKeyValues = new String[]{{
                        add("culpa"),
                        add("quo"),
                        add("sunt"),
                    }};
                    dynamicAssetSelection = false;
                    exitCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "iste";
                            advertiserCustomEventName = "veritatis";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "quis";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "quos";
                                customClickThroughUrl = "ea";
                                landingPageId = "fugiat";
                            }};
                            id = "dicta";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 555988;
                                    iab = false;
                                    id = "delectus";
                                    kind = "sint";
                                    width = 973765;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 573053;
                                    top = 445002;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mrs.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_PARENT;
                            videoReportingId = "sapiente";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "fuga";
                            advertiserCustomEventName = "facere";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "nam";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "quam";
                                customClickThroughUrl = "fugiat";
                                landingPageId = "ea";
                            }};
                            id = "molestiae";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 779350;
                                    iab = false;
                                    id = "deserunt";
                                    kind = "totam";
                                    width = 267292;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 660582;
                                    top = 829910;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_PARENT;
                            videoReportingId = "eius";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "quasi";
                            advertiserCustomEventName = "quibusdam";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "quasi";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "numquam";
                                customClickThroughUrl = "velit";
                                landingPageId = "quis";
                            }};
                            id = "nesciunt";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 124198;
                                    iab = false;
                                    id = "blanditiis";
                                    kind = "quam";
                                    width = 18993;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 765732;
                                    top = 963968;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Ms.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_PARENT;
                            videoReportingId = "eaque";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "sequi";
                            advertiserCustomEventName = "fuga";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "modi";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "beatae";
                                customClickThroughUrl = "rerum";
                                landingPageId = "repellendus";
                            }};
                            id = "ut";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 197907;
                                    iab = false;
                                    id = "facere";
                                    kind = "beatae";
                                    width = 964641;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 56906;
                                    top = 777026;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_PARENT;
                            videoReportingId = "doloremque";
                        }}),
                    }};
                    fsCommand = new FsCommand() {{
                        left = 8199;
                        positionOption = FsCommandPositionOptionEnum.CENTERED;
                        top = 221480;
                        windowHeight = 935184;
                        windowWidth = 704682;
                    }};;
                    htmlCode = "eos";
                    htmlCodeLocked = false;
                    id = "sed";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "fugiat";
                        etag = "sint";
                        id = "b3a70d94-faa7-441c-97d1-fedc2050d38d";
                        kind = "quo";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "quo";
                    }};;
                    kind = "repudiandae";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "ab";
                    }};;
                    latestTraffickedCreativeId = "praesentium";
                    mediaDescription = "nostrum";
                    mediaDuration = 2872.52;
                    name = "Ashley West";
                    obaIcon = new ObaIcon() {{
                        iconClickThroughUrl = "necessitatibus";
                        iconClickTrackingUrl = "autem";
                        iconViewTrackingUrl = "natus";
                        program = "quasi";
                        resourceUrl = "iure";
                        size = new Size() {{
                            height = 404542;
                            iab = false;
                            id = "error";
                            kind = "deleniti";
                            width = 734741;
                        }};;
                        xPosition = "saepe";
                        yPosition = "adipisci";
                    }};;
                    overrideCss = "dolore";
                    progressOffset = new VideoOffset() {{
                        offsetPercentage = 269999;
                        offsetSeconds = 308864;
                    }};;
                    redirectUrl = "debitis";
                    renderingId = "similique";
                    renderingIdDimensionValue = new DimensionValue() {{
                        dimensionName = "porro";
                        etag = "blanditiis";
                        id = "b3a2875c-6c1f-4e60-ad07-d2a9c87ae50c";
                        kind = "vitae";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "voluptas";
                    }};;
                    requiredFlashPluginVersion = "laboriosam";
                    requiredFlashVersion = 85105;
                    size = new Size() {{
                        height = 626381;
                        iab = false;
                        id = "veritatis";
                        kind = "temporibus";
                        width = 566873;
                    }};;
                    skipOffset = new VideoOffset() {{
                        offsetPercentage = 87702;
                        offsetSeconds = 216122;
                    }};;
                    skippable = false;
                    sslCompliant = false;
                    sslOverride = false;
                    studioAdvertiserId = "iure";
                    studioCreativeId = "similique";
                    studioTraffickedCreativeId = "molestiae";
                    subaccountId = "itaque";
                    thirdPartyBackupImageImpressionsUrl = "voluptatum";
                    thirdPartyRichMediaImpressionsUrl = "possimus";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyTrackingUrl[]{{
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_MIDPOINT;
                            url = "qui";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.CLICK_TRACKING;
                            url = "amet";
                        }}),
                    }};
                    timerCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "velit";
                            advertiserCustomEventName = "asperiores";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "voluptas";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "esse";
                                customClickThroughUrl = "veniam";
                                landingPageId = "fugit";
                            }};
                            id = "assumenda";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 710181;
                                    iab = false;
                                    id = "molestiae";
                                    kind = "autem";
                                    width = 305833;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 803015;
                                    top = 345637;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Dr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_BLANK;
                            videoReportingId = "id";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "veniam";
                            advertiserCustomEventName = "ea";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "necessitatibus";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "cumque";
                                customClickThroughUrl = "culpa";
                                landingPageId = "pariatur";
                            }};
                            id = "laborum";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 161116;
                                    iab = false;
                                    id = "omnis";
                                    kind = "maxime";
                                    width = 641124;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 480114;
                                    top = 620421;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Ms.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_BLANK;
                            videoReportingId = "eligendi";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "sint";
                            advertiserCustomEventName = "ipsam";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "molestiae";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "ex";
                                customClickThroughUrl = "iure";
                                landingPageId = "dolorem";
                            }};
                            id = "minus";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 321889;
                                    iab = false;
                                    id = "ipsum";
                                    kind = "ipsa";
                                    width = 722545;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 325527;
                                    top = 426308;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mrs.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_BLANK;
                            videoReportingId = "autem";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "dolor";
                            advertiserCustomEventName = "culpa";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "suscipit";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "deleniti";
                                customClickThroughUrl = "exercitationem";
                                landingPageId = "illo";
                            }};
                            id = "fugit";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 663981;
                                    iab = false;
                                    id = "tempore";
                                    kind = "fugit";
                                    width = 342655;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 168917;
                                    top = 122365;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Ms.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_POPUP;
                            videoReportingId = "eos";
                        }}),
                    }};
                    totalFileSize = "saepe";
                    type = CreativeTypeEnum.DISPLAY_REDIRECT;
                    universalAdId = new UniversalAdId() {{
                        registry = UniversalAdIdRegistryEnum.AD_ID_OFFICIAL;
                        value = "consequuntur";
                    }};;
                    version = 302814;
                }};;
                accessToken = "autem";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "quas";
                key = "officia";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "nam";
                uploadProtocol = "minus";
            }};            

            DfareportingCreativesInsertResponse res = sdk.creatives.dfareportingCreativesInsert(req, new DfareportingCreativesInsertSecurity("sit", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creative != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativesList

Retrieves a list of creatives, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativesListRequest;
import org.openapis.openapi.models.operations.DfareportingCreativesListResponse;
import org.openapis.openapi.models.operations.DfareportingCreativesListSecurity;
import org.openapis.openapi.models.operations.DfareportingCreativesListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingCreativesListSortOrderEnum;
import org.openapis.openapi.models.operations.DfareportingCreativesListTypesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativesListRequest req = new DfareportingCreativesListRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "libero";
                active = false;
                advertiserId = "voluptatem";
                alt = AltEnum.PROTO;
                archived = false;
                callback = "nisi";
                campaignId = "quis";
                companionCreativeIds = new String[]{{
                    add("itaque"),
                }};
                creativeFieldIds = new String[]{{
                    add("asperiores"),
                    add("ratione"),
                    add("eos"),
                    add("laborum"),
                }};
                fields = "sint";
                ids = new String[]{{
                    add("pariatur"),
                    add("aspernatur"),
                }};
                key = "aperiam";
                maxResults = 930296L;
                oauthToken = "quo";
                pageToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "accusantium";
                renderingIds = new String[]{{
                    add("animi"),
                    add("aliquam"),
                    add("quasi"),
                    add("repellendus"),
                }};
                searchString = "architecto";
                sizeIds = new String[]{{
                    add("labore"),
                    add("nisi"),
                    add("voluptas"),
                    add("saepe"),
                }};
                sortField = DfareportingCreativesListSortFieldEnum.NAME;
                sortOrder = DfareportingCreativesListSortOrderEnum.ASCENDING;
                studioCreativeId = "ab";
                types = new org.openapis.openapi.models.operations.DfareportingCreativesListTypesEnum[]{{
                    add(DfareportingCreativesListTypesEnum.RICH_MEDIA_IM_EXPAND),
                    add(DfareportingCreativesListTypesEnum.INSTREAM_AUDIO),
                }};
                uploadType = "sapiente";
                uploadProtocol = "a";
            }};            

            DfareportingCreativesListResponse res = sdk.creatives.dfareportingCreativesList(req, new DfareportingCreativesListSecurity("molestiae", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativesPatch

Updates an existing creative. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativesPatchRequest;
import org.openapis.openapi.models.operations.DfareportingCreativesPatchResponse;
import org.openapis.openapi.models.operations.DfareportingCreativesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClickTag;
import org.openapis.openapi.models.shared.Creative;
import org.openapis.openapi.models.shared.CreativeArtworkTypeEnum;
import org.openapis.openapi.models.shared.CreativeAsset;
import org.openapis.openapi.models.shared.CreativeAssetAlignmentEnum;
import org.openapis.openapi.models.shared.CreativeAssetArtworkTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetChildAssetTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum;
import org.openapis.openapi.models.shared.CreativeAssetDisplayTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetDurationTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetId;
import org.openapis.openapi.models.shared.CreativeAssetIdTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetOrientationEnum;
import org.openapis.openapi.models.shared.CreativeAssetPositionLeftUnitEnum;
import org.openapis.openapi.models.shared.CreativeAssetPositionTopUnitEnum;
import org.openapis.openapi.models.shared.CreativeAssetRoleEnum;
import org.openapis.openapi.models.shared.CreativeAssetSelection;
import org.openapis.openapi.models.shared.CreativeAssetStartTimeTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetWindowModeEnum;
import org.openapis.openapi.models.shared.CreativeAuthoringSourceEnum;
import org.openapis.openapi.models.shared.CreativeAuthoringToolEnum;
import org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum;
import org.openapis.openapi.models.shared.CreativeClickThroughUrl;
import org.openapis.openapi.models.shared.CreativeCompatibilityEnum;
import org.openapis.openapi.models.shared.CreativeCustomEvent;
import org.openapis.openapi.models.shared.CreativeCustomEventAdvertiserCustomEventTypeEnum;
import org.openapis.openapi.models.shared.CreativeCustomEventArtworkTypeEnum;
import org.openapis.openapi.models.shared.CreativeCustomEventTargetTypeEnum;
import org.openapis.openapi.models.shared.CreativeFieldAssignment;
import org.openapis.openapi.models.shared.CreativeTypeEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.FsCommand;
import org.openapis.openapi.models.shared.FsCommandPositionOptionEnum;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.ObaIcon;
import org.openapis.openapi.models.shared.OffsetPosition;
import org.openapis.openapi.models.shared.PopupWindowProperties;
import org.openapis.openapi.models.shared.PopupWindowPropertiesPositionTypeEnum;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.TargetWindow;
import org.openapis.openapi.models.shared.TargetWindowTargetWindowOptionEnum;
import org.openapis.openapi.models.shared.ThirdPartyTrackingUrl;
import org.openapis.openapi.models.shared.ThirdPartyTrackingUrlThirdPartyUrlTypeEnum;
import org.openapis.openapi.models.shared.UniversalAdId;
import org.openapis.openapi.models.shared.UniversalAdIdRegistryEnum;
import org.openapis.openapi.models.shared.VideoOffset;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativesPatchRequest req = new DfareportingCreativesPatchRequest("voluptatibus", "temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                creative = new Creative() {{
                    accountId = "nostrum";
                    active = false;
                    adParameters = "tempora";
                    adTagKeys = new String[]{{
                        add("facere"),
                        add("illum"),
                        add("exercitationem"),
                        add("saepe"),
                    }};
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 573674;
                            iab = false;
                            id = "minima";
                            kind = "dolore";
                            width = 196676;
                        }}),
                        add(new Size() {{
                            height = 197525;
                            iab = false;
                            id = "occaecati";
                            kind = "voluptatum";
                            width = 850699;
                        }}),
                        add(new Size() {{
                            height = 671516;
                            iab = false;
                            id = "sapiente";
                            kind = "soluta";
                            width = 262524;
                        }}),
                    }};
                    advertiserId = "dolores";
                    allowScriptAccess = false;
                    archived = false;
                    artworkType = CreativeArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                    authoringSource = CreativeAuthoringSourceEnum.CREATIVE_AUTHORING_SOURCE_STUDIO;
                    authoringTool = CreativeAuthoringToolEnum.SWIFFY;
                    autoAdvanceImages = false;
                    backgroundColor = "iure";
                    backupImageClickThroughUrl = new CreativeClickThroughUrl() {{
                        computedClickThroughUrl = "dolorem";
                        customClickThroughUrl = "neque";
                        landingPageId = "laudantium";
                    }};;
                    backupImageFeatures = new org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum[]{{
                        add(CreativeBackupImageFeaturesEnum.SMIL),
                        add(CreativeBackupImageFeaturesEnum.CSS_TRANSITIONS),
                        add(CreativeBackupImageFeaturesEnum.GEO_LOCATION),
                    }};
                    backupImageReportingLabel = "deleniti";
                    backupImageTargetWindow = new TargetWindow() {{
                        customHtml = "aut";
                        targetWindowOption = TargetWindowTargetWindowOptionEnum.NEW_WINDOW;
                    }};;
                    clickTags = new org.openapis.openapi.models.shared.ClickTag[]{{
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "necessitatibus";
                                customClickThroughUrl = "culpa";
                                landingPageId = "quis";
                            }};
                            eventName = "asperiores";
                            name = "Roderick Cartwright";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "qui";
                                customClickThroughUrl = "tempora";
                                landingPageId = "modi";
                            }};
                            eventName = "sapiente";
                            name = "Tyler Bernhard I";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "iste";
                                customClickThroughUrl = "nulla";
                                landingPageId = "dolorum";
                            }};
                            eventName = "maxime";
                            name = "Lee Lehner";
                        }}),
                    }};
                    commercialId = "doloremque";
                    companionCreatives = new String[]{{
                        add("nobis"),
                        add("laboriosam"),
                        add("esse"),
                        add("et"),
                    }};
                    compatibility = new org.openapis.openapi.models.shared.CreativeCompatibilityEnum[]{{
                        add(CreativeCompatibilityEnum.IN_STREAM_VIDEO),
                        add(CreativeCompatibilityEnum.APP),
                        add(CreativeCompatibilityEnum.IN_STREAM_AUDIO),
                        add(CreativeCompatibilityEnum.DISPLAY),
                    }};
                    convertFlashToHtml5 = false;
                    counterCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "amet";
                            advertiserCustomEventName = "culpa";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "quasi";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "provident";
                                customClickThroughUrl = "consequuntur";
                                landingPageId = "aut";
                            }};
                            id = "maxime";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 591977;
                                    iab = false;
                                    id = "aperiam";
                                    kind = "repellendus";
                                    width = 66408;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 741454;
                                    top = 297519;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_BLANK;
                            videoReportingId = "repellat";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "dolores";
                            advertiserCustomEventName = "harum";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "totam";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "maxime";
                                customClickThroughUrl = "totam";
                                landingPageId = "id";
                            }};
                            id = "neque";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 173265;
                                    iab = false;
                                    id = "vel";
                                    kind = "ipsum";
                                    width = 580881;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 867695;
                                    top = 628095;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_SELF;
                            videoReportingId = "nobis";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "nisi";
                            advertiserCustomEventName = "natus";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "quia";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "atque";
                                customClickThroughUrl = "atque";
                                landingPageId = "illo";
                            }};
                            id = "dolorum";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 590800;
                                    iab = false;
                                    id = "incidunt";
                                    kind = "maiores";
                                    width = 406914;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 267247;
                                    top = 192649;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Ms.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "mollitia";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "quas";
                            advertiserCustomEventName = "hic";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "id";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "rem";
                                customClickThroughUrl = "quod";
                                landingPageId = "commodi";
                            }};
                            id = "natus";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 105549;
                                    iab = false;
                                    id = "placeat";
                                    kind = "molestiae";
                                    width = 221409;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 155108;
                                    top = 858434;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Dr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_PARENT;
                            videoReportingId = "culpa";
                        }}),
                    }};
                    creativeAssetSelection = new CreativeAssetSelection() {{
                        defaultAssetId = "tenetur";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                assetId = "magnam";
                                name = "Beth Nitzsche";
                                targetingTemplateId = "vero";
                            }}),
                            add(new Rule() {{
                                assetId = "quas";
                                name = "Benny Ryan DDS";
                                targetingTemplateId = "quas";
                            }}),
                            add(new Rule() {{
                                assetId = "culpa";
                                name = "Audrey Carter";
                                targetingTemplateId = "iusto";
                            }}),
                        }};
                    }};;
                    creativeAssets = new org.openapis.openapi.models.shared.CreativeAsset[]{{
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 500812;
                                    iab = false;
                                    id = "dolore";
                                    kind = "rem";
                                    width = 591417;
                                }}),
                                add(new Size() {{
                                    height = 213282;
                                    iab = false;
                                    id = "alias";
                                    kind = "dignissimos";
                                    width = 326420;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Karen Thompson";
                                type = CreativeAssetIdTypeEnum.VIDEO;
                            }};
                            audioBitRate = 907420;
                            audioSampleRate = 757736;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "ducimus";
                                advertiserCustomEventName = "dolorem";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "possimus";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "neque";
                                    customClickThroughUrl = "inventore";
                                    landingPageId = "omnis";
                                }};
                                id = "quaerat";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 198041;
                                        iab = false;
                                        id = "omnis";
                                        kind = "corrupti";
                                        width = 762787;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 473689;
                                        top = 540826;
                                    }};
                                    positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                    showAddressBar = false;
                                    showMenuBar = false;
                                    showScrollBar = false;
                                    showStatusBar = false;
                                    showToolBar = false;
                                    title = "Miss";
                                }};
                                targetType = CreativeCustomEventTargetTypeEnum.TARGET_SELF;
                                videoReportingId = "quia";
                            }};
                            bitRate = 220853;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_IMAGE;
                            collapsedSize = new Size() {{
                                height = 508854;
                                iab = false;
                                id = "accusamus";
                                kind = "fugiat";
                                width = 217960;
                            }};
                            companionCreativeIds = new String[]{{
                                add("amet"),
                                add("deserunt"),
                                add("nobis"),
                                add("quam"),
                            }};
                            customStartTimeValue = 812057;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.CSS_TRANSFORMS),
                                add(CreativeAssetDetectedFeaturesEnum.SESSION_STORAGE),
                                add(CreativeAssetDetectedFeaturesEnum.CANVAS_TEXT),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_VPAID_LINEAR;
                            duration = 631770;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_NONE;
                            expandedDimension = new Size() {{
                                height = 398432;
                                iab = false;
                                id = "aliquam";
                                kind = "error";
                                width = 657824;
                            }};
                            fileSize = "ducimus";
                            flashVersion = 18989;
                            frameRate = 7736.52;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "reiciendis";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "quibusdam";
                                etag = "veniam";
                                id = "d6989b72-0645-4107-bd19-ea83d492ed14";
                                kind = "tempore";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "fuga";
                            }};
                            mediaDuration = 1411.28;
                            mimeType = "minus";
                            offset = new OffsetPosition() {{
                                left = 123989;
                                top = 572892;
                            }};
                            orientation = CreativeAssetOrientationEnum.PORTRAIT;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 301452;
                                top = 330353;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL;
                            progressiveServingUrl = "officiis";
                            pushdown = false;
                            pushdownDuration = 6009.33;
                            role = CreativeAssetRoleEnum.ADDITIONAL_FLASH;
                            size = new Size() {{
                                height = 315990;
                                iab = false;
                                id = "facere";
                                kind = "cumque";
                                width = 765900;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "praesentium";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.OPAQUE;
                            zIndex = 912076;
                            zipFilename = "est";
                            zipFilesize = "magnam";
                        }}),
                    }};
                    creativeFieldAssignments = new org.openapis.openapi.models.shared.CreativeFieldAssignment[]{{
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "consequatur";
                            creativeFieldValueId = "dicta";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "eligendi";
                            creativeFieldValueId = "iure";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "cumque";
                            creativeFieldValueId = "quaerat";
                        }}),
                    }};
                    customKeyValues = new String[]{{
                        add("culpa"),
                    }};
                    dynamicAssetSelection = false;
                    exitCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "explicabo";
                            advertiserCustomEventName = "nulla";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "animi";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "totam";
                                customClickThroughUrl = "incidunt";
                                landingPageId = "similique";
                            }};
                            id = "nobis";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 636839;
                                    iab = false;
                                    id = "ratione";
                                    kind = "illum";
                                    width = 152238;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 229336;
                                    top = 15355;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Dr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_POPUP;
                            videoReportingId = "dignissimos";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "dolor";
                            advertiserCustomEventName = "totam";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "vitae";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "beatae";
                                customClickThroughUrl = "vitae";
                                landingPageId = "veniam";
                            }};
                            id = "non";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 516231;
                                    iab = false;
                                    id = "consequuntur";
                                    kind = "rerum";
                                    width = 858317;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 499270;
                                    top = 908916;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mrs.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "veniam";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "voluptatem";
                            advertiserCustomEventName = "quam";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "aspernatur";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "porro";
                                customClickThroughUrl = "ad";
                                landingPageId = "deleniti";
                            }};
                            id = "doloribus";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 296712;
                                    iab = false;
                                    id = "nulla";
                                    kind = "iusto";
                                    width = 236455;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 592813;
                                    top = 375962;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Ms.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "cumque";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "fugit";
                            advertiserCustomEventName = "accusantium";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "doloremque";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "dicta";
                                customClickThroughUrl = "veritatis";
                                landingPageId = "similique";
                            }};
                            id = "omnis";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 414547;
                                    iab = false;
                                    id = "dicta";
                                    kind = "illum";
                                    width = 133452;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 284058;
                                    top = 646854;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Dr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_PARENT;
                            videoReportingId = "libero";
                        }}),
                    }};
                    fsCommand = new FsCommand() {{
                        left = 545201;
                        positionOption = FsCommandPositionOptionEnum.DISTANCE_FROM_TOP_LEFT_CORNER;
                        top = 316800;
                        windowHeight = 244989;
                        windowWidth = 152542;
                    }};;
                    htmlCode = "assumenda";
                    htmlCodeLocked = false;
                    id = "atque";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "perspiciatis";
                        etag = "odit";
                        id = "cf7812cb-512c-4878-a40b-f548f88f8f1b";
                        kind = "a";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "tempore";
                    }};;
                    kind = "quod";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "totam";
                    }};;
                    latestTraffickedCreativeId = "officiis";
                    mediaDescription = "dicta";
                    mediaDuration = 9822.77;
                    name = "Dorothy Kemmer";
                    obaIcon = new ObaIcon() {{
                        iconClickThroughUrl = "pariatur";
                        iconClickTrackingUrl = "quas";
                        iconViewTrackingUrl = "sequi";
                        program = "illo";
                        resourceUrl = "temporibus";
                        size = new Size() {{
                            height = 40346;
                            iab = false;
                            id = "aperiam";
                            kind = "laudantium";
                            width = 69326;
                        }};;
                        xPosition = "voluptatem";
                        yPosition = "provident";
                    }};;
                    overrideCss = "ipsa";
                    progressOffset = new VideoOffset() {{
                        offsetPercentage = 965207;
                        offsetSeconds = 376341;
                    }};;
                    redirectUrl = "nihil";
                    renderingId = "quae";
                    renderingIdDimensionValue = new DimensionValue() {{
                        dimensionName = "voluptas";
                        etag = "laboriosam";
                        id = "73f3a681-c576-48dc-a742-409a215e0860";
                        kind = "vitae";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "molestias";
                    }};;
                    requiredFlashPluginVersion = "cupiditate";
                    requiredFlashVersion = 641594;
                    size = new Size() {{
                        height = 329621;
                        iab = false;
                        id = "doloribus";
                        kind = "suscipit";
                        width = 195138;
                    }};;
                    skipOffset = new VideoOffset() {{
                        offsetPercentage = 893422;
                        offsetSeconds = 207202;
                    }};;
                    skippable = false;
                    sslCompliant = false;
                    sslOverride = false;
                    studioAdvertiserId = "mollitia";
                    studioCreativeId = "tenetur";
                    studioTraffickedCreativeId = "non";
                    subaccountId = "pariatur";
                    thirdPartyBackupImageImpressionsUrl = "vero";
                    thirdPartyRichMediaImpressionsUrl = "natus";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyTrackingUrl[]{{
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.RICH_MEDIA_RM_IMPRESSION;
                            url = "officia";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_FIRST_QUARTILE;
                            url = "velit";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.RICH_MEDIA_BACKUP_IMPRESSION;
                            url = "placeat";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.RICH_MEDIA_BACKUP_IMPRESSION;
                            url = "vel";
                        }}),
                    }};
                    timerCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "incidunt";
                            advertiserCustomEventName = "praesentium";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "itaque";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "dolorum";
                                customClickThroughUrl = "esse";
                                landingPageId = "id";
                            }};
                            id = "natus";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 559765;
                                    iab = false;
                                    id = "saepe";
                                    kind = "modi";
                                    width = 827813;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 978416;
                                    top = 204517;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Dr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "nostrum";
                        }}),
                    }};
                    totalFileSize = "libero";
                    type = CreativeTypeEnum.RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL;
                    universalAdId = new UniversalAdId() {{
                        registry = UniversalAdIdRegistryEnum.CLEARCAST;
                        value = "veniam";
                    }};;
                    version = 342241;
                }};;
                accessToken = "facere";
                alt = AltEnum.JSON;
                callback = "vitae";
                fields = "ipsum";
                key = "recusandae";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "error";
                uploadProtocol = "numquam";
            }};            

            DfareportingCreativesPatchResponse res = sdk.creatives.dfareportingCreativesPatch(req, new DfareportingCreativesPatchSecurity("praesentium", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creative != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativesUpdate

Updates an existing creative.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativesUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingCreativesUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingCreativesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClickTag;
import org.openapis.openapi.models.shared.Creative;
import org.openapis.openapi.models.shared.CreativeArtworkTypeEnum;
import org.openapis.openapi.models.shared.CreativeAsset;
import org.openapis.openapi.models.shared.CreativeAssetAlignmentEnum;
import org.openapis.openapi.models.shared.CreativeAssetArtworkTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetChildAssetTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum;
import org.openapis.openapi.models.shared.CreativeAssetDisplayTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetDurationTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetId;
import org.openapis.openapi.models.shared.CreativeAssetIdTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetOrientationEnum;
import org.openapis.openapi.models.shared.CreativeAssetPositionLeftUnitEnum;
import org.openapis.openapi.models.shared.CreativeAssetPositionTopUnitEnum;
import org.openapis.openapi.models.shared.CreativeAssetRoleEnum;
import org.openapis.openapi.models.shared.CreativeAssetSelection;
import org.openapis.openapi.models.shared.CreativeAssetStartTimeTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetWindowModeEnum;
import org.openapis.openapi.models.shared.CreativeAuthoringSourceEnum;
import org.openapis.openapi.models.shared.CreativeAuthoringToolEnum;
import org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum;
import org.openapis.openapi.models.shared.CreativeClickThroughUrl;
import org.openapis.openapi.models.shared.CreativeCompatibilityEnum;
import org.openapis.openapi.models.shared.CreativeCustomEvent;
import org.openapis.openapi.models.shared.CreativeCustomEventAdvertiserCustomEventTypeEnum;
import org.openapis.openapi.models.shared.CreativeCustomEventArtworkTypeEnum;
import org.openapis.openapi.models.shared.CreativeCustomEventTargetTypeEnum;
import org.openapis.openapi.models.shared.CreativeFieldAssignment;
import org.openapis.openapi.models.shared.CreativeTypeEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.FsCommand;
import org.openapis.openapi.models.shared.FsCommandPositionOptionEnum;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.ObaIcon;
import org.openapis.openapi.models.shared.OffsetPosition;
import org.openapis.openapi.models.shared.PopupWindowProperties;
import org.openapis.openapi.models.shared.PopupWindowPropertiesPositionTypeEnum;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.TargetWindow;
import org.openapis.openapi.models.shared.TargetWindowTargetWindowOptionEnum;
import org.openapis.openapi.models.shared.ThirdPartyTrackingUrl;
import org.openapis.openapi.models.shared.ThirdPartyTrackingUrlThirdPartyUrlTypeEnum;
import org.openapis.openapi.models.shared.UniversalAdId;
import org.openapis.openapi.models.shared.UniversalAdIdRegistryEnum;
import org.openapis.openapi.models.shared.VideoOffset;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativesUpdateRequest req = new DfareportingCreativesUpdateRequest("consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                creative = new Creative() {{
                    accountId = "ipsa";
                    active = false;
                    adParameters = "occaecati";
                    adTagKeys = new String[]{{
                        add("iure"),
                    }};
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 816900;
                            iab = false;
                            id = "ratione";
                            kind = "quis";
                            width = 266643;
                        }}),
                        add(new Size() {{
                            height = 780157;
                            iab = false;
                            id = "aut";
                            kind = "cupiditate";
                            width = 150639;
                        }}),
                        add(new Size() {{
                            height = 687643;
                            iab = false;
                            id = "vero";
                            kind = "nihil";
                            width = 242061;
                        }}),
                    }};
                    advertiserId = "incidunt";
                    allowScriptAccess = false;
                    archived = false;
                    artworkType = CreativeArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                    authoringSource = CreativeAuthoringSourceEnum.CREATIVE_AUTHORING_SOURCE_DCM;
                    authoringTool = CreativeAuthoringToolEnum.NINJA;
                    autoAdvanceImages = false;
                    backgroundColor = "numquam";
                    backupImageClickThroughUrl = new CreativeClickThroughUrl() {{
                        computedClickThroughUrl = "numquam";
                        customClickThroughUrl = "excepturi";
                        landingPageId = "pariatur";
                    }};;
                    backupImageFeatures = new org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum[]{{
                        add(CreativeBackupImageFeaturesEnum.INPUT_ATTR_AUTOCOMPLETE),
                        add(CreativeBackupImageFeaturesEnum.WEBGL),
                        add(CreativeBackupImageFeaturesEnum.CSS_TRANSFORMS3_D),
                    }};
                    backupImageReportingLabel = "expedita";
                    backupImageTargetWindow = new TargetWindow() {{
                        customHtml = "quidem";
                        targetWindowOption = TargetWindowTargetWindowOptionEnum.NEW_WINDOW;
                    }};;
                    clickTags = new org.openapis.openapi.models.shared.ClickTag[]{{
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "asperiores";
                                customClickThroughUrl = "debitis";
                                landingPageId = "nostrum";
                            }};
                            eventName = "quibusdam";
                            name = "Peter Casper";
                        }}),
                    }};
                    commercialId = "sapiente";
                    companionCreatives = new String[]{{
                        add("dignissimos"),
                        add("magnam"),
                        add("excepturi"),
                        add("placeat"),
                    }};
                    compatibility = new org.openapis.openapi.models.shared.CreativeCompatibilityEnum[]{{
                        add(CreativeCompatibilityEnum.IN_STREAM_AUDIO),
                        add(CreativeCompatibilityEnum.DISPLAY_INTERSTITIAL),
                        add(CreativeCompatibilityEnum.DISPLAY_INTERSTITIAL),
                    }};
                    convertFlashToHtml5 = false;
                    counterCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "sed";
                            advertiserCustomEventName = "molestiae";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "ex";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "saepe";
                                customClickThroughUrl = "consequuntur";
                                landingPageId = "quod";
                            }};
                            id = "occaecati";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 934608;
                                    iab = false;
                                    id = "eum";
                                    kind = "temporibus";
                                    width = 63401;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 41810;
                                    top = 893111;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Dr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_PARENT;
                            videoReportingId = "neque";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "est";
                            advertiserCustomEventName = "repellendus";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "quisquam";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "cum";
                                customClickThroughUrl = "doloremque";
                                landingPageId = "adipisci";
                            }};
                            id = "quasi";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 37455;
                                    iab = false;
                                    id = "molestias";
                                    kind = "facere";
                                    width = 582412;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 787042;
                                    top = 201229;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Ms.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "nihil";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "velit";
                            advertiserCustomEventName = "aut";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "odit";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "error";
                                customClickThroughUrl = "incidunt";
                                landingPageId = "asperiores";
                            }};
                            id = "eos";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 650392;
                                    iab = false;
                                    id = "distinctio";
                                    kind = "dicta";
                                    width = 937687;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 821441;
                                    top = 364287;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Ms.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_BLANK;
                            videoReportingId = "voluptates";
                        }}),
                    }};
                    creativeAssetSelection = new CreativeAssetSelection() {{
                        defaultAssetId = "unde";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                assetId = "amet";
                                name = "Tonya DuBuque MD";
                                targetingTemplateId = "tempora";
                            }}),
                            add(new Rule() {{
                                assetId = "eum";
                                name = "Julie Gutmann";
                                targetingTemplateId = "blanditiis";
                            }}),
                            add(new Rule() {{
                                assetId = "natus";
                                name = "Dexter Altenwerth";
                                targetingTemplateId = "error";
                            }}),
                            add(new Rule() {{
                                assetId = "dicta";
                                name = "Geneva Gerhold";
                                targetingTemplateId = "amet";
                            }}),
                        }};
                    }};;
                    creativeAssets = new org.openapis.openapi.models.shared.CreativeAsset[]{{
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 267981;
                                    iab = false;
                                    id = "impedit";
                                    kind = "ipsa";
                                    width = 175577;
                                }}),
                                add(new Size() {{
                                    height = 353522;
                                    iab = false;
                                    id = "sed";
                                    kind = "a";
                                    width = 905046;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Bridget Greenholt";
                                type = CreativeAssetIdTypeEnum.HTML;
                            }};
                            audioBitRate = 735012;
                            audioSampleRate = 488405;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "reprehenderit";
                                advertiserCustomEventName = "quas";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                                artworkLabel = "distinctio";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "nisi";
                                    customClickThroughUrl = "officiis";
                                    landingPageId = "quasi";
                                }};
                                id = "fugiat";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 135597;
                                        iab = false;
                                        id = "impedit";
                                        kind = "voluptatibus";
                                        width = 320931;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 51717;
                                        top = 136851;
                                    }};
                                    positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                    showAddressBar = false;
                                    showMenuBar = false;
                                    showScrollBar = false;
                                    showStatusBar = false;
                                    showToolBar = false;
                                    title = "Miss";
                                }};
                                targetType = CreativeCustomEventTargetTypeEnum.TARGET_POPUP;
                                videoReportingId = "rerum";
                            }};
                            bitRate = 129259;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_DATA;
                            collapsedSize = new Size() {{
                                height = 722265;
                                iab = false;
                                id = "placeat";
                                kind = "aliquam";
                                width = 399527;
                            }};
                            companionCreativeIds = new String[]{{
                                add("ipsam"),
                            }};
                            customStartTimeValue = 852623;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.SVG_HREF),
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_ATTR_AUTOCOMPLETE),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_EXPANDING;
                            duration = 871888;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_NONE;
                            expandedDimension = new Size() {{
                                height = 1914;
                                iab = false;
                                id = "eos";
                                kind = "quos";
                                width = 789760;
                            }};
                            fileSize = "dolor";
                            flashVersion = 881240;
                            frameRate = 5736.52;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "enim";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "veritatis";
                                etag = "mollitia";
                                id = "1e30fda9-6648-49d7-b786-73e13a12a6b9";
                                kind = "excepturi";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "eius";
                            }};
                            mediaDuration = 5973.6;
                            mimeType = "dolore";
                            offset = new OffsetPosition() {{
                                left = 362174;
                                top = 617043;
                            }};
                            orientation = CreativeAssetOrientationEnum.LANDSCAPE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 272958;
                                top = 548599;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PERCENT;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            progressiveServingUrl = "veniam";
                            pushdown = false;
                            pushdownDuration = 7685.87;
                            role = CreativeAssetRoleEnum.TRANSCODED_VIDEO;
                            size = new Size() {{
                                height = 285256;
                                iab = false;
                                id = "amet";
                                kind = "blanditiis";
                                width = 198060;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "tempore";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.WINDOW;
                            zIndex = 385727;
                            zipFilename = "harum";
                            zipFilesize = "consectetur";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 858421;
                                    iab = false;
                                    id = "a";
                                    kind = "ex";
                                    width = 295058;
                                }}),
                                add(new Size() {{
                                    height = 115870;
                                    iab = false;
                                    id = "minima";
                                    kind = "facilis";
                                    width = 22376;
                                }}),
                                add(new Size() {{
                                    height = 279972;
                                    iab = false;
                                    id = "magnam";
                                    kind = "molestias";
                                    width = 941710;
                                }}),
                                add(new Size() {{
                                    height = 623693;
                                    iab = false;
                                    id = "repellendus";
                                    kind = "delectus";
                                    width = 118986;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Gretchen Waters";
                                type = CreativeAssetIdTypeEnum.AUDIO;
                            }};
                            audioBitRate = 449331;
                            audioSampleRate = 533988;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "tempore";
                                advertiserCustomEventName = "reiciendis";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "sit";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "molestias";
                                    customClickThroughUrl = "quia";
                                    landingPageId = "ipsam";
                                }};
                                id = "rem";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 564067;
                                        iab = false;
                                        id = "eius";
                                        kind = "necessitatibus";
                                        width = 633594;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 449365;
                                        top = 398606;
                                    }};
                                    positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                    showAddressBar = false;
                                    showMenuBar = false;
                                    showScrollBar = false;
                                    showStatusBar = false;
                                    showToolBar = false;
                                    title = "Dr.";
                                }};
                                targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                                videoReportingId = "impedit";
                            }};
                            bitRate = 445732;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_FLASH;
                            collapsedSize = new Size() {{
                                height = 454934;
                                iab = false;
                                id = "provident";
                                kind = "quis";
                                width = 713741;
                            }};
                            companionCreativeIds = new String[]{{
                                add("laudantium"),
                                add("exercitationem"),
                            }};
                            customStartTimeValue = 113947;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_ATTR_MIN),
                                add(CreativeAssetDetectedFeaturesEnum.WEB_WORKERS),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_FLASH_IN_FLASH;
                            duration = 845164;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_AUTO;
                            expandedDimension = new Size() {{
                                height = 284019;
                                iab = false;
                                id = "cupiditate";
                                kind = "debitis";
                                width = 324872;
                            }};
                            fileSize = "vel";
                            flashVersion = 235556;
                            frameRate = 3450.57;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "tempore";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "ipsum";
                                etag = "dolorem";
                                id = "bc0f970c-42fc-49f4-8442-25e75b796065";
                                kind = "cumque";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "earum";
                            }};
                            mediaDuration = 9387.62;
                            mimeType = "culpa";
                            offset = new OffsetPosition() {{
                                left = 425484;
                                top = 957139;
                            }};
                            orientation = CreativeAssetOrientationEnum.PORTRAIT;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 190444;
                                top = 730283;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PERCENT;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL;
                            progressiveServingUrl = "fuga";
                            pushdown = false;
                            pushdownDuration = 1056.16;
                            role = CreativeAssetRoleEnum.ALTERNATE_VIDEO;
                            size = new Size() {{
                                height = 536202;
                                iab = false;
                                id = "eligendi";
                                kind = "unde";
                                width = 333150;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "accusamus";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.OPAQUE;
                            zIndex = 131705;
                            zipFilename = "corporis";
                            zipFilesize = "incidunt";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 468714;
                                    iab = false;
                                    id = "adipisci";
                                    kind = "provident";
                                    width = 967476;
                                }}),
                                add(new Size() {{
                                    height = 295284;
                                    iab = false;
                                    id = "voluptatibus";
                                    kind = "eveniet";
                                    width = 485506;
                                }}),
                                add(new Size() {{
                                    height = 451847;
                                    iab = false;
                                    id = "explicabo";
                                    kind = "architecto";
                                    width = 18584;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_LEFT;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Hector Hegmann";
                                type = CreativeAssetIdTypeEnum.HTML_IMAGE;
                            }};
                            audioBitRate = 583071;
                            audioSampleRate = 569763;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "quod";
                                advertiserCustomEventName = "iure";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                                artworkLabel = "odit";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "fugit";
                                    customClickThroughUrl = "nam";
                                    landingPageId = "optio";
                                }};
                                id = "accusantium";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 938773;
                                        iab = false;
                                        id = "excepturi";
                                        kind = "numquam";
                                        width = 28033;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 528646;
                                        top = 496440;
                                    }};
                                    positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                    showAddressBar = false;
                                    showMenuBar = false;
                                    showScrollBar = false;
                                    showStatusBar = false;
                                    showToolBar = false;
                                    title = "Ms.";
                                }};
                                targetType = CreativeCustomEventTargetTypeEnum.TARGET_POPUP;
                                videoReportingId = "culpa";
                            }};
                            bitRate = 642858;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_DATA;
                            collapsedSize = new Size() {{
                                height = 42929;
                                iab = false;
                                id = "magnam";
                                kind = "quia";
                                width = 844566;
                            }};
                            companionCreativeIds = new String[]{{
                                add("voluptate"),
                                add("placeat"),
                                add("est"),
                                add("est"),
                            }};
                            customStartTimeValue = 807944;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_TYPE_DATETIME_LOCAL),
                                add(CreativeAssetDetectedFeaturesEnum.CSS_TRANSFORMS3_D),
                                add(CreativeAssetDetectedFeaturesEnum.POST_MESSAGE),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_PEEL_DOWN;
                            duration = 636070;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_AUTO;
                            expandedDimension = new Size() {{
                                height = 800781;
                                iab = false;
                                id = "a";
                                kind = "eveniet";
                                width = 573938;
                            }};
                            fileSize = "saepe";
                            flashVersion = 73445;
                            frameRate = 3278.88;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "nulla";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "reiciendis";
                                etag = "molestias";
                                id = "03907f37-8319-483d-82e5-4a85466597c5";
                                kind = "consequatur";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "dolorem";
                            }};
                            mediaDuration = 1988.12;
                            mimeType = "maxime";
                            offset = new OffsetPosition() {{
                                left = 79246;
                                top = 264670;
                            }};
                            orientation = CreativeAssetOrientationEnum.PORTRAIT;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 112399;
                                top = 845404;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL;
                            progressiveServingUrl = "dolorum";
                            pushdown = false;
                            pushdownDuration = 6587.26;
                            role = CreativeAssetRoleEnum.OTHER;
                            size = new Size() {{
                                height = 420223;
                                iab = false;
                                id = "illum";
                                kind = "at";
                                width = 940765;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "laborum";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.TRANSPARENT;
                            zIndex = 860224;
                            zipFilename = "aliquid";
                            zipFilesize = "eius";
                        }}),
                    }};
                    creativeFieldAssignments = new org.openapis.openapi.models.shared.CreativeFieldAssignment[]{{
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "reprehenderit";
                            creativeFieldValueId = "quo";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "enim";
                            creativeFieldValueId = "reiciendis";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "impedit";
                            creativeFieldValueId = "aspernatur";
                        }}),
                    }};
                    customKeyValues = new String[]{{
                        add("voluptatum"),
                        add("ex"),
                        add("aspernatur"),
                    }};
                    dynamicAssetSelection = false;
                    exitCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "voluptatem";
                            advertiserCustomEventName = "aut";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "saepe";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "autem";
                                customClickThroughUrl = "perspiciatis";
                                landingPageId = "saepe";
                            }};
                            id = "illo";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 45536;
                                    iab = false;
                                    id = "quae";
                                    kind = "veritatis";
                                    width = 314547;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 499883;
                                    top = 380884;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_PARENT;
                            videoReportingId = "quibusdam";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "fuga";
                            advertiserCustomEventName = "nihil";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "repellat";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "accusamus";
                                customClickThroughUrl = "illum";
                                landingPageId = "blanditiis";
                            }};
                            id = "tempora";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 627058;
                                    iab = false;
                                    id = "dolor";
                                    kind = "enim";
                                    width = 677473;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 303356;
                                    top = 109308;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mrs.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_SELF;
                            videoReportingId = "officiis";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "inventore";
                            advertiserCustomEventName = "officia";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "sequi";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "fuga";
                                customClickThroughUrl = "quisquam";
                                landingPageId = "qui";
                            }};
                            id = "suscipit";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 637751;
                                    iab = false;
                                    id = "saepe";
                                    kind = "ipsum";
                                    width = 189530;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 713645;
                                    top = 930547;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Ms.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_SELF;
                            videoReportingId = "dicta";
                        }}),
                    }};
                    fsCommand = new FsCommand() {{
                        left = 661835;
                        positionOption = FsCommandPositionOptionEnum.DISTANCE_FROM_TOP_LEFT_CORNER;
                        top = 999315;
                        windowHeight = 267918;
                        windowWidth = 401466;
                    }};;
                    htmlCode = "nobis";
                    htmlCodeLocked = false;
                    id = "placeat";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "mollitia";
                        etag = "architecto";
                        id = "106fe965-b711-4d08-8f88-ec9f7b99a550";
                        kind = "similique";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "quis";
                    }};;
                    kind = "commodi";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "eveniet";
                    }};;
                    latestTraffickedCreativeId = "possimus";
                    mediaDescription = "dolor";
                    mediaDuration = 1892.52;
                    name = "Miss Latoya Robel";
                    obaIcon = new ObaIcon() {{
                        iconClickThroughUrl = "laudantium";
                        iconClickTrackingUrl = "est";
                        iconViewTrackingUrl = "fuga";
                        program = "autem";
                        resourceUrl = "quis";
                        size = new Size() {{
                            height = 265507;
                            iab = false;
                            id = "consectetur";
                            kind = "qui";
                            width = 642434;
                        }};;
                        xPosition = "cupiditate";
                        yPosition = "rem";
                    }};;
                    overrideCss = "ea";
                    progressOffset = new VideoOffset() {{
                        offsetPercentage = 891770;
                        offsetSeconds = 743023;
                    }};;
                    redirectUrl = "odio";
                    renderingId = "eveniet";
                    renderingIdDimensionValue = new DimensionValue() {{
                        dimensionName = "beatae";
                        etag = "dolore";
                        id = "ca564089-1500-4970-99a4-8f88ece7bf90";
                        kind = "non";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "consequatur";
                    }};;
                    requiredFlashPluginVersion = "architecto";
                    requiredFlashVersion = 119634;
                    size = new Size() {{
                        height = 25476;
                        iab = false;
                        id = "ad";
                        kind = "temporibus";
                        width = 196728;
                    }};;
                    skipOffset = new VideoOffset() {{
                        offsetPercentage = 512220;
                        offsetSeconds = 570004;
                    }};;
                    skippable = false;
                    sslCompliant = false;
                    sslOverride = false;
                    studioAdvertiserId = "alias";
                    studioCreativeId = "deleniti";
                    studioTraffickedCreativeId = "quasi";
                    subaccountId = "laboriosam";
                    thirdPartyBackupImageImpressionsUrl = "aspernatur";
                    thirdPartyRichMediaImpressionsUrl = "quod";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyTrackingUrl[]{{
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.SURVEY;
                            url = "recusandae";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.SURVEY;
                            url = "nisi";
                        }}),
                    }};
                    timerCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "culpa";
                            advertiserCustomEventName = "doloremque";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "vel";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "ducimus";
                                customClickThroughUrl = "quidem";
                                landingPageId = "in";
                            }};
                            id = "at";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 4474;
                                    iab = false;
                                    id = "consectetur";
                                    kind = "mollitia";
                                    width = 107789;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 257393;
                                    top = 508520;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Dr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_SELF;
                            videoReportingId = "at";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "repudiandae";
                            advertiserCustomEventName = "ipsum";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "tenetur";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "ex";
                                customClickThroughUrl = "cupiditate";
                                landingPageId = "fugiat";
                            }};
                            id = "atque";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 106800;
                                    iab = false;
                                    id = "aut";
                                    kind = "commodi";
                                    width = 103068;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 543317;
                                    top = 836395;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Ms.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_POPUP;
                            videoReportingId = "sunt";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "ad";
                            advertiserCustomEventName = "quia";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "iste";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "minima";
                                customClickThroughUrl = "et";
                                landingPageId = "sit";
                            }};
                            id = "quibusdam";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 636019;
                                    iab = false;
                                    id = "voluptatum";
                                    kind = "voluptatem";
                                    width = 228977;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 110280;
                                    top = 130672;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Ms.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_BLANK;
                            videoReportingId = "nobis";
                        }}),
                    }};
                    totalFileSize = "optio";
                    type = CreativeTypeEnum.RICH_MEDIA_IM_EXPAND;
                    universalAdId = new UniversalAdId() {{
                        registry = UniversalAdIdRegistryEnum.OTHER;
                        value = "porro";
                    }};;
                    version = 148641;
                }};;
                accessToken = "laborum";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "odit";
                key = "distinctio";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "odio";
                uploadProtocol = "repudiandae";
            }};            

            DfareportingCreativesUpdateResponse res = sdk.creatives.dfareportingCreativesUpdate(req, new DfareportingCreativesUpdateSecurity("accusamus", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creative != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
