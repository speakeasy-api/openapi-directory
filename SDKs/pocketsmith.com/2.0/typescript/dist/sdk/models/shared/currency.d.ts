import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencySeparators } from "./currencyseparators";
/**
 * Success
 */
export declare class Currency extends SpeakeasyBase {
    /**
     * The ISO 4217 or unofficial currency code.
     */
    id?: string;
    /**
     * The number of digits after the minor unit separator.
     */
    minorUnit?: number;
    /**
     * The name of the currency.
     */
    name?: string;
    separators?: CurrencySeparators;
    /**
     * The symbol of the currency.
     */
    symbol?: string;
}
