import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutProductsProductIdFieldsFieldIdJsonRequest extends SpeakeasyBase {
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
export declare class PutProductsProductIdFieldsFieldIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product or Custom Field Value Not Found.
     */
    notFound?: shared.NotFound;
    /**
     * OK
     */
    productCustomField?: shared.ProductCustomField;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
