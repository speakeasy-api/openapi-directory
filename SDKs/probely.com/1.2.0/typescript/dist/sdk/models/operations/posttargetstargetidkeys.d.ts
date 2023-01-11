import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTargetsTargetIdKeysPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PostTargetsTargetIdKeys400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargetsTargetIdKeys401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdKeys403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdKeys404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdKeysRequest extends SpeakeasyBase {
    pathParams: PostTargetsTargetIdKeysPathParams;
    request: shared.ApiKeyInput;
}
export declare class PostTargetsTargetIdKeysResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
    postTargetsTargetIdKeys400ApplicationJSONObject?: PostTargetsTargetIdKeys400ApplicationJson;
    postTargetsTargetIdKeys401ApplicationJSONObject?: PostTargetsTargetIdKeys401ApplicationJson;
    postTargetsTargetIdKeys403ApplicationJSONObject?: PostTargetsTargetIdKeys403ApplicationJson;
    postTargetsTargetIdKeys404ApplicationJSONObject?: PostTargetsTargetIdKeys404ApplicationJson;
}
