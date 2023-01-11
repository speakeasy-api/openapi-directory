import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectGlobegisticsRequestBody
/** 
 * A Globegistics account information request body
**/
export class ConnectGlobegisticsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
