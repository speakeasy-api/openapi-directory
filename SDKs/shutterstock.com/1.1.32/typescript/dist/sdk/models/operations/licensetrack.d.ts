import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LicenseTrackSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
/**
 * License type
 */
export declare enum LicenseTrackLicenseEnum {
    AudioPlatform = "audio_platform",
    PremierMusicBasic = "premier_music_basic",
    PremierMusicExtended = "premier_music_extended",
    PremierMusicPro = "premier_music_pro",
    PremierMusicComp = "premier_music_comp",
    AssetAllMusic = "asset_all_music"
}
export declare class LicenseTrackRequest extends SpeakeasyBase {
    /**
     * Tracks to license
     */
    licenseAudioRequest: shared.LicenseAudioRequest;
    /**
     * License type
     */
    license?: LicenseTrackLicenseEnum;
    /**
     * The ID of the search that led to licensing this track
     */
    searchId?: string;
}
export declare class LicenseTrackResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    licenseAudioResultDataList?: shared.LicenseAudioResultDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
