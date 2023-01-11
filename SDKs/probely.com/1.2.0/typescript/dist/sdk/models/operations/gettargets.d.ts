import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsQueryParams extends SpeakeasyBase {
    length?: number;
    ordering?: string;
    page?: number;
    search?: string;
}
export declare class GetTargets200ApplicationJson extends SpeakeasyBase {
    length?: number;
    page?: number;
    pageTotal?: number;
    paginationCount?: number;
    results?: shared.Target[];
}
export declare class GetTargets401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargets404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargets500ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsRequest extends SpeakeasyBase {
    queryParams: GetTargetsQueryParams;
}
export declare class GetTargetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargets200ApplicationJSONObject?: GetTargets200ApplicationJson;
    getTargets401ApplicationJSONObject?: GetTargets401ApplicationJson;
    getTargets404ApplicationJSONObject?: GetTargets404ApplicationJson;
    getTargets500ApplicationJSONObject?: GetTargets500ApplicationJson;
}
