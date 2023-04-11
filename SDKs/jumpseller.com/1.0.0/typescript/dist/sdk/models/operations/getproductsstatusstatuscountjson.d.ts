import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the Product used as filter
 */
export declare enum GetProductsStatusStatusCountJsonStatusEnum {
    Available = "available",
    NotAvailable = "not-available",
    Disabled = "disabled"
}
export declare class GetProductsStatusStatusCountJsonRequest extends SpeakeasyBase {
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
    status: GetProductsStatusStatusCountJsonStatusEnum;
}
export declare class GetProductsStatusStatusCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    count?: shared.Count;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Status Invalid.
     */
    statusInvalid?: shared.StatusInvalid;
}
