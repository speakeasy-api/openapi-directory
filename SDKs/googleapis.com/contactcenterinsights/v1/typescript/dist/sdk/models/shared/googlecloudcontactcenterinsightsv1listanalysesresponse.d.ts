import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1Analysis } from "./googlecloudcontactcenterinsightsv1analysis";
/**
 * The response to list analyses.
 */
export declare class GoogleCloudContactcenterinsightsV1ListAnalysesResponse extends SpeakeasyBase {
    /**
     * The analyses that match the request.
     */
    analyses?: GoogleCloudContactcenterinsightsV1Analysis[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
