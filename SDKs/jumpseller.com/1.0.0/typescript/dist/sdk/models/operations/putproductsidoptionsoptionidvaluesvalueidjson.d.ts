import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutProductsIdOptionsOptionIdValuesValueIdJsonRequest extends SpeakeasyBase {
    /**
     * Product option value parameters to change
     */
    productOptionValueEdit: shared.ProductOptionValueEdit;
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
    /**
     * Id of the Product Option Value
     */
    valueId: number;
}
export declare class PutProductsIdOptionsOptionIdValuesValueIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product Not Found.
     */
    notFound?: shared.NotFound;
    /**
     * OK
     */
    productOptionValue?: shared.ProductOptionValue;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
