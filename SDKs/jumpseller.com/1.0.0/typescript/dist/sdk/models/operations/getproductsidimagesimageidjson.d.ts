import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsIdImagesImageIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Product
     */
    id: number;
    /**
     * Id of the Product Image
     */
    imageId: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetProductsIdImagesImageIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    image?: shared.Image;
    /**
     * Product Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
