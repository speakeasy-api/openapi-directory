import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostProductsIdImagesJsonRequest extends SpeakeasyBase {
    /**
     * Product Image parameters.
     */
    imageEdit: shared.ImageEdit;
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
export declare class PostProductsIdImagesJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    image?: shared.Image;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
