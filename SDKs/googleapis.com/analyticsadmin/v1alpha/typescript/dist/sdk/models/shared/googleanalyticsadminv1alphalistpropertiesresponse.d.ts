import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaProperty } from "./googleanalyticsadminv1alphaproperty";
/**
 * Response message for ListProperties RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListPropertiesResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Results that matched the filter criteria and were accessible to the caller.
     */
    properties?: GoogleAnalyticsAdminV1alphaProperty[];
}
