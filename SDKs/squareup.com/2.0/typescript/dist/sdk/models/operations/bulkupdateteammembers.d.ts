import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BulkUpdateTeamMembersSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class BulkUpdateTeamMembersResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bulkUpdateTeamMembersResponse?: shared.BulkUpdateTeamMembersResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
