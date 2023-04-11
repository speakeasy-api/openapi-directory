import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCheckoutCustomFieldsIdJsonRequest extends SpeakeasyBase {
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
export declare class DeleteCheckoutCustomFieldsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * CheckoutCustomField Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    deleteCheckoutCustomFieldsIdJSON200ApplicationJSONString?: string;
}
