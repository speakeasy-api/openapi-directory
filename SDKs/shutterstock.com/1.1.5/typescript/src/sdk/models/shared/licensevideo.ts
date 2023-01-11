import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cookie } from "./cookie";


export enum LicenseVideoSizeEnum {
    Web = "web",
    Sd = "sd",
    Hd = "hd",
    Fourk = "4k"
}


// LicenseVideo
/** 
 * Data required to license a video
**/
export class LicenseVideo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_cookie" })
  authCookie?: Cookie;

  @SpeakeasyMetadata({ data: "json, name=editorial_acknowledgement" })
  editorialAcknowledgement?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=search_id" })
  searchId?: string;

  @SpeakeasyMetadata({ data: "json, name=show_modal" })
  showModal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: LicenseVideoSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=subscription_id" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=video_id" })
  videoId: string;
}
