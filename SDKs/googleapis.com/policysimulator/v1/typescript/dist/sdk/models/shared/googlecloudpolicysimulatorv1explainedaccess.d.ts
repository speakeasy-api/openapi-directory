import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1ExplainedPolicy } from "./googlecloudpolicysimulatorv1explainedpolicy";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * Whether the principal in the access tuple has permission to access the resource in the access tuple under the given policies.
 */
export declare enum GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}
/**
 * Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple.
 */
export declare class GoogleCloudPolicysimulatorV1ExplainedAccess extends SpeakeasyBase {
    /**
     * Whether the principal in the access tuple has permission to access the resource in the access tuple under the given policies.
     */
    accessState?: GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum;
    /**
     * If the AccessState is `UNKNOWN`, this field contains a list of errors explaining why the result is `UNKNOWN`. If the `AccessState` is `GRANTED` or `NOT_GRANTED`, this field is omitted.
     */
    errors?: GoogleRpcStatus[];
    /**
     * If the AccessState is `UNKNOWN`, this field contains the policies that led to that result. If the `AccessState` is `GRANTED` or `NOT_GRANTED`, this field is omitted.
     */
    policies?: GoogleCloudPolicysimulatorV1ExplainedPolicy[];
}
