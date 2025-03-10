/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Person } from "./person";
import { Expose, Type } from "class-transformer";

/**
 * The response to a request for the authenticated user's domain directory.
 */
export class ListDirectoryPeopleResponse extends SpeakeasyBase {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPageToken" })
  nextPageToken?: string;

  /**
   * A token, which can be sent as `sync_token` to retrieve changes since the last request. Request must set `request_sync_token` to return the sync token.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextSyncToken" })
  nextSyncToken?: string;

  /**
   * The list of people in the domain directory.
   */
  @SpeakeasyMetadata({ elemType: Person })
  @Expose({ name: "people" })
  @Type(() => Person)
  people?: Person[];
}
