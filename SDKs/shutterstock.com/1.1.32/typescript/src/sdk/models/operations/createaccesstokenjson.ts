/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants
 */
export enum CreateAccessTokenApplicationJSONGrantTypeEnum {
  AuthorizationCode = "authorization_code",
  ClientCredentials = "client_credentials",
  RefreshToken = "refresh_token",
}

/**
 * User type to be authorized (usually 'customer')
 */
export enum CreateAccessTokenApplicationJSONRealmEnum {
  Customer = "customer",
  Contributor = "contributor",
}

export class CreateAccessTokenApplicationJSON extends SpeakeasyBase {
  /**
   * Client ID (Consumer Key) of your application
   */
  @SpeakeasyMetadata()
  @Expose({ name: "client_id" })
  clientId: string;

  /**
   * Client Secret (Consumer Secret) of your application
   */
  @SpeakeasyMetadata()
  @Expose({ name: "client_secret" })
  clientSecret?: string;

  /**
   * Response code from the /oauth/authorize flow; required if grant_type=authorization_code
   */
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  /**
   * Whether or not the token expires, expiring tokens come with a refresh_token to renew the access_token
   */
  @SpeakeasyMetadata()
  @Expose({ name: "expires" })
  expires?: boolean;

  /**
   * Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants
   */
  @SpeakeasyMetadata()
  @Expose({ name: "grant_type" })
  grantType: CreateAccessTokenApplicationJSONGrantTypeEnum;

  /**
   * User type to be authorized (usually 'customer')
   */
  @SpeakeasyMetadata()
  @Expose({ name: "realm" })
  realm?: CreateAccessTokenApplicationJSONRealmEnum;

  /**
   * Pass this along with grant_type=refresh_token to get a fresh access token
   */
  @SpeakeasyMetadata()
  @Expose({ name: "refresh_token" })
  refreshToken?: string;
}

export class CreateAccessTokenJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  oauthAccessTokenResponse?: shared.OauthAccessTokenResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
