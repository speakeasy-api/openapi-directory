/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeploymentmanagerTypeProvidersGetTypeSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class DeploymentmanagerTypeProvidersGetTypeSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class DeploymentmanagerTypeProvidersGetTypeSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class DeploymentmanagerTypeProvidersGetTypeSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class DeploymentmanagerTypeProvidersGetTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DeploymentmanagerTypeProvidersGetTypeSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DeploymentmanagerTypeProvidersGetTypeSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: DeploymentmanagerTypeProvidersGetTypeSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: DeploymentmanagerTypeProvidersGetTypeSecurityOption4;
}

export class DeploymentmanagerTypeProvidersGetTypeRequest extends SpeakeasyBase {
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
   * The project ID for this request.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;

  /**
   * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=quotaUser",
  })
  quotaUser?: string;

  /**
   * The name of the type provider type for this request.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=type",
  })
  type: string;

  /**
   * The name of the type provider for this request.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=typeProvider",
  })
  typeProvider: string;

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

export class DeploymentmanagerTypeProvidersGetTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Successful response
   */
  @SpeakeasyMetadata()
  typeInfo?: shared.TypeInfo;
}
