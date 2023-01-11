import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAuthObtain200ApplicationJson extends SpeakeasyBase {
    token?: string;
    ttl?: number;
}
export declare class PostAuthObtain400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostAuthObtain500ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostAuthObtainRequest extends SpeakeasyBase {
    request: shared.Login;
}
export declare class PostAuthObtainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postAuthObtain200ApplicationJSONObject?: PostAuthObtain200ApplicationJson;
    postAuthObtain400ApplicationJSONObject?: PostAuthObtain400ApplicationJson;
    postAuthObtain500ApplicationJSONObject?: PostAuthObtain500ApplicationJson;
}
