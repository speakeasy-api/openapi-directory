import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostProfileChangePasswordRequestBody extends SpeakeasyBase {
    confpassword: Record<string, any>;
    currentPassword: Record<string, any>;
    password: Record<string, any>;
}
export declare class PostProfileChangePassword200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostProfileChangePassword400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostProfileChangePassword401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostProfileChangePasswordRequest extends SpeakeasyBase {
    request: PostProfileChangePasswordRequestBody;
}
export declare class PostProfileChangePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postProfileChangePassword200ApplicationJSONObject?: PostProfileChangePassword200ApplicationJson;
    postProfileChangePassword400ApplicationJSONObject?: PostProfileChangePassword400ApplicationJson;
    postProfileChangePassword401ApplicationJSONObject?: PostProfileChangePassword401ApplicationJson;
}
