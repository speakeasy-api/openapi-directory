import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
     * Delete Service Group
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete</b> a Service Group object. A valid <b>serviceGroup id</b> is required. The service group is not permanently deleted and can be recovered by using the <i>PUT  /setup /v1 /servicegroups /{id} /recover</i> endpoint.</p>
     */
    deleteSetupV1ServicegroupsId(req: operations.DeleteSetupV1ServicegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicegroupsIdResponse>;
    /**
     * List Service Groups
     *
     * @remarks
     * <p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If no business location is specified it will default to the Primary Business Location of the company. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>
     */
    getSetupV1Servicegroups(req: operations.GetSetupV1ServicegroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicegroupsResponse>;
    /**
     * Get Service Group
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Service Group</b> object. A valid <b>serviceGroup id</b> is required. Find service group id's by using the <i>GET /setup/v1/serviceGroups</i> endpoint.</p>
     */
    getSetupV1ServicegroupsId(req: operations.GetSetupV1ServicegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicegroupsIdResponse>;
    /**
     * Create Service Group
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> a Service Group. If no locationId is specified in the body, the business location will default to the primary business location. Service groups are used to categorize services. Service groups are optional and only make sense if you have multiple services that will be easier read if categorized. Only the service group Type of 0 is supported by the API. It defaults to 0 if not supplied.</p>
     */
    postSetupV1Servicegroups(req: shared.ServiceGroupInputModel, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicegroupsResponse>;
    /**
     * Update Service Group
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> a Service Group object. A valid <b>serviceGroup id</b> is required. </p>
     */
    putSetupV1ServicegroupsId(req: operations.PutSetupV1ServicegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicegroupsIdResponse>;
    /**
     * Recover Service Group
     *
     * @remarks
     * <p>Use this endpoint to <b>Recover</b> a deleted Service Group. A valid <b>serviceGroup id</b> is required. </p>
     */
    putSetupV1ServicegroupsIdRecover(req: operations.PutSetupV1ServicegroupsIdRecoverRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicegroupsIdRecoverResponse>;
}
