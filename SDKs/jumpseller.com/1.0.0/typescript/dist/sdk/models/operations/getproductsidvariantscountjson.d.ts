import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsIdVariantsCountJsonRequest extends SpeakeasyBase {
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
export declare class GetProductsIdVariantsCountJsonResponse extends SpeakeasyBase {
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
