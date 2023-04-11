import { SpeakeasyBase } from "../../../internal/utils";
import { OBActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { OBBalanceType1CodeEnum } from "./obbalancetype1codeenum";
import { OBCreditDebitCodeEnum } from "./obcreditdebitcodeenum";
import { OBCreditLine1 } from "./obcreditline1";
/**
 * Set of elements used to define the balance details.
 */
export declare class OBCashBalance1 extends SpeakeasyBase {
    /**
     * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
     */
    accountId: string;
    amount: OBActiveOrHistoricCurrencyAndAmount;
    creditDebitIndicator: OBCreditDebitCodeEnum;
    /**
     * Set of elements used to provide details on the credit line.
     */
    creditLine?: OBCreditLine1[];
    /**
     * Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    dateTime: Date;
    type: OBBalanceType1CodeEnum;
}
