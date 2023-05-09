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

            DfareportingCreativesGetRequest req = new DfareportingCreativesGetRequest("quo", "inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "nisi";
                key = "quibusdam";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "repellendus";
                uploadProtocol = "qui";
            }};            

            DfareportingCreativesGetResponse res = sdk.creatives.dfareportingCreativesGet(req, new DfareportingCreativesGetSecurity("deserunt", "error") {{
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

            DfareportingCreativesInsertRequest req = new DfareportingCreativesInsertRequest("impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                creative = new Creative() {{
                    accountId = "nihil";
                    active = false;
                    adParameters = "officia";
                    adTagKeys = new String[]{{
                        add("nemo"),
                        add("voluptatem"),
                        add("quod"),
                        add("vitae"),
                    }};
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 376017;
                            iab = false;
                            id = "laboriosam";
                            kind = "veritatis";
                            width = 626381;
                        }}),
                        add(new Size() {{
                            height = 87887;
                            iab = false;
                            id = "temporibus";
                            kind = "excepturi";
                            width = 87702;
                        }}),
                    }};
                    advertiserId = "ipsum";
                    allowScriptAccess = false;
                    archived = false;
                    artworkType = CreativeArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                    authoringSource = CreativeAuthoringSourceEnum.CREATIVE_AUTHORING_SOURCE_GWD;
                    authoringTool = CreativeAuthoringToolEnum.NINJA;
                    autoAdvanceImages = false;
                    backgroundColor = "itaque";
                    backupImageClickThroughUrl = new CreativeClickThroughUrl() {{
                        computedClickThroughUrl = "voluptatum";
                        customClickThroughUrl = "possimus";
                        landingPageId = "minima";
                    }};;
                    backupImageFeatures = new org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum[]{{
                        add(CreativeBackupImageFeaturesEnum.CSS_COLUMNS),
                    }};
                    backupImageReportingLabel = "et";
                    backupImageTargetWindow = new TargetWindow() {{
                        customHtml = "amet";
                        targetWindowOption = TargetWindowTargetWindowOptionEnum.CUSTOM;
                    }};;
                    clickTags = new org.openapis.openapi.models.shared.ClickTag[]{{
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "asperiores";
                                customClickThroughUrl = "commodi";
                                landingPageId = "voluptas";
                            }};
                            eventName = "quos";
                            name = "Lynn Considine";
                        }}),
                    }};
                    commercialId = "molestiae";
                    companionCreatives = new String[]{{
                        add("aliquam"),
                        add("maxime"),
                    }};
                    compatibility = new org.openapis.openapi.models.shared.CreativeCompatibilityEnum[]{{
                        add(CreativeCompatibilityEnum.APP_INTERSTITIAL),
                        add(CreativeCompatibilityEnum.IN_STREAM_AUDIO),
                    }};
                    convertFlashToHtml5 = false;
                    counterCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "id";
                            advertiserCustomEventName = "veniam";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "placeat";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "harum";
                                customClickThroughUrl = "cumque";
                                landingPageId = "culpa";
                            }};
                            id = "pariatur";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 672505;
                                    iab = false;
                                    id = "consequuntur";
                                    kind = "omnis";
                                    width = 802418;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 641124;
                                    top = 480114;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Mr.";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_SELF;
                            videoReportingId = "et";
                        }}),
                    }};
                    creativeAssetSelection = new CreativeAssetSelection() {{
                        defaultAssetId = "eligendi";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                assetId = "ipsam";
                                name = "Nellie Bernier";
                                targetingTemplateId = "dolorem";
                            }}),
                            add(new Rule() {{
                                assetId = "minus";
                                name = "Tracy Bednar";
                                targetingTemplateId = "vel";
                            }}),
                            add(new Rule() {{
                                assetId = "nisi";
                                name = "Frances Johnson";
                                targetingTemplateId = "non";
                            }}),
                        }};
                    }};;
                    creativeAssets = new org.openapis.openapi.models.shared.CreativeAsset[]{{
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 533457;
                                    iab = false;
                                    id = "exercitationem";
                                    kind = "illo";
                                    width = 144876;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_BOTTOM;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Miss Bernice Cummings";
                                type = CreativeAssetIdTypeEnum.AUDIO;
                            }};
                            audioBitRate = 179648;
                            audioSampleRate = 903607;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "ipsa";
                                advertiserCustomEventName = "esse";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                                artworkLabel = "aliquam";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "reprehenderit";
                                    customClickThroughUrl = "quidem";
                                    landingPageId = "quas";
                                }};
                                id = "officia";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 263988;
                                        iab = false;
                                        id = "alias";
                                        kind = "nam";
                                        width = 793291;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 24078;
                                        top = 335688;
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
                                videoReportingId = "voluptatem";
                            }};
                            bitRate = 873059;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_VIDEO;
                            collapsedSize = new Size() {{
                                height = 338542;
                                iab = false;
                                id = "perferendis";
                                kind = "itaque";
                                width = 816346;
                            }};
                            companionCreativeIds = new String[]{{
                                add("ratione"),
                                add("eos"),
                                add("laborum"),
                                add("sint"),
                            }};
                            customStartTimeValue = 277066;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.CSS_OPACITY),
                                add(CreativeAssetDetectedFeaturesEnum.CSS_BORDER_RADIUS),
                                add(CreativeAssetDetectedFeaturesEnum.SVG_CLIP_PATHS),
                                add(CreativeAssetDetectedFeaturesEnum.LOCAL_STORAGE),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING;
                            duration = 34953;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_CUSTOM;
                            expandedDimension = new Size() {{
                                height = 654718;
                                iab = false;
                                id = "aliquam";
                                kind = "quasi";
                                width = 829836;
                            }};
                            fileSize = "architecto";
                            flashVersion = 941683;
                            frameRate = 2875.3;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "nisi";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "voluptas";
                                etag = "saepe";
                                id = "85156fff-73fd-4f54-bdd5-ea9543398daf";
                                kind = "soluta";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "dolores";
                            }};
                            mediaDuration = 6795.42;
                            mimeType = "deleniti";
                            offset = new OffsetPosition() {{
                                left = 825369;
                                top = 436110;
                            }};
                            orientation = CreativeAssetOrientationEnum.LANDSCAPE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 208224;
                                top = 512035;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PERCENT;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            progressiveServingUrl = "incidunt";
                            pushdown = false;
                            pushdownDuration = 8648.87;
                            role = CreativeAssetRoleEnum.TRANSCODED_VIDEO;
                            size = new Size() {{
                                height = 11290;
                                iab = false;
                                id = "nesciunt";
                                kind = "error";
                                width = 899943;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "quis";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.TRANSPARENT;
                            zIndex = 610335;
                            zipFilename = "harum";
                            zipFilesize = "sunt";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 630017;
                                    iab = false;
                                    id = "qui";
                                    kind = "tempora";
                                    width = 264042;
                                }}),
                                add(new Size() {{
                                    height = 956532;
                                    iab = false;
                                    id = "possimus";
                                    kind = "nisi";
                                    width = 69575;
                                }}),
                                add(new Size() {{
                                    height = 607407;
                                    iab = false;
                                    id = "aut";
                                    kind = "ipsum";
                                    width = 611361;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_LEFT;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Sammy Franecki";
                                type = CreativeAssetIdTypeEnum.AUDIO;
                            }};
                            audioBitRate = 40155;
                            audioSampleRate = 825211;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "nobis";
                                advertiserCustomEventName = "laboriosam";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "et";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "optio";
                                    customClickThroughUrl = "quam";
                                    landingPageId = "delectus";
                                }};
                                id = "quae";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 878361;
                                        iab = false;
                                        id = "amet";
                                        kind = "culpa";
                                        width = 994375;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 96083;
                                        top = 334177;
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
                                videoReportingId = "maxime";
                            }};
                            bitRate = 591977;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_FLASH;
                            collapsedSize = new Size() {{
                                height = 833706;
                                iab = false;
                                id = "ab";
                                kind = "cum";
                                width = 297519;
                            }};
                            companionCreativeIds = new String[]{{
                                add("aperiam"),
                                add("dicta"),
                                add("repellat"),
                            }};
                            customStartTimeValue = 172807;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.WEB_SQL_DATABASE),
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_ATTR_MULTIPLE),
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_TYPE_TEL),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR;
                            duration = 521892;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_NONE;
                            expandedDimension = new Size() {{
                                height = 208122;
                                iab = false;
                                id = "dolores";
                                kind = "vel";
                                width = 219634;
                            }};
                            fileSize = "occaecati";
                            flashVersion = 867695;
                            frameRate = 6280.95;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "quis";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "facilis";
                                etag = "in";
                                id = "b6902b88-1a94-4f64-b664-a8f0af8c691d";
                                kind = "molestiae";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "quia";
                            }};
                            mediaDuration = 8584.34;
                            mimeType = "occaecati";
                            offset = new OffsetPosition() {{
                                left = 983596;
                                top = 730247;
                            }};
                            orientation = CreativeAssetOrientationEnum.PORTRAIT;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 946496;
                                top = 562760;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PERCENT;
                            progressiveServingUrl = "aliquid";
                            pushdown = false;
                            pushdownDuration = 6426.52;
                            role = CreativeAssetRoleEnum.BACKUP_IMAGE;
                            size = new Size() {{
                                height = 656284;
                                iab = false;
                                id = "vero";
                                kind = "quas";
                                width = 824078;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "quo";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.WINDOW;
                            zIndex = 57290;
                            zipFilename = "placeat";
                            zipFilesize = "quas";
                        }}),
                    }};
                    creativeFieldAssignments = new org.openapis.openapi.models.shared.CreativeFieldAssignment[]{{
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "consectetur";
                            creativeFieldValueId = "nostrum";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "dicta";
                            creativeFieldValueId = "eos";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "porro";
                            creativeFieldValueId = "iusto";
                        }}),
                    }};
                    customKeyValues = new String[]{{
                        add("voluptate"),
                    }};
                    dynamicAssetSelection = false;
                    exitCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "dolore";
                            advertiserCustomEventName = "rem";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "dolorem";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "dignissimos";
                                customClickThroughUrl = "minima";
                                landingPageId = "eaque";
                            }};
                            id = "mollitia";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 72;
                                    iab = false;
                                    id = "sit";
                                    kind = "accusamus";
                                    width = 576563;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 415589;
                                    top = 376472;
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
                            videoReportingId = "dolorem";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "eum";
                            advertiserCustomEventName = "possimus";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "neque";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "omnis";
                                customClickThroughUrl = "quaerat";
                                landingPageId = "nesciunt";
                            }};
                            id = "omnis";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 547191;
                                    iab = false;
                                    id = "optio";
                                    kind = "molestiae";
                                    width = 540826;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 223923;
                                    top = 758256;
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
                            videoReportingId = "cupiditate";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "praesentium";
                            advertiserCustomEventName = "accusamus";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "ipsum";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "amet";
                                customClickThroughUrl = "deserunt";
                                landingPageId = "nobis";
                            }};
                            id = "quam";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 812057;
                                    iab = false;
                                    id = "est";
                                    kind = "non";
                                    width = 810281;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 331570;
                                    top = 791489;
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
                            videoReportingId = "aliquam";
                        }}),
                    }};
                    fsCommand = new FsCommand() {{
                        left = 624011;
                        positionOption = FsCommandPositionOptionEnum.DISTANCE_FROM_TOP_LEFT_CORNER;
                        top = 496430;
                        windowHeight = 18989;
                        windowWidth = 773652;
                    }};;
                    htmlCode = "reiciendis";
                    htmlCodeLocked = false;
                    id = "quibusdam";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "veniam";
                        etag = "pariatur";
                        id = "6989b720-6451-4077-919e-a83d492ed14b";
                        kind = "molestias";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "odit";
                    }};;
                    kind = "minus";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "sunt";
                    }};;
                    latestTraffickedCreativeId = "sint";
                    mediaDescription = "exercitationem";
                    mediaDuration = 3014.52;
                    name = "Darlene Harber";
                    obaIcon = new ObaIcon() {{
                        iconClickThroughUrl = "ullam";
                        iconClickTrackingUrl = "enim";
                        iconViewTrackingUrl = "facere";
                        program = "cumque";
                        resourceUrl = "cumque";
                        size = new Size() {{
                            height = 90670;
                            iab = false;
                            id = "praesentium";
                            kind = "minima";
                            width = 912076;
                        }};;
                        xPosition = "est";
                        yPosition = "magnam";
                    }};;
                    overrideCss = "unde";
                    progressOffset = new VideoOffset() {{
                        offsetPercentage = 6539;
                        offsetSeconds = 119515;
                    }};;
                    redirectUrl = "eligendi";
                    renderingId = "iure";
                    renderingIdDimensionValue = new DimensionValue() {{
                        dimensionName = "cumque";
                        etag = "quaerat";
                        id = "3ad2daa7-84ab-4a3d-a30e-df73811a1153";
                        kind = "laudantium";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "rerum";
                    }};;
                    requiredFlashPluginVersion = "nulla";
                    requiredFlashVersion = 499270;
                    size = new Size() {{
                        height = 908916;
                        iab = false;
                        id = "repellendus";
                        kind = "enim";
                        width = 377392;
                    }};;
                    skipOffset = new VideoOffset() {{
                        offsetPercentage = 331703;
                        offsetSeconds = 28088;
                    }};;
                    skippable = false;
                    sslCompliant = false;
                    sslOverride = false;
                    studioAdvertiserId = "quam";
                    studioCreativeId = "vel";
                    studioTraffickedCreativeId = "aspernatur";
                    subaccountId = "veritatis";
                    thirdPartyBackupImageImpressionsUrl = "porro";
                    thirdPartyRichMediaImpressionsUrl = "ad";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyTrackingUrl[]{{
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_PROGRESS;
                            url = "magnam";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.RICH_MEDIA_BACKUP_IMPRESSION;
                            url = "iusto";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_MIDPOINT;
                            url = "provident";
                        }}),
                    }};
                    timerCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
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
                    totalFileSize = "placeat";
                    type = CreativeTypeEnum.INSTREAM_VIDEO_REDIRECT;
                    universalAdId = new UniversalAdId() {{
                        registry = UniversalAdIdRegistryEnum.AD_ID_OFFICIAL;
                        value = "architecto";
                    }};;
                    version = 162374;
                }};;
                accessToken = "impedit";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "voluptatum";
                key = "aspernatur";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "nobis";
                uploadProtocol = "asperiores";
            }};            

            DfareportingCreativesInsertResponse res = sdk.creatives.dfareportingCreativesInsert(req, new DfareportingCreativesInsertSecurity("corporis", "tempora") {{
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

            DfareportingCreativesListRequest req = new DfareportingCreativesListRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corrupti";
                active = false;
                advertiserId = "blanditiis";
                alt = AltEnum.PROTO;
                archived = false;
                callback = "blanditiis";
                campaignId = "maiores";
                companionCreativeIds = new String[]{{
                    add("harum"),
                }};
                creativeFieldIds = new String[]{{
                    add("alias"),
                    add("tempore"),
                    add("quod"),
                    add("totam"),
                }};
                fields = "officiis";
                ids = new String[]{{
                    add("maiores"),
                }};
                key = "dolores";
                maxResults = 19551L;
                oauthToken = "eum";
                pageToken = "nulla";
                prettyPrint = false;
                quotaUser = "corporis";
                renderingIds = new String[]{{
                    add("quas"),
                    add("sequi"),
                    add("illo"),
                    add("temporibus"),
                }};
                searchString = "doloremque";
                sizeIds = new String[]{{
                    add("laudantium"),
                }};
                sortField = DfareportingCreativesListSortFieldEnum.ID;
                sortOrder = DfareportingCreativesListSortOrderEnum.ASCENDING;
                studioCreativeId = "provident";
                types = new org.openapis.openapi.models.operations.DfareportingCreativesListTypesEnum[]{{
                    add(DfareportingCreativesListTypesEnum.INSTREAM_AUDIO),
                }};
                uploadType = "voluptas";
                uploadProtocol = "nihil";
            }};            

            DfareportingCreativesListResponse res = sdk.creatives.dfareportingCreativesList(req, new DfareportingCreativesListSecurity("quae", "voluptas") {{
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

            DfareportingCreativesPatchRequest req = new DfareportingCreativesPatchRequest("laboriosam", "ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                creative = new Creative() {{
                    accountId = "doloribus";
                    active = false;
                    adParameters = "ratione";
                    adTagKeys = new String[]{{
                        add("ex"),
                        add("quos"),
                        add("dicta"),
                    }};
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 349639;
                            iab = false;
                            id = "molestiae";
                            kind = "iure";
                            width = 500700;
                        }}),
                        add(new Size() {{
                            height = 830003;
                            iab = false;
                            id = "impedit";
                            kind = "itaque";
                            width = 477117;
                        }}),
                        add(new Size() {{
                            height = 308338;
                            iab = false;
                            id = "explicabo";
                            kind = "dolore";
                            width = 33424;
                        }}),
                        add(new Size() {{
                            height = 566518;
                            iab = false;
                            id = "deserunt";
                            kind = "odit";
                            width = 105874;
                        }}),
                    }};
                    advertiserId = "exercitationem";
                    allowScriptAccess = false;
                    archived = false;
                    artworkType = CreativeArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                    authoringSource = CreativeAuthoringSourceEnum.CREATIVE_AUTHORING_SOURCE_DCM;
                    authoringTool = CreativeAuthoringToolEnum.SWIFFY;
                    autoAdvanceImages = false;
                    backgroundColor = "voluptas";
                    backupImageClickThroughUrl = new CreativeClickThroughUrl() {{
                        computedClickThroughUrl = "aut";
                        customClickThroughUrl = "vitae";
                        landingPageId = "tempora";
                    }};;
                    backupImageFeatures = new org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum[]{{
                        add(CreativeBackupImageFeaturesEnum.INPUT_TYPE_SEARCH),
                        add(CreativeBackupImageFeaturesEnum.INPUT_TYPE_DATETIME),
                        add(CreativeBackupImageFeaturesEnum.CANVAS_TEXT),
                    }};
                    backupImageReportingLabel = "doloribus";
                    backupImageTargetWindow = new TargetWindow() {{
                        customHtml = "suscipit";
                        targetWindowOption = TargetWindowTargetWindowOptionEnum.NEW_WINDOW;
                    }};;
                    clickTags = new org.openapis.openapi.models.shared.ClickTag[]{{
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "neque";
                                customClickThroughUrl = "mollitia";
                                landingPageId = "tenetur";
                            }};
                            eventName = "non";
                            name = "Josh Morissette";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "officia";
                                customClickThroughUrl = "dolorem";
                                landingPageId = "velit";
                            }};
                            eventName = "vero";
                            name = "Dewey Kautzer";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "praesentium";
                                customClickThroughUrl = "ipsum";
                                landingPageId = "itaque";
                            }};
                            eventName = "non";
                            name = "Cory Olson";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "saepe";
                                customClickThroughUrl = "modi";
                                landingPageId = "assumenda";
                            }};
                            eventName = "maiores";
                            name = "Pearl Trantow";
                        }}),
                    }};
                    commercialId = "libero";
                    companionCreatives = new String[]{{
                        add("omnis"),
                        add("veniam"),
                        add("nostrum"),
                    }};
                    compatibility = new org.openapis.openapi.models.shared.CreativeCompatibilityEnum[]{{
                        add(CreativeCompatibilityEnum.DISPLAY_INTERSTITIAL),
                        add(CreativeCompatibilityEnum.DISPLAY),
                        add(CreativeCompatibilityEnum.DISPLAY_INTERSTITIAL),
                        add(CreativeCompatibilityEnum.IN_STREAM_AUDIO),
                    }};
                    convertFlashToHtml5 = false;
                    counterCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "ipsum";
                            advertiserCustomEventName = "error";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "praesentium";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "consectetur";
                                customClickThroughUrl = "dicta";
                                landingPageId = "ipsa";
                            }};
                            id = "occaecati";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 18901;
                                    iab = false;
                                    id = "iure";
                                    kind = "cum";
                                    width = 816900;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 188253;
                                    top = 337161;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_BLANK;
                            videoReportingId = "cupiditate";
                        }}),
                    }};
                    creativeAssetSelection = new CreativeAssetSelection() {{
                        defaultAssetId = "sed";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                assetId = "vero";
                                name = "Thelma Gorczany Sr.";
                                targetingTemplateId = "numquam";
                            }}),
                            add(new Rule() {{
                                assetId = "numquam";
                                name = "Dewey Lemke";
                                targetingTemplateId = "modi";
                            }}),
                            add(new Rule() {{
                                assetId = "expedita";
                                name = "Eugene Bechtelar";
                                targetingTemplateId = "nostrum";
                            }}),
                        }};
                    }};;
                    creativeAssets = new org.openapis.openapi.models.shared.CreativeAsset[]{{
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 85797;
                                    iab = false;
                                    id = "sunt";
                                    kind = "quod";
                                    width = 710148;
                                }}),
                                add(new Size() {{
                                    height = 961171;
                                    iab = false;
                                    id = "itaque";
                                    kind = "dignissimos";
                                    width = 300795;
                                }}),
                                add(new Size() {{
                                    height = 568153;
                                    iab = false;
                                    id = "placeat";
                                    kind = "dolorum";
                                    width = 974931;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_RIGHT;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Jeremy Krajcik";
                                type = CreativeAssetIdTypeEnum.HTML;
                            }};
                            audioBitRate = 902802;
                            audioSampleRate = 162691;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "quod";
                                advertiserCustomEventName = "occaecati";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                                artworkLabel = "eum";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "quae";
                                    customClickThroughUrl = "doloremque";
                                    landingPageId = "debitis";
                                }};
                                id = "omnis";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 835421;
                                        iab = false;
                                        id = "quidem";
                                        kind = "neque";
                                        width = 664858;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 834457;
                                        top = 271956;
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
                                videoReportingId = "doloremque";
                            }};
                            bitRate = 239378;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_FLASH;
                            collapsedSize = new Size() {{
                                height = 37455;
                                iab = false;
                                id = "molestias";
                                kind = "facere";
                                width = 582412;
                            }};
                            companionCreativeIds = new String[]{{
                                add("nesciunt"),
                                add("sequi"),
                                add("in"),
                                add("modi"),
                            }};
                            customStartTimeValue = 472077;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.CSS_FONT_FACE),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING;
                            duration = 142520;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_CUSTOM;
                            expandedDimension = new Size() {{
                                height = 624300;
                                iab = false;
                                id = "incidunt";
                                kind = "asperiores";
                                width = 181311;
                            }};
                            fileSize = "mollitia";
                            flashVersion = 718112;
                            frameRate = 1202.16;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "earum";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "possimus";
                                etag = "nemo";
                                id = "671e9c32-6350-4a46-b143-789ce0e99159";
                                kind = "numquam";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "omnis";
                            }};
                            mediaDuration = 2284.83;
                            mimeType = "deserunt";
                            offset = new OffsetPosition() {{
                                left = 495515;
                                top = 267981;
                            }};
                            orientation = CreativeAssetOrientationEnum.SQUARE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 58606;
                                top = 175577;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PERCENT;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL;
                            progressiveServingUrl = "a";
                            pushdown = false;
                            pushdownDuration = 9050.46;
                            role = CreativeAssetRoleEnum.ADDITIONAL_IMAGE;
                            size = new Size() {{
                                height = 694647;
                                iab = false;
                                id = "quaerat";
                                kind = "cum";
                                width = 292846;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "rerum";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.WINDOW;
                            zIndex = 735012;
                            zipFilename = "odio";
                            zipFilesize = "reprehenderit";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 912819;
                                    iab = false;
                                    id = "distinctio";
                                    kind = "nam";
                                    width = 390937;
                                }}),
                                add(new Size() {{
                                    height = 887980;
                                    iab = false;
                                    id = "quasi";
                                    kind = "fugiat";
                                    width = 135597;
                                }}),
                                add(new Size() {{
                                    height = 772593;
                                    iab = false;
                                    id = "voluptatibus";
                                    kind = "ad";
                                    width = 51717;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Moses Prohaska";
                                type = CreativeAssetIdTypeEnum.HTML_IMAGE;
                            }};
                            audioBitRate = 810640;
                            audioSampleRate = 302456;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "aliquid";
                                advertiserCustomEventName = "adipisci";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "fugiat";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "eveniet";
                                    customClickThroughUrl = "eum";
                                    landingPageId = "exercitationem";
                                }};
                                id = "at";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 632648;
                                        iab = false;
                                        id = "alias";
                                        kind = "eos";
                                        width = 550066;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 789760;
                                        top = 223692;
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
                                videoReportingId = "veritatis";
                            }};
                            bitRate = 652967;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_FLASH;
                            collapsedSize = new Size() {{
                                height = 876418;
                                iab = false;
                                id = "ratione";
                                kind = "aut";
                                width = 985056;
                            }};
                            companionCreativeIds = new String[]{{
                                add("deserunt"),
                                add("sint"),
                                add("eum"),
                                add("commodi"),
                            }};
                            customStartTimeValue = 301566;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_TYPE_SEARCH),
                                add(CreativeAssetDetectedFeaturesEnum.WEB_SOCKETS),
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_ATTR_AUTOFOCUS),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_VPAID_LINEAR;
                            duration = 462268;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_NONE;
                            expandedDimension = new Size() {{
                                height = 384831;
                                iab = false;
                                id = "odio";
                                kind = "adipisci";
                                width = 899258;
                            }};
                            fileSize = "veritatis";
                            flashVersion = 232342;
                            frameRate = 6861.9;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "quasi";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "eos";
                                etag = "dolorum";
                                id = "6b992494-5944-487f-9c84-3836b86b3cdf";
                                kind = "ex";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "dicta";
                            }};
                            mediaDuration = 3242.55;
                            mimeType = "facilis";
                            offset = new OffsetPosition() {{
                                left = 22376;
                                top = 279972;
                            }};
                            orientation = CreativeAssetOrientationEnum.LANDSCAPE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 565242;
                                top = 941710;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PERCENT;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            progressiveServingUrl = "delectus";
                            pushdown = false;
                            pushdownDuration = 1189.86;
                            role = CreativeAssetRoleEnum.BACKUP_IMAGE;
                            size = new Size() {{
                                height = 964640;
                                iab = false;
                                id = "ut";
                                kind = "officiis";
                                width = 932220;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "distinctio";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.TRANSPARENT;
                            zIndex = 449331;
                            zipFilename = "deleniti";
                            zipFilesize = "tempore";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 413385;
                                    iab = false;
                                    id = "sit";
                                    kind = "ea";
                                    width = 562430;
                                }}),
                                add(new Size() {{
                                    height = 156416;
                                    iab = false;
                                    id = "ipsam";
                                    kind = "rem";
                                    width = 564067;
                                }}),
                                add(new Size() {{
                                    height = 262664;
                                    iab = false;
                                    id = "necessitatibus";
                                    kind = "culpa";
                                    width = 449365;
                                }}),
                                add(new Size() {{
                                    height = 398606;
                                    iab = false;
                                    id = "amet";
                                    kind = "fugiat";
                                    width = 358740;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_LEFT;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Allison McLaughlin";
                                type = CreativeAssetIdTypeEnum.VIDEO;
                            }};
                            audioBitRate = 514441;
                            audioSampleRate = 346519;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "vitae";
                                advertiserCustomEventName = "magnam";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "nulla";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "quibusdam";
                                    customClickThroughUrl = "minima";
                                    landingPageId = "ut";
                                }};
                                id = "cupiditate";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 892106;
                                        iab = false;
                                        id = "minima";
                                        kind = "vel";
                                        width = 235556;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 345057;
                                        top = 735902;
                                    }};
                                    positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                    showAddressBar = false;
                                    showMenuBar = false;
                                    showScrollBar = false;
                                    showStatusBar = false;
                                    showToolBar = false;
                                    title = "Mrs.";
                                }};
                                targetType = CreativeCustomEventTargetTypeEnum.TARGET_PARENT;
                                videoReportingId = "maxime";
                            }};
                            bitRate = 29144;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_DATA;
                            collapsedSize = new Size() {{
                                height = 600825;
                                iab = false;
                                id = "reprehenderit";
                                kind = "voluptatem";
                                width = 812393;
                            }};
                            companionCreativeIds = new String[]{{
                                add("magni"),
                                add("voluptatibus"),
                            }};
                            customStartTimeValue = 797304;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.WEBGL),
                                add(CreativeAssetDetectedFeaturesEnum.APPLICATION_CACHE),
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_ATTR_MULTIPLE),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_OVERLAY;
                            duration = 255720;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_AUTO;
                            expandedDimension = new Size() {{
                                height = 160826;
                                iab = false;
                                id = "veniam";
                                kind = "voluptates";
                                width = 450324;
                            }};
                            fileSize = "minima";
                            flashVersion = 713720;
                            frameRate = 4970.04;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "excepturi";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "eum";
                                etag = "doloremque";
                                id = "65c0efa6-f93b-490a-9b8c-95be1254b739";
                                kind = "reiciendis";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "voluptatibus";
                            }};
                            mediaDuration = 9078.26;
                            mimeType = "odio";
                            offset = new OffsetPosition() {{
                                left = 451847;
                                top = 130289;
                            }};
                            orientation = CreativeAssetOrientationEnum.LANDSCAPE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 18584;
                                top = 819052;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            progressiveServingUrl = "voluptas";
                            pushdown = false;
                            pushdownDuration = 3463.28;
                            role = CreativeAssetRoleEnum.ADDITIONAL_FLASH;
                            size = new Size() {{
                                height = 554644;
                                iab = false;
                                id = "impedit";
                                kind = "cupiditate";
                                width = 569763;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "iure";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.OPAQUE;
                            zIndex = 141142;
                            zipFilename = "quibusdam";
                            zipFilesize = "fugit";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 761165;
                                    iab = false;
                                    id = "accusantium";
                                    kind = "earum";
                                    width = 566915;
                                }}),
                                add(new Size() {{
                                    height = 256890;
                                    iab = false;
                                    id = "voluptatem";
                                    kind = "voluptatum";
                                    width = 496440;
                                }}),
                                add(new Size() {{
                                    height = 819883;
                                    iab = false;
                                    id = "unde";
                                    kind = "maxime";
                                    width = 634880;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_BOTTOM;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Valerie Crona";
                                type = CreativeAssetIdTypeEnum.VIDEO;
                            }};
                            audioBitRate = 811981;
                            audioSampleRate = 666940;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "est";
                                advertiserCustomEventName = "placeat";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "nam";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "minus";
                                    customClickThroughUrl = "id";
                                    landingPageId = "culpa";
                                }};
                                id = "beatae";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 800781;
                                        iab = false;
                                        id = "a";
                                        kind = "eveniet";
                                        width = 573938;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 904419;
                                        top = 73445;
                                    }};
                                    positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                    showAddressBar = false;
                                    showMenuBar = false;
                                    showScrollBar = false;
                                    showStatusBar = false;
                                    showToolBar = false;
                                    title = "Dr.";
                                }};
                                targetType = CreativeCustomEventTargetTypeEnum.TARGET_POPUP;
                                videoReportingId = "molestias";
                            }};
                            bitRate = 57667;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_FLASH;
                            collapsedSize = new Size() {{
                                height = 616403;
                                iab = false;
                                id = "aperiam";
                                kind = "ducimus";
                                width = 984557;
                            }};
                            companionCreativeIds = new String[]{{
                                add("ducimus"),
                            }};
                            customStartTimeValue = 535148;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.CSS_BOX_SHADOW),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING;
                            duration = 553714;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_AUTO;
                            expandedDimension = new Size() {{
                                height = 854466;
                                iab = false;
                                id = "eius";
                                kind = "odit";
                                width = 924872;
                            }};
                            fileSize = "minima";
                            flashVersion = 304191;
                            frameRate = 6311.23;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "voluptatum";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "corporis";
                                etag = "dolore";
                                id = "66597c50-233c-4147-9d51-aaa6ddf5abd6";
                                kind = "eius";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "reprehenderit";
                            }};
                            mediaDuration = 7749.46;
                            mimeType = "enim";
                            offset = new OffsetPosition() {{
                                left = 967858;
                                top = 769294;
                            }};
                            orientation = CreativeAssetOrientationEnum.LANDSCAPE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 748056;
                                top = 529097;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PERCENT;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL;
                            progressiveServingUrl = "est";
                            pushdown = false;
                            pushdownDuration = 305.03;
                            role = CreativeAssetRoleEnum.PRIMARY;
                            size = new Size() {{
                                height = 747951;
                                iab = false;
                                id = "saepe";
                                kind = "maiores";
                                width = 422823;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "saepe";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.OPAQUE;
                            zIndex = 45536;
                            zipFilename = "quae";
                            zipFilesize = "veritatis";
                        }}),
                    }};
                    creativeFieldAssignments = new org.openapis.openapi.models.shared.CreativeFieldAssignment[]{{
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "ducimus";
                            creativeFieldValueId = "suscipit";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "dolor";
                            creativeFieldValueId = "alias";
                        }}),
                    }};
                    customKeyValues = new String[]{{
                        add("quibusdam"),
                        add("fuga"),
                        add("nihil"),
                    }};
                    dynamicAssetSelection = false;
                    exitCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "repellat";
                            advertiserCustomEventName = "quibusdam";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "illum";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "tempora";
                                customClickThroughUrl = "similique";
                                landingPageId = "dolor";
                            }};
                            id = "enim";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 677473;
                                    iab = false;
                                    id = "aliquam";
                                    kind = "beatae";
                                    width = 130205;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 202246;
                                    top = 545400;
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
                            videoReportingId = "in";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "sequi";
                            advertiserCustomEventName = "ad";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "quisquam";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "suscipit";
                                customClickThroughUrl = "officia";
                                landingPageId = "saepe";
                            }};
                            id = "ipsum";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 189530;
                                    iab = false;
                                    id = "expedita";
                                    kind = "itaque";
                                    width = 982216;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 593287;
                                    top = 491500;
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
                            videoReportingId = "repellat";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "modi";
                            advertiserCustomEventName = "ex";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "placeat";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "architecto";
                                customClickThroughUrl = "quae";
                                landingPageId = "aut";
                            }};
                            id = "commodi";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 965711;
                                    iab = false;
                                    id = "officiis";
                                    kind = "omnis";
                                    width = 407827;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 369761;
                                    top = 743631;
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
                            videoReportingId = "pariatur";
                        }}),
                    }};
                    fsCommand = new FsCommand() {{
                        left = 28449;
                        positionOption = FsCommandPositionOptionEnum.DISTANCE_FROM_TOP_LEFT_CORNER;
                        top = 756571;
                        windowHeight = 947573;
                        windowWidth = 535876;
                    }};;
                    htmlCode = "deleniti";
                    htmlCodeLocked = false;
                    id = "necessitatibus";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "cumque";
                        etag = "iste";
                        id = "f7b99a55-0a65-46ed-b33b-b0ce8aa65432";
                        kind = "officia";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "rem";
                    }};;
                    kind = "ea";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "debitis";
                    }};;
                    latestTraffickedCreativeId = "soluta";
                    mediaDescription = "odio";
                    mediaDuration = 9067.75;
                    name = "Eleanor Schiller";
                    obaIcon = new ObaIcon() {{
                        iconClickThroughUrl = "autem";
                        iconClickTrackingUrl = "non";
                        iconViewTrackingUrl = "doloremque";
                        program = "atque";
                        resourceUrl = "natus";
                        size = new Size() {{
                            height = 105102;
                            iab = false;
                            id = "nemo";
                            kind = "eaque";
                            width = 13726;
                        }};;
                        xPosition = "natus";
                        yPosition = "nihil";
                    }};;
                    overrideCss = "accusantium";
                    progressOffset = new VideoOffset() {{
                        offsetPercentage = 91668;
                        offsetSeconds = 603306;
                    }};;
                    redirectUrl = "similique";
                    renderingId = "eius";
                    renderingIdDimensionValue = new DimensionValue() {{
                        dimensionName = "rem";
                        etag = "delectus";
                        id = "88ece7bf-904e-4011-85d3-8908162c6beb";
                        kind = "nisi";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "culpa";
                    }};;
                    requiredFlashPluginVersion = "doloremque";
                    requiredFlashVersion = 985683;
                    size = new Size() {{
                        height = 428028;
                        iab = false;
                        id = "enim";
                        kind = "ducimus";
                        width = 692401;
                    }};;
                    skipOffset = new VideoOffset() {{
                        offsetPercentage = 447848;
                        offsetSeconds = 870547;
                    }};;
                    skippable = false;
                    sslCompliant = false;
                    sslOverride = false;
                    studioAdvertiserId = "alias";
                    studioCreativeId = "consectetur";
                    studioTraffickedCreativeId = "mollitia";
                    subaccountId = "beatae";
                    thirdPartyBackupImageImpressionsUrl = "numquam";
                    thirdPartyRichMediaImpressionsUrl = "praesentium";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyTrackingUrl[]{{
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_SKIP;
                            url = "blanditiis";
                        }}),
                    }};
                    timerCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
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
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "optio";
                            advertiserCustomEventName = "laboriosam";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_TIMER;
                            artworkLabel = "porro";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "laborum";
                                customClickThroughUrl = "in";
                                landingPageId = "eaque";
                            }};
                            id = "odit";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 719654;
                                    iab = false;
                                    id = "soluta";
                                    kind = "sint";
                                    width = 487746;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 918286;
                                    top = 879644;
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
                            videoReportingId = "fugiat";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "id";
                            advertiserCustomEventName = "sed";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "recusandae";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "minima";
                                customClickThroughUrl = "tenetur";
                                landingPageId = "praesentium";
                            }};
                            id = "officiis";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 23694;
                                    iab = false;
                                    id = "quasi";
                                    kind = "libero";
                                    width = 945218;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 213771;
                                    top = 241364;
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
                            videoReportingId = "quidem";
                        }}),
                    }};
                    totalFileSize = "ut";
                    type = CreativeTypeEnum.RICH_MEDIA_INPAGE_FLOATING;
                    universalAdId = new UniversalAdId() {{
                        registry = UniversalAdIdRegistryEnum.AD_ID_OFFICIAL;
                        value = "quae";
                    }};;
                    version = 170479;
                }};;
                accessToken = "dolorum";
                alt = AltEnum.PROTO;
                callback = "sunt";
                fields = "iure";
                key = "voluptatem";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "a";
                uploadProtocol = "vitae";
            }};            

            DfareportingCreativesPatchResponse res = sdk.creatives.dfareportingCreativesPatch(req, new DfareportingCreativesPatchSecurity("maxime", "placeat") {{
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

            DfareportingCreativesUpdateRequest req = new DfareportingCreativesUpdateRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                creative = new Creative() {{
                    accountId = "maxime";
                    active = false;
                    adParameters = "ex";
                    adTagKeys = new String[]{{
                        add("deserunt"),
                    }};
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 929941;
                            iab = false;
                            id = "ad";
                            kind = "voluptates";
                            width = 687509;
                        }}),
                        add(new Size() {{
                            height = 312851;
                            iab = false;
                            id = "delectus";
                            kind = "sit";
                            width = 780360;
                        }}),
                        add(new Size() {{
                            height = 287747;
                            iab = false;
                            id = "molestias";
                            kind = "qui";
                            width = 745533;
                        }}),
                    }};
                    advertiserId = "ullam";
                    allowScriptAccess = false;
                    archived = false;
                    artworkType = CreativeArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                    authoringSource = CreativeAuthoringSourceEnum.CREATIVE_AUTHORING_SOURCE_DBM;
                    authoringTool = CreativeAuthoringToolEnum.NINJA;
                    autoAdvanceImages = false;
                    backgroundColor = "quibusdam";
                    backupImageClickThroughUrl = new CreativeClickThroughUrl() {{
                        computedClickThroughUrl = "doloremque";
                        customClickThroughUrl = "rem";
                        landingPageId = "dolorum";
                    }};;
                    backupImageFeatures = new org.openapis.openapi.models.shared.CreativeBackupImageFeaturesEnum[]{{
                        add(CreativeBackupImageFeaturesEnum.CSS_RGBA),
                    }};
                    backupImageReportingLabel = "laboriosam";
                    backupImageTargetWindow = new TargetWindow() {{
                        customHtml = "esse";
                        targetWindowOption = TargetWindowTargetWindowOptionEnum.CURRENT_WINDOW;
                    }};;
                    clickTags = new org.openapis.openapi.models.shared.ClickTag[]{{
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "accusamus";
                                customClickThroughUrl = "debitis";
                                landingPageId = "esse";
                            }};
                            eventName = "omnis";
                            name = "Dale Schinner MD";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "placeat";
                                customClickThroughUrl = "sequi";
                                landingPageId = "et";
                            }};
                            eventName = "tempore";
                            name = "Benny Raynor";
                        }}),
                        add(new ClickTag() {{
                            clickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "nulla";
                                customClickThroughUrl = "magni";
                                landingPageId = "dolor";
                            }};
                            eventName = "esse";
                            name = "Hubert Trantow";
                        }}),
                    }};
                    commercialId = "sapiente";
                    companionCreatives = new String[]{{
                        add("sed"),
                        add("dolor"),
                        add("nulla"),
                        add("sint"),
                    }};
                    compatibility = new org.openapis.openapi.models.shared.CreativeCompatibilityEnum[]{{
                        add(CreativeCompatibilityEnum.DISPLAY_INTERSTITIAL),
                        add(CreativeCompatibilityEnum.DISPLAY),
                    }};
                    convertFlashToHtml5 = false;
                    counterCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "unde";
                            advertiserCustomEventName = "rem";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "error";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "natus";
                                customClickThroughUrl = "ad";
                                landingPageId = "cum";
                            }};
                            id = "dolorum";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 798883;
                                    iab = false;
                                    id = "nihil";
                                    kind = "quae";
                                    width = 496204;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 948377;
                                    top = 52074;
                                }};
                                positionType = PopupWindowPropertiesPositionTypeEnum.CENTER;
                                showAddressBar = false;
                                showMenuBar = false;
                                showScrollBar = false;
                                showStatusBar = false;
                                showToolBar = false;
                                title = "Miss";
                            }};
                            targetType = CreativeCustomEventTargetTypeEnum.TARGET_BLANK;
                            videoReportingId = "laudantium";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "repudiandae";
                            advertiserCustomEventName = "minus";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "atque";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "eius";
                                customClickThroughUrl = "unde";
                                landingPageId = "sunt";
                            }};
                            id = "amet";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 511879;
                                    iab = false;
                                    id = "commodi";
                                    kind = "a";
                                    width = 400940;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 181836;
                                    top = 754041;
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
                            videoReportingId = "eligendi";
                        }}),
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "incidunt";
                            advertiserCustomEventName = "quisquam";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "laboriosam";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "reprehenderit";
                                customClickThroughUrl = "praesentium";
                                landingPageId = "totam";
                            }};
                            id = "error";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 3510;
                                    iab = false;
                                    id = "deserunt";
                                    kind = "sequi";
                                    width = 959833;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 847137;
                                    top = 202693;
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
                            videoReportingId = "quibusdam";
                        }}),
                    }};
                    creativeAssetSelection = new CreativeAssetSelection() {{
                        defaultAssetId = "culpa";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                assetId = "perferendis";
                                name = "Casey Rowe";
                                targetingTemplateId = "fugiat";
                            }}),
                        }};
                    }};;
                    creativeAssets = new org.openapis.openapi.models.shared.CreativeAsset[]{{
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 228496;
                                    iab = false;
                                    id = "quae";
                                    kind = "pariatur";
                                    width = 641254;
                                }}),
                                add(new Size() {{
                                    height = 246557;
                                    iab = false;
                                    id = "debitis";
                                    kind = "facere";
                                    width = 733707;
                                }}),
                                add(new Size() {{
                                    height = 326712;
                                    iab = false;
                                    id = "vitae";
                                    kind = "repellat";
                                    width = 665093;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_LEFT;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_MIXED;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Harriet Ruecker";
                                type = CreativeAssetIdTypeEnum.FLASH;
                            }};
                            audioBitRate = 232470;
                            audioSampleRate = 355468;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "dicta";
                                advertiserCustomEventName = "nesciunt";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "esse";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "ea";
                                    customClickThroughUrl = "quibusdam";
                                    landingPageId = "veritatis";
                                }};
                                id = "ad";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 242606;
                                        iab = false;
                                        id = "quia";
                                        kind = "dicta";
                                        width = 721448;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 554508;
                                        top = 242972;
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
                                videoReportingId = "aliquid";
                            }};
                            bitRate = 817054;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_VIDEO;
                            collapsedSize = new Size() {{
                                height = 571849;
                                iab = false;
                                id = "architecto";
                                kind = "totam";
                                width = 1320;
                            }};
                            companionCreativeIds = new String[]{{
                                add("tenetur"),
                                add("iure"),
                                add("consequatur"),
                                add("accusamus"),
                            }};
                            customStartTimeValue = 741534;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_TYPE_WEEK),
                                add(CreativeAssetDetectedFeaturesEnum.VIDEO),
                                add(CreativeAssetDetectedFeaturesEnum.INDEXED_DB),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_EXPANDING;
                            duration = 540833;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_CUSTOM;
                            expandedDimension = new Size() {{
                                height = 432055;
                                iab = false;
                                id = "molestias";
                                kind = "fuga";
                                width = 251713;
                            }};
                            fileSize = "nam";
                            flashVersion = 519469;
                            frameRate = 2816.3;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "non";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "illum";
                                etag = "adipisci";
                                id = "82dbec75-c68c-4606-9946-8ce304d8849b";
                                kind = "sapiente";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "explicabo";
                            }};
                            mediaDuration = 869.17;
                            mimeType = "incidunt";
                            offset = new OffsetPosition() {{
                                left = 757027;
                                top = 230052;
                            }};
                            orientation = CreativeAssetOrientationEnum.LANDSCAPE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 468840;
                                top = 943706;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PERCENT;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PERCENT;
                            progressiveServingUrl = "libero";
                            pushdown = false;
                            pushdownDuration = 7393.79;
                            role = CreativeAssetRoleEnum.PRIMARY;
                            size = new Size() {{
                                height = 785549;
                                iab = false;
                                id = "vel";
                                kind = "omnis";
                                width = 924275;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "quam";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.OPAQUE;
                            zIndex = 817623;
                            zipFilename = "libero";
                            zipFilesize = "vitae";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 289681;
                                    iab = false;
                                    id = "incidunt";
                                    kind = "tempore";
                                    width = 644817;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_BOTTOM;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Hilda Ortiz";
                                type = CreativeAssetIdTypeEnum.IMAGE;
                            }};
                            audioBitRate = 897509;
                            audioSampleRate = 816272;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "reprehenderit";
                                advertiserCustomEventName = "laborum";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "soluta";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "explicabo";
                                    customClickThroughUrl = "recusandae";
                                    landingPageId = "unde";
                                }};
                                id = "iusto";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 132366;
                                        iab = false;
                                        id = "ea";
                                        kind = "architecto";
                                        width = 939472;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 739302;
                                        top = 1961;
                                    }};
                                    positionType = PopupWindowPropertiesPositionTypeEnum.COORDINATES;
                                    showAddressBar = false;
                                    showMenuBar = false;
                                    showScrollBar = false;
                                    showStatusBar = false;
                                    showToolBar = false;
                                    title = "Mrs.";
                                }};
                                targetType = CreativeCustomEventTargetTypeEnum.TARGET_SELF;
                                videoReportingId = "temporibus";
                            }};
                            bitRate = 140711;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_VIDEO;
                            collapsedSize = new Size() {{
                                height = 749343;
                                iab = false;
                                id = "exercitationem";
                                kind = "beatae";
                                width = 587817;
                            }};
                            companionCreativeIds = new String[]{{
                                add("ex"),
                                add("tempore"),
                                add("minima"),
                            }};
                            customStartTimeValue = 713538;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.INPUT_TYPE_TIME),
                                add(CreativeAssetDetectedFeaturesEnum.CANVAS),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_INPAGE;
                            duration = 924162;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_CUSTOM;
                            expandedDimension = new Size() {{
                                height = 959673;
                                iab = false;
                                id = "iusto";
                                kind = "quasi";
                                width = 138861;
                            }};
                            fileSize = "tempore";
                            flashVersion = 498355;
                            frameRate = 6577.63;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "ducimus";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "similique";
                                etag = "expedita";
                                id = "0344b171-0688-4dee-bef8-97f3dd0ccd33";
                                kind = "tenetur";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "dicta";
                            }};
                            mediaDuration = 6984.45;
                            mimeType = "neque";
                            offset = new OffsetPosition() {{
                                left = 913152;
                                top = 303365;
                            }};
                            orientation = CreativeAssetOrientationEnum.SQUARE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 3091;
                                top = 528631;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PERCENT;
                            progressiveServingUrl = "officia";
                            pushdown = false;
                            pushdownDuration = 1120.81;
                            role = CreativeAssetRoleEnum.PRIMARY;
                            size = new Size() {{
                                height = 275288;
                                iab = false;
                                id = "architecto";
                                kind = "deleniti";
                                width = 433555;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "optio";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.WINDOW;
                            zIndex = 352288;
                            zipFilename = "provident";
                            zipFilesize = "officiis";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 177341;
                                    iab = false;
                                    id = "delectus";
                                    kind = "dolor";
                                    width = 492427;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Tim Runolfsson";
                                type = CreativeAssetIdTypeEnum.IMAGE;
                            }};
                            audioBitRate = 857075;
                            audioSampleRate = 196647;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "consequatur";
                                advertiserCustomEventName = "voluptates";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "at";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "sunt";
                                    customClickThroughUrl = "ipsa";
                                    landingPageId = "incidunt";
                                }};
                                id = "maiores";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 635584;
                                        iab = false;
                                        id = "dolore";
                                        kind = "eius";
                                        width = 438216;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 2083;
                                        top = 473075;
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
                                videoReportingId = "ducimus";
                            }};
                            bitRate = 324955;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_IMAGE;
                            collapsedSize = new Size() {{
                                height = 283936;
                                iab = false;
                                id = "tempora";
                                kind = "sed";
                                width = 559668;
                            }};
                            companionCreativeIds = new String[]{{
                                add("laudantium"),
                            }};
                            customStartTimeValue = 144913;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.WEBGL),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR;
                            duration = 726851;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_AUTO;
                            expandedDimension = new Size() {{
                                height = 940076;
                                iab = false;
                                id = "eum";
                                kind = "sint";
                                width = 909351;
                            }};
                            fileSize = "veniam";
                            flashVersion = 602681;
                            frameRate = 1639.27;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "laboriosam";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "iusto";
                                etag = "quisquam";
                                id = "71cc8d3c-d425-48d0-b58a-82c808fe2751";
                                kind = "laborum";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "perferendis";
                            }};
                            mediaDuration = 2756.08;
                            mimeType = "ducimus";
                            offset = new OffsetPosition() {{
                                left = 798954;
                                top = 13223;
                            }};
                            orientation = CreativeAssetOrientationEnum.LANDSCAPE;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 254191;
                                top = 609429;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL_FROM_CENTER;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PIXEL;
                            progressiveServingUrl = "quaerat";
                            pushdown = false;
                            pushdownDuration = 2021.45;
                            role = CreativeAssetRoleEnum.TRANSCODED_AUDIO;
                            size = new Size() {{
                                height = 619143;
                                iab = false;
                                id = "laboriosam";
                                kind = "quasi";
                                width = 567763;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_CUSTOM;
                            streamingServingUrl = "cum";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.WINDOW;
                            zIndex = 833521;
                            zipFilename = "incidunt";
                            zipFilesize = "aperiam";
                        }}),
                        add(new CreativeAsset() {{
                            actionScript3 = false;
                            active = false;
                            additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 357589;
                                    iab = false;
                                    id = "laborum";
                                    kind = "quae";
                                    width = 64184;
                                }}),
                                add(new Size() {{
                                    height = 972654;
                                    iab = false;
                                    id = "est";
                                    kind = "modi";
                                    width = 198379;
                                }}),
                                add(new Size() {{
                                    height = 417625;
                                    iab = false;
                                    id = "repudiandae";
                                    kind = "commodi";
                                    width = 153732;
                                }}),
                                add(new Size() {{
                                    height = 346951;
                                    iab = false;
                                    id = "natus";
                                    kind = "explicabo";
                                    width = 242406;
                                }}),
                            }};
                            alignment = CreativeAssetAlignmentEnum.ALIGNMENT_TOP;
                            artworkType = CreativeAssetArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            assetIdentifier = new CreativeAssetId() {{
                                name = "Derek Schimmel";
                                type = CreativeAssetIdTypeEnum.IMAGE;
                            }};
                            audioBitRate = 239830;
                            audioSampleRate = 479372;
                            backupImageExit = new CreativeCustomEvent() {{
                                advertiserCustomEventId = "ratione";
                                advertiserCustomEventName = "omnis";
                                advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                                artworkLabel = "impedit";
                                artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_HTML5;
                                exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                    computedClickThroughUrl = "quas";
                                    customClickThroughUrl = "nemo";
                                    landingPageId = "facilis";
                                }};
                                id = "exercitationem";
                                popupWindowProperties = new PopupWindowProperties() {{
                                    dimension = new Size() {{
                                        height = 859082;
                                        iab = false;
                                        id = "tempore";
                                        kind = "magnam";
                                        width = 979255;
                                    }};
                                    offset = new OffsetPosition() {{
                                        left = 340167;
                                        top = 12881;
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
                                videoReportingId = "adipisci";
                            }};
                            bitRate = 971531;
                            childAssetType = CreativeAssetChildAssetTypeEnum.CHILD_ASSET_TYPE_DATA;
                            collapsedSize = new Size() {{
                                height = 736103;
                                iab = false;
                                id = "vero";
                                kind = "asperiores";
                                width = 406844;
                            }};
                            companionCreativeIds = new String[]{{
                                add("aliquid"),
                                add("nobis"),
                            }};
                            customStartTimeValue = 443973;
                            detectedFeatures = new org.openapis.openapi.models.shared.CreativeAssetDetectedFeaturesEnum[]{{
                                add(CreativeAssetDetectedFeaturesEnum.CSS_BORDER_IMAGE),
                            }};
                            displayType = CreativeAssetDisplayTypeEnum.ASSET_DISPLAY_TYPE_FLASH_IN_FLASH;
                            duration = 865309;
                            durationType = CreativeAssetDurationTypeEnum.ASSET_DURATION_TYPE_NONE;
                            expandedDimension = new Size() {{
                                height = 705418;
                                iab = false;
                                id = "in";
                                kind = "ad";
                                width = 29722;
                            }};
                            fileSize = "sit";
                            flashVersion = 316842;
                            frameRate = 1816.15;
                            hideFlashObjects = false;
                            hideSelectionBoxes = false;
                            horizontallyLocked = false;
                            id = "dolorum";
                            idDimensionValue = new DimensionValue() {{
                                dimensionName = "ad";
                                etag = "nisi";
                                id = "47edc439-ed8c-4432-8f41-240d4487ac69";
                                kind = "neque";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "excepturi";
                            }};
                            mediaDuration = 3121.46;
                            mimeType = "nobis";
                            offset = new OffsetPosition() {{
                                left = 198485;
                                top = 694952;
                            }};
                            orientation = CreativeAssetOrientationEnum.PORTRAIT;
                            originalBackup = false;
                            politeLoad = false;
                            position = new OffsetPosition() {{
                                left = 856985;
                                top = 167183;
                            }};
                            positionLeftUnit = CreativeAssetPositionLeftUnitEnum.OFFSET_UNIT_PIXEL;
                            positionTopUnit = CreativeAssetPositionTopUnitEnum.OFFSET_UNIT_PERCENT;
                            progressiveServingUrl = "blanditiis";
                            pushdown = false;
                            pushdownDuration = 8422.41;
                            role = CreativeAssetRoleEnum.PARENT_VIDEO;
                            size = new Size() {{
                                height = 600810;
                                iab = false;
                                id = "ad";
                                kind = "officia";
                                width = 686421;
                            }};
                            sslCompliant = false;
                            startTimeType = CreativeAssetStartTimeTypeEnum.ASSET_START_TIME_TYPE_NONE;
                            streamingServingUrl = "aspernatur";
                            transparency = false;
                            verticallyLocked = false;
                            windowMode = CreativeAssetWindowModeEnum.TRANSPARENT;
                            zIndex = 805149;
                            zipFilename = "dolore";
                            zipFilesize = "accusantium";
                        }}),
                    }};
                    creativeFieldAssignments = new org.openapis.openapi.models.shared.CreativeFieldAssignment[]{{
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "laboriosam";
                            creativeFieldValueId = "laboriosam";
                        }}),
                        add(new CreativeFieldAssignment() {{
                            creativeFieldId = "omnis";
                            creativeFieldValueId = "tenetur";
                        }}),
                    }};
                    customKeyValues = new String[]{{
                        add("iste"),
                        add("animi"),
                    }};
                    dynamicAssetSelection = false;
                    exitCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "doloremque";
                            advertiserCustomEventName = "voluptas";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_COUNTER;
                            artworkLabel = "fugit";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_FLASH;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "odit";
                                customClickThroughUrl = "labore";
                                landingPageId = "perspiciatis";
                            }};
                            id = "dolore";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 352016;
                                    iab = false;
                                    id = "aut";
                                    kind = "atque";
                                    width = 94023;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 620659;
                                    top = 851884;
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
                            videoReportingId = "cum";
                        }}),
                    }};
                    fsCommand = new FsCommand() {{
                        left = 92445;
                        positionOption = FsCommandPositionOptionEnum.DISTANCE_FROM_TOP_LEFT_CORNER;
                        top = 300375;
                        windowHeight = 74530;
                        windowWidth = 538516;
                    }};;
                    htmlCode = "magnam";
                    htmlCodeLocked = false;
                    id = "incidunt";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "consequatur";
                        etag = "nisi";
                        id = "0e00310d-023d-4c90-9f5a-fd2a6c44846a";
                        kind = "itaque";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "assumenda";
                    }};;
                    kind = "praesentium";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "occaecati";
                    }};;
                    latestTraffickedCreativeId = "eos";
                    mediaDescription = "veniam";
                    mediaDuration = 2306.48;
                    name = "Byron McKenzie";
                    obaIcon = new ObaIcon() {{
                        iconClickThroughUrl = "delectus";
                        iconClickTrackingUrl = "quaerat";
                        iconViewTrackingUrl = "quos";
                        program = "excepturi";
                        resourceUrl = "eum";
                        size = new Size() {{
                            height = 699962;
                            iab = false;
                            id = "a";
                            kind = "ad";
                            width = 91613;
                        }};;
                        xPosition = "eveniet";
                        yPosition = "tempora";
                    }};;
                    overrideCss = "ea";
                    progressOffset = new VideoOffset() {{
                        offsetPercentage = 346394;
                        offsetSeconds = 149172;
                    }};;
                    redirectUrl = "fugiat";
                    renderingId = "dolorem";
                    renderingIdDimensionValue = new DimensionValue() {{
                        dimensionName = "cumque";
                        etag = "nesciunt";
                        id = "43d61778-af49-4124-b725-e621909e9104";
                        kind = "labore";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "ullam";
                    }};;
                    requiredFlashPluginVersion = "quibusdam";
                    requiredFlashVersion = 923161;
                    size = new Size() {{
                        height = 321263;
                        iab = false;
                        id = "omnis";
                        kind = "mollitia";
                        width = 807822;
                    }};;
                    skipOffset = new VideoOffset() {{
                        offsetPercentage = 472131;
                        offsetSeconds = 496024;
                    }};;
                    skippable = false;
                    sslCompliant = false;
                    sslOverride = false;
                    studioAdvertiserId = "eaque";
                    studioCreativeId = "aliquid";
                    studioTraffickedCreativeId = "ea";
                    subaccountId = "odio";
                    thirdPartyBackupImageImpressionsUrl = "voluptatem";
                    thirdPartyRichMediaImpressionsUrl = "quisquam";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyTrackingUrl[]{{
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.CLICK_TRACKING;
                            url = "optio";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_PROGRESS;
                            url = "quis";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_STOP;
                            url = "consectetur";
                        }}),
                        add(new ThirdPartyTrackingUrl() {{
                            thirdPartyUrlType = ThirdPartyTrackingUrlThirdPartyUrlTypeEnum.VIDEO_FIRST_QUARTILE;
                            url = "aliquid";
                        }}),
                    }};
                    timerCustomEvents = new org.openapis.openapi.models.shared.CreativeCustomEvent[]{{
                        add(new CreativeCustomEvent() {{
                            advertiserCustomEventId = "enim";
                            advertiserCustomEventName = "explicabo";
                            advertiserCustomEventType = CreativeCustomEventAdvertiserCustomEventTypeEnum.ADVERTISER_EVENT_EXIT;
                            artworkLabel = "beatae";
                            artworkType = CreativeCustomEventArtworkTypeEnum.ARTWORK_TYPE_IMAGE;
                            exitClickThroughUrl = new CreativeClickThroughUrl() {{
                                computedClickThroughUrl = "ex";
                                customClickThroughUrl = "ex";
                                landingPageId = "harum";
                            }};
                            id = "cum";
                            popupWindowProperties = new PopupWindowProperties() {{
                                dimension = new Size() {{
                                    height = 250182;
                                    iab = false;
                                    id = "quia";
                                    kind = "laboriosam";
                                    width = 533681;
                                }};
                                offset = new OffsetPosition() {{
                                    left = 564196;
                                    top = 493734;
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
                            videoReportingId = "dolorum";
                        }}),
                    }};
                    totalFileSize = "qui";
                    type = CreativeTypeEnum.DISPLAY;
                    universalAdId = new UniversalAdId() {{
                        registry = UniversalAdIdRegistryEnum.OTHER;
                        value = "amet";
                    }};;
                    version = 371409;
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "accusamus";
                key = "error";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "recusandae";
                uploadProtocol = "aliquid";
            }};            

            DfareportingCreativesUpdateResponse res = sdk.creatives.dfareportingCreativesUpdate(req, new DfareportingCreativesUpdateSecurity("impedit", "reiciendis") {{
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
