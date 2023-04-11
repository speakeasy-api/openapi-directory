import { SpeakeasyBase } from "../../../internal/utils";
import { AdjustmentConditions } from "./adjustmentconditions";
/**
 * The adjustment type.
 */
export declare enum RateAdjustmentTypeEnum {
    Percentage = "PERCENTAGE"
}
export declare class RateAdjustment extends SpeakeasyBase {
    /**
     * Unique identifier of this rate adjustment.
     */
    adjustmentId?: string;
    /**
     * The percentage discount between 0 and 100.
     */
    amount: number;
    /**
     * A list of conditions for the adjustment to apply.
     */
    conditions: AdjustmentConditions[];
    /**
     * The adjustment type.
     */
    type: RateAdjustmentTypeEnum;
}
