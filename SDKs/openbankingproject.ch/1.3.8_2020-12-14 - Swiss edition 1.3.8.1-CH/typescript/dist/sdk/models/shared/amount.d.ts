import { SpeakeasyBase } from "../../../internal/utils";
export declare class Amount extends SpeakeasyBase {
    /**
     * The amount given with fractional digits, where fractions must be compliant to the currency definition.
     *
     * @remarks
     * Up to 14 significant figures. Negative amounts are signed by minus.
     * The decimal separator is a dot.
     *
     * **Example:**
     * Valid representations for EUR with up to two decimals are:
     *
     *   * 1056
     *   * 5768.2
     *   * -1.50
     *   * 5877.78
     *
     */
    amount: string;
    /**
     * ISO 4217 Alpha 3 currency code.
     *
     * @remarks
     *
     */
    currency: string;
}
