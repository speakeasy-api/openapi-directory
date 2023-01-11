import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OauthAccessTokenResponse
/** 
 * Access token response to client apps
**/
export class OauthAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=refresh_token" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "json, name=token_type" })
  tokenType: string;

  @SpeakeasyMetadata({ data: "json, name=user_token" })
  userToken?: string;
}
