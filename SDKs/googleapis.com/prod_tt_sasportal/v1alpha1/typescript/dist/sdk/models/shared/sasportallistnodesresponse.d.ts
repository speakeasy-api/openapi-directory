import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalNode } from "./sasportalnode";
/**
 * Response for ListNodes.
 */
export declare class SasPortalListNodesResponse extends SpeakeasyBase {
    /**
     * A pagination token returned from a previous call to ListNodes that indicates from where listing should continue. If the field is missing or empty, it means there is no more nodes.
     */
    nextPageToken?: string;
    /**
     * The nodes that match the request.
     */
    nodes?: SasPortalNode[];
}
