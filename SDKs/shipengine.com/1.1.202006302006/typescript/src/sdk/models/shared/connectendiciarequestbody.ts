import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectEndiciaRequestBody
/** 
 * An Endicia account information request body
**/
export class ConnectEndiciaRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=passphrase" })
  passphrase: string;
}
