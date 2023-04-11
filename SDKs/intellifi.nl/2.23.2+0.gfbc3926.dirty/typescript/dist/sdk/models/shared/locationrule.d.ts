import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
import { LocationRuleTypeEnum } from "./locationruletypeenum";
/**
 * Scope of this rule, e.g. moves at or away from a specific location or towards a specific location.
 */
export declare class LocationRuleConditions23 extends SpeakeasyBase {
    /**
     * Url to the individual resource.
     */
    toLocationUrl?: string;
}
/**
 * Scope of this rule, e.g. moves at or away from a specific location or towards a specific location.
 */
export declare class LocationRuleConditions22 extends SpeakeasyBase {
    /**
     * Unique identifier for resource.
     */
    toLocationId?: string;
}
/**
 * Scope of this rule, e.g. moves at or away from a specific location or towards a specific location.
 */
export declare class LocationRuleConditions21 extends SpeakeasyBase {
    toLocation?: Location;
}
/**
 * Scope of this rule, e.g. moves at or away from a specific location or towards a specific location.
 */
export declare class LocationRuleConditions13 extends SpeakeasyBase {
    /**
     * Url to the individual resource.
     */
    fromLocationUrl?: string;
}
/**
 * Scope of this rule, e.g. moves at or away from a specific location or towards a specific location.
 */
export declare class LocationRuleConditions12 extends SpeakeasyBase {
    /**
     * Unique identifier for resource.
     */
    fromLocationId?: string;
}
/**
 * Scope of this rule, e.g. moves at or away from a specific location or towards a specific location.
 */
export declare class LocationRuleConditions11 extends SpeakeasyBase {
    fromLocation?: Location;
}
/**
 * A JSON object containing the location rule
 */
export declare class LocationRule extends SpeakeasyBase {
    /**
     * Scope of this rule, e.g. moves at or away from a specific location or towards a specific location.
     */
    conditions?: any;
    /**
     * Whether this rule should be in effect (`true`) or on hold (`false`).
     */
    enabled?: boolean;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * A name or a label for this resource. This is used in the user interface, may be empty.
     */
    label?: string;
    /**
     * Parameters for this rule; depends on the rule type. Refer to the rule type specification for details.
     */
    parameters?: Record<string, any>;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
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
    /**
     * Url to the individual resource.
     */
    url?: string;
}
