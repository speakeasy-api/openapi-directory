import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectDhlExpressUkRequestBody
/** 
 * A DHL Express UK account information request body
**/
export class ConnectDhlExpressUkRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId: string;
}
