import { SpeakeasyBase } from "../../../internal/utils";
import { LocationPolicyLocationConstraints } from "./locationpolicylocationconstraints";
/**
 * Preference for a given location. Set to either ALLOW or DENY.
 */
export declare enum LocationPolicyLocationPreferenceEnum {
    Allow = "ALLOW",
    Deny = "DENY",
    PreferenceUnspecified = "PREFERENCE_UNSPECIFIED"
}
export declare class LocationPolicyLocation extends SpeakeasyBase {
    /**
     * Per-zone constraints on location policy for this zone.
     */
    constraints?: LocationPolicyLocationConstraints;
    /**
     * Preference for a given location. Set to either ALLOW or DENY.
     */
    preference?: LocationPolicyLocationPreferenceEnum;
}
