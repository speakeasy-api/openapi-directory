import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveTeamMemberBookingProfileSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveTeamMemberBookingProfileRequest extends SpeakeasyBase {
    /**
     * The ID of the team member to retrieve.
     */
    teamMemberId: string;
}
export declare class RetrieveTeamMemberBookingProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveTeamMemberBookingProfileResponse?: shared.RetrieveTeamMemberBookingProfileResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
