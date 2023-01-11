import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";



// AddFundsToCarrierResponseBodyMonetaryValue
/** 
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 * 
**/
export class AddFundsToCarrierResponseBodyMonetaryValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: CurrencyEnum;
}


// AddFundsToCarrierResponseBody
/** 
 * The current balance of the requested carrier account
**/
export class AddFundsToCarrierResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: AddFundsToCarrierResponseBodyMonetaryValue;
}
