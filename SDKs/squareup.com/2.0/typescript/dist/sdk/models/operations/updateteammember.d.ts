import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTeamMemberSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateTeamMemberRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    updateTeamMemberRequest: shared.UpdateTeamMemberRequest;
    /**
     * The ID of the team member to update.
     */
    teamMemberId: string;
}
export declare class UpdateTeamMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateTeamMemberResponse?: shared.UpdateTeamMemberResponse;
}
