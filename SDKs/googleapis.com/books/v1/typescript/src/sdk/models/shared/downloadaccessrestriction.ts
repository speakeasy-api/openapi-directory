/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DownloadAccessRestriction extends SpeakeasyBase {
  /**
   * If restricted, whether access is granted for this (user, device, volume).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "deviceAllowed" })
  deviceAllowed?: boolean;

  /**
   * If restricted, the number of content download licenses already acquired (including the requesting client, if licensed).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "downloadsAcquired" })
  downloadsAcquired?: number;

  /**
   * If deviceAllowed, whether access was just acquired with this request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "justAcquired" })
  justAcquired?: boolean;

  /**
   * Resource type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  /**
   * If restricted, the maximum number of content download licenses for this volume.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "maxDownloadDevices" })
  maxDownloadDevices?: number;

  /**
   * Error/warning message.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  /**
   * Client nonce for verification. Download access and client-validation only.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nonce" })
  nonce?: string;

  /**
   * Error/warning reason code. Additional codes may be added in the future. 0 OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reasonCode" })
  reasonCode?: string;

  /**
   * Whether this volume has any download access restrictions.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "restricted" })
  restricted?: boolean;

  /**
   * Response signature.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "signature" })
  signature?: string;

  /**
   * Client app identifier for verification. Download access and client-validation only.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source?: string;

  /**
   * Identifies the volume for which this entry applies.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "volumeId" })
  volumeId?: string;
}
