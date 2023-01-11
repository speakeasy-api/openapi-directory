import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsTargetIdScansIdEndpointsPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdScansIdEndpoints401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdEndpoints404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdEndpointsRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdScansIdEndpointsPathParams;
}
export declare class GetTargetsTargetIdScansIdEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdScansIdEndpoints200ApplicationCsvBinaryString?: Uint8Array;
    getTargetsTargetIdScansIdEndpoints401ApplicationJSONObject?: GetTargetsTargetIdScansIdEndpoints401ApplicationJson;
    getTargetsTargetIdScansIdEndpoints404ApplicationJSONObject?: GetTargetsTargetIdScansIdEndpoints404ApplicationJson;
}
