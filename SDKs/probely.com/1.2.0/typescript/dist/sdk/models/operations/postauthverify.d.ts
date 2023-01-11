import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAuthVerifyRequestBody extends SpeakeasyBase {
    token?: string;
}
export declare class PostAuthVerify200ApplicationJson extends SpeakeasyBase {
    token?: string;
    ttl?: number;
}
export declare class PostAuthVerify400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostAuthVerify500ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostAuthVerifyRequest extends SpeakeasyBase {
    request: PostAuthVerifyRequestBody;
}
export declare class PostAuthVerifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postAuthVerify200ApplicationJSONObject?: PostAuthVerify200ApplicationJson;
    postAuthVerify400ApplicationJSONObject?: PostAuthVerify400ApplicationJson;
    postAuthVerify500ApplicationJSONObject?: PostAuthVerify500ApplicationJson;
}
