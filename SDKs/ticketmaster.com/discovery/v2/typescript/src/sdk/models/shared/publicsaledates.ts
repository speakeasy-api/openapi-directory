/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * Event's Public Onsales Dates
 */
export class PublicSaleDates extends SpeakeasyBase {
  /**
   * Public sale's end dates. The date and time when the public sale will end
   */
  @SpeakeasyMetadata()
  endDateTime?: Date;

  /**
   * Public sale's start dates. The date and time when the public sale will start
   */
  @SpeakeasyMetadata()
  startDateTime?: Date;

  /**
   * True if the public sale's date is to be determined
   */
  @SpeakeasyMetadata()
  startTBD?: boolean;
}
