import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUsersIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutUsersIdRequestBodyInput extends SpeakeasyBase {
    email: string;
    name: string;
    title?: shared.UserTitleEnum;
}
export declare class PutUsersId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutUsersId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutUsersId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutUsersId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutUsersIdRequest extends SpeakeasyBase {
    pathParams: PutUsersIdPathParams;
    request: PutUsersIdRequestBodyInput;
}
export declare class PutUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
    putUsersId400ApplicationJSONObject?: PutUsersId400ApplicationJson;
    putUsersId401ApplicationJSONObject?: PutUsersId401ApplicationJson;
    putUsersId403ApplicationJSONObject?: PutUsersId403ApplicationJson;
    putUsersId404ApplicationJSONObject?: PutUsersId404ApplicationJson;
}
