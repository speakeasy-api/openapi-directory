import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectStampsRequestBody
/** 
 * A Stamps account information request body
**/
export class ConnectStampsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
