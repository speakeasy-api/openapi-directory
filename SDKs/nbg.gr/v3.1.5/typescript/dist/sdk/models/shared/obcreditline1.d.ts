import { SpeakeasyBase } from "../../../internal/utils";
import { OBActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { OBExternalLimitType1CodeEnum } from "./obexternallimittype1codeenum";
export declare class OBCreditLine1 extends SpeakeasyBase {
    amount?: OBActiveOrHistoricCurrencyAndAmount;
    /**
     * Indicates whether or not the credit line is included in the balance of the account.
     *
     * @remarks
     * Usage: If not present, credit line is not included in the balance amount of the account.
     */
    included: boolean;
    type?: OBExternalLimitType1CodeEnum;
}
