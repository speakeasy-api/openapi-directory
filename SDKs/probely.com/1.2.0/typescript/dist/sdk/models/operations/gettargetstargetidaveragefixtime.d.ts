import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsTargetIdAverageFixTimePathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdAverageFixTime200ApplicationJsonResults extends SpeakeasyBase {
    high?: number;
    low?: number;
    medium?: number;
}
export declare class GetTargetsTargetIdAverageFixTime200ApplicationJson extends SpeakeasyBase {
    results?: GetTargetsTargetIdAverageFixTime200ApplicationJsonResults;
}
export declare class GetTargetsTargetIdAverageFixTimeRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdAverageFixTimePathParams;
}
export declare class GetTargetsTargetIdAverageFixTimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdAverageFixTime200ApplicationJSONObject?: GetTargetsTargetIdAverageFixTime200ApplicationJson;
}
