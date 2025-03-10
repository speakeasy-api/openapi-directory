/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Created
 */
export class FlexV1WebChannel extends SpeakeasyBase {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the WebChannel resource and owns this Workflow.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "account_sid" })
  accountSid?: string;

  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "date_created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dateCreated?: Date;

  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "date_updated" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dateUpdated?: Date;

  /**
   * The SID of the Flex Flow.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "flex_flow_sid" })
  flexFlowSid?: string;

  /**
   * The unique string that we created to identify the WebChannel resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sid" })
  sid?: string;

  /**
   * The absolute URL of the WebChannel resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}
