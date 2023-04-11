import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsCategoryCategoryIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Category ID of the Product used as filter
     */
    categoryId: number;
    /**
     * Locale code of the translation
     */
    locale?: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetProductsCategoryCategoryIdJsonResponse extends SpeakeasyBase {
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
