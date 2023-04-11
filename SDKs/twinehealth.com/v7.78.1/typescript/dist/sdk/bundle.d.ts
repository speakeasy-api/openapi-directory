import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A bundle is a collection of actions (an action plan) in a patient's plan summary.
 */
export declare class Bundle {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create bundle
     *
     * @remarks
     * Create a bundle in a patient's plan
     */
    createBundle(req: shared.CreateBundleRequest, config?: AxiosRequestConfig): Promise<operations.CreateBundleResponse>;
    /**
     * Get a bundle
     *
     * @remarks
     * Get a bundle from a patient's plan.
     */
    fetchBundle(req: operations.FetchBundleRequest, config?: AxiosRequestConfig): Promise<operations.FetchBundleResponse>;
    /**
     * Update a bundle
     *
     * @remarks
     * Updte a bundle from a patient's plan.
     */
    updateBundle(req: operations.UpdateBundleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBundleResponse>;
}
