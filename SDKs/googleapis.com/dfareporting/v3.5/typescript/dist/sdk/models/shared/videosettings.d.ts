import { SpeakeasyBase } from "../../../internal/utils";
import { CompanionSetting } from "./companionsetting";
import { ObaIcon } from "./obaicon";
import { SkippableSetting } from "./skippablesetting";
import { TranscodeSetting } from "./transcodesetting";
/**
 * Orientation of a video placement. If this value is set, placement will return assets matching the specified orientation.
 */
export declare enum VideoSettingsOrientationEnum {
    Any = "ANY",
    Landscape = "LANDSCAPE",
    Portrait = "PORTRAIT"
}
/**
 * Video Settings
 */
export declare class VideoSettings extends SpeakeasyBase {
    /**
     * Companion Settings
     */
    companionSettings?: CompanionSetting;
    /**
     * Duration of a video placement in seconds.
     */
    durationSeconds?: number;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoSettings".
     */
    kind?: string;
    /**
     * Whether OBA icons are enabled for this placement.
     */
    obaEnabled?: boolean;
    /**
     * Online Behavioral Advertiser icon.
     */
    obaSettings?: ObaIcon;
    /**
     * Orientation of a video placement. If this value is set, placement will return assets matching the specified orientation.
     */
    orientation?: VideoSettingsOrientationEnum;
    /**
     * Skippable Settings
     */
    skippableSettings?: SkippableSetting;
    /**
     * Transcode Settings
     */
    transcodeSettings?: TranscodeSetting;
}
