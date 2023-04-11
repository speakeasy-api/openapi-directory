import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Effect for taint.
 */
export declare enum NodeTaintEffectEnum {
    EffectUnspecified = "EFFECT_UNSPECIFIED",
    NoSchedule = "NO_SCHEDULE",
    PreferNoSchedule = "PREFER_NO_SCHEDULE",
    NoExecute = "NO_EXECUTE"
}
/**
 * Kubernetes taint is composed of three fields: key, value, and effect. Effect can only be one of three types: NoSchedule, PreferNoSchedule or NoExecute. See [here](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration) for more information, including usage and the valid values.
 */
export declare class NodeTaint extends SpeakeasyBase {
    /**
     * Effect for taint.
     */
    effect?: NodeTaintEffectEnum;
    /**
     * Key for taint.
     */
    key?: string;
    /**
     * Value for taint.
     */
    value?: string;
}
