/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttachmentDataRef } from "./attachmentdataref";
import { DriveDataRef } from "./drivedataref";
import { Expose, Type } from "class-transformer";

/**
 * The source of the attachment.
 */
export enum AttachmentSourceEnum {
  SourceUnspecified = "SOURCE_UNSPECIFIED",
  DriveFile = "DRIVE_FILE",
  UploadedContent = "UPLOADED_CONTENT",
}

/**
 * An attachment in Google Chat.
 */
export class AttachmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentDataRef" })
  @Type(() => AttachmentDataRef)
  attachmentDataRef?: AttachmentDataRef;

  /**
   * The original file name for the content, not the full path.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contentName" })
  contentName?: string;

  /**
   * The content type (MIME type) of the file.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contentType" })
  contentType?: string;

  /**
   * A reference to the data of a drive attachment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "driveDataRef" })
  @Type(() => DriveDataRef)
  driveDataRef?: DriveDataRef;

  /**
   * Resource name of the attachment, in the form "spaces/* /messages/* /attachments/*".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The source of the attachment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source?: AttachmentSourceEnum;
}

/**
 * An attachment in Google Chat.
 */
export class Attachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentDataRef" })
  @Type(() => AttachmentDataRef)
  attachmentDataRef?: AttachmentDataRef;

  /**
   * The original file name for the content, not the full path.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contentName" })
  contentName?: string;

  /**
   * The content type (MIME type) of the file.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contentType" })
  contentType?: string;

  /**
   * Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps should not use this URL to download attachment content.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "downloadUri" })
  downloadUri?: string;

  /**
   * A reference to the data of a drive attachment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "driveDataRef" })
  @Type(() => DriveDataRef)
  driveDataRef?: DriveDataRef;

  /**
   * Resource name of the attachment, in the form "spaces/* /messages/* /attachments/*".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The source of the attachment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source?: AttachmentSourceEnum;

  /**
   * Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps should not use this URL to download attachment content.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "thumbnailUri" })
  thumbnailUri?: string;
}
