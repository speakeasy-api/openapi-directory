import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteApplicationRequest extends SpeakeasyBase {
    /**
     * The ID of the application
     */
    id: string;
}
/**
 * Invalid Accept Header
 */
export declare class DeleteApplication406ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Invalid Request Method
 */
export declare class DeleteApplication405ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Resource Not Found
 */
export declare class DeleteApplication404ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Credential is missing or invalid
 */
export declare class DeleteApplication401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    title?: string;
    type?: string;
}
export declare class DeleteApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Credential is missing or invalid
     */
    deleteApplication401ApplicationJSONObject?: DeleteApplication401ApplicationJSON;
    /**
     * Resource Not Found
     */
    deleteApplication404ApplicationJSONObject?: DeleteApplication404ApplicationJSON;
    /**
     * Invalid Request Method
     */
    deleteApplication405ApplicationJSONObject?: DeleteApplication405ApplicationJSON;
    /**
     * Invalid Accept Header
     */
    deleteApplication406ApplicationJSONObject?: DeleteApplication406ApplicationJSON;
}
