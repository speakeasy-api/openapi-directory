import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeAssetId } from "./creativeassetid";
import { CreativeCustomEvent } from "./creativecustomevent";
import { DimensionValue } from "./dimensionvalue";
import { OffsetPosition } from "./offsetposition";
import { Size } from "./size";
/**
 * Possible alignments for an asset. This is a read-only field. Applicable to the following creative types: RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL .
 */
export declare enum CreativeAssetAlignmentEnum {
    AlignmentTop = "ALIGNMENT_TOP",
    AlignmentRight = "ALIGNMENT_RIGHT",
    AlignmentBottom = "ALIGNMENT_BOTTOM",
    AlignmentLeft = "ALIGNMENT_LEFT"
}
/**
 * Artwork type of rich media creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
 */
export declare enum CreativeAssetArtworkTypeEnum {
    ArtworkTypeFlash = "ARTWORK_TYPE_FLASH",
    ArtworkTypeHtml5 = "ARTWORK_TYPE_HTML5",
    ArtworkTypeMixed = "ARTWORK_TYPE_MIXED",
    ArtworkTypeImage = "ARTWORK_TYPE_IMAGE"
}
/**
 * Rich media child asset type. This is a read-only field. Applicable to the following creative types: all VPAID.
 */
export declare enum CreativeAssetChildAssetTypeEnum {
    ChildAssetTypeFlash = "CHILD_ASSET_TYPE_FLASH",
    ChildAssetTypeVideo = "CHILD_ASSET_TYPE_VIDEO",
    ChildAssetTypeImage = "CHILD_ASSET_TYPE_IMAGE",
    ChildAssetTypeData = "CHILD_ASSET_TYPE_DATA"
}
export declare enum CreativeAssetDetectedFeaturesEnum {
    CssFontFace = "CSS_FONT_FACE",
    CssBackgroundSize = "CSS_BACKGROUND_SIZE",
    CssBorderImage = "CSS_BORDER_IMAGE",
    CssBorderRadius = "CSS_BORDER_RADIUS",
    CssBoxShadow = "CSS_BOX_SHADOW",
    CssFlexBox = "CSS_FLEX_BOX",
    CssHsla = "CSS_HSLA",
    CssMultipleBgs = "CSS_MULTIPLE_BGS",
    CssOpacity = "CSS_OPACITY",
    CssRgba = "CSS_RGBA",
    CssTextShadow = "CSS_TEXT_SHADOW",
    CssAnimations = "CSS_ANIMATIONS",
    CssColumns = "CSS_COLUMNS",
    CssGeneratedContent = "CSS_GENERATED_CONTENT",
    CssGradients = "CSS_GRADIENTS",
    CssReflections = "CSS_REFLECTIONS",
    CssTransforms = "CSS_TRANSFORMS",
    CssTransforms3D = "CSS_TRANSFORMS3D",
    CssTransitions = "CSS_TRANSITIONS",
    ApplicationCache = "APPLICATION_CACHE",
    Canvas = "CANVAS",
    CanvasText = "CANVAS_TEXT",
    DragAndDrop = "DRAG_AND_DROP",
    HashChange = "HASH_CHANGE",
    History = "HISTORY",
    Audio = "AUDIO",
    Video = "VIDEO",
    IndexedDb = "INDEXED_DB",
    InputAttrAutocomplete = "INPUT_ATTR_AUTOCOMPLETE",
    InputAttrAutofocus = "INPUT_ATTR_AUTOFOCUS",
    InputAttrList = "INPUT_ATTR_LIST",
    InputAttrPlaceholder = "INPUT_ATTR_PLACEHOLDER",
    InputAttrMax = "INPUT_ATTR_MAX",
    InputAttrMin = "INPUT_ATTR_MIN",
    InputAttrMultiple = "INPUT_ATTR_MULTIPLE",
    InputAttrPattern = "INPUT_ATTR_PATTERN",
    InputAttrRequired = "INPUT_ATTR_REQUIRED",
    InputAttrStep = "INPUT_ATTR_STEP",
    InputTypeSearch = "INPUT_TYPE_SEARCH",
    InputTypeTel = "INPUT_TYPE_TEL",
    InputTypeUrl = "INPUT_TYPE_URL",
    InputTypeEmail = "INPUT_TYPE_EMAIL",
    InputTypeDatetime = "INPUT_TYPE_DATETIME",
    InputTypeDate = "INPUT_TYPE_DATE",
    InputTypeMonth = "INPUT_TYPE_MONTH",
    InputTypeWeek = "INPUT_TYPE_WEEK",
    InputTypeTime = "INPUT_TYPE_TIME",
    InputTypeDatetimeLocal = "INPUT_TYPE_DATETIME_LOCAL",
    InputTypeNumber = "INPUT_TYPE_NUMBER",
    InputTypeRange = "INPUT_TYPE_RANGE",
    InputTypeColor = "INPUT_TYPE_COLOR",
    LocalStorage = "LOCAL_STORAGE",
    PostMessage = "POST_MESSAGE",
    SessionStorage = "SESSION_STORAGE",
    WebSockets = "WEB_SOCKETS",
    WebSqlDatabase = "WEB_SQL_DATABASE",
    WebWorkers = "WEB_WORKERS",
    GeoLocation = "GEO_LOCATION",
    InlineSvg = "INLINE_SVG",
    Smil = "SMIL",
    SvgHref = "SVG_HREF",
    SvgClipPaths = "SVG_CLIP_PATHS",
    Touch = "TOUCH",
    Webgl = "WEBGL",
    SvgFilters = "SVG_FILTERS",
    SvgFeImage = "SVG_FE_IMAGE"
}
/**
 * Type of rich media asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
 */
