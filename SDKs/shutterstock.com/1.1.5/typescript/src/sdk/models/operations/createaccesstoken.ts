import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateAccessTokenApplicationJsonGrantTypeEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    RefreshToken = "refresh_token"
}

export enum CreateAccessTokenApplicationJsonRealmEnum {
    Customer = "customer",
    Contributor = "contributor"
}


export class CreateAccessTokenApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=client_secret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: boolean;

  @SpeakeasyMetadata({ data: "json, name=grant_type" })
  grantType: CreateAccessTokenApplicationJsonGrantTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=realm" })
  realm?: CreateAccessTokenApplicationJsonRealmEnum;

  @SpeakeasyMetadata({ data: "json, name=refresh_token" })
  refreshToken?: string;
}

export enum CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum {
    True = "true",
    False = "false"
}

export enum CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    RefreshToken = "refresh_token"
}

export enum CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum {
    Customer = "customer",
    Contributor = "contributor"
}


export class CreateAccessTokenApplicationXWwwFormUrlencoded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=client_id;" })
  clientId: string;

  @SpeakeasyMetadata({ data: "form, name=client_secret;" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "form, name=code;" })
  code?: string;

  @SpeakeasyMetadata({ data: "form, name=expires;" })
  expires?: CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum;

  @SpeakeasyMetadata({ data: "form, name=grant_type;" })
  grantType: CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=realm;" })
  realm?: CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum;

  @SpeakeasyMetadata({ data: "form, name=refresh_token;" })
  refreshToken?: string;
}


export class CreateAccessTokenRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: CreateAccessTokenApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  object1?: CreateAccessTokenApplicationXWwwFormUrlencoded;
}


export class CreateAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: CreateAccessTokenRequests;
}


export class CreateAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  oauthAccessTokenResponse?: shared.OauthAccessTokenResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
