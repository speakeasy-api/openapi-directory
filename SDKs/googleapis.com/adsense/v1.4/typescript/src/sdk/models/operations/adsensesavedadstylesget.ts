/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class AdsenseSavedadstylesGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class AdsenseSavedadstylesGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class AdsenseSavedadstylesGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: AdsenseSavedadstylesGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: AdsenseSavedadstylesGetSecurityOption2;
}

export class AdsenseSavedadstylesGetRequest extends SpeakeasyBase {
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
   * OAuth 2.0 token for the current user.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=oauth_token",
  })
  oauthToken?: string;

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
   * Saved ad style to retrieve.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=savedAdStyleId",
  })
  savedAdStyleId: string;

  /**
   * Deprecated. Please use quotaUser instead.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=userIp",
  })
  userIp?: string;
}

export class AdsenseSavedadstylesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Successful response
   */
  @SpeakeasyMetadata()
  savedAdStyle?: shared.SavedAdStyle;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
