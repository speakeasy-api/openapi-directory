import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The policy of the feature.
 */
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum {
    PolicyUnspecified = "POLICY_UNSPECIFIED",
    Allowed = "ALLOWED",
    Forbidden = "FORBIDDEN",
    Restricted = "RESTRICTED"
}
/**
 * Defines whether a feature can be used or what values are accepted.
 */
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature extends SpeakeasyBase {
    /**
     * A list of acceptable values. Only effective when the policy is `RESTRICTED`.
     */
    allowedValues?: string[];
    /**
     * The policy of the feature.
     */
    policy?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum;
}
