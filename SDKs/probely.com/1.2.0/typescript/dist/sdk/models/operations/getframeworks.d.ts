import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFrameworksQueryParams extends SpeakeasyBase {
    length?: number;
    ordering?: string;
    page?: number;
    search?: string;
}
export declare class GetFrameworks200ApplicationJson extends SpeakeasyBase {
    count?: number;
    length?: number;
    page?: number;
    pageTotal?: number;
    results?: shared.Framework[];
}
export declare class GetFrameworks401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetFrameworksRequest extends SpeakeasyBase {
    queryParams: GetFrameworksQueryParams;
}
export declare class GetFrameworksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getFrameworks200ApplicationJSONObject?: GetFrameworks200ApplicationJson;
    getFrameworks401ApplicationJSONObject?: GetFrameworks401ApplicationJson;
}
