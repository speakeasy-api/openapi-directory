import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMeActivitiesTracksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=access" })
  access?: shared.AccessEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetMeActivitiesTracksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class GetMeActivitiesTracksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMeActivitiesTracksQueryParams;

  @SpeakeasyMetadata()
  security: GetMeActivitiesTracksSecurity;
}


export class GetMeActivitiesTracksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activities?: shared.Activities;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
