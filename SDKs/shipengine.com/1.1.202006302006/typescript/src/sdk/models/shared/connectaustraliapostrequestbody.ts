import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectAustraliaPostRequestBody
/** 
 * An Australia Post account information request body
**/
export class ConnectAustraliaPostRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "json, name=api_secret" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;
}
