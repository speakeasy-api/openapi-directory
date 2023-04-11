import { SpeakeasyBase } from "../../../internal/utils";
import { Example } from "./example";
/**
 * Response message for ListExamples.
 */
export declare class ListExamplesResponse extends SpeakeasyBase {
    /**
     * The sentence pairs.
     */
    examples?: Example[];
    /**
     * A token to retrieve next page of results. Pass this token to the page_token field in the ListExamplesRequest to obtain the corresponding page.
     */
    nextPageToken?: string;
}
