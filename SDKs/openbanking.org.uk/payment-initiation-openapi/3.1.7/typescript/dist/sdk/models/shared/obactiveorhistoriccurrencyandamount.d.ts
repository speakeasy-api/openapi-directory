import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Amount of money associated with the charge type.
 */
export declare class OBActiveOrHistoricCurrencyAndAmount extends SpeakeasyBase {
    /**
     * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
     */
    amount: string;
    /**
     * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
     */
    currency: string;
}
