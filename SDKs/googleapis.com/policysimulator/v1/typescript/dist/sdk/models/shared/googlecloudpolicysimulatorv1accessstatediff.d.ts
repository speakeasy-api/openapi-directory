import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1ExplainedAccess } from "./googlecloudpolicysimulatorv1explainedaccess";
/**
 * How the principal's access, specified in the AccessState field, changed between the current (baseline) policies and proposed (simulated) policies.
 */
export declare enum GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum {
    AccessChangeTypeUnspecified = "ACCESS_CHANGE_TYPE_UNSPECIFIED",
    NoChange = "NO_CHANGE",
    UnknownChange = "UNKNOWN_CHANGE",
    AccessRevoked = "ACCESS_REVOKED",
    AccessGained = "ACCESS_GAINED",
    AccessMaybeRevoked = "ACCESS_MAYBE_REVOKED",
    AccessMaybeGained = "ACCESS_MAYBE_GAINED"
}
/**
 * A summary and comparison of the principal's access under the current (baseline) policies and the proposed (simulated) policies for a single access tuple.
 */
export declare class GoogleCloudPolicysimulatorV1AccessStateDiff extends SpeakeasyBase {
    /**
     * How the principal's access, specified in the AccessState field, changed between the current (baseline) policies and proposed (simulated) policies.
     */
    accessChange?: GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum;
    /**
     * Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple.
     */
    baseline?: GoogleCloudPolicysimulatorV1ExplainedAccess;
    /**
     * Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple.
     */
    simulated?: GoogleCloudPolicysimulatorV1ExplainedAccess;
}
