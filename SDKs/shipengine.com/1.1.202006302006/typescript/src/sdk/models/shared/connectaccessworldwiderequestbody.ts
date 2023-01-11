import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectAccessWorldwideRequestBody
/** 
 * An Access Worldwide account information request body
**/
export class ConnectAccessWorldwideRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
