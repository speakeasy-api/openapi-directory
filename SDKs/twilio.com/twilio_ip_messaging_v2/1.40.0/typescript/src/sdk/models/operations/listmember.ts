/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";
export const ListMemberServerList = [
  "https://ip-messaging.twilio.com",
] as const;

export class ListMemberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=password",
  })
  password: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=username",
  })
  username: string;
}

export class ListMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ChannelSid",
  })
  channelSid: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Identity",
  })
  identity?: string[];

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

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ServiceSid",
  })
  serviceSid: string;
}

export class ListMemberListMemberResponseMeta extends SpeakeasyBase {
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
export class ListMemberListMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.IpMessagingV2ServiceChannelMember })
  @Expose({ name: "members" })
  @Type(() => shared.IpMessagingV2ServiceChannelMember)
  members?: shared.IpMessagingV2ServiceChannelMember[];

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  @Type(() => ListMemberListMemberResponseMeta)
  meta?: ListMemberListMemberResponseMeta;
}

export class ListMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  listMemberResponse?: ListMemberListMemberResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
