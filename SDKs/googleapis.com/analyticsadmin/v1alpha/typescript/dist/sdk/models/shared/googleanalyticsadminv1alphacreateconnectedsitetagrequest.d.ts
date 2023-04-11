import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaConnectedSiteTag } from "./googleanalyticsadminv1alphaconnectedsitetag";
/**
 * Request message for CreateConnectedSiteTag RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest extends SpeakeasyBase {
    /**
     * Configuration for a specific Connected Site Tag.
     */
    connectedSiteTag?: GoogleAnalyticsAdminV1alphaConnectedSiteTag;
    /**
     * The Universal Analytics property to create connected site tags for. This API does not support GA4 properties. Format: properties/{universalAnalyticsPropertyId} Example: properties/1234
     */
    property?: string;
}
