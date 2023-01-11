import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMeActivitiesAllOwnQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=access" })
  access?: shared.AccessEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetMeActivitiesAllOwnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class GetMeActivitiesAllOwnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMeActivitiesAllOwnQueryParams;

  @SpeakeasyMetadata()
  security: GetMeActivitiesAllOwnSecurity;
}


export class GetMeActivitiesAllOwnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activities?: shared.Activities;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
