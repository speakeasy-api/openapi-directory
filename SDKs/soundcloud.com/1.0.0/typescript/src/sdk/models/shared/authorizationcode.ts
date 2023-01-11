import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AuthorizationCodeGrantTypeEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials"
}


export class AuthorizationCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=authorization_code;" })
  authorizationCode?: string;

  @SpeakeasyMetadata({ data: "form, name=client_id;" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "form, name=client_secret;" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "form, name=grant_type;" })
  grantType?: AuthorizationCodeGrantTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=redirect_uri;" })
  redirectUri?: string;
}
