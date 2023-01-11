import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum LicenseTrackLicenseEnum {
    AudioPlatform = "audio_platform",
    PremierMusicBasic = "premier_music_basic",
    PremierMusicExtended = "premier_music_extended",
    PremierMusicPro = "premier_music_pro",
    PremierMusicComp = "premier_music_comp"
}
export declare class LicenseTrackQueryParams extends SpeakeasyBase {
    license?: LicenseTrackLicenseEnum;
    searchId?: string;
}
export declare class LicenseTrackSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class LicenseTrackRequest extends SpeakeasyBase {
    queryParams: LicenseTrackQueryParams;
    request: shared.LicenseAudioRequest;
    security: LicenseTrackSecurity;
}
export declare class LicenseTrackResponse extends SpeakeasyBase {
    contentType: string;
    licenseAudioResultDataList?: any;
    statusCode: number;
}
