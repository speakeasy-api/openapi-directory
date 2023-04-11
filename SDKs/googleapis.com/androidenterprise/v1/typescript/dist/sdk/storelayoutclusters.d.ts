import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Storelayoutclusters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a cluster.
     */
    androidenterpriseStorelayoutclustersDelete(req: operations.AndroidenterpriseStorelayoutclustersDeleteRequest, security: operations.AndroidenterpriseStorelayoutclustersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutclustersDeleteResponse>;
    /**
     * Retrieves details of a cluster.
     */
    androidenterpriseStorelayoutclustersGet(req: operations.AndroidenterpriseStorelayoutclustersGetRequest, security: operations.AndroidenterpriseStorelayoutclustersGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutclustersGetResponse>;
    /**
     * Inserts a new cluster in a page.
     */
    androidenterpriseStorelayoutclustersInsert(req: operations.AndroidenterpriseStorelayoutclustersInsertRequest, security: operations.AndroidenterpriseStorelayoutclustersInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutclustersInsertResponse>;
    /**
     * Retrieves the details of all clusters on the specified page.
     */
    androidenterpriseStorelayoutclustersList(req: operations.AndroidenterpriseStorelayoutclustersListRequest, security: operations.AndroidenterpriseStorelayoutclustersListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutclustersListResponse>;
    /**
     * Updates a cluster.
     */
    androidenterpriseStorelayoutclustersUpdate(req: operations.AndroidenterpriseStorelayoutclustersUpdateRequest, security: operations.AndroidenterpriseStorelayoutclustersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutclustersUpdateResponse>;
}
