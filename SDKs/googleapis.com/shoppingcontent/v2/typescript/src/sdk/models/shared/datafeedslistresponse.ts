/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Datafeed } from "./datafeed";
import { Expose, Type } from "class-transformer";

/**
 * Successful response
 */
export class DatafeedsListResponse extends SpeakeasyBase {
  /**
   * Identifies what kind of resource this is. Value: the fixed string "content#datafeedsListResponse".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  /**
   * The token for the retrieval of the next page of datafeeds.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ elemType: Datafeed })
  @Expose({ name: "resources" })
  @Type(() => Datafeed)
  resources?: Datafeed[];
}
