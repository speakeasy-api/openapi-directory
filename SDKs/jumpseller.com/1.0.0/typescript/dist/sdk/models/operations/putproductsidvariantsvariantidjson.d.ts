import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutProductsIdVariantsVariantIdJsonRequest extends SpeakeasyBase {
    /**
     * Product Variant parameters to change
     */
    variantEdit: shared.VariantEdit;
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
     * Id of the Product Variant
     */
    variantId: number;
}
export declare class PutProductsIdVariantsVariantIdJsonResponse extends SpeakeasyBase {
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
    variant?: shared.Variant;
}
