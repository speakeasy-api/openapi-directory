import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsIdDigitalProductsDigitalProductIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Product DigitalProduct
     */
    digitalProductId: number;
    /**
     * Id of the Product
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetProductsIdDigitalProductsDigitalProductIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    digitalProduct?: shared.DigitalProduct;
    /**
     * Product Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
