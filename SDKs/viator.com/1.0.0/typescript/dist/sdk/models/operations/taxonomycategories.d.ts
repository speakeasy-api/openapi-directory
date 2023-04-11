import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TaxonomyCategoriesRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    /**
     * **unique numeric identifier** of the destination to enquire about (optional)
     *
     * @remarks
     * - `destinationId` is returned by [/taxonomy/destinations](#operation/taxonomyDestinations)
     *
     */
    destId?: number;
}
export declare class TaxonomyCategories200ApplicationJSONDataSubcategories extends SpeakeasyBase {
    /**
     * **unique numeric identifier** of *this* product category
     */
    categoryId?: number;
    /**
     * **sort order** (suggested) of the subcategory within the category
     */
    sortorder?: number;
    /**
     * **URL-formatted name** of *this* product subcategory
     */
    subCategoryUrlName?: string;
    /**
     * **unique numeric identifier** of *this* product subcategory
     */
    subcategoryId?: number;
    /**
     * **natural-language name** of *this* product subcategory
     */
    subcategoryName?: string;
}
export declare class TaxonomyCategories200ApplicationJSONData extends SpeakeasyBase {
    /**
     * **natural-language name** of *this* product category
     */
    groupName?: string;
    /**
     * **URL-formatted name** of *this* product category
     */
    groupUrlName?: string;
    /**
     * **unique numeric identifier** for the category
     */
    id?: number;
    /**
     * **number** of products in this category in the destination specified by `destId`
     *
     * @remarks
     * - **note**: will be `null` if no `destId` is included in the query
     *
     */
    productCount?: number;
    /**
     * **array** of subcategory objects
     */
    subcategories?: TaxonomyCategories200ApplicationJSONDataSubcategories[];
    /**
     * **URL** for this category's thumbnail image, selected from the most popular product within the category
     *
     * @remarks
     * - **note:** will be `null` if no `destId` is included in the query
     *
     */
    thumbnailURL?: string;
}
/**
 * Success
 */
export declare class TaxonomyCategories200ApplicationJSON extends SpeakeasyBase {
    /**
     * **array** of category data objects
     */
    data?: TaxonomyCategories200ApplicationJSONData[];
    /**
     * **timestamp** of *this* response
     */
    dateStamp?: string;
    /**
     * **array** of error codes pertaining to *this* error
     *
     * @remarks
     * - See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes
     *
     */
    errorCodes?: string[];
    /**
     * **array** of error message strings
     */
    errorMessage?: any[];
    /**
     * **array** of error message strings in plain text
     */
    errorMessageText?: string;
    /**
     * **name** of *this* type of error
     */
    errorName?: string;
    /**
     * **reference number** of *this* error
     */
    errorReference?: string;
    /**
     * **code** specifying the type of error
     */
    errorType?: string;
    /**
     * ignore (Viator only)
     */
    extraInfo?: Record<string, any>;
    /**
     * ignore (Viator only)
     */
    extraObject?: Record<string, any>;
    /**
     * **boolean indicator** of *this* request's outcome
     *
     * @remarks
     * - `true`: the request was successful with no errors
     * - `false`: an error was encountered
     *
     */
    success?: boolean;
    /**
     * **number** of results available for *this* service
     *
     * @remarks
     *
     */
    totalCount?: number;
    /**
     * **unique numeric id** of the server that processed *this* request
     */
    vmid?: string;
}
export declare class TaxonomyCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    taxonomyCategories200ApplicationJSONObject?: TaxonomyCategories200ApplicationJSON;
}
