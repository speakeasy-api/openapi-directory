import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsTargetIdScansRetrievePagePathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdScansRetrievePageQueryParams extends SpeakeasyBase {
    date: Date;
    length?: number;
}
export declare class GetTargetsTargetIdScansRetrievePage200ApplicationJson extends SpeakeasyBase {
    page?: number;
}
export declare class GetTargetsTargetIdScansRetrievePage400ApplicationJson extends SpeakeasyBase {
    error?: string;
}
export declare class GetTargetsTargetIdScansRetrievePage401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansRetrievePage404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansRetrievePageRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdScansRetrievePagePathParams;
    queryParams: GetTargetsTargetIdScansRetrievePageQueryParams;
}
export declare class GetTargetsTargetIdScansRetrievePageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdScansRetrievePage200ApplicationJSONObject?: GetTargetsTargetIdScansRetrievePage200ApplicationJson;
    getTargetsTargetIdScansRetrievePage400ApplicationJSONObject?: GetTargetsTargetIdScansRetrievePage400ApplicationJson;
    getTargetsTargetIdScansRetrievePage401ApplicationJSONObject?: GetTargetsTargetIdScansRetrievePage401ApplicationJson;
    getTargetsTargetIdScansRetrievePage404ApplicationJSONObject?: GetTargetsTargetIdScansRetrievePage404ApplicationJson;
}
