import { SpeakeasyBase } from "../../../internal/utils";
import { OBActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { OBBalanceType1CodeEnum } from "./obbalancetype1codeenum";
import { OBCreditDebitCodeEnum } from "./obcreditdebitcodeenum";
/**
 * Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.
 */
export declare class OBTransactionCashBalance extends SpeakeasyBase {
    amount: OBActiveOrHistoricCurrencyAndAmount;
    creditDebitIndicator: OBCreditDebitCodeEnum;
    type: OBBalanceType1CodeEnum;
}
