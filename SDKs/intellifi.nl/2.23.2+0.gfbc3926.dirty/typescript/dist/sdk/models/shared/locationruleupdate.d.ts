import { SpeakeasyBase } from "../../../internal/utils";
import { LocationRuleTypeEnum } from "./locationruletypeenum";
/**
 * Scope of this rule, e.g. moves at or away from a specific location or towards a specific location. The `from_location` is mandatory. The `to_location` is either mandatory, optional or not allowed depending on rule type.
 */
export declare class LocationRuleUpdateConditions extends SpeakeasyBase {
    /**
     * Unique identifier for resource.
     */
    fromLocation?: string;
    /**
     * Unique identifier for resource.
     */
    toLocation?: string;
}
/**
 * A JSON object containing the location rule
 */
export declare class LocationRuleUpdate extends SpeakeasyBase {
    /**
     * Scope of this rule, e.g. moves at or away from a specific location or towards a specific location. The `from_location` is mandatory. The `to_location` is either mandatory, optional or not allowed depending on rule type.
     */
    conditions?: LocationRuleUpdateConditions;
    /**
     * Whether this rule should be in effect (`true`) or on hold (`false`).
     */
    enabled?: boolean;
    /**
     * A name or a label for this resource. This is used in the user interface, may be empty.
     */
    label?: string;
    /**
     * Parameters for this rule; depends on the rule type. Refer to the rule type specification for details.
     */
    parameters?: Record<string, any>;
    /**
     * The type of location rule to be applied.
     *
     * @remarks
     * Allow: items at `conditions.from_location` can only move to `conditions.to_location` and locations allowed in other `allow` rules (destination whitelist).
     * Disallow: items at `conditions.from_location` cannot be moved to `conditions.to_location` and locations disallowed in other `disallow` rules (destination blacklist).
     * Disappeared: items disappearing at `conditions.from_location` will be moved to `parameters.location` after `parameters.time_s` seconds.
     * Debounce: items moves from `conditions.from_location` (and optionally to `conditions.to_location`) will be debounced with a period of `parameters.time_s` seconds, for a maximum of `parameters.max_periods` periods.
     *
     */
    type?: LocationRuleTypeEnum;
}
