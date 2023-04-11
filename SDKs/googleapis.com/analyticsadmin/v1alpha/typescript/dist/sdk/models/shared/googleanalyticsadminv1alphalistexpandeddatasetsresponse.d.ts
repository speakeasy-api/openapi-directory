import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaExpandedDataSet } from "./googleanalyticsadminv1alphaexpandeddataset";
/**
 * Response message for ListExpandedDataSets RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse extends SpeakeasyBase {
    /**
     * List of ExpandedDataSet. These will be ordered stably, but in an arbitrary order.
     */
    expandedDataSets?: GoogleAnalyticsAdminV1alphaExpandedDataSet[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
