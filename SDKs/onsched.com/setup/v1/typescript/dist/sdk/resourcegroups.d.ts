import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ResourceGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSetupV1ResourcegroupsId - Deletes a resource group object.
     *
     * Use this endpoint to delete a resource group. The resource group is not permanently deleted and can be recovered.
    **/
    deleteSetupV1ResourcegroupsId(req: operations.DeleteSetupV1ResourcegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ResourcegroupsIdResponse>;
    /**
     * getSetupV1Resourcegroups - Returns a list of resourcegroups.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Resourcegroups(req: operations.GetSetupV1ResourcegroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcegroupsResponse>;
    /**
     * getSetupV1ResourcegroupsId - Returns a resourceGroup object.
     *
     * The result returned is a single resourceGroup object. An id is required to find the service. Find resourceGroup id's using the GET setup/v1/resourceGroups end point
    **/
    getSetupV1ResourcegroupsId(req: operations.GetSetupV1ResourcegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcegroupsIdResponse>;
    /**
     * postSetupV1Resourcegroups - Creates a new resource group object.
     *
     * Use this endpoint to create a new resource. If not specified the business location id defaults to the first location in the company.
     * Email Address and a Name are required for creating a new resource.
    **/
    postSetupV1Resourcegroups(req: operations.PostSetupV1ResourcegroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcegroupsResponse>;
    /**
     * putSetupV1ResourcegroupsId - Updates a resource group object.
     *
     * Use this endpoint to update a resource group.
    **/
    putSetupV1ResourcegroupsId(req: operations.PutSetupV1ResourcegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcegroupsIdResponse>;
    /**
     * putSetupV1ResourcegroupsIdRecover - Recovers a resource group object.
     *
     * Use this endpoint to recover a deleted resource group.
    **/
    putSetupV1ResourcegroupsIdRecover(req: operations.PutSetupV1ResourcegroupsIdRecoverRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcegroupsIdRecoverResponse>;
}
