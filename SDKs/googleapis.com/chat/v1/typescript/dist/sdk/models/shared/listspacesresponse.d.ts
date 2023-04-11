import { SpeakeasyBase } from "../../../internal/utils";
import { Space } from "./space";
/**
 * Successful response
 */
export declare class ListSpacesResponse extends SpeakeasyBase {
    /**
     * A token that can be sent as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * List of spaces in the requested (or first) page.
     */
    spaces?: Space[];
}
