import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateAsyncReportSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * Unprocessable entity
 */
export declare class CreateAsyncReport422ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Forbidden
 */
export declare class CreateAsyncReport403ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Unauthorized
 */
export declare class CreateAsyncReport401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Bad Request
 */
export declare class CreateAsyncReport400ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
    type?: string;
}
export declare class CreateAsyncReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    createAsyncReport200ApplicationJSONOneOf?: any;
    /**
     * Bad Request
     */
    createAsyncReport400ApplicationJSONObject?: CreateAsyncReport400ApplicationJSON;
    /**
     * Unauthorized
     */
    createAsyncReport401ApplicationJSONObject?: CreateAsyncReport401ApplicationJSON;
    /**
     * Forbidden
     */
    createAsyncReport403ApplicationJSONObject?: CreateAsyncReport403ApplicationJSON;
    /**
     * Unprocessable entity
     */
    createAsyncReport422ApplicationJSONObject?: CreateAsyncReport422ApplicationJSON;
}
