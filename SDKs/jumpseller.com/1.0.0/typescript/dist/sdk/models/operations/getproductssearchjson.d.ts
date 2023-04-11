import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Comma separated values of the fields to query for the Product
 */
export declare enum GetProductsSearchJsonFieldsEnum {
    Sku = "sku",
    Barcode = "barcode",
    Brand = "brand",
    Name = "name",
    Description = "description",
    Variants = "variants",
    OptionName = "option_name",
    CustomFields = "custom_fields",
    CustomFieldsSelects = "custom_fields_selects"
}
export declare class GetProductsSearchJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Comma separated values of the fields to query for the Product
     */
    fields?: GetProductsSearchJsonFieldsEnum;
    /**
     * Locale code of the translation
     */
    locale?: string;
    /**
     * API OAuth login.
     */
    login: string;
    /**
     * Text to query for the Product
     */
    query: string;
}
export declare class GetProductsSearchJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid query.
     */
    notFound?: shared.NotFound;
    /**
     * An array of products
     */
    products?: shared.Product[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
