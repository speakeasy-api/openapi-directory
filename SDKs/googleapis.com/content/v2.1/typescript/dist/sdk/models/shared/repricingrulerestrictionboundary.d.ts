import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Definition of a boundary.
 */
export declare class RepricingRuleRestrictionBoundary extends SpeakeasyBase {
    /**
     * The percentage delta relative to the offer selling price. This field is signed. It must be negative in floor. When it is used in floor, it should be > -100. For example, if an offer is selling at $10 and this field is -30 in floor, the repricing rule only applies if the calculated new price is >= $7.
     */
    percentageDelta?: number;
    /**
     * The price micros relative to the offer selling price. This field is signed. It must be negative in floor. For example, if an offer is selling at $10 and this field is -$2 in floor, the repricing rule only applies if the calculated new price is >= $8.
     */
    priceDelta?: string;
}
