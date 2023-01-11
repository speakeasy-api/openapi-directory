import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMartGeneAssociationsResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object_category" })
  objectCategory: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxon" })
  taxon: string;
}


export class GetMartGeneAssociationsResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slim" })
  slim?: string[];
}


export class GetMartGeneAssociationsResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMartGeneAssociationsResourcePathParams;

  @SpeakeasyMetadata()
  queryParams: GetMartGeneAssociationsResourceQueryParams;
}


export class GetMartGeneAssociationsResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
