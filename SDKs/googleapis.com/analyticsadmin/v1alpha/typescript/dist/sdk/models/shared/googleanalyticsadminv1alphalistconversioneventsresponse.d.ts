import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaConversionEvent } from "./googleanalyticsadminv1alphaconversionevent";
/**
 * Response message for ListConversionEvents RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListConversionEventsResponse extends SpeakeasyBase {
    /**
     * The requested conversion events
     */
    conversionEvents?: GoogleAnalyticsAdminV1alphaConversionEvent[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
