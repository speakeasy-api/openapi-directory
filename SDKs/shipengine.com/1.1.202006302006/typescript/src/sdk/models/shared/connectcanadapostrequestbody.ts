import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectCanadaPostRequestBody
/** 
 * A Canada Post account information request body
**/
export class ConnectCanadaPostRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "json, name=api_secret" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "json, name=contract_id" })
  contractId: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;
}
