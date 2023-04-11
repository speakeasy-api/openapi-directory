import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The permission to grant to the team for this project. Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#http-verbs)."
 */
export declare enum TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
export declare class TeamsAddOrUpdateProjectPermissionsInOrgRequestBody extends SpeakeasyBase {
    /**
     * The permission to grant to the team for this project. Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#http-verbs)."
     */
    permission?: TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum;
}
export declare class TeamsAddOrUpdateProjectPermissionsInOrgRequest extends SpeakeasyBase {
    requestBody?: TeamsAddOrUpdateProjectPermissionsInOrgRequestBody;
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
/**
 * Forbidden if the project is not owned by the organization
 */
export declare class TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSON extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class TeamsAddOrUpdateProjectPermissionsInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden if the project is not owned by the organization
     */
    teamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSONObject?: TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSON;
}
