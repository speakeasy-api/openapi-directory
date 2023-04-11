import { SpeakeasyBase } from "../../../internal/utils";
import { AdSource } from "./adsource";
/**
 * Response for the ListAdSourcesRequest.
 */
export declare class ListAdSourcesResponse extends SpeakeasyBase {
    /**
     * The ad sources.
     */
    adSources?: AdSource[];
    /**
     * Used to set the `page_token` in the `ListAdSourcesRequest` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
