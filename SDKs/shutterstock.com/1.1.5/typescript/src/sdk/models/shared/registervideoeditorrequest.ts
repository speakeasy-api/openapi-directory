import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterVideoEditorRequest
/** 
 * Request to register a new instance of the video editor
**/
export class RegisterVideoEditorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageSubscriptionId" })
  imageSubscriptionId: string;

  @SpeakeasyMetadata({ data: "json, name=videoSubscriptionId" })
  videoSubscriptionId: string;

  @SpeakeasyMetadata({ data: "json, name=webhookUrl" })
  webhookUrl: string;
}
