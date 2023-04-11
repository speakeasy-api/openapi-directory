import { SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
/**
 * Response for ListNodes.
 */
export declare class ListNodesResponse extends SpeakeasyBase {
    /**
     * The next page token or empty if none.
     */
    nextPageToken?: string;
    /**
     * The listed nodes.
     */
    nodes?: Node[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
