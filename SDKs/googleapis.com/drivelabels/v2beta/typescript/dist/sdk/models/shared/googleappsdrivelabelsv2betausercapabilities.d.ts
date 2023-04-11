import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The capabilities of a user.
 */
export declare class GoogleAppsDriveLabelsV2betaUserCapabilities extends SpeakeasyBase {
    /**
     * Output only. Whether the user is allowed access to the label manager.
     */
    canAccessLabelManager?: boolean;
    /**
     * Output only. Whether the user is an administrator for the shared labels feature.
     */
    canAdministrateLabels?: boolean;
    /**
     * Output only. Whether the user is allowed to create new admin labels.
     */
    canCreateAdminLabels?: boolean;
    /**
     * Output only. Whether the user is allowed to create new shared labels.
     */
    canCreateSharedLabels?: boolean;
    /**
     * Output only. Resource name for the user capabilities.
     */
    name?: string;
}
