import { SpeakeasyBase } from "../../../internal/utils";
import { AdStyle } from "./adstyle";
/**
 * The backup option to be used in instances where no ad is available.
 */
export declare class AdUnitContentAdsSettingsBackupOption extends SpeakeasyBase {
    /**
     * Color to use when type is set to COLOR.
     */
    color?: string;
    /**
     * Type of the backup option. Possible values are BLANK, COLOR and URL.
     */
    type?: string;
    /**
     * URL to use when type is set to URL.
     */
    url?: string;
}
/**
 * Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
 */
export declare class AdUnitContentAdsSettings extends SpeakeasyBase {
    /**
     * The backup option to be used in instances where no ad is available.
     */
    backupOption?: AdUnitContentAdsSettingsBackupOption;
    /**
     * Size of this ad unit.
     */
    size?: string;
    /**
     * Type of this ad unit.
     */
    type?: string;
}
/**
 * Settings specific to feed ads (AFF) - deprecated.
 */
export declare class AdUnitFeedAdsSettings extends SpeakeasyBase {
    /**
     * The position of the ads relative to the feed entries.
     */
    adPosition?: string;
    /**
     * The frequency at which ads should appear in the feed (i.e. every N entries).
     */
    frequency?: number;
    /**
     * The minimum length an entry should be in order to have attached ads.
     */
    minimumWordCount?: number;
    /**
     * The type of ads which should appear.
     */
    type?: string;
}
/**
 * Settings specific to WAP mobile content ads (AFMC) - deprecated.
 */
export declare class AdUnitMobileContentAdsSettings extends SpeakeasyBase {
    /**
     * The markup language to use for this ad unit.
     */
    markupLanguage?: string;
    /**
     * The scripting language to use for this ad unit.
     */
    scriptingLanguage?: string;
    /**
     * Size of this ad unit.
     */
    size?: string;
    /**
     * Type of this ad unit.
     */
    type?: string;
}
/**
 * Successful response
 */
export declare class AdUnit extends SpeakeasyBase {
    /**
     * Identity code of this ad unit, not necessarily unique across ad clients.
     */
    code?: string;
    /**
     * Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
     */
    contentAdsSettings?: AdUnitContentAdsSettings;
    customStyle?: AdStyle;
    /**
     * Settings specific to feed ads (AFF) - deprecated.
     */
    feedAdsSettings?: AdUnitFeedAdsSettings;
    /**
     * Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adsense#adUnit.
     */
    kind?: string;
    /**
     * Settings specific to WAP mobile content ads (AFMC) - deprecated.
     */
    mobileContentAdsSettings?: AdUnitMobileContentAdsSettings;
    /**
     * Name of this ad unit.
     */
    name?: string;
    /**
     * ID of the saved ad style which holds this ad unit's style information.
     */
    savedStyleId?: string;
    /**
     * Status of this ad unit. Possible values are:
     *
     * @remarks
     * NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.
     *
     * ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.
     *
     * INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
     */
    status?: string;
}
