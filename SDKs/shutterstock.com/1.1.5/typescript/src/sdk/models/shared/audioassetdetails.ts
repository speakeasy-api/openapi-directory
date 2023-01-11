import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AudioAssetDetails
/** 
 * Information about a file that is part of an audio asset
**/
export class AudioAssetDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_size" })
  fileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
