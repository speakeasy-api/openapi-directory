import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdKeysPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdKeysQueryParams extends SpeakeasyBase {
    length?: number;
    ordering?: string;
    page?: number;
    search?: string;
}
export declare class GetTargetsTargetIdKeys200ApplicationJson extends SpeakeasyBase {
    count?: number;
    length?: number;
    page?: number;
    pageTotal?: number;
    results?: shared.Key[];
}
export declare class GetTargetsTargetIdKeys401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdKeys404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdKeysRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdKeysPathParams;
    queryParams: GetTargetsTargetIdKeysQueryParams;
}
export declare class GetTargetsTargetIdKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdKeys200ApplicationJSONObject?: GetTargetsTargetIdKeys200ApplicationJson;
    getTargetsTargetIdKeys401ApplicationJSONObject?: GetTargetsTargetIdKeys401ApplicationJson;
    getTargetsTargetIdKeys404ApplicationJSONObject?: GetTargetsTargetIdKeys404ApplicationJson;
}
