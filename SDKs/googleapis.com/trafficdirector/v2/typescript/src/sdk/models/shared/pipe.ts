/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Pipe extends SpeakeasyBase {
  /**
   * The mode for the Pipe. Not applicable for abstract sockets.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "mode" })
  mode?: number;

  /**
   * Unix Domain Socket path. On Linux, paths starting with '@' will use the abstract namespace. The starting '@' is replaced by a null byte by Envoy. Paths starting with '@' will result in an error in environments other than Linux.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path?: string;
}
