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

            DfareportingCreativesGetRequest req = new DfareportingCreativesGetRequest("inventore", "esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "ad";
                fields = "explicabo";
                key = "alias";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "qui";
                uploadProtocol = "amet";
            }};            

            DfareportingCreativesGetResponse res = sdk.creatives.dfareportingCreativesGet(req, new DfareportingCreativesGetSecurity("recusandae", "perspiciatis") {{
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

            DfareportingCreativesInsertRequest req = new DfareportingCreativesInsertRequest("corrupti") {{
                dollarXgafv = XgafvEnum.ONE;
                creative = new Creative() {{
                    accountId = "magni";
                    active = false;
                    adParameters = "repellendus";
                    adTagKeys = new String[]{{
                        add("ratione"),
                        add("sapiente"),
                        add("alias"),
                    }};
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 301188;
                            iab = false;
                            id = "quis";
                            kind = "repudiandae";
                            width = 743605;
                        }}),
                        add(new Size() {{
                            height = 262614;
                            iab = false;
                            id = "fuga";
                            kind = "blanditiis";
                            width = 748266;
                        }}),
                        add(new Size() {{
                            height = 407230;
                            iab = false;
                            id = "iusto";
                            kind = "dolore";
                            width = 919018;
                        }}),
                        add(new Size() {{
                            height = 927354;
                            iab = false;
                            id = "ipsam";
                            kind = "quisquam";
                            width = 962541;
                        }}),
                    }};
                    advertiserId = "optio";
                    allowScriptAccess = false;
                    archived = false;
                    artworkType = CreativeArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                    authoringSource = CreativeAuthoringSourceEnum.CREATIVE_AUTHORING_SOURCE_STUDIO;
                    authoringTool = CreativeAuthoringToolEnum.SWIFFY;
                    autoAdvanceImages = false;
                    backgroundColor = "assumenda";
                    backupImageClickThroughUrl = new CreativeClickThroughUrl() {{
                        computedClickThroughUrl = "optio";
                        customClickThroughUrl = "esse";
                        landingPageId = "a";
                    }};;
                    backupImageFeatures = new org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum[]{{
                        add(CreativeBackupImageFeaturesEnum.INPUT_ATTR_REQUIRED),
                        add(CreativeBackupImageFeaturesEnum.INPUT_ATTR_MAX),
                    }};
                    backupImageReportingLabel = "earum";
                    backupImageTargetWindow = new TargetWindow() {{
                        customHtml = "adipisci";
                        targetWindowOption = TargetWindowTargetWindowOptionEnum.NEW_WINDOW;
                    }};;
                    clickTags = new org.openapis.openapi.models.shared.ClickTag[]{{
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "voluptatem";
                                customClickThroughUrl = "eius";
                                landingPageId = "rerum";
                            }};
                            eventName = "nesciunt";
                            name = "Jacob Treutel DDS";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "ullam";
                                customClickThroughUrl = "vel";
                                landingPageId = "reprehenderit";
                            }};
                            eventName = "aut";
                            name = "Courtney Greenholt";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "illum";
                                customClickThroughUrl = "dolor";
                                landingPageId = "porro";
                            }};
                            eventName = "iste";
                            name = "Terry Rutherford";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "aperiam";
                                customClickThroughUrl = "consectetur";
                                landingPageId = "repellat";
                            }};
                            eventName = "voluptas";
                            name = "Bryan Moore";
                        }}),
                    }};
                    commercialId = "assumenda";
                    companionCreatives = new String[]{{
                        add("deserunt"),
                    }};
                    compatibility = new org.openapis.openapi.models.shared.CreativeCompatibilityEnum[]{{
                        add(CreativeCompatibilityEnum.DISPLAY_INTERSTITIAL),
                        add(CreativeCompatibilityEnum.APP_INTERSTITIAL),
                    }};
                    convertFlashToHtml5 = false;
                    counterCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "voluptatibus";
                            advertiserCustomEventName = "occaecati";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "quam";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "nesciunt";
                                customClickThroughUrl = "laudantium";
                                landingPageId = "nemo";
                            }};
                            id = "ab";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 541466;
                                    iab = false;
                                    id = "natus";
                                    kind = "culpa";
                                    width = 822084;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 476644;
                                    top = 887135;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Ms.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_BLANK;
                            videoReportingId = "reprehenderit";
                        }}),
                    }};
                    creativeAssetSelection = new CreativeAssetSelection() {{
                        defaultAssetId = "animi";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                assetId = "eveniet";
                                name = "Sherry Weissnat";
                                targetingTemplateId = "optio";
                            }}),
                            add(new Rule() {{
                                assetId = "similique";
                                name = "Lindsay Zemlak";
                                targetingTemplateId = "fugiat";
                            }}),
                            add(new Rule() {{
                                assetId = "recusandae";
                                name = "Maria DuBuque";
                                targetingTemplateId = "fuga";
                            }}),
                        }};
                    }};;
                    creativeAssets = new org.openapis.openapi.models.shared.CreativeAsset[]{{
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 956043;
                                    iab = false;
                                    id = "temporibus";
                                    kind = "sequi";
                                    width = 428898;
                                }}),
                                add(new Size() {{
                                    height = 526470;
                                    iab = false;
                                    id = "expedita";
                                    kind = "animi";
                                    width = 566160;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Verna Satterfield";
                                type = CreativeAssetIdTypeEnum.IMAGE;
                            }};
                            audioBitRate = 344198;
                            audioSampleRate = 561912;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "neque";
                                advertiserCustomEventName = "quis";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                                artworkLabel = "esse";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "autem";
                                    customClickThroughUrl = "tempora";
                                    landingPageId = "beatae";
                                }};
                                id = "dignissimos";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 158023;
                                        iab = false;
                                        id = "ratione";
                                        kind = "veritatis";
                                        width = 229625;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 192447;
                                        top = 926229;
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
                                videoReportingId = "modi";
                            }};
                            bitRate = 431617;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_IMAGE;
                            collapsedSize = new Size() {{
                                height = 800937;
                                iab = false;
                                id = "nemo";
                                kind = "architecto";
                                width = 425026;
                            }};
                            companionCreativeIds = new String[]{{
                                add("facilis"),
                            }};
                            customStartTimeValue = 727440;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_TYPE_DATETIME),
                                add(CreativeAssetDetectedFeaturesEnum.CSS_TRANSFORMS3_D),
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_ATTR_STEP),
                                add(CreativeAssetDetectedFeaturesEnum.CSS_ANIMATIONS),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_FLOATING;
                            duration = 439899;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_CUSTOM;
                            expandedDimension = new Size() {{
                                height = 251599;
                                iab = false;
                                id = "odit";
                                kind = "maxime";
                                width = 134798;
                            }};
                            fileSize = "magni";
                            flashVersion = 795035;
                            frameRate = 3267.75;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "ipsam";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "sequi";
                                etag = "quaerat";
                                id = "0495c5db-b3c5-47c1-a498-1e8aa257ddc1";
                                kind = "sint";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "fugit";
                            }};
                            mediaDuration = 9374.88;
                            mimeType = "quidem";
                            offset = new OffsetPosition() {{
                                left = 873429;
                                top = 895349;
                            }};
                            orientation = CreativeAssetOrientationEnum.PORTRAIT;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 250101;
                                top = 724043;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            progressiveServingUrl = "impedit";
                            pushdown = false;
                            pushdownDuration = 3303.58;
                            role = CreativeAssetRoleEnum.ADDITIONAL_FLASH;
                            size = new Size() {{
                                height = 436235;
                                iab = false;
                                id = "natus";
                                kind = "nulla";
                                width = 307848;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "architecto";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.WINDOW;
                            zIndex = 824149;
                            zipFilename = "reiciendis";
                            zipFilesize = "est";
                        }}),
                    }};
                    creativeFieldAssignments = new org.openapis.openapi.models.shared.CreativeFieldAssignment[]{{
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "iste";
                            creativeFieldValueId = "ex";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "odit";
                            creativeFieldValueId = "voluptatem";
                        }}),
                    }};
                    customKeyValues = new String[]{{
                        add("libero"),
                        add("vero"),
                    }};
                    dynamicAssetSelection = false;
                    exitCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "consequuntur";
                            advertiserCustomEventName = "quidem";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "animi";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "itaque";
                                customClickThroughUrl = "non";
                                landingPageId = "quia";
                            }};
                            id = "porro";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 104042;
                                    iab = false;
                                    id = "deserunt";
                                    kind = "fuga";
                                    width = 17342;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 73646;
                                    top = 17289;
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
                            videoReportingId = "culpa";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "quo";
                            advertiserCustomEventName = "sunt";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "iste";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "adipisci";
                                customClickThroughUrl = "quis";
                                landingPageId = "quis";
                            }};
                            id = "quos";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 408831;
                                    iab = false;
                                    id = "fugiat";
                                    kind = "dicta";
                                    width = 555988;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 963094;
                                    top = 574150;
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
                            videoReportingId = "est";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "numquam";
                            advertiserCustomEventName = "nam";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "fuga";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "odit";
                                customClickThroughUrl = "nam";
                                landingPageId = "asperiores";
                            }};
                            id = "quam";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 852024;
                                    iab = false;
                                    id = "ea";
                                    kind = "molestiae";
                                    width = 779350;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 643453;
                                    top = 519614;
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
                            videoReportingId = "excepturi";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "unde";
                            advertiserCustomEventName = "expedita";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "quasi";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "voluptas";
                                customClickThroughUrl = "quasi";
                                landingPageId = "magni";
                            }};
                            id = "numquam";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 242044;
                                    iab = false;
                                    id = "quis";
                                    kind = "nesciunt";
                                    width = 124198;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 503322;
                                    top = 464301;
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
                            videoReportingId = "ea";
                        }}),
                    }};
                    fsCommand = new FsCommand() {{
                        left = 518964;
                        positionOption = FsCommandPositionOptionEnum.DISTANCE_FROM_TOP_LEFT_CORNER;
                        top = 52571;
                        windowHeight = 194033;
                        windowWidth = 682054;
                    }};;
                    htmlCode = "assumenda";
                    htmlCodeLocked = false;
                    id = "modi";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "dolores";
                        etag = "beatae";
                        id = "bd43d1f0-cb0a-4000-beb2-2d9b3a70d94f";
                        kind = "fuga";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "iure";
                    }};;
                    kind = "labore";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "quasi";
                    }};;
                    latestTraffickedCreativeId = "cumque";
                    mediaDescription = "corporis";
                    mediaDuration = 4852.39;
                    name = "Keith Wiza";
                    overrideCss = "maxime";
                    progressOffset = new VideoOffset() {{
                        offsetPercentage = 162228;
                        offsetSeconds = 26722;
                    }};;
                    redirectUrl = "nostrum";
                    renderingId = "doloremque";
                    renderingIdDimensionValue = new DimensionValue() {{
                        dimensionName = "repellendus";
                        etag = "ratione";
                        id = "8dc3ce18-5472-4f9e-a691-66a8be3444ea";
                        kind = "porro";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "libero";
                    }};;
                    requiredFlashPluginVersion = "sequi";
                    requiredFlashVersion = 670598;
                    size = new Size() {{
                        height = 144727;
                        iab = false;
                        id = "totam";
                        kind = "dignissimos";
                        width = 362413;
                    }};;
                    skipOffset = new VideoOffset() {{
                        offsetPercentage = 779391;
                        offsetSeconds = 391793;
                    }};;
                    skippable = false;
                    sslCompliant = false;
                    sslOverride = false;
                    studioAdvertiserId = "quo";
                    studioCreativeId = "inventore";
                    studioTraffickedCreativeId = "voluptatibus";
                    subaccountId = "officiis";
                    thirdPartyBackupImageImpressionsUrl = "suscipit";
                    thirdPartyRichMediaImpressionsUrl = "perferendis";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyTrackingUrl[]{{
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.RICH_MEDIA_BACKUP_IMPRESSION;
                            url = "alias";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_PAUSE;
                            url = "repellendus";
                        }}),
                    }};
                    timerCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "deserunt";
                            advertiserCustomEventName = "error";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "laudantium";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "officia";
                                customClickThroughUrl = "repudiandae";
                                landingPageId = "nemo";
                            }};
                            id = "voluptatem";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 798559;
                                    iab = false;
                                    id = "vitae";
                                    kind = "vel";
                                    width = 376017;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 388490;
                                    top = 85105;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_POPUP;
                            videoReportingId = "excepturi";
                        }}),
                    }};
                    totalFileSize = "veritatis";
                    type = CreativeTypeEnum.INTERSTITIAL_INTERNAL_REDIRECT;
                    universalAdId = new UniversalAdId() {{
                        registry = UniversalAdIdRegistryEnum.AD_ID_ORG;
                        value = "similique";
                    }};;
                    version = 472980;
                }};;
                accessToken = "itaque";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "minima";
                key = "non";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "amet";
                uploadProtocol = "tenetur";
            }};            

            DfareportingCreativesInsertResponse res = sdk.creatives.dfareportingCreativesInsert(req, new DfareportingCreativesInsertSecurity("velit", "asperiores") {{
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

            DfareportingCreativesListRequest req = new DfareportingCreativesListRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quos";
                active = false;
                advertiserId = "esse";
                alt = AltEnum.JSON;
                archived = false;
                callback = "fugit";
                campaignId = "assumenda";
                companionCreativeIds = new String[]{{
                    add("molestiae"),
                    add("autem"),
                    add("aliquam"),
                }};
                creativeFieldIds = new String[]{{
                    add("nostrum"),
                    add("occaecati"),
                    add("asperiores"),
                    add("doloremque"),
                }};
                fields = "id";
                ids = new String[]{{
                    add("ea"),
                    add("placeat"),
                }};
                key = "necessitatibus";
                maxResults = 688114L;
                oauthToken = "cumque";
                pageToken = "culpa";
                prettyPrint = false;
                quotaUser = "pariatur";
                renderingIds = new String[]{{
                    add("consequuntur"),
                    add("omnis"),
                    add("maxime"),
                }};
                searchString = "officia";
                sizeIds = new String[]{{
                    add("natus"),
                    add("ab"),
                }};
                sortField = DfareportingCreativesListSortFieldEnum.NAME;
                sortOrder = DfareportingCreativesListSortOrderEnum.ASCENDING;
                studioCreativeId = "eligendi";
                types = new org.openapis.openapi.models.operations.DfareportingCreativesListTypesEnum[]{{
                    add(DfareportingCreativesListTypesEnum.RICH_MEDIA_IM_EXPAND),
                    add(DfareportingCreativesListTypesEnum.RICH_MEDIA_IM_EXPAND),
                    add(DfareportingCreativesListTypesEnum.RICH_MEDIA_DISPLAY_INTERSTITIAL),
                }};
                uploadType = "ab";
                uploadProtocol = "ex";
            }};            

            DfareportingCreativesListResponse res = sdk.creatives.dfareportingCreativesList(req, new DfareportingCreativesListSecurity("iure", "dolorem") {{
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

            DfareportingCreativesPatchRequest req = new DfareportingCreativesPatchRequest("minus", "ad") {{
                dollarXgafv = XgafvEnum.ONE;
                creative = new Creative() {{
                    accountId = "ipsa";
                    active = false;
                    adParameters = "nam";
                    adTagKeys = new String[]{{
                        add("vel"),
                        add("nisi"),
                    }};
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 93384;
                            iab = false;
                            id = "autem";
                            kind = "dolor";
                            width = 635903;
                        }}),
                        add(new Size() {{
                            height = 249541;
                            iab = false;
                            id = "suscipit";
                            kind = "amet";
                            width = 533457;
                        }}),
                    }};
                    advertiserId = "exercitationem";
                    allowScriptAccess = false;
                    archived = false;
                    artworkType = CreativeArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                    authoringSource = CreativeAuthoringSourceEnum.CREATIVE_AUTHORING_SOURCE_DCM;
                    authoringTool = CreativeAuthoringToolEnum.SWIFFY;
                    autoAdvanceImages = false;
                    backgroundColor = "tempore";
                    backupImageClickThroughUrl = new CreativeClickThroughUrl() {{
                        computedClickThroughUrl = "fugit";
                        customClickThroughUrl = "nostrum";
                        landingPageId = "magni";
                    }};;
                    backupImageFeatures = new org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum[]{{
                        add(CreativeBackupImageFeaturesEnum.INPUT_TYPE_WEEK),
                    }};
                    backupImageReportingLabel = "perspiciatis";
                    backupImageTargetWindow = new TargetWindow() {{
                        customHtml = "asperiores";
                        targetWindowOption = TargetWindowTargetWindowOptionEnum.NEW_WINDOW;
                    }};;
                    clickTags = new org.openapis.openapi.models.shared.ClickTag[]{{
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "ipsa";
                                customClickThroughUrl = "esse";
                                landingPageId = "consequuntur";
                            }};
                            eventName = "aliquam";
                            name = "Melinda Powlowski";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "modi";
                                customClickThroughUrl = "alias";
                                landingPageId = "nam";
                            }};
                            eventName = "minus";
                            name = "Regina Weissnat";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "voluptatem";
                                customClickThroughUrl = "at";
                                landingPageId = "nisi";
                            }};
                            eventName = "quis";
                            name = "Lorena Schumm";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "eos";
                                customClickThroughUrl = "laborum";
                                landingPageId = "sint";
                            }};
                            eventName = "incidunt";
                            name = "Brandon Beatty";
                        }}),
                    }};
                    commercialId = "perspiciatis";
                    companionCreatives = new String[]{{
                        add("debitis"),
                    }};
                    compatibility = new org.openapis.openapi.models.shared.CreativeCompatibilityEnum[]{{
                        add(CreativeCompatibilityEnum.DISPLAY_INTERSTITIAL),
                        add(CreativeCompatibilityEnum.DISPLAY),
                        add(CreativeCompatibilityEnum.IN_STREAM_VIDEO),
                    }};
                    convertFlashToHtml5 = false;
                    counterCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "hic";
                            advertiserCustomEventName = "labore";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "voluptas";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "praesentium";
                                customClickThroughUrl = "veniam";
                                landingPageId = "ab";
                            }};
                            id = "minima";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 391667;
                                    iab = false;
                                    id = "repellat";
                                    kind = "sapiente";
                                    width = 952411;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 477826;
                                    top = 228618;
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
                            videoReportingId = "nostrum";
                        }}),
                    }};
                    creativeAssetSelection = new CreativeAssetSelection() {{
                        defaultAssetId = "tempora";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                assetId = "facere";
                                name = "Greg Ullrich";
                                targetingTemplateId = "minima";
                            }}),
                            add(new Rule() {{
                                assetId = "dolore";
                                name = "Emily Mayert";
                                targetingTemplateId = "laborum";
                            }}),
                            add(new Rule() {{
                                assetId = "sapiente";
                                name = "Ray Dach";
                                targetingTemplateId = "assumenda";
                            }}),
                            add(new Rule() {{
                                assetId = "iure";
                                name = "Dawn Langworth";
                                targetingTemplateId = "incidunt";
                            }}),
                        }};
                    }};;
                    creativeAssets = new org.openapis.openapi.models.shared.CreativeAsset[]{{
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 11290;
                                    iab = false;
                                    id = "nesciunt";
                                    kind = "error";
                                    width = 899943;
                                }}),
                                add(new Size() {{
                                    height = 635396;
                                    iab = false;
                                    id = "quis";
                                    kind = "asperiores";
                                    width = 610335;
                                }}),
                                add(new Size() {{
                                    height = 688512;
                                    iab = false;
                                    id = "sunt";
                                    kind = "atque";
                                    width = 630017;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Jeannie Schuppe V";
                                type = CreativeAssetIdTypeEnum.IMAGE;
                            }};
                            audioBitRate = 215813;
                            audioSampleRate = 611361;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "nulla";
                                advertiserCustomEventName = "dolorum";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                                artworkLabel = "assumenda";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "voluptatum";
                                    customClickThroughUrl = "eveniet";
                                    landingPageId = "quibusdam";
                                }};
                                id = "doloremque";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 825211;
                                        iab = false;
                                        id = "nobis";
                                        kind = "laboriosam";
                                        width = 457869;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 90809;
                                        top = 835460;
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
                                videoReportingId = "quae";
                            }};
                            bitRate = 878361;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_FLASH;
                            collapsedSize = new Size() {{
                                height = 633299;
                                iab = false;
                                id = "asperiores";
                                kind = "quasi";
                                width = 334177;
                            }};
                            companionCreativeIds = new String[]{{
                                add("consequuntur"),
                                add("aut"),
                                add("maxime"),
                            }};
                            customStartTimeValue = 591977;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.WEB_SQL_DATABASE),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_INPAGE;
                            duration = 741454;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_AUTO;
                            expandedDimension = new Size() {{
                                height = 615698;
                                iab = false;
                                id = "aperiam";
                                kind = "dicta";
                                width = 995713;
                            }};
                            fileSize = "dolores";
                            flashVersion = 691129;
                            frameRate = 8451.15;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "totam";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "provident";
                                etag = "maxime";
                                id = "8a32639d-a5b7-4b69-82b8-81a94f643664";
                                kind = "mollitia";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "hic";
                            }};
                            mediaDuration = 437.86;
                            mimeType = "id";
                            offset = new OffsetPosition() {{
                                left = 993942;
                                top = 525160;
                            }};
                            orientation = CreativeAssetOrientationEnum.SQUARE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 416367;
                                top = 617374;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            progressiveServingUrl = "molestiae";
                            pushdown = false;
                            pushdownDuration = 2214.09;
                            role = CreativeAssetRoleEnum.BACKUP_IMAGE;
                            size = new Size() {{
                                height = 858434;
                                iab = false;
                                id = "occaecati";
                                kind = "doloribus";
                                width = 730247;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "tenetur";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.WINDOW;
                            zIndex = 296853;
                            zipFilename = "voluptate";
                            zipFilesize = "aliquid";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 182952;
                                    iab = false;
                                    id = "animi";
                                    kind = "vero";
                                    width = 555313;
                                }}),
                                add(new Size() {{
                                    height = 824078;
                                    iab = false;
                                    id = "optio";
                                    kind = "quo";
                                    width = 354161;
                                }}),
                                add(new Size() {{
                                    height = 57290;
                                    iab = false;
                                    id = "placeat";
                                    kind = "quas";
                                    width = 635302;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Ruby Sauer";
                                type = CreativeAssetIdTypeEnum.VIDEO;
                            }};
                            audioBitRate = 500812;
                            audioSampleRate = 294624;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "rem";
                                advertiserCustomEventName = "provident";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                                artworkLabel = "alias";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "minima";
                                    customClickThroughUrl = "eaque";
                                    landingPageId = "mollitia";
                                }};
                                id = "alias";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 25872;
                                        iab = false;
                                        id = "accusamus";
                                        kind = "sint";
                                        width = 415589;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 376472;
                                        top = 907420;
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
                                videoReportingId = "eum";
                            }};
                            bitRate = 821579;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_VIDEO;
                            collapsedSize = new Size() {{
                                height = 206814;
                                iab = false;
                                id = "inventore";
                                kind = "omnis";
                                width = 309694;
                            }};
                            companionCreativeIds = new String[]{{
                                add("omnis"),
                            }};
                            customStartTimeValue = 547191;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_ATTR_PLACEHOLDER),
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_ATTR_PATTERN),
                                add(CreativeAssetDetectedFeaturesEnum.CSS_GRADIENTS),
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_TYPE_COLOR),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING;
                            duration = 157751;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_AUTO;
                            expandedDimension = new Size() {{
                                height = 583240;
                                iab = false;
                                id = "praesentium";
                                kind = "accusamus";
                                width = 856859;
                            }};
                            fileSize = "ipsum";
                            flashVersion = 863957;
                            frameRate = 2276.69;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "deserunt";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "nobis";
                                etag = "quam";
                                id = "ca3c5ca8-649a-470c-bd5d-6989b7206451";
                                kind = "ipsa";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "voluptate";
                            }};
                            mediaDuration = 8494.86;
                            mimeType = "et";
                            offset = new OffsetPosition() {{
                                left = 596802;
                                top = 882157;
                            }};
                            orientation = CreativeAssetOrientationEnum.SQUARE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 529677;
                                top = 188008;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL;
                            progressiveServingUrl = "perspiciatis";
                            pushdown = false;
                            pushdownDuration = 1631.32;
                            role = CreativeAssetRoleEnum.TRANSCODED_AUDIO;
                            size = new Size() {{
                                height = 842689;
                                iab = false;
                                id = "inventore";
                                kind = "ut";
                                width = 732016;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "fuga";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.OPAQUE;
                            zIndex = 795203;
                            zipFilename = "sunt";
                            zipFilesize = "sint";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 301452;
                                    iab = false;
                                    id = "veniam";
                                    kind = "quaerat";
                                    width = 328853;
                                }}),
                                add(new Size() {{
                                    height = 887620;
                                    iab = false;
                                    id = "unde";
                                    kind = "ullam";
                                    width = 315990;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_LEFT;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Henry Langosh";
                                type = CreativeAssetIdTypeEnum.HTML_IMAGE;
                            }};
                            audioBitRate = 300759;
                            audioSampleRate = 602932;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "consequatur";
                                advertiserCustomEventName = "dicta";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                                artworkLabel = "iure";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "quaerat";
                                    customClickThroughUrl = "sequi";
                                    landingPageId = "culpa";
                                }};
                                id = "facere";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 129870;
                                        iab = false;
                                        id = "nulla";
                                        kind = "laborum";
                                        width = 657096;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 463832;
                                        top = 519520;
                                    }};
                                    positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                    showAddressBar = false;
                                    showMenuBar = false;
                                    showScrollBar = false;
                                    showStatusBar = false;
                                    showToolBar = false;
                                    title = "Miss";
                                }};
                                targetType = CreativeCustomEventTargetTypeEnum.TARGET_PARENT;
                                videoReportingId = "culpa";
                            }};
                            bitRate = 187910;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_DATA;
                            collapsedSize = new Size() {{
                                height = 152238;
                                iab = false;
                                id = "amet";
                                kind = "aut";
                                width = 917006;
                            }};
                            companionCreativeIds = new String[]{{
                                add("tenetur"),
                                add("dignissimos"),
                                add("dolor"),
                                add("totam"),
                            }};
                            customStartTimeValue = 105273;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_TYPE_MONTH),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_FLOATING;
                            duration = 112931;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_NONE;
                            expandedDimension = new Size() {{
                                height = 249071;
                                iab = false;
                                id = "laudantium";
                                kind = "consequuntur";
                                width = 700872;
                            }};
                            fileSize = "nulla";
                            flashVersion = 499270;
                            frameRate = 9089.16;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "repellendus";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "enim";
                                etag = "voluptas";
                                id = "507621c5-8f4d-4739-a564-c20a0711a961";
                                kind = "illum";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "ut";
                            }};
                            mediaDuration = 6468.54;
                            mimeType = "dignissimos";
                            offset = new OffsetPosition() {{
                                left = 860411;
                                top = 706786;
                            }};
                            orientation = CreativeAssetOrientationEnum.SQUARE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 545201;
                                top = 986368;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL;
                            progressiveServingUrl = "sed";
                            pushdown = false;
                            pushdownDuration = 8261.14;
                            role = CreativeAssetRoleEnum.TRANSCODED_VIDEO;
                            size = new Size() {{
                                height = 596802;
                                iab = false;
                                id = "odit";
                                kind = "eligendi";
                                width = 939305;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "atque";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.OPAQUE;
                            zIndex = 174915;
                            zipFilename = "placeat";
                            zipFilesize = "nam";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 103547;
                                    iab = false;
                                    id = "consequuntur";
                                    kind = "impedit";
                                    width = 533350;
                                }}),
                                add(new Size() {{
                                    height = 457289;
                                    iab = false;
                                    id = "voluptatum";
                                    kind = "aspernatur";
                                    width = 260929;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Lewis Goodwin";
                                type = CreativeAssetIdTypeEnum.HTML;
                            }};
                            audioBitRate = 501836;
                            audioSampleRate = 944690;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "blanditiis";
                                advertiserCustomEventName = "maiores";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                                artworkLabel = "harum";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "alias";
                                    customClickThroughUrl = "tempore";
                                    landingPageId = "quod";
                                }};
                                id = "totam";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 888127;
                                        iab = false;
                                        id = "dicta";
                                        kind = "maiores";
                                        width = 175676;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 19551;
                                        top = 432167;
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
                                videoReportingId = "quas";
                            }};
                            bitRate = 192718;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_FLASH;
                            collapsedSize = new Size() {{
                                height = 838402;
                                iab = false;
                                id = "doloremque";
                                kind = "aperiam";
                                width = 511103;
                            }};
                            companionCreativeIds = new String[]{{
                                add("voluptatem"),
                            }};
                            customStartTimeValue = 593163;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.WEBGL),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_EXPANDING;
                            duration = 470523;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_AUTO;
                            expandedDimension = new Size() {{
                                height = 377759;
                                iab = false;
                                id = "laboriosam";
                                kind = "ducimus";
                                width = 241750;
                            }};
                            fileSize = "doloribus";
                            flashVersion = 187770;
                            frameRate = 6638.67;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "ex";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "quos";
                                etag = "dicta";
                                id = "c5768dce-7424-409a-a15e-08601489a5f6";
                                kind = "sequi";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "neque";
                            }};
                            mediaDuration = 6489.85;
                            mimeType = "tenetur";
                            offset = new OffsetPosition() {{
                                left = 247972;
                                top = 864641;
                            }};
                            orientation = CreativeAssetOrientationEnum.SQUARE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 616054;
                                top = 840664;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PERCENT;
                            progressiveServingUrl = "dolorem";
                            pushdown = false;
                            pushdownDuration = 2439.65;
                            role = CreativeAssetRoleEnum.PARENT_AUDIO;
                            size = new Size() {{
                                height = 811245;
                                iab = false;
                                id = "pariatur";
                                kind = "vel";
                                width = 248112;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "praesentium";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.OPAQUE;
                            zIndex = 929775;
                            zipFilename = "non";
                            zipFilesize = "dolorum";
                        }}),
                    }};
                    creativeFieldAssignments = new org.openapis.openapi.models.shared.CreativeFieldAssignment[]{{
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "id";
                            creativeFieldValueId = "natus";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "quas";
                            creativeFieldValueId = "saepe";
                        }}),
                    }};
                    customKeyValues = new String[]{{
                        add("assumenda"),
                        add("maiores"),
                    }};
                    dynamicAssetSelection = false;
                    exitCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "in";
                            advertiserCustomEventName = "debitis";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "nostrum";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "totam";
                                customClickThroughUrl = "omnis";
                                landingPageId = "veniam";
                            }};
                            id = "nostrum";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 814971;
                                    iab = false;
                                    id = "aliquam";
                                    kind = "vitae";
                                    width = 214506;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 923327;
                                    top = 78486;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "praesentium";
                        }}),
                    }};
                    fsCommand = new FsCommand() {{
                        left = 175709;
                        positionOption = FsCommandPositionOptionEnum.CENTERED;
                        top = 115657;
                        windowHeight = 55124;
                        windowWidth = 580877;
                    }};;
                    htmlCode = "perferendis";
                    htmlCodeLocked = false;
                    id = "iure";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "cum";
                        etag = "facere";
                        id = "354c092b-d734-4f02-849d-86f4bb20fe5d";
                        kind = "provident";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "sunt";
                    }};;
                    kind = "quod";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "expedita";
                    }};;
                    latestTraffickedCreativeId = "sapiente";
                    mediaDescription = "itaque";
                    mediaDuration = 4920.7;
                    name = "Miriam Schowalter";
                    overrideCss = "modi";
                    progressOffset = new VideoOffset() {{
                        offsetPercentage = 314838;
                        offsetSeconds = 649661;
                    }};;
                    redirectUrl = "sed";
                    renderingId = "molestiae";
                    renderingIdDimensionValue = new DimensionValue() {{
                        dimensionName = "delectus";
                        etag = "ex";
                        id = "9e2c9e6d-10e9-4db3-ad4c-6b03108d9c33";
                        kind = "in";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "nihil";
                    }};;
                    requiredFlashPluginVersion = "velit";
                    requiredFlashVersion = 11336;
                    size = new Size() {{
                        height = 523613;
                        iab = false;
                        id = "odit";
                        kind = "libero";
                        width = 624300;
                    }};;
                    skipOffset = new VideoOffset() {{
                        offsetPercentage = 278751;
                        offsetSeconds = 992821;
                    }};;
                    skippable = false;
                    sslCompliant = false;
                    sslOverride = false;
                    studioAdvertiserId = "eos";
                    studioCreativeId = "mollitia";
                    studioTraffickedCreativeId = "distinctio";
                    subaccountId = "dicta";
                    thirdPartyBackupImageImpressionsUrl = "earum";
                    thirdPartyRichMediaImpressionsUrl = "possimus";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyTrackingUrl[]{{
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_PAUSE;
                            url = "iusto";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.CLICK_TRACKING;
                            url = "voluptates";
                        }}),
                    }};
                    timerCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "impedit";
                            advertiserCustomEventName = "amet";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "commodi";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "enim";
                                customClickThroughUrl = "eaque";
                                landingPageId = "officia";
                            }};
                            id = "tempora";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 431035;
                                    iab = false;
                                    id = "molestiae";
                                    kind = "architecto";
                                    width = 304199;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 215675;
                                    top = 471358;
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
                            videoReportingId = "itaque";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "consequatur";
                            advertiserCustomEventName = "recusandae";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "error";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "nemo";
                                customClickThroughUrl = "unde";
                                landingPageId = "numquam";
                            }};
                            id = "temporibus";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 606943;
                                    iab = false;
                                    id = "amet";
                                    kind = "deserunt";
                                    width = 495515;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 267981;
                                    top = 774053;
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
                            videoReportingId = "sed";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "a";
                            advertiserCustomEventName = "saepe";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "quidem";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "cum";
                                customClickThroughUrl = "dolore";
                                landingPageId = "quibusdam";
                            }};
                            id = "rerum";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 539426;
                                    iab = false;
                                    id = "tempore";
                                    kind = "odio";
                                    width = 444318;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 556257;
                                    top = 912819;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_TOP;
                            videoReportingId = "officiis";
                        }}),
                    }};
                    totalFileSize = "quasi";
                    type = CreativeTypeEnum.DISPLAY;
                    universalAdId = new UniversalAdId() {{
                        registry = UniversalAdIdRegistryEnum.OTHER;
                        value = "impedit";
                    }};;
                    version = 973903;
                }};;
                accessToken = "ad";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "expedita";
                key = "laborum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "explicabo";
                uploadProtocol = "eligendi";
            }};            

            DfareportingCreativesPatchResponse res = sdk.creatives.dfareportingCreativesPatch(req, new DfareportingCreativesPatchSecurity("nam", "placeat") {{
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

            DfareportingCreativesUpdateRequest req = new DfareportingCreativesUpdateRequest("aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                creative = new Creative() {{
                    accountId = "adipisci";
                    active = false;
                    adParameters = "ipsam";
                    adTagKeys = new String[]{{
                        add("enim"),
                        add("eveniet"),
                        add("eum"),
                        add("exercitationem"),
                    }};
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 632648;
                            iab = false;
                            id = "alias";
                            kind = "eos";
                            width = 550066;
                        }}),
                        add(new Size() {{
                            height = 789760;
                            iab = false;
                            id = "dolor";
                            kind = "accusamus";
                            width = 573652;
                        }}),
                        add(new Size() {{
                            height = 318672;
                            iab = false;
                            id = "veritatis";
                            kind = "mollitia";
                            width = 84708;
                        }}),
                        add(new Size() {{
                            height = 876418;
                            iab = false;
                            id = "ratione";
                            kind = "aut";
                            width = 985056;
                        }}),
                    }};
                    advertiserId = "fugiat";
                    allowScriptAccess = false;
                    archived = false;
                    artworkType = CreativeArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                    authoringSource = CreativeAuthoringSourceEnum.CREATIVE_AUTHORING_SOURCE_STUDIO;
                    authoringTool = CreativeAuthoringToolEnum.NINJA;
                    autoAdvanceImages = false;
                    backgroundColor = "commodi";
                    backupImageClickThroughUrl = new CreativeClickThroughUrl() {{
                        computedClickThroughUrl = "magnam";
                        customClickThroughUrl = "rem";
                        landingPageId = "occaecati";
                    }};;
                    backupImageFeatures = new org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum[]{{
                        add(CreativeBackupImageFeaturesEnum.INPUT_ATTR_AUTOFOCUS),
                        add(CreativeBackupImageFeaturesEnum.INPUT_TYPE_DATETIME_LOCAL),
                        add(CreativeBackupImageFeaturesEnum.INPUT_ATTR_LIST),
                        add(CreativeBackupImageFeaturesEnum.INPUT_ATTR_MIN),
                    }};
                    backupImageReportingLabel = "laboriosam";
                    backupImageTargetWindow = new TargetWindow() {{
                        customHtml = "odio";
                        targetWindowOption = TargetWindowTargetWindowOptionEnum.NEW_WINDOW;
                    }};;
                    clickTags = new org.openapis.openapi.models.shared.ClickTag[]{{
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "veritatis";
                                customClickThroughUrl = "consectetur";
                                landingPageId = "fuga";
                            }};
                            eventName = "quasi";
                            name = "Jan Kautzer";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "excepturi";
                                customClickThroughUrl = "fugit";
                                landingPageId = "eius";
                            }};
                            eventName = "perspiciatis";
                            name = "Renee Morissette";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "corrupti";
                                customClickThroughUrl = "ducimus";
                                landingPageId = "asperiores";
                            }};
                            eventName = "veniam";
                            name = "Dwayne Graham";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "nesciunt";
                                customClickThroughUrl = "ex";
                                landingPageId = "tempore";
                            }};
                            eventName = "rem";
                            name = "Opal Feest";
                        }}),
                    }};
                    commercialId = "a";
                    companionCreatives = new String[]{{
                        add("dolore"),
                        add("dicta"),
                    }};
                    compatibility = new org.openapis.openapi.models.shared.CreativeCompatibilityEnum[]{{
                        add(CreativeCompatibilityEnum.IN_STREAM_VIDEO),
                        add(CreativeCompatibilityEnum.DISPLAY),
                    }};
                    convertFlashToHtml5 = false;
                    counterCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "magnam";
                            advertiserCustomEventName = "molestias";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "error";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "delectus";
                                customClickThroughUrl = "dicta";
                                landingPageId = "ratione";
                            }};
                            id = "delectus";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 284172;
                                    iab = false;
                                    id = "officiis";
                                    kind = "itaque";
                                    width = 858094;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 718293;
                                    top = 923982;
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
                            videoReportingId = "reiciendis";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "commodi";
                            advertiserCustomEventName = "sit";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "molestias";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "ipsam";
                                customClickThroughUrl = "rem";
                                landingPageId = "molestias";
                            }};
                            id = "eius";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 898366;
                                    iab = false;
                                    id = "culpa";
                                    kind = "in";
                                    width = 398606;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 227452;
                                    top = 853721;
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
                            videoReportingId = "fugit";
                        }}),
                    }};
                    creativeAssetSelection = new CreativeAssetSelection() {{
                        defaultAssetId = "voluptate";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                assetId = "quis";
                                name = "Darryl Larkin II";
                                targetingTemplateId = "blanditiis";
                            }}),
                            add(new Rule() {{
                                assetId = "nulla";
                                name = "Rosemarie Hansen";
                                targetingTemplateId = "debitis";
                            }}),
                            add(new Rule() {{
                                assetId = "minima";
                                name = "Kim Hegmann";
                                targetingTemplateId = "dolorem";
                            }}),
                        }};
                    }};;
                    creativeAssets = new org.openapis.openapi.models.shared.CreativeAsset[]{{
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 29144;
                                    iab = false;
                                    id = "maiores";
                                    kind = "unde";
                                    width = 441239;
                                }}),
                                add(new Size() {{
                                    height = 27979;
                                    iab = false;
                                    id = "placeat";
                                    kind = "dolore";
                                    width = 168367;
                                }}),
                                add(new Size() {{
                                    height = 973003;
                                    iab = false;
                                    id = "quod";
                                    kind = "provident";
                                    width = 962468;
                                }}),
                                add(new Size() {{
                                    height = 293013;
                                    iab = false;
                                    id = "totam";
                                    kind = "labore";
                                    width = 255720;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Silvia Klein";
                                type = CreativeAssetIdTypeEnum.VIDEO;
                            }};
                            audioBitRate = 566649;
                            audioSampleRate = 433431;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "doloremque";
                                advertiserCustomEventName = "iure";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "cumque";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "earum";
                                    customClickThroughUrl = "earum";
                                    landingPageId = "culpa";
                                }};
                                id = "vel";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 957139;
                                        iab = false;
                                        id = "perspiciatis";
                                        kind = "ratione";
                                        width = 730283;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 563937;
                                        top = 3570;
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
                                videoReportingId = "deleniti";
                            }};
                            bitRate = 755848;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_IMAGE;
                            collapsedSize = new Size() {{
                                height = 333150;
                                iab = false;
                                id = "nam";
                                kind = "accusamus";
                                width = 114752;
                            }};
                            companionCreativeIds = new String[]{{
                                add("corporis"),
                            }};
                            customStartTimeValue = 278535;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_ATTR_LIST),
                                add(CreativeAssetDetectedFeaturesEnum.CSS_REFLECTIONS),
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_TYPE_TEL),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_BACKDROP;
                            duration = 295284;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_CUSTOM;
                            expandedDimension = new Size() {{
                                height = 907826;
                                iab = false;
                                id = "odio";
                                kind = "voluptate";
                                width = 130289;
                            }};
                            fileSize = "architecto";
                            flashVersion = 18584;
                            frameRate = 8190.52;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "dicta";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "delectus";
                                etag = "voluptas";
                                id = "558c99c7-22d2-4bc0-b940-87d9caae042d";
                                kind = "temporibus";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "placeat";
                            }};
                            mediaDuration = 6669.4;
                            mimeType = "est";
                            offset = new OffsetPosition() {{
                                left = 807944;
                                top = 577219;
                            }};
                            orientation = CreativeAssetOrientationEnum.SQUARE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 266752;
                                top = 795501;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PERCENT;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PERCENT;
                            progressiveServingUrl = "beatae";
                            pushdown = false;
                            pushdownDuration = 8007.81;
                            role = CreativeAssetRoleEnum.TRANSCODED_AUDIO;
                            size = new Size() {{
                                height = 909014;
                                iab = false;
                                id = "sint";
                                kind = "saepe";
                                width = 73445;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "nulla";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.TRANSPARENT;
                            zIndex = 565359;
                            zipFilename = "ipsa";
                            zipFilesize = "amet";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 45546;
                                    iab = false;
                                    id = "ducimus";
                                    kind = "doloribus";
                                    width = 230476;
                                }}),
                                add(new Size() {{
                                    height = 495178;
                                    iab = false;
                                    id = "deleniti";
                                    kind = "dolor";
                                    width = 65954;
                                }}),
                                add(new Size() {{
                                    height = 575959;
                                    iab = false;
                                    id = "quos";
                                    kind = "sequi";
                                    width = 854466;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_RIGHT;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Derek Gutmann";
                                type = CreativeAssetIdTypeEnum.VIDEO;
                            }};
                            audioBitRate = 292881;
                            audioSampleRate = 415003;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "commodi";
                                advertiserCustomEventName = "quis";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "iusto";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "ipsam";
                                    customClickThroughUrl = "consequatur";
                                    landingPageId = "fugit";
                                }};
                                id = "dolorem";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 198812;
                                        iab = false;
                                        id = "maxime";
                                        kind = "inventore";
                                        width = 264670;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 467657;
                                        top = 112399;
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
                                videoReportingId = "dolorum";
                            }};
                            bitRate = 658726;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_IMAGE;
                            collapsedSize = new Size() {{
                                height = 420223;
                                iab = false;
                                id = "illum";
                                kind = "at";
                                width = 940765;
                            }};
                            companionCreativeIds = new String[]{{
                                add("laborum"),
                                add("quidem"),
                            }};
                            customStartTimeValue = 860224;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.CSS_TRANSFORMS3_D),
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_ATTR_PATTERN),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_FLASH_IN_FLASH;
                            duration = 774946;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_AUTO;
                            expandedDimension = new Size() {{
                                height = 967858;
                                iab = false;
                                id = "impedit";
                                kind = "aspernatur";
                                width = 748056;
                            }};
                            fileSize = "voluptatum";
                            flashVersion = 401321;
                            frameRate = 1322.68;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "est";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "voluptatem";
                                etag = "aut";
                                id = "bef69e10-0157-4630-bda7-afded84a35a4";
                                kind = "beatae";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "nesciunt";
                            }};
                            mediaDuration = 5454;
                            mimeType = "officiis";
                            offset = new OffsetPosition() {{
                                left = 81671;
                                top = 642391;
                            }};
                            orientation = CreativeAssetOrientationEnum.PORTRAIT;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 196495;
                                top = 321724;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            progressiveServingUrl = "qui";
                            pushdown = false;
                            pushdownDuration = 3814.45;
                            role = CreativeAssetRoleEnum.OTHER;
                            size = new Size() {{
                                height = 901496;
                                iab = false;
                                id = "ipsum";
                                kind = "ratione";
                                width = 713645;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "maiores";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.WINDOW;
                            zIndex = 491500;
                            zipFilename = "dicta";
                            zipFilesize = "id";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 999315;
                                    iab = false;
                                    id = "modi";
                                    kind = "ex";
                                    width = 749037;
                                }}),
                                add(new Size() {{
                                    height = 811404;
                                    iab = false;
                                    id = "mollitia";
                                    kind = "architecto";
                                    width = 62736;
                                }}),
                                add(new Size() {{
                                    height = 11736;
                                    iab = false;
                                    id = "commodi";
                                    kind = "delectus";
                                    width = 887137;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_BOTTOM;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Mr. Latoya Klocko";
                                type = CreativeAssetIdTypeEnum.IMAGE;
                            }};
                            audioBitRate = 502432;
                            audioSampleRate = 756571;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "tenetur";
                                advertiserCustomEventName = "deleniti";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "necessitatibus";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "iste";
                                    customClickThroughUrl = "reiciendis";
                                    landingPageId = "nihil";
                                }};
                                id = "libero";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 596393;
                                        iab = false;
                                        id = "occaecati";
                                        kind = "officia";
                                        width = 366708;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 337471;
                                        top = 42525;
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
                                videoReportingId = "commodi";
                            }};
                            bitRate = 907825;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_DATA;
                            collapsedSize = new Size() {{
                                height = 222663;
                                iab = false;
                                id = "ratione";
                                kind = "velit";
                                width = 742645;
                            }};
                            companionCreativeIds = new String[]{{
                                add("accusantium"),
                                add("quo"),
                                add("officiis"),
                            }};
                            customStartTimeValue = 514778;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_TYPE_WEEK),
                                add(CreativeAssetDetectedFeaturesEnum.INDEXED_DB),
                                add(CreativeAssetDetectedFeaturesEnum.DRAG_AND_DROP),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_OVERLAY;
                            duration = 231283;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_AUTO;
                            expandedDimension = new Size() {{
                                height = 642434;
                                iab = false;
                                id = "cupiditate";
                                kind = "rem";
                                width = 410239;
                            }};
                            fileSize = "debitis";
                            flashVersion = 743023;
                            frameRate = 4878.01;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "eveniet";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "beatae";
                                etag = "dolore";
                                id = "ca564089-1500-4970-99a4-8f88ece7bf90";
                                kind = "non";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "consequatur";
                            }};
                            mediaDuration = 1008.76;
                            mimeType = "dicta";
                            offset = new OffsetPosition() {{
                                left = 25476;
                                top = 320294;
                            }};
                            orientation = CreativeAssetOrientationEnum.SQUARE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 196728;
                                top = 512220;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PERCENT;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL;
                            progressiveServingUrl = "deleniti";
                            pushdown = false;
                            pushdownDuration = 981.72;
                            role = CreativeAssetRoleEnum.ADDITIONAL_FLASH;
                            size = new Size() {{
                                height = 133790;
                                iab = false;
                                id = "quod";
                                kind = "suscipit";
                                width = 731157;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "harum";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.WINDOW;
                            zIndex = 502675;
                            zipFilename = "culpa";
                            zipFilesize = "doloremque";
                        }}),
                    }};
                    creativeFieldAssignments = new org.openapis.openapi.models.shared.CreativeFieldAssignment[]{{
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "vel";
                            creativeFieldValueId = "enim";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "ducimus";
                            creativeFieldValueId = "quidem";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "in";
                            creativeFieldValueId = "at";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "alias";
                            creativeFieldValueId = "consectetur";
                        }}),
                    }};
                    customKeyValues = new String[]{{
                        add("beatae"),
                        add("numquam"),
                        add("praesentium"),
                    }};
                    dynamicAssetSelection = false;
                    exitCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "hic";
                            advertiserCustomEventName = "blanditiis";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "repudiandae";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "voluptatem";
                                customClickThroughUrl = "tenetur";
                                landingPageId = "aut";
                            }};
                            id = "ex";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 587748;
                                    iab = false;
                                    id = "fugiat";
                                    kind = "atque";
                                    width = 106800;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 15706;
                                    top = 412568;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Ms.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_POPUP;
                            videoReportingId = "unde";
                        }}),
                    }};
                    fsCommand = new FsCommand() {{
                        left = 452638;
                        positionOption = FsCommandPositionOptionEnum.DISTANCE_FROM_TOP_LEFT_CORNER;
                        top = 124387;
                        windowHeight = 320689;
                        windowWidth = 155920;
                    }};;
                    htmlCode = "aspernatur";
                    htmlCodeLocked = false;
                    id = "iste";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "molestiae";
                        etag = "minima";
                        id = "10da8031-2292-4cc6-9c2a-702bb97ee102";
                        kind = "fugiat";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "sed";
                    }};;
                    kind = "fugiat";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "recusandae";
                    }};;
                    latestTraffickedCreativeId = "neque";
                    mediaDescription = "minima";
                    mediaDuration = 9483.74;
                    name = "Miss Frankie Bailey";
                    overrideCss = "dolorem";
                    progressOffset = new VideoOffset() {{
                        offsetPercentage = 241364;
                        offsetSeconds = 916617;
                    }};;
                    redirectUrl = "similique";
                    renderingId = "id";
                    renderingIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quidem";
                        etag = "ut";
                        id = "5402ac17-04bf-41cc-9fc6-1aae5eb5f0c4";
                        kind = "molestias";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "soluta";
                    }};;
                    requiredFlashPluginVersion = "ullam";
                    requiredFlashVersion = 468332;
                    size = new Size() {{
                        height = 284096;
                        iab = false;
                        id = "incidunt";
                        kind = "quibusdam";
                        width = 40634;
                    }};;
                    skipOffset = new VideoOffset() {{
                        offsetPercentage = 524463;
                        offsetSeconds = 677203;
                    }};;
                    skippable = false;
                    sslCompliant = false;
                    sslOverride = false;
                    studioAdvertiserId = "explicabo";
                    studioCreativeId = "odit";
                    studioTraffickedCreativeId = "laboriosam";
                    subaccountId = "esse";
                    thirdPartyBackupImageImpressionsUrl = "est";
                    thirdPartyRichMediaImpressionsUrl = "est";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyTrackingUrl[]{{
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.RICH_MEDIA_BACKUP_IMPRESSION;
                            url = "esse";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_STOP;
                            url = "repudiandae";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_MIDPOINT;
                            url = "minus";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_REWIND;
                            url = "illo";
                        }}),
                    }};
                    timerCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "placeat";
                            advertiserCustomEventName = "sequi";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "tempore";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "cumque";
                                customClickThroughUrl = "distinctio";
                                landingPageId = "rem";
                            }};
                            id = "consectetur";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 858802;
                                    iab = false;
                                    id = "magni";
                                    kind = "dolor";
                                    width = 459639;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 537738;
                                    top = 649690;
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
                            advertiserCustomEventId = "maxime";
                            advertiserCustomEventName = "sed";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "nulla";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "eius";
                                customClickThroughUrl = "ad";
                                landingPageId = "aperiam";
                            }};
                            id = "animi";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 603863;
                                    iab = false;
                                    id = "rem";
                                    kind = "iure";
                                    width = 625489;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 304459;
                                    top = 617670;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_PARENT;
                            videoReportingId = "quod";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "nihil";
                            advertiserCustomEventName = "quae";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "tenetur";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "ex";
                                customClickThroughUrl = "rerum";
                                landingPageId = "magni";
                            }};
                            id = "laudantium";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 921981;
                                    iab = false;
                                    id = "minus";
                                    kind = "porro";
                                    width = 543122;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 420354;
                                    top = 258807;
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
                            videoReportingId = "laudantium";
                        }}),
                    }};
                    totalFileSize = "commodi";
                    type = CreativeTypeEnum.BRAND_SAFE_DEFAULT_INSTREAM_VIDEO;
                    universalAdId = new UniversalAdId() {{
                        registry = UniversalAdIdRegistryEnum.AD_ID_ORG;
                        value = "qui";
                    }};;
                    version = 754041;
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "eligendi";
                key = "incidunt";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "laboriosam";
                uploadProtocol = "quidem";
            }};            

            DfareportingCreativesUpdateResponse res = sdk.creatives.dfareportingCreativesUpdate(req, new DfareportingCreativesUpdateSecurity("reprehenderit", "praesentium") {{
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
