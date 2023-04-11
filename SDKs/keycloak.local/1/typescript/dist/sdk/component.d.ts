import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Component {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    deleteRealmComponentsId(req: operations.DeleteRealmComponentsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmComponentsIdResponse>;
    getRealmComponents(req: operations.GetRealmComponentsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmComponentsResponse>;
    getRealmComponentsId(req: operations.GetRealmComponentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmComponentsIdResponse>;
    /**
     * List of subcomponent types that are available to configure for a particular parent component.
     */
    getRealmComponentsIdSubComponentTypes(req: operations.GetRealmComponentsIdSubComponentTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmComponentsIdSubComponentTypesResponse>;
    postRealmComponents(req: operations.PostRealmComponentsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmComponentsResponse>;
    putRealmComponentsId(req: operations.PutRealmComponentsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmComponentsIdResponse>;
}
