import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GuaranteedOrders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
     */
    displayvideoGuaranteedOrdersCreate(req: operations.DisplayvideoGuaranteedOrdersCreateRequest, security: operations.DisplayvideoGuaranteedOrdersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoGuaranteedOrdersCreateResponse>;
    /**
     * Edits read advertisers of a guaranteed order.
     */
    displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors(req: operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest, security: operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse>;
    /**
     * Gets a guaranteed order.
     */
    displayvideoGuaranteedOrdersGet(req: operations.DisplayvideoGuaranteedOrdersGetRequest, security: operations.DisplayvideoGuaranteedOrdersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoGuaranteedOrdersGetResponse>;
    /**
     * Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     */
    displayvideoGuaranteedOrdersList(req: operations.DisplayvideoGuaranteedOrdersListRequest, security: operations.DisplayvideoGuaranteedOrdersListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoGuaranteedOrdersListResponse>;
    /**
     * Updates an existing guaranteed order. Returns the updated guaranteed order if successful.
     */
    displayvideoGuaranteedOrdersPatch(req: operations.DisplayvideoGuaranteedOrdersPatchRequest, security: operations.DisplayvideoGuaranteedOrdersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoGuaranteedOrdersPatchResponse>;
}
