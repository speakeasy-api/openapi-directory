import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaProperty } from "./googleanalyticsadminv1betaproperty";
/**
 * Response message for ListProperties RPC.
**/
export declare class GoogleAnalyticsAdminV1betaListPropertiesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    properties?: GoogleAnalyticsAdminV1betaProperty[];
}
