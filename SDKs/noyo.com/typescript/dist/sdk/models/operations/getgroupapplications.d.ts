import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupApplicationsRequest extends SpeakeasyBase {
    /**
     * The application type used to filter results
     */
    applicationType?: string;
    /**
     * The associated carrier group ID used to filter results
     */
    carrierGroupId?: string;
    /**
     * The associated carrier ID used to filter results
     */
    carrierId?: string;
    /**
     * The unique identifier of the group in Noyo
     */
    groupId: string;
    /**
     * The integer offset at which to start the page. Possible values are 0 to total_records - 1
     */
    offset?: number;
    /**
     * The max size of each page of results
     */
    pageSize?: number;
    /**
     * The attribute on which to sort the group applications
     */
    sortBy?: string;
    /**
     * Either asc or desc, to denote the data's direction
     */
    sortDirection?: string;
    /**
     * The application status used to filter results
     */
    status?: string;
}
export declare class GetGroupApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns all matching Group Applications
     */
    paginatedGroupApplicationResult?: shared.PaginatedGroupApplicationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
