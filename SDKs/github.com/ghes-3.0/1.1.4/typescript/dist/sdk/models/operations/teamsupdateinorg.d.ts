import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:
 *
 * @remarks
 * \* `pull` - team members can pull, but not push to or administer newly-added repositories.
 * \* `push` - team members can pull and push, but not administer newly-added repositories.
 * \* `admin` - team members can pull, push and administer newly-added repositories.
 */
export declare enum TeamsUpdateInOrgRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}
/**
 * The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. When a team is nested, the `privacy` for parent teams cannot be `secret`. The options are:
 *
 * @remarks
 * **For a non-nested team:**
 * \* `secret` - only visible to organization owners and members of this team.
 * \* `closed` - visible to all members of this organization.
 * **For a parent or child team:**
 * \* `closed` - visible to all members of this organization.
 */
export declare enum TeamsUpdateInOrgRequestBodyPrivacyEnum {
    Secret = "secret",
    Closed = "closed"
}
export declare class TeamsUpdateInOrgRequestBody extends SpeakeasyBase {
    /**
     * The description of the team.
     */
    description?: string;
    /**
     * The name of the team.
     */
    name?: string;
    /**
     * The ID of a team to set as the parent team.
     */
    parentTeamId?: number;
    /**
     * **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:
     *
     * @remarks
     * \* `pull` - team members can pull, but not push to or administer newly-added repositories.
     * \* `push` - team members can pull and push, but not administer newly-added repositories.
     * \* `admin` - team members can pull, push and administer newly-added repositories.
     */
    permission?: TeamsUpdateInOrgRequestBodyPermissionEnum;
    /**
     * The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. When a team is nested, the `privacy` for parent teams cannot be `secret`. The options are:
     *
     * @remarks
     * **For a non-nested team:**
     * \* `secret` - only visible to organization owners and members of this team.
     * \* `closed` - visible to all members of this organization.
     * **For a parent or child team:**
     * \* `closed` - visible to all members of this organization.
     */
    privacy?: TeamsUpdateInOrgRequestBodyPrivacyEnum;
}
export declare class TeamsUpdateInOrgRequest extends SpeakeasyBase {
    requestBody?: TeamsUpdateInOrgRequestBody;
    org: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsUpdateInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamFull?: shared.TeamFull;
}
