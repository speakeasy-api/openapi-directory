/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Album metadata
 */
export class Album extends SpeakeasyBase {
  /**
   * The album ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The album title
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}
