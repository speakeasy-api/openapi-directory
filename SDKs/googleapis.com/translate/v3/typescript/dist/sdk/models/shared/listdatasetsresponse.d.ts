import { SpeakeasyBase } from "../../../internal/utils";
import { Dataset } from "./dataset";
/**
 * Response message for ListDatasets.
 */
export declare class ListDatasetsResponse extends SpeakeasyBase {
    /**
     * The datasets read.
     */
    datasets?: Dataset[];
    /**
     * A token to retrieve next page of results. Pass this token to the page_token field in the ListDatasetsRequest to obtain the corresponding page.
     */
    nextPageToken?: string;
}
