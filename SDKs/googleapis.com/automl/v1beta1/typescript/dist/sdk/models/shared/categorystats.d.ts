import { SpeakeasyBase } from "../../../internal/utils";
import { SingleCategoryStats } from "./singlecategorystats";
/**
 * The data statistics of a series of CATEGORY values.
 */
export declare class CategoryStats extends SpeakeasyBase {
    /**
     * The statistics of the top 20 CATEGORY values, ordered by count.
     */
    topCategoryStats?: SingleCategoryStats[];
}
