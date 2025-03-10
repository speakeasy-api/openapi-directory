/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class EnterpriseAdminSyncLdapMappingForTeamRequest extends SpeakeasyBase {
  /**
   * The unique identifier of the team.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=team_id",
  })
  teamId: number;
}

/**
 * Response
 */
export class EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}

export class EnterpriseAdminSyncLdapMappingForTeamResponse extends SpeakeasyBase {
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
  enterpriseAdminSyncLdapMappingForTeam201ApplicationJSONObject?: EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON;
}
