import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostEnterpriseAuthVerifyRequestBody extends SpeakeasyBase {
    token?: string;
}
export declare class PostEnterpriseAuthVerify200ApplicationJson extends SpeakeasyBase {
    token?: string;
    ttl?: number;
}
export declare class PostEnterpriseAuthVerify400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostEnterpriseAuthVerify500ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostEnterpriseAuthVerifyRequest extends SpeakeasyBase {
    request: PostEnterpriseAuthVerifyRequestBody;
}
export declare class PostEnterpriseAuthVerifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postEnterpriseAuthVerify200ApplicationJSONObject?: PostEnterpriseAuthVerify200ApplicationJson;
    postEnterpriseAuthVerify400ApplicationJSONObject?: PostEnterpriseAuthVerify400ApplicationJson;
    postEnterpriseAuthVerify500ApplicationJSONObject?: PostEnterpriseAuthVerify500ApplicationJson;
}