export declare enum CreativeAssetDisplayTypeEnum {
    AssetDisplayTypeInpage = "ASSET_DISPLAY_TYPE_INPAGE",
    AssetDisplayTypeFloating = "ASSET_DISPLAY_TYPE_FLOATING",
    AssetDisplayTypeOverlay = "ASSET_DISPLAY_TYPE_OVERLAY",
    AssetDisplayTypeExpanding = "ASSET_DISPLAY_TYPE_EXPANDING",
    AssetDisplayTypeFlashInFlash = "ASSET_DISPLAY_TYPE_FLASH_IN_FLASH",
    AssetDisplayTypeFlashInFlashExpanding = "ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING",
    AssetDisplayTypePeelDown = "ASSET_DISPLAY_TYPE_PEEL_DOWN",
    AssetDisplayTypeVpaidLinear = "ASSET_DISPLAY_TYPE_VPAID_LINEAR",
    AssetDisplayTypeVpaidNonLinear = "ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR",
    AssetDisplayTypeBackdrop = "ASSET_DISPLAY_TYPE_BACKDROP"
}
/**
 * Duration type for which an asset will be displayed. Applicable to the following creative types: all RICH_MEDIA.
 */
export declare enum CreativeAssetDurationTypeEnum {
    AssetDurationTypeAuto = "ASSET_DURATION_TYPE_AUTO",
    AssetDurationTypeNone = "ASSET_DURATION_TYPE_NONE",
    AssetDurationTypeCustom = "ASSET_DURATION_TYPE_CUSTOM"
}
/**
 * Orientation of video asset. This is a read-only, auto-generated field.
 */
export declare enum CreativeAssetOrientationEnum {
    Landscape = "LANDSCAPE",
    Portrait = "PORTRAIT",
    Square = "SQUARE"
}
/**
 * Offset left unit for an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
 */
export declare enum CreativeAssetPositionLeftUnitEnum {
    OffsetUnitPixel = "OFFSET_UNIT_PIXEL",
    OffsetUnitPercent = "OFFSET_UNIT_PERCENT",
    OffsetUnitPixelFromCenter = "OFFSET_UNIT_PIXEL_FROM_CENTER"
}
/**
 * Offset top unit for an asset. This is a read-only field if the asset displayType is ASSET_DISPLAY_TYPE_OVERLAY. Applicable to the following creative types: all RICH_MEDIA.
 */
