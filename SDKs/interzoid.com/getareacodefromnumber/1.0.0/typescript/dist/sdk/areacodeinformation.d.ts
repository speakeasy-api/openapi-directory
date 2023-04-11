import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AreaCodeInformation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets area code information from a telephone number
     *
     * @remarks
     * The area code will be parsed out of a telephone number and used to retrieve information about the area code.
     */
    getareacodefromnumber(req: operations.GetareacodefromnumberRequest, config?: AxiosRequestConfig): Promise<operations.GetareacodefromnumberResponse>;
}
