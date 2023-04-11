import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Which direction to traverse (used only if relationship_type is defined)
 */
export declare enum GetEdgeResourceDirectionEnum {
    Incoming = "INCOMING",
    Outgoing = "OUTGOING",
    Both = "BOTH"
}
/**
 * Which monarch graph to query
 */
export declare enum GetEdgeResourceGraphEnum {
    Data = "data",
    Ontology = "ontology"
}
export declare class GetEdgeResourceRequest extends SpeakeasyBase {
    /**
     * How far to traverse for neighbors
     */
    depth?: number;
    /**
     * Which direction to traverse (used only if relationship_type is defined)
     */
    direction?: GetEdgeResourceDirectionEnum;
    /**
     * Include sub-properties and equivalent properties
     */
    entail?: boolean;
    /**
     * Which monarch graph to query
     */
    graph?: GetEdgeResourceGraphEnum;
    /**
     * CURIE e.g. HP:0000465
     */
    id: string;
    /**
     * Relationship type to traverse
     */
    relationshipType?: string[];
}
export declare class GetEdgeResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    graphs?: shared.Graph[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
