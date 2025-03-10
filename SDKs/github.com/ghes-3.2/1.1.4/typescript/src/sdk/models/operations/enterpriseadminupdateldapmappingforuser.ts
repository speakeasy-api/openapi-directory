/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class EnterpriseAdminUpdateLdapMappingForUserRequestBody extends SpeakeasyBase {
  /**
   * The [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ldap_dn" })
  ldapDn: string;
}

export class EnterpriseAdminUpdateLdapMappingForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: EnterpriseAdminUpdateLdapMappingForUserRequestBody;

  /**
   * The handle for the GitHub user account.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=username",
  })
  username: string;
}

export class EnterpriseAdminUpdateLdapMappingForUserResponse extends SpeakeasyBase {
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
  ldapMappingUser?: shared.LdapMappingUser;
}
