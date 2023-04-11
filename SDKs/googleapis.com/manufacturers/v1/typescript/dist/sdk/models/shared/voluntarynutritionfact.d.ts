import { SpeakeasyBase } from "../../../internal/utils";
import { FloatUnit } from "./floatunit";
/**
 * Voluntary Nutrition Facts.
 */
export declare class VoluntaryNutritionFact extends SpeakeasyBase {
    /**
     * Daily percentage.
     */
    dailyPercentage?: number;
    /**
     * Name.
     */
    name?: string;
    /**
     * Combination of float amount and unit.
     */
    value?: FloatUnit;
}
