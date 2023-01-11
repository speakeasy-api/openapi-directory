import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportPathParams extends SpeakeasyBase {
    reportId: string;
}
export declare class GetReportSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetReportRequest extends SpeakeasyBase {
    pathParams: GetReportPathParams;
    security: GetReportSecurity;
}
export declare class GetReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getReport200ApplicationJSONOneOf?: any;
    getReport401ApplicationJSONAny?: any;
    getReport404ApplicationJSONAny?: any;
}
