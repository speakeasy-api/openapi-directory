import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteProductsProductIdFieldsFieldIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Custom Field Value.
     */
    fieldId: number;
    /**
     * API OAuth login.
     */
    login: string;
    /**
     * Id of the Product.
     */
    productId: number;
}
export declare class DeleteProductsProductIdFieldsFieldIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    messageObject?: shared.MessageObject;
    /**
     * Product or Custom Field Value Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
