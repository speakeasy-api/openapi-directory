import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Caller ID Information
 */
export declare class CallerIDs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List caller ids
     *
     * @remarks
     * Each entry is a possible caller ID match for the number. Multiple
     * entries may be returned if the phone number is present on more than one
     * person in the system.  Phone number should be in E.164 format.
     *
     */
    getV2PhoneNumbersCallerIdsJson(req: operations.GetV2PhoneNumbersCallerIdsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2PhoneNumbersCallerIdsJsonResponse>;
}
