import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BulkCreateTeamMembersSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class BulkCreateTeamMembersResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bulkCreateTeamMembersResponse?: shared.BulkCreateTeamMembersResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
