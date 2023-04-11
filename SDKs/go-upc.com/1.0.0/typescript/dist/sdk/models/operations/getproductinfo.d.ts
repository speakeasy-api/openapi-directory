import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductInfoRequest extends SpeakeasyBase {
    code: string;
}
/**
 * The type of product code (UPC/EAN/ISBN).
 */
export declare enum GetProductInfo200ApplicationJSONCodeTypeEnum {
    Upc = "UPC",
    Ean = "EAN",
    Isbn = "ISBN"
}
/**
 * all matching product details.
 */
export declare class GetProductInfo200ApplicationJSONProduct extends SpeakeasyBase {
    /**
     * The brand of the product (if available).
     */
    brand?: string;
    /**
     * The category of the product (if available).
     */
    category?: string;
    /**
     * A description of the product (if available).
     */
    description?: string;
    /**
     * The EAN code of the product.
     */
    ean?: number;
    /**
     * The URL for the product image.
     */
    imageUrl?: string;
    /**
     * The name of the product.
     */
    name?: string;
    /**
     * The region of the product.
     */
    region?: string;
    /**
     * A list of additional item specifications (if available).
     */
    specs?: string[][];
    /**
     * The UPC code of the product.
     */
    upc?: number;
}
/**
 * The product corresponding to the provided `code`
 */
export declare class GetProductInfo200ApplicationJSON extends SpeakeasyBase {
    /**
     * The URL to the scannable barcode image.
     */
    barcodeUrl?: string;
    /**
     * The type of product code (UPC/EAN/ISBN).
     */
    codeType?: GetProductInfo200ApplicationJSONCodeTypeEnum;
    /**
     * all matching product details.
     */
    product?: GetProductInfo200ApplicationJSONProduct;
}
export declare class GetProductInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No product information was found for the given `code`.
     */
    error?: shared.ErrorT;
    /**
     * The product corresponding to the provided `code`
     */
    getProductInfo200ApplicationJSONObject?: GetProductInfo200ApplicationJSON;
}
