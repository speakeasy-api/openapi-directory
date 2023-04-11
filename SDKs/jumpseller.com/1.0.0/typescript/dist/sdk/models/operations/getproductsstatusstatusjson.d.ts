import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the Product used as filter
 */
export declare enum GetProductsStatusStatusJsonStatusEnum {
    Available = "available",
    NotAvailable = "not-available",
    Disabled = "disabled"
}
export declare class GetProductsStatusStatusJsonRequest extends SpeakeasyBase {
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
    /**
     * Status of the Product used as filter
     */
    status: GetProductsStatusStatusJsonStatusEnum;
}
export declare class GetProductsStatusStatusJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    products?: shared.Product[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Status Invalid.
     */
    statusInvalid?: shared.StatusInvalid;
}
