import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The desired State of the finding.
 */
export declare enum SetFindingStateRequestStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * Request message for updating a finding's state.
 */
export declare class SetFindingStateRequest extends SpeakeasyBase {
    /**
     * Required. The time at which the updated state takes effect.
     */
    startTime?: string;
    /**
     * Required. The desired State of the finding.
     */
    state?: SetFindingStateRequestStateEnum;
}
