import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1View } from "./googlecloudcontactcenterinsightsv1view";
/**
 * The response of listing views.
 */
export declare class GoogleCloudContactcenterinsightsV1ListViewsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The views that match the request.
     */
    views?: GoogleCloudContactcenterinsightsV1View[];
}
