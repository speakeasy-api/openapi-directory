/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The credentials to authenticate a user agent with a server that is put in HTTP Authorization request header.
 */
export class GoogleCloudIntegrationsV1alphaAuthToken extends SpeakeasyBase {
  /**
   * The token for the auth type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "token" })
  token?: string;

  /**
   * Authentication type, e.g. "Basic", "Bearer", etc.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}
