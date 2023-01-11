import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOntologyTermSubgraphPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetOntologyTermSubgraphQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cnode" })
  cnode?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_ancestors" })
  includeAncestors?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_descendants" })
  includeDescendants?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_meta" })
  includeMeta?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relation" })
  relation?: string[];
}


export class GetOntologyTermSubgraphRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOntologyTermSubgraphPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOntologyTermSubgraphQueryParams;
}


export class GetOntologyTermSubgraphResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
