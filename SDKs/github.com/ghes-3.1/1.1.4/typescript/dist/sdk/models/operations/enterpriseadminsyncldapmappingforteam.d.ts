import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminSyncLdapMappingForTeamRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the team.
     */
    teamId: number;
}
/**
 * Response
 */
export declare class EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON extends SpeakeasyBase {
    status?: string;
}
export declare class EnterpriseAdminSyncLdapMappingForTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    enterpriseAdminSyncLdapMappingForTeam201ApplicationJSONObject?: EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON;
}
