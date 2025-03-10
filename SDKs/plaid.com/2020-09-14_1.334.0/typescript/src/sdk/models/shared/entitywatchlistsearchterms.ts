/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Search inputs for creating an entity watchlist screening
 */
export class EntityWatchlistSearchTerms extends SpeakeasyBase {
  /**
   * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO 3166-1 alpha-2 form.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * The numeric or alphanumeric identifier associated with this document.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "document_number" })
  documentNumber?: string;

  /**
   * A valid email address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email_address" })
  emailAddress?: string;

  /**
   * ID of the associated entity program.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "entity_watchlist_program_id" })
  entityWatchlistProgramId: string;

  /**
   * The name of the organization being screened.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "legal_name" })
  legalName: string;

  /**
   * A phone number in E.164 format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "phone_number" })
  phoneNumber?: string;

  /**
   * An 'http' or 'https' URL (must begin with either of those).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}
