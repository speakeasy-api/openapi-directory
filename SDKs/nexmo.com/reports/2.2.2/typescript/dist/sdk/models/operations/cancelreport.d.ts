import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CancelReportSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CancelReportRequest extends SpeakeasyBase {
    /**
     * UUID of the report
     */
    reportId: string;
}
/**
 * Invalid Abort Operation
 */
export declare class CancelReport409ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Not found
 */
export declare class CancelReport404ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Unauthorized
 */
export declare class CancelReport401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
    type?: string;
}
export declare class CancelReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    cancelReport200ApplicationJSONOneOf?: any;
    /**
     * Unauthorized
     */
    cancelReport401ApplicationJSONObject?: CancelReport401ApplicationJSON;
    /**
     * Not found
     */
    cancelReport404ApplicationJSONObject?: CancelReport404ApplicationJSON;
    /**
     * Invalid Abort Operation
     */
    cancelReport409ApplicationJSONObject?: CancelReport409ApplicationJSON;
}
