import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ResourceGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Resource Groups
     *
     * @remarks
     * <p>Use this endpoint to return a list of <b>Resource Groups</b> for the requested location. If not specified, the business location defaults to the primary business location.</p>
     */
    getConsumerV1Resourcegroups(req: operations.GetConsumerV1ResourcegroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ResourcegroupsResponse>;
    /**
     * Get Resource Group
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Resource Group</b> object. A valid <b>resourceGroup id</b> is required. Find resourceGroup id's by using the <i>GET /consumer/v1/resourceGroups</i> endpoint.</p>
     */
    getConsumerV1ResourcegroupsId(req: operations.GetConsumerV1ResourcegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ResourcegroupsIdResponse>;
}
