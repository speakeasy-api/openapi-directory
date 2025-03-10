/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LogConfigCloudAuditOptions } from "./logconfigcloudauditoptions";
import { LogConfigCounterOptions } from "./logconfigcounteroptions";
import { LogConfigDataAccessOptions } from "./logconfigdataaccessoptions";
import { Expose, Type } from "class-transformer";

/**
 * This is deprecated and has no effect. Do not use.
 */
export class LogConfig extends SpeakeasyBase {
  /**
   * This is deprecated and has no effect. Do not use.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cloudAudit" })
  @Type(() => LogConfigCloudAuditOptions)
  cloudAudit?: LogConfigCloudAuditOptions;

  /**
   * This is deprecated and has no effect. Do not use.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "counter" })
  @Type(() => LogConfigCounterOptions)
  counter?: LogConfigCounterOptions;

  /**
   * This is deprecated and has no effect. Do not use.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataAccess" })
  @Type(() => LogConfigDataAccessOptions)
  dataAccess?: LogConfigDataAccessOptions;
}
