import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateVideoEditorRequest
/** 
 * Request to update an existing instance of the video editor
**/
export class UpdateVideoEditorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageSubscriptionId" })
  imageSubscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=videoSubscriptionId" })
  videoSubscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookUrl" })
  webhookUrl?: string;
}
