import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostExtractOntologySubgraphResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node" })
  node: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ontology" })
  ontology: string;
}


export class PostExtractOntologySubgraphResourceQueryParams extends SpeakeasyBase {
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


export class PostExtractOntologySubgraphResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostExtractOntologySubgraphResourcePathParams;

  @SpeakeasyMetadata()
  queryParams: PostExtractOntologySubgraphResourceQueryParams;
}


export class PostExtractOntologySubgraphResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
