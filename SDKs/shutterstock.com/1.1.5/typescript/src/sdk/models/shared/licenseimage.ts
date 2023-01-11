import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cookie } from "./cookie";
import { CustomSizeDimensions } from "./customsizedimensions";


export enum LicenseImageFormatEnum {
    Jpg = "jpg",
    Eps = "eps"
}

export enum LicenseImageSizeEnum {
    Small = "small",
    Medium = "medium",
    Huge = "huge",
    Vector = "vector",
    Custom = "custom"
}


// LicenseImage
/** 
 * Data required to license an image
**/
export class LicenseImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_cookie" })
  authCookie?: Cookie;

  @SpeakeasyMetadata({ data: "json, name=custom_dimensions" })
  customDimensions?: CustomSizeDimensions;

  @SpeakeasyMetadata({ data: "json, name=editorial_acknowledgement" })
  editorialAcknowledgement?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: LicenseImageFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=image_id" })
  imageId: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=search_id" })
  searchId?: string;

  @SpeakeasyMetadata({ data: "json, name=show_modal" })
  showModal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: LicenseImageSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=subscription_id" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=verification_code" })
  verificationCode?: string;
}
