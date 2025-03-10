/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The log type that this config enables.
 */
export enum GoogleIamV1AuditLogConfigLogTypeEnum {
  LogTypeUnspecified = "LOG_TYPE_UNSPECIFIED",
  AdminRead = "ADMIN_READ",
  DataWrite = "DATA_WRITE",
  DataRead = "DATA_READ",
}

/**
 * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
 */
export class GoogleIamV1AuditLogConfig extends SpeakeasyBase {
  /**
   * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "exemptedMembers" })
  exemptedMembers?: string[];

  /**
   * The log type that this config enables.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "logType" })
  logType?: GoogleIamV1AuditLogConfigLogTypeEnum;
}
