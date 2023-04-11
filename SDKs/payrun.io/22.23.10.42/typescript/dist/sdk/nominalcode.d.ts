import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class NominalCode {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the nominal codes
     *
     * @remarks
     * Deletes the nominal code
     */
    deleteNominalCode(req: operations.DeleteNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNominalCodeResponse>;
    /**
     * Gets the nominal code
     *
     * @remarks
     * Gets the nominal code
     */
    getNominalCodeFromEmployer(req: operations.GetNominalCodeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetNominalCodeFromEmployerResponse>;
    /**
     * Gets the nominal codes
     *
     * @remarks
     * Gets the nominal code links
     */
    getNominalCodesFromEmployer(req: operations.GetNominalCodesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetNominalCodesFromEmployerResponse>;
    /**
     * Insert nominal code
     *
     * @remarks
     * Inserts a new nominal code
     */
    postNominalCode(req: operations.PostNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.PostNominalCodeResponse>;
    /**
     * Insert nominal code
     *
     * @remarks
     * Inserts a new nominal code at the specified resource location
     */
    putNominalCode(req: operations.PutNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.PutNominalCodeResponse>;
}
