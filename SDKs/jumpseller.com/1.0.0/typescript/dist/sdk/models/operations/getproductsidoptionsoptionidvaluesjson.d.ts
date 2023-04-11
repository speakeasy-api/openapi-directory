import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsIdOptionsOptionIdValuesJsonRequest extends SpeakeasyBase {
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
    /**
     * ID of the Product Option
     */
    optionId: number;
}
export declare class GetProductsIdOptionsOptionIdValuesJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product Not Found.
     */
    notFound?: shared.NotFound;
    /**
     * OK
     */
    productOptionValues?: shared.ProductOptionValue[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
