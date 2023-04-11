import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaConnectedSiteTag } from "./googleanalyticsadminv1alphaconnectedsitetag";
/**
 * Response message for ListConnectedSiteTags RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse extends SpeakeasyBase {
    /**
     * The site tags for the Universal Analytics property. A maximum of 20 connected site tags will be returned.
     */
    connectedSiteTags?: GoogleAnalyticsAdminV1alphaConnectedSiteTag[];
}
