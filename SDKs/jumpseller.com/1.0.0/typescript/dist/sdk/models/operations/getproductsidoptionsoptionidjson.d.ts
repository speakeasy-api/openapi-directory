import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsIdOptionsOptionIdJsonRequest extends SpeakeasyBase {
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
    /**
     * Id of the Product Option
     */
    optionId: number;
}
export declare class GetProductsIdOptionsOptionIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product Not Found.
     */
    notFound?: shared.NotFound;
    /**
     * OK
     */
    productOption?: shared.ProductOption;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
