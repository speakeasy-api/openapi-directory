import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response containing counts for devices that need attention.
 */
export declare class GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse extends SpeakeasyBase {
    /**
     * Number of ChromeOS devices have not synced policies in the past 28 days.
     */
    noRecentPolicySyncCount?: string;
    /**
     * Number of ChromeOS devices that have not seen any user activity in the past 28 days.
     */
    noRecentUserActivityCount?: string;
    /**
     * Number of devices whose OS version is not compliant.
     */
    osVersionNotCompliantCount?: string;
    /**
     * Number of devices that are pending an OS update.
     */
    pendingUpdate?: string;
    /**
     * Number of devices that are unable to apply a policy due to an OS version mismatch.
     */
    unsupportedPolicyCount?: string;
}
