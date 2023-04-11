import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.
 */
export declare class CriteriaTargeting extends SpeakeasyBase {
    /**
     * A list of numeric IDs to be excluded.
     */
    excludedCriteriaIds?: string[];
    /**
     * A list of numeric IDs to be included.
     */
    targetedCriteriaIds?: string[];
}
