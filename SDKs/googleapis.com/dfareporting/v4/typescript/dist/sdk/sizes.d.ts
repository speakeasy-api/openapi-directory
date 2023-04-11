import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sizes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one size by ID.
     */
    dfareportingSizesGet(req: operations.DfareportingSizesGetRequest, security: operations.DfareportingSizesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingSizesGetResponse>;
    /**
     * Inserts a new size.
     */
    dfareportingSizesInsert(req: operations.DfareportingSizesInsertRequest, security: operations.DfareportingSizesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingSizesInsertResponse>;
    /**
     * Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.
     */
    dfareportingSizesList(req: operations.DfareportingSizesListRequest, security: operations.DfareportingSizesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingSizesListResponse>;
}
