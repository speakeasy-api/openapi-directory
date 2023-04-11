import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The sorting order (case insensitive).
 */
export declare enum GetGroupsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetGroupsRequest extends SpeakeasyBase {
    /**
     * The sorting order (case insensitive).
     */
    direction?: GetGroupsDirectionEnum;
    /**
     * The maximum number of entries per page.
     */
    limit?: number;
    /**
     * The page number to retrieve (first page is 0).
     */
    page?: string;
    /**
     * The column to sort by (case insensitive).
     */
    sort?: string;
}
export declare class GetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
