import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PasswordGrantTypeEnum {
    Password = "password"
}


export class Password extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=client_id;" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "form, name=client_secret;" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "form, name=grant_type;" })
  grantType?: PasswordGrantTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=password;" })
  password?: string;

  @SpeakeasyMetadata({ data: "form, name=redirect_uri;" })
  redirectUri?: string;

  @SpeakeasyMetadata({ data: "form, name=user_name;" })
  userName?: string;
}
