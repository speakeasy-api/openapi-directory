import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Phone Number Assignments
 */
export declare class PhoneNumberAssignments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List phone number assignments
     *
     * @remarks
     * Fetches multiple phone number assignment records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2PhoneNumberAssignmentsJson(req: operations.GetV2PhoneNumberAssignmentsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2PhoneNumberAssignmentsJsonResponse>;
    /**
     * Fetch a phone number assignment
     *
     * @remarks
     * Fetches a phone number assignment, by ID only.
     *
     */
    getV2PhoneNumberAssignmentsIdJson(req: operations.GetV2PhoneNumberAssignmentsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2PhoneNumberAssignmentsIdJsonResponse>;
}
