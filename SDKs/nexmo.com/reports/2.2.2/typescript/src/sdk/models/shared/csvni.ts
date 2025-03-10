/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Number Insight
 */
export class CsvNi extends SpeakeasyBase {
  /**
   * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "account_id" })
  accountId?: string;

  /**
   * Country of the looked up number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * Country name of the looked up number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country_name" })
  countryName?: string;

  /**
   * Currency of the price of the request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  /**
   * Date of the request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "date_received" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dateReceived?: Date;

  /**
   * First name of the owner of the looked up number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  /**
   * Last name of the owner of the looked up number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  /**
   * Network of the looked up number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "network" })
  network?: string;

  /**
   * Network name of the looked up number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "network_name" })
  networkName?: string;

  /**
   * Network type of the looked up number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "network_type" })
  networkType?: string;

  /**
   * Number looked up for this request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  /**
   * Is the looked up number ported.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ported" })
  ported?: string;

  /**
   * Type of Number Insight request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "product_type" })
  productType?: string;

  /**
   * Is the looked up number reachable.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reachable" })
  reachable?: string;

  /**
   * UUID of the request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "request_id" })
  requestId?: string;

  /**
   * Response code of the Number Insight request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "response_code" })
  responseCode?: string;

  /**
   * Status of the Number Insight request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;

  /**
   * Total price of the request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_price" })
  totalPrice?: number;

  /**
   * Is the looked up number valid.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "valid" })
  valid?: string;
}
