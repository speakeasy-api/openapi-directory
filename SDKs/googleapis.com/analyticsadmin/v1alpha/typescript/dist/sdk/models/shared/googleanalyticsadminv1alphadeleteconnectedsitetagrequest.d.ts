import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for DeleteConnectedSiteTag RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest extends SpeakeasyBase {
    /**
     * The Universal Analytics property to delete connected site tags for. This API does not support GA4 properties. Format: properties/{universalAnalyticsPropertyId} Example: properties/1234
     */
    property?: string;
    /**
     * Tag ID to forward events to. Also known as the Measurement ID, or the "G-ID" (For example: G-12345).
     */
    tagId?: string;
}