export declare enum CreativeAssetPositionTopUnitEnum {
    OffsetUnitPixel = "OFFSET_UNIT_PIXEL",
    OffsetUnitPercent = "OFFSET_UNIT_PERCENT",
    OffsetUnitPixelFromCenter = "OFFSET_UNIT_PIXEL_FROM_CENTER"
}
/**
 * Role of the asset in relation to creative. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. This is a required field. PRIMARY applies to DISPLAY, FLASH_INPAGE, HTML5_BANNER, IMAGE, DISPLAY_IMAGE_GALLERY, all RICH_MEDIA (which may contain multiple primary assets), and all VPAID creatives. BACKUP_IMAGE applies to FLASH_INPAGE, HTML5_BANNER, all RICH_MEDIA, and all VPAID creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. ADDITIONAL_IMAGE and ADDITIONAL_FLASH apply to FLASH_INPAGE creatives. OTHER refers to assets from sources other than Campaign Manager, such as Studio uploaded assets, applicable to all RICH_MEDIA and all VPAID creatives. PARENT_VIDEO refers to videos uploaded by the user in Campaign Manager and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. TRANSCODED_VIDEO refers to videos transcoded by Campaign Manager from PARENT_VIDEO assets and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. ALTERNATE_VIDEO refers to the Campaign Manager representation of child asset videos from Studio, and is applicable to VPAID_LINEAR_VIDEO creatives. These cannot be added or removed within Campaign Manager. For VPAID_LINEAR_VIDEO creatives, PARENT_VIDEO, TRANSCODED_VIDEO and ALTERNATE_VIDEO assets that are marked active serve as backup in case the VPAID creative cannot be served. Only PARENT_VIDEO assets can be added or removed for an INSTREAM_VIDEO or VPAID_LINEAR_VIDEO creative. PARENT_AUDIO refers to audios uploaded by the user in Campaign Manager and is applicable to INSTREAM_AUDIO creatives. TRANSCODED_AUDIO refers to audios transcoded by Campaign Manager from PARENT_AUDIO assets and is applicable to INSTREAM_AUDIO creatives.
 */
export declare enum CreativeAssetRoleEnum {
    Primary = "PRIMARY",
    BackupImage = "BACKUP_IMAGE",
    AdditionalImage = "ADDITIONAL_IMAGE",
    AdditionalFlash = "ADDITIONAL_FLASH",
    ParentVideo = "PARENT_VIDEO",
    TranscodedVideo = "TRANSCODED_VIDEO",
    Other = "OTHER",
    AlternateVideo = "ALTERNATE_VIDEO",
    ParentAudio = "PARENT_AUDIO",
    TranscodedAudio = "TRANSCODED_AUDIO"
}
/**
 * Initial wait time type before making the asset visible. Applicable to the following creative types: all RICH_MEDIA.
 */
export declare enum CreativeAssetStartTimeTypeEnum {
    AssetStartTimeTypeNone = "ASSET_START_TIME_TYPE_NONE",
    AssetStartTimeTypeCustom = "ASSET_START_TIME_TYPE_CUSTOM"
}
/**
 * Window mode options for flash assets. Applicable to the following creative types: FLASH_INPAGE, RICH_MEDIA_DISPLAY_EXPANDING, RICH_MEDIA_IM_EXPAND, RICH_MEDIA_DISPLAY_BANNER, and RICH_MEDIA_INPAGE_FLOATING.
 */
export declare enum CreativeAssetWindowModeEnum {
    Opaque = "OPAQUE",
    Window = "WINDOW",
    Transparent = "TRANSPARENT"
}
/**
 * Creative Asset.
 */
