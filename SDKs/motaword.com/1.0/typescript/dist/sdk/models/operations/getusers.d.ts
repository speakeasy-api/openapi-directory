import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUsersUserTypeEnum {
    Vendor = "vendor",
    All = "all"
}
export declare class GetUsersQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    search?: string;
    userType?: GetUsersUserTypeEnum;
}
export declare class GetUsersRequest extends SpeakeasyBase {
    queryParams: GetUsersQueryParams;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userList?: shared.UserList;
}
