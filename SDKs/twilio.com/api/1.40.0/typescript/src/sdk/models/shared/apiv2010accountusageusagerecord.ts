/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UsageRecordEnumCategoryEnum } from "./usagerecordenumcategoryenum";
import { Expose, Transform } from "class-transformer";

export class ApiV2010AccountUsageUsageRecord extends SpeakeasyBase {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that accrued the usage.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "account_sid" })
  accountSid?: string;

  /**
   * The API version used to create the resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "api_version" })
  apiVersion?: string;

  /**
   * Usage records up to date as of this timestamp, formatted as YYYY-MM-DDTHH:MM:SS+00:00. All timestamps are in GMT
   */
  @SpeakeasyMetadata()
  @Expose({ name: "as_of" })
  asOf?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "category" })
  category?: UsageRecordEnumCategoryEnum;

  /**
   * The number of usage events, such as the number of calls.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: string;

  /**
   * The units in which `count` is measured, such as `calls` for calls or `messages` for SMS.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "count_unit" })
  countUnit?: string;

  /**
   * A plain-language description of the usage category.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * The last date for which usage is included in the UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate?: Date;

  /**
   * The total price of the usage in the currency specified in `price_unit` and associated with the account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "price" })
  price?: number;

  /**
   * The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format, such as `usd`, `eur`, and `jpy`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "price_unit" })
  priceUnit?: string;

  /**
   * The first date for which usage is included in this UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;

  /**
   * A list of related resources identified by their URIs. For more information, see [List Subresources](https://www.twilio.com/docs/usage/api/usage-record#list-subresources).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subresource_uris" })
  subresourceUris?: Record<string, any>;

  /**
   * The URI of the resource, relative to `https://api.twilio.com`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri?: string;

  /**
   * The amount used to bill usage and measured in units described in `usage_unit`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "usage" })
  usage?: string;

  /**
   * The units in which `usage` is measured, such as `minutes` for calls or `messages` for SMS.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "usage_unit" })
  usageUnit?: string;
}
