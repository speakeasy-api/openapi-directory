import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingOption } from "./targetingoption";
/**
 * Response message for ListTargetingOptions.
 */
export declare class ListTargetingOptionsResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListTargetingOptions` method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of targeting options. This list will be absent if empty.
     */
    targetingOptions?: TargetingOption[];
}
