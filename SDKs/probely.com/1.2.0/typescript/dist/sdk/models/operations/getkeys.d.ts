import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetKeysQueryParams extends SpeakeasyBase {
    length?: number;
    ordering?: string;
    page?: number;
    search?: string;
}
export declare class GetKeys200ApplicationJson extends SpeakeasyBase {
    count?: number;
    length?: number;
    page?: number;
    pageTotal?: number;
    results?: shared.Key[];
}
export declare class GetKeys401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetKeys403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetKeysRequest extends SpeakeasyBase {
    queryParams: GetKeysQueryParams;
}
export declare class GetKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getKeys200ApplicationJSONObject?: GetKeys200ApplicationJson;
    getKeys401ApplicationJSONObject?: GetKeys401ApplicationJson;
    getKeys403ApplicationJSONObject?: GetKeys403ApplicationJson;
}
