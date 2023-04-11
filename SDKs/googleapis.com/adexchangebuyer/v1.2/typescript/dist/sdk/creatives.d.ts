import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Creatives {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
     */
    adexchangebuyerCreativesGet(req: operations.AdexchangebuyerCreativesGetRequest, security: operations.AdexchangebuyerCreativesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerCreativesGetResponse>;
    /**
     * Submit a new creative.
     */
    adexchangebuyerCreativesInsert(req: operations.AdexchangebuyerCreativesInsertRequest, security: operations.AdexchangebuyerCreativesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerCreativesInsertResponse>;
    /**
     * Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
     */
    adexchangebuyerCreativesList(req: operations.AdexchangebuyerCreativesListRequest, security: operations.AdexchangebuyerCreativesListSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerCreativesListResponse>;
}
