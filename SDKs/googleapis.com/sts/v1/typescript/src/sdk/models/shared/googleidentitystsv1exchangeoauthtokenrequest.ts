import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleIdentityStsV1ExchangeOauthTokenRequest
/** 
 * Request message for ExchangeOauthToken
**/
export class GoogleIdentityStsV1ExchangeOauthTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=codeVerifier" })
  codeVerifier?: string;

  @SpeakeasyMetadata({ data: "json, name=grantType" })
  grantType?: string;

  @SpeakeasyMetadata({ data: "json, name=redirectUri" })
  redirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;
}
