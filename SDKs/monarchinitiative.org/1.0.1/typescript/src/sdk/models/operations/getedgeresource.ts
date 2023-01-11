import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEdgeResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetEdgeResourceDirectionEnum {
    Incoming = "INCOMING",
    Outgoing = "OUTGOING",
    Both = "BOTH"
}

export enum GetEdgeResourceGraphEnum {
    Data = "data",
    Ontology = "ontology"
}


export class GetEdgeResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=depth" })
  depth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetEdgeResourceDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entail" })
  entail?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=graph" })
  graph?: GetEdgeResourceGraphEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relationship_type" })
  relationshipType?: string[];
}


export class GetEdgeResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEdgeResourcePathParams;

  @SpeakeasyMetadata()
  queryParams: GetEdgeResourceQueryParams;
}


export class GetEdgeResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Graph })
  graphs?: shared.Graph[];

  @SpeakeasyMetadata()
  statusCode: number;
}
