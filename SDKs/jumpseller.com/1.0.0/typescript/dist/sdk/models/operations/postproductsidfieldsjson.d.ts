import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostProductsIdFieldsJsonRequest extends SpeakeasyBase {
    /**
     * Product Custom Field parameters.
     */
    addProductCustomField: shared.AddProductCustomField;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Product
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostProductsIdFieldsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product Not Found.
     */
    notFound?: shared.NotFound;
    /**
     * OK
     */
    product?: shared.Product;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
