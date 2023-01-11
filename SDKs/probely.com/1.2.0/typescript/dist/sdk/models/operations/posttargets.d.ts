import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTargets400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargets401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargets403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargets500ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsRequest extends SpeakeasyBase {
    request?: shared.TargetInput;
}
export declare class PostTargetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    target?: shared.Target;
    postTargets400ApplicationJSONObject?: PostTargets400ApplicationJson;
    postTargets401ApplicationJSONObject?: PostTargets401ApplicationJson;
    postTargets403ApplicationJSONObject?: PostTargets403ApplicationJson;
    postTargets500ApplicationJSONObject?: PostTargets500ApplicationJson;
}
