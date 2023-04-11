import { SpeakeasyBase } from "../../../internal/utils";
import { InternalRange } from "./internalrange";
/**
 * Response for InternalRange.ListInternalRanges
 */
export declare class ListInternalRangesResponse extends SpeakeasyBase {
    /**
     * Internal range to be returned.
     */
    internalRanges?: InternalRange[];
    /**
     * The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
