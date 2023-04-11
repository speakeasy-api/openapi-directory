import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Forms {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Find form by form name
     *
     * @remarks
     * Returns a single form and the full revision history
     */
    findFormByFormName(req: operations.FindFormByFormNameRequest, security: operations.FindFormByFormNameSecurity, config?: AxiosRequestConfig): Promise<operations.FindFormByFormNameResponse>;
    /**
     * Returns all VA Forms and their last revision date
     *
     * @remarks
     * Returns an index of all available VA forms. Optionally, pass a query parameter to filter forms by form number or title.
     */
    findForms(req: operations.FindFormsRequest, security: operations.FindFormsSecurity, config?: AxiosRequestConfig): Promise<operations.FindFormsResponse>;
}
