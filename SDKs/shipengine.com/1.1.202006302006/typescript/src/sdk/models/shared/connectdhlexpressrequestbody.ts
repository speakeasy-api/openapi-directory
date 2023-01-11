import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectDhlExpressRequestBody
/** 
 * A DHL express account information request body
**/
export class ConnectDhlExpressRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;
}
