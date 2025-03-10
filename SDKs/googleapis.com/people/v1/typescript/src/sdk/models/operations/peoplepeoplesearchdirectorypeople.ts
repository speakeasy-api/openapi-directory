/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PeoplePeopleSearchDirectoryPeopleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export enum PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum {
  DirectoryMergeSourceTypeUnspecified = "DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED",
  DirectoryMergeSourceTypeContact = "DIRECTORY_MERGE_SOURCE_TYPE_CONTACT",
}

export enum PeoplePeopleSearchDirectoryPeopleSourcesEnum {
  DirectorySourceTypeUnspecified = "DIRECTORY_SOURCE_TYPE_UNSPECIFIED",
  DirectorySourceTypeDomainContact = "DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT",
  DirectorySourceTypeDomainProfile = "DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE",
}

export class PeoplePeopleSearchDirectoryPeopleRequest extends SpeakeasyBase {
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
   * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  /**
   * Optional. Additional data to merge into the directory sources if they are connected through verified join keys such as email addresses or phone numbers.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=mergeSources",
  })
  mergeSources?: PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum[];

  /**
   * OAuth 2.0 token for the current user.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=oauth_token",
  })
  oauthToken?: string;

  /**
   * Optional. The number of people to include in the response. Valid values are between 1 and 500, inclusive. Defaults to 100 if not set or set to 0.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageSize",
  })
  pageSize?: number;

  /**
   * Optional. A page token, received from a previous response `next_page_token`. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchDirectoryPeople` must match the first call that provided the page token.
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
   * Required. Prefix query that matches fields in the person. Does NOT use the read_mask for determining what fields to match.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  /**
   * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=quotaUser",
  })
  quotaUser?: string;

  /**
   * Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=readMask",
  })
  readMask?: string;

  /**
   * Required. Directory sources to return.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=sources",
  })
  sources?: PeoplePeopleSearchDirectoryPeopleSourcesEnum[];

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

export class PeoplePeopleSearchDirectoryPeopleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Successful response
   */
  @SpeakeasyMetadata()
  searchDirectoryPeopleResponse?: shared.SearchDirectoryPeopleResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
