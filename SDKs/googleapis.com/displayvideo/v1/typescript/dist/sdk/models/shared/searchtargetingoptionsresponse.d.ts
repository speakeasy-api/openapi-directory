import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingOption } from "./targetingoption";
/**
 * Response message for SearchTargetingOptions.
 */
export declare class SearchTargetingOptionsResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `SearchTargetingOptions` method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of targeting options that match the search criteria. This list will be absent if empty.
     */
    targetingOptions?: TargetingOption[];
}
