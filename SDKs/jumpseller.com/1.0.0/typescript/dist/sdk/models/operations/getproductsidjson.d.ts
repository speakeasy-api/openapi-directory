import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * ID of the Product
     */
    id: number;
    /**
     * Locale code of the translation
     */
    locale?: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetProductsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product Not Found.
     */
    notFound?: shared.NotFound;
    /**
     * OK
     */
    product?: shared.Product;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
