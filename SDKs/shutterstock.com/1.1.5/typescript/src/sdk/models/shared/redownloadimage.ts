import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cookie } from "./cookie";


export enum RedownloadImageSizeEnum {
    Small = "small",
    Medium = "medium",
    Huge = "huge",
    Supersize = "supersize",
    Vector = "vector"
}


// RedownloadImage
/** 
 * Data required to redownload an image
**/
export class RedownloadImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_cookie" })
  authCookie?: Cookie;

  @SpeakeasyMetadata({ data: "json, name=show_modal" })
  showModal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: RedownloadImageSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=verification_code" })
  verificationCode?: string;
}
