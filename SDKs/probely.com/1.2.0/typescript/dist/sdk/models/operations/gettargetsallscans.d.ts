import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsAllScansQueryParams extends SpeakeasyBase {
    length?: number;
    ordering?: string;
    page?: number;
    search?: string;
    started?: Date[];
    status?: shared.ScanStatusEnum;
}
export declare class GetTargetsAllScans200ApplicationJson extends SpeakeasyBase {
    count?: number;
    length?: number;
    page?: number;
    pageTotal?: number;
    results?: shared.Scan[];
}
export declare class GetTargetsAllScans401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsAllScansRequest extends SpeakeasyBase {
    queryParams: GetTargetsAllScansQueryParams;
}
export declare class GetTargetsAllScansResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsAllScans200ApplicationJSONObject?: GetTargetsAllScans200ApplicationJson;
    getTargetsAllScans401ApplicationJSONObject?: GetTargetsAllScans401ApplicationJson;
}
