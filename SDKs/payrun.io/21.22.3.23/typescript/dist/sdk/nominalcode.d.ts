import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class NominalCode {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteNominalCode - Deletes the nominal codes
     *
     * Deletes the nominal code
    **/
    deleteNominalCode(req: operations.DeleteNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNominalCodeResponse>;
    /**
     * getNominalCodeFromEmployer - Gets the nominal code
     *
     * Gets the nominal code
    **/
    getNominalCodeFromEmployer(req: operations.GetNominalCodeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetNominalCodeFromEmployerResponse>;
    /**
     * getNominalCodesFromEmployer - Gets the nominal codes
     *
     * Gets the nominal code links
    **/
    getNominalCodesFromEmployer(req: operations.GetNominalCodesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetNominalCodesFromEmployerResponse>;
    /**
     * postNominalCode - Insert nominal code
     *
     * Inserts a new nominal code
    **/
    postNominalCode(req: operations.PostNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.PostNominalCodeResponse>;
    /**
     * putNominalCode - Insert nominal code
     *
     * Inserts a new nominal code at the specified resource location
    **/
    putNominalCode(req: operations.PutNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.PutNominalCodeResponse>;
}
