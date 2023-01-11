import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaCustomDimension } from "./googleanalyticsadminv1betacustomdimension";
/**
 * Response message for ListCustomDimensions RPC.
**/
export declare class GoogleAnalyticsAdminV1betaListCustomDimensionsResponse extends SpeakeasyBase {
    customDimensions?: GoogleAnalyticsAdminV1betaCustomDimension[];
    nextPageToken?: string;
}
