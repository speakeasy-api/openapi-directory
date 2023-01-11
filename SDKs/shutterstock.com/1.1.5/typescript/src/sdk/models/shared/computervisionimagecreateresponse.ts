import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComputerVisionImageCreateResponse
/** 
 * Asset upload information
**/
export class ComputerVisionImageCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=upload_id" })
  uploadId: string;
}
