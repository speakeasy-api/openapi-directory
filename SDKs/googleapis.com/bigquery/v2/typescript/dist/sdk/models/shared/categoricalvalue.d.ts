import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryCount } from "./categorycount";
/**
 * Representative value of a categorical feature.
 */
export declare class CategoricalValue extends SpeakeasyBase {
    /**
     * Counts of all categories for the categorical feature. If there are more than ten categories, we return top ten (by count) and return one more CategoryCount with category "_OTHER_" and count as aggregate counts of remaining categories.
     */
    categoryCounts?: CategoryCount[];
}
