import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaConversionEvent } from "./googleanalyticsadminv1betaconversionevent";
/**
 * Response message for ListConversionEvents RPC.
**/
export declare class GoogleAnalyticsAdminV1betaListConversionEventsResponse extends SpeakeasyBase {
    conversionEvents?: GoogleAnalyticsAdminV1betaConversionEvent[];
    nextPageToken?: string;
}
