import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectSekoRequestBody
/** 
 * A SEKO account information request body
**/
export class ConnectSekoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_key" })
  accessKey: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;
}
