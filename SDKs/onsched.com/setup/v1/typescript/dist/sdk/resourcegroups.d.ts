import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
     * Delete Resource Group
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete</b> a resourceGroup object. A valid <b>resourceGroup id</b> is required. The resource group is not permanently deleted and can be recovered by using the <i>PUT  /setup /v1 /resourcegroups /{id} /recover</i> endpoint.</p>
     */
    deleteSetupV1ResourcegroupsId(req: operations.DeleteSetupV1ResourcegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ResourcegroupsIdResponse>;
    /**
     * List Resource Groups
     *
     * @remarks
     * <p>Use this endpoint to <b>List Resource Groups</b> for the specified location. If not specified, the business location defaults to the primary business location. <b>Name</b> is a required field.</p>
     * <p>Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the query parameters to filter the results further.</p>
     */
    getSetupV1Resourcegroups(req: operations.GetSetupV1ResourcegroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcegroupsResponse>;
    /**
     * Get Resource Group
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Resource Group</b> object. A valid <b>resourceGroup id</b> is required. Find resourceGroup id's by using the <i>GET setup/v1/resourceGroups</i> endpoint.</p>
     */
    getSetupV1ResourcegroupsId(req: operations.GetSetupV1ResourcegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcegroupsIdResponse>;
    /**
     * Create Resource Group
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> a resourceGroup object. Resource groups are used to categorize your resources.</p>
     */
    postSetupV1Resourcegroups(req: shared.ResourceGroupInputModel, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcegroupsResponse>;
    /**
     * Update Resource Group
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> a resourceGroup object. A valid <b>resourceGroup id</b> is required. </p>
     */
    putSetupV1ResourcegroupsId(req: operations.PutSetupV1ResourcegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcegroupsIdResponse>;
    /**
     * Recover Resource Group
     *
     * @remarks
     * <p>Use this endpoint to <b>Recover</b> a deleted resourceGroup object. A valid <b>resourceGroup id</b> is required.</p>
     */
    putSetupV1ResourcegroupsIdRecover(req: operations.PutSetupV1ResourcegroupsIdRecoverRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcegroupsIdRecoverResponse>;
}
