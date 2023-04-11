import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsRemoveMembershipForUserInOrgRequest extends SpeakeasyBase {
    org: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
    username: string;
}
export declare class TeamsRemoveMembershipForUserInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
