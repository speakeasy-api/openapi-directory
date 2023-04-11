import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCheckoutCustomFieldsJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * List restriction
     */
    limit?: number;
    /**
     * API OAuth login.
     */
    login: string;
    /**
     * List page
     */
    page?: number;
}
export declare class GetCheckoutCustomFieldsJsonResponse extends SpeakeasyBase {
    /**
     * An array of Checkout Custom Fields
     */
    checkoutCustomFields?: shared.CheckoutCustomField[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
