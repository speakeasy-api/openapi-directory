import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsCategoryCategoryIdCountJsonRequest extends SpeakeasyBase {
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
export declare class GetProductsCategoryCategoryIdCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    count?: shared.Count;
    /**
     * Category Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
