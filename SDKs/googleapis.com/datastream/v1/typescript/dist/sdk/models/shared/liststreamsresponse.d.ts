import { SpeakeasyBase } from "../../../internal/utils";
import { Stream } from "./stream";
/**
 * Response message for listing streams.
 */
export declare class ListStreamsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * List of streams
     */
    streams?: Stream[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
