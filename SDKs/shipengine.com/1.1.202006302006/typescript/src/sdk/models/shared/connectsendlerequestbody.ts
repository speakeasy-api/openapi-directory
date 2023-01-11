import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectSendleRequestBody
/** 
 * A Sendle account information request body
**/
export class ConnectSendleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=sendle_id" })
  sendleId: string;
}
