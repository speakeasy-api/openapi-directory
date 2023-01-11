import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMartCaseAssociationsResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object_category" })
  objectCategory: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxon" })
  taxon: string;
}


export class GetMartCaseAssociationsResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slim" })
  slim?: string[];
}


export class GetMartCaseAssociationsResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMartCaseAssociationsResourcePathParams;

  @SpeakeasyMetadata()
  queryParams: GetMartCaseAssociationsResourceQueryParams;
}


export class GetMartCaseAssociationsResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
