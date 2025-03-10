/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Response
 */
export class EnterpriseOrganizationOverview extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "disabled_orgs" })
  disabledOrgs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_orgs" })
  totalOrgs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_team_members" })
  totalTeamMembers: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_teams" })
  totalTeams: number;
}
