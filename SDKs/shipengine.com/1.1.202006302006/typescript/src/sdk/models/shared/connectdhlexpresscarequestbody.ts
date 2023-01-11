import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectDhlExpressCaRequestBody
/** 
 * A DHL Express CA account information request body
**/
export class ConnectDhlExpressCaRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;
}
