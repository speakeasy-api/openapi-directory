import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstancesSetServiceAccountRequest extends SpeakeasyBase {
    /**
     * Email address of the service account.
     */
    email?: string;
    /**
     * The list of scopes to be made available for this service account.
     */
    scopes?: string[];
}
