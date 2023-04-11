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
export declare enum LocationRuleTypeEnum {
    Allow = "allow",
    Disallow = "disallow",
    Disappeared = "disappeared",
    Debounce = "debounce"
}
