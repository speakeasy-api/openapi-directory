import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * List restriction
     */
    limit?: number;
    /**
     * Locale code of the translation
     */
    locale?: string;
    /**
     * API OAuth login.
     */
    login: string;
    /**
     * List page
     */
    page?: number;
}
export declare class GetProductsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    products?: shared.Product[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
