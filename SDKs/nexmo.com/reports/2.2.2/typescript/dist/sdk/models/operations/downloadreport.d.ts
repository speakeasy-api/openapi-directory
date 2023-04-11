import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DownloadReportSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DownloadReportRequest extends SpeakeasyBase {
    /**
     * UUID of the file.
     */
    fileId: string;
}
/**
 * Not found
 */
export declare class DownloadReport404ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Unauthorized
 */
export declare class DownloadReport401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Zip file containing CSV files
 */
export declare class DownloadReport200ApplicationOctetStream extends SpeakeasyBase {
    /**
     * The report in CSV format inside the zip archive.
     */
    report?: any[];
}
export declare class DownloadReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    downloadReport401ApplicationJSONObject?: DownloadReport401ApplicationJSON;
    /**
     * Not found
     */
    downloadReport404ApplicationJSONObject?: DownloadReport404ApplicationJSON;
}
