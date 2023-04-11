import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The autoscaling mode. Set to one of: ON, OFF, or ONLY_SCALE_OUT. For more information, see Autoscaler modes.
 */
export declare enum NodeGroupAutoscalingPolicyModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Off = "OFF",
    On = "ON",
    OnlyScaleOut = "ONLY_SCALE_OUT"
}
export declare class NodeGroupAutoscalingPolicy extends SpeakeasyBase {
    /**
     * The maximum number of nodes that the group should have. Must be set if autoscaling is enabled. Maximum value allowed is 100.
     */
    maxNodes?: number;
    /**
     * The minimum number of nodes that the group should have.
     */
    minNodes?: number;
    /**
     * The autoscaling mode. Set to one of: ON, OFF, or ONLY_SCALE_OUT. For more information, see Autoscaler modes.
     */
    mode?: NodeGroupAutoscalingPolicyModeEnum;
}
