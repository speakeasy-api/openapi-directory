import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFunctionTaxonAssociationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetFunctionTaxonAssociationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=evidence" })
  evidence?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetFunctionTaxonAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFunctionTaxonAssociationsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFunctionTaxonAssociationsQueryParams;
}


export class GetFunctionTaxonAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
