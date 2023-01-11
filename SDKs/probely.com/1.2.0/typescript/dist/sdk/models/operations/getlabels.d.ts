import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLabelsQueryParams extends SpeakeasyBase {
    length?: number;
    ordering?: string;
    page?: number;
    search?: string;
}
export declare class GetLabels200ApplicationJson extends SpeakeasyBase {
    count?: number;
    length?: number;
    page?: number;
    pageTotal?: number;
    results?: shared.Label[];
}
export declare class GetLabels401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetLabelsRequest extends SpeakeasyBase {
    queryParams: GetLabelsQueryParams;
}
export declare class GetLabelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLabels200ApplicationJSONObject?: GetLabels200ApplicationJson;
    getLabels401ApplicationJSONObject?: GetLabels401ApplicationJson;
}
