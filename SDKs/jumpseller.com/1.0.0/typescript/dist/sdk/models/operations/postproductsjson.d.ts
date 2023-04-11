import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostProductsJsonRequest extends SpeakeasyBase {
    /**
     * Product parameters.
     */
    productEdit: shared.ProductEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Locale code of the translation
     */
    locale?: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostProductsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    product?: shared.Product;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
