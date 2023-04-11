import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response containing counts for browsers that need attention.
 */
export declare class GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse extends SpeakeasyBase {
    /**
     * Number of browsers that haven’t had any recent activity
     */
    noRecentActivityCount?: string;
    /**
     * Number of browsers that are pending an OS update
     */
    pendingBrowserUpdateCount?: string;
    /**
     * Number of browsers that have been recently enrolled
     */
    recentlyEnrolledCount?: string;
}
