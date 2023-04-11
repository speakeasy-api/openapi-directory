import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.
     */
    orgpolicyOrganizationsCustomConstraintsCreate(req: operations.OrgpolicyOrganizationsCustomConstraintsCreateRequest, security: operations.OrgpolicyOrganizationsCustomConstraintsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.OrgpolicyOrganizationsCustomConstraintsCreateResponse>;
    /**
     * Retrieves all of the custom constraints that exist on a particular organization resource.
     */
    orgpolicyOrganizationsCustomConstraintsList(req: operations.OrgpolicyOrganizationsCustomConstraintsListRequest, security: operations.OrgpolicyOrganizationsCustomConstraintsListSecurity, config?: AxiosRequestConfig): Promise<operations.OrgpolicyOrganizationsCustomConstraintsListResponse>;
}
