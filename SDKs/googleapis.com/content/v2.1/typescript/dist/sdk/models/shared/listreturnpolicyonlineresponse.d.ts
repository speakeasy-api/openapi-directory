import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicyOnline } from "./returnpolicyonline";
/**
 * Response message for the `ListReturnPolicyOnline` method.
 */
export declare class ListReturnPolicyOnlineResponse extends SpeakeasyBase {
    /**
     * The retrieved return policies.
     */
    returnPolicies?: ReturnPolicyOnline[];
}
