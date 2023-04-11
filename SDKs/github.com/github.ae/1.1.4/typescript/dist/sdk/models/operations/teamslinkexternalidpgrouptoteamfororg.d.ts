import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsLinkExternalIdpGroupToTeamForOrgRequestBody extends SpeakeasyBase {
    /**
     * External Group Id
     */
    groupId: number;
}
export declare class TeamsLinkExternalIdpGroupToTeamForOrgRequest extends SpeakeasyBase {
    requestBody: TeamsLinkExternalIdpGroupToTeamForOrgRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The slug of the team name.
     */
    teamSlug: string;
}
export declare class TeamsLinkExternalIdpGroupToTeamForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    externalGroup?: shared.ExternalGroup;
}
