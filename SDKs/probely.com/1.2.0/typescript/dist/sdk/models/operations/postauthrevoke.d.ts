import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAuthRevokeRequestBody extends SpeakeasyBase {
    token?: string;
}
export declare class PostAuthRevoke200ApplicationJson extends SpeakeasyBase {
    token?: string;
    ttl?: number;
}
export declare class PostAuthRevoke400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostAuthRevoke500ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostAuthRevokeRequest extends SpeakeasyBase {
    request: PostAuthRevokeRequestBody;
}
export declare class PostAuthRevokeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postAuthRevoke200ApplicationJSONObject?: PostAuthRevoke200ApplicationJson;
    postAuthRevoke400ApplicationJSONObject?: PostAuthRevoke400ApplicationJson;
    postAuthRevoke500ApplicationJSONObject?: PostAuthRevoke500ApplicationJson;
}
