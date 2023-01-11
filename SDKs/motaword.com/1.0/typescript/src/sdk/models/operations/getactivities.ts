import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetActivitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class GetActivitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetActivitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetActivitiesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetActivitiesQueryParams;
}


export class GetActivitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityList?: shared.ActivityList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
