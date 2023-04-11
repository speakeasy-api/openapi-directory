import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUsersUserTypeEnum {
    Vendor = "vendor",
    All = "all"
}
export declare class GetUsersRequest extends SpeakeasyBase {
    email?: string;
    page?: number;
    perPage?: number;
    search?: string;
    userType?: GetUsersUserTypeEnum;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User list
     */
    userList?: shared.UserList;
}
