import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContactListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the group for which you would like to view contacts
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
}
export declare class GetContactListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns all matching Contacts
     */
    paginatedContactResult?: shared.PaginatedContactResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
