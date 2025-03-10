/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Scopes } from "./scopes";
import { ScopesContextEnum } from "./scopescontextenum";
import { Expose, Type } from "class-transformer";

/**
 * ItemApplicationScopesUpdateRequest defines the request schema for `/item/application/scopes/update`
 */
export class ItemApplicationScopesUpdateRequest extends SpeakeasyBase {
  /**
   * The access token associated with the Item data is being requested for.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "access_token" })
  accessToken: string;

  /**
   * This field will map to the application ID that is returned from /item/applications/list, or provided to the institution in an oauth redirect.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "application_id" })
  applicationId: string;

  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "client_id" })
  clientId?: string;

  /**
   * An indicator for when scopes are being updated. When scopes are updated via enrollment (i.e. OAuth), the partner must send `ENROLLMENT`. When scopes are updated in a post-enrollment view, the partner must send `PORTAL`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "context" })
  context: ScopesContextEnum;

  /**
   * The scopes object
   */
  @SpeakeasyMetadata()
  @Expose({ name: "scopes" })
  @Type(() => Scopes)
  scopes: Scopes;

  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "secret" })
  secret?: string;

  /**
   * When scopes are updated during enrollment, this field must be populated with the state sent to the partner in the OAuth Login URI. This field is required when the context is `ENROLLMENT`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;
}
