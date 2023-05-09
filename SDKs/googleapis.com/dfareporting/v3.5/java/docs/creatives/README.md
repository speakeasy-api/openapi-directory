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

            DfareportingCreativesGetRequest req = new DfareportingCreativesGetRequest("architecto", "est") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "quaerat";
                fields = "suscipit";
                key = "rerum";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "repudiandae";
                uploadProtocol = "unde";
            }};            

            DfareportingCreativesGetResponse res = sdk.creatives.dfareportingCreativesGet(req, new DfareportingCreativesGetSecurity("excepturi", "voluptatibus") {{
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

            DfareportingCreativesInsertRequest req = new DfareportingCreativesInsertRequest("facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                creative = new Creative() {{
                    accountId = "officiis";
                    active = false;
                    adParameters = "nisi";
                    adTagKeys = new String[]{{
                        add("necessitatibus"),
                        add("alias"),
                    }};
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 285336;
                            iab = false;
                            id = "hic";
                            kind = "facere";
                            width = 950465;
                        }}),
                        add(new Size() {{
                            height = 901842;
                            iab = false;
                            id = "assumenda";
                            kind = "exercitationem";
                            width = 347919;
                        }}),
                        add(new Size() {{
                            height = 293991;
                            iab = false;
                            id = "sit";
                            kind = "recusandae";
                            width = 953806;
                        }}),
                    }};
                    advertiserId = "exercitationem";
                    allowScriptAccess = false;
                    archived = false;
                    artworkType = CreativeArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                    authoringSource = CreativeAuthoringSourceEnum.CREATIVE_AUTHORING_SOURCE_GWD;
                    authoringTool = CreativeAuthoringToolEnum.NINJA;
                    autoAdvanceImages = false;
                    backgroundColor = "ut";
                    backupImageClickThroughUrl = new CreativeClickThroughUrl() {{
                        computedClickThroughUrl = "est";
                        customClickThroughUrl = "quasi";
                        landingPageId = "rerum";
                    }};;
                    backupImageFeatures = new org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum[]{{
                        add(CreativeBackupImageFeaturesEnum.WEBGL),
                        add(CreativeBackupImageFeaturesEnum.SVG_HREF),
                        add(CreativeBackupImageFeaturesEnum.INPUT_TYPE_TEL),
                    }};
                    backupImageReportingLabel = "natus";
                    backupImageTargetWindow = new TargetWindow() {{
                        customHtml = "reprehenderit";
                        targetWindowOption = TargetWindowTargetWindowOptionEnum.NEW_WINDOW;
                    }};;
                    clickTags = new org.openapis.openapi.models.shared.ClickTag[]{{
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "fuga";
                                customClickThroughUrl = "nulla";
                                landingPageId = "cumque";
                            }};
                            eventName = "aperiam";
                            name = "Hope Macejkovic";
                        }}),
                    }};
                    commercialId = "eveniet";
                    companionCreatives = new String[]{{
                        add("illum"),
                    }};
                    compatibility = new org.openapis.openapi.models.shared.CreativeCompatibilityEnum[]{{
                        add(CreativeCompatibilityEnum.IN_STREAM_VIDEO),
                        add(CreativeCompatibilityEnum.APP),
                        add(CreativeCompatibilityEnum.DISPLAY),
                        add(CreativeCompatibilityEnum.IN_STREAM_AUDIO),
                    }};
                    convertFlashToHtml5 = false;
                    counterCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "ratione";
                            advertiserCustomEventName = "molestias";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "non";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "sint";
                                customClickThroughUrl = "consequatur";
                                landingPageId = "illum";
                            }};
                            id = "adipisci";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 210651;
                                    iab = false;
                                    id = "ex";
                                    kind = "quis";
                                    width = 431131;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 88310;
                                    top = 886506;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_BLANK;
                            videoReportingId = "iure";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "eveniet";
                            advertiserCustomEventName = "doloribus";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "iste";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "ad";
                                customClickThroughUrl = "ab";
                                landingPageId = "harum";
                            }};
                            id = "facere";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 495700;
                                    iab = false;
                                    id = "nisi";
                                    kind = "accusamus";
                                    width = 884830;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 896512;
                                    top = 720552;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_SELF;
                            videoReportingId = "impedit";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "modi";
                            advertiserCustomEventName = "possimus";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "architecto";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "est";
                                customClickThroughUrl = "repellendus";
                                landingPageId = "dolor";
                            }};
                            id = "nemo";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 335352;
                                    iab = false;
                                    id = "quasi";
                                    kind = "odit";
                                    width = 966682;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 43797;
                                    top = 389585;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mrs.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_POPUP;
                            videoReportingId = "enim";
                        }}),
                    }};
                    creativeAssetSelection = new CreativeAssetSelection() {{
                        defaultAssetId = "nam";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                assetId = "consequuntur";
                                name = "James Yost";
                                targetingTemplateId = "corrupti";
                            }}),
                            add(new Rule() {{
                                assetId = "exercitationem";
                                name = "Mrs. Mabel Orn";
                                targetingTemplateId = "labore";
                            }}),
                        }};
                    }};;
                    creativeAssets = new org.openapis.openapi.models.shared.CreativeAsset[]{{
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 29435;
                                    iab = false;
                                    id = "officia";
                                    kind = "architecto";
                                    width = 845984;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_RIGHT;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Terrance Glover";
                                type = CreativeAssetIdTypeEnum.VIDEO;
                            }};
                            audioBitRate = 305473;
                            audioSampleRate = 357684;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "at";
                                advertiserCustomEventName = "ipsa";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                                artworkLabel = "aut";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "quaerat";
                                    customClickThroughUrl = "repellat";
                                    landingPageId = "expedita";
                                }};
                                id = "libero";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 650937;
                                        iab = false;
                                        id = "quis";
                                        kind = "cumque";
                                        width = 765459;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 875236;
                                        top = 953916;
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
                                videoReportingId = "facilis";
                            }};
                            bitRate = 40568;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_FLASH;
                            collapsedSize = new Size() {{
                                height = 968599;
                                iab = false;
                                id = "debitis";
                                kind = "enim";
                                width = 96256;
                            }};
                            companionCreativeIds = new String[]{{
                                add("ipsam"),
                                add("aspernatur"),
                                add("atque"),
                                add("animi"),
                            }};
                            customStartTimeValue = 263577;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_TYPE_DATETIME),
                                add(CreativeAssetDetectedFeaturesEnum.POST_MESSAGE),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING;
                            duration = 128540;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_CUSTOM;
                            expandedDimension = new Size() {{
                                height = 507946;
                                iab = false;
                                id = "ullam";
                                kind = "maiores";
                                width = 546014;
                            }};
                            fileSize = "libero";
                            flashVersion = 812186;
                            frameRate = 1270.95;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "placeat";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "animi";
                                etag = "expedita";
                                id = "a8da4127-dd59-47ff-8711-aa1bc74b86ce";
                                kind = "quisquam";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "ducimus";
                            }};
                            mediaDuration = 2793.1;
                            mimeType = "voluptatibus";
                            offset = new OffsetPosition() {{
                                left = 472152;
                                top = 497633;
                            }};
                            orientation = CreativeAssetOrientationEnum.SQUARE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 278791;
                                top = 534175;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PERCENT;
                            progressiveServingUrl = "soluta";
                            pushdown = false;
                            pushdownDuration = 8425.39;
                            role = CreativeAssetRoleEnum.PARENT_VIDEO;
                            size = new Size() {{
                                height = 652703;
                                iab = false;
                                id = "autem";
                                kind = "hic";
                                width = 20486;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "aliquam";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.OPAQUE;
                            zIndex = 860383;
                            zipFilename = "qui";
                            zipFilesize = "maxime";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 746511;
                                    iab = false;
                                    id = "quos";
                                    kind = "sit";
                                    width = 511921;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Peggy Krajcik";
                                type = CreativeAssetIdTypeEnum.IMAGE;
                            }};
                            audioBitRate = 384630;
                            audioSampleRate = 25321;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "labore";
                                advertiserCustomEventName = "ullam";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "soluta";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "rerum";
                                    customClickThroughUrl = "cum";
                                    landingPageId = "est";
                                }};
                                id = "fugiat";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 21470;
                                        iab = false;
                                        id = "qui";
                                        kind = "tenetur";
                                        width = 125664;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 340397;
                                        top = 544071;
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
                                videoReportingId = "a";
                            }};
                            bitRate = 91529;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_VIDEO;
                            collapsedSize = new Size() {{
                                height = 176852;
                                iab = false;
                                id = "exercitationem";
                                kind = "minima";
                                width = 515854;
                            }};
                            companionCreativeIds = new String[]{{
                                add("fuga"),
                                add("fuga"),
                                add("excepturi"),
                                add("corporis"),
                            }};
                            customStartTimeValue = 723031;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.AUDIO),
                                add(CreativeAssetDetectedFeaturesEnum.LOCAL_STORAGE),
                                add(CreativeAssetDetectedFeaturesEnum.WEB_WORKERS),
                                add(CreativeAssetDetectedFeaturesEnum.CSS_FONT_FACE),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_FLOATING;
                            duration = 450290;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_AUTO;
                            expandedDimension = new Size() {{
                                height = 425070;
                                iab = false;
                                id = "impedit";
                                kind = "consectetur";
                                width = 335672;
                            }};
                            fileSize = "ut";
                            flashVersion = 668155;
                            frameRate = 6828.47;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "labore";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "adipisci";
                                etag = "ratione";
                                id = "b47e1763-c520-48c2-be98-02d82f0d45eb";
                                kind = "eius";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "blanditiis";
                            }};
                            mediaDuration = 7482.66;
                            mimeType = "ea";
                            offset = new OffsetPosition() {{
                                left = 483485;
                                top = 294249;
                            }};
                            orientation = CreativeAssetOrientationEnum.SQUARE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 927354;
                                top = 372572;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            progressiveServingUrl = "optio";
                            pushdown = false;
                            pushdownDuration = 1224.26;
                            role = CreativeAssetRoleEnum.TRANSCODED_VIDEO;
                            size = new Size() {{
                                height = 932486;
                                iab = false;
                                id = "assumenda";
                                kind = "optio";
                                width = 458429;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "quam";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.WINDOW;
                            zIndex = 493774;
                            zipFilename = "earum";
                            zipFilesize = "adipisci";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 923652;
                                    iab = false;
                                    id = "voluptatem";
                                    kind = "eius";
                                    width = 700666;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Miss Jana Schumm";
                                type = CreativeAssetIdTypeEnum.VIDEO;
                            }};
                            audioBitRate = 444305;
                            audioSampleRate = 13781;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "recusandae";
                                advertiserCustomEventName = "voluptatibus";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                                artworkLabel = "aspernatur";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "illum";
                                    customClickThroughUrl = "dolor";
                                    landingPageId = "porro";
                                }};
                                id = "iste";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 938076;
                                        iab = false;
                                        id = "vitae";
                                        kind = "impedit";
                                        width = 754547;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 331371;
                                        top = 44549;
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
                                videoReportingId = "quod";
                            }};
                            bitRate = 203087;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_IMAGE;
                            collapsedSize = new Size() {{
                                height = 719575;
                                iab = false;
                                id = "cumque";
                                kind = "assumenda";
                                width = 3026;
                            }};
                            companionCreativeIds = new String[]{{
                                add("vel"),
                                add("qui"),
                                add("perspiciatis"),
                            }};
                            customStartTimeValue = 37384;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_TYPE_SEARCH),
                                add(CreativeAssetDetectedFeaturesEnum.HISTORY),
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_ATTR_LIST),
                                add(CreativeAssetDetectedFeaturesEnum.SVG_FILTERS),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_FLOATING;
                            duration = 515549;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_NONE;
                            expandedDimension = new Size() {{
                                height = 69381;
                                iab = false;
                                id = "atque";
                                kind = "natus";
                                width = 632917;
                            }};
                            fileSize = "possimus";
                            flashVersion = 476644;
                            frameRate = 8871.35;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "reiciendis";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "voluptatum";
                                etag = "aperiam";
                                id = "7aae03f3-3ca7-49fb-9de4-032ba26fd368";
                                kind = "expedita";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "excepturi";
                            }};
                            mediaDuration = 1706.72;
                            mimeType = "dicta";
                            offset = new OffsetPosition() {{
                                left = 385943;
                                top = 717951;
                            }};
                            orientation = CreativeAssetOrientationEnum.SQUARE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 706372;
                                top = 300155;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PERCENT;
                            progressiveServingUrl = "molestias";
                            pushdown = false;
                            pushdownDuration = 2041.21;
                            role = CreativeAssetRoleEnum.ADDITIONAL_FLASH;
                            size = new Size() {{
                                height = 758549;
                                iab = false;
                                id = "esse";
                                kind = "adipisci";
                                width = 422759;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "beatae";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.WINDOW;
                            zIndex = 158023;
                            zipFilename = "ratione";
                            zipFilesize = "veritatis";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 192447;
                                    iab = false;
                                    id = "recusandae";
                                    kind = "fugiat";
                                    width = 802082;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Luz Schmidt III";
                                type = CreativeAssetIdTypeEnum.FLASH;
                            }};
                            audioBitRate = 705860;
                            audioSampleRate = 727440;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "maxime";
                                advertiserCustomEventName = "deserunt";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                                artworkLabel = "molestias";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "dolores";
                                    customClickThroughUrl = "reprehenderit";
                                    landingPageId = "minus";
                                }};
                                id = "non";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 141414;
                                        iab = false;
                                        id = "maxime";
                                        kind = "aspernatur";
                                        width = 168913;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 795035;
                                        top = 326775;
                                    }};
                                    positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                    showAddressBar = false;
                                    showMenuBar = false;
                                    showScrollBar = false;
                                    showStatusBar = false;
                                    showToolBar = false;
                                    title = "Mr.";
                                }};
                                targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                                videoReportingId = "accusantium";
                            }};
                            bitRate = 278672;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_IMAGE;
                            collapsedSize = new Size() {{
                                height = 324972;
                                iab = false;
                                id = "quo";
                                kind = "quis";
                                width = 817729;
                            }};
                            companionCreativeIds = new String[]{{
                                add("harum"),
                                add("adipisci"),
                                add("optio"),
                            }};
                            customStartTimeValue = 325326;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.LOCAL_STORAGE),
                                add(CreativeAssetDetectedFeaturesEnum.CSS_MULTIPLE_BGS),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_BACKDROP;
                            duration = 272064;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_NONE;
                            expandedDimension = new Size() {{
                                height = 560736;
                                iab = false;
                                id = "beatae";
                                kind = "itaque";
                                width = 541585;
                            }};
                            fileSize = "dolorum";
                            flashVersion = 627779;
                            frameRate = 1847.97;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "enim";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "quam";
                                etag = "assumenda";
                                id = "dc1912eb-de64-4bfc-8546-9d4015dfa796";
                                kind = "odit";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "voluptas";
                            }};
                            mediaDuration = 7288.49;
                            mimeType = "vero";
                            offset = new OffsetPosition() {{
                                left = 941086;
                                top = 163304;
                            }};
                            orientation = CreativeAssetOrientationEnum.SQUARE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 47902;
                                top = 657394;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            progressiveServingUrl = "non";
                            pushdown = false;
                            pushdownDuration = 1540.34;
                            role = CreativeAssetRoleEnum.ALTERNATE_VIDEO;
                            size = new Size() {{
                                height = 104042;
                                iab = false;
                                id = "deserunt";
                                kind = "fuga";
                                width = 17342;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "perferendis";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.TRANSPARENT;
                            zIndex = 566896;
                            zipFilename = "fuga";
                            zipFilesize = "culpa";
                        }}),
                    }};
                    creativeFieldAssignments = new org.openapis.openapi.models.shared.CreativeFieldAssignment[]{{
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "sunt";
                            creativeFieldValueId = "necessitatibus";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "iste";
                            creativeFieldValueId = "veritatis";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "adipisci";
                            creativeFieldValueId = "quis";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "quis";
                            creativeFieldValueId = "quos";
                        }}),
                    }};
                    customKeyValues = new String[]{{
                        add("fugiat"),
                        add("dicta"),
                    }};
                    dynamicAssetSelection = false;
                    exitCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "delectus";
                            advertiserCustomEventName = "sint";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "sint";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "est";
                                customClickThroughUrl = "numquam";
                                landingPageId = "nam";
                            }};
                            id = "sapiente";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 686045;
                                    iab = false;
                                    id = "facere";
                                    kind = "odit";
                                    width = 724229;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 990635;
                                    top = 461812;
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
                            videoReportingId = "quo";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "deserunt";
                            advertiserCustomEventName = "totam";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "id";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "excepturi";
                                customClickThroughUrl = "unde";
                                landingPageId = "expedita";
                            }};
                            id = "eius";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 94105;
                                    iab = false;
                                    id = "quibusdam";
                                    kind = "voluptas";
                                    width = 98452;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 167089;
                                    top = 255158;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mrs.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "sunt";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "blanditiis";
                            advertiserCustomEventName = "quam";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "cumque";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "ea";
                                customClickThroughUrl = "totam";
                                landingPageId = "quidem";
                            }};
                            id = "eaque";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 194033;
                                    iab = false;
                                    id = "fuga";
                                    kind = "assumenda";
                                    width = 268888;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 170487;
                                    top = 106767;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Dr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "nesciunt";
                        }}),
                    }};
                    fsCommand = new FsCommand() {{
                        left = 817087;
                        positionOption = FsCommandPositionOptionEnum.CENTERED;
                        top = 964641;
                        windowHeight = 56906;
                        windowWidth = 777026;
                    }};;
                    htmlCode = "libero";
                    htmlCodeLocked = false;
                    id = "eaque";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "animi";
                        etag = "doloremque";
                        id = "003eb22d-9b3a-470d-94fa-a741c57d1fed";
                        kind = "maxime";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "sit";
                    }};;
                    kind = "nostrum";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "doloremque";
                    }};;
                    latestTraffickedCreativeId = "repellendus";
                    mediaDescription = "ratione";
                    mediaDuration = 5538.96;
                    name = "Salvatore Dietrich";
                    obaIcon = new ObaIcon() {{
                        iconClickThroughUrl = "ab";
                        iconClickTrackingUrl = "praesentium";
                        iconViewTrackingUrl = "nostrum";
                        program = "labore";
                        resourceUrl = "iusto";
                        size = new Size() {{
                            height = 125036;
                            iab = false;
                            id = "tenetur";
                            kind = "occaecati";
                            width = 898229;
                        }};;
                        xPosition = "necessitatibus";
                        yPosition = "autem";
                    }};;
                    overrideCss = "natus";
                    progressOffset = new VideoOffset() {{
                        offsetPercentage = 95666;
                        offsetSeconds = 434306;
                    }};;
                    redirectUrl = "ex";
                    renderingId = "error";
                    renderingIdDimensionValue = new DimensionValue() {{
                        dimensionName = "deleniti";
                        etag = "tempore";
                        id = "e3444eac-8b3a-4287-9c6c-1fe606d07d2a";
                        kind = "error";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "laudantium";
                    }};;
                    requiredFlashPluginVersion = "nihil";
                    requiredFlashVersion = 640681;
                    size = new Size() {{
                        height = 920194;
                        iab = false;
                        id = "nemo";
                        kind = "voluptatem";
                        width = 798559;
                    }};;
                    skipOffset = new VideoOffset() {{
                        offsetPercentage = 115281;
                        offsetSeconds = 428232;
                    }};;
                    skippable = false;
                    sslCompliant = false;
                    sslOverride = false;
                    studioAdvertiserId = "voluptas";
                    studioCreativeId = "laboriosam";
                    studioTraffickedCreativeId = "veritatis";
                    subaccountId = "similique";
                    thirdPartyBackupImageImpressionsUrl = "veritatis";
                    thirdPartyRichMediaImpressionsUrl = "temporibus";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyTrackingUrl[]{{
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.CLICK_TRACKING;
                            url = "ipsum";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_PAUSE;
                            url = "similique";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_PAUSE;
                            url = "itaque";
                        }}),
                    }};
                    timerCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "possimus";
                            advertiserCustomEventName = "minima";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "qui";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "amet";
                                customClickThroughUrl = "tenetur";
                                landingPageId = "velit";
                            }};
                            id = "asperiores";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 414172;
                                    iab = false;
                                    id = "voluptas";
                                    kind = "quos";
                                    width = 460677;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 331817;
                                    top = 145333;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_SELF;
                            videoReportingId = "autem";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "aliquam";
                            advertiserCustomEventName = "maxime";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "occaecati";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "doloremque";
                                customClickThroughUrl = "id";
                                landingPageId = "veniam";
                            }};
                            id = "ea";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 808596;
                                    iab = false;
                                    id = "necessitatibus";
                                    kind = "harum";
                                    width = 764612;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 632532;
                                    top = 864614;
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
                            videoReportingId = "maxime";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "officia";
                            advertiserCustomEventName = "iusto";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "ab";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "et";
                                customClickThroughUrl = "eligendi";
                                landingPageId = "sint";
                            }};
                            id = "ipsam";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 388715;
                                    iab = false;
                                    id = "molestiae";
                                    kind = "ab";
                                    width = 401449;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 436367;
                                    top = 209210;
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
                            videoReportingId = "ipsa";
                        }}),
                    }};
                    totalFileSize = "nam";
                    type = CreativeTypeEnum.RICH_MEDIA_INPAGE_FLOATING;
                    universalAdId = new UniversalAdId() {{
                        registry = UniversalAdIdRegistryEnum.AD_ID_OFFICIAL;
                        value = "nisi";
                    }};;
                    version = 328697;
                }};;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "culpa";
                key = "non";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "deleniti";
                uploadProtocol = "exercitationem";
            }};            

            DfareportingCreativesInsertResponse res = sdk.creatives.dfareportingCreativesInsert(req, new DfareportingCreativesInsertSecurity("illo", "fugit") {{
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

            DfareportingCreativesListRequest req = new DfareportingCreativesListRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                active = false;
                advertiserId = "nostrum";
                alt = AltEnum.JSON;
                archived = false;
                callback = "sunt";
                campaignId = "quidem";
                companionCreativeIds = new String[]{{
                    add("asperiores"),
                    add("eos"),
                    add("saepe"),
                }};
                creativeFieldIds = new String[]{{
                    add("esse"),
                }};
                fields = "consequuntur";
                ids = new String[]{{
                    add("autem"),
                    add("reprehenderit"),
                }};
                key = "quidem";
                maxResults = 559716L;
                oauthToken = "officia";
                pageToken = "modi";
                prettyPrint = false;
                quotaUser = "alias";
                renderingIds = new String[]{{
                    add("minus"),
                    add("sit"),
                    add("quis"),
                }};
                searchString = "hic";
                sizeIds = new String[]{{
                    add("libero"),
                    add("voluptatem"),
                    add("at"),
                }};
                sortField = DfareportingCreativesListSortFieldEnum.ID;
                sortOrder = DfareportingCreativesListSortOrderEnum.ASCENDING;
                studioCreativeId = "perferendis";
                types = new org.openapis.openapi.models.operations.DfareportingCreativesListTypesEnum[]{{
                    add(DfareportingCreativesListTypesEnum.HTML5_BANNER),
                    add(DfareportingCreativesListTypesEnum.INSTREAM_AUDIO),
                    add(DfareportingCreativesListTypesEnum.CUSTOM_DISPLAY_INTERSTITIAL),
                    add(DfareportingCreativesListTypesEnum.CUSTOM_DISPLAY_INTERSTITIAL),
                }};
                uploadType = "laborum";
                uploadProtocol = "sint";
            }};            

            DfareportingCreativesListResponse res = sdk.creatives.dfareportingCreativesList(req, new DfareportingCreativesListSecurity("incidunt", "pariatur") {{
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

            DfareportingCreativesPatchRequest req = new DfareportingCreativesPatchRequest("aspernatur", "aperiam") {{
                dollarXgafv = XgafvEnum.TWO;
                creative = new Creative() {{
                    accountId = "quo";
                    active = false;
                    adParameters = "perspiciatis";
                    adTagKeys = new String[]{{
                        add("debitis"),
                    }};
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 306599;
                            iab = false;
                            id = "quasi";
                            kind = "repellendus";
                            width = 100436;
                        }}),
                        add(new Size() {{
                            height = 941683;
                            iab = false;
                            id = "labore";
                            kind = "nisi";
                            width = 373668;
                        }}),
                        add(new Size() {{
                            height = 904131;
                            iab = false;
                            id = "praesentium";
                            kind = "veniam";
                            width = 67582;
                        }}),
                    }};
                    advertiserId = "minima";
                    allowScriptAccess = false;
                    archived = false;
                    artworkType = CreativeArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                    authoringSource = CreativeAuthoringSourceEnum.CREATIVE_AUTHORING_SOURCE_ACS;
                    authoringTool = CreativeAuthoringToolEnum.SWIFFY;
                    autoAdvanceImages = false;
                    backgroundColor = "a";
                    backupImageClickThroughUrl = new CreativeClickThroughUrl() {{
                        computedClickThroughUrl = "molestiae";
                        customClickThroughUrl = "amet";
                        landingPageId = "voluptatibus";
                    }};;
                    backupImageFeatures = new org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum[]{{
                        add(CreativeBackupImageFeaturesEnum.TOUCH),
                        add(CreativeBackupImageFeaturesEnum.DRAG_AND_DROP),
                        add(CreativeBackupImageFeaturesEnum.CSS_TRANSFORMS3_D),
                        add(CreativeBackupImageFeaturesEnum.SVG_FILTERS),
                    }};
                    backupImageReportingLabel = "facere";
                    backupImageTargetWindow = new TargetWindow() {{
                        customHtml = "illum";
                        targetWindowOption = TargetWindowTargetWindowOptionEnum.CURRENT_WINDOW;
                    }};;
                    clickTags = new org.openapis.openapi.models.shared.ClickTag[]{{
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "deserunt";
                                customClickThroughUrl = "sint";
                                landingPageId = "minima";
                            }};
                            eventName = "dolore";
                            name = "Emily Mayert";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "laborum";
                                customClickThroughUrl = "sapiente";
                                landingPageId = "soluta";
                            }};
                            eventName = "eius";
                            name = "Jan Leuschke";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "dolorem";
                                customClickThroughUrl = "neque";
                                landingPageId = "laudantium";
                            }};
                            eventName = "quos";
                            name = "Troy Streich I";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "error";
                                customClickThroughUrl = "necessitatibus";
                                landingPageId = "culpa";
                            }};
                            eventName = "quis";
                            name = "Ms. Jackie Pfeffer";
                        }}),
                    }};
                    commercialId = "qui";
                    companionCreatives = new String[]{{
                        add("modi"),
                        add("sapiente"),
                    }};
                    compatibility = new org.openapis.openapi.models.shared.CreativeCompatibilityEnum[]{{
                        add(CreativeCompatibilityEnum.APP),
                        add(CreativeCompatibilityEnum.DISPLAY),
                        add(CreativeCompatibilityEnum.APP_INTERSTITIAL),
                        add(CreativeCompatibilityEnum.DISPLAY),
                    }};
                    convertFlashToHtml5 = false;
                    counterCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "iste";
                            advertiserCustomEventName = "nulla";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "maxime";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "velit";
                                customClickThroughUrl = "voluptatum";
                                landingPageId = "eveniet";
                            }};
                            id = "quibusdam";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 40155;
                                    iab = false;
                                    id = "assumenda";
                                    kind = "nobis";
                                    width = 389627;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 457869;
                                    top = 90809;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_SELF;
                            videoReportingId = "delectus";
                        }}),
                    }};
                    creativeAssetSelection = new CreativeAssetSelection() {{
                        defaultAssetId = "quae";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                assetId = "amet";
                                name = "Emanuel Boyer";
                                targetingTemplateId = "consequuntur";
                            }}),
                            add(new Rule() {{
                                assetId = "aut";
                                name = "Eduardo Bayer DDS";
                                targetingTemplateId = "magnam";
                            }}),
                            add(new Rule() {{
                                assetId = "natus";
                                name = "Katherine Ziemann";
                                targetingTemplateId = "quibusdam";
                            }}),
                            add(new Rule() {{
                                assetId = "totam";
                                name = "Leland Lebsack";
                                targetingTemplateId = "dolores";
                            }}),
                        }};
                    }};;
                    creativeAssets = new org.openapis.openapi.models.shared.CreativeAsset[]{{
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 580881;
                                    iab = false;
                                    id = "pariatur";
                                    kind = "similique";
                                    width = 336961;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_BOTTOM;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Mr. Ramon Mraz";
                                type = CreativeAssetIdTypeEnum.HTML;
                            }};
                            audioBitRate = 540074;
                            audioSampleRate = 74814;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "dolorum";
                                advertiserCustomEventName = "provident";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                                artworkLabel = "maiores";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "modi";
                                    customClickThroughUrl = "sequi";
                                    landingPageId = "nisi";
                                }};
                                id = "autem";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 272562;
                                        iab = false;
                                        id = "mollitia";
                                        kind = "quas";
                                        width = 944689;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 43786;
                                        top = 663457;
                                    }};
                                    positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                    showAddressBar = false;
                                    showMenuBar = false;
                                    showScrollBar = false;
                                    showStatusBar = false;
                                    showToolBar = false;
                                    title = "Ms.";
                                }};
                                targetType = CreativeCustomEventTargetTypeEnum.TARGET_PARENT;
                                videoReportingId = "commodi";
                            }};
                            bitRate = 617374;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_FLASH;
                            collapsedSize = new Size() {{
                                height = 812626;
                                iab = false;
                                id = "molestiae";
                                kind = "dolor";
                                width = 155108;
                            }};
                            companionCreativeIds = new String[]{{
                                add("occaecati"),
                                add("doloribus"),
                                add("libero"),
                                add("culpa"),
                            }};
                            customStartTimeValue = 946496;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.APPLICATION_CACHE),
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_ATTR_AUTOFOCUS),
                                add(CreativeAssetDetectedFeaturesEnum.VIDEO),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_PEEL_DOWN;
                            duration = 182952;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_NONE;
                            expandedDimension = new Size() {{
                                height = 877941;
                                iab = false;
                                id = "quas";
                                kind = "possimus";
                                width = 762148;
                            }};
                            fileSize = "quo";
                            flashVersion = 354161;
                            frameRate = 572.9;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "placeat";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "quas";
                                etag = "culpa";
                                id = "3512c737-8489-4307-90a0-0e966ec736d4";
                                kind = "neque";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "omnis";
                            }};
                            mediaDuration = 3096.94;
                            mimeType = "nesciunt";
                            offset = new OffsetPosition() {{
                                left = 608470;
                                top = 547191;
                            }};
                            orientation = CreativeAssetOrientationEnum.SQUARE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 473689;
                                top = 540826;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            progressiveServingUrl = "cupiditate";
                            pushdown = false;
                            pushdownDuration = 1577.51;
                            role = CreativeAssetRoleEnum.ADDITIONAL_IMAGE;
                            size = new Size() {{
                                height = 583240;
                                iab = false;
                                id = "praesentium";
                                kind = "accusamus";
                                width = 856859;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "pariatur";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.OPAQUE;
                            zIndex = 647279;
                            zipFilename = "nobis";
                            zipFilesize = "quam";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 669390;
                                    iab = false;
                                    id = "non";
                                    kind = "placeat";
                                    width = 331570;
                                }}),
                                add(new Size() {{
                                    height = 791489;
                                    iab = false;
                                    id = "similique";
                                    kind = "corrupti";
                                    width = 398432;
                                }}),
                                add(new Size() {{
                                    height = 307401;
                                    iab = false;
                                    id = "error";
                                    kind = "animi";
                                    width = 496430;
                                }}),
                                add(new Size() {{
                                    height = 18989;
                                    iab = false;
                                    id = "impedit";
                                    kind = "reiciendis";
                                    width = 845889;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_RIGHT;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Margarita Lowe";
                                type = CreativeAssetIdTypeEnum.VIDEO;
                            }};
                            audioBitRate = 161786;
                            audioSampleRate = 27614;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "voluptas";
                                advertiserCustomEventName = "magnam";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                                artworkLabel = "quae";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "iure";
                                    customClickThroughUrl = "voluptate";
                                    landingPageId = "illum";
                                }};
                                id = "et";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 596802;
                                        iab = false;
                                        id = "accusamus";
                                        kind = "laborum";
                                        width = 529677;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 188008;
                                        top = 817807;
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
                                videoReportingId = "earum";
                            }};
                            bitRate = 842689;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_FLASH;
                            collapsedSize = new Size() {{
                                height = 280313;
                                iab = false;
                                id = "tempore";
                                kind = "molestias";
                                width = 682724;
                            }};
                            companionCreativeIds = new String[]{{
                                add("minus"),
                            }};
                            customStartTimeValue = 123989;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.DRAG_AND_DROP),
                                add(CreativeAssetDetectedFeaturesEnum.APPLICATION_CACHE),
                                add(CreativeAssetDetectedFeaturesEnum.CANVAS_TEXT),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_EXPANDING;
                            duration = 328853;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_CUSTOM;
                            expandedDimension = new Size() {{
                                height = 600933;
                                iab = false;
                                id = "ullam";
                                kind = "enim";
                                width = 814114;
                            }};
                            fileSize = "cumque";
                            flashVersion = 765900;
                            frameRate = 906.7;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "praesentium";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "minima";
                                etag = "eveniet";
                                id = "a4901c7c-43ad-42da-a784-aba3d230edf7";
                                kind = "dolor";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "beatae";
                            }};
                            mediaDuration = 1147.62;
                            mimeType = "laborum";
                            offset = new OffsetPosition() {{
                                left = 107776;
                                top = 112931;
                            }};
                            orientation = CreativeAssetOrientationEnum.PORTRAIT;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 249071;
                                top = 516231;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            progressiveServingUrl = "nulla";
                            pushdown = false;
                            pushdownDuration = 4992.7;
                            role = CreativeAssetRoleEnum.TRANSCODED_AUDIO;
                            size = new Size() {{
                                height = 831559;
                                iab = false;
                                id = "enim";
                                kind = "voluptas";
                                width = 331703;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "quam";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.WINDOW;
                            zIndex = 136036;
                            zipFilename = "veritatis";
                            zipFilesize = "porro";
                        }}),
                    }};
                    creativeFieldAssignments = new org.openapis.openapi.models.shared.CreativeFieldAssignment[]{{
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "deleniti";
                            creativeFieldValueId = "doloribus";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "magnam";
                            creativeFieldValueId = "nulla";
                        }}),
                    }};
                    customKeyValues = new String[]{{
                        add("adipisci"),
                        add("provident"),
                    }};
                    dynamicAssetSelection = false;
                    exitCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "nostrum";
                            advertiserCustomEventName = "eum";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "cumque";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "accusantium";
                                customClickThroughUrl = "fuga";
                                landingPageId = "doloremque";
                            }};
                            id = "reprehenderit";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 117117;
                                    iab = false;
                                    id = "veritatis";
                                    kind = "similique";
                                    width = 608208;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 414547;
                                    top = 116635;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "deserunt";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "dignissimos";
                            advertiserCustomEventName = "nulla";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "libero";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "doloribus";
                                customClickThroughUrl = "enim";
                                landingPageId = "velit";
                            }};
                            id = "sed";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 826114;
                                    iab = false;
                                    id = "atque";
                                    kind = "perspiciatis";
                                    width = 142156;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 754053;
                                    top = 939305;
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
                            videoReportingId = "dolores";
                        }}),
                    }};
                    fsCommand = new FsCommand() {{
                        left = 810324;
                        positionOption = FsCommandPositionOptionEnum.DISTANCE_FROM_TOP_LEFT_CORNER;
                        top = 347321;
                        windowHeight = 103547;
                        windowWidth = 162374;
                    }};;
                    htmlCode = "impedit";
                    htmlCodeLocked = false;
                    id = "deleniti";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "esse";
                        etag = "voluptatum";
                        id = "240bf548-f88f-48f1-bf0b-c8e1f206d5d8";
                        kind = "sequi";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "temporibus";
                    }};;
                    kind = "doloremque";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "aperiam";
                    }};;
                    latestTraffickedCreativeId = "laudantium";
                    mediaDescription = "ab";
                    mediaDuration = 285.01;
                    name = "Jeffrey Wintheiser";
                    obaIcon = new ObaIcon() {{
                        iconClickThroughUrl = "quae";
                        iconClickTrackingUrl = "voluptas";
                        iconViewTrackingUrl = "laboriosam";
                        program = "ducimus";
                        resourceUrl = "adipisci";
                        size = new Size() {{
                            height = 988193;
                            iab = false;
                            id = "ratione";
                            kind = "id";
                            width = 404680;
                        }};;
                        xPosition = "quos";
                        yPosition = "dicta";
                    }};;
                    overrideCss = "minus";
                    progressOffset = new VideoOffset() {{
                        offsetPercentage = 349639;
                        offsetSeconds = 474106;
                    }};;
                    redirectUrl = "iure";
                    renderingId = "blanditiis";
                    renderingIdDimensionValue = new DimensionValue() {{
                        dimensionName = "repellendus";
                        etag = "impedit";
                        id = "e742409a-215e-4086-8148-9a5f63e3af3d";
                        kind = "vero";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "quibusdam";
                    }};;
                    requiredFlashPluginVersion = "quibusdam";
                    requiredFlashVersion = 639371;
                    size = new Size() {{
                        height = 209692;
                        iab = false;
                        id = "velit";
                        kind = "vero";
                        width = 811245;
                    }};;
                    skipOffset = new VideoOffset() {{
                        offsetPercentage = 867308;
                        offsetSeconds = 425868;
                    }};;
                    skippable = false;
                    sslCompliant = false;
                    sslOverride = false;
                    studioAdvertiserId = "non";
                    studioCreativeId = "incidunt";
                    studioTraffickedCreativeId = "praesentium";
                    subaccountId = "ipsum";
                    thirdPartyBackupImageImpressionsUrl = "itaque";
                    thirdPartyRichMediaImpressionsUrl = "non";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyTrackingUrl[]{{
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_PAUSE;
                            url = "id";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_STOP;
                            url = "quas";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_SKIP;
                            url = "modi";
                        }}),
                    }};
                    timerCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "maiores";
                            advertiserCustomEventName = "neque";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "debitis";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "nostrum";
                                customClickThroughUrl = "libero";
                                landingPageId = "totam";
                            }};
                            id = "omnis";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 330484;
                                    iab = false;
                                    id = "nostrum";
                                    kind = "facere";
                                    width = 303791;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 110337;
                                    top = 214506;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "error";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "numquam";
                            advertiserCustomEventName = "praesentium";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "consectetur";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "ipsa";
                                customClickThroughUrl = "occaecati";
                                landingPageId = "perferendis";
                            }};
                            id = "iure";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 738496;
                                    iab = false;
                                    id = "facere";
                                    kind = "ratione";
                                    width = 337161;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 266643;
                                    top = 780157;
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
                            videoReportingId = "harum";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "vero";
                            advertiserCustomEventName = "nihil";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "incidunt";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "consequatur";
                                customClickThroughUrl = "consequuntur";
                                landingPageId = "numquam";
                            }};
                            id = "numquam";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 571263;
                                    iab = false;
                                    id = "pariatur";
                                    kind = "voluptatum";
                                    width = 426608;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 965071;
                                    top = 267829;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_BLANK;
                            videoReportingId = "eaque";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "asperiores";
                            advertiserCustomEventName = "debitis";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "quibusdam";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "veritatis";
                                customClickThroughUrl = "sunt";
                                landingPageId = "quod";
                            }};
                            id = "expedita";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 961171;
                                    iab = false;
                                    id = "itaque";
                                    kind = "dignissimos";
                                    width = 300795;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 568153;
                                    top = 809506;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Dr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "enim";
                        }}),
                    }};
                    totalFileSize = "mollitia";
                    type = CreativeTypeEnum.INTERNAL_REDIRECT;
                    universalAdId = new UniversalAdId() {{
                        registry = UniversalAdIdRegistryEnum.AD_ID_OFFICIAL;
                        value = "delectus";
                    }};;
                    version = 405542;
                }};;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "quod";
                key = "occaecati";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "temporibus";
                uploadProtocol = "quae";
            }};            

            DfareportingCreativesPatchResponse res = sdk.creatives.dfareportingCreativesPatch(req, new DfareportingCreativesPatchSecurity("doloremque", "debitis") {{
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

            DfareportingCreativesUpdateRequest req = new DfareportingCreativesUpdateRequest("omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                creative = new Creative() {{
                    accountId = "quidem";
                    active = false;
                    adParameters = "neque";
                    adTagKeys = new String[]{{
                        add("repellendus"),
                        add("tempora"),
                        add("quisquam"),
                    }};
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 741473;
                            iab = false;
                            id = "doloremque";
                            kind = "adipisci";
                            width = 94094;
                        }}),
                        add(new Size() {{
                            height = 37455;
                            iab = false;
                            id = "molestias";
                            kind = "facere";
                            width = 582412;
                        }}),
                    }};
                    advertiserId = "quisquam";
                    allowScriptAccess = false;
                    archived = false;
                    artworkType = CreativeArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                    authoringSource = CreativeAuthoringSourceEnum.CREATIVE_AUTHORING_SOURCE_DCM;
                    authoringTool = CreativeAuthoringToolEnum.NINJA;
                    autoAdvanceImages = false;
                    backgroundColor = "modi";
                    backupImageClickThroughUrl = new CreativeClickThroughUrl() {{
                        computedClickThroughUrl = "nihil";
                        customClickThroughUrl = "velit";
                        landingPageId = "aut";
                    }};;
                    backupImageFeatures = new org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum[]{{
                        add(CreativeBackupImageFeaturesEnum.CSS_RGBA),
                        add(CreativeBackupImageFeaturesEnum.INPUT_TYPE_NUMBER),
                        add(CreativeBackupImageFeaturesEnum.INPUT_TYPE_EMAIL),
                    }};
                    backupImageReportingLabel = "incidunt";
                    backupImageTargetWindow = new TargetWindow() {{
                        customHtml = "asperiores";
                        targetWindowOption = TargetWindowTargetWindowOptionEnum.NEW_WINDOW;
                    }};;
                    clickTags = new org.openapis.openapi.models.shared.ClickTag[]{{
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "distinctio";
                                customClickThroughUrl = "dicta";
                                landingPageId = "earum";
                            }};
                            eventName = "possimus";
                            name = "Dr. Natalie Kub";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "impedit";
                                customClickThroughUrl = "amet";
                                landingPageId = "dolores";
                            }};
                            eventName = "commodi";
                            name = "Erin Becker";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "eum";
                                customClickThroughUrl = "molestiae";
                                landingPageId = "architecto";
                            }};
                            eventName = "aliquam";
                            name = "Marcia Kutch";
                        }}),
                    }};
                    commercialId = "itaque";
                    companionCreatives = new String[]{{
                        add("recusandae"),
                    }};
                    compatibility = new org.openapis.openapi.models.shared.CreativeCompatibilityEnum[]{{
                        add(CreativeCompatibilityEnum.APP_INTERSTITIAL),
                        add(CreativeCompatibilityEnum.DISPLAY),
                        add(CreativeCompatibilityEnum.APP),
                    }};
                    convertFlashToHtml5 = false;
                    counterCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "numquam";
                            advertiserCustomEventName = "temporibus";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "amet";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "ducimus";
                                customClickThroughUrl = "modi";
                                landingPageId = "impedit";
                            }};
                            id = "ipsa";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 175577;
                                    iab = false;
                                    id = "ullam";
                                    kind = "sed";
                                    width = 954542;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 905046;
                                    top = 224548;
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
                            videoReportingId = "dolore";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "quibusdam";
                            advertiserCustomEventName = "rerum";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "tempore";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "reprehenderit";
                                customClickThroughUrl = "quas";
                                landingPageId = "voluptates";
                            }};
                            id = "distinctio";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 725247;
                                    iab = false;
                                    id = "nisi";
                                    kind = "officiis";
                                    width = 95168;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 852097;
                                    top = 135597;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Dr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "eaque";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "aspernatur";
                            advertiserCustomEventName = "expedita";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "hic";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "explicabo";
                                customClickThroughUrl = "eligendi";
                                landingPageId = "nam";
                            }};
                            id = "placeat";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 302456;
                                    iab = false;
                                    id = "aliquid";
                                    kind = "adipisci";
                                    width = 373203;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 852623;
                                    top = 315793;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Ms.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "at";
                        }}),
                    }};
                    creativeAssetSelection = new CreativeAssetSelection() {{
                        defaultAssetId = "culpa";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                assetId = "eos";
                                name = "Devin Fadel";
                                targetingTemplateId = "enim";
                            }}),
                        }};
                    }};;
                    creativeAssets = new org.openapis.openapi.models.shared.CreativeAsset[]{{
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 84708;
                                    iab = false;
                                    id = "vero";
                                    kind = "ratione";
                                    width = 15374;
                                }}),
                                add(new Size() {{
                                    height = 985056;
                                    iab = false;
                                    id = "fugiat";
                                    kind = "deserunt";
                                    width = 572114;
                                }}),
                                add(new Size() {{
                                    height = 430983;
                                    iab = false;
                                    id = "commodi";
                                    kind = "magnam";
                                    width = 522616;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_BOTTOM;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Candice Koepp";
                                type = CreativeAssetIdTypeEnum.VIDEO;
                            }};
                            audioBitRate = 241236;
                            audioSampleRate = 899258;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "veritatis";
                                advertiserCustomEventName = "consectetur";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                                artworkLabel = "quasi";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "dolorum";
                                    customClickThroughUrl = "vel";
                                    landingPageId = "rerum";
                                }};
                                id = "cupiditate";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 568386;
                                        iab = false;
                                        id = "fugit";
                                        kind = "eius";
                                        width = 597360;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 295953;
                                        top = 362174;
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
                                videoReportingId = "corrupti";
                            }};
                            bitRate = 499621;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_DATA;
                            collapsedSize = new Size() {{
                                height = 332074;
                                iab = false;
                                id = "cumque";
                                kind = "praesentium";
                                width = 285256;
                            }};
                            companionCreativeIds = new String[]{{
                                add("blanditiis"),
                            }};
                            customStartTimeValue = 198060;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_TYPE_NUMBER),
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_ATTR_MULTIPLE),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_EXPANDING;
                            duration = 691549;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_AUTO;
                            expandedDimension = new Size() {{
                                height = 787742;
                                iab = false;
                                id = "nulla";
                                kind = "a";
                                width = 401700;
                            }};
                            fileSize = "dolore";
                            flashVersion = 115870;
                            frameRate = 3242.55;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "facilis";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "sit";
                                etag = "incidunt";
                                id = "49f9df13-f4ee-4dbe-b8bf-606825894ea7";
                                kind = "aliquid";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "fugiat";
                            }};
                            mediaDuration = 3587.4;
                            mimeType = "impedit";
                            offset = new OffsetPosition() {{
                                left = 445732;
                                top = 147933;
                            }};
                            orientation = CreativeAssetOrientationEnum.PORTRAIT;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 591092;
                                top = 337833;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PERCENT;
                            progressiveServingUrl = "laudantium";
                            pushdown = false;
                            pushdownDuration = 3465.19;
                            role = CreativeAssetRoleEnum.BACKUP_IMAGE;
                            size = new Size() {{
                                height = 300584;
                                iab = false;
                                id = "blanditiis";
                                kind = "nulla";
                                width = 432899;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "minima";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.OPAQUE;
                            zIndex = 582536;
                            zipFilename = "debitis";
                            zipFilesize = "minima";
                        }}),
                    }};
                    creativeFieldAssignments = new org.openapis.openapi.models.shared.CreativeFieldAssignment[]{{
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "consectetur";
                            creativeFieldValueId = "nostrum";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "tempore";
                            creativeFieldValueId = "ipsum";
                        }}),
                    }};
                    customKeyValues = new String[]{{
                        add("expedita"),
                    }};
                    dynamicAssetSelection = false;
                    exitCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "voluptatem";
                            advertiserCustomEventName = "maiores";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "reprehenderit";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "placeat";
                                customClickThroughUrl = "dolore";
                                landingPageId = "magni";
                            }};
                            id = "voluptatibus";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 797304;
                                    iab = false;
                                    id = "provident";
                                    kind = "delectus";
                                    width = 293013;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 517023;
                                    top = 288333;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_BLANK;
                            videoReportingId = "veniam";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "voluptates";
                            advertiserCustomEventName = "in";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "expedita";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "excepturi";
                                customClickThroughUrl = "eum";
                                landingPageId = "doloremque";
                            }};
                            id = "iure";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 345990;
                                    iab = false;
                                    id = "cumque";
                                    kind = "eaque";
                                    width = 935159;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 938762;
                                    top = 636775;
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
                            videoReportingId = "ratione";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "libero";
                            advertiserCustomEventName = "molestias";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "fuga";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "distinctio";
                                customClickThroughUrl = "deleniti";
                                landingPageId = "eligendi";
                            }};
                            id = "unde";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 333150;
                                    iab = false;
                                    id = "nam";
                                    kind = "accusamus";
                                    width = 114752;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 131705;
                                    top = 357256;
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
                            videoReportingId = "adipisci";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "provident";
                            advertiserCustomEventName = "reiciendis";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "voluptatibus";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "odio";
                                customClickThroughUrl = "voluptate";
                                landingPageId = "explicabo";
                            }};
                            id = "architecto";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 18584;
                                    iab = false;
                                    id = "possimus";
                                    kind = "dicta";
                                    width = 965454;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 376419;
                                    top = 346328;
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
                            videoReportingId = "cupiditate";
                        }}),
                    }};
                    fsCommand = new FsCommand() {{
                        left = 569763;
                        positionOption = FsCommandPositionOptionEnum.DISTANCE_FROM_TOP_LEFT_CORNER;
                        top = 438794;
                        windowHeight = 151838;
                        windowWidth = 141142;
                    }};;
                    htmlCode = "quibusdam";
                    htmlCodeLocked = false;
                    id = "fugit";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "nam";
                        etag = "optio";
                        id = "0f94087d-9caa-4e04-add7-caac9b4caa1c";
                        kind = "a";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "sint";
                    }};;
                    kind = "saepe";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "illo";
                    }};;
                    latestTraffickedCreativeId = "minima";
                    mediaDescription = "nulla";
                    mediaDuration = 9719.73;
                    name = "Larry Fahey IV";
                    obaIcon = new ObaIcon() {{
                        iconClickThroughUrl = "doloribus";
                        iconClickTrackingUrl = "amet";
                        iconViewTrackingUrl = "ducimus";
                        program = "deleniti";
                        resourceUrl = "dolor";
                        size = new Size() {{
                            height = 65954;
                            iab = false;
                            id = "sint";
                            kind = "quos";
                            width = 193200;
                        }};;
                        xPosition = "fugiat";
                        yPosition = "eius";
                    }};;
                    overrideCss = "odit";
                    progressOffset = new VideoOffset() {{
                        offsetPercentage = 924872;
                        offsetSeconds = 325352;
                    }};;
                    redirectUrl = "aliquam";
                    renderingId = "similique";
                    renderingIdDimensionValue = new DimensionValue() {{
                        dimensionName = "voluptatum";
                        etag = "corporis";
                        id = "466597c5-0233-4c14-b1d5-1aaa6ddf5abd";
                        kind = "aliquid";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "atque";
                    }};;
                    requiredFlashPluginVersion = "reprehenderit";
                    requiredFlashVersion = 774946;
                    size = new Size() {{
                        height = 317889;
                        iab = false;
                        id = "reiciendis";
                        kind = "impedit";
                        width = 134887;
                    }};;
                    skipOffset = new VideoOffset() {{
                        offsetPercentage = 748056;
                        offsetSeconds = 529097;
                    }};;
                    skippable = false;
                    sslCompliant = false;
                    sslOverride = false;
                    studioAdvertiserId = "ex";
                    studioCreativeId = "aspernatur";
                    studioTraffickedCreativeId = "est";
                    subaccountId = "voluptatem";
                    thirdPartyBackupImageImpressionsUrl = "aut";
                    thirdPartyRichMediaImpressionsUrl = "nobis";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyTrackingUrl[]{{
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_PROGRESS;
                            url = "autem";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_STOP;
                            url = "saepe";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.CLICK_TRACKING;
                            url = "aperiam";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.CLICK_TRACKING;
                            url = "veritatis";
                        }}),
                    }};
                    timerCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "ducimus";
                            advertiserCustomEventName = "suscipit";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "alias";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "quibusdam";
                                customClickThroughUrl = "fuga";
                                landingPageId = "nihil";
                            }};
                            id = "similique";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 995708;
                                    iab = false;
                                    id = "quibusdam";
                                    kind = "accusamus";
                                    width = 846581;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 500776;
                                    top = 270736;
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
                            videoReportingId = "dolorum";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "aliquam";
                            advertiserCustomEventName = "beatae";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "nesciunt";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "officiis";
                                customClickThroughUrl = "inventore";
                                landingPageId = "officia";
                            }};
                            id = "in";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 196495;
                                    iab = false;
                                    id = "ad";
                                    kind = "fuga";
                                    width = 790534;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 186688;
                                    top = 381445;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Dr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "ratione";
                        }}),
                    }};
                    totalFileSize = "expedita";
                    type = CreativeTypeEnum.BRAND_SAFE_DEFAULT_INSTREAM_VIDEO;
                    universalAdId = new UniversalAdId() {{
                        registry = UniversalAdIdRegistryEnum.DCM;
                        value = "provident";
                    }};;
                    version = 491500;
                }};;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "repellat";
                key = "modi";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "placeat";
                uploadProtocol = "mollitia";
            }};            

            DfareportingCreativesUpdateResponse res = sdk.creatives.dfareportingCreativesUpdate(req, new DfareportingCreativesUpdateSecurity("architecto", "quae") {{
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
