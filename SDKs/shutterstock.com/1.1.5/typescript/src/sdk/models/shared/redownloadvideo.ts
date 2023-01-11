import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cookie } from "./cookie";


export enum RedownloadVideoSizeEnum {
    Web = "web",
    Sd = "sd",
    Hd = "hd",
    Fourk = "4k"
}


// RedownloadVideo
/** 
 * Data required to redownload a video
**/
export class RedownloadVideo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_cookie" })
  authCookie?: Cookie;

  @SpeakeasyMetadata({ data: "json, name=show_modal" })
  showModal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: RedownloadVideoSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=verification_code" })
  verificationCode?: string;
}
