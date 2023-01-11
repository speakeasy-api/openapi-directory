import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoSizeDetails
/** 
 * Video asset information
**/
export class VideoSizeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=file_size" })
  fileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=fps" })
  fps?: number;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=is_licensable" })
  isLicensable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
