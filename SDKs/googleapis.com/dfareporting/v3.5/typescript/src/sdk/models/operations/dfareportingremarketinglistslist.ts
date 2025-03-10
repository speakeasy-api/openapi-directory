/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DfareportingRemarketingListsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

/**
 * Field by which to sort the list.
 */
export enum DfareportingRemarketingListsListSortFieldEnum {
  Id = "ID",
  Name = "NAME",
}

/**
 * Order of sorted results.
 */
export enum DfareportingRemarketingListsListSortOrderEnum {
  Ascending = "ASCENDING",
  Descending = "DESCENDING",
}

export class DfareportingRemarketingListsListRequest extends SpeakeasyBase {
  /**
   * V1 error format.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=$.xgafv",
  })
  dollarXgafv?: shared.XgafvEnum;

  /**
   * OAuth access token.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=access_token",
  })
  accessToken?: string;

  /**
   * Select only active or only inactive remarketing lists.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=active",
  })
  active?: boolean;

  /**
   * Select only remarketing lists owned by this advertiser.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=advertiserId",
  })
  advertiserId: string;

  /**
   * Data format for response.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  /**
   * JSONP
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=callback",
  })
  callback?: string;

  /**
   * Selector specifying which fields to include in a partial response.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=fields",
  })
  fields?: string;

  /**
   * Select only remarketing lists that have this floodlight activity ID.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=floodlightActivityId",
  })
  floodlightActivityId?: string;

  /**
   * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  /**
   * Maximum number of results to return.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=maxResults",
  })
  maxResults?: number;

  /**
   * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  /**
   * OAuth 2.0 token for the current user.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=oauth_token",
  })
  oauthToken?: string;

  /**
   * Value of the nextPageToken from the previous result page.
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
   * User profile ID associated with this request.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=profileId",
  })
  profileId: string;

  /**
   * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=quotaUser",
  })
  quotaUser?: string;

  /**
   * Field by which to sort the list.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=sortField",
  })
  sortField?: DfareportingRemarketingListsListSortFieldEnum;

  /**
   * Order of sorted results.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=sortOrder",
  })
  sortOrder?: DfareportingRemarketingListsListSortOrderEnum;

  /**
   * Legacy upload protocol for media (e.g. "media", "multipart").
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=uploadType",
  })
  uploadType?: string;

  /**
   * Upload protocol for media (e.g. "raw", "multipart").
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=upload_protocol",
  })
  uploadProtocol?: string;
}

export class DfareportingRemarketingListsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Successful response
   */
  @SpeakeasyMetadata()
  remarketingListsListResponse?: shared.RemarketingListsListResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
