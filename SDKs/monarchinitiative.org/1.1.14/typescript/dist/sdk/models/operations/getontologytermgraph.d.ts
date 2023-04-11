import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * graph type ('topology_graph', 'regulates_transitivity_graph' or 'neighborhood_graph')
 */
export declare enum GetOntologyTermGraphGraphTypeEnum {
    TopologyGraph = "topology_graph",
    RegulatesTransitivityGraph = "regulates_transitivity_graph",
    NeighborhoodGraph = "neighborhood_graph",
    NeighborhoodLimitedGraph = "neighborhood_limited_graph"
}
export declare class GetOntologyTermGraphRequest extends SpeakeasyBase {
    /**
     * graph type ('topology_graph', 'regulates_transitivity_graph' or 'neighborhood_graph')
     */
    graphType?: GetOntologyTermGraphGraphTypeEnum;
    /**
     * CURIE identifier of a GO term, e.g. GO:0000981
     */
    id: string;
}
export declare class GetOntologyTermGraphResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
