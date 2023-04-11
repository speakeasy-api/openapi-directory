import { SpeakeasyBase } from "../../../internal/utils";
import { ObaIcon } from "./obaicon";
import { SiteCompanionSetting } from "./sitecompanionsetting";
import { SiteSkippableSetting } from "./siteskippablesetting";
import { SiteTranscodeSetting } from "./sitetranscodesetting";
/**
 * Orientation of a site template used for video. This will act as default for new placements created under this site.
 */
export declare enum SiteVideoSettingsOrientationEnum {
    Any = "ANY",
    Landscape = "LANDSCAPE",
    Portrait = "PORTRAIT"
}
/**
 * Video Settings
 */
export declare class SiteVideoSettings extends SpeakeasyBase {
    /**
     * Companion Settings
     */
    companionSettings?: SiteCompanionSetting;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteVideoSettings".
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
     * Orientation of a site template used for video. This will act as default for new placements created under this site.
     */
    orientation?: SiteVideoSettingsOrientationEnum;
    /**
     * Skippable Settings
     */
    skippableSettings?: SiteSkippableSetting;
    /**
     * Transcode Settings
     */
    transcodeSettings?: SiteTranscodeSetting;
}
