/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class AdsenseAccountsAdunitsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class AdsenseAccountsAdunitsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class AdsenseAccountsAdunitsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: AdsenseAccountsAdunitsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: AdsenseAccountsAdunitsListSecurityOption2;
}

export class AdsenseAccountsAdunitsListRequest extends SpeakeasyBase {
  /**
   * Account to which the ad client belongs.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=accountId",
  })
  accountId: string;

  /**
   * Ad client for which to list ad units.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=adClientId",
  })
  adClientId: string;

  /**
   * Data format for the response.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  /**
   * Selector specifying which fields to include in a partial response.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=fields",
  })
  fields?: string;

  /**
   * Whether to include inactive ad units. Default: true.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=includeInactive",
  })
  includeInactive?: boolean;

  /**
   * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  /**
   * The maximum number of ad units to include in the response, used for paging.
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
   * A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
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
   * Deprecated. Please use quotaUser instead.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=userIp",
  })
  userIp?: string;
}

export class AdsenseAccountsAdunitsListResponse extends SpeakeasyBase {
  /**
   * Successful response
   */
  @SpeakeasyMetadata()
  adUnits?: shared.AdUnits;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
