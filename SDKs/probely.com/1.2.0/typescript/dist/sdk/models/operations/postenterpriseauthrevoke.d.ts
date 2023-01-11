import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostEnterpriseAuthRevokeRequestBody extends SpeakeasyBase {
    token?: string;
}
export declare class PostEnterpriseAuthRevoke200ApplicationJson extends SpeakeasyBase {
    token?: string;
    ttl?: number;
}
export declare class PostEnterpriseAuthRevoke400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostEnterpriseAuthRevoke500ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostEnterpriseAuthRevokeRequest extends SpeakeasyBase {
    request: PostEnterpriseAuthRevokeRequestBody;
}
export declare class PostEnterpriseAuthRevokeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postEnterpriseAuthRevoke200ApplicationJSONObject?: PostEnterpriseAuthRevoke200ApplicationJson;
    postEnterpriseAuthRevoke400ApplicationJSONObject?: PostEnterpriseAuthRevoke400ApplicationJson;
    postEnterpriseAuthRevoke500ApplicationJSONObject?: PostEnterpriseAuthRevoke500ApplicationJson;
}
