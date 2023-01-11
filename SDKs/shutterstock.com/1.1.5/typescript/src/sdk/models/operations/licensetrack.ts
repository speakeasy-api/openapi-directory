import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum LicenseTrackLicenseEnum {
    AudioPlatform = "audio_platform",
    PremierMusicBasic = "premier_music_basic",
    PremierMusicExtended = "premier_music_extended",
    PremierMusicPro = "premier_music_pro",
    PremierMusicComp = "premier_music_comp"
}


export class LicenseTrackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license?: LicenseTrackLicenseEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_id" })
  searchId?: string;
}


export class LicenseTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class LicenseTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LicenseTrackQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LicenseAudioRequest;

  @SpeakeasyMetadata()
  security: LicenseTrackSecurity;
}


export class LicenseTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  licenseAudioResultDataList?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
