import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOntologyTermGraphPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetOntologyTermGraphGraphTypeEnum {
    TopologyGraph = "topology_graph",
    RegulatesTransitivityGraph = "regulates_transitivity_graph",
    NeighborhoodGraph = "neighborhood_graph",
    NeighborhoodLimitedGraph = "neighborhood_limited_graph"
}
export declare class GetOntologyTermGraphQueryParams extends SpeakeasyBase {
    graphType?: GetOntologyTermGraphGraphTypeEnum;
}
export declare class GetOntologyTermGraphRequest extends SpeakeasyBase {
    pathParams: GetOntologyTermGraphPathParams;
    queryParams: GetOntologyTermGraphQueryParams;
}
export declare class GetOntologyTermGraphResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
