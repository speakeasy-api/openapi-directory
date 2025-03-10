/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";
export const ListRoomServerList = ["https://video.twilio.com"] as const;

export class ListRoomSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=password",
  })
  password: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=username",
  })
  username: string;
}

export class ListRoomRequest extends SpeakeasyBase {
  /**
   * Read only rooms that started on or after this date, given as `YYYY-MM-DD`.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=DateCreatedAfter;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  dateCreatedAfter?: Date;

  /**
   * Read only rooms that started before this date, given as `YYYY-MM-DD`.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=DateCreatedBefore;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  dateCreatedBefore?: Date;

  /**
   * The page index. This value is simply for client state.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Page" })
  page?: number;

  /**
   * How many resources to return in each list page. The default is 50, and the maximum is 1000.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=PageSize",
  })
  pageSize?: number;

  /**
   * The page token. This is provided by the API.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=PageToken",
  })
  pageToken?: string;

  /**
   * Read only the rooms with this status. Can be: `in-progress` (default) or `completed`
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Status",
  })
  status?: shared.RoomEnumRoomStatusEnum;

  /**
   * Read only rooms with the this `unique_name`.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=UniqueName",
  })
  uniqueName?: string;
}

export class ListRoomListRoomResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "page" })
  page?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "page_size" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}

/**
 * OK
 */
export class ListRoomListRoomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  @Type(() => ListRoomListRoomResponseMeta)
  meta?: ListRoomListRoomResponseMeta;

  @SpeakeasyMetadata({ elemType: shared.VideoV1Room })
  @Expose({ name: "rooms" })
  @Type(() => shared.VideoV1Room)
  rooms?: shared.VideoV1Room[];
}

export class ListRoomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  listRoomResponse?: ListRoomListRoomResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
