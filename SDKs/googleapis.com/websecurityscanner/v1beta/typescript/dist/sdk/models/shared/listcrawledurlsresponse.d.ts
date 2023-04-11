import { SpeakeasyBase } from "../../../internal/utils";
import { CrawledUrl } from "./crawledurl";
/**
 * Response for the `ListCrawledUrls` method.
 */
export declare class ListCrawledUrlsResponse extends SpeakeasyBase {
    /**
     * The list of CrawledUrls returned.
     */
    crawledUrls?: CrawledUrl[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
