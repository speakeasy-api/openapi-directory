import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOntologyTermGraphPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetOntologyTermGraphGraphTypeEnum {
    TopologyGraph = "topology_graph",
    RegulatesTransitivityGraph = "regulates_transitivity_graph",
    NeighborhoodGraph = "neighborhood_graph",
    NeighborhoodLimitedGraph = "neighborhood_limited_graph"
}


export class GetOntologyTermGraphQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=graph_type" })
  graphType?: GetOntologyTermGraphGraphTypeEnum;
}


export class GetOntologyTermGraphRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOntologyTermGraphPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOntologyTermGraphQueryParams;
}


export class GetOntologyTermGraphResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
