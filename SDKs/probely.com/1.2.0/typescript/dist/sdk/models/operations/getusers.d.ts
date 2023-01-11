import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersQueryParams extends SpeakeasyBase {
    length?: number;
    ordering?: string;
    page?: number;
    search?: string;
}
export declare class GetUsers200ApplicationJson extends SpeakeasyBase {
    count?: number;
    length?: number;
    page?: number;
    pageTotal?: number;
    results?: shared.User[];
}
export declare class GetUsers401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetUsersRequest extends SpeakeasyBase {
    queryParams: GetUsersQueryParams;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getUsers200ApplicationJSONObject?: GetUsers200ApplicationJson;
    getUsers401ApplicationJSONObject?: GetUsers401ApplicationJson;
}
