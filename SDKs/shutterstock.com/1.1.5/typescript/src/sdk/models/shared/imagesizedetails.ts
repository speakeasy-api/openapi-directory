import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageSizeDetails
/** 
 * Image size information
**/
export class ImageSizeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=dpi" })
  dpi?: number;

  @SpeakeasyMetadata({ data: "json, name=file_size" })
  fileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=is_licensable" })
  isLicensable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
