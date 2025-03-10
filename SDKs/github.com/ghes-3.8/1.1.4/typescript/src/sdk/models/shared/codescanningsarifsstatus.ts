/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. `failed` files have either not been processed at all, or could only be partially processed.
 */
export enum CodeScanningSarifsStatusProcessingStatusEnum {
  Pending = "pending",
  Complete = "complete",
  Failed = "failed",
}

/**
 * Response
 */
export class CodeScanningSarifsStatus extends SpeakeasyBase {
  /**
   * The REST API URL for getting the analyses associated with the upload.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "analyses_url" })
  analysesUrl?: string;

  /**
   * Any errors that ocurred during processing of the delivery.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "errors" })
  errors?: string[];

  /**
   * `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. `failed` files have either not been processed at all, or could only be partially processed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "processing_status" })
  processingStatus?: CodeScanningSarifsStatusProcessingStatusEnum;
}
