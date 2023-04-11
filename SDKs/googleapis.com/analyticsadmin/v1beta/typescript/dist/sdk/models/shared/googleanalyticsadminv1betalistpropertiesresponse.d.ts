import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaProperty } from "./googleanalyticsadminv1betaproperty";
/**
 * Response message for ListProperties RPC.
 */
export declare class GoogleAnalyticsAdminV1betaListPropertiesResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Results that matched the filter criteria and were accessible to the caller.
     */
    properties?: GoogleAnalyticsAdminV1betaProperty[];
}
