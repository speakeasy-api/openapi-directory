import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Workgroup {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List client workgroups
     *
     * @remarks
     * List client workgroups
     */
    getClientWorkgroupList(req: operations.GetClientWorkgroupListRequest, config?: AxiosRequestConfig): Promise<operations.GetClientWorkgroupListResponse>;
    /**
     * Get a specific client workgroups
     *
     * @remarks
     * Get a specific client workgroups
     */
    getSpecificClientWorkgroup(req: operations.GetSpecificClientWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecificClientWorkgroupResponse>;
    /**
     * Get the specific supplier of My Group
     *
     * @remarks
     * Get the specific supplier of My Group
     */
    getSupplierWorkgroupDetail(req: operations.GetSupplierWorkgroupDetailRequest, config?: AxiosRequestConfig): Promise<operations.GetSupplierWorkgroupDetailResponse>;
    /**
     * List supplier workgroups
     *
     * @remarks
     * List supplier workgroups
     */
    getSupplierWorkgroupList(req: operations.GetSupplierWorkgroupListRequest, config?: AxiosRequestConfig): Promise<operations.GetSupplierWorkgroupListResponse>;
    /**
     * Detail workgroup info
     *
     * @remarks
     * Detail workgroup info
     */
    getWorkgroupDetail(req: operations.GetWorkgroupDetailRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkgroupDetailResponse>;
    /**
     * List the workgroups
     *
     * @remarks
     * List the workgroups
     */
    getWorkgroupList(req: operations.GetWorkgroupListRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkgroupListResponse>;
    /**
     * Update a specific Workgroup
     *
     * @remarks
     * Update a specific Workgroup
     */
    putWorkgroupJson(req: operations.PutWorkgroupJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutWorkgroupJsonResponse>;
    /**
     * Update a specific Workgroup
     *
     * @remarks
     * Update a specific Workgroup
     */
    putWorkgroupRaw(req: operations.PutWorkgroupRawRequest, config?: AxiosRequestConfig): Promise<operations.PutWorkgroupRawResponse>;
}
