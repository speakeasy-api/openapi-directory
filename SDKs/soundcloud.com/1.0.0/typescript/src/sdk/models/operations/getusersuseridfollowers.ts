import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersUserIdFollowersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class GetUsersUserIdFollowersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetUsersUserIdFollowersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  clientId: shared.SchemeClientId;
}


export class GetUsersUserIdFollowersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersUserIdFollowersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersUserIdFollowersQueryParams;

  @SpeakeasyMetadata()
  security: GetUsersUserIdFollowersSecurity;
}


export class GetUsersUserIdFollowersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getUsersUserIdFollowers200ApplicationJSONOneOf?: any;
}
