import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCheckoutCustomFieldsIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the CheckoutCustomField
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetCheckoutCustomFieldsIdJsonResponse extends SpeakeasyBase {
    /**
     * OK
     */
    checkoutCustomField?: shared.CheckoutCustomField;
    contentType: string;
    /**
     * CheckoutCustomField Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
