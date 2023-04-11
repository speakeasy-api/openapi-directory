import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCoveragePlanMemberElectionsRequest extends SpeakeasyBase {
    /**
     * The integer offset at which to start the page. Possible values are 0 to total_records - 1
     */
    offset?: number;
    /**
     * The max size of each page of results
     */
    pageSize?: number;
    /**
     * The unique identifier of the coverage plan in Noyo
     */
    planId: string;
}
export declare class GetCoveragePlanMemberElectionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns all matching Member Elections
     */
    paginatedMemberElectionResult?: shared.PaginatedMemberElectionResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
