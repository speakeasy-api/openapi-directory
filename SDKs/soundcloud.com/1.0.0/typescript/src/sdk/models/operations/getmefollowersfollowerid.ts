import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMeFollowersFollowerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=follower_id" })
  followerId: number;
}


export class GetMeFollowersFollowerIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class GetMeFollowersFollowerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMeFollowersFollowerIdPathParams;

  @SpeakeasyMetadata()
  security: GetMeFollowersFollowerIdSecurity;
}


export class GetMeFollowersFollowerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: shared.User;
}
