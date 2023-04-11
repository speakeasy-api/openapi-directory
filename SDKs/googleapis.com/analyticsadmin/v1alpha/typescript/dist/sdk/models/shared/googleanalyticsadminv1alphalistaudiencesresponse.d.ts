import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudience } from "./googleanalyticsadminv1alphaaudience";
/**
 * Response message for ListAudiences RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListAudiencesResponse extends SpeakeasyBase {
    /**
     * List of Audiences.
     */
    audiences?: GoogleAnalyticsAdminV1alphaAudience[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
