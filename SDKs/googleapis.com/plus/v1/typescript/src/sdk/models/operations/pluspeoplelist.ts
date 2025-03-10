/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PlusPeopleListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class PlusPeopleListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class PlusPeopleListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: PlusPeopleListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: PlusPeopleListSecurityOption2;
}

/**
 * The collection of people to list.
 */
export enum PlusPeopleListCollectionEnum {
  Connected = "connected",
  Visible = "visible",
}

/**
 * The order to return people in.
 */
export enum PlusPeopleListOrderByEnum {
  Alphabetical = "alphabetical",
  Best = "best",
}

export class PlusPeopleListRequest extends SpeakeasyBase {
  /**
   * Data format for the response.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  /**
   * The collection of people to list.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=collection",
  })
  collection: PlusPeopleListCollectionEnum;

  /**
   * Selector specifying which fields to include in a partial response.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=fields",
  })
  fields?: string;

  /**
   * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  /**
   * The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=maxResults",
  })
  maxResults?: number;

  /**
   * OAuth 2.0 token for the current user.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=oauth_token",
  })
  oauthToken?: string;

  /**
   * The order to return people in.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=orderBy",
  })
  orderBy?: PlusPeopleListOrderByEnum;

  /**
   * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageToken",
  })
  pageToken?: string;

  /**
   * Returns response with indentations and line breaks.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=prettyPrint",
  })
  prettyPrint?: boolean;

  /**
   * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=quotaUser",
  })
  quotaUser?: string;

  /**
   * Get the collection of people for the person identified. Use "me" to indicate the authenticated user.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=userId",
  })
  userId: string;

  /**
   * Deprecated. Please use quotaUser instead.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=userIp",
  })
  userIp?: string;
}

export class PlusPeopleListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Successful response
   */
  @SpeakeasyMetadata()
  peopleFeed?: shared.PeopleFeed;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
