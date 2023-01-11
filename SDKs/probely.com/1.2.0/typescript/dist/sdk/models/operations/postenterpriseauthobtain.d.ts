import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostEnterpriseAuthObtain200ApplicationJson extends SpeakeasyBase {
    token?: string;
    ttl?: number;
}
export declare class PostEnterpriseAuthObtain400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostEnterpriseAuthObtain500ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostEnterpriseAuthObtainRequest extends SpeakeasyBase {
    request: shared.Login;
}
export declare class PostEnterpriseAuthObtainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postEnterpriseAuthObtain200ApplicationJSONObject?: PostEnterpriseAuthObtain200ApplicationJson;
    postEnterpriseAuthObtain400ApplicationJSONObject?: PostEnterpriseAuthObtain400ApplicationJson;
    postEnterpriseAuthObtain500ApplicationJSONObject?: PostEnterpriseAuthObtain500ApplicationJson;
}
