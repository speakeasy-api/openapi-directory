import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostProductsIdOptionsOptionIdValuesJsonRequest extends SpeakeasyBase {
    /**
     * Product Option Value parameters.
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
}
export declare class PostProductsIdOptionsOptionIdValuesJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    productOptionValue?: shared.ProductOptionValue;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
