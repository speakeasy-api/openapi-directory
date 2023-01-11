import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostCheckRequestBody extends SpeakeasyBase {
    token: string;
}
export declare class PostCheck200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostCheck400ApplicationJson extends SpeakeasyBase {
    error?: string;
}
export declare class PostCheckRequest extends SpeakeasyBase {
    request: PostCheckRequestBody;
}
export declare class PostCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postCheck200ApplicationJSONObject?: PostCheck200ApplicationJson;
    postCheck400ApplicationJSONObject?: PostCheck400ApplicationJson;
}
