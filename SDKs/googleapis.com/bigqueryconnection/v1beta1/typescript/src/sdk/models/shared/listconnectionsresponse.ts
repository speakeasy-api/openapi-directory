/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connection } from "./connection";
import { Expose, Type } from "class-transformer";

/**
 * The response for ConnectionService.ListConnections.
 */
export class ListConnectionsResponse extends SpeakeasyBase {
  /**
   * List of connections.
   */
  @SpeakeasyMetadata({ elemType: Connection })
  @Expose({ name: "connections" })
  @Type(() => Connection)
  connections?: Connection[];

  /**
   * Next page token.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPageToken" })
  nextPageToken?: string;
}
