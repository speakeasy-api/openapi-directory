import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveTeamMemberSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveTeamMemberRequest extends SpeakeasyBase {
    /**
     * The ID of the team member to retrieve.
     */
    teamMemberId: string;
}
export declare class RetrieveTeamMemberResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveTeamMemberResponse?: shared.RetrieveTeamMemberResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
