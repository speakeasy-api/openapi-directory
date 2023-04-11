import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCheckoutCustomFieldsJsonRequest extends SpeakeasyBase {
    /**
     * CheckoutCustomField parameters.
     */
    checkoutCustomFieldEdit: shared.CheckoutCustomFieldEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostCheckoutCustomFieldsJsonResponse extends SpeakeasyBase {
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
