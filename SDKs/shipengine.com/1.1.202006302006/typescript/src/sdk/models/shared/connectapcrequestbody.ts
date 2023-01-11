import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectApcRequestBody
/** 
 * An APC account information request body
**/
export class ConnectApcRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
