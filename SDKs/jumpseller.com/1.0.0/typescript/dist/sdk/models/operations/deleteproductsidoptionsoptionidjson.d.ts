import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteProductsIdOptionsOptionIdJsonRequest extends SpeakeasyBase {
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
export declare class DeleteProductsIdOptionsOptionIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    deleteProductsIdOptionsOptionIdJSON200ApplicationJSONString?: string;
}
