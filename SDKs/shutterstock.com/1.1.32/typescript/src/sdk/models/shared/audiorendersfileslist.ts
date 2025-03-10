/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Files associated with the render
 */
export class AudioRendersFilesList extends SpeakeasyBase {
  /**
   * The bit depth of the audio files in bits/sample
   */
  @SpeakeasyMetadata()
  @Expose({ name: "bits_sample" })
  bitsSample: number;

  /**
   * The content-type of the file
   */
  @SpeakeasyMetadata()
  @Expose({ name: "content_type" })
  contentType: string;

  /**
   * The internet-accessible URL from which the file can be downloaded. Any redirects encountered when using this URL must be followed
   */
  @SpeakeasyMetadata()
  @Expose({ name: "download_url" })
  downloadUrl: string;

  /**
   * The user-specified file name suggestion from the render request; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file
   */
  @SpeakeasyMetadata()
  @Expose({ name: "filename" })
  filename: string;

  /**
   * The Sample rate of the audio files in Hertz (Hz)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "frequency_hz" })
  frequencyHz: number;

  /**
   * The data rate of the audio files in kilobits/second
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kbits_second" })
  kbitsSecond: number;

  /**
   * Size of the file in bytes
   */
  @SpeakeasyMetadata()
  @Expose({ name: "size_bytes" })
  sizeBytes: number;

  /**
   * An array of track names included in the file
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tracks" })
  tracks: string[];
}