export declare class CreativeAsset extends SpeakeasyBase {
    /**
     * Whether ActionScript3 is enabled for the flash asset. This is a read-only field. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    actionScript3?: boolean;
    /**
     * Whether the video or audio asset is active. This is a read-only field for VPAID_NON_LINEAR_VIDEO assets. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
     */
    active?: boolean;
    /**
     * Additional sizes associated with this creative asset. HTML5 asset generated by compatible software such as GWD will be able to support more sizes this creative asset can render.
     */
    additionalSizes?: Size[];
    /**
     * Possible alignments for an asset. This is a read-only field. Applicable to the following creative types: RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL .
     */
    alignment?: CreativeAssetAlignmentEnum;
    /**
     * Artwork type of rich media creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    artworkType?: CreativeAssetArtworkTypeEnum;
    /**
     * Creative Asset ID.
     */
    assetIdentifier?: CreativeAssetId;
    /**
     * Audio stream bit rate in kbps. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
     */
    audioBitRate?: number;
    /**
     * Audio sample bit rate in hertz. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
     */
    audioSampleRate?: number;
    /**
     * Creative Custom Event.
     */
    backupImageExit?: CreativeCustomEvent;
    /**
     * Detected bit-rate for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
     */
    bitRate?: number;
    /**
     * Rich media child asset type. This is a read-only field. Applicable to the following creative types: all VPAID.
     */
    childAssetType?: CreativeAssetChildAssetTypeEnum;
    /**
     * Represents the dimensions of ads, placements, creatives, or creative assets.
     */
    collapsedSize?: Size;
    /**
     * List of companion creatives assigned to an in-stream video creative asset. Acceptable values include IDs of existing flash and image creatives. Applicable to INSTREAM_VIDEO creative type with dynamicAssetSelection set to true.
     */
    companionCreativeIds?: string[];
    /**
     * Custom start time in seconds for making the asset visible. Applicable to the following creative types: all RICH_MEDIA. Value must be greater than or equal to 0.
     */
    customStartTimeValue?: number;
    /**
     * List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    detectedFeatures?: CreativeAssetDetectedFeaturesEnum[];
    /**
     * Type of rich media asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    displayType?: CreativeAssetDisplayTypeEnum;
    /**
     * Duration in seconds for which an asset will be displayed. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID_LINEAR_VIDEO. Value must be greater than or equal to 1.
     */
    duration?: number;
    /**
     * Duration type for which an asset will be displayed. Applicable to the following creative types: all RICH_MEDIA.
     */
    durationType?: CreativeAssetDurationTypeEnum;
    /**
     * Represents the dimensions of ads, placements, creatives, or creative assets.
     */
    expandedDimension?: Size;
    /**
     * File size associated with this creative asset. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
     */
    fileSize?: string;
    /**
     * Flash version of the asset. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    flashVersion?: number;
    /**
     * Video frame rate for video asset in frames per second. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
     */
    frameRate?: number;
    /**
     * Whether to hide Flash objects flag for an asset. Applicable to the following creative types: all RICH_MEDIA.
     */
    hideFlashObjects?: boolean;
    /**
     * Whether to hide selection boxes flag for an asset. Applicable to the following creative types: all RICH_MEDIA.
     */
    hideSelectionBoxes?: boolean;
    /**
     * Whether the asset is horizontally locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    horizontallyLocked?: boolean;
    /**
     * Numeric ID of this creative asset. This is a required field and should not be modified. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
     */
    id?: string;
    /**
     * Represents a DimensionValue resource.
     */
    idDimensionValue?: DimensionValue;
    /**
     * Detected duration for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
     */
    mediaDuration?: number;
    /**
     * Detected MIME type for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
     */
    mimeType?: string;
    /**
     * Offset Position.
     */
    offset?: OffsetPosition;
    /**
     * Orientation of video asset. This is a read-only, auto-generated field.
     */
    orientation?: CreativeAssetOrientationEnum;
    /**
     * Whether the backup asset is original or changed by the user in Campaign Manager. Applicable to the following creative types: all RICH_MEDIA.
     */
    originalBackup?: boolean;
    /**
     * Whether this asset is used as a polite load asset.
     */
    politeLoad?: boolean;
    /**
     * Offset Position.
     */
    position?: OffsetPosition;
    /**
     * Offset left unit for an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    positionLeftUnit?: CreativeAssetPositionLeftUnitEnum;
    /**
     * Offset top unit for an asset. This is a read-only field if the asset displayType is ASSET_DISPLAY_TYPE_OVERLAY. Applicable to the following creative types: all RICH_MEDIA.
     */
    positionTopUnit?: CreativeAssetPositionTopUnitEnum;
    /**
     * Progressive URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
     */
    progressiveServingUrl?: string;
    /**
     * Whether the asset pushes down other content. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable when the asset offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height.
     */
    pushdown?: boolean;
    /**
     * Pushdown duration in seconds for an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable when the asset pushdown field is true, the offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. Acceptable values are 0 to 9.99, inclusive.
     */
    pushdownDuration?: number;
    /**
     * Role of the asset in relation to creative. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. This is a required field. PRIMARY applies to DISPLAY, FLASH_INPAGE, HTML5_BANNER, IMAGE, DISPLAY_IMAGE_GALLERY, all RICH_MEDIA (which may contain multiple primary assets), and all VPAID creatives. BACKUP_IMAGE applies to FLASH_INPAGE, HTML5_BANNER, all RICH_MEDIA, and all VPAID creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. ADDITIONAL_IMAGE and ADDITIONAL_FLASH apply to FLASH_INPAGE creatives. OTHER refers to assets from sources other than Campaign Manager, such as Studio uploaded assets, applicable to all RICH_MEDIA and all VPAID creatives. PARENT_VIDEO refers to videos uploaded by the user in Campaign Manager and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. TRANSCODED_VIDEO refers to videos transcoded by Campaign Manager from PARENT_VIDEO assets and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. ALTERNATE_VIDEO refers to the Campaign Manager representation of child asset videos from Studio, and is applicable to VPAID_LINEAR_VIDEO creatives. These cannot be added or removed within Campaign Manager. For VPAID_LINEAR_VIDEO creatives, PARENT_VIDEO, TRANSCODED_VIDEO and ALTERNATE_VIDEO assets that are marked active serve as backup in case the VPAID creative cannot be served. Only PARENT_VIDEO assets can be added or removed for an INSTREAM_VIDEO or VPAID_LINEAR_VIDEO creative. PARENT_AUDIO refers to audios uploaded by the user in Campaign Manager and is applicable to INSTREAM_AUDIO creatives. TRANSCODED_AUDIO refers to audios transcoded by Campaign Manager from PARENT_AUDIO assets and is applicable to INSTREAM_AUDIO creatives.
     */
    role?: CreativeAssetRoleEnum;
    /**
     * Represents the dimensions of ads, placements, creatives, or creative assets.
     */
    size?: Size;
    /**
     * Whether the asset is SSL-compliant. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
     */
    sslCompliant?: boolean;
    /**
     * Initial wait time type before making the asset visible. Applicable to the following creative types: all RICH_MEDIA.
     */
    startTimeType?: CreativeAssetStartTimeTypeEnum;
    /**
     * Streaming URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
     */
    streamingServingUrl?: string;
    /**
     * Whether the asset is transparent. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable to HTML5 assets.
     */
    transparency?: boolean;
    /**
     * Whether the asset is vertically locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    verticallyLocked?: boolean;
    /**
     * Window mode options for flash assets. Applicable to the following creative types: FLASH_INPAGE, RICH_MEDIA_DISPLAY_EXPANDING, RICH_MEDIA_IM_EXPAND, RICH_MEDIA_DISPLAY_BANNER, and RICH_MEDIA_INPAGE_FLOATING.
     */
    windowMode?: CreativeAssetWindowModeEnum;
    /**
     * zIndex value of an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable to assets whose displayType is NOT one of the following types: ASSET_DISPLAY_TYPE_INPAGE or ASSET_DISPLAY_TYPE_OVERLAY. Acceptable values are -999999999 to 999999999, inclusive.
     */
    zIndex?: number;
    /**
     * File name of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
     */
    zipFilename?: string;
    /**
     * Size of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
     */
    zipFilesize?: string;
}
