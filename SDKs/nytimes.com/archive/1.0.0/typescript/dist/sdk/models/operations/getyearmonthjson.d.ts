import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetYearMonthJsonPathParams extends SpeakeasyBase {
    month: number;
    year: number;
}
export declare class GetYearMonthJson200ApplicationJsonResponseMeta extends SpeakeasyBase {
    hits?: number;
    offset?: number;
    time?: number;
}
export declare class GetYearMonthJson200ApplicationJsonResponse extends SpeakeasyBase {
    docs?: shared.Doc[];
    meta?: GetYearMonthJson200ApplicationJsonResponseMeta;
}
export declare class GetYearMonthJson200ApplicationJson extends SpeakeasyBase {
    response?: GetYearMonthJson200ApplicationJsonResponse;
}
export declare class GetYearMonthJsonRequest extends SpeakeasyBase {
    pathParams: GetYearMonthJsonPathParams;
}
export declare class GetYearMonthJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getYearMonthJSON200ApplicationJSONObject?: GetYearMonthJson200ApplicationJson;
}
