import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Rights management policy for YouTube resources.
 */
export declare class AccessPolicy extends SpeakeasyBase {
    /**
     * The value of allowed indicates whether the access to the policy is allowed or denied by default.
     */
    allowed?: boolean;
    /**
     * A list of region codes that identify countries where the default policy do not apply.
     */
    exception?: string[];
}
