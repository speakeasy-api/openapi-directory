import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFunctionAssociationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetFunctionAssociationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=evidence" })
  evidence?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetFunctionAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFunctionAssociationsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFunctionAssociationsQueryParams;
}


export class GetFunctionAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
