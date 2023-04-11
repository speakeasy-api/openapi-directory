import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsAfterIdJsonRequest extends SpeakeasyBase {
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
export declare class GetProductsAfterIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product Not Found.
     */
    notFound?: shared.NotFound;
    /**
     * OK
     */
    products?: shared.Product[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
