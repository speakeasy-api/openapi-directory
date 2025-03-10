/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomerProfileEnumStatusEnum } from "./customerprofileenumstatusenum";
import { Expose, Transform } from "class-transformer";

/**
 * Created
 */
export class TrusthubV1CustomerProfile extends SpeakeasyBase {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Customer-Profile resource.
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
   * The email address that will receive updates when the Customer-Profile resource changes status.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  /**
   * The string that you assigned to describe the resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "friendly_name" })
  friendlyName?: string;

  /**
   * The URLs of the Assigned Items of the Customer-Profile resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "links" })
  links?: Record<string, any>;

  /**
   * The unique string of a policy that is associated to the Customer-Profile resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "policy_sid" })
  policySid?: string;

  /**
   * The unique string that we created to identify the Customer-Profile resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sid" })
  sid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: CustomerProfileEnumStatusEnum;

  /**
   * The URL we call to inform your application of status changes.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status_callback" })
  statusCallback?: string;

  /**
   * The absolute URL of the Customer-Profile resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;

  /**
   * The date and time in GMT in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format when the resource will be valid until.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "valid_until" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  validUntil?: Date;
}
