import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteProductsIdOptionsOptionIdValuesValueIdJsonRequest extends SpeakeasyBase {
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
     * ID of the Product Option Value
     */
    valueId: number;
}
export declare class DeleteProductsIdOptionsOptionIdValuesValueIdJsonResponse extends SpeakeasyBase {
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
    deleteProductsIdOptionsOptionIdValuesValueIdJSON200ApplicationJSONString?: string;
}
