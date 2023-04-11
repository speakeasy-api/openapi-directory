import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListTeamMemberWagesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListTeamMemberWagesRequest extends SpeakeasyBase {
    /**
     * A pointer to the next page of `EmployeeWage` results to fetch.
     */
    cursor?: string;
    /**
     * The maximum number of `TeamMemberWage` results to return per page. The number can range between
     *
     * @remarks
     * 1 and 200. The default is 200.
     */
    limit?: number;
    /**
     * Filter the returned wages to only those that are associated with the
     *
     * @remarks
     * specified team member.
     */
    teamMemberId?: string;
}
export declare class ListTeamMemberWagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTeamMemberWagesResponse?: shared.ListTeamMemberWagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
