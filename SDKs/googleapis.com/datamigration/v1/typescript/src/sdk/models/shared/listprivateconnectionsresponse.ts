/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PrivateConnection } from "./privateconnection";
import { Expose, Type } from "class-transformer";

/**
 * Response message for 'ListPrivateConnections' request.
 */
export class ListPrivateConnectionsResponse extends SpeakeasyBase {
  /**
   * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPageToken" })
  nextPageToken?: string;

  /**
   * List of private connections.
   */
  @SpeakeasyMetadata({ elemType: PrivateConnection })
  @Expose({ name: "privateConnections" })
  @Type(() => PrivateConnection)
  privateConnections?: PrivateConnection[];

  /**
   * Locations that could not be reached.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unreachable" })
  unreachable?: string[];
}
