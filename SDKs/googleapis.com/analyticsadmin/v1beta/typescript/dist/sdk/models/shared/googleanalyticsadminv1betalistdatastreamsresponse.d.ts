import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaDataStream } from "./googleanalyticsadminv1betadatastream";
/**
 * Response message for ListDataStreams RPC.
**/
export declare class GoogleAnalyticsAdminV1betaListDataStreamsResponse extends SpeakeasyBase {
    dataStreams?: GoogleAnalyticsAdminV1betaDataStream[];
    nextPageToken?: string;
}
