import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostProductsIdDigitalProductsJsonRequest extends SpeakeasyBase {
    /**
     * Product DigitalProduct parameters.
     */
    digitalProductEdit: shared.DigitalProductEdit;
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
export declare class PostProductsIdDigitalProductsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    digitalProduct?: shared.DigitalProduct;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
