import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostResetRequestBody extends SpeakeasyBase {
    email: string;
}
export declare class PostReset200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostReset400ApplicationJson extends SpeakeasyBase {
    error?: string;
}
export declare class PostResetRequest extends SpeakeasyBase {
    request: PostResetRequestBody;
}
export declare class PostResetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postReset200ApplicationJSONObject?: PostReset200ApplicationJson;
    postReset400ApplicationJSONObject?: PostReset400ApplicationJson;
}
