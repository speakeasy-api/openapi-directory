/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductsEnum } from "./productsenum";
import { SandboxPublicTokenCreateRequestOptions } from "./sandboxpublictokencreaterequestoptions";
import { Expose, Type } from "class-transformer";

/**
 * SandboxPublicTokenCreateRequest defines the request schema for `/sandbox/public_token/create`
 */
export class SandboxPublicTokenCreateRequest extends SpeakeasyBase {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "client_id" })
  clientId?: string;

  /**
   * The products to initially pull for the Item. May be any products that the specified `institution_id`  supports. This array may not be empty.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "initial_products" })
  initialProducts: ProductsEnum[];

  /**
   * The ID of the institution the Item will be associated with
   */
  @SpeakeasyMetadata()
  @Expose({ name: "institution_id" })
  institutionId: string;

  /**
   * An optional set of options to be used when configuring the Item. If specified, must not be `null`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  @Type(() => SandboxPublicTokenCreateRequestOptions)
  options?: SandboxPublicTokenCreateRequestOptions;

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
  userToken?: string;
}
