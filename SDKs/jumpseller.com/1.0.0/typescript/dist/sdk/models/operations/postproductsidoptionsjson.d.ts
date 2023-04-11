import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostProductsIdOptionsJsonRequest extends SpeakeasyBase {
    /**
     * Product Option parameters.
     */
    productOptionEdit: shared.ProductOptionEdit;
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
export declare class PostProductsIdOptionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    productOption?: shared.ProductOption;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
