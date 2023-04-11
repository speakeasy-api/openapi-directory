import { SpeakeasyBase } from "../../../internal/utils";
import { TraceSink } from "./tracesink";
/**
 * Result returned from `ListTraceSinks`.
 */
export declare class ListTraceSinksResponse extends SpeakeasyBase {
    /**
     * A paginated response where more pages might be available has `next_page_token` set. To get the next set of results, call the same method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
    /**
     * A list of sinks.
     */
    sinks?: TraceSink[];
}
