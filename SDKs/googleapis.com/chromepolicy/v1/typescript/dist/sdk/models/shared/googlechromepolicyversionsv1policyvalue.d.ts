import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A particular value for a policy managed by the service.
 */
export declare class GoogleChromePolicyVersionsV1PolicyValue extends SpeakeasyBase {
    /**
     * The fully qualified name of the policy schema associated with this policy.
     */
    policySchema?: string;
    /**
     * The value of the policy that is compatible with the schema that it is associated with.
     */
    value?: Record<string, any>;
}
