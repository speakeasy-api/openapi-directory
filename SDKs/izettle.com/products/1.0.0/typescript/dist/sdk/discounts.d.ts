import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Discounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createDiscount - Creates a discount
     *
     * Creates a single discount entity. The location of the newly created discount will be available in the successful response as a HttpHeaders.LOCATION header
    **/
    createDiscount(req: operations.CreateDiscountRequest, config?: AxiosRequestConfig): Promise<operations.CreateDiscountResponse>;
    /**
     * deleteDiscount - Deletes a single discount
    **/
    deleteDiscount(req: operations.DeleteDiscountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDiscountResponse>;
    /**
     * getAllDiscounts - Retrieves all discounts
    **/
    getAllDiscounts(req: operations.GetAllDiscountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllDiscountsResponse>;
    /**
     * getDiscount - Retrieves a single discount
     *
     * Get the full discount with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full discount is returned: otherwise a 304 not modified will be returned with an empty body.
    **/
    getDiscount(req: operations.GetDiscountRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscountResponse>;
    /**
     * updateDiscount - Updates a single discount
     *
     * Updates a discount entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the discount is updated: otherwise a 412 precondition failed will be returned with an empty body.
    **/
    updateDiscount(req: operations.UpdateDiscountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDiscountResponse>;
}
