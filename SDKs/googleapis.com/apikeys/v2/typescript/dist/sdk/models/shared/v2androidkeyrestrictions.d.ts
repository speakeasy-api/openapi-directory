import { SpeakeasyBase } from "../../../internal/utils";
import { V2AndroidApplication } from "./v2androidapplication";
/**
 * The Android apps that are allowed to use the key.
 */
export declare class V2AndroidKeyRestrictions extends SpeakeasyBase {
    /**
     * A list of Android applications that are allowed to make API calls with this key.
     */
    allowedApplications?: V2AndroidApplication[];
}
