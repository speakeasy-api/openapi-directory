import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAsyncReportSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class CreateAsyncReportRequest extends SpeakeasyBase {
    request?: any;
    security: CreateAsyncReportSecurity;
}
export declare class CreateAsyncReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createAsyncReport200ApplicationJSONOneOf?: any;
    createAsyncReport400ApplicationJSONAny?: any;
    createAsyncReport401ApplicationJSONAny?: any;
    createAsyncReport403ApplicationJSONAny?: any;
    createAsyncReport422ApplicationJSONAny?: any;
}
