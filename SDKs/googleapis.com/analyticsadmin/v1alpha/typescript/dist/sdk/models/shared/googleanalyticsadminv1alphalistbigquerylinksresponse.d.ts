import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaBigQueryLink } from "./googleanalyticsadminv1alphabigquerylink";
/**
 * Response message for ListBigQueryLinks RPC
 */
export declare class GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse extends SpeakeasyBase {
    /**
     * List of BigQueryLinks.
     */
    bigqueryLinks?: GoogleAnalyticsAdminV1alphaBigQueryLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
