import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A service account.
 */
export declare class ServiceAccount extends SpeakeasyBase {
    /**
     * Email address of the service account. If empty, default Compute service account will be used.
     */
    email?: string;
    /**
     * The list of scopes to be made available for this service account. If empty, access to all Cloud APIs will be allowed.
     */
    scope?: string[];
}
