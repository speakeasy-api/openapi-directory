import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostTargetsActivate400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargetsActivate401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsActivate403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsActivateRequest extends SpeakeasyBase {
    request: string[];
}
export declare class PostTargetsActivateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postTargetsActivate400ApplicationJSONObject?: PostTargetsActivate400ApplicationJson;
    postTargetsActivate401ApplicationJSONObject?: PostTargetsActivate401ApplicationJson;
    postTargetsActivate403ApplicationJSONObject?: PostTargetsActivate403ApplicationJson;
    targetIds?: string[];
}
