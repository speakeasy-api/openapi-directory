import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Account
/** 
 * Rev.ai Account Model
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance_seconds" })
  balanceSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}
