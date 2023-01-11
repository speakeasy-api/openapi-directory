import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectPurolatorRequestBody
/** 
 * A Purolator account information request body
**/
export class ConnectPurolatorRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=activation_key" })
  activationKey: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;
}
