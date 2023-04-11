import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the count of a single category within the cluster.
 */
export declare class CategoryCount extends SpeakeasyBase {
    /**
     * The name of category.
     */
    category?: string;
    /**
     * The count of training samples matching the category within the cluster.
     */
    count?: string;
}
