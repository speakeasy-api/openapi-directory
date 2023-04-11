import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutProductsIdJsonRequest extends SpeakeasyBase {
    /**
     * Product parameters to change
     */
    productEdit: shared.ProductEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Product
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
export declare class PutProductsIdJsonResponse extends SpeakeasyBase {
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
