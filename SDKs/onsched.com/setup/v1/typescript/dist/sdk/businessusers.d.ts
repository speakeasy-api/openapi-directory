import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BusinessUsers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete User
     *
     * @remarks
     * <p>Use this endpoint to permanently <b>Delete</b> a Business User. A valid <b>businessUser id</b> is required.</p>
     */
    deleteSetupV1BusinessusersId(req: operations.DeleteSetupV1BusinessusersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1BusinessusersIdResponse>;
    /**
     * List Users
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Business Users and their Roles</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getSetupV1Businessusers(req: operations.GetSetupV1BusinessusersRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1BusinessusersResponse>;
    /**
     * List User Permissions
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Business User Permissions by Role</b>. Results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getSetupV1BusinessusersPermissions(req: operations.GetSetupV1BusinessusersPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1BusinessusersPermissionsResponse>;
    /**
     * List User Companies
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Companies</b> associated with the business users email requested. A business user <b>email</b> address is required. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getSetupV1BusinessusersEmailCompanies(req: operations.GetSetupV1BusinessusersEmailCompaniesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1BusinessusersEmailCompaniesResponse>;
    /**
     * Get User
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Business User</b> object. A valid <b>businessUser id</b> is required. Find businessUser id's using the <i>GET /setup/v1/businessusers</i> endpoint.</p>
     */
    getSetupV1BusinessusersId(req: operations.GetSetupV1BusinessusersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1BusinessusersIdResponse>;
    /**
     * Create User
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> a Business User. If not specified, the business location defaults to the primary business location. </p>
     * <p>Required fields: <b>Name</b>, <b>Email</b> and <b>Role</b><b>Note:</b> If the businessUser is a bookable resource (bizresource) then a resourceId is required.</p>
     * <p>For role, use one of the values listed. <b>Business Roles Include: bizowner</b> (Business Owner), <b>bizadmin</b> (Business Administrator), <b>bizresource</b> (Business User - Bookable Resource).</p>
     * <p>The <b>sendRegistrationInvite</b> parameter is available to API consumers for their own use. It provides no added functionality in OnSched.</p>
     */
    postSetupV1Businessusers(req: shared.BusinessUserInputModel, config?: AxiosRequestConfig): Promise<operations.PostSetupV1BusinessusersResponse>;
    /**
     * Update User
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> a Business User. A valid <b>businessUser id</b> is required.</p>
     * <p>
     *   <b>Business Roles Include: bizowner</b> (Business Owner), <b>bizadmin</b> (Business Administrator), <b>bizresource</b> (Business User - Bookable Resource).</p>
     */
    putSetupV1BusinessusersId(req: operations.PutSetupV1BusinessusersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1BusinessusersIdResponse>;
}
