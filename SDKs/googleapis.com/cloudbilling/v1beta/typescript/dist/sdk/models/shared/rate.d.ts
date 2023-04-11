import { SpeakeasyBase } from "../../../internal/utils";
import { RateTier } from "./ratetier";
/**
 * A SKU price consisting of tiered rates.
 */
export declare class Rate extends SpeakeasyBase {
    /**
     * The service tiers.
     */
    tiers?: RateTier[];
    /**
     * The SKU's pricing unit. For example, if the tier price is $1 per 1000000 Bytes, then this field will show 'By'. The `start_amount` field in each tier will be in this unit.
     */
    unit?: string;
    /**
     * The SKU's count for the pricing unit. For example, if the tier price is $1 per 1000000 Bytes, then this column will show 1000000.
     */
    unitCount?: number;
}
