/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ComputeFirewallPoliciesCloneRulesSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class ComputeFirewallPoliciesCloneRulesSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2c: string;
}

export class ComputeFirewallPoliciesCloneRulesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: ComputeFirewallPoliciesCloneRulesSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: ComputeFirewallPoliciesCloneRulesSecurityOption2;
}

export class ComputeFirewallPoliciesCloneRulesRequest extends SpeakeasyBase {
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
   * Name of the firewall policy to update.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=firewallPolicy",
  })
  firewallPolicy: string;

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
   * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=quotaUser",
  })
  quotaUser?: string;

  /**
   * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported ( 00000000-0000-0000-0000-000000000000).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=requestId",
  })
  requestId?: string;

  /**
   * The firewall policy from which to copy rules.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=sourceFirewallPolicy",
  })
  sourceFirewallPolicy?: string;

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

  /**
   * Legacy name for parameter that has been superseded by `quotaUser`.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=userIp",
  })
  userIp?: string;
}

export class ComputeFirewallPoliciesCloneRulesResponse extends SpeakeasyBase {
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
