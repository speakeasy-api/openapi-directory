import { SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
export declare enum CreativeSizeAllowedFormatsEnum {
    Unknown = "UNKNOWN",
    Audio = "AUDIO"
}
/**
 * The creative size type.
 */
export declare enum CreativeSizeCreativeSizeTypeEnum {
    CreativeSizeTypeUnspecified = "CREATIVE_SIZE_TYPE_UNSPECIFIED",
    Regular = "REGULAR",
    Interstitial = "INTERSTITIAL",
    Video = "VIDEO",
    Native = "NATIVE"
}
/**
 * Output only. The native template for this creative. It will have a value only if creative_size_type = CreativeSizeType.NATIVE.
 */
export declare enum CreativeSizeNativeTemplateEnum {
    UnknownNativeTemplate = "UNKNOWN_NATIVE_TEMPLATE",
    NativeContentAd = "NATIVE_CONTENT_AD",
    NativeAppInstallAd = "NATIVE_APP_INSTALL_AD",
    NativeVideoContentAd = "NATIVE_VIDEO_CONTENT_AD",
    NativeVideoAppInstallAd = "NATIVE_VIDEO_APP_INSTALL_AD"
}
/**
 * The type of skippable ad for this creative. It will have a value only if creative_size_type = CreativeSizeType.VIDEO.
 */
export declare enum CreativeSizeSkippableAdTypeEnum {
    SkippableAdTypeUnspecified = "SKIPPABLE_AD_TYPE_UNSPECIFIED",
    Generic = "GENERIC",
    InstreamSelect = "INSTREAM_SELECT",
    NotSkippable = "NOT_SKIPPABLE"
}
/**
 * Specifies the size of the creative.
 */
export declare class CreativeSize extends SpeakeasyBase {
    /**
     * What formats are allowed by the publisher. If this repeated field is empty then all formats are allowed. For example, if this field contains AllowedFormatType.AUDIO then the publisher only allows an audio ad (without any video).
     */
    allowedFormats?: CreativeSizeAllowedFormatsEnum[];
    /**
     * For video creatives specifies the sizes of companion ads (if present). Companion sizes may be filled in only when creative_size_type = VIDEO
     */
    companionSizes?: Size[];
    /**
     * The creative size type.
     */
    creativeSizeType?: CreativeSizeCreativeSizeTypeEnum;
    /**
     * Output only. The native template for this creative. It will have a value only if creative_size_type = CreativeSizeType.NATIVE.
     */
    nativeTemplate?: CreativeSizeNativeTemplateEnum;
    /**
     * Message depicting the size of the creative. The units of width and height depend on the type of the targeting.
     */
    size?: Size;
    /**
     * The type of skippable ad for this creative. It will have a value only if creative_size_type = CreativeSizeType.VIDEO.
     */
    skippableAdType?: CreativeSizeSkippableAdTypeEnum;
}
