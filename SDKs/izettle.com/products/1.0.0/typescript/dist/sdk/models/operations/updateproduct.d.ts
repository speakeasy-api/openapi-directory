import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateProductSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class UpdateProductRequest extends SpeakeasyBase {
    fullProductUpdateRequest: shared.FullProductUpdateRequest;
    ifMatch?: string;
    organizationUuid: string;
    productUuid: string;
}
export declare class UpdateProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid request body
     */
    errorResponse?: shared.ErrorResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
