import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LicenseEditorialVideoContentLicenseEnum {
    PremierEditorialVideoDigitalOnly = "premier_editorial_video_digital_only",
    PremierEditorialVideoAllMedia = "premier_editorial_video_all_media",
    PremierEditorialVideoAllMediaSingleTerritory = "premier_editorial_video_all_media_single_territory",
    PremierEditorialVideoComp = "premier_editorial_video_comp"
}
export declare enum LicenseEditorialVideoContentSizeEnum {
    Original = "original"
}
/**
 * Individual editorial video content to license
**/
export declare class LicenseEditorialVideoContent extends SpeakeasyBase {
    editorialId: string;
    license: LicenseEditorialVideoContentLicenseEnum;
    metadata?: Record<string, any>;
    size?: LicenseEditorialVideoContentSizeEnum;
}
