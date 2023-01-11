import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoEditorTokenRequest
/** 
 * Request for a video editor user access token
**/
export class VideoEditorTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}
