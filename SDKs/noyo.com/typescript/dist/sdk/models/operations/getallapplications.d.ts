import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllApplicationsRequest extends SpeakeasyBase {
    /**
     * The application type used to filter results
     */
    applicationType?: string;
    /**
     * The associated carrier ID used to filter results
     */
    carrierId?: string;
    /**
     * The associated group ID used to filter results
     */
    groupId?: string;
    /**
     * The integer offset at which to start the page. Possible values are 0 to total_records - 1
     */
    offset?: number;
    /**
     * The max size of each page of results
     */
    pageSize?: number;
    /**
     * The application status used to filter results
     */
    status?: string;
}
export declare class GetAllApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns all matching Applications
     */
    paginatedGroupApplicationResult?: shared.PaginatedGroupApplicationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
