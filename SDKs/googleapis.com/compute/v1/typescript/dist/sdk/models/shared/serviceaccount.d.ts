import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A service account.
 */
export declare class ServiceAccount extends SpeakeasyBase {
    /**
     * Email address of the service account.
     */
    email?: string;
    /**
     * The list of scopes to be made available for this service account.
     */
    scopes?: string[];
}
