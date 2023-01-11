import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccessTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=grant_type" })
  grantType: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=refresh_token" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=scope" })
  scope: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=username" })
  username?: string;
}


export class GetAccessTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: GetAccessTokenRequestBody;

  @SpeakeasyMetadata()
  security: GetAccessTokenSecurity;
}


export class GetAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  token?: any;

  @SpeakeasyMetadata()
  tokenError?: shared.TokenError;
}
