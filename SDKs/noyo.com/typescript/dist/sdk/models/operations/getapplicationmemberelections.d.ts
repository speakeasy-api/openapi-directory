import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApplicationMemberElectionsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the application in Noyo
     */
    applicationId: string;
    /**
     * The integer offset at which to start the page. Possible values are 0 to total_records - 1
     */
    offset?: number;
    /**
     * The max size of each page of results
     */
    pageSize?: number;
}
export declare class GetApplicationMemberElectionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns all matching Member Elections
     */
    paginatedMemberElectionResult?: shared.PaginatedMemberElectionResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
