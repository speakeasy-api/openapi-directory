import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Discounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a discount
     *
     * @remarks
     * Creates a single discount entity. The location of the newly created discount will be available in the successful response as a HttpHeaders.LOCATION header
     */
    createDiscount(req: operations.CreateDiscountRequest, security: operations.CreateDiscountSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDiscountResponse>;
    /**
     * Delete a single discount
     */
    deleteDiscount(req: operations.DeleteDiscountRequest, security: operations.DeleteDiscountSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteDiscountResponse>;
    /**
     * Retrieve all discounts
     */
    getAllDiscounts(req: operations.GetAllDiscountsRequest, security: operations.GetAllDiscountsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllDiscountsResponse>;
    /**
     * Retrieve a single discount
     *
     * @remarks
     * Get the full discount with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full discount is returned: otherwise a 304 not modified will be returned with an empty body.
     */
    getDiscount(req: operations.GetDiscountRequest, security: operations.GetDiscountSecurity, config?: AxiosRequestConfig): Promise<operations.GetDiscountResponse>;
    /**
     * Update a single discount
     *
     * @remarks
     * Updates a discount entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the discount is updated: otherwise a 412 precondition failed will be returned with an empty body.
     */
    updateDiscount(req: operations.UpdateDiscountRequest, security: operations.UpdateDiscountSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateDiscountResponse>;
}
