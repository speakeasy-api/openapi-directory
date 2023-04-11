import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaCustomDimension } from "./googleanalyticsadminv1betacustomdimension";
/**
 * Response message for ListCustomDimensions RPC.
 */
export declare class GoogleAnalyticsAdminV1betaListCustomDimensionsResponse extends SpeakeasyBase {
    /**
     * List of CustomDimensions.
     */
    customDimensions?: GoogleAnalyticsAdminV1betaCustomDimension[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
