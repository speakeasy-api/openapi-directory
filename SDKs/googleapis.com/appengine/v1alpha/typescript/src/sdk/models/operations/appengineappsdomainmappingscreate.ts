/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class AppengineAppsDomainMappingsCreateSecurity extends SpeakeasyBase {
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
 * Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
 */
export enum AppengineAppsDomainMappingsCreateOverrideStrategyEnum {
  UnspecifiedDomainOverrideStrategy = "UNSPECIFIED_DOMAIN_OVERRIDE_STRATEGY",
  Strict = "STRICT",
  Override = "OVERRIDE",
}

export class AppengineAppsDomainMappingsCreateRequest extends SpeakeasyBase {
  /**
   * V1 error format.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=$.xgafv",
  })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  domainMapping?: shared.DomainMapping;

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
   * Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=appsId",
  })
  appsId: string;

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
   * Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=noManagedCertificate",
  })
  noManagedCertificate?: boolean;

  /**
   * OAuth 2.0 token for the current user.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=oauth_token",
  })
  oauthToken?: string;

  /**
   * Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=overrideStrategy",
  })
  overrideStrategy?: AppengineAppsDomainMappingsCreateOverrideStrategyEnum;

  /**
   * Returns response with indentations and line breaks.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=prettyPrint",
  })
  prettyPrint?: boolean;

  /**
   * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=quotaUser",
  })
  quotaUser?: string;

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

export class AppengineAppsDomainMappingsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Successful response
   */
  @SpeakeasyMetadata()
  operation?: shared.Operation;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
