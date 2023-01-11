import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostKeys401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostKeys403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostKeysRequest extends SpeakeasyBase {
    request: shared.ApiKeyInput;
}
export declare class PostKeysResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
    postKeys401ApplicationJSONObject?: PostKeys401ApplicationJson;
    postKeys403ApplicationJSONObject?: PostKeys403ApplicationJson;
}
