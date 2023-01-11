import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RefreshTokenGrantTypeEnum {
    RefreshToken = "refresh_token"
}


export class RefreshToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=client_id;" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "form, name=client_secret;" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "form, name=grant_type;" })
  grantType?: RefreshTokenGrantTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=redirect_uri;" })
  redirectUri?: string;

  @SpeakeasyMetadata({ data: "form, name=refresh_token;" })
  refreshToken?: string;
}
