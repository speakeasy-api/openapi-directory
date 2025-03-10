/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class EnterpriseAdminCreateOrgRequestBody extends SpeakeasyBase {
  /**
   * The login of the user who will manage this organization.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "admin" })
  admin: string;

  /**
   * The organization's username.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "login" })
  login: string;

  /**
   * The organization's display name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "profile_name" })
  profileName?: string;
}

export class EnterpriseAdminCreateOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  organizationSimple?: shared.OrganizationSimple;
}
