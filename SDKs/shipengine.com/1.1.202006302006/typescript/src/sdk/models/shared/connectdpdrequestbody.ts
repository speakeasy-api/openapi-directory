import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectDpdRequestBody
/** 
 * A DPD account information request body
**/
export class ConnectDpdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}
