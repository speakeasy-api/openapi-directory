import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TagBindings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a TagBinding between a TagValue and a Google Cloud resource.
     */
    cloudresourcemanagerTagBindingsCreate(req: operations.CloudresourcemanagerTagBindingsCreateRequest, security: operations.CloudresourcemanagerTagBindingsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagBindingsCreateResponse>;
    /**
     * Lists the TagBindings for the given Google Cloud resource, as specified with `parent`. NOTE: The `parent` field is expected to be a full resource name: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    cloudresourcemanagerTagBindingsList(req: operations.CloudresourcemanagerTagBindingsListRequest, security: operations.CloudresourcemanagerTagBindingsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagBindingsListResponse>;
}
