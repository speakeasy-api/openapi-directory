import { SpeakeasyBase } from "../../../internal/utils";
import { V2AndroidKeyRestrictions } from "./v2androidkeyrestrictions";
import { V2ApiTarget } from "./v2apitarget";
import { V2BrowserKeyRestrictions } from "./v2browserkeyrestrictions";
import { V2IosKeyRestrictions } from "./v2ioskeyrestrictions";
import { V2ServerKeyRestrictions } from "./v2serverkeyrestrictions";
/**
 * Describes the restrictions on the key.
 */
export declare class V2Restrictions extends SpeakeasyBase {
    /**
     * The Android apps that are allowed to use the key.
     */
    androidKeyRestrictions?: V2AndroidKeyRestrictions;
    /**
     * A restriction for a specific service and optionally one or more specific methods. Requests are allowed if they match any of these restrictions. If no restrictions are specified, all targets are allowed.
     */
    apiTargets?: V2ApiTarget[];
    /**
     * The HTTP referrers (websites) that are allowed to use the key.
     */
    browserKeyRestrictions?: V2BrowserKeyRestrictions;
    /**
     * The iOS apps that are allowed to use the key.
     */
    iosKeyRestrictions?: V2IosKeyRestrictions;
    /**
     * The IP addresses of callers that are allowed to use the key.
     */
    serverKeyRestrictions?: V2ServerKeyRestrictions;
}
