import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaConversionEvent } from "./googleanalyticsadminv1betaconversionevent";
/**
 * Response message for ListConversionEvents RPC.
 */
export declare class GoogleAnalyticsAdminV1betaListConversionEventsResponse extends SpeakeasyBase {
    /**
     * The requested conversion events
     */
    conversionEvents?: GoogleAnalyticsAdminV1betaConversionEvent[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
