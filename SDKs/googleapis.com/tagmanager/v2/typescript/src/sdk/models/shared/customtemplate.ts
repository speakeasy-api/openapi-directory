/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GalleryReference } from "./galleryreference";
import { Expose, Type } from "class-transformer";

/**
 * Represents a Google Tag Manager Custom Template's contents.
 */
export class CustomTemplate extends SpeakeasyBase {
  /**
   * GTM Account ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  /**
   * GTM Container ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "containerId" })
  containerId?: string;

  /**
   * The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template is modified.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fingerprint" })
  fingerprint?: string;

  /**
   * Represents the link between a custom template and an entry on the Community Template Gallery site.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "galleryReference" })
  @Type(() => GalleryReference)
  galleryReference?: GalleryReference;

  /**
   * Custom Template display name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * GTM Custom Template's API relative path.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path?: string;

  /**
   * Auto generated link to the tag manager UI
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tagManagerUrl" })
  tagManagerUrl?: string;

  /**
   * The custom template in text format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "templateData" })
  templateData?: string;

  /**
   * The Custom Template ID uniquely identifies the GTM custom template.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "templateId" })
  templateId?: string;

  /**
   * GTM Workspace ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "workspaceId" })
  workspaceId?: string;
}
