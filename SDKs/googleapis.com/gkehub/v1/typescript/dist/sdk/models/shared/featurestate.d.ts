import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The high-level, machine-readable status of this Feature.
 */
export declare enum FeatureStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Ok = "OK",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context.
 */
export declare class FeatureState extends SpeakeasyBase {
    /**
     * The high-level, machine-readable status of this Feature.
     */
    code?: FeatureStateCodeEnum;
    /**
     * A human-readable description of the current status.
     */
    description?: string;
    /**
     * The time this status and any related Feature-specific details were updated.
     */
    updateTime?: string;
}
