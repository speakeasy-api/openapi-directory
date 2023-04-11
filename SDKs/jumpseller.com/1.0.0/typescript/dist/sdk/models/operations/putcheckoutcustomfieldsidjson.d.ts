import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCheckoutCustomFieldsIdJsonRequest extends SpeakeasyBase {
    /**
     * CheckoutCustomField parameters.
     */
    checkoutCustomFieldEdit: shared.CheckoutCustomFieldEdit;
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
export declare class PutCheckoutCustomFieldsIdJsonResponse extends SpeakeasyBase {
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
