import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEdgeResourcePathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetEdgeResourceDirectionEnum {
    Incoming = "INCOMING",
    Outgoing = "OUTGOING",
    Both = "BOTH"
}
export declare enum GetEdgeResourceGraphEnum {
    Data = "data",
    Ontology = "ontology"
}
export declare class GetEdgeResourceQueryParams extends SpeakeasyBase {
    depth?: number;
    direction?: GetEdgeResourceDirectionEnum;
    entail?: boolean;
    graph?: GetEdgeResourceGraphEnum;
    relationshipType?: string[];
}
export declare class GetEdgeResourceRequest extends SpeakeasyBase {
    pathParams: GetEdgeResourcePathParams;
    queryParams: GetEdgeResourceQueryParams;
}
export declare class GetEdgeResourceResponse extends SpeakeasyBase {
    contentType: string;
    graphs?: shared.Graph[];
    statusCode: number;
}
