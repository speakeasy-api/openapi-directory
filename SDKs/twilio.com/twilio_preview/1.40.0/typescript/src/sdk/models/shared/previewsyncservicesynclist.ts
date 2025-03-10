/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Created
 */
export class PreviewSyncServiceSyncList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  createdBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date_created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dateCreated?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "date_updated" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dateUpdated?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "links" })
  links?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "revision" })
  revision?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sid" })
  sid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "unique_name" })
  uniqueName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}
