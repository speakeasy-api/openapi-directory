import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectRrDonnelleyRequestBody
/** 
 * A RR Donnelley account information request body
**/
export class ConnectRrDonnelleyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
