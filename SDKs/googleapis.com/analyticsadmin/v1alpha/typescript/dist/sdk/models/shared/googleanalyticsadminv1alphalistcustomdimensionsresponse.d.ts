import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaCustomDimension } from "./googleanalyticsadminv1alphacustomdimension";
/**
 * Response message for ListCustomDimensions RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse extends SpeakeasyBase {
    /**
     * List of CustomDimensions.
     */
    customDimensions?: GoogleAnalyticsAdminV1alphaCustomDimension[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
