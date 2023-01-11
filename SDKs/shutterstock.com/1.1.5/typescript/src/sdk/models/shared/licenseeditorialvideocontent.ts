import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LicenseEditorialVideoContentLicenseEnum {
    PremierEditorialVideoDigitalOnly = "premier_editorial_video_digital_only",
    PremierEditorialVideoAllMedia = "premier_editorial_video_all_media",
    PremierEditorialVideoAllMediaSingleTerritory = "premier_editorial_video_all_media_single_territory",
    PremierEditorialVideoComp = "premier_editorial_video_comp"
}

export enum LicenseEditorialVideoContentSizeEnum {
    Original = "original"
}


// LicenseEditorialVideoContent
/** 
 * Individual editorial video content to license
**/
export class LicenseEditorialVideoContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=editorial_id" })
  editorialId: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license: LicenseEditorialVideoContentLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: LicenseEditorialVideoContentSizeEnum;
}
