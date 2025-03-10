/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The severity of the alert.
 */
export enum CodeScanningAlertRuleSummarySeverityEnum {
  None = "none",
  Note = "note",
  Warning = "warning",
  Error = "error",
}

export class CodeScanningAlertRuleSummary extends SpeakeasyBase {
  /**
   * A short description of the rule used to detect the alert.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * A unique identifier for the rule used to detect the alert.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The name of the rule used to detect the alert.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The severity of the alert.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "severity" })
  severity?: CodeScanningAlertRuleSummarySeverityEnum;
}
