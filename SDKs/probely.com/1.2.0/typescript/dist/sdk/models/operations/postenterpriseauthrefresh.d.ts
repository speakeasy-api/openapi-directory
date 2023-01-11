import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostEnterpriseAuthRefreshRequestBody extends SpeakeasyBase {
    token?: string;
}
export declare class PostEnterpriseAuthRefresh200ApplicationJson extends SpeakeasyBase {
    token?: string;
    ttl?: number;
}
export declare class PostEnterpriseAuthRefresh400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostEnterpriseAuthRefresh500ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostEnterpriseAuthRefreshRequest extends SpeakeasyBase {
    request: PostEnterpriseAuthRefreshRequestBody;
}
export declare class PostEnterpriseAuthRefreshResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postEnterpriseAuthRefresh200ApplicationJSONObject?: PostEnterpriseAuthRefresh200ApplicationJson;
    postEnterpriseAuthRefresh400ApplicationJSONObject?: PostEnterpriseAuthRefresh400ApplicationJson;
    postEnterpriseAuthRefresh500ApplicationJSONObject?: PostEnterpriseAuthRefresh500ApplicationJson;
}
