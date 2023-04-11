import { SpeakeasyBase } from "../../../internal/utils";
import { Creative } from "./creative";
/**
 * Successful response
 */
export declare class ListCreativesResponse extends SpeakeasyBase {
    /**
     * The list of creatives. This list will be absent if empty.
     */
    creatives?: Creative[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCreativesRequest` method to retrieve the next page of results. If this field is null, it means this is the last page.
     */
    nextPageToken?: string;
}
