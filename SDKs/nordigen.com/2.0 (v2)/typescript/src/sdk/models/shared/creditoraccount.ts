/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Creditor account type
 */
export enum CreditorAccountTypeEnum {
  Iban = "IBAN",
  Scan = "SCAN",
}

/**
 * Creditor account read serializer.
 */
export class CreditorAccount extends SpeakeasyBase {
  /**
   * Creditor account type identifier
   */
  @SpeakeasyMetadata()
  @Expose({ name: "account" })
  account: string;

  /**
   * Creditor account address country
   */
  @SpeakeasyMetadata()
  @Expose({ name: "address_country" })
  addressCountry?: string;

  /**
   * Creditor account currency
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  /**
   * Unique entry ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Creditor account name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * Creditor account type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CreditorAccountTypeEnum;
}
