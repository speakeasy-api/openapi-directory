/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IdentityMatchRequestOptions } from "./identitymatchrequestoptions";
import { Expose, Type } from "class-transformer";

/**
 * IdentityMatchRequest defines the request schema for `/identity/match`
 */
export class IdentityMatchRequest extends SpeakeasyBase {
  /**
   * The access token associated with the Item data is being requested for.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "access_token" })
  accessToken: string;

  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "client_id" })
  clientId?: string;

  /**
   * An optional object to filter /identity/match results
   */
  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  @Type(() => IdentityMatchRequestOptions)
  options?: IdentityMatchRequestOptions;

  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "secret" })
  secret?: string;

  /**
   * The user's legal name, phone number, email address and address used to perform fuzzy match.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: Record<string, any>;
}
