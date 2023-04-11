import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureState } from "./featurestate";
/**
 * ScopeFeatureState contains Scope-wide Feature status information.
 */
export declare class ScopeFeatureState extends SpeakeasyBase {
    /**
     * FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context.
     */
    state?: FeatureState;
}
