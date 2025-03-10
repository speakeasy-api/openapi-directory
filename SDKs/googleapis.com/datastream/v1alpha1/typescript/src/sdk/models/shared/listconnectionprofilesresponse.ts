/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectionProfile } from "./connectionprofile";
import { Expose, Type } from "class-transformer";

/**
 * Successful response
 */
export class ListConnectionProfilesResponse extends SpeakeasyBase {
  /**
   * List of connection profiles.
   */
  @SpeakeasyMetadata({ elemType: ConnectionProfile })
  @Expose({ name: "connectionProfiles" })
  @Type(() => ConnectionProfile)
  connectionProfiles?: ConnectionProfile[];

  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPageToken" })
  nextPageToken?: string;

  /**
   * Locations that could not be reached.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unreachable" })
  unreachable?: string[];
}
