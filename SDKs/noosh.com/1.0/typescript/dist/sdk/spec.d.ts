import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Spec {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get product type of workgroup level
     *
     * @remarks
     * Get product type of workgroup level
     */
    getProductTypeListOfWorkgroup(req: operations.GetProductTypeListOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetProductTypeListOfWorkgroupResponse>;
    /**
     * List a specific spec of project Level
     *
     * @remarks
     * List a specific spec of project Level
     */
    getSpec(req: operations.GetSpecRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecResponse>;
    /**
     * List specs of project Level
     *
     * @remarks
     * List specs of project Level
     */
    getSpecList(req: operations.GetSpecListRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecListResponse>;
    /**
     * Get product type of spec level by workgroupId
     *
     * @remarks
     * Get product type of spec level by workgroupId
     */
    getSpecProductTypeListOfWorkgroup(req: operations.GetSpecProductTypeListOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecProductTypeListOfWorkgroupResponse>;
    /**
     * Get Spec Type Fields
     *
     * @remarks
     * Get Spec Type Fields
     */
    getSpecTypeFields(req: operations.GetSpecTypeFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecTypeFieldsResponse>;
    /**
     * List a specific spec of project Level
     *
     * @remarks
     * List a specific spec of project Level
     */
    getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId(req: operations.GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse>;
    /**
     * Get Spec Type Fields
     *
     * @remarks
     * Get Spec Type Fields
     */
    getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields(req: operations.GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse>;
    /**
     * Register product types for spec types
     *
     * @remarks
     * Register product types for spec types
     */
    postSpecProductTypeListOfWorkgroupJson(req: operations.PostSpecProductTypeListOfWorkgroupJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostSpecProductTypeListOfWorkgroupJsonResponse>;
    /**
     * Register product types for spec types
     *
     * @remarks
     * Register product types for spec types
     */
    postSpecProductTypeListOfWorkgroupRaw(req: operations.PostSpecProductTypeListOfWorkgroupRawRequest, config?: AxiosRequestConfig): Promise<operations.PostSpecProductTypeListOfWorkgroupRawResponse>;
    /**
     * Create a Spec
     *
     * @remarks
     * Create a Spec
     */
    postSpecJson(req: operations.PostSpecJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostSpecJsonResponse>;
    /**
     * Create a Spec
     *
     * @remarks
     * Create a Spec
     */
    postSpecRaw(req: operations.PostSpecRawRequest, config?: AxiosRequestConfig): Promise<operations.PostSpecRawResponse>;
    /**
     * Update a specific Spec
     *
     * @remarks
     * Update a specific Spec
     */
    putSpecJson(req: operations.PutSpecJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutSpecJsonResponse>;
    /**
     * Update a specific Spec
     *
     * @remarks
     * Update a specific Spec
     */
    putSpecRaw(req: operations.PutSpecRawRequest, config?: AxiosRequestConfig): Promise<operations.PutSpecRawResponse>;
    /**
     * Update a specific Spec
     *
     * @remarks
     * Update a specific Spec
     */
    putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJson(req: operations.PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJsonResponse>;
    /**
     * Update a specific Spec
     *
     * @remarks
     * Update a specific Spec
     */
    putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRaw(req: operations.PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRawRequest, config?: AxiosRequestConfig): Promise<operations.PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRawResponse>;
}
