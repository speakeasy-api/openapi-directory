/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Required. Indicates how the applied Label, and Field values should be copied when a Drive item is copied.
 */
export enum GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestCopyModeEnum {
  CopyModeUnspecified = "COPY_MODE_UNSPECIFIED",
  DoNotCopy = "DO_NOT_COPY",
  AlwaysCopy = "ALWAYS_COPY",
  CopyAppliable = "COPY_APPLIABLE",
}

/**
 * When specified, only certain fields belonging to the indicated view will be returned.
 */
export enum GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestViewEnum {
  LabelViewBasic = "LABEL_VIEW_BASIC",
  LabelViewFull = "LABEL_VIEW_FULL",
}

/**
 * Request to update the `CopyMode` of the given Label. Changes to this policy are not revisioned, do not require publishing, and take effect immediately. \
 */
export class GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequest extends SpeakeasyBase {
  /**
   * Required. Indicates how the applied Label, and Field values should be copied when a Drive item is copied.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "copyMode" })
  copyMode?: GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestCopyModeEnum;

  /**
   * The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "languageCode" })
  languageCode?: string;

  /**
   * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "useAdminAccess" })
  useAdminAccess?: boolean;

  /**
   * When specified, only certain fields belonging to the indicated view will be returned.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "view" })
  view?: GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestViewEnum;
}
