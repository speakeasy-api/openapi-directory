/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleCloudWebriskV1RawHashes } from "./googlecloudwebriskv1rawhashes";
import { GoogleCloudWebriskV1RiceDeltaEncoding } from "./googlecloudwebriskv1ricedeltaencoding";
import { Expose, Type } from "class-transformer";

/**
 * Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response.
 */
export class GoogleCloudWebriskV1ThreatEntryAdditions extends SpeakeasyBase {
  /**
   * The raw SHA256-formatted entries. Repeated to allow returning sets of hashes with different prefix sizes.
   */
  @SpeakeasyMetadata({ elemType: GoogleCloudWebriskV1RawHashes })
  @Expose({ name: "rawHashes" })
  @Type(() => GoogleCloudWebriskV1RawHashes)
  rawHashes?: GoogleCloudWebriskV1RawHashes[];

  /**
   * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "riceHashes" })
  @Type(() => GoogleCloudWebriskV1RiceDeltaEncoding)
  riceHashes?: GoogleCloudWebriskV1RiceDeltaEncoding;
}
