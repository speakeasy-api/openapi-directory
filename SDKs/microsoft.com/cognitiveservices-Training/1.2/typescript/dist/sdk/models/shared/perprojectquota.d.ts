import { SpeakeasyBase } from "../../../internal/utils";
import { Quota } from "./quota";
/**
 * Represents a set of quotas for a given project
 */
export declare class PerProjectQuota extends SpeakeasyBase {
    /**
     * Represents a quota
     */
    images?: Quota;
    /**
     * Represents a quota
     */
    iterations?: Quota;
    /**
     * Gets the project id of the project this quota applies to
     */
    projectId?: string;
    /**
     * Represents a quota
     */
    tags?: Quota;
}
