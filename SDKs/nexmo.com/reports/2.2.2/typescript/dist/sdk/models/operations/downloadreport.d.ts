import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadReportPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DownloadReportSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class DownloadReportRequest extends SpeakeasyBase {
    pathParams: DownloadReportPathParams;
    security: DownloadReportSecurity;
}
export declare class DownloadReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    downloadReport401ApplicationJSONAny?: any;
    downloadReport404ApplicationJSONAny?: any;
}
