import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Actions - Call Instructions
 */
export declare class ActionDetailsCallInstructions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List call instructions
     *
     * @remarks
     * Fetches multiple call instruction records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2ActionDetailsCallInstructionsJson(req: operations.GetV2ActionDetailsCallInstructionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2ActionDetailsCallInstructionsJsonResponse>;
    /**
     * Fetch a call instructions
     *
     * @remarks
     * Fetches a call instruction, by ID only.
     *
     */
    getV2ActionDetailsCallInstructionsIdJson(req: operations.GetV2ActionDetailsCallInstructionsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2ActionDetailsCallInstructionsIdJsonResponse>;
}
