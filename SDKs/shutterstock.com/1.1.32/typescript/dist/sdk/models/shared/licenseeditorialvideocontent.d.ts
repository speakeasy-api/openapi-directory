import { SpeakeasyBase } from "../../../internal/utils";
/**
 * License agreement to use for licensing
 */
export declare enum LicenseEditorialVideoContentLicenseEnum {
    PremierEditorialVideoDigitalOnly = "premier_editorial_video_digital_only",
    PremierEditorialVideoAllMedia = "premier_editorial_video_all_media",
    PremierEditorialVideoAllMediaSingleTerritory = "premier_editorial_video_all_media_single_territory",
    PremierEditorialVideoComp = "premier_editorial_video_comp"
}
/**
 * Asset size to download
 */
export declare enum LicenseEditorialVideoContentSizeEnum {
    Original = "original"
}
/**
 * Individual editorial video content to license
 */
export declare class LicenseEditorialVideoContent extends SpeakeasyBase {
    /**
     * Editorial ID
     */
    editorialId: string;
    /**
     * License agreement to use for licensing
     */
    license: LicenseEditorialVideoContentLicenseEnum;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     */
    metadata?: Record<string, any>;
    /**
     * Asset size to download
     */
    size?: LicenseEditorialVideoContentSizeEnum;
}
