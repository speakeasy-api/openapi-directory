import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetReportSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetReportRequest extends SpeakeasyBase {
    /**
     * UUID of the report request (`request_id` in response).
     */
    reportId: string;
}
/**
 * Not found
 */
export declare class GetReport404ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Unauthorized
 */
export declare class GetReport401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
    type?: string;
}
export declare class GetReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getReport200ApplicationJSONOneOf?: any;
    /**
     * Unauthorized
     */
    getReport401ApplicationJSONObject?: GetReport401ApplicationJSON;
    /**
     * Not found
     */
    getReport404ApplicationJSONObject?: GetReport404ApplicationJSON;
}
