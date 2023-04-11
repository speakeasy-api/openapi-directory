import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A rollout policy configuration.
 */
export declare class RolloutPolicy extends SpeakeasyBase {
    /**
     * An optional RFC3339 timestamp on or after which the update is considered rolled out to any zone that is not explicitly stated.
     */
    defaultRolloutTime?: string;
    /**
     * Location based rollout policies to apply to the resource. Currently only zone names are supported and must be represented as valid URLs, like: zones/us-central1-a. The value expects an RFC3339 timestamp on or after which the update is considered rolled out to the specified location.
     */
    locationRolloutPolicies?: Record<string, string>;
}
