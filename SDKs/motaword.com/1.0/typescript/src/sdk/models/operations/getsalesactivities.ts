import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSalesActivitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetSalesActivitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeOwner" })
  excludeOwner?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.SalesActivityTypeEnum;
}


export class GetSalesActivitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSalesActivitiesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSalesActivitiesQueryParams;
}


export class GetSalesActivitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  salesActivities?: shared.SalesActivities;

  @SpeakeasyMetadata()
  statusCode: number;
}
