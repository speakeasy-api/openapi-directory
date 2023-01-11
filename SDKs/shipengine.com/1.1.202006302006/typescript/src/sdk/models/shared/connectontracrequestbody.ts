import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectOntracRequestBody
/** 
 * An Ontrac account information request body
**/
export class ConnectOntracRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}
