import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServiceGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Service Groups
     *
     * @remarks
     * <p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>
     */
    getConsumerV1Servicegroups(req: operations.GetConsumerV1ServicegroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicegroupsResponse>;
    /**
     * Get Service Group
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Service Group</b> object. A valid <b>serviceGroup id</b> is required. Find serviceGroup id's by using the <i>GET /consumer/v1/serviceGroups</i> endpoint.</p>
     */
    getConsumerV1ServicegroupsId(req: operations.GetConsumerV1ServicegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicegroupsIdResponse>;
}
