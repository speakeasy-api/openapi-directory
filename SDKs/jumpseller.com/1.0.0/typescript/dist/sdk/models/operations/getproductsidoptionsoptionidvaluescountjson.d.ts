import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsIdOptionsOptionIdValuesCountJsonRequest extends SpeakeasyBase {
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
export declare class GetProductsIdOptionsOptionIdValuesCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    count?: shared.Count;
    /**
     * Product Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
