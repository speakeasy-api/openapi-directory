import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for a specific Connected Site Tag.
 */
export declare class GoogleAnalyticsAdminV1alphaConnectedSiteTag extends SpeakeasyBase {
    /**
     * Required. User-provided display name for the connected site tag. Must be less than 256 characters.
     */
    displayName?: string;
    /**
     * Required. "Tag ID to forward events to. Also known as the Measurement ID, or the "G-ID" (For example: G-12345).
     */
    tagId?: string;
}
