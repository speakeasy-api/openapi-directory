/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Response message
 */
export enum RecordStopResponseMessageEnum {
  RecordStopExecuted = "RecordStop Executed",
  CallUUIDParameterMustBePresent = "CallUUID Parameter must be present",
  RecordFileParameterMustBePresent = "RecordFile Parameter must be present",
  RecordStopFailedCallNotFound = "RecordStop Failed -- Call not found",
  RecordStopFailed = "RecordStop Failed",
}

/**
 * Response
 */
export class RecordStopResponse extends SpeakeasyBase {
  /**
   * Response message
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Message" })
  message: RecordStopResponseMessageEnum;

  /**
   * Whether the request was successful or not
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Success" })
  success: boolean;
}
