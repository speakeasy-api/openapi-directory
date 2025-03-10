/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=aclId",
  })
  aclId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=organizationId",
  })
  organizationId: string;
}

export class GetOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Successful operation
   */
  @SpeakeasyMetadata()
  getOrganizationAdaptivePolicyAcl200ApplicationJSONObject?: Record<
    string,
    any
  >;
}
