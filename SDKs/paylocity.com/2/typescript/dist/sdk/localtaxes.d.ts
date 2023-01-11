import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LocalTaxes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addLocalTax - Add new local tax
     *
     * Sends new employee local tax information directly to Web Pay.
    **/
    addLocalTax(req: operations.AddLocalTaxRequest, config?: AxiosRequestConfig): Promise<operations.AddLocalTaxResponse>;
    /**
     * deleteLocalTaxByTaxCode - Delete local tax by tax code
     *
     * Delete local tax by tax code
    **/
    deleteLocalTaxByTaxCode(req: operations.DeleteLocalTaxByTaxCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLocalTaxByTaxCodeResponse>;
    /**
     * getAllLocalTaxes - Get all local taxes
     *
     * Returns all local taxes for the selected employee.
    **/
    getAllLocalTaxes(req: operations.GetAllLocalTaxesRequest, config?: AxiosRequestConfig): Promise<operations.GetAllLocalTaxesResponse>;
    /**
     * getLocalTaxByTaxCode - Get local taxes by tax code
     *
     * Returns all local taxes with the provided tax code for the selected employee.
    **/
    getLocalTaxByTaxCode(req: operations.GetLocalTaxByTaxCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetLocalTaxByTaxCodeResponse>;
}
