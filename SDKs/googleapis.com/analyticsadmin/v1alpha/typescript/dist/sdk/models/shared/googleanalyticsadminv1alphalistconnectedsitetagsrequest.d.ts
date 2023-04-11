import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for ListConnectedSiteTags RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest extends SpeakeasyBase {
    /**
     * The Universal Analytics property to fetch connected site tags for. This does not work on GA4 properties. A maximum of 20 connected site tags will be returned. Example Format: `properties/1234`
     */
    property?: string;
}
