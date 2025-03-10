/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * CreditEmploymentGetRequest defines the request schema for `/credit/employment/get`.
 */
export class CreditEmploymentGetRequest extends SpeakeasyBase {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "client_id" })
  clientId?: string;

  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "secret" })
  secret?: string;

  /**
   * The user token associated with the User data is being requested for.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "user_token" })
  userToken: string;
}
