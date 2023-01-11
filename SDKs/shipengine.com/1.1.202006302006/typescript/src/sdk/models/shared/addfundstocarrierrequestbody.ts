import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";



// AddFundsToCarrierRequestBody
/** 
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 * 
**/
export class AddFundsToCarrierRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: CurrencyEnum;
}
