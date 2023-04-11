import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsIdDigitalProductsJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * ID of the Product
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetProductsIdDigitalProductsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    digitalProducts?: shared.DigitalProduct[];
    /**
     * Product Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
