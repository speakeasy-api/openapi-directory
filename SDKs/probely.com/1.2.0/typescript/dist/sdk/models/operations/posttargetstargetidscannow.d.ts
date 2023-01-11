import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTargetsTargetIdScanNowPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare enum PostTargetsTargetIdScanNowRequestBodyScanProfileEnum {
    Safe = "safe",
    Normal = "normal",
    Full = "full",
    Lightning = "lightning"
}
export declare class PostTargetsTargetIdScanNowRequestBody extends SpeakeasyBase {
    scanProfile?: PostTargetsTargetIdScanNowRequestBodyScanProfileEnum;
}
export declare class PostTargetsTargetIdScanNow400ApplicationJson extends SpeakeasyBase {
    error?: string;
}
export declare class PostTargetsTargetIdScanNow401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdScanNow403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdScanNow404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdScanNowRequest extends SpeakeasyBase {
    pathParams: PostTargetsTargetIdScanNowPathParams;
    request?: PostTargetsTargetIdScanNowRequestBody;
}
export declare class PostTargetsTargetIdScanNowResponse extends SpeakeasyBase {
    contentType: string;
    scan?: shared.Scan;
    statusCode: number;
    postTargetsTargetIdScanNow400ApplicationJSONObject?: PostTargetsTargetIdScanNow400ApplicationJson;
    postTargetsTargetIdScanNow401ApplicationJSONObject?: PostTargetsTargetIdScanNow401ApplicationJson;
    postTargetsTargetIdScanNow403ApplicationJSONObject?: PostTargetsTargetIdScanNow403ApplicationJson;
    postTargetsTargetIdScanNow404ApplicationJSONObject?: PostTargetsTargetIdScanNow404ApplicationJson;
}
