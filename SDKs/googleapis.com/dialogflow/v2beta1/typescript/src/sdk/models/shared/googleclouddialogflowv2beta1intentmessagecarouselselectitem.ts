/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo } from "./googleclouddialogflowv2beta1intentmessageselectiteminfo";
import { Expose, Type } from "class-transformer";

/**
 * An item in the carousel.
 */
export class GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem extends SpeakeasyBase {
  /**
   * Optional. The body text of the card.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * The image response message.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "image" })
  @Type(() => GoogleCloudDialogflowV2beta1IntentMessageImage)
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

  /**
   * Additional info about the select item for when it is triggered in a dialog.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "info" })
  @Type(() => GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo)
  info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;

  /**
   * Required. Title of the carousel item.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;
}
