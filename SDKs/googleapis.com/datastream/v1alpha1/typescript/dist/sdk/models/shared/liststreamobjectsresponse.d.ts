import { SpeakeasyBase } from "../../../internal/utils";
import { StreamObject } from "./streamobject";
/**
 * Response containing the objects for a stream.
 */
export declare class ListStreamObjectsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page.
     */
    nextPageToken?: string;
    /**
     * List of stream objects.
     */
    streamObjects?: StreamObject[];
}
