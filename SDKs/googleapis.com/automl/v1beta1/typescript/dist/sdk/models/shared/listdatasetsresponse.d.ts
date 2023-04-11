import { SpeakeasyBase } from "../../../internal/utils";
import { Dataset } from "./dataset";
/**
 * Response message for AutoMl.ListDatasets.
 */
export declare class ListDatasetsResponse extends SpeakeasyBase {
    /**
     * The datasets read.
     */
    datasets?: Dataset[];
    /**
     * A token to retrieve next page of results. Pass to ListDatasetsRequest.page_token to obtain that page.
     */
    nextPageToken?: string;
}
