import { SpeakeasyBase } from "../../../internal/utils";
import { PerProjectQuota } from "./perprojectquota";
import { Quota } from "./quota";
/**
 * Represents a set of quotas associated with an account
 */
export declare class AccountQuota extends SpeakeasyBase {
    /**
     * Gets a list of quotas that apply per-project for each project
     */
    perProject?: PerProjectQuota[];
    /**
     * Represents a quota
     */
    predictions?: Quota;
    /**
     * Represents a quota
     */
    projects?: Quota;
    /**
     * Gets the tier of user
     */
    tier?: string;
}
