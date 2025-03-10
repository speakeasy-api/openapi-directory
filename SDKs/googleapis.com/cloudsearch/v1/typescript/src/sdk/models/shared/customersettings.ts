/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AuditLoggingSettings } from "./auditloggingsettings";
import { VPCSettings } from "./vpcsettings";
import { Expose, Type } from "class-transformer";

/**
 * Represents settings at a customer level.
 */
export class CustomerSettings extends SpeakeasyBase {
  /**
   * Represents the settings for Cloud audit logging
   */
  @SpeakeasyMetadata()
  @Expose({ name: "auditLoggingSettings" })
  @Type(() => AuditLoggingSettings)
  auditLoggingSettings?: AuditLoggingSettings;

  @SpeakeasyMetadata()
  @Expose({ name: "vpcSettings" })
  @Type(() => VPCSettings)
  vpcSettings?: VPCSettings;
}
