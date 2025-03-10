/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FieldViolation } from "./fieldviolation";
import { Expose, Type } from "class-transformer";

/**
 * Error code indicating the nature of the error.
 */
export enum ProcessingErrorCodeEnum {
  ProcessingErrorCodeUnspecified = "PROCESSING_ERROR_CODE_UNSPECIFIED",
  MalformedRequest = "MALFORMED_REQUEST",
  UnsupportedContentFormat = "UNSUPPORTED_CONTENT_FORMAT",
  IndirectBrokenAcl = "INDIRECT_BROKEN_ACL",
  AclCycle = "ACL_CYCLE",
}

export class ProcessingError extends SpeakeasyBase {
  /**
   * Error code indicating the nature of the error.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: ProcessingErrorCodeEnum;

  /**
   * The description of the error.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  /**
   * In case the item fields are invalid, this field contains the details about the validation errors.
   */
  @SpeakeasyMetadata({ elemType: FieldViolation })
  @Expose({ name: "fieldViolations" })
  @Type(() => FieldViolation)
  fieldViolations?: FieldViolation[];
}
