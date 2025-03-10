/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The expected state of a client's local database.
 */
export class GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum extends SpeakeasyBase {
  /**
   * The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sha256" })
  sha256?: string;
}
