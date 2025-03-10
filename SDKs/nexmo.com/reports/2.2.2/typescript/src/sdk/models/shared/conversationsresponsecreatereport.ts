/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IncludeSubaccountsEnum } from "./includesubaccountsenum";
import { LinksCreateReport } from "./linkscreatereport";
import { ProductConversationsEnum } from "./productconversationsenum";
import { RequestStatusCreateReportEnum } from "./requeststatuscreatereportenum";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Conversations
 */
export class ConversationsResponseCreateReport extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => LinksCreateReport)
  links?: LinksCreateReport;

  /**
   * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "account_id" })
  accountId?: string;

  /**
   * URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "callback_url" })
  callbackUrl?: string;

  /**
   * Search only for events sent to this particular Conversation. This should include the "CON-" prefix.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "conversation_id" })
  conversationId?: string;

  /**
   * ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "date_end" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dateEnd?: Date;

  /**
   * ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "date_start" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dateStart?: Date;

  /**
   * Whether to include subaccounts or not.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "include_subaccounts" })
  includeSubaccounts?: IncludeSubaccountsEnum;

  /**
   * Which product you wish to generate a report for.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "product" })
  product?: ProductConversationsEnum;

  /**
   * Time at which the report request was received by the service.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "receive_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  receiveTime?: Date;

  /**
   * UUID of the request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "request_id" })
  requestId?: string;

  /**
   * Status of the request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "request_status" })
  requestStatus?: RequestStatusCreateReportEnum;

  /**
   * Time at which the report processing of the report has started.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startTime?: Date;

  /**
   * Search only for conversation events with the specified event status.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}
