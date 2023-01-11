import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchUsersIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchUsersIdRequestBodyInput extends SpeakeasyBase {
    email: string;
    name: string;
    title?: shared.UserTitleEnum;
}
export declare class PatchUsersId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchUsersId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchUsersId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchUsersId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchUsersIdRequest extends SpeakeasyBase {
    pathParams: PatchUsersIdPathParams;
    request: PatchUsersIdRequestBodyInput;
}
export declare class PatchUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
    patchUsersId400ApplicationJSONObject?: PatchUsersId400ApplicationJson;
    patchUsersId401ApplicationJSONObject?: PatchUsersId401ApplicationJson;
    patchUsersId403ApplicationJSONObject?: PatchUsersId403ApplicationJson;
    patchUsersId404ApplicationJSONObject?: PatchUsersId404ApplicationJson;
}
