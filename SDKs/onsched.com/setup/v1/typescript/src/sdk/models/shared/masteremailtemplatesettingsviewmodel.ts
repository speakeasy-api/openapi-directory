/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class MasterEmailTemplateSettingsViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "centerEmailContent" })
  centerEmailContent?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "centerEmailContentPanel" })
  centerEmailContentPanel?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "centerEmailFooter" })
  centerEmailFooter?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "contentBackgroundColor" })
  contentBackgroundColor?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contentColor" })
  contentColor?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contentLinkColor" })
  contentLinkColor?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "emailBackgroundColor" })
  emailBackgroundColor?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "emailColor" })
  emailColor?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "emailLinkColor" })
  emailLinkColor?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "footerFontSize" })
  footerFontSize?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "footerLogoHeight" })
  footerLogoHeight?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "footerLogoPadding" })
  footerLogoPadding?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "footerPanelEmailContact" })
  footerPanelEmailContact?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "footerPanelPhoneContact" })
  footerPanelPhoneContact?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "footerPanelWebsiteContact" })
  footerPanelWebsiteContact?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "headerLogoHeight" })
  headerLogoHeight?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "headerLogoPadding" })
  headerLogoPadding?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "panelBackgroundColor" })
  panelBackgroundColor?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "panelColor" })
  panelColor?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "panelLinkColor" })
  panelLinkColor?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "privacyPolicyLink" })
  privacyPolicyLink?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "showContentPanel" })
  showContentPanel?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "showFooterLogo" })
  showFooterLogo?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "showFooterPanel" })
  showFooterPanel?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "showHeaderLogo" })
  showHeaderLogo?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "showHeaderPanel" })
  showHeaderPanel?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}
