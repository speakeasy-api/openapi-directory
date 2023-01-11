import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Forms {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * findFormByFormName - Find form by form name
     *
     * Returns a single form and the full revision history
    **/
    findFormByFormName(req: operations.FindFormByFormNameRequest, config?: AxiosRequestConfig): Promise<operations.FindFormByFormNameResponse>;
    /**
     * findForms - Returns all VA Forms and their last revision date
     *
     * Returns an index of all available VA forms. Optionally, pass a query parameter to filter forms by form number or title.
    **/
    findForms(req: operations.FindFormsRequest, config?: AxiosRequestConfig): Promise<operations.FindFormsResponse>;
}
