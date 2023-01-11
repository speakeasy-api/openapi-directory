import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersUserIdTracksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class GetUsersUserIdTracksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=access" })
  access?: shared.AccessEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=linked_partitioning" })
  linkedPartitioning?: boolean;
}


export class GetUsersUserIdTracksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  clientId: shared.SchemeClientId;
}


export class GetUsersUserIdTracksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersUserIdTracksPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersUserIdTracksQueryParams;

  @SpeakeasyMetadata()
  security: GetUsersUserIdTracksSecurity;
}


export class GetUsersUserIdTracksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getUsersUserIdTracks200ApplicationJSONOneOf?: any;
}
