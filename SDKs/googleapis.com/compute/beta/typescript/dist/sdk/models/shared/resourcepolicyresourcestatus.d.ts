import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicyResourceStatusInstanceSchedulePolicyStatus } from "./resourcepolicyresourcestatusinstanceschedulepolicystatus";
/**
 * Contains output only fields. Use this sub-message for all output fields set on ResourcePolicy. The internal structure of this "status" field should mimic the structure of ResourcePolicy proto specification.
 */
export declare class ResourcePolicyResourceStatus extends SpeakeasyBase {
    instanceSchedulePolicy?: ResourcePolicyResourceStatusInstanceSchedulePolicyStatus;
}
