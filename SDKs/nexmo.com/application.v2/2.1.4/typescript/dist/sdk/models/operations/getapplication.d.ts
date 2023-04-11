import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApplicationRequest extends SpeakeasyBase {
    /**
     * The ID of the application
     */
    id: string;
}
/**
 * Invalid Accept Header
 */
export declare class GetApplication406ApplicationJSON extends SpeakeasyBase {
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
export declare class GetApplication405ApplicationJSON extends SpeakeasyBase {
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
export declare class GetApplication404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetApplication401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    title?: string;
    type?: string;
}
export declare class GetApplicationResponse extends SpeakeasyBase {
    /**
     * Success
     */
    applicationResponse?: shared.ApplicationResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Credential is missing or invalid
     */
    getApplication401ApplicationJSONObject?: GetApplication401ApplicationJSON;
    /**
     * Resource Not Found
     */
    getApplication404ApplicationJSONObject?: GetApplication404ApplicationJSON;
    /**
     * Invalid Request Method
     */
    getApplication405ApplicationJSONObject?: GetApplication405ApplicationJSON;
    /**
     * Invalid Accept Header
     */
    getApplication406ApplicationJSONObject?: GetApplication406ApplicationJSON;
}
