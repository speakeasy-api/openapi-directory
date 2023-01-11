import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectDhlExpressAuRequestBody
/** 
 * A DHL Express AU account information request body
**/
export class ConnectDhlExpressAuRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;
}
