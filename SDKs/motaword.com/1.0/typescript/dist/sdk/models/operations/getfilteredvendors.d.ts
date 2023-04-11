import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFilteredVendorsRequest extends SpeakeasyBase {
    filterVendorRequest?: shared.FilterVendorRequest;
    /**
     * The order to sort the results by (ascending or descending)
     */
    order?: string;
    /**
     * The field to order the results by
     */
    orderBy?: string;
    /**
     * The page number
     */
    page?: number;
    /**
     * The number of items per page
     */
    perPage?: number;
}
export declare class GetFilteredVendorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response User List
     */
    userList?: shared.UserList;
}
