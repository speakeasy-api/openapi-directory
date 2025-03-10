/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CalendarSettingsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class CalendarSettingsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class CalendarSettingsListSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class CalendarSettingsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CalendarSettingsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CalendarSettingsListSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: CalendarSettingsListSecurityOption3;
}

export class CalendarSettingsListRequest extends SpeakeasyBase {
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
   * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  /**
   * Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
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
   * Token specifying which result page to return. Optional.
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
   * Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
   *
   * @remarks
   * If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
   * Learn more about incremental synchronization.
   * Optional. The default is to return all entries.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=syncToken",
  })
  syncToken?: string;

  /**
   * Deprecated. Please use quotaUser instead.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=userIp",
  })
  userIp?: string;
}

export class CalendarSettingsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Successful response
   */
  @SpeakeasyMetadata()
  settings?: shared.Settings;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
