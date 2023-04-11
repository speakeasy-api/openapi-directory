import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTeamMemberSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateTeamMemberResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createTeamMemberResponse?: shared.CreateTeamMemberResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
