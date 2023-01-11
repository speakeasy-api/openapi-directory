import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelReportPathParams extends SpeakeasyBase {
    reportId: string;
}
export declare class CancelReportSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class CancelReportRequest extends SpeakeasyBase {
    pathParams: CancelReportPathParams;
    security: CancelReportSecurity;
}
export declare class CancelReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cancelReport200ApplicationJSONOneOf?: any;
    cancelReport401ApplicationJSONAny?: any;
    cancelReport404ApplicationJSONAny?: any;
    cancelReport409ApplicationJSONAny?: any;
}
