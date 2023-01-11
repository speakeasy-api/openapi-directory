import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectImexRequestBody
/** 
 * An Imex account information request body
**/
export class ConnectImexRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
