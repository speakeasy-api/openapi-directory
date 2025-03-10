/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Specify a time range to render, i.e. to render only a portion of a video or audio file. Omit this setting to  export the entire video. Range can also be used to render a frame at a specific time point - setting a range and output format as `jpg` will output a single frame image at the range `start` point.
 */
export class Range extends SpeakeasyBase {
  /**
   * The length of the portion of the video or audio to render - i.e. render 6 seconds of the video.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "length" })
  length?: number;

  /**
   * The point on the timeline, in seconds, to start the render from - i.e. start at second 3.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start" })
  start?: number;
}
