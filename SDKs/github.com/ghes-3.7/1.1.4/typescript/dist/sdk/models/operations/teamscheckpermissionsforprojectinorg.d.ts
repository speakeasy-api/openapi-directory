import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCheckPermissionsForProjectInOrgRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the project.
     */
    projectId: number;
    /**
     * The slug of the team name.
     */
    teamSlug: string;
}
export declare class TeamsCheckPermissionsForProjectInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamProject?: shared.TeamProject;
}
