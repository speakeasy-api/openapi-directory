import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchTeamMembersSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SearchTeamMembersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchTeamMembersResponse?: shared.SearchTeamMembersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
