import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LocalTaxes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add new local tax
     *
     * @remarks
     * Sends new employee local tax information directly to Web Pay.
     */
    addLocalTax(req: operations.AddLocalTaxRequest, security: operations.AddLocalTaxSecurity, config?: AxiosRequestConfig): Promise<operations.AddLocalTaxResponse>;
    /**
     * Delete local tax by tax code
     *
     * @remarks
     * Delete local tax by tax code
     */
    deleteLocalTaxByTaxCode(req: operations.DeleteLocalTaxByTaxCodeRequest, security: operations.DeleteLocalTaxByTaxCodeSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteLocalTaxByTaxCodeResponse>;
    /**
     * Get all local taxes
     *
     * @remarks
     * Returns all local taxes for the selected employee.
     */
    getAllLocalTaxes(req: operations.GetAllLocalTaxesRequest, security: operations.GetAllLocalTaxesSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllLocalTaxesResponse>;
    /**
     * Get local taxes by tax code
     *
     * @remarks
     * Returns all local taxes with the provided tax code for the selected employee.
     */
    getLocalTaxByTaxCode(req: operations.GetLocalTaxByTaxCodeRequest, security: operations.GetLocalTaxByTaxCodeSecurity, config?: AxiosRequestConfig): Promise<operations.GetLocalTaxByTaxCodeResponse>;
}
