import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetUsersId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetUsersId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetUsersIdRequest extends SpeakeasyBase {
    pathParams: GetUsersIdPathParams;
}
export declare class GetUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
    getUsersId401ApplicationJSONObject?: GetUsersId401ApplicationJson;
    getUsersId404ApplicationJSONObject?: GetUsersId404ApplicationJson;
}
