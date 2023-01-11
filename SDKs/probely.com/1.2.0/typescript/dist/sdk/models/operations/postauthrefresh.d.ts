import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAuthRefreshRequestBody extends SpeakeasyBase {
    token?: string;
}
export declare class PostAuthRefresh200ApplicationJson extends SpeakeasyBase {
    token?: string;
    ttl?: number;
}
export declare class PostAuthRefresh400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostAuthRefresh500ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostAuthRefreshRequest extends SpeakeasyBase {
    request: PostAuthRefreshRequestBody;
}
export declare class PostAuthRefreshResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postAuthRefresh200ApplicationJSONObject?: PostAuthRefresh200ApplicationJson;
    postAuthRefresh400ApplicationJSONObject?: PostAuthRefresh400ApplicationJson;
    postAuthRefresh500ApplicationJSONObject?: PostAuthRefresh500ApplicationJson;
}
