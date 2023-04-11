import { SpeakeasyBase } from "../../../internal/utils";
import { Trace } from "./trace";
/**
 * The response message for the `ListTraces` method.
 */
export declare class ListTracesResponse extends SpeakeasyBase {
    /**
     * If defined, indicates that there are more traces that match the request and that this value should be passed to the next request to continue retrieving additional traces.
     */
    nextPageToken?: string;
    /**
     * List of trace records as specified by the view parameter.
     */
    traces?: Trace[];
}
