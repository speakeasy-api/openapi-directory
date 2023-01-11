import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFunctionPublicationAssociationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetFunctionPublicationAssociationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=evidence" })
  evidence?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetFunctionPublicationAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFunctionPublicationAssociationsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFunctionPublicationAssociationsQueryParams;
}


export class GetFunctionPublicationAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
